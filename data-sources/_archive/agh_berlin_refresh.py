import csv
import datetime as dt
import html
import json
import re
import sys
import time
import unicodedata
import urllib.parse
import urllib.request


BASE_URL = "https://www.abgeordnetenwatch.de/api/v2"
AGH_BASE_URL = "https://www.parlament-berlin.de"
AGH_ALPHA_URL = AGH_BASE_URL + "/das-parlament/abgeordnete/alphabetische-suche"
AGH_SPRECHSTUNDEN_URL = AGH_BASE_URL + "/aktuelles-presse/landespressedienst/sprechstunden"

USER_AGENT = "berlinwahl2026-refresh/1.0"
PAGER_LIMIT = 100
TIMEOUT = 15
RETRIES = 2
SLEEP_BETWEEN_RETRIES = 1

DATA_SOURCES_DIR = r"C:\Users\jermo\Documents\BERLINMAP\berlinwahl2026\data-sources"
FULL_OUT = DATA_SOURCES_DIR + r"\AGH_2025_by_wahlkreis_full.csv"
TRUTH_OUT = DATA_SOURCES_DIR + r"\AGH_2025_by_wahlkreis_truth.csv"

EMAIL_RE = re.compile(r"[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}")
PHONE_RE = re.compile(r"(?:\+49|0)[0-9][0-9 /()-]{5,}[0-9]")
TAG_RE = re.compile(r"<[^>]+>")
PROFILE_LINK_RE = re.compile(
    r'<a\s+[^>]*href="(?P<href>/Abgeordnete/[^"?]+)(?:\?groupStrategy=nachnamen)?"[^>]*>\s*(?P<label>[^<]+?)\s*</a>',
    re.IGNORECASE | re.DOTALL,
)
SPRECHSTUNDE_ITEM_RE = re.compile(
    r'<li class="linklist-item">.*?<span class="linklist-link-extra-line u-block">(?P<detail>.*?)</span>\s*'
    r'Abg\.\s*(?P<name>[^<(]+?)\s*\((?P<party>[^)]+)\)\s*'
    r'<span class="linklist-link-extra-line u-block">.*?</span>.*?</li>',
    re.IGNORECASE | re.DOTALL,
)
TITLE_TOKEN_RE = re.compile(
    r"\b(?:dr|prof|dipl|mag|h|c|jur|med|rer|phil|ing|msc|ba|ma)\b\.?",
    re.IGNORECASE,
)


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


def request_text(url, params=None):
    target = urllib.parse.urljoin(AGH_BASE_URL, url)
    if params:
        query = urllib.parse.urlencode(params, doseq=True)
        sep = "&" if "?" in target else "?"
        target = f"{target}{sep}{query}"

    last_err = None
    for attempt in range(1, RETRIES + 1):
        try:
            req = urllib.request.Request(
                target,
                headers={
                    "Accept": "text/html,application/xhtml+xml",
                    "User-Agent": USER_AGENT,
                },
            )
            with urllib.request.urlopen(req, timeout=TIMEOUT) as resp:
                charset = resp.headers.get_content_charset() or "utf-8"
                return resp.read().decode(charset, errors="replace")
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


def safe_request_text(url, params=None, label=""):
    try:
        return request_text(url, params)
    except Exception as err:
        target = f"{label} ({url})" if label else url
        print(f"WARNING: Failed to fetch {target}: {err}")
        return ""


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


def parse_german_date(value):
    raw = normalize_space(value)
    if not raw:
        return None
    try:
        day, month, year = raw.split(".")
        return dt.date(int(year), int(month), int(day))
    except Exception:
        return None


def iso_from_german_date(value):
    parsed = parse_german_date(value)
    return parsed.isoformat() if parsed else ""


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
    raw = str(label).strip()
    if len(raw) >= 4 and raw[:4].isdigit():
        return raw[:4]
    return ""


