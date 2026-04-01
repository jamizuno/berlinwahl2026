import fs from 'fs/promises';
import path from 'path';

/**
 * sync_oparl.mjs
 * 
 * This script mirrors the OPARL API data from Berlin districts into local CSV files.
 * It uses the same normalization and gender-aware logic as the Berlin Election Map.
 */

const BASE_DIR = '.';
const DATA_DIR = path.join(BASE_DIR, 'data-sources', 'BVV-Listen_2026-Mar');
const API_LIST_URL = path.join(DATA_DIR, 'APIs', 'Opendata-Berlin-APIs.txt');
const COMMITTEE_STANDARD_URL = path.join(DATA_DIR, 'BVV-alle-ausschuesse-standardisiert.json');
const COMMITTEE_VARIANT_URL = path.join(DATA_DIR, 'BVV-alle-ausschuesse-variable-schreibweisen.json');

const BVV_ROLE_DICTIONARY = {
  mitglied_bvv: {
    label: "Bezirksverordnete/r",
    label_m: "Bezirksverordneter",
    label_f: "Bezirksverordnete",
    source_labels_common: ["Mitglied", "Bezirksverordnete", "Bezirksverordneter", "Bezirksverordnete/r", "BV", "BVV"]
  },
  vorsteher_bvv: {
    label: "BVV-Vorsitz",
    source_labels_common: ["Vorsteher", "Vorsteherin", "Vorsteher/in", "BVV-Vorsteher", "Vorsteherin", "Vorsteher der BVV", "BV-Vorsteher/in", "BV-Vorsteherin", "Bezirksverordnetenvorsteher"]
  },
  stv_vorsteher_bvv: {
    label: "stellv. BVV-Vorsitz",
    source_labels_common: ["Stellvertretender Vorsteher", "Stv. Vorsteher", "stellv. Vorsteher", "stellv. Vorsteherin", "Stellv. Bezirksverordnetenvorsteher", "stellv. Bezirksverordnetenvorsteher", "stellv. BV-Vorsteher/in", "Stv. BVV-Vorsitz", "Stellv. BVV-Vorsitz", "stellv. Vorsteherin der BVV"]
  },
  bezirksbuergermeister: {
    label: "Bezirksbürgermeister/in",
    label_m: "Bezirksbürgermeister",
    label_f: "Bezirksbürgermeisterin",
    source_labels_common: ["Bezirksbürgermeister", "Bezirksbürgermeisterin", "Bezirksbürgermeister/in"]
  },
  stadtrat: {
    label: "Stadtrat/Stadträtin",
    label_m: "Bezirksstadtrat",
    label_f: "Bezirksstadträtin",
    source_labels_common: ["Stadtrat", "Stadträtin", "Bezirksstadtrat", "Bezirksstadträtin", "Bezirksstadtrat/in", "Bezirksstadträtin/in"]
  },
  fraktionsvorsitz: {
    label: "Fraktionsvorsitz",
    label_m: "Fraktionsvorsitzender",
    label_f: "Fraktionsvorsitzende",
    source_labels_common: ["Vorsitz", "Fraktionsvorsitz", "Fraktionsvorsitzende", "Fraktionsvorsitzender", "Fraktionsvorsitzende/r"]
  },
  stv_fraktionsvorsitz: {
    label: "stellv. Fraktionsvorsitz",
    label_m: "stellv. Fraktionsvorsitzender",
    label_f: "stellv. Fraktionsvorsitzende",
    source_labels_common: ["Stellvertretender Vorsitz", "Stv. Fraktionsvorsitz", "stellv. Fraktionsvorsitz"]
  },
  fraktionsmitglied: {
    label: "Fraktionsmitglied",
    source_labels_common: ["Mitglied"]
  },
  ausschussvorsitz: {
    label: "Ausschussvorsitz",
    label_m: "Ausschussvorsitzender",
    label_f: "Ausschussvorsitzende",
    source_labels_common: ["Vorsitz", "Ausschussvorsitz", "Vorsitzende", "Vorsitzender"]
  },
  stv_ausschussvorsitz: {
    label: "stellv. Ausschussvorsitz",
    label_m: "stellv. Ausschussvorsitzender",
    label_f: "stellv. Ausschussvorsitzende",
    source_labels_common: ["Stellvertretender Vorsitz", "stellv. Vorsitz", "Stv. Vorsitz"]
  },
  ausschussmitglied: {
    label: "Ausschussmitglied",
    source_labels_common: ["Mitglied"]
  },
  buergerdeputierte_r: {
    label: "Bürgerdeputierte/r",
    label_m: "Bürgerdeputierter",
    label_f: "Bürgerdeputierte",
    source_labels_common: ["Bürgerdeputierte", "Bürgerdeputierter"]
  },
  aeltestenrat_mitglied: {
    label: "Ältestenrat",
    source_labels_common: ["Mitglied"]
  },
  schriftfuehrung: {
    label: "Schriftführung",
    source_labels_common: ["Schriftführung", "Schriftführer", "Schriftführerin", "Schriftführer/in"]
  }
};

