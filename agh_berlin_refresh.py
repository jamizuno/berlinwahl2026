import csv
import datetime as dt
import json
import sys
import time
import urllib.parse
import urllib.request


BASE_URL = "https://www.abgeordnetenwatch.de/api/v2"
USER_AGENT = "berlinwahl2026-refresh/1.0"
PAGER_LIMIT = 100
TIMEOUT = 15
RETRIES = 2
SLEEP_BETWEEN_RETRIES = 1

DATA_SOURCES_DIR = r"C:\Users\jermo\Documents\BERLINMAP\berlinwahl2026\data-sources"
FULL_OUT = DATA_SOURCES_DIR + r"\AGH_2025_by_wahlkreis_full.csv"
TRUTH_OUT = DATA_SOURCES_DIR + r"\AGH_2025_by_wahlkreis_truth.csv"


def request_json(path, params=None):
    if path.startswith("http"):
        url = path
    else:
        url = BASE_URL + path
    if params:
        query = urllib.parse.urlencode(params, doseq=True)
        url = f"{url}?{query}"

    last_err = None
    for attempt in range(1, RETRIES + 1):
        try:
            req = urllib.request.Request(
                url,
                headers={
                    "Accept": "application/json",
                    "User-Agent": USER_AGENT,
                },
            )
            with urllib.request.urlopen(req, timeout=TIMEOUT) as resp:
                return json.load(resp)
        except Exception as err:
            last_err = err
            if attempt < RETRIES:
                time.sleep(SLEEP_BETWEEN_RETRIES * attempt)
            else:
                raise
    raise last_err


def safe_request_json(path, params=None, label=""):
    try:
        return request_json(path, params)
    except Exception as err:
        target = f"{label} ({path})" if label else path
        print(f"WARNING: Failed to fetch {target}: {err}")
        return {"data": {}}


def fetch_paginated(path, params=None):
    page = 0
    while True:
        page_params = dict(params or {})
        page_params["pager_limit"] = PAGER_LIMIT
        page_params["page"] = page
        payload = request_json(path, page_params)
        rows = payload.get("data", [])
        for row in rows:
            yield row
        if len(rows) < PAGER_LIMIT:
            break
        page += 1


def parse_date(value):
    if not value:
        return None
    try:
        return dt.date.fromisoformat(value)
    except Exception:
        return None


def is_period_active(period, today):
    start = parse_date(period.get("start_date_period"))
    end = parse_date(period.get("end_date_period"))
    if start and today < start:
        return False
    if end and today > end:
        return False
    return True


def choose_current_period(parliament, periods, today):
    current_project = parliament.get("current_project") or {}
    current_id = current_project.get("id")
    if current_id:
        match = next((p for p in periods if p.get("id") == current_id), None)
        if match and match.get("type") == "legislature":
            return match

    legislature_periods = [p for p in periods if p.get("type") == "legislature"]
    active = [p for p in legislature_periods if is_period_active(p, today)]
    if active:
        return sorted(active, key=lambda p: p.get("start_date_period") or "", reverse=True)[0]
    if legislature_periods:
        return sorted(legislature_periods, key=lambda p: p.get("start_date_period") or "", reverse=True)[0]
    return None


def extract_awk(label):
    if not label:
        return ""
    label = str(label).strip()
    if len(label) >= 4 and label[:4].isdigit():
        return label[:4]
    return ""


def extract_wahlkreis(label):
    if not label:
        return ""
    label = str(label)
    if " - " in label:
        label = label.split(" - ", 1)[1]
    if " (" in label:
        label = label.split(" (", 1)[0]
    return label.strip()


def resolve_fraction_label(memberships, today):
    if not memberships:
        return ""
    def to_date(value):
        return parse_date(value) if value else None
    active = []
    for m in memberships:
        start = to_date(m.get("valid_from"))
        end = to_date(m.get("valid_until"))
        if start and today < start:
            continue
        if end and today > end:
            continue
        active.append(m)
    pool = active if active else memberships
    pool_sorted = sorted(pool, key=lambda m: m.get("valid_from") or "", reverse=True)
    fraction = pool_sorted[0].get("fraction") or {}
    return fraction.get("label") or ""


def build_full_name(first_name, last_name, label):
    if first_name or last_name:
        return " ".join([p for p in [first_name, last_name] if p])
    return label or ""


def normalize_party_short_name(party_label, short_name):
    return short_name or party_label or ""


def is_active_mandate(item, today):
    if item.get("type") != "mandate":
        return False
    start = parse_date(item.get("start_date"))
    end = parse_date(item.get("end_date"))
    if start and today < start:
        return False
    if end and today > end:
        return False
    return True