def extract_wahlkreis(label):
    if not label:
        return ""
    raw = str(label)
    if " - " in raw:
        raw = raw.split(" - ", 1)[1]
    if " (" in raw:
        raw = raw.split(" (", 1)[0]
    return raw.strip()


def resolve_fraction_label(memberships, today):
    if not memberships:
        return ""

    def to_date(value):
        return parse_date(value) if value else None

    active = []
    for membership in memberships:
        start = to_date(membership.get("valid_from"))
        end = to_date(membership.get("valid_until"))
        if start and today < start:
            continue
        if end and today > end:
            continue
        active.append(membership)
    pool = active if active else memberships
    pool_sorted = sorted(pool, key=lambda membership: membership.get("valid_from") or "", reverse=True)
    fraction = pool_sorted[0].get("fraction") or {}
    return fraction.get("label") or ""


def build_full_name(first_name, last_name, label):
    if first_name or last_name:
        return " ".join([part for part in [first_name, last_name] if part])
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
        return [], [], []
    payload = safe_request_json(
        "/committee-memberships",
        {"candidacy_mandate": candidacy_id, "pager_limit": 200},
        label="committee-memberships",
    )
    rows = payload.get("data") or []
    committees = []
    spokesperson = []
    memberships = []
    for row in rows:
        committee = row.get("committee") or {}
        committee_label = (committee.get("label") or "").strip()
        if committee_label:
            committees.append(committee_label)
        role = (row.get("committee_role") or "").lower()
        additional = row.get("committee_roles_additional")
        if committee_label:
            memberships.append({
                "committee": committee_label,
                "committee_role": role,
                "committee_roles_additional": additional if additional else [],
            })
        additional_text = ""
        if isinstance(additional, list):
            additional_text = " ".join([str(item) for item in additional])
        elif additional:
            additional_text = str(additional)
        additional_text = additional_text.lower()
        if role == "spokesperson" or "spokesperson" in additional_text:
            if committee_label:
                spokesperson.append(committee_label)
    committees = sorted(set([committee for committee in committees if committee]))
    spokesperson = sorted(set([committee for committee in spokesperson if committee]))
    return committees, spokesperson, memberships


def normalize_space(value):
    return re.sub(r"\s+", " ", str(value or "").replace("\xa0", " ")).strip()


def strip_tags(fragment):
    if not fragment:
        return ""
    return TAG_RE.sub("", fragment)


def html_fragment_to_lines(fragment):
    if not fragment:
        return []
    text = re.sub(r"(?i)<br\s*/?>", "\n", fragment)
    text = re.sub(r"(?i)</(?:p|div|li|section|h2|h3)>", "\n", text)
    text = strip_tags(text)
    text = html.unescape(text)
    text = text.replace("\r", "\n")
    lines = [normalize_space(line) for line in text.split("\n")]
    return [line for line in lines if line]


def normalize_person_name(value):
    text = html.unescape(str(value or ""))
    text = text.replace("\u00df", "ss")
    text = unicodedata.normalize("NFKD", text)
    text = "".join(ch for ch in text if not unicodedata.combining(ch))
    text = TITLE_TOKEN_RE.sub(" ", text)
    text = re.sub(r"[^0-9A-Za-z]+", " ", text.lower())
    return normalize_space(text)


def extract_emails(fragment):
    emails = [html.unescape(match).strip() for match in re.findall(r"mailto:([^\"?#]+)", fragment or "", re.IGNORECASE)]
    if not emails:
        emails = EMAIL_RE.findall(html.unescape(strip_tags(fragment or "")))
    unique = []
    seen = set()
    for email_value in emails:
        cleaned = normalize_space(email_value)
        lowered = cleaned.lower()
        if not cleaned or lowered in seen:
            continue
        seen.add(lowered)
        unique.append(cleaned)
    return unique