const BVV_ROLE_SOURCE_MAP = new Map();

function normalizeRoleKey(value) {
  return String(value || "").trim().toUpperCase();
}

Object.entries(BVV_ROLE_DICTIONARY).forEach(([canonical, def]) => {
  (def.source_labels_common || []).forEach(label => {
    BVV_ROLE_SOURCE_MAP.set(normalizeRoleKey(label), canonical);
  });
  if (def.label) BVV_ROLE_SOURCE_MAP.set(normalizeRoleKey(def.label), canonical);
});

function normalizeBvvRole(value, gender) {
  const raw = String(value || "").trim();
  if (!raw) {
    if (gender === "f") return "Bezirksverordnete";
    if (gender === "m") return "Bezirksverordneter";
    return "Bezirksverordnete/r";
  }
  const upper = normalizeRoleKey(raw);
  const canonical = BVV_ROLE_SOURCE_MAP.get(upper);
  if (canonical && BVV_ROLE_DICTIONARY[canonical]) {
    const def = BVV_ROLE_DICTIONARY[canonical];
    if (gender === "f" && def.label_f) return def.label_f;
    if (gender === "m" && def.label_m) return def.label_m;
    return def.label;
  }
  const bzStrMatch = raw.match(/^BZSTR\.?\s*(.*)$/i);
  if (bzStrMatch) {
    const suffix = (bzStrMatch[1] || "").trim();
    let base = "Bezirksstadtrat/in";
    if (gender === "f") base = "Bezirksstadträtin";
    else if (gender === "m") base = "Bezirksstadtrat";
    return suffix ? `${base} ${suffix}` : base;
  }
  return raw;
}

function normalizeParty(value) {
  let p = String(value || "").trim();
  if (!p) return "parteilos";
  if (/SPD/i.test(p)) return "SPD";
  if (/CDU/i.test(p)) return "CDU";
  if (/Grüne|BÜNDNIS 90/i.test(p)) return "Grüne";
  if (/Linke/i.test(p)) return "Linke";
  if (/AfD/i.test(p)) return "AfD";
  if (/FDP/i.test(p)) return "FDP";
  if (/BSW/i.test(p)) return "BSW";
  if (/Tierschutzpartei/i.test(p)) return "Tierschutzpartei";
  if (/Die PARTEI/i.test(p) || /^PARTEI$/i.test(p)) return "Die PARTEI";
  if (/Einzelverordnete|fraktionslos|parteilos/i.test(p)) return "parteilos";
  return p;
}

async function fetchOparlPaged(url) {
  const MAX_PAGES = 50;
  let pageCount = 0;
  let next = url;
  const all = [];
  while (next && pageCount++ < MAX_PAGES) {
    console.log(`  Fetching ${next}...`);
    try {
      const res = await fetch(next);
      if (!res.ok) throw new Error(`OPARL ${res.status} for ${next}`);
      const payload = await res.json();
      if (Array.isArray(payload.data)) {
        all.push(...payload.data);
      } else if (payload.id) {
         return [payload]; // Single object
      }
      next = payload.links?.next || null;
    } catch (err) {
      console.error(`  Failed to fetch ${next}: ${err.message}`);
      break;
    }
  }
  return all;
}