def collect_committee_info(candidacy_id):
    if not candidacy_id:
        return [], []
    payload = safe_request_json(
        "/committee-memberships",
        {"candidacy_mandate": candidacy_id, "pager_limit": 200},
        label="committee-memberships"
    )
    rows = payload.get("data") or []
    committees = []
    spokesperson = []
    for row in rows:
        committee = row.get("committee") or {}
        committee_label = (committee.get("label") or "").strip()
        if committee_label:
            committees.append(committee_label)
        role = (row.get("committee_role") or "").lower()
        additional = row.get("committee_roles_additional")
        additional_text = ""
        if isinstance(additional, list):
            additional_text = " ".join([str(a) for a in additional])
        elif additional:
            additional_text = str(additional)
        additional_text = additional_text.lower()
        if role == "spokesperson" or "spokesperson" in additional_text:
            if committee_label:
                spokesperson.append(committee_label)
    committees = sorted(set([c for c in committees if c]))
    spokesperson = sorted(set([c for c in spokesperson if c]))
    return committees, spokesperson


def join_list(values):
    if not values:
        return ""
    return " | ".join(values)


def main():
    today = dt.date.today()

    parliaments = list(fetch_paginated("/parliaments"))
    berlin = next(
        (p for p in parliaments if p.get("label") == "Berlin" or "Abgeordnetenhaus Berlin" in (p.get("label_external_long") or "")),
        None,
    )
    if not berlin:
        print("ERROR: Berlin parliament not found.")
        sys.exit(1)
    print(f"Selected parliament: {berlin.get('label')} (id={berlin.get('id')})")

    periods = list(fetch_paginated("/parliament-periods", {"parliament": berlin.get("id")}))
    current_period = choose_current_period(berlin, periods, today)
    if not current_period:
        print("ERROR: No current Berlin parliament period found.")
        sys.exit(1)
    print(f"Selected parliament period: {current_period.get('label')} (id={current_period.get('id')})")

    mandates = list(fetch_paginated("/candidacies-mandates", {"parliament_period": current_period.get("id")}))
    print(f"Total mandate rows fetched: {len(mandates)}")

    active = [m for m in mandates if is_active_mandate(m, today)]
    print(f"Rows retained as active mandates: {len(active)}")

    politician_cache = {}
    party_cache = {}
    constituency_cache = {}

    full_rows = []
    truth_rows = []
    missing_awk = 0
    committee_cache = {}

    for idx, item in enumerate(active, start=1):
        politician_ref = item.get("politician") or {}
        politician_id = politician_ref.get("id")
        politician = politician_cache.get(politician_id)
        if politician_id and politician is None:
            politician = safe_request_json(f"/politicians/{politician_id}", label="politician").get("data", {})
            politician_cache[politician_id] = politician
        if idx % 25 == 0:
            print(f"Processed {idx}/{len(active)} mandates...")

        party = (politician or {}).get("party") or {}
        party_id = party.get("id")
        party_details = party_cache.get(party_id)
        if party_id and party_details is None:
            party_details = safe_request_json(f"/parties/{party_id}", label="party").get("data", {})
            party_cache[party_id] = party_details

        electoral_data = item.get("electoral_data") or {}
        constituency = electoral_data.get("constituency") or {}
        electoral_list = electoral_data.get("electoral_list") or {}

        constituency_id = constituency.get("id")
        constituency_details = None
        if constituency_id:
            constituency_details = constituency_cache.get(constituency_id)
            if constituency_details is None:
                constituency_details = safe_request_json(f"/constituencies/{constituency_id}", label="constituency").get("data", {})
                constituency_cache[constituency_id] = constituency_details

        constituency_label = constituency.get("label") or ""
        constituency_number = constituency_details.get("number") if constituency_details else None
        awk = str(constituency_number).zfill(4) if constituency_number else extract_awk(constituency_label)
        wahlkreis = (constituency_details.get("name") if constituency_details else "") or extract_wahlkreis(constituency_label)

        full_name = build_full_name(
            politician.get("first_name") if politician else "",
            politician.get("last_name") if politician else "",
            politician_ref.get("label"),
        )

        party_short = normalize_party_short_name(
            party_details.get("label") if party_details else party.get("label"),
            party_details.get("short_name") if party_details else "",
        )

        mandate_type = electoral_data.get("mandate_won") or item.get("type") or ""

        committees = []
        spokespersons = []
        if item.get("id") in committee_cache:
            committees, spokespersons = committee_cache[item.get("id")]
        else:
            committees, spokespersons = collect_committee_info(item.get("id"))
            committee_cache[item.get("id")] = (committees, spokespersons)

        full_rows.append({
            "parliament_id": berlin.get("id"),
            "parliament_label": berlin.get("label"),
            "parliament_period_id": current_period.get("id"),
            "parliament_period_label": current_period.get("label"),
            "mandate_id": item.get("id"),
            "mandate_label": item.get("label"),
            "politician_id": politician_id or "",
            "first_name": politician.get("first_name") if politician else "",
            "last_name": politician.get("last_name") if politician else "",
            "full_name": full_name,
            "academic_title": politician.get("field_title") if politician else "",
            "sex": politician.get("sex") if politician else "",
            "year_of_birth": politician.get("year_of_birth") if politician else "",
            "party_id": party_id or "",
            "party_name": party_details.get("label") if party_details else party.get("label", ""),
            "party_short_name": party_short,
            "faction": resolve_fraction_label(item.get("fraction_membership") or [], today),
            "electoral_district_id": constituency_id or "",
            "electoral_district_label": constituency_details.get("label") if constituency_details else constituency_label,
            "electoral_list": electoral_list.get("label") or "",
            "list_position": electoral_data.get("list_position") or "",
            "mandate_type": mandate_type,
            "info": item.get("info") or "",
            "start_date": item.get("start_date") or "",
            "end_date": item.get("end_date") or "",
            "active_now": True,
            "politician_url": politician_ref.get("abgeordnetenwatch_url") or politician.get("abgeordnetenwatch_url") if politician else "",
            "mandate_api_path": item.get("api_url") or "",
            "politician_api_path": politician_ref.get("api_url") or politician.get("api_url") if politician else "",
            "abgeordnetenwatch_url": politician_ref.get("abgeordnetenwatch_url") or "",
            "wikidata_id": politician.get("qid_wikidata") if politician else "",
        })

        if not awk:
            missing_awk += 1
        truth_rows.append({
            "AWK": awk,
            "Wahlkreis": wahlkreis,
            "MdA_2025": full_name,
            "party_short_name": party_short,
            "politician_id": politician_id or "",
            "mandate_id": item.get("id"),
            "mandate_type": mandate_type,
            "committees": join_list(committees),
            "spokesperson_role": join_list(spokespersons),
            "constituency_office_address": "",
            "email_address": "",
            "sm_facebook": "",
            "sm_instagram": "",
            "sm_tiktok": "",
            "sm_x": "",
            "sm_bluesky": "",
            "sm_youtube": "",
            "sm_twitch": "",
            "sm_discord": "",
            "sm_telegram": "",
            "sm_rss": "",
            "sm_newsletter": "",
        })

    full_columns = [
        "parliament_id",
        "parliament_label",
        "parliament_period_id",
        "parliament_period_label",
        "mandate_id",
        "mandate_label",
        "politician_id",
        "first_name",
        "last_name",
        "full_name",
        "academic_title",
        "sex",
        "year_of_birth",
        "party_id",
        "party_name",
        "party_short_name",
        "faction",
        "electoral_district_id",
        "electoral_district_label",
        "electoral_list",
        "list_position",
        "mandate_type",
        "info",
        "start_date",
        "end_date",
        "active_now",
        "politician_url",
        "mandate_api_path",
        "politician_api_path",
        "abgeordnetenwatch_url",
        "wikidata_id",
    ]

    truth_columns = [
        "AWK",
        "Wahlkreis",
        "MdA_2025",
        "party_short_name",
        "politician_id",
        "mandate_id",
        "mandate_type",
        "committees",
        "spokesperson_role",
        "constituency_office_address",
        "email_address",
        "sm_facebook",
        "sm_instagram",
        "sm_tiktok",
        "sm_x",
        "sm_bluesky",
        "sm_youtube",
        "sm_twitch",
        "sm_discord",
        "sm_telegram",
        "sm_rss",
        "sm_newsletter",
    ]

    with open(FULL_OUT, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=full_columns, delimiter=";")
        writer.writeheader()
        writer.writerows(full_rows)

    with open(TRUTH_OUT, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=truth_columns, delimiter=";")
        writer.writeheader()
        writer.writerows(truth_rows)

    print(f"Wrote full CSV: {FULL_OUT}")
    print(f"Wrote truth CSV: {TRUTH_OUT}")
    print(f"Rows missing AWK: {missing_awk}")


if __name__ == "__main__":
    main()