def extract_phone_numbers(fragment):
    matches = PHONE_RE.findall(html.unescape(strip_tags(fragment or "")))
    unique = []
    seen = set()
    for phone_value in matches:
        cleaned = normalize_space(phone_value)
        if not cleaned or cleaned in seen:
            continue
        seen.add(cleaned)
        unique.append(cleaned)
    return unique


def extract_external_urls(fragment):
    matches = [html.unescape(match).strip() for match in re.findall(r'href="(https?://[^"]+)"', fragment or "", re.IGNORECASE)]
    unique = []
    seen = set()
    for url in matches:
        lowered = url.lower()
        if lowered.startswith(AGH_BASE_URL.lower()):
            continue
        if lowered in seen:
            continue
        seen.add(lowered)
        unique.append(url)
    return unique


def build_address_from_lines(lines, person_name=""):
    result = []
    person_key = normalize_person_name(person_name)
    for line in lines or []:
        cleaned = normalize_space(line)
        if not cleaned:
            continue
        line_key = normalize_person_name(cleaned)
        if person_key and line_key == person_key:
            continue
        if line_key in {"e mail", "website", "telefon", "fax"}:
            continue
        if EMAIL_RE.search(cleaned):
            continue
        if cleaned.lower().startswith("http://") or cleaned.lower().startswith("https://"):
            continue
        result.append(cleaned)
    return ", ".join(result)


def extract_section_fragment(page_html, title):
    escaped = re.escape(title)
    match = re.search(
        rf'<section class="b-content-box[^"]*">.*?<h2 class="content-box-title">\s*{escaped}\s*</h2>(?P<section>.*?)</section>',
        page_html or "",
        re.IGNORECASE | re.DOTALL,
    )
    return match.group("section") if match else ""


def parse_official_directory_name(label):
    text = normalize_space(strip_tags(label))
    parts = [normalize_space(part) for part in text.split(",") if normalize_space(part)]
    if len(parts) >= 2:
        family_name = parts[0]
        given_names = parts[1]
        return normalize_space(f"{given_names} {family_name}")
    return text


def fetch_profile_index():
    html_text = safe_request_text(AGH_ALPHA_URL, label="AGH alphabetical listing")
    index = {}
    for match in PROFILE_LINK_RE.finditer(html_text):
        href = match.group("href").split("?", 1)[0]
        label = normalize_space(match.group("label"))
        full_name = parse_official_directory_name(label)
        key = normalize_person_name(full_name)
        if not key or key in index:
            continue
        index[key] = {
            "name": full_name,
            "url": urllib.parse.urljoin(AGH_BASE_URL, href),
        }
    return index


def parse_profile_page(page_html, person_name):
    contact_section = extract_section_fragment(page_html, "Kontakt")
    office_section = extract_section_fragment(page_html, "Wahlkreisb\u00fcro")

    contact_lines = html_fragment_to_lines(contact_section)
    office_lines = html_fragment_to_lines(office_section)

    contact_emails = extract_emails(contact_section)
    office_emails = extract_emails(office_section)
    contact_phones = extract_phone_numbers(contact_section)
    office_phones = extract_phone_numbers(office_section)
    external_urls = extract_external_urls(contact_section) + extract_external_urls(office_section)

    return {
        "official_contact_address": build_address_from_lines(contact_lines, person_name),
        "official_contact_email": contact_emails[0] if contact_emails else "",
        "official_contact_phone": contact_phones[0] if contact_phones else "",
        "official_website": external_urls[0] if external_urls else "",
        "constituency_office_address": build_address_from_lines(office_lines, person_name),
        "constituency_office_email": office_emails[0] if office_emails else "",
        "constituency_office_phone": office_phones[0] if office_phones else "",
    }


def split_sprechstunde_description(description):
    parts = [normalize_space(part) for part in str(description or "").split(",")]
    if not parts:
        return "", ""
    location_parts = []
    note_parts = []
    note_started = False
    for part in parts:
        lower = part.lower()
        if location_parts and re.search(
            r"\b(?:anmeldung|anmelden|bitte|vorherig|telefonisch|vereinbarung|erbeten|digital|nur nach|per e-mail|per email)\b",
            lower,
        ):
            note_started = True
        if note_started:
            note_parts.append(part)
        else:
            location_parts.append(part)
    return ", ".join([part for part in location_parts if part]), ", ".join([part for part in note_parts if part])