async function syncBezirk(name, api) {
  console.log(`\nSyncing ${name}...`);
  try {
    const sysRes = await fetch(api);
    if (!sysRes.ok) throw new Error(`Status ${sysRes.status}`);
    const system = await sysRes.json();
    const bodyUrl = system.body;
    if (!bodyUrl) throw new Error(`No body URL`);

    const bodyRes = await fetch(bodyUrl);
    if (!bodyRes.ok) throw new Error(`Body status ${bodyRes.status}`);
    const bodyPayload = await bodyRes.json();
    const body = Array.isArray(bodyPayload.data) ? bodyPayload.data[0] : bodyPayload;
    if (!body) throw new Error(`Body not found`);

    const [orgs, persons] = await Promise.all([
      fetchOparlPaged(body.organization),
      fetchOparlPaged(body.person)
    ]);

    const orgById = new Map(orgs.map(org => [org.id, org]));
    const bvvOrgIds = new Set(orgs.filter(org => {
       const n = (org.name || "").toLowerCase();
       const s = (org.shortName || "").toLowerCase();
       return n.includes("bezirksverordnetenversammlung") || n.includes("bvv") || s.includes("bvv");
    }).map(o => o.id));
    
    const factionOrgIds = new Set(orgs.filter(org => {
       return org.classification === "Fraktion" || (org.name || "").toLowerCase().includes("fraktion");
    }).map(o => o.id));

    const today = new Date();
    const entries = [];

    persons.forEach(person => {
      const memberships = Array.isArray(person.membership) ? person.membership : [];
      const activeBvv = memberships.filter(m => {
        const orgId = typeof m.organization === 'string' ? m.organization : m.organization?.id;
        const role = (m.role || "").toLowerCase();
        const isActive = !m.endDate || new Date(m.endDate) > today;
        return (bvvOrgIds.has(orgId) || role.includes("bezirksverordnet") || role.includes("bvv")) && isActive;
      });

      if (activeBvv.length === 0) return;

      const primary = activeBvv.sort((a, b) => (b.startDate || "").localeCompare(a.startDate || ""))[0];
      
      const factionM = memberships.find(m => {
        const orgId = typeof m.organization === 'string' ? m.organization : m.organization?.id;
        const isActive = !m.endDate || new Date(m.endDate) > today;
        return factionOrgIds.has(orgId) && isActive;
      });
      const factionOrg = factionM ? orgById.get(typeof factionM.organization === 'string' ? factionM.organization : factionM.organization?.id) : null;
      const party = normalizeParty(factionOrg ? (factionOrg.shortName || factionOrg.name) : "parteilos");

      const form = (person.formOfAddress || "").trim();
      let gender = null;
      if (/frau/i.test(form)) gender = "f";
      else if (/herr/i.test(form)) gender = "m";

      const nameStr = (person.name || person.givenName + " " + person.familyName).trim();
      const roleStr = normalizeBvvRole(primary.role, gender);
      const sinceStr = primary.startDate || "";

      entries.push({ name: nameStr, role: roleStr, party: party, since: sinceStr });
    });

    entries.sort((a, b) => a.name.localeCompare(b.name, "de"));

    const csvLines = ["\"Name\",\"Art der Mitarbeit\",\"Herkunft\",\"seit\""];
    entries.forEach(e => {
        const cleanName = e.name.replace(/"/g, '""');
        const cleanRole = e.role.replace(/"/g, '""');
        const cleanParty = e.party.replace(/"/g, '""');
        csvLines.push(`"${cleanName}","${cleanRole}","${cleanParty}","${e.since}"`);
    });

    const csvPath = path.join(DATA_DIR, `BVV-${name}.csv`);
    await fs.writeFile(csvPath, csvLines.join('\n') + '\n', 'utf-8');
    console.log(`  Success: Written to ${csvPath} (${entries.length} members)`);

  } catch (err) {
    console.error(`  Error syncing ${name}: ${err.message}`);
  }
}

async function main() {
  try {
    const listRaw = await fs.readFile(API_LIST_URL, 'utf-8');
    const lines = listRaw.split(/[\r\n]+/).filter(l => l.trim() && !l.startsWith("Wahlkreis-Name"));
    
    for (const line of lines) {
      const parts = line.split(',');
      if (parts.length < 3) continue;
      const name = parts[0].replace(/^Berlin[-\s]*/i, "").trim();
      const api = parts[2].trim();
      if (!api) {
          console.log(`Skipping ${name}: No API URL`);
          continue;
      }
      await syncBezirk(name, api);
    }
  } catch (err) {
    console.error(`Fatal error: ${err.message}`);
  }
}

main();