def parse_sprechstunde_item(detail_text, name, party, today):
    text = normalize_space(detail_text)
    match = re.match(r"(?P<date>\d{2}\.\d{2}\.\d{4})\s+(?P<time>[^,]+)(?:,\s*(?P<rest>.*))?$", text)
    date_text = match.group("date") if match else ""
    time_text = normalize_space(match.group("time")) if match else ""
    remainder = normalize_space(match.group("rest")) if match else text
    event_date = parse_german_date(date_text) if date_text else None
    if event_date and event_date < today:
        return None
    location, note = split_sprechstunde_description(remainder)
    return {
        "date": event_date.isoformat() if event_date else "",
        "date_text": date_text,
        "time": time_text,
        "location": location,
        "note": note,
        "emails": extract_emails(remainder),
        "phones": extract_phone_numbers(remainder),
        "party": normalize_space(party),
        "raw": text,
        "name": normalize_space(name),
    }


def fetch_sprechstunden_by_name(today):
    html_text = safe_request_text(AGH_SPRECHSTUNDEN_URL, label="AGH Sprechstunden")
    by_name = {}
    for match in SPRECHSTUNDE_ITEM_RE.finditer(html_text):
        detail_text = html.unescape(strip_tags(match.group("detail")))
        name = html.unescape(normalize_space(match.group("name")))
        party = html.unescape(normalize_space(match.group("party")))
        event = parse_sprechstunde_item(detail_text, name, party, today)
        if not event:
            continue
        key = normalize_person_name(name)
        if not key:
            continue
        by_name.setdefault(key, []).append(event)
    for key, events in by_name.items():
        by_name[key] = sorted(events, key=lambda event: (event.get("date") or "", event.get("time") or "", event.get("raw") or ""))
    return by_name


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

    active = [mandate for mandate in mandates if is_active_mandate(mandate, today)]
    print(f"Rows retained as active mandates: {len(active)}")

    profile_index = fetch_profile_index()
    sprechstunden_by_name = fetch_sprechstunden_by_name(today)
    print(f"Official AGH profile URLs indexed: {len(profile_index)}")
    print(f"Upcoming Sprechstunden unique names indexed: {len(sprechstunden_by_name)}")

    politician_cache = {}
    party_cache = {}
    constituency_cache = {}
    profile_cache = {}
    committee_cache = {}

    full_rows = []
    truth_rows = []
    missing_awk = 0
    matched_profiles = 0
    matched_sprechstunden = 0
    missing_profiles = []

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

        if item.get("id") in committee_cache:
            committees, spokespersons, committee_memberships = committee_cache[item.get("id")]
        else:
            committees, spokespersons, committee_memberships = collect_committee_info(item.get("id"))
            committee_cache[item.get("id")] = (committees, spokespersons, committee_memberships)

        name_key = normalize_person_name(full_name)
        profile_meta = profile_index.get(name_key)
        profile_data = {
            "official_contact_address": "",
            "official_contact_email": "",
            "official_contact_phone": "",
            "official_website": "",
            "constituency_office_address": "",
            "constituency_office_email": "",
            "constituency_office_phone": "",
        }
        official_profile_url = ""
        if profile_meta:
            matched_profiles += 1
            official_profile_url = profile_meta.get("url") or ""
            profile_data = profile_cache.get(official_profile_url)
            if profile_data is None:
                profile_html = safe_request_text(official_profile_url, label=f"AGH profile {full_name}")
                profile_data = parse_profile_page(profile_html, full_name) if profile_html else profile_data
                profile_cache[official_profile_url] = profile_data
        else:
            missing_profiles.append(full_name)

        sprechstunden = sprechstunden_by_name.get(name_key, [])
        if sprechstunden:
            matched_sprechstunden += 1
        next_sprechstunde = sprechstunden[0] if sprechstunden else {}

        best_email = (
            profile_data.get("constituency_office_email")
            or profile_data.get("official_contact_email")
            or ""
        )

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
            "official_profile_url": official_profile_url,
            "official_contact_address": profile_data.get("official_contact_address") or "",
            "official_contact_email": profile_data.get("official_contact_email") or "",
            "official_contact_phone": profile_data.get("official_contact_phone") or "",
            "official_website": profile_data.get("official_website") or "",
            "constituency_office_address": profile_data.get("constituency_office_address") or "",
            "constituency_office_email": profile_data.get("constituency_office_email") or "",
            "constituency_office_phone": profile_data.get("constituency_office_phone") or "",
            "email_address": best_email,
            "sprechstunden_json": json.dumps(sprechstunden, ensure_ascii=False, separators=(",", ":")),
            "next_sprechstunde_date": next_sprechstunde.get("date") or "",
            "next_sprechstunde_text": next_sprechstunde.get("raw") or "",
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
            "committee_memberships_json": json.dumps(committee_memberships, ensure_ascii=False, separators=(",", ":")),
            "constituency_office_address": profile_data.get("constituency_office_address") or "",
            "email_address": best_email,
            "official_profile_url": official_profile_url,
            "official_contact_address": profile_data.get("official_contact_address") or "",
            "official_contact_email": profile_data.get("official_contact_email") or "",
            "official_contact_phone": profile_data.get("official_contact_phone") or "",
            "official_website": profile_data.get("official_website") or "",
            "constituency_office_email": profile_data.get("constituency_office_email") or "",
            "constituency_office_phone": profile_data.get("constituency_office_phone") or "",
            "sprechstunden_json": json.dumps(sprechstunden, ensure_ascii=False, separators=(",", ":")),
            "next_sprechstunde_date": next_sprechstunde.get("date") or "",
            "next_sprechstunde_text": next_sprechstunde.get("raw") or "",
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
        "official_profile_url",
        "official_contact_address",
        "official_contact_email",
        "official_contact_phone",
        "official_website",
        "constituency_office_address",
        "constituency_office_email",
        "constituency_office_phone",
        "email_address",
        "sprechstunden_json",
        "next_sprechstunde_date",
        "next_sprechstunde_text",
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
        "committee_memberships_json",
        "constituency_office_address",
        "email_address",
        "official_profile_url",
        "official_contact_address",
        "official_contact_email",
        "official_contact_phone",
        "official_website",
        "constituency_office_email",
        "constituency_office_phone",
        "sprechstunden_json",
        "next_sprechstunde_date",
        "next_sprechstunde_text",
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

    with open(FULL_OUT, "w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(handle, fieldnames=full_columns, delimiter=";")
        writer.writeheader()
        writer.writerows(full_rows)

    with open(TRUTH_OUT, "w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(handle, fieldnames=truth_columns, delimiter=";")
        writer.writeheader()
        writer.writerows(truth_rows)

    missing_profiles = sorted(set([name for name in missing_profiles if name]))
    print(f"Wrote full CSV: {FULL_OUT}")
    print(f"Wrote truth CSV: {TRUTH_OUT}")
    print(f"Rows missing AWK: {missing_awk}")
    print(f"Active mandates matched to official AGH profiles: {matched_profiles}/{len(active)}")
    print(f"Active mandates with upcoming Sprechstunden: {matched_sprechstunden}/{len(active)}")
    if missing_profiles:
        preview = ", ".join(missing_profiles[:10])
        suffix = " ..." if len(missing_profiles) > 10 else ""
        print(f"WARNING: Missing official AGH profile match for {len(missing_profiles)} names: {preview}{suffix}")


if __name__ == "__main__":
    main()
