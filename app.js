// -----------------------------------------------------------------------
// DATA: Berlin 12 Bezirke with elected representatives (fictional demo names, not real persons)
// Sources: Landeswahlleiter Berlin, Bundeswahlleiter, Europawahlleiter
// -----------------------------------------------------------------------
const bezirkeData = {
  "Mitte": {
    nr: "01",
    color: "#2563a8",
    bezirk: {
      buergermeister: "Max Mustermann",
      party: "SPD",
      role: "Bezirksbürgermeister"
    },
    abgeordnetenhaus: [
      { name: "Erika Mustermann", party: "CDU", role: "Direktmandat WK 01 – Mitte" },
      { name: "Felix Beispiel", party: "CDU", role: "Direktmandat WK 02 – Tiergarten/Wedding" },
    ],
    bundestag: [
      { name: "Thomas Muster", party: "CDU", role: "Direktmandat WK 75 – Berlin-Mitte" },
    ],
    eu: [
      { name: "Laura Listeneintrag", party: "CDU", role: "Europäisches Parlament (Berlin-Liste)" },
    ]
  },
  "Friedrichshain-Kreuzberg": {
    nr: "02",
    color: "#3a8c4e",
    bezirk: {
      buergermeister: "Paula Platzhalter",
      party: "Grüne",
      role: "Bezirksbürgermeisterin"
    },
    abgeordnetenhaus: [
      { name: "Anna Musterfrau", party: "Grüne", role: "Direktmandat WK 05 – Friedrichshain" },
      { name: "Ben Beispiel", party: "Grüne", role: "Direktmandat WK 06 – Kreuzberg" },
    ],
    bundestag: [
      { name: "Clara Charakter", party: "Grüne", role: "Direktmandat WK 83 – Friedrichshain-Kreuzberg" },
    ],
    eu: [
      { name: "Doris Demo", party: "Grüne", role: "Europäisches Parlament (Grüne Liste)" },
    ]
  },
  "Pankow": {
    nr: "03",
    color: "#2563a8",
    bezirk: {
      buergermeister: "Norbert Namensvorschlag",
      party: "SPD",
      role: "Bezirksbürgermeister"
    },
    abgeordnetenhaus: [
      { name: "Egon Exemplar", party: "CDU", role: "Direktmandat WK 07 – Prenzlauer Berg Ost" },
      { name: "Frida Fiktiv", party: "CDU", role: "Direktmandat WK 08 – Prenzlauer Berg West" },
    ],
    bundestag: [
      { name: "Günter Geübt", party: "SPD", role: "Direktmandat WK 84 – Pankow" },
    ],
    eu: [
      { name: "Hanna Hinweis", party: "SPD", role: "Europäisches Parlament (SPD-Liste)" },
    ]
  },
  "Charlottenburg-Wilmersdorf": {
    nr: "04",
    color: "#2563a8",
    bezirk: {
      buergermeister: "Ingo Illustration",
      party: "CDU",
      role: "Bezirksbürgermeister"
    },
    abgeordnetenhaus: [
      { name: "Julia Jolie", party: "CDU", role: "Direktmandat WK 10 – Charlottenburg Nord" },
      { name: "Kevin Konstrukt", party: "FDP", role: "Direktmandat WK 11 – Charlottenburg Süd" },
    ],
    bundestag: [
      { name: "Lars Layout", party: "CDU", role: "WK 77 – Charlottenburg-Wilmersdorf" },
    ],
    eu: [
      { name: "Monika Muster", party: "CDU", role: "Europäisches Parlament (CDU-Liste)" },
    ]
  },
  "Spandau": {
    nr: "05",
    color: "#2563a8",
    bezirk: {
      buergermeister: "Nina Namenslos",
      party: "CDU",
      role: "Bezirksbürgermeister"
    },
    abgeordnetenhaus: [
      { name: "Oskar Ordnung", party: "CDU", role: "Direktmandat WK 14 – Spandau Ost" },
      { name: "Petra Probe", party: "CDU", role: "Direktmandat WK 15 – Spandau West" },
    ],
    bundestag: [
      { name: "Quentin Quelle", party: "CDU", role: "WK 75 – Spandau / Charlottenburg Nord" },
    ],
    eu: [
      { name: "Rita Referenz", party: "CDU", role: "Europäisches Parlament (CDU-Liste)" },
    ]
  },
  "Steglitz-Zehlendorf": {
    nr: "06",
    color: "#2563a8",
    bezirk: {
      buergermeister: "Sabine Schein",
      party: "Grüne",
      role: "Bezirksbürgermeisterin"
    },
    abgeordnetenhaus: [
      { name: "Timo Textbaustein", party: "CDU", role: "Direktmandat WK 17 – Steglitz" },
      { name: "Ute Übung", party: "CDU", role: "Direktmandat WK 18 – Zehlendorf" },
    ],
    bundestag: [
      { name: "Viktor Vorlage", party: "CDU", role: "WK 82 – Steglitz-Zehlendorf" },
    ],
    eu: [
      { name: "Waltraud Werte", party: "CDU", role: "Europäisches Parlament (CDU-Liste)" },
    ]
  },
  "Tempelhof-Schöneberg": {
    nr: "07",
    color: "#3a8c4e",
    bezirk: {
      buergermeister: "Xaver Xenon",
      party: "CDU",
      role: "Bezirksbürgermeister"
    },
    abgeordnetenhaus: [
      { name: "Yvonne Ypsilon", party: "SPD", role: "Direktmandat WK 20 – Schöneberg Nord" },
      { name: "Zoe Zahl", party: "CDU", role: "Direktmandat WK 21 – Tempelhof" },
    ],
    bundestag: [
      { name: "Andreas Anker", party: "SPD", role: "WK 81 – Tempelhof-Schöneberg" },
    ],
    eu: [
      { name: "Birgit Beleg", party: "SPD", role: "Europäisches Parlament (SPD-Liste)" },
    ]
  },
  "Neukölln": {
    nr: "08",
    color: "#d4263c",
    bezirk: {
      buergermeister: "Christian Charakter",
      party: "SPD",
      role: "Bezirksbürgermeister"
    },
    abgeordnetenhaus: [
      { name: "Denise Daten", party: "CDU", role: "Direktmandat WK 23 – Neukölln Nord" },
      { name: "Emil Entwurf", party: "SPD", role: "Direktmandat WK 24 – Neukölln Süd" },
    ],
    bundestag: [
      { name: "Fabian Formular", party: "SPD", role: "WK 86 – Neukölln" },
    ],
    eu: [
      { name: "Gisela Graphik", party: "SPD", role: "Europäisches Parlament (SPD-Liste)" },
    ]
  },
  "Treptow-Köpenick": {
    nr: "09",
    color: "#9b2ecf",
    bezirk: {
      buergermeister: "Heike Hinweis",
      party: "SPD",
      role: "Bezirksbürgermeister"
    },
    abgeordnetenhaus: [
      { name: "Iris Idee", party: "Grüne", role: "Direktmandat WK 26 – Treptow" },
      { name: "Jan Jargon", party: "Linke", role: "Direktmandat WK 27 – Köpenick" },
    ],
    bundestag: [
      { name: "Katrin Katalog", party: "Linke", role: "WK 87 – Treptow-Köpenick" },
    ],
    eu: [
      { name: "Lutz Linie", party: "Linke", role: "Europäisches Parlament (Linke-Liste)" },
    ]
  },
  "Marzahn-Hellersdorf": {
    nr: "10",
    color: "#9b2ecf",
    bezirk: {
      buergermeister: "Marta Modell",
      party: "SPD",
      role: "Bezirksbürgermeister"
    },
    abgeordnetenhaus: [
      { name: "Nils Notiz", party: "SPD", role: "Direktmandat WK 29 – Marzahn Nord" },
      { name: "Olga Objekt", party: "CDU", role: "Direktmandat WK 30 – Hellersdorf" },
    ],
    bundestag: [
      { name: "Pia Probe", party: "Linke", role: "WK 88 – Marzahn-Hellersdorf" },
    ],
    eu: [
      { name: "Quinn Qualität", party: "Linke", role: "Europäisches Parlament (Linke-Liste)" },
    ]
  },
  "Lichtenberg": {
    nr: "11",
    color: "#9b2ecf",
    bezirk: {
      buergermeister: "Ralf Raster",
      party: "CDU",
      role: "Bezirksbürgermeister"
    },
    abgeordnetenhaus: [
      { name: "Sina Schablone", party: "CDU", role: "Direktmandat WK 32 – Lichtenberg Nord" },
      { name: "Tobias Typ", party: "Linke", role: "Direktmandat WK 33 – Lichtenberg Süd" },
    ],
    bundestag: [
      { name: "Ulla Urliste", party: "Linke", role: "WK 89 – Lichtenberg" },
    ],
    eu: [
      { name: "Volker Vorschau", party: "Linke", role: "Europäisches Parlament (Linke-Liste)" },
    ]
  },
  "Reinickendorf": {
    nr: "12",
    color: "#2563a8",
    bezirk: {
      buergermeister: "Werner Werte",
      party: "SPD",
      role: "Bezirksbürgermeister (komm.)"
    },
    abgeordnetenhaus: [
      { name: "Xenia Xenon", party: "CDU", role: "Direktmandat WK 35 – Reinickendorf Ost" },
      { name: "Yannik Ypsilon", party: "CDU", role: "Direktmandat WK 36 – Reinickendorf West" },
    ],
    bundestag: [
      { name: "Zara Zeile", party: "CDU", role: "WK 76 – Reinickendorf" },
    ],
    eu: [
      { name: "Alex Abgleich", party: "CDU", role: "Europäisches Parlament (CDU-Liste)" },
    ]
  }
};

let euCitywide = [];

const partyColors = {
  CDU: "#2b2f36", SPD: "#e06070", Grüne: "#5db87a",
  Linke: "#c090e8", AfD: "#6ab0f0", FDP: "#f0d050",
  parteilos: "#9ca3af", BSW: "#711E3B", Tierschutzpartei: "#005959",
  "Die PARTEI": "#B10B14", "Die Grauen": "#999999", "Volt Berlin": "#562883",
  Andere: "#6b7280"
};

const levelLabels = {
  bezirk: "Bezirk (BVV)",
  bezirksamt: "Bezirk (Amt)",
  abgeordnetenhaus: "Stadt (AGH)",
  senat: "Stadt (Senat)",
  bundestag: "Bundestag",
  eu: "EU-Parlament"
};

function isBezirkLevel(level) {
  return level === "bezirk" || level === "bezirksamt";
}

function isAghLevel(level) {
  return level === "abgeordnetenhaus" || level === "senat";
}

const mapScopeByLevel = {
  bezirk: ["Kieze (LOR)", "Einschulbereiche", "Postleitzahlen", "Ortsteile", "Bezirke"],
  bezirksamt: ["Kieze (LOR)", "Einschulbereiche", "Postleitzahlen", "Ortsteile", "Bezirke"],
  abgeordnetenhaus: ["Abgeordnetenhaus WK", "Ortsteile", "Bezirke"],
  senat: ["Berlin (Land)", "Ortsteile", "Bezirke"],
  bundestag: ["Bundestag WK", "Berlin (Land)"],
  eu: ["Berlin (Land)"]
};

const mapSelectionByLevelIds = {
  bezirk: ["bezirke", "ortsteile"],
  bezirksamt: ["bezirke", "ortsteile"],
  abgeordnetenhaus: ["agh", "bezirke"],
  senat: ["eu"],
  bundestag: ["btg", "eu"],
  eu: ["eu"]
};

let currentLevel = "abgeordnetenhaus";
let geoLayer = null;
let selectedLayer = null;
let selectedOverlayLayer = null;
let selectedOverlayBaseStyle = null;
let selectedFeature = null;
let berlinGeoJSON = null;
let overlayControl = null;
let aghOverlay = null;
let selectionHighlightLayer = null;
const wfsOverlayLayers = new Map();
const wfsOverlayState = new Map();
let activeContext = null;
let activePartyFilter = null;
let searchIndex = [];
let searchDropdownResults = [];
let searchActiveIndex = -1;
let activeSearchFocus = null;
let bvvSearchWarmupStarted = false;

const SEARCH_RESULT_LIMIT = 12;

const districtByNumber = new Map();
const districtByName = new Map();
const aghByAwk = new Map();
const aghByBez = new Map();
const btgByWkr = new Map();
const btgTooltipByBwk = new Map();
let btgCitywide = [];
const bvvByBezirk = new Map();
const aghExecutiveByBezirk = new Map();
const aghExecutiveCitywide = [];
const bvvExecutiveByBezirk = new Map();
const bvvOparlStatusByBezirk = new Map();
const bezirkByArkis = new Map();
const oparlApiByBezirk = new Map();
let oparlApiLoaded = false;
let oparlApiLoading = null;
const unknownOparlParties = new Set();
const unknownOparlRoles = new Set();
const unknownCommitteeLabels = new Set();

let departmentKeywordLabels = {};
let departmentMapsLoaded = false;
let departmentMapsLoading = null;

const BVV_ROLE_DICTIONARY = {
  mitglied_bvv: {
    label: "Bezirksverordnete/r",
    label_m: "Bezirksverordneter",
    label_f: "Bezirksverordnete",
    organization_classifications_allowed: ["parlament"],
    source_labels_common: ["Mitglied", "Bezirksverordnete", "Bezirksverordneter", "Bezirksverordnete/r", "BV", "BVV"]
  },
  vorsteher_bvv: {
    label: "BVV-Vorsitz",
    organization_classifications_allowed: ["parlament"],
    source_labels_common: ["Vorsteher", "Vorsteherin", "Vorsteher/in", "BVV-Vorsteher", "Vorsteherin", "Vorsteher der BVV", "BV-Vorsteher/in", "BV-Vorsteherin", "Bezirksverordnetenvorsteher"]
  },
  stv_vorsteher_bvv: {
    label: "stellv. BVV-Vorsitz",
    organization_classifications_allowed: ["parlament"],
    source_labels_common: ["stellvertretender Bezirksverordnetenvorsteher", "Stellvertretender Vorsteher", "Stv. Vorsteher", "stellv. Vorsteher", "stellv. Vorsteherin", "Stellv. Bezirksverordnetenvorsteher", "stellv. Bezirksverordnetenvorsteher", "stellv. BV-Vorsteher/in", "Stv. BVV-Vorsitz", "Stellv. BVV-Vorsitz", "stellv. Vorsteherin der BVV"]
  },
  bezirksbuergermeister: {
    label: "Bezirksbürgermeister/in",
    label_m: "Bezirksbürgermeister",
    label_f: "Bezirksbürgermeisterin",
    organization_classifications_allowed: ["parlament", "gremium", "sonstiges"],
    source_labels_common: ["Bezirksbürgermeister", "Bezirksbürgermeisterin", "Bezirksbürgermeister/in"]
  },
  stadtrat: {
    label: "Stadtrat/Stadträtin",
    label_m: "Bezirksstadtrat",
    label_f: "Bezirksstadträtin",
    organization_classifications_allowed: ["gremium", "sonstiges", "parlament"],
    source_labels_common: ["Stadtrat", "Stadträtin", "Bezirksstadtrat", "Bezirksstadträtin", "Bezirksstadtrat/in", "Bezirksstadträtin/in"]
  },
  fraktionsvorsitz: {
    label: "Fraktionsvorsitz",
    label_m: "Fraktionsvorsitzender",
    label_f: "Fraktionsvorsitzende",
    organization_classifications_allowed: ["fraktion"],
    source_labels_common: ["Vorsitz", "Fraktionsvorsitz", "Fraktionsvorsitzende", "Fraktionsvorsitzender", "Fraktionsvorsitzende/r", "Fraktionsvorsitzende Doppelspitze", "Fraktionsvorsitzender Doppelspitze"]
  },
  stv_fraktionsvorsitz: {
    label: "stellv. Fraktionsvorsitz",
    label_m: "stellv. Fraktionsvorsitzender",
    label_f: "stellv. Fraktionsvorsitzende",
    organization_classifications_allowed: ["fraktion"],
    source_labels_common: ["Stellvertretender Vorsitz", "Stv. Fraktionsvorsitz", "stellv. Fraktionsvorsitz", "Stellv. Fraktionsvorsitz"]
  },
  fraktionsmitglied: {
    label: "Fraktionsmitglied",
    organization_classifications_allowed: ["fraktion"],
    source_labels_common: ["Mitglied"]
  },
  ausschussvorsitz: {
    label: "Ausschussvorsitz",
    label_m: "Ausschussvorsitzender",
    label_f: "Ausschussvorsitzende",
    organization_classifications_allowed: ["ausschuss", "gremium"],
    source_labels_common: ["Vorsitz", "Ausschussvorsitz", "Vorsitzende", "Vorsitzender"]
  },
  stv_ausschussvorsitz: {
    label: "stellv. Ausschussvorsitz",
    label_m: "stellv. Ausschussvorsitzender",
    label_f: "stellv. Ausschussvorsitzende",
    organization_classifications_allowed: ["ausschuss", "gremium"],
    source_labels_common: ["Stellvertretender Vorsitz", "stellv. Vorsitz", "Stv. Vorsitz", "stellv. Ausschussvorsitz", "Stv. Ausschussvorsitz", "Stellv. Ausschussvorsitz"]
  },
  ausschussmitglied: {
    label: "Ausschussmitglied",
    organization_classifications_allowed: ["ausschuss", "gremium"],
    source_labels_common: ["Mitglied", "Ausschussmitglied BV"]
  },
  stv_ausschussmitglied: {
    label: "stellv. Ausschussmitglied",
    organization_classifications_allowed: ["ausschuss", "gremium"],
    source_labels_common: [
      "stellv. Ausschussmitglied",
      "Stellv. Ausschussmitglied",
      "Stv. Ausschussmitglied",
      "stellv. Ausschussmitglied BV",
      "Stellv. Ausschussmitglied BV",
      "Stv. Ausschussmitglied BV"
    ]
  },
  buergerdeputierte_r: {
    label: "Bürgerdeputierte/r",
    label_m: "Bürgerdeputierter",
    label_f: "Bürgerdeputierte",
    organization_classifications_allowed: ["ausschuss", "gremium"],
    source_labels_common: ["Bürgerdeputierte", "Bürgerdeputierter"]
  },
  aeltestenrat_mitglied: {
    label: "Ältestenrat",
    organization_classifications_allowed: ["gremium"],
    source_labels_common: ["Mitglied", "Mitglied des Ältestenrats"]
  },
  schriftfuehrung: {
    label: "Schriftführung",
    organization_classifications_allowed: ["parlament", "gremium"],
    source_labels_common: ["Schriftführung", "Schriftführer", "Schriftführerin", "Schriftführer/in", "Schriftführerin BVV"]
  },
  sonstige_funktion: {
    label: "Sonstige Funktion",
    organization_classifications_allowed: ["parlament", "fraktion", "ausschuss", "gremium", "sonstiges"],
    source_labels_common: []
  }
};

const BVV_ROLE_SOURCE_MAP = new Map();
const BVV_ROLE_SOURCE_CANDIDATES = new Map();

function normalizeRoleKey(value) {
  return String(value || "").trim().toUpperCase();
}

function registerRoleAliases(canonical, labels) {
  if (!labels || !labels.length) return;
  labels.forEach(label => {
    const key = normalizeRoleKey(label);
    if (!key) return;
    if (!BVV_ROLE_SOURCE_CANDIDATES.has(key)) {
      BVV_ROLE_SOURCE_CANDIDATES.set(key, []);
    }
    const candidates = BVV_ROLE_SOURCE_CANDIDATES.get(key);
    if (!candidates.includes(canonical)) {
      candidates.push(canonical);
    }
    BVV_ROLE_SOURCE_MAP.set(key, canonical);
  });
}

Object.entries(BVV_ROLE_DICTIONARY).forEach(([canonical, def]) => {
  registerRoleAliases(canonical, def.source_labels_common || []);
  if (def.label) registerRoleAliases(canonical, [def.label]);
});

const STANDARD_PARTIES = new Set([
  "CDU",
  "SPD",
  "Grüne",
  "Linke",
  "AfD",
  "FDP",
  "BSW",
  "Tierschutzpartei",
  "Die PARTEI",
  "Die Grauen",
  "Volt Berlin",
  "Andere",
  "parteilos"
]);

const BEZIRK_FALLBACK = {
  "01": "Mitte",
  "02": "Pankow",
  "03": "Reinickendorf",
  "04": "Spandau",
  "05": "Steglitz-Zehlendorf",
  "06": "Charlottenburg-Wilmersdorf",
  "07": "Tempelhof-Schöneberg",
  "08": "Neukölln",
  "09": "Friedrichshain-Kreuzberg",
  "10": "Treptow-Köpenick",
  "11": "Marzahn-Hellersdorf",
  "12": "Lichtenberg"
};

const BVV_ROLE_ORDER = [
  "vorsteher_bvv",
  "stv_vorsteher_bvv",
  "bezirksbuergermeister",
  "stadtrat",
  "fraktionsvorsitz",
  "stv_fraktionsvorsitz",
  "ausschussvorsitz",
  "stv_ausschussvorsitz",
  "mitglied_bvv",
  "buergerdeputierte_r"
];

const districtCsvUrl = "./data-sources/Berlin_Bezirk_W2_Sieger.csv";
const wahlkreiseShpUrl = "./data-sources/RBS_OD_Wahlkreise_AH2021/AWK_AH21_25833.shp";
const wahlkreiseDbfUrl = "./data-sources/RBS_OD_Wahlkreise_AH2021/AWK_AH21_25833.dbf";
const aghCsvUrl = "./data-sources/AGH_2025_by_wahlkreis_truth.csv";
const aghCommitteeStandardUrl = "./data-sources/AGH-ausschuesse-standardisiert.json";
const aghCommitteeVariantUrl = "./data-sources/AGH-ausschuesse-variable-schreibweisen.json";
const btgCsvUrl = "./data-sources/BTG_2025_by_wahlkreis_truth.csv";
const btgCommitteeStandardUrl = "./data-sources/BTG-ausschuesse-standardisiert.json";
const btgCommitteeVariantUrl = "./data-sources/BTG-ausschuesse-variable-schreibweisen.json";
const euCsvUrl = "./data-sources/EU_2025_parlamentarians_combined.csv";
const bvvBasePath = "./data-sources/BVV-Listen_2026-Mar";
const bvvCommitteeStandardUrl = "./data-sources/BVV-Listen_2026-Mar/BVV-alle-ausschuesse-standardisiert.json";
const bvvCommitteeVariantUrl = "./data-sources/BVV-Listen_2026-Mar/BVV-alle-ausschuesse-variable-schreibweisen.json";
const oparlApiListUrl = "./data-sources/BVV-Listen_2026-Mar/APIs/Opendata-Berlin-APIs.txt";
const bvvExecutiveCsvUrl = "./data-sources/Bezirksamt-Exekutivrollen.csv";
const senateExecutiveCsvUrl = "./data-sources/Senat-Exekutivrollen.csv";
const departmentKeywordLabelsUrl = "./data-sources/department-keyword-labels.json";
const bezirkArkisCsvUrl = "./data-sources/bezirke_arkis.csv";
const btgTooltipCsvUrl = "./data-sources/BTG-Wahlkreise.txt";
const btgLocalGeojsonUrl = "./data-sources/BTG-Wahlkreise-2025.geojson";

/*
  WFS layer licensing (verify on daten.berlin.de / Bundeswahlleiterin if you change services):
  - lor_2021 (Kieze), esb (Einschulbereiche), postleitzahlen: CC BY 3.0 DE — Namensnennung
    PFLICHT (each dataset has prescribed attribution text on its Berlin Open Data page). See: https://opendefinition.org/licenses/cc-by/
  - alkis_* (Ortsteile, Bezirke, Berlin Land): typically Datenlizenz Deutschland Zero 2.0 — keine
    Pflicht zur Quellenangabe (dl-de/zero); freie Nutzung ohne Nennung laut Lizenztext. See: https://opendefinition.org/licenses/dl-de/zero/
  - btg (Bundeswahlleiterin WFS): Urhebervermerk PFLICHT bei Weiterverwendung (digital/gedruckt);
    exakter Wortlaut: https://www.bundeswahlleiterin.de/bundestagswahlen/2025/wahlkreiseinteilung/downloads.html
    (Fußnote zum Copyright / dl-de/by-2.0 für Geobasis). See: https://opendefinition.org/licenses/dl-de/by-2.0/
  => You cannot rely on “no attribution anywhere”: cite LOR, ESB, PLZ, and Wahlkreise as required,
     unless you remove those layers. ALKIS-only use can omit attribution under dl-de/zero.
*/
const wfsLayers = [
  {
    id: "kieze",
    label: "Kieze (LOR)",
    url: "https://gdi.berlin.de/services/wfs/lor_2021",
    preferredTypeNames: [
      "lor_2021:a_lor_plr_2021",
      "lor_2021:a_lor_plr",
      "lor_2021:plr_2021",
      "lor_2021:kieze",
      "lor_2021:kiez"
    ],
    pane: "pane-kieze",
    zIndex: 480,
    style: { color: "#4f8bd6", weight: 1, fillOpacity: 0 },
    tooltipProps: ["plr_name", "name", "bezeichnung", "kiez"]
  },
  {
    id: "einschulbereiche",
    label: "Einschulbereiche",
    url: "https://gdi.berlin.de/services/wfs/esb",
    preferredTypeNames: ["esb:esb_2026", "esb:esb_2025", "esb:esb"],
    pane: "pane-einschul",
    zIndex: 470,
    style: { color: "#f0b44a", weight: 1, fillOpacity: 0 },
    tooltipProps: ["esb_text", "esb", "name", "bezeichnung"]
  },
  {
    id: "postleitzahlen",
    label: "Postleitzahlen",
    url: "https://gdi.berlin.de/services/wfs/postleitzahlen",
    preferredTypeNames: ["postleitzahlen:postleitzahlen", "postleitzahlen:plz"],
    pane: "pane-plz",
    zIndex: 460,
    style: { color: "#9b6df0", weight: 1, fillOpacity: 0 },
    tooltipProps: ["plz", "postleitzahl", "name"]
  },
  {
    id: "ortsteile",
    label: "Ortsteile",
    url: "https://gdi.berlin.de/services/wfs/alkis_ortsteile",
    preferredTypeNames: ["alkis_ortsteile:ortsteile"],
    pane: "pane-ortsteile",
    zIndex: 425,
    style: { color: "#5b3a88", weight: 2.0, fillOpacity: 0 },
    tooltipProps: ["NAME", "OT_NAME", "BEZIRK", "name", "ortsteil", "bezeichnung", "ot_name", "ot", "ortsteilname", "ortsteil_name", "bezirk"]
  },
  {
    id: "bezirke",
    label: "Bezirke",
    url: "https://gdi.berlin.de/services/wfs/alkis_bezirke",
    preferredTypeNames: ["alkis_bezirke:bezirksgrenzen"],
    pane: "pane-bezirke",
    zIndex: 430,
    style: { color: "#5b3a88", weight: 2.4, fillOpacity: 0, highlightColor: "#3b0b6b", highlightFillColor: "#5a189a" },
    tooltipProps: ["name", "bezirk", "bezeichnung"],
    defaultOn: true
  },
  {
    id: "btg",
    label: "Bundestag WK",
    url: "https://service.bundeswahlleiterin.de/gis/cgi-bin/mapserv?map=/home/fgs/gis/gisdocs/wahlkreise/wahlkreise2025wfs.map&service=WFS&request=GetCapabilities",
    preferredTypeNames: ["ms:Wahlkreise"],
    pane: "pane-btg",
    zIndex: 420,
    style: { color: "#7a1f2b", weight: 1.6, fillOpacity: 0, highlightColor: "#9b3a44" },
    tooltipProps: ["WKR_NAME", "WKR_NR", "WK_NAME", "WK_NR", "Wahlkreis", "Wahlkreisname", "name", "NAME"]
  },
  {
    id: "eu",
    label: "Berlin (Land)",
    url: "https://gdi.berlin.de/services/wfs/alkis_land",
    preferredTypeNames: ["alkis_land:land"],
    pane: "pane-land",
    zIndex: 410,
    style: { color: "#c8a96e", weight: 2.5, fillOpacity: 0 },
    tooltipProps: ["name", "bezeichnung"],
    defaultOn: true
  }
];

const wfsLayerById = new Map(wfsLayers.map(layer => [layer.id, layer]));

const layerLevelMap = {
  kieze: ["bezirk", "bezirksamt"],
  einschulbereiche: ["bezirk", "bezirksamt"],
  postleitzahlen: ["bezirk", "bezirksamt", "abgeordnetenhaus", "senat"],
  ortsteile: ["bezirk", "bezirksamt", "abgeordnetenhaus", "senat"],
  bezirke: ["abgeordnetenhaus", "senat", "bezirk", "bezirksamt"],
  agh: ["abgeordnetenhaus", "senat"],
  btg: ["bundestag"],
  eu: ["eu"]
};

const overlayOrder = [
  "kieze",
  "einschulbereiche",
  "postleitzahlen",
  "agh",
  "ortsteile",
  "bezirke",
  "btg",
  "eu"
];

// -----------------------------------------------------------------------
// MAP INIT
// -----------------------------------------------------------------------
const map = L.map('map', {
  center: [52.52, 13.405],
  zoom: 10,
  zoomControl: true,
  attributionControl: true
});

var OpenStreetMap_DE = L.tileLayer('https://tile.openstreetmap.de/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  className: 'osm-dark'
});
OpenStreetMap_DE.addTo(map);

overlayControl = L.control.layers(null, {}, { collapsed: true }).addTo(map);
map.on("overlayadd", (event) => {
  const id = getOverlayIdByLayer(event.layer);
  if (id) ensureWfsOverlayLoaded(id);
});

const wfsDefaults = {
  version: "2.0.0",
  outputFormat: "application/json",
  srsName: "EPSG:4326"
};

function ensurePane(name, zIndex) {
  if (map.getPane(name)) return;
  map.createPane(name);
  map.getPane(name).style.zIndex = zIndex;
}

function buildUrlWithParams(baseUrl, params) {
  const url = new URL(baseUrl);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });
  return url.toString();
}

function buildWfsCapsUrl(baseUrl) {
  return buildUrlWithParams(baseUrl, {
    service: "WFS",
    request: "GetCapabilities"
  });
}

function buildWfsGetFeatureUrl(baseUrl, typeName, outputFormat = wfsDefaults.outputFormat) {
  return buildUrlWithParams(baseUrl, {
    service: "WFS",
    request: "GetFeature",
    version: wfsDefaults.version,
    typeNames: typeName,
    outputFormat,
    srsName: wfsDefaults.srsName
  });
}

async function fetchWfsTypeNames(baseUrl) {
  const capsUrl = buildWfsCapsUrl(baseUrl);
  const res = await fetch(capsUrl);
  const text = await res.text();
  const xml = new DOMParser().parseFromString(text, "text/xml");
  const featureTypes = Array.from(xml.getElementsByTagNameNS("*", "FeatureType"));
  return featureTypes
    .map(ft => ft.getElementsByTagNameNS("*", "Name")[0]?.textContent)
    .filter(Boolean);
}

async function resolveTypeName(baseUrl, preferredTypeNames = []) {
  const names = await fetchWfsTypeNames(baseUrl);
  if (!names || names.length === 0) return null;
  for (const pref of preferredTypeNames) {
    if (names.includes(pref)) return pref;
  }
  return names[0];
}

function pickTooltipText(feature, props) {
  if (!feature?.properties) return null;
  for (const key of props || []) {
    const value = feature.properties[key];
    if (value !== null && value !== undefined && String(value).trim() !== "") {
      return String(value).trim();
    }
  }
  return null;
}

function isUselessTooltip(value) {
  if (value === null || value === undefined) return true;
  const text = String(value).trim();
  if (!text) return true;
  if (text === "AX_KommunalesGebiet") return true;
  return false;
}

function getOrtsteilTooltip(feature, props) {
  const preferred = pickTooltipText(feature, props);
  if (preferred && !isUselessTooltip(preferred) && !/^\d+$/.test(preferred)) {
    return preferred;
  }
  const fallback = pickNameLikeProperty(feature);
  if (fallback && !isUselessTooltip(fallback)) return fallback;
  return null;
}

function normalizeOverlayStyle(style = {}) {
  return {
    color: style.color || "#c8a96e",
    weight: Number.isFinite(style.weight) ? style.weight : 2,
    opacity: Number.isFinite(style.opacity) ? style.opacity : 1,
    fillColor: style.fillColor,
    fillOpacity: Number.isFinite(style.fillOpacity) ? style.fillOpacity : 0
  };
}

function lightenColor(hex, amount = 0.25) {
  if (!hex || typeof hex !== "string") return hex;
  const raw = hex.trim();
  if (!raw.startsWith("#")) return hex;
  const value = raw.slice(1);
  const full = value.length === 3
    ? value.split("").map(ch => ch + ch).join("")
    : value.length === 6
      ? value
      : null;
  if (!full) return hex;
  const num = parseInt(full, 16);
  if (Number.isNaN(num)) return hex;
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  const mix = (channel) => Math.round(channel + (255 - channel) * amount);
  const toHex = (channel) => channel.toString(16).padStart(2, "0");
  return `#${toHex(mix(r))}${toHex(mix(g))}${toHex(mix(b))}`;
}

function getHighlightStyle(baseStyle) {
  const base = normalizeOverlayStyle(baseStyle);
  const highlight = { ...base };
  const customWeight = Number.isFinite(baseStyle?.highlightWeight) ? baseStyle.highlightWeight : null;
  const customFillOpacity = Number.isFinite(baseStyle?.highlightFillOpacity) ? baseStyle.highlightFillOpacity : null;
  highlight.weight = customWeight ?? Math.max(base.weight + 2.6, base.weight * 1.9);
  highlight.color = baseStyle?.highlightColor || lightenColor(base.color, 0.45);
  const fillBase = baseStyle?.highlightFillColor || base.fillColor || base.color;
  highlight.fillColor = baseStyle?.highlightFillColor ? fillBase : lightenColor(fillBase, 0.35);
  highlight.fillOpacity = customFillOpacity ?? 0.44;
  return highlight;
}

function clearOverlaySelection() {
  if (selectedOverlayLayer && selectedOverlayBaseStyle) {
    selectedOverlayLayer.setStyle(normalizeOverlayStyle(selectedOverlayBaseStyle));
  }
  selectedOverlayLayer = null;
  selectedOverlayBaseStyle = null;
  if (selectionHighlightLayer) {
    map.removeLayer(selectionHighlightLayer);
    selectionHighlightLayer = null;
  }
}

function resetMapSelection() {
  clearOverlaySelection();
  if (selectedLayer && geoLayer) {
    geoLayer.resetStyle(selectedLayer);
  }
  selectedLayer = null;
  selectedFeature = null;
}

function showHighlightLayer(feature, style) {
  if (selectionHighlightLayer) {
    map.removeLayer(selectionHighlightLayer);
    selectionHighlightLayer = null;
  }
  if (!feature || !style) return;
  ensurePane("pane-highlight", 1000);
  selectionHighlightLayer = L.geoJSON(feature, {
    pane: "pane-highlight",
    style,
    interactive: false
  }).addTo(map);
  if (typeof selectionHighlightLayer.bringToFront === "function") {
    selectionHighlightLayer.bringToFront();
  }
}

function selectOverlayLayer(layer, baseStyle, feature) {
  if (selectedOverlayLayer && selectedOverlayLayer !== layer) {
    selectedOverlayLayer.setStyle(normalizeOverlayStyle(selectedOverlayBaseStyle));
  }
  selectedOverlayLayer = layer;
  selectedOverlayBaseStyle = baseStyle;
  layer.setStyle(normalizeOverlayStyle(baseStyle));
  if (typeof layer.bringToFront === "function") {
    layer.bringToFront();
  }
  showHighlightLayer(feature, getHighlightStyle(baseStyle));
}

function buildOverlayLayer(data, layerConfig, baseStyle) {
  const { id, pane, tooltipProps } = layerConfig;
  return L.geoJSON(data, {
    pane,
    style: baseStyle,
    onEachFeature: (feature, lyr) => {
      const tooltip = id === "eu"
        ? null
        : id === "btg"
          ? getBtgTooltip(feature)
          : id === "bezirke"
            ? null
            : id === "ortsteile"
              ? getOrtsteilTooltip(feature, tooltipProps)
              : pickTooltipText(feature, tooltipProps);
      if (tooltip) {
        lyr.bindTooltip(tooltip, {
          permanent: false,
          direction: "center",
          className: "district-tooltip",
          opacity: 0.9
        });
      }
      lyr.on("click", () => {
        selectOverlayLayer(lyr, baseStyle, feature);
        handleLayerClick(id, feature);
      });
    }
  });
}

function pickNameLikeProperty(feature) {
  if (!feature?.properties) return null;
  for (const [key, value] of Object.entries(feature.properties)) {
    if (!key) continue;
    if (!/name|bez|ort|teil/i.test(key)) continue;
    const text = String(value ?? "").trim();
    if (!text) continue;
    if (/^\d+$/.test(text)) continue;
    if (isUselessTooltip(text)) continue;
    return text;
  }
  return null;
}

function getBezirkNameFromFeature(feature) {
  const rawName = pickProp(feature, ["name", "bezirk", "bezeichnung", "bezirkname", "bezirk_name", "gen"]);
  if (rawName) {
    const trimmed = String(rawName).trim();
    const canonical = getCanonicalBezirkName(trimmed);
    if (canonical) return canonical;
    if (trimmed && !/^\d+$/.test(trimmed)) return trimmed;
    const codeFromName = normalizeArkis(trimmed);
    const mapped = bezirkByArkis.get(codeFromName);
    if (mapped) return mapped;
  }
  const code = pickProp(feature, ["ars", "arkis", "rsb", "rs", "schluessel", "bezirksschluessel", "gkz", "ags"]);
  const normalized = normalizeArkis(code);
  if (normalized) {
    const mapped = bezirkByArkis.get(normalized);
    if (mapped) return mapped;
  }
  return rawName ? (getCanonicalBezirkName(String(rawName).trim()) || String(rawName).trim()) : null;
}

function getBtgTooltip(feature) {
  const props = feature?.properties || {};
  const bwk = findWkrValue(props);
  const mapping = bwk ? btgTooltipByBwk.get(bwk) : null;
  const nameFromMapping = mapping?.name || "";
  const bezNameFromWahlkreis = getBezirkNameFromBtgName(nameFromMapping);
  if (bezNameFromWahlkreis) return bezNameFromWahlkreis;
  const bez = mapping?.bez || normalizeBez(props.BEZ || props.Bez || props.bez);
  const bezName = bez ? districtByNumber.get(bez)?.name : null;
  if (bezName) return bezName;
  if (mapping?.name) return mapping.name;
  return pickTooltipText(feature, ["name", "WKR_NAME", "WK_NAME", "Wahlkreis", "Wahlkreisname"]);
}

function getBezirkNameFromBtgName(value) {
  if (!value) return "";
  const raw = String(value).trim();
  if (!raw) return "";
  const lookup = {
    "Berlin-Mitte": "Mitte",
    "Berlin-Pankow": "Pankow",
    "Berlin-Reinickendorf": "Reinickendorf",
    "Berlin-Spandau & Charlottenburg Nord": "Spandau / Charlottenburg-Wilmersdorf",
    "Berlin-Steglitz-Zehlendorf": "Steglitz-Zehlendorf",
    "Berlin-Charlottenburg-Wilmersdorf": "Charlottenburg-Wilmersdorf",
    "Berlin-Tempelhof-Schöneberg": "Tempelhof-Schöneberg",
    "Berlin-Neukölln": "Neukölln",
    "Berlin-Fr.-Kreuzberg & Prenzl. Berg Ost": "Friedrichshain-Kreuzberg / Pankow",
    "Berlin-Treptow-Köpenick": "Treptow-Köpenick",
    "Berlin-Marzahn-Hellersdorf": "Marzahn-Hellersdorf",
    "Berlin-Lichtenberg": "Lichtenberg"
  };
  if (lookup[raw]) return lookup[raw];
  if (raw.startsWith("Berlin-")) return raw.replace(/^Berlin-/, "").trim();
  return raw;
}

function normalizeBezirkKey(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/^bezirk\s+/i, "")
    .replace(/^berlin[-\s]*/i, "")
    .replace(/fr\.\s*-?\s*kreuzberg/g, "friedrichshain-kreuzberg")
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "");
}

function getCanonicalBezirkName(value, bez) {
  const normalizedBez = normalizeBez(bez);
  if (normalizedBez) {
    const fromDistrictMap = districtByNumber.get(normalizedBez)?.name;
    if (fromDistrictMap) return fromDistrictMap;
    if (BEZIRK_FALLBACK[normalizedBez]) return BEZIRK_FALLBACK[normalizedBez];
  }

  const raw = String(value || "").trim();
  if (!raw) return "";

  const arkisCode = normalizeArkis(raw);
  if (arkisCode) {
    const fromArkis = bezirkByArkis.get(arkisCode);
    if (fromArkis) return fromArkis;
  }

  const key = normalizeBezirkKey(raw);
  if (!key) return "";

  for (const name of Object.keys(bezirkeData)) {
    if (normalizeBezirkKey(name) === key) return name;
  }

  return "";
}

function getContextBezirkName(context) {
  if (!context) return "";
  return getCanonicalBezirkName(context.bezirkName, context.bez);
}

function rebuildOverlayControl() {
  if (!map) return;
  if (overlayControl) {
    map.removeControl(overlayControl);
  }
  overlayControl = L.control.layers(null, {}, { collapsed: true }).addTo(map);

  const labelById = new Map();
  wfsLayers.forEach(layer => labelById.set(layer.id, layer.label));
  labelById.set("agh", "Abgeordnetenhaus WK");

  overlayOrder.forEach(id => {
    const layer = id === "agh" ? aghOverlay : wfsOverlayLayers.get(id);
    if (!layer) return;
    const label = labelById.get(id) || id;
    overlayControl.addOverlay(layer, label);
  });
}

function getOverlayLayerById(id) {
  if (id === "agh") return aghOverlay;
  return wfsOverlayLayers.get(id);
}

function getOverlayIdByLayer(layer) {
  if (!layer) return null;
  for (const [id, overlay] of wfsOverlayLayers.entries()) {
    if (overlay === layer) return id;
  }
  return null;
}

function applyLayerSelection(level) {
  const wanted = new Set(mapSelectionByLevelIds[level] || []);
  const allIds = new Set([...overlayOrder, "agh"]);
  allIds.forEach(id => {
    const layer = getOverlayLayerById(id);
    if (!layer) return;
    if (wanted.has(id)) {
      if (id !== "agh") {
        ensureWfsOverlayLoaded(id);
      }
      if (!map.hasLayer(layer)) layer.addTo(map);
    } else {
      if (map.hasLayer(layer)) map.removeLayer(layer);
    }
  });
}

function createWfsPlaceholder(layerConfig) {
  const { id, pane, zIndex, style } = layerConfig;
  ensurePane(pane, zIndex);
  const baseStyle = normalizeOverlayStyle(style || {});
  const layer = L.geoJSON([], { pane, style: baseStyle });
  wfsOverlayLayers.set(id, layer);
  wfsOverlayState.set(id, { status: "placeholder" });
  return layer;
}

async function loadWfsOverlayLayer(layerConfig) {
  const { id, label, url, preferredTypeNames, pane, zIndex, style } = layerConfig;
  const baseStyle = style || {};
  try {
    if (id === "btg") {
      ensurePane(pane, zIndex);
      const localData = await loadBtgGeoJSONFromShapefile();
      console.info("BTG layer loaded from local GeoJSON (lazy).");
      return buildOverlayLayer(localData, layerConfig, baseStyle);
    }

    ensurePane(pane, zIndex);
    const typeName = await resolveTypeName(url, preferredTypeNames);
    if (!typeName) throw new Error(`No WFS typename found for ${label}`);
    const featureUrl = buildWfsGetFeatureUrl(url, typeName);
    let data = null;
    try {
      const res = await fetch(featureUrl);
      data = await res.json();
    } catch (err) {
      const altUrl = buildWfsGetFeatureUrl(url, typeName, "application/json; subtype=geojson");
      const altRes = await fetch(altUrl);
      data = await altRes.json();
    }
    return buildOverlayLayer(data, layerConfig, baseStyle);
  } catch (err) {
    console.warn(`WFS layer failed: ${label}`, err);
    if (id === "btg") {
      try {
        ensurePane(pane, zIndex);
        const localData = await loadBtgGeoJSONFromShapefile();
        console.info("BTG layer loaded from local GeoJSON fallback.");
        return buildOverlayLayer(localData, layerConfig, baseStyle);
      } catch (localErr) {
        console.warn("BTG local GeoJSON fallback failed.", localErr);
      }
    }
    return null;
  }
}

function replaceWfsOverlayLayer(id, newLayer) {
  const oldLayer = wfsOverlayLayers.get(id);
  const wasOnMap = oldLayer ? map.hasLayer(oldLayer) : false;
  if (oldLayer && map.hasLayer(oldLayer)) {
    map.removeLayer(oldLayer);
  }
  wfsOverlayLayers.set(id, newLayer);
  if (wasOnMap) {
    newLayer.addTo(map);
  }
  rebuildOverlayControl();
}

async function ensureWfsOverlayLoaded(id) {
  if (!id || id === "agh") return;
  const state = wfsOverlayState.get(id) || { status: "placeholder" };
  if (state.status === "loading" || state.status === "loaded") return;
  const layerConfig = wfsLayerById.get(id);
  if (!layerConfig) return;
  wfsOverlayState.set(id, { status: "loading" });
  try {
    const layer = await loadWfsOverlayLayer(layerConfig);
    if (!layer) throw new Error(`WFS layer could not be loaded for ${id}`);
    replaceWfsOverlayLayer(id, layer);
    wfsOverlayState.set(id, { status: "loaded" });
  } catch (err) {
    console.warn(`WFS overlay lazy-load failed for ${id}`, err);
    wfsOverlayState.set(id, { status: "error" });
  }
}

function initOverlayLayers() {
  wfsLayers.forEach(layerConfig => {
    createWfsPlaceholder(layerConfig);
  });
  rebuildOverlayControl();
  applyLayerSelection(currentLevel);
}

// -----------------------------------------------------------------------
// GeoJSON – generated at runtime from QGIS data (AWK_AH21_25833.shp + CSV)
// -----------------------------------------------------------------------
proj4.defs("EPSG:25833", "+proj=utm +zone=33 +ellps=GRS80 +units=m +no_defs +type=crs");

function normalizeBez(value) {
  if (value === null || value === undefined) return "";
  return String(value).padStart(2, "0");
}

function normalizeAwk(value) {
  if (value === null || value === undefined) return "";
  return String(value).padStart(4, "0");
}

function normalizeParty(value) {
  const raw = String(value || "").trim();
  const upper = raw.toUpperCase();
  if (upper === "FRCDU") return "CDU";
  if (upper === "FRSPD") return "SPD";
  if (upper === "PARTEILOS") return "parteilos";
  if (upper === "BVO FDP") return "FDP";
  if (["B'90/G", "B´90/GRÜ", "B90", "B90GRÜNE", "BÜ 90/GR", "BÜGR", "BÜGRÜ", "G BÜGR", "GRÜ", "GRÜN"].includes(upper)) return "Grüne";
  if (["DIELINKE", "LIN", "PDS", "LI.PDS", "WASG", "WASB", "WAS-B", "BVO WASG"].includes(upper)) return "Linke";
  if (["PIR", "PIRATEN", "PIRATENPARTEI"].includes(upper)) return "Andere";
  if (["MENSCH-UMWELT-TIERSCHUTZ", "TP", "TSP"].includes(upper)) return "Tierschutzpartei";
  if (upper === "DIEPRT" || upper === "PARTEI") return "Die PARTEI";
  if (upper === "GRAUE") return "Die Grauen";
  if (["EINZELVERORDNETE/R", "EINZELVERORDNETE", "EINZELVERORDNETER", "FBV", "FRAKTLOS", "FRLOSBV"].includes(upper)) return "parteilos";
  if (["STATT", "SAG", "BÜSF", "NPD", "BVO NPD"].includes(upper)) return "Andere";
  if (upper.includes("BÜNDNIS 90") || upper === "GRÜNE" || upper === "GRUENE" || upper === "BÜ 90/GRÜNE" || upper === "BU 90/GRUENE") return "Grüne";
  if (upper === "DIE LINKE" || upper === "LINKE") return "Linke";
  if (upper === "CDU" || upper.includes("CHRISTLICH DEMOKRATISCHE UNION")) return "CDU";
  if (upper === "SPD" || upper.includes("SOZIALDEMOKRATISCHE")) return "SPD";
  if (upper === "FDP" || upper.includes("FREIE DEMOKRATISCHE")) return "FDP";
  if (upper === "AFD" || upper.includes("ALTERNATIVE FÜR DEUTSCHLAND")) return "AfD";
  if (/FRAKTIONSLOS|PARTEILOS/i.test(raw)) return "parteilos";
  if (upper === "FRAKTIONSLOS" || upper === "EINZELVERORDNETE" || upper === "EINZELVERORDNETER") return "parteilos";
  return raw;
}

function partyClassName(value) {
  return String(value || "").trim().replace(/\s+/g, "-");
}

function normalizePartyLabel(value) {
  const normalized = normalizeParty(value);
  return normalized || "parteilos";
}

function normalizePartyFilterValue(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  if (raw === "Andere") return "Andere";
  return normalizePartyLabel(raw);
}

function normalizeArkis(value) {
  if (value === null || value === undefined) return "";
  const raw = String(value).trim();
  if (!raw) return "";
  const digits = raw.replace(/\D/g, "");
  if (digits.length >= 8) return digits.slice(-8);
  return raw;
}

function reprojectCoords(coords) {
  const result = proj4("EPSG:25833", "EPSG:4326", coords);
  return [result[0], result[1]];
}

function reprojectGeometry(geom) {
  if (!geom) return geom;
  const type = geom.type;
  if (type === "Point") return { ...geom, coordinates: reprojectCoords(geom.coordinates) };
  if (type === "MultiPoint" || type === "LineString") {
    return { ...geom, coordinates: geom.coordinates.map(reprojectCoords) };
  }
  if (type === "MultiLineString" || type === "Polygon") {
    return { ...geom, coordinates: geom.coordinates.map(ring => ring.map(reprojectCoords)) };
  }
  if (type === "MultiPolygon") {
    return { ...geom, coordinates: geom.coordinates.map(poly => poly.map(ring => ring.map(reprojectCoords))) };
  }
  return geom;
}

function pickProp(feature, keys) {
  if (!feature?.properties) return null;
  for (const key of keys) {
    const value = feature.properties[key];
    if (value !== null && value !== undefined && String(value).trim() !== "") {
      return value;
    }
  }
  return null;
}

function getGeometryBounds(geom) {
  if (!geom) return null;
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  const visit = (coords) => {
    if (typeof coords[0] === "number") {
      const x = coords[0], y = coords[1];
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
      return;
    }
    coords.forEach(visit);
  };
  visit(geom.coordinates);
  if (!Number.isFinite(minX)) return null;
  return { minX, minY, maxX, maxY };
}

function getFeatureCentroid(feature) {
  const geom = feature?.geometry;
  if (!geom) return null;
  if (geom.type === "Point") return geom.coordinates;
  const bounds = getGeometryBounds(geom);
  if (!bounds) return null;
  return [(bounds.minX + bounds.maxX) / 2, (bounds.minY + bounds.maxY) / 2];
}

function pointInRing(point, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const xi = ring[i][0], yi = ring[i][1];
    const xj = ring[j][0], yj = ring[j][1];
    const intersect = ((yi > point[1]) !== (yj > point[1])) &&
      (point[0] < (xj - xi) * (point[1] - yi) / (yj - yi + 0.0) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}

function pointInPolygon(point, polygon) {
  if (!pointInRing(point, polygon[0])) return false;
  for (let i = 1; i < polygon.length; i++) {
    if (pointInRing(point, polygon[i])) return false;
  }
  return true;
}

function featureContainsPoint(feature, point) {
  const geom = feature?.geometry;
  if (!geom || !point) return false;
  if (geom.type === "Polygon") return pointInPolygon(point, geom.coordinates);
  if (geom.type === "MultiPolygon") {
    return geom.coordinates.some(poly => pointInPolygon(point, poly));
  }
  return false;
}

function findContainingAghFeature(point) {
  if (!berlinGeoJSON?.features) return null;
  for (const feature of berlinGeoJSON.features) {
    if (featureContainsPoint(feature, point)) return feature;
  }
  return null;
}

function loadDistrictCSV() {
  return new Promise((resolve, reject) => {
    Papa.parse(districtCsvUrl, {
      download: true,
      header: true,
      delimiter: ";",
      skipEmptyLines: true,
      complete: (result) => {
        result.data.forEach(row => {
          const bez = normalizeBez(row.Bezirksnummer);
          const name = (row.Bezirksname || "").trim();
          const winner = (row.Gewinner || "").replace("Die Linke", "Linke");
          if (!bez || !name) return;
          districtByNumber.set(bez, { name, winner });
          districtByName.set(name, { bez, winner });
        });
        resolve();
      },
      error: (err) => reject(err)
    });
  });
}

function loadAghCSV() {
  return loadAghCommitteeMaps().then(() => new Promise((resolve, reject) => {
    Papa.parse(aghCsvUrl, {
      download: true,
      header: true,
      delimiter: ";",
      skipEmptyLines: true,
      complete: (result) => {
        result.data.forEach(row => {
          const awk = normalizeAwk(row.AWK);
          if (!awk) return;
          const name = (row.MdA_2025 || row.Gewaehlte || "").trim();
          const party = normalizeParty(row.party_short_name || row.Partei || row.party_name || "");
          const wahlkreis = (row.Wahlkreis || row.electoral_district_label || "").trim();
          const percent = (row.Anteil || "").trim();
          const mandateType = String(row.mandate_type || row.mandate_won || "").toLowerCase();
          const art = mandateType === "constituency" ? "Direkt" : "Liste";
          const note = (row.info || row.Hinweis || "").trim();
          const committeeMemberships = parseAghCommitteeMemberships(row);
          const entry = { name, party, wahlkreis, percent, art, note, awk };
          const officialWebsite = normalizePoliticianLinkUrl(row.official_website || row.website || row.SourceURL || "");
          if (officialWebsite) entry.website = officialWebsite;
          if (committeeMemberships.length > 0) entry.committee_memberships = committeeMemberships;
          if (!aghByAwk.has(awk)) aghByAwk.set(awk, []);
          aghByAwk.get(awk).push(entry);
        });
        resolve();
      },
      error: (err) => reject(err)
    });
  }));
}

function parsePipeList(value) {
  return String(value || "")
    .split(/\s*\|\s*/)
    .map(part => String(part || "").trim())
    .filter(Boolean);
}

function parseJsonArrayField(value) {
  const raw = String(value || "").trim();
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (_) {
    return [];
  }
}

const AGH_COMMITTEE_ROLE_LABELS = {
  chairperson: "Ausschussvorsitz",
  vice_chairperson: "stellv. Ausschussvorsitz",
  foreperson: "Obmann/-frau",
  spokesperson: "Sprecher/in",
  alternate_spokesperson: "stellv. Sprecher/in",
  secretary: "Schriftführung",
  alternate_secretary: "stellv. Schriftführung",
  advisory_member: "Beratendes Mitglied",
  eligible_member: "Mitwirkungsberechtigtes Mitglied",
  member: "Ausschussmitglied",
  alternate_member: "stellv. Ausschussmitglied",
  rapporteur: "Berichterstatter/in"
};

const AGH_COMMITTEE_ROLE_RANK = {
  "Ausschussvorsitz": 11,
  "stellv. Ausschussvorsitz": 10,
  "Obmann/-frau": 9,
  "Sprecher/in": 8,
  "stellv. Sprecher/in": 7,
  "Schriftführung": 6,
  "stellv. Schriftführung": 5,
  "Berichterstatter/in": 4,
  "Beratendes Mitglied": 3,
  "Mitwirkungsberechtigtes Mitglied": 2,
  "Ausschussmitglied": 1,
  "stellv. Ausschussmitglied": 0
};

function normalizeAghCommitteeRole(value, additionalRoles) {
  const key = String(value || "").trim().toLowerCase();
  if (key && AGH_COMMITTEE_ROLE_LABELS[key]) return AGH_COMMITTEE_ROLE_LABELS[key];
  const additional = Array.isArray(additionalRoles) ? additionalRoles : (additionalRoles ? [additionalRoles] : []);
  const lowerAdditional = additional.map(item => String(item || "").trim().toLowerCase()).filter(Boolean);
  if (lowerAdditional.includes("spokesperson")) return AGH_COMMITTEE_ROLE_LABELS.spokesperson;
  if (lowerAdditional.includes("alternate_spokesperson")) return AGH_COMMITTEE_ROLE_LABELS.alternate_spokesperson;
  return "Ausschussmitglied";
}

function buildAghCommitteeMembership(label, roleLabel) {
  const committeeInfo = resolveAghCommitteeFromLabels([label]);
  const membership = {
    name: committeeInfo?.name || String(label || "").trim(),
    role: roleLabel || "Ausschussmitglied"
  };
  if (committeeInfo) {
    membership.committee = committeeInfo;
    membership.short = committeeInfo.short;
    membership.committeeLabel = formatCommitteeShort(committeeInfo);
  }
  return membership;
}

function buildBtgCommitteeMembership(label, roleLabel) {
  const committeeInfo = resolveBtgCommitteeFromLabels([label]);
  const membership = {
    name: committeeInfo?.name || String(label || "").trim(),
    role: roleLabel || "Ausschussmitglied"
  };
  if (committeeInfo) {
    membership.committee = committeeInfo;
    membership.short = committeeInfo.short;
    membership.committeeLabel = formatCommitteeShort(committeeInfo);
  }
  return membership;
}

function parseAghCommitteeMemberships(row) {
  const memberships = [];
  const rawStructured = parseJsonArrayField(
    row.committee_memberships_json ||
    row.committee_memberships ||
    row.CommitteeMembershipsJson
  );

  if (rawStructured.length > 0) {
    rawStructured.forEach(item => {
      const label = String(item?.committee || item?.label || item?.committee_label || "").trim();
      if (!label) return;
      const roleLabel = normalizeAghCommitteeRole(item?.committee_role || item?.role, item?.committee_roles_additional);
      memberships.push(buildAghCommitteeMembership(label, roleLabel));
    });
  } else {
    const committees = parsePipeList(row.committees || row.committee || row.Committees);
    const spokespersonCommittees = new Set(parsePipeList(row.spokesperson_role || row.spokesperson || row.SpokespersonRole));
    committees.forEach(label => {
      const roleLabel = spokespersonCommittees.has(label) ? "Sprecher/in" : "Ausschussmitglied";
      memberships.push(buildAghCommitteeMembership(label, roleLabel));
    });
    spokespersonCommittees.forEach(label => {
      const labelKey = normalizeCommitteeKey(label);
      if (memberships.some(item => normalizeCommitteeKey(item?.committee?.name || item?.name || "") === labelKey)) return;
      memberships.push(buildAghCommitteeMembership(label, "Sprecher/in"));
    });
  }

  const uniqueByCommittee = new Map();
  memberships.forEach(item => {
    const key = normalizeCommitteeKey(item?.committee?.name || item?.name || item?.short || "");
    if (!key) return;
    const current = uniqueByCommittee.get(key);
    const nextRank = AGH_COMMITTEE_ROLE_RANK[item.role] ?? -1;
    const currentRank = current ? (AGH_COMMITTEE_ROLE_RANK[current.role] ?? -1) : -1;
    if (!current || nextRank > currentRank) {
      uniqueByCommittee.set(key, item);
    }
  });
  return Array.from(uniqueByCommittee.values());
}

function parseBtgCommitteeMemberships(row) {
  const memberships = [];
  const rawStructured = parseJsonArrayField(
    row.committee_memberships_json ||
    row.committee_memberships ||
    row.CommitteeMembershipsJson
  );

  if (rawStructured.length > 0) {
    rawStructured.forEach(item => {
      const label = String(item?.committee || item?.label || item?.committee_label || "").trim();
      if (!label) return;
      const roleLabel = normalizeAghCommitteeRole(item?.committee_role || item?.role, item?.committee_roles_additional);
      memberships.push(buildBtgCommitteeMembership(label, roleLabel));
    });
  } else {
    const committees = parsePipeList(row.committees || row.committee || row.Committees);
    const spokespersonCommittees = new Set(parsePipeList(row.spokesperson_role || row.spokesperson || row.SpokespersonRole));
    committees.forEach(label => {
      const roleLabel = spokespersonCommittees.has(label) ? "Sprecher/in" : "Ausschussmitglied";
      memberships.push(buildBtgCommitteeMembership(label, roleLabel));
    });
    spokespersonCommittees.forEach(label => {
      const labelKey = normalizeCommitteeKey(label);
      if (memberships.some(item => normalizeCommitteeKey(item?.committee?.name || item?.name || "") === labelKey)) return;
      memberships.push(buildBtgCommitteeMembership(label, "Sprecher/in"));
    });
  }

  const uniqueByCommittee = new Map();
  memberships.forEach(item => {
    const key = normalizeCommitteeKey(item?.committee?.name || item?.name || item?.short || "");
    if (!key) return;
    const current = uniqueByCommittee.get(key);
    const nextRank = AGH_COMMITTEE_ROLE_RANK[item.role] ?? -1;
    const currentRank = current ? (AGH_COMMITTEE_ROLE_RANK[current.role] ?? -1) : -1;
    if (!current || nextRank > currentRank) {
      uniqueByCommittee.set(key, item);
    }
  });
  return Array.from(uniqueByCommittee.values());
}

function normalizeWkr(value) {
  if (value === null || value === undefined) return "";
  const raw = String(value).trim();
  if (!raw) return "";
  const num = Number.parseInt(raw, 10);
  return Number.isNaN(num) ? raw : String(num);
}

function findWkrValue(props) {
  if (!props) return "";
  const keys = [
    "BWK_NR", "BWKNR", "BWK", "BWK_NUMMER", "BWK_NR_BEZ",
    "WKR_NR", "WK_NR", "WKR", "WKRNR", "WKNR",
    "Wahlkreis", "Wahlkreisnr", "Wahlkreisnummer", "WKR_NUMMER", "WK_NUMMER"
  ];
  const direct = keys.map(k => props[k]).find(v => v !== null && v !== undefined && String(v).trim() !== "");
  const normalizedDirect = normalizeWkr(direct);
  if (normalizedDirect) return normalizedDirect;
  for (const [key, value] of Object.entries(props)) {
    if (!key) continue;
    if (!/BWK|WKR|WAHLKREIS/i.test(key)) continue;
    const v = normalizeWkr(value);
    if (v) return v;
  }
  return "";
}

function findWkrName(props) {
  if (!props) return "";
  const keys = ["BWK_NAME", "BWK_BEZ", "WKR_NAME", "WK_NAME", "Wahlkreisname", "NAME", "name"];
  const direct = keys.map(k => props[k]).find(v => v !== null && v !== undefined && String(v).trim() !== "");
  if (direct && !/^\d+$/.test(String(direct).trim())) return String(direct).trim();
  for (const [key, value] of Object.entries(props)) {
    if (!key) continue;
    if (!/NAME|BEZ/i.test(key)) continue;
    const v = String(value ?? "").trim();
    if (v && !/^\d+$/.test(v)) return v;
  }
  return "";
}

function buildFullName(row) {
  const parts = [
    row.Titel,
    row.Vornamen,
    row.Namenszusatz,
    row.Nachname
  ].map(v => (v || "").trim()).filter(Boolean);
  return parts.join(" ");
}

function buildBtgMandateLine(entry) {
  const wkr = entry?.wkr ? `WK ${entry.wkr}` : "";
  const base = entry?.art === "Direkt" ? "Direktmandat" : "Listenmandat";
  return wkr ? `${base} · ${wkr}` : base;
}

function parseIsoDate(value) {
  if (!value) return null;
  const raw = String(value).trim();
  if (!raw) return null;
  if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) {
    return new Date(`${raw}T00:00:00`);
  }
  const dt = new Date(raw);
  return Number.isNaN(dt.getTime()) ? null : dt;
}

function isActiveMembership(membership, today = new Date()) {
  if (!membership) return false;
  const start = parseIsoDate(membership.startDate);
  const end = parseIsoDate(membership.endDate);
  if (start && start > today) return false;
  if (end && end < today) return false;
  return true;
}

function pickLatestMembership(list = []) {
  if (!list.length) return null;
  return [...list].sort((a, b) => {
    const aDate = parseIsoDate(a.startDate);
    const bDate = parseIsoDate(b.startDate);
    if (aDate && bDate) return bDate - aDate;
    if (aDate) return -1;
    if (bDate) return 1;
    return 0;
  })[0];
}

function cleanOrgLabel(label) {
  return String(label || "")
    .replace(/^Fraktion\s+der\s+/i, "")
    .replace(/^Fraktion\s+/i, "")
    .replace(/^Gruppe\s+der\s+/i, "")
    .replace(/^Gruppe\s+/i, "")
    .trim();
}

function normalizeOparlClasses(value) {
  if (!value) return [];
  const raw = Array.isArray(value) ? value : [value];
  return raw
    .map(v => String(v || "").toLowerCase().trim())
    .filter(v => v.length);
}

function orgLooksLikeBvv(org) {
  if (!org) return false;
  const classes = normalizeOparlClasses(org.classification);
  if (classes.some(c =>
    c === "bvv" ||
    c.includes("bezirksverordnetenversammlung") ||
    c.includes("bezirksparlament") ||
    c.includes("bezirksverordnete") ||
    c.includes("stadtbezirk")
  )) {
    return true;
  }
  const name = String(org.name || org.shortName || "").toLowerCase();
  return name.includes("bvv") || name.includes("bezirksverordneten");
}

function roleLooksLikeBvv(role) {
  const r = String(role || "").toLowerCase();
  return /bezirksverordnet|bvv/i.test(r);
}

function getBvvRoleOrgContexts(org) {
  const contexts = [];
  if (orgLooksLikeFaction(org)) contexts.push("fraktion");
  if (orgLooksLikeBvv(org)) contexts.push("parlament");
  if (orgLooksLikeCommittee(org)) contexts.push("ausschuss");
  const classes = normalizeOparlClasses(org?.classification);
  const name = String(org?.name || org?.shortName || "").toLowerCase();
  if (
    classes.some(c =>
      c.includes("gremium") ||
      c.includes("beirat") ||
      c.includes("kommission") ||
      c.includes("rat") ||
      c.includes("vorstand")
    ) ||
    /aeltestenrat|ältestenrat|beirat|kommission|vorstand/.test(name)
  ) {
    contexts.push("gremium");
  }
  if (contexts.length === 0) contexts.push("sonstiges");
  return contexts;
}

function orgLooksLikeFaction(org) {
  if (!org) return false;
  const classes = normalizeOparlClasses(org.classification);
  if (classes.some(c => c.includes("fraktion") || c.includes("gruppe"))) return true;
  const name = String(org.name || org.shortName || "").toLowerCase();
  return name.includes("fraktion") || name.includes("gruppe");
}

function orgLooksLikeCommittee(org) {
  if (!org) return false;
  const classes = normalizeOparlClasses(org.classification);
  if (classes.some(c => c.includes("ausschuss"))) return true;
  const name = String(org.name || org.shortName || "").toLowerCase();
  return name.includes("ausschuss");
}

function createCommitteeRegistry() {
  return {
    dataLoaded: false,
    loading: null,
    standards: [],
    byShort: new Map(),
    variantToShort: new Map(),
    normalizedList: []
  };
}

const bvvCommitteeRegistry = createCommitteeRegistry();
const aghCommitteeRegistry = createCommitteeRegistry();
const btgCommitteeRegistry = createCommitteeRegistry();

function normalizeCommitteeKey(value) {
  return String(value || "")
    .replace(/\s*\(\s*kalender\s*\)\s*$/i, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function buildCommitteeKeyVariants(value) {
  const base = normalizeCommitteeKey(value);
  const compact = base.replace(/\s+/g, "");
  const variants = [];
  if (base) variants.push(base);
  if (compact && compact !== base) variants.push(compact);
  return variants;
}

function registerCommitteeVariantInRegistry(registry, label, short) {
  if (!label || !short) return;
  if (registry.byShort.size && !registry.byShort.has(short)) return;
  buildCommitteeKeyVariants(label).forEach(key => {
    if (!registry.variantToShort.has(key)) {
      registry.variantToShort.set(key, short);
    }
  });
}

function buildCommitteeMapsInRegistry(registry, standards, variants) {
  registry.standards = Array.isArray(standards) ? standards : [];
  registry.byShort.clear();
  registry.variantToShort.clear();
  registry.normalizedList = [];

  registry.standards.forEach(entry => {
    if (!entry || !entry.short) return;
    registry.byShort.set(entry.short, entry);
    registerCommitteeVariantInRegistry(registry, entry.short, entry.short);
    registerCommitteeVariantInRegistry(registry, entry.name, entry.short);
    registerCommitteeVariantInRegistry(registry, entry.slug, entry.short);
    registry.normalizedList.push({
      entry,
      keyShort: normalizeCommitteeKey(entry.short).replace(/\s+/g, ""),
      keyName: normalizeCommitteeKey(entry.name).replace(/\s+/g, "")
    });
  });

  if (variants && typeof variants === "object") {
    Object.entries(variants).forEach(([key, short]) => {
      registerCommitteeVariantInRegistry(registry, key, short);
    });
  }
}

function buildCommitteeMaps(standards, variants) {
  buildCommitteeMapsInRegistry(bvvCommitteeRegistry, standards, variants);
}

async function loadCommitteeMapsForRegistry(registry, standardUrl, variantUrl, warningLabel) {
  if (registry.dataLoaded) return;
  if (registry.loading) return registry.loading;
  registry.loading = (async () => {
    try {
      const [standardRes, variantRes] = await Promise.all([
        fetch(standardUrl),
        fetch(variantUrl)
      ]);
      const standards = standardRes.ok ? await standardRes.json() : [];
      const variants = variantRes.ok ? await variantRes.json() : {};
      buildCommitteeMapsInRegistry(registry, standards, variants);
    } catch (err) {
      console.warn(`${warningLabel} committee normalization data could not be loaded.`, err);
    }
    registry.dataLoaded = true;
    registry.loading = null;
  })();
  return registry.loading;
}

async function loadCommitteeMaps() {
  return loadCommitteeMapsForRegistry(
    bvvCommitteeRegistry,
    bvvCommitteeStandardUrl,
    bvvCommitteeVariantUrl,
    "BVV"
  );
}

async function loadAghCommitteeMaps() {
  return loadCommitteeMapsForRegistry(
    aghCommitteeRegistry,
    aghCommitteeStandardUrl,
    aghCommitteeVariantUrl,
    "AGH"
  );
}

async function loadBtgCommitteeMaps() {
  return loadCommitteeMapsForRegistry(
    btgCommitteeRegistry,
    btgCommitteeStandardUrl,
    btgCommitteeVariantUrl,
    "BTG"
  );
}

function resolveCommitteeByPrefixInRegistry(registry, label) {
  const key = normalizeCommitteeKey(label).replace(/\s+/g, "");
  if (!key || key.length > 6) return null;
  const matches = registry.normalizedList.filter(item =>
    item.keyShort.startsWith(key) || item.keyName.startsWith(key)
  );
  return matches.length === 1 ? matches[0].entry : null;
}

function resolveCommitteeFromLabelsInRegistry(registry, labels) {
  const list = Array.isArray(labels) ? labels : [];
  for (const label of list) {
    if (!label) continue;
    const variants = buildCommitteeKeyVariants(label);
    for (const key of variants) {
      const short = registry.variantToShort.get(key);
      if (short && registry.byShort.has(short)) {
        return registry.byShort.get(short);
      }
    }
    const prefixMatch = resolveCommitteeByPrefixInRegistry(registry, label);
    if (prefixMatch) return prefixMatch;
  }
  return null;
}

function resolveCommitteeByPrefix(label) {
  return resolveCommitteeByPrefixInRegistry(bvvCommitteeRegistry, label);
}

function resolveCommitteeFromLabels(labels) {
  return resolveCommitteeFromLabelsInRegistry(bvvCommitteeRegistry, labels);
}

function resolveAghCommitteeFromLabels(labels) {
  return resolveCommitteeFromLabelsInRegistry(aghCommitteeRegistry, labels);
}

function resolveBtgCommitteeFromLabels(labels) {
  return resolveCommitteeFromLabelsInRegistry(btgCommitteeRegistry, labels);
}

function getCommitteeLabels(membership, org) {
  const labels = [];
  const orgShort = org?.shortName || org?.short || "";
  const orgName = org?.name || "";
  const membershipOrg = membership?.organization || {};
  const membershipShort = membershipOrg?.shortName || membershipOrg?.short || "";
  const membershipName = membershipOrg?.name || "";
  [orgShort, orgName, membershipShort, membershipName].forEach(value => {
    const v = String(value || "").trim();
    if (v) labels.push(v);
  });
  return labels;
}

function formatCommitteeShort(committeeInfo) {
  if (!committeeInfo) return "";
  const short = String(committeeInfo.short || committeeInfo.name || "").trim();
  if (!short) return "";
  const emoji = String(committeeInfo.emoji || "").trim();
  return emoji ? `${emoji} ${short}` : short;
}

function formatCommitteeLong(committeeInfo) {
  if (!committeeInfo) return "";
  const name = String(committeeInfo.name || "").trim();
  if (!name) return "";
  const emoji = String(committeeInfo.emoji || "").trim();
  return emoji ? `${emoji} ${name}` : name;
}

function renderCommitteeAbbrev(shortLabel, committeeInfo) {
  const shortText = String(shortLabel || "").trim();
  if (!shortText) return "";
  const longText = committeeInfo ? formatCommitteeLong(committeeInfo) : "";
  if (longText && longText !== shortText) {
    return `<span class="abbr-toggle"><span class="abbr-short">${shortText}</span><span class="abbr-long">${longText}</span></span>`;
  }
  return shortText;
}

function formatMembershipMetaText(primaryLabel, roleLabel) {
  const parts = [];
  const primary = String(primaryLabel || "").trim();
  const role = String(roleLabel || "").trim();
  if (primary) parts.push(primary);
  if (role) parts.push(role);
  return parts.join(" · ").trim();
}

function isLikelyCommitteeLabel(label) {
  const raw = String(label || "").trim();
  if (!raw) return false;
  if (/\s/.test(raw)) return false;
  const compact = raw.replace(/[.\-]/g, "");
  if (compact.length < 2 || compact.length > 12) return false;
  if (!/[A-Za-zÄÖÜäöüß]/.test(compact)) return false;
  return true;
}

function trackUnknownCommitteeLabel(label) {
  const raw = String(label || "").trim();
  if (!raw) return;
  if (!isLikelyCommitteeLabel(raw)) return;
  const variants = buildCommitteeKeyVariants(raw);
  const mapped = variants.some(key => bvvCommitteeRegistry.variantToShort.has(key));
  if (mapped) return;
  unknownCommitteeLabels.add(raw);
}

function getOparlOrgId(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value.id || "";
}

function normalizeOparlBezirkName(value) {
  let name = String(value || "").trim();
  if (!name) return "";
  name = name.replace(/^Berlin[-\s]*/i, "").trim();
  return getCanonicalBezirkName(name) || name;
}

function normalizeDepartmentKeyword(value) {
  let key = String(value || "").trim().toLowerCase();
  if (!key) return "";
  key = key.replace(/\s+/g, "_");
  key = key.replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss");
  return key;
}

function normalizeExecutiveBezirk(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  if (/^berlin(\s*\(stadtgebiet\))?$/i.test(raw)) return "Berlin";
  return getCanonicalBezirkName(raw) || raw;
}

function parseDepartmentKeywords(value) {
  if (Array.isArray(value)) return value.map(normalizeDepartmentKeyword).filter(Boolean);
  const raw = String(value || "").trim();
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed.map(normalizeDepartmentKeyword).filter(Boolean);
    }
  } catch (_) {
    // fallthrough to delimiter-based parsing
  }
  return raw
    .split(/[,;|]/)
    .map(normalizeDepartmentKeyword)
    .filter(Boolean);
}

async function loadDepartmentMaps() {
  if (departmentMapsLoaded) return;
  if (departmentMapsLoading) return departmentMapsLoading;
  departmentMapsLoading = fetch(departmentKeywordLabelsUrl)
    .then(res => res.ok ? res.json() : {})
    .then((keywordLabels) => {
      departmentKeywordLabels = keywordLabels || {};
      departmentMapsLoaded = true;
      departmentMapsLoading = null;
    }).catch((err) => {
      console.warn("Department label maps could not be loaded.", err);
      departmentKeywordLabels = {};
      departmentMapsLoaded = true;
      departmentMapsLoading = null;
    });
  return departmentMapsLoading;
}

function interpretDepartment(person) {
  const keywords = (person?.department_keywords || []).map(normalizeDepartmentKeyword).filter(Boolean);

  return {
    keywords
  };
}

function getDepartmentKeywordText(entry) {
  if (!entry) return "";
  const keywords = Array.isArray(entry.department_keywords)
    ? entry.department_keywords.map(normalizeDepartmentKeyword).filter(Boolean)
    : [];
  const labels = keywords.map((k) => departmentKeywordLabels[k] ?? k).filter(Boolean);
  return labels.join(" · ");
}

async function fetchOparlPaged(url) {
  const MAX_PAGES = 100;
  let pageCount = 0;
  let next = url;
  const all = [];
  while (next && pageCount++ < MAX_PAGES) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 10000);
    try {
      const res = await fetch(next, { signal: controller.signal });
      if (!res.ok) throw new Error(`OPARL ${res.status} for ${next}`);
      const payload = await res.json();
      if (Array.isArray(payload.data)) {
        all.push(...payload.data);
      }
      next = payload.links?.next || null;
    } finally {
      clearTimeout(timer);
    }
  }
  return all;
}

async function loadOparlApiMap() {
  if (oparlApiLoaded) return oparlApiByBezirk;
  if (oparlApiLoading) return oparlApiLoading;
  oparlApiLoading = new Promise((resolve) => {
    Papa.parse(oparlApiListUrl, {
      download: true,
      header: true,
      delimiter: ",",
      skipEmptyLines: true,
      complete: (result) => {
        (result.data || []).forEach(row => {
          const bez = normalizeBez(
            row.BEZ_OFFICIAL || row.bez_official || row.Bez_Official ||
            row.BEZ || row.bez || row.Bez
          );
          const api = (row["OPARL-API"] || row.OPARL || row.oparl || "").trim();
          if (!api) return;
          const nameFromRow = normalizeOparlBezirkName(row["Wahlkreis-Name"] || row["Wahlkreisname"] || row.Name || row.name);
          const name = nameFromRow || BEZIRK_FALLBACK[bez] || "";
          if (name) oparlApiByBezirk.set(name, api);
        });
        oparlApiLoaded = true;
        oparlApiLoading = null;
        resolve(oparlApiByBezirk);
      },
      error: (err) => {
        console.warn("OPARL API list could not be loaded.", err);
        oparlApiLoaded = true;
        oparlApiLoading = null;
        resolve(oparlApiByBezirk);
      }
    });
  });
  return oparlApiLoading;
}

async function loadBvvFromOparl(systemUrl, bezirkName) {
  await loadCommitteeMaps();
  const sysRes = await fetch(systemUrl);
  if (!sysRes.ok) throw new Error(`OPARL system ${sysRes.status} for ${systemUrl}`);
  const system = await sysRes.json();
  const bodyUrl = system.body;
  if (!bodyUrl) throw new Error(`OPARL system missing body URL for ${bezirkName}`);

  const bodyRes = await fetch(bodyUrl);
  if (!bodyRes.ok) throw new Error(`OPARL body ${bodyRes.status} for ${bezirkName}`);
  const bodyPayload = await bodyRes.json();
  const body = Array.isArray(bodyPayload.data) ? bodyPayload.data[0] : bodyPayload;
  if (!body) throw new Error(`OPARL body not found for ${bezirkName}`);

  const orgUrl = body.organization;
  const personsUrl = body.person;
  if (!orgUrl || !personsUrl) throw new Error(`OPARL body missing org/person URLs for ${bezirkName}`);

  const [orgs, persons] = await Promise.all([
    fetchOparlPaged(orgUrl),
    fetchOparlPaged(personsUrl)
  ]);

  const orgById = new Map(orgs.map(org => [org.id, org]));
  const bvvOrgIds = new Set(
    orgs.filter(orgLooksLikeBvv).map(org => org.id)
  );
  const factionOrgIds = new Set(
    orgs.filter(orgLooksLikeFaction).map(org => org.id)
  );
  const committeeOrgIds = new Set(
    orgs.filter(orgLooksLikeCommittee).map(org => org.id)
  );

  const entries = [];
  const today = new Date();

  persons.forEach(person => {
    const card = buildBvvPersonCard(person, {
      orgById,
      bvvOrgIds,
      factionOrgIds,
      committeeOrgIds,
      today,
      bezirkName
    });
    if (card) entries.push(card);
  });

  entries.sort((a, b) => {
    const nameA = stripAcademicTitles(a.name || "");
    const nameB = stripAcademicTitles(b.name || "");
    return nameA.localeCompare(nameB, "de");
  });
  return entries;
}

function trackUnknownOparlRole(value) {
  const raw = String(value || "").trim();
  if (!raw) return;
  const upper = normalizeRoleKey(raw);
  if (BVV_ROLE_SOURCE_MAP.has(upper)) return;
  if (/^BZSTR\.?/i.test(raw)) return;
  unknownOparlRoles.add(raw);
}

function normalizeBvvRole(value, gender, org) {
  const raw = String(value || "").trim();
  if (!raw) {
    if (gender === "f") return "Bezirksverordnete";
    if (gender === "m") return "Bezirksverordneter";
    return "Bezirksverordnete/r";
  }
  const canonical = getBvvRoleCanonical(raw, org);
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

function normalizeRoleMatchText(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss");
}

function applyBezirkRoleOverride(role, bezirkName) {
  // Placeholder for district-specific role override logic
  return role;
}

function normalizeMembershipRoleForDisplay(value, options) {
  const raw = String(value || "").trim();
  const gender = options?.gender || null;
  const org = options?.org || null;
  if (!raw) return normalizeBvvRole(raw, gender, org);
  const compact = normalizeRoleKey(raw).replace(/[\s._-]/g, "");
  if ((compact === "BV" || compact === "BVV") && (orgLooksLikeCommittee(org) || orgLooksLikeBvv(org))) {
    return normalizeBvvRole("Bezirksverordnete/r", gender, org);
  }
  if (compact === "BD") {
    if (gender === "f") return "Bürgerdeputierte";
    if (gender === "m") return "Bürgerdeputierter";
    return "Bürgerdeputierte/r";
  }
  if (compact === "STELLVBD" || compact === "STVBD") {
    return "stellv. Bürgerdeputierte/r";
  }
  if (compact === "SENVERTR") {
    return "Senatsvertretung";
  }
  return normalizeBvvRole(raw, gender, org);
}

function isBezirksamtRole(value) {
  const text = normalizeRoleMatchText(value);
  if (!text) return false;
  if (text.includes("bezirksbuergermeister")) return true;
  if (text.startsWith("stadtrat") || text.startsWith("bezirksstadtrat")) return true;
  return false;
}

function isSenateRole(value) {
  const text = normalizeRoleMatchText(value);
  if (!text) return false;
  if (text.includes("regierender buergermeister") || text.includes("regierende buergermeisterin")) return true;
  if (text.includes("senator")) return true;
  return false;
}

function getBvvRoleCanonical(value, org) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  if (/^bezirksstadtrat/i.test(raw) || /^stadtrat/i.test(raw) || /^stadträtin/i.test(raw) || /^bezirksstadträtin/i.test(raw)) {
    return "stadtrat";
  }
  if (/^bezirksbürgermeister/i.test(raw)) {
    return "bezirksbuergermeister";
  }
  const upper = normalizeRoleKey(raw);
  const contexts = getBvvRoleOrgContexts(org);
  const orgName = String(org?.name || org?.shortName || "").trim();

  if (upper === "MITGLIED") {
    if (contexts.includes("fraktion")) return "fraktionsmitglied";
    if (contexts.includes("parlament")) return "mitglied_bvv";
    if (/aeltestenrat|ältestenrat/i.test(orgName)) return "aeltestenrat_mitglied";
    if (contexts.includes("ausschuss")) return "ausschussmitglied";
    return "";
  }

  if (upper === "BV" || upper === "BVV") {
    if (contexts.includes("parlament")) return "mitglied_bvv";
    if (contexts.includes("ausschuss")) return "ausschussmitglied";
  }

  if (["VORSITZ", "VORSITZENDE", "VORSITZENDER"].includes(upper)) {
    if (contexts.includes("fraktion")) return "fraktionsvorsitz";
    if (contexts.includes("ausschuss") || contexts.includes("gremium")) return "ausschussvorsitz";
  }

  if (["STELLVERTRETENDER VORSITZ", "STELLV. VORSITZ", "STV. VORSITZ", "STELLV VORSITZ", "STV VORSITZ"].includes(upper)) {
    if (contexts.includes("fraktion")) return "stv_fraktionsvorsitz";
    if (contexts.includes("ausschuss") || contexts.includes("gremium")) return "stv_ausschussvorsitz";
  }

  const candidates = BVV_ROLE_SOURCE_CANDIDATES.get(upper) || [];
  if (candidates.length > 0) {
    const contextual = candidates.find(canonical => {
      const allowed = BVV_ROLE_DICTIONARY[canonical]?.organization_classifications_allowed || [];
      return contexts.some(context => allowed.includes(context));
    });
    if (contextual) return contextual;
  }

  return BVV_ROLE_SOURCE_MAP.get(upper) || "";
}

function buildMembershipCard(membership, org) {
  const card = {};
  const orgName = (org?.shortName || org?.name || "").trim();
  if (orgName) card.name = orgName;
  const role = String(membership?.role || "").trim();
  if (role) card.role = role;
  const canonicalRole = getBvvRoleCanonical(role, org);
  if (canonicalRole) card.canonicalRole = canonicalRole;
  if (membership?.startDate) card.startDate = membership.startDate;
  if (membership?.endDate) card.endDate = membership.endDate;
  return card;
}

function buildBvvPersonCard(person, options) {
  const {
    orgById,
    bvvOrgIds,
    factionOrgIds,
    committeeOrgIds,
    today = new Date(),
    bezirkName = ""
  } = options || {};

  const memberships = Array.isArray(person?.membership) ? person.membership : [];
  const activeBvv = memberships.filter(m => {
    const orgId = getOparlOrgId(m.organization);
    return (bvvOrgIds?.has(orgId) || roleLooksLikeBvv(m.role)) && isActiveMembership(m, today);
  });
  if (!activeBvv.length) return null;
  const bvvMembership = pickLatestMembership(activeBvv);
  const leadershipMembership = pickLatestMembership(
    activeBvv.filter(m => {
      const org = orgById?.get(getOparlOrgId(m.organization));
      const canonical = getBvvRoleCanonical(m.role, org);
      return canonical === "vorsteher_bvv" || canonical === "stv_vorsteher_bvv";
    })
  );
  const primaryBvvMembership = leadershipMembership || bvvMembership;
  const primaryBvvOrg = primaryBvvMembership ? orgById?.get(getOparlOrgId(primaryBvvMembership.organization)) : null;

  const activeFaction = memberships.filter(m => {
    const orgId = getOparlOrgId(m.organization);
    return factionOrgIds?.has(orgId) && isActiveMembership(m, today);
  });
  const factionMembership = pickLatestMembership(activeFaction);
  const factionOrg = factionMembership ? orgById?.get(getOparlOrgId(factionMembership.organization)) : null;
  let partyLabel = factionOrg ? (factionOrg.shortName || factionOrg.name || "") : "";
  if (factionOrg?.name && /Einzelverordnete|parteilos|fraktionslos/i.test(factionOrg.name)) {
    partyLabel = "parteilos";
  } else {
    partyLabel = cleanOrgLabel(partyLabel || factionOrg?.name || "");
  }

  const name = (person?.name || [person?.givenName, person?.familyName].filter(Boolean).join(" ")).trim();
  if (!name) return null;
  const rawRole = String(bvvMembership?.role || "").trim();
  if (isKnownBvvOparlExclusion({ name, role: rawRole, bezirkName })) {
    return null;
  }
  const formOfAddress = String(person?.formOfAddress || "").trim();
  let gender = null;
  if (/^frau/i.test(formOfAddress)) gender = "f";
  else if (/^herr/i.test(formOfAddress)) gender = "m";

  trackUnknownOparlRole(primaryBvvMembership?.role);
  const role = normalizeBvvRole(primaryBvvMembership?.role, gender, primaryBvvOrg);
  const since = (primaryBvvMembership?.startDate || "").trim();
  const normalizedParty = normalizeParty(partyLabel || "parteilos");
  if (!STANDARD_PARTIES.has(normalizedParty)) {
    unknownOparlParties.add(partyLabel || normalizedParty || "unbekannt");
  }

  const card = {
    name,
    party: normalizedParty,
    role,
    since
  };

  const statusRaw = String(person?.status || "").trim();
  if (statusRaw) {
    card.oparl_status = statusRaw;
  }

  const membershipMeta = [];
  memberships.forEach(membership => {
    if (!isActiveMembership(membership, today)) return;
    const orgId = getOparlOrgId(membership?.organization);
    const org = orgById?.get(orgId);
    const canonicalRole = getBvvRoleCanonical(membership?.role, org);
    const orgName = (org?.shortName || org?.name || membership?.organization?.shortName || membership?.organization?.name || "").trim();
    const isFactionOrg = orgLooksLikeFaction(org);
    const isCommitteeOrg = committeeOrgIds?.has(orgId) || orgLooksLikeCommittee(org);
    const isBvvOrg = bvvOrgIds?.has(orgId) || orgLooksLikeBvv(org);
    if (canonicalRole === "vorsteher_bvv" || canonicalRole === "stv_vorsteher_bvv") return;
    if (canonicalRole === "mitglied_bvv") return;
    if (canonicalRole === "fraktionsvorsitz" || canonicalRole === "fraktionsmitglied") return;
    if (committeeOrgIds?.has(orgId) && (canonicalRole === "ausschussvorsitz" || canonicalRole === "stv_ausschussvorsitz")) return;
    const shouldResolveCommittee = !isFactionOrg && (
      isCommitteeOrg ||
      isBvvOrg ||
      /aeltestenrat|ältestenrat|vorstand/i.test(orgName)
    );
    const committeeInfo = shouldResolveCommittee ? resolveCommitteeFromLabels(getCommitteeLabels(membership, org)) : null;
    const orgLabel = committeeInfo ? formatCommitteeShort(committeeInfo) : orgName;
    const roleLabel = normalizeMembershipRoleForDisplay(membership?.role, { gender, org });
    if (!orgLabel && !roleLabel) return;
    const committeeLike = isCommitteeOrg || /ausschuss|unterausschuss|beirat|kommission/i.test(orgName) || /ausschuss|unterausschuss|beirat|kommission/i.test(roleLabel);
    if (!committeeInfo && committeeLike && !isFactionOrg) {
      trackUnknownCommitteeLabel(orgName || roleLabel);
    }
    const parts = [];
    if (orgLabel) parts.push(orgLabel);
    if (roleLabel) parts.push(roleLabel);
    const line = parts.join(" · ").trim();
    if (line) membershipMeta.push({ org: orgLabel, role: roleLabel, text: line, committee: committeeInfo, canonicalRole });
  });
  if (membershipMeta.length > 0) {
    const uniqueMap = new Map();
    membershipMeta.forEach(item => {
      if (!item?.text) return;
      if (!uniqueMap.has(item.text)) uniqueMap.set(item.text, item);
    });
    const uniqueMeta = Array.from(uniqueMap.values());
    if (uniqueMeta.length > 0) card.oparl_memberships = uniqueMeta;
  }

  const activeCommitteeMemberships = memberships.filter(m => {
    const orgId = getOparlOrgId(m.organization);
    return committeeOrgIds?.has(orgId) && isActiveMembership(m, today);
  });
  if (activeCommitteeMemberships.length > 0) {
    const committeeCards = activeCommitteeMemberships
      .map(m => {
        const org = orgById?.get(getOparlOrgId(m.organization));
        const membershipCard = buildMembershipCard(m, org);
        const committeeInfo = resolveCommitteeFromLabels(getCommitteeLabels(m, org));
        if (committeeInfo) {
          membershipCard.committee = committeeInfo;
          if (committeeInfo.name) membershipCard.name = committeeInfo.name;
          membershipCard.short = committeeInfo.short;
          membershipCard.committeeLabel = formatCommitteeShort(committeeInfo);
        } else {
          trackUnknownCommitteeLabel(membershipCard.name);
        }
        return membershipCard;
      })
      .filter(m => Object.keys(m).length > 0);

    const uniqueCommitteeMap = new Map();
    committeeCards.forEach(item => {
      const label = (item.short || item.name || "").trim();
      const roleKey = String(item.role || "").trim();
      const key = `${label}|${roleKey}`;
      if (!uniqueCommitteeMap.has(key)) uniqueCommitteeMap.set(key, item);
    });

    card.committee_memberships = Array.from(uniqueCommitteeMap.values());
    if (card.committee_memberships.length === 0) {
      delete card.committee_memberships;
    }
  }

  const activeFactionChair = activeFaction.filter(m => {
    const org = orgById?.get(getOparlOrgId(m.organization));
    return getBvvRoleCanonical(m.role, org) === "fraktionsvorsitz";
  });
  if (activeFactionChair.length > 0) {
    const chairMembership = pickLatestMembership(activeFactionChair);
    const chairOrg = chairMembership ? orgById?.get(getOparlOrgId(chairMembership.organization)) : null;
    const factionCard = buildMembershipCard(chairMembership, chairOrg);
    if (Object.keys(factionCard).length > 0) {
      card.faction_membership = factionCard;
    }
  }

  return card;
}

function isKnownBvvOparlExclusion({ name, role, bezirkName }) {
  if (!name) return false;
  const normalizedBezirk = String(bezirkName || "").trim();
  const normalizedName = String(name || "").trim();
  const normalizedRole = String(role || "").trim();
  if (normalizedBezirk === "Lichtenberg" && /stefan\s+bley/i.test(normalizedName)) {
    if (/schulsportweikultfm/i.test(normalizedRole) && /(bzstr|bezirksstadtrat|stadtrat)/i.test(normalizedRole)) {
      return true;
    }
  }
  return false;
}

function runBvvPersonCardTests() {
  const today = new Date("2026-03-28T00:00:00");
  const orgById = new Map([
    ["bvv", { id: "bvv", name: "Bezirksverordnetenversammlung", shortName: "BVV", classification: ["Parlament"] }],
    ["comm", { id: "comm", name: "Ausschuss Finanzen", classification: ["Ausschuss"] }],
    ["frac", { id: "frac", name: "Fraktion der CDU", shortName: "CDU", classification: ["Fraktion"] }]
  ]);
  const bvvOrgIds = new Set(["bvv"]);
  const factionOrgIds = new Set(["frac"]);
  const committeeOrgIds = new Set(["comm"]);

  const baseMemberships = [
    { organization: "bvv", role: "BVV", startDate: "2021-01-01" }
  ];

  const assert = (condition, message) => {
    if (!condition) throw new Error(message);
  };

  // 1) no committee / no faction chair
  const person1 = { name: "Test A", membership: [...baseMemberships] };
  const card1 = buildBvvPersonCard(person1, { orgById, bvvOrgIds, factionOrgIds, committeeOrgIds, today });
  assert(card1, "Test 1: card should exist");
  assert(!("committee_memberships" in card1), "Test 1: committee_memberships should be omitted");
  assert(!("faction_membership" in card1), "Test 1: faction_membership should be omitted");

  // 2) committee yes / faction chair no
  const person2 = { name: "Test B", membership: [...baseMemberships, { organization: "comm", role: "Mitglied", startDate: "2022-01-01" }] };
  const card2 = buildBvvPersonCard(person2, { orgById, bvvOrgIds, factionOrgIds, committeeOrgIds, today });
  assert(card2, "Test 2: card should exist");
  assert(Array.isArray(card2.committee_memberships) && card2.committee_memberships.length > 0, "Test 2: committee_memberships should be present");
  assert(!("faction_membership" in card2), "Test 2: faction_membership should be omitted");

  // 3) committee yes / faction chair yes
  const person3 = {
    name: "Test C",
    membership: [
      ...baseMemberships,
      { organization: "comm", role: "Mitglied", startDate: "2022-01-01" },
      { organization: "frac", role: "Fraktionsvorsitz", startDate: "2023-01-01" }
    ]
  };
  const card3 = buildBvvPersonCard(person3, { orgById, bvvOrgIds, factionOrgIds, committeeOrgIds, today });
  assert(card3, "Test 3: card should exist");
  assert(Array.isArray(card3.committee_memberships) && card3.committee_memberships.length > 0, "Test 3: committee_memberships should be present");
  assert("faction_membership" in card3, "Test 3: faction_membership should be present");

  // 4) gendered role (Frau)
  const person4 = { name: "Frau Test", formOfAddress: "Frau", membership: [...baseMemberships] };
  const card4 = buildBvvPersonCard(person4, { orgById, bvvOrgIds, factionOrgIds, committeeOrgIds, today });
  assert(card4.role === "Bezirksverordnete", `Test 4: Expected "Bezirksverordnete", got "${card4.role}"`);

  // 5) gendered role (Herr) + leadership
  const person5 = {
    name: "Herr Test",
    formOfAddress: "Herr",
    membership: [
      { organization: "bvv", role: "Vorsteher", startDate: "2021-01-01" }
    ]
  };
  const card5 = buildBvvPersonCard(person5, { orgById, bvvOrgIds, factionOrgIds, committeeOrgIds, today });
  assert(card5.role === "BVV-Vorsitz", `Test 5: Expected "BVV-Vorsitz", got "${card5.role}"`);

  // 6) gendered role (Herr) + BZSTR
  const person6 = {
    name: "Herr Stadtrat",
    formOfAddress: "Herr",
    membership: [
      { organization: "bvv", role: "BZSTR. für Finanzen", startDate: "2021-01-01" }
    ]
  };
  const card6 = buildBvvPersonCard(person6, { orgById, bvvOrgIds, factionOrgIds, committeeOrgIds, today });
  assert(card6.role === "Bezirksstadtrat für Finanzen", `Test 6: Expected "Bezirksstadtrat für Finanzen", got "${card6.role}"`);

  // 7) OPARL meta should not duplicate BVV leadership or committee chair roles
  const person7 = {
    name: "Test Chair",
    membership: [
      { organization: "bvv", role: "Vorsteher", startDate: "2021-01-01" },
      { organization: "comm", role: "Ausschussvorsitz", startDate: "2022-01-01" }
    ]
  };
  const card7 = buildBvvPersonCard(person7, { orgById, bvvOrgIds, factionOrgIds, committeeOrgIds, today });
  assert(card7, "Test 7: card should exist");
  assert(Array.isArray(card7.committee_memberships) && card7.committee_memberships.length === 1, "Test 7: committee chair should remain in committee_memberships");
  assert(!("oparl_memberships" in card7), "Test 7: oparl_memberships should omit duplicated BVV/committee-chair entries");

  // 8) committee normalization should collapse shadow '(Kalender)' org labels
  buildCommitteeMaps([
    { name: "Vorstand der BVV", short: "VORST", slug: "vorstand" }
  ], {});
  const calendarCommittee = resolveCommitteeFromLabels(["Vorstand der BVV (Kalender)"]);
  assert(calendarCommittee?.short === "VORST", `Test 8: Expected calendar org to resolve to "VORST", got "${calendarCommittee?.short || ""}"`);

  // 9) plain faction membership should not leak into OPARL meta as a committee-like line
  const person8 = {
    name: "Test Faction Member",
    membership: [
      ...baseMemberships,
      { organization: "frac", role: "Mitglied", startDate: "2022-01-01" }
    ]
  };
  const card8 = buildBvvPersonCard(person8, { orgById, bvvOrgIds, factionOrgIds, committeeOrgIds, today });
  assert(card8, "Test 9: card should exist");
  assert(!("oparl_memberships" in card8), "Test 9: plain faction membership should be omitted from oparl_memberships");

  // 10) committee shorthand BV should be spelled out for display
  const person9 = {
    name: "Frau Committee Member",
    formOfAddress: "Frau",
    membership: [
      ...baseMemberships,
      { organization: "comm", role: "BV", startDate: "2022-01-01" }
    ]
  };
  const card9 = buildBvvPersonCard(person9, { orgById, bvvOrgIds, factionOrgIds, committeeOrgIds, today });
  assert(card9, "Test 10: card should exist");
  assert(Array.isArray(card9.oparl_memberships) && card9.oparl_memberships.some(item => item?.role === "Bezirksverordnete"), "Test 10: committee role BV should render as Bezirksverordnete");

  // 11) Tempelhof-style committee role variants should drop the trailing BV suffix
  const person10 = {
    name: "Test Committee Role Variants",
    membership: [
      ...baseMemberships,
      { organization: "comm", role: "Ausschussmitglied BV", startDate: "2022-01-01" },
      { organization: "comm", role: "stellv. Ausschussmitglied BV", startDate: "2022-01-02" }
    ]
  };
  const card10 = buildBvvPersonCard(person10, { orgById, bvvOrgIds, factionOrgIds, committeeOrgIds, today });
  assert(card10, "Test 11: card should exist");
  assert(Array.isArray(card10.oparl_memberships) && card10.oparl_memberships.some(item => item?.role === "Ausschussmitglied"), "Test 11: Ausschussmitglied BV should normalize to Ausschussmitglied");
  assert(Array.isArray(card10.oparl_memberships) && card10.oparl_memberships.some(item => item?.role === "stellv. Ausschussmitglied"), "Test 11: stellv. Ausschussmitglied BV should normalize to stellv. Ausschussmitglied");

  // 12) committee meta text should render committee first, then role
  assert(formatMembershipMetaText("📨 E&B", "Ausschussvorsitz") === "📨 E&B · Ausschussvorsitz", "Test 12: committee meta text should render committee first");

  // 13) AGH fallback committee parsing should mark spokesperson committees distinctly
  buildCommitteeMapsInRegistry(aghCommitteeRegistry, [
    { name: "Ausschuss für Mobilität und Verkehr", short: "Verkehr", slug: "mobilitaet-und-verkehr" }
  ], {});
  const aghFallbackMemberships = parseAghCommitteeMemberships({
    committees: "Ausschuss für Mobilität und Verkehr",
    spokesperson_role: "Ausschuss für Mobilität und Verkehr"
  });
  assert(Array.isArray(aghFallbackMemberships) && aghFallbackMemberships.length === 1, "Test 13: AGH fallback parsing should create one membership");
  assert(aghFallbackMemberships[0]?.role === "Sprecher/in", `Test 13: Expected Sprecher/in, got "${aghFallbackMemberships[0]?.role || ""}"`);

  // 14) AGH structured committee parsing should preserve explicit committee roles
  const aghStructuredMemberships = parseAghCommitteeMemberships({
    committee_memberships_json: JSON.stringify([
      { committee: "Ausschuss für Mobilität und Verkehr", committee_role: "vice_chairperson" }
    ])
  });
  assert(Array.isArray(aghStructuredMemberships) && aghStructuredMemberships[0]?.role === "stellv. Ausschussvorsitz", `Test 14: Expected stellv. Ausschussvorsitz, got "${aghStructuredMemberships[0]?.role || ""}"`);

  // 15) Bundestag fallback committee parsing should mark spokesperson committees distinctly
  buildCommitteeMapsInRegistry(btgCommitteeRegistry, [
    { name: "Innenausschuss", short: "Innen", slug: "innenausschuss" }
  ], {});
  const btgFallbackMemberships = parseBtgCommitteeMemberships({
    committees: "Innenausschuss",
    spokesperson_role: "Innenausschuss"
  });
  assert(Array.isArray(btgFallbackMemberships) && btgFallbackMemberships.length === 1, "Test 15: BTG fallback parsing should create one membership");
  assert(btgFallbackMemberships[0]?.role === "Sprecher/in", `Test 15: Expected Sprecher/in, got "${btgFallbackMemberships[0]?.role || ""}"`);

  // 16) Bundestag structured committee parsing should preserve explicit committee roles
  const btgStructuredMemberships = parseBtgCommitteeMemberships({
    committee_memberships_json: JSON.stringify([
      { committee: "Innenausschuss", committee_role: "chairperson" }
    ])
  });
  assert(Array.isArray(btgStructuredMemberships) && btgStructuredMemberships[0]?.role === "Ausschussvorsitz", `Test 16: Expected Ausschussvorsitz, got "${btgStructuredMemberships[0]?.role || ""}"`);

  return true;
}

async function runBvvPersonCardOparlTestForBezirk(bezirkName) {
  if (!bezirkName) return false;
  try {
    await loadOparlApiMap();
    const systemUrl = oparlApiByBezirk.get(bezirkName);
    if (!systemUrl) {
      console.warn(`BVV person card OPARL test skipped: no API for ${bezirkName}.`);
      return false;
    }

    const sysRes = await fetch(systemUrl);
    if (!sysRes.ok) throw new Error(`OPARL system ${sysRes.status} for ${systemUrl}`);
    const system = await sysRes.json();
    const bodyUrl = system.body;
    if (!bodyUrl) throw new Error(`OPARL system missing body URL for ${bezirkName}`);

    const bodyRes = await fetch(bodyUrl);
    if (!bodyRes.ok) throw new Error(`OPARL body ${bodyRes.status} for ${bezirkName}`);
    const bodyPayload = await bodyRes.json();
    const body = Array.isArray(bodyPayload.data) ? bodyPayload.data[0] : bodyPayload;
    if (!body) throw new Error(`OPARL body not found for ${bezirkName}`);

    const orgUrl = body.organization;
    const personsUrl = body.person;
    if (!orgUrl || !personsUrl) throw new Error(`OPARL body missing org/person URLs for ${bezirkName}`);

    const [orgs, persons] = await Promise.all([
      fetchOparlPaged(orgUrl),
      fetchOparlPaged(personsUrl)
    ]);

    const orgById = new Map(orgs.map(org => [org.id, org]));
    const bvvOrgIds = new Set(orgs.filter(orgLooksLikeBvv).map(org => org.id));
    const factionOrgIds = new Set(orgs.filter(orgLooksLikeFaction).map(org => org.id));
    const committeeOrgIds = new Set(orgs.filter(orgLooksLikeCommittee).map(org => org.id));

    const today = new Date();
    const assert = (condition, message) => {
      if (!condition) throw new Error(message);
    };

    persons.forEach(person => {
      const memberships = Array.isArray(person?.membership) ? person.membership : [];
      const hasActiveBvv = memberships.some(m => {
        const orgId = getOparlOrgId(m.organization);
        return (bvvOrgIds.has(orgId) || roleLooksLikeBvv(m.role)) && isActiveMembership(m, today);
      });
      if (!hasActiveBvv) return;

      const card = buildBvvPersonCard(person, {
        orgById,
        bvvOrgIds,
        factionOrgIds,
        committeeOrgIds,
        today
      });

      assert(card, `${bezirkName}: missing card for active BVV member`);

      const hasActiveCommittee = memberships.some(m => {
        const orgId = getOparlOrgId(m.organization);
        return committeeOrgIds.has(orgId) && isActiveMembership(m, today);
      });
      if (hasActiveCommittee) {
        assert(Array.isArray(card.committee_memberships) && card.committee_memberships.length > 0, `${bezirkName}: committee_memberships missing`);
      } else {
        assert(!("committee_memberships" in card), `${bezirkName}: committee_memberships should be omitted`);
      }

      const hasFactionChair = memberships.some(m => {
        const orgId = getOparlOrgId(m.organization);
        const org = orgById.get(orgId);
        return factionOrgIds.has(orgId) && isActiveMembership(m, today) && getBvvRoleCanonical(m.role, org) === "fraktionsvorsitz";
      });
      if (hasFactionChair) {
        assert("faction_membership" in card, `${bezirkName}: faction_membership missing`);
      } else {
        assert(!("faction_membership" in card), `${bezirkName}: faction_membership should be omitted`);
      }
    });

    console.log(`BVV person card OPARL test passed for ${bezirkName}.`);
    return true;
  } catch (err) {
    console.error(`BVV person card OPARL test failed for ${bezirkName}.`, err);
    return false;
  }
}

function formatSinceYear(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  const match = raw.match(/(\d{4})/);
  return match ? match[1] : raw;
}

function looksLikeParty(value) {
  const raw = String(value || "").trim();
  if (!raw) return false;
  const normalized = normalizeParty(raw);
  return STANDARD_PARTIES.has(normalized);
}

function looksLikeRole(value) {
  const raw = String(value || "").trim();
  if (!raw) return false;
  const upper = normalizeRoleKey(raw);
  if (BVV_ROLE_SOURCE_MAP.has(upper)) return true;
  return /bezirks|bvv|vorsteher|fraktion|ausschuss|schrift|beisitz|bzstr/i.test(raw);
}

function looksLikeName(value) {
  const raw = String(value || "").trim();
  if (!raw) return false;
  if (looksLikeParty(raw) || looksLikeRole(raw)) return false;
  if (!/[A-Za-zÄÖÜäöüß]/.test(raw)) return false;
  if (/\d/.test(raw)) return false;
  const parts = raw.split(/\s+/).filter(Boolean);
  return parts.length >= 2;
}

function looksLikeDate(value) {
  const raw = String(value || "").trim();
  if (!raw) return false;
  if (/^\d{2}\.\d{2}\.\d{4}$/.test(raw)) return true;
  if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return true;
  if (/^\d{4}$/.test(raw)) return true;
  return false;
}

function normalizePersonName(value) {
  const raw = stripAcademicTitles(String(value || ""));
  return raw
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ß/g, "ss")
    .replace(/æ/g, "ae")
    .replace(/œ/g, "oe")
    .replace(/ø/g, "o")
    .replace(/đ/g, "d")
    .replace(/ł/g, "l")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function normalizeSearchText(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ß/g, "ss")
    .replace(/æ/g, "ae")
    .replace(/œ/g, "oe")
    .replace(/ø/g, "o")
    .replace(/đ/g, "d")
    .replace(/ł/g, "l")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function buildSearchTokens(values) {
  const tokens = new Set();
  (Array.isArray(values) ? values : [values]).forEach(value => {
    const normalized = normalizeSearchText(value);
    if (!normalized) return;
    tokens.add(normalized);
    const compact = normalized.replace(/\s+/g, "");
    if (compact && compact !== normalized) tokens.add(compact);
  });
  return Array.from(tokens);
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function normalizePoliticianLinkUrl(value) {
  const url = String(value || "").trim();
  if (!/^https?:\/\//i.test(url)) return "";
  return url;
}

function getPoliticianLinkUrl(entry) {
  return normalizePoliticianLinkUrl(
    entry?.website ||
    entry?.officialWebsite ||
    entry?.official_website ||
    entry?.sourceUrl ||
    entry?.SourceURL ||
    ""
  );
}

function renderPoliticianNameHtml(entry) {
  const name = escapeHtml(entry?.name || "");
  const url = getPoliticianLinkUrl(entry);
  if (!url) return `<div class="rep-name">${name}</div>`;
  return `<a class="rep-name rep-name-link" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${name}</a>`;
}

/**
 * Strips common academic titles from the start of a name for cleaner alphabetical sorting.
 */
function stripAcademicTitles(name) {
  if (!name) return "";
  let s = name.trim();
  const titleRegex = /^(?:Prof\.|Dr\.|Priv\.-Doz\.|PD|h\.c\.|mult\.|med\.|rer\.|nat\.|phil\.|iur\.|Ing\.)\s+/i;
  let match;
  while ((match = s.match(titleRegex))) {
    s = s.slice(match[0].length).trim();
  }
  return s;
}

function mergeBvvPartyFromLocal(oparlEntries = [], localEntries = []) {
  if (!Array.isArray(oparlEntries) || !Array.isArray(localEntries)) return oparlEntries;
  const localPartyByName = new Map();
  localEntries.forEach(entry => {
    const key = normalizePersonName(entry?.name);
    if (!key) return;
    const party = normalizeParty(entry?.party || "");
    if (!party || party === "parteilos" || party === "Andere") return;
    if (!localPartyByName.has(key)) localPartyByName.set(key, party);
  });
  oparlEntries.forEach(entry => {
    const key = normalizePersonName(entry?.name);
    if (!key) return;
    const localParty = localPartyByName.get(key);
    if (!localParty) return;
    const currentParty = normalizeParty(entry?.party || "");
    if (!STANDARD_PARTIES.has(currentParty) || currentParty === "parteilos") {
      entry.party = localParty;
    }
  });
  return oparlEntries;
}

function pushUnique(list, entry) {
  const key = `${entry.name}|${entry.party}|${entry.role || entry.wahlkreis || entry.awk || entry.art || ""}`;
  if (!list._keys) list._keys = new Set();
  if (list._keys.has(key)) return;
  list._keys.add(key);
  list.push(entry);
}

function loadBtgCSV() {
  return loadBtgCommitteeMaps().then(() => new Promise((resolve) => {
    Papa.parse(btgCsvUrl, {
      download: true,
      header: true,
      delimiter: ";",
      skipEmptyLines: true,
      complete: (result) => {
        const rows = result.data || [];
        rows.forEach(row => {
          const name = (row.MdA_2025 || row.MdB_2025 || row.full_name || row.name || "").trim();
          if (!name) return;
          const party = normalizeParty(row.party_short_name || row.party_name || row.Party || row.Partei || "");
          const wkr = normalizeWkr(row.AWK || row.WK || row.WKR || row.Wahlkreisnummer || row.Wahlkreis || "");
          if (!wkr) return;
          const wahlkreis = (row.Wahlkreis || row.wahlkreis || "").trim();
          const mandateType = String(row.mandate_type || row.mandate_won || "").toLowerCase();
          const isDirect = mandateType === "constituency" || mandateType === "direct" || mandateType === "direct_mandate" || mandateType === "direkt";
          const committeeMemberships = parseBtgCommitteeMemberships(row);
          const entry = { name, party, art: isDirect ? "Direkt" : "Liste", wkr, wahlkreis, mandateType };
          const website = normalizePoliticianLinkUrl(row.official_website || row.website || row.SourceURL || "");
          if (website) entry.website = website;
          if (committeeMemberships.length > 0) entry.committee_memberships = committeeMemberships;
          if (!btgByWkr.has(wkr)) btgByWkr.set(wkr, []);
          pushUnique(btgByWkr.get(wkr), entry);
        });
        for (const [wkr, list] of btgByWkr.entries()) {
          list.sort((a, b) => stripAcademicTitles(a.name).localeCompare(stripAcademicTitles(b.name), "de"));
        }
        btgCitywide = [];
        resolve();
      },
      error: (err) => {
        console.warn("BTG CSV could not be loaded. Skipping Bundestag list.", err);
        btgCitywide = [];
        resolve();
      }
    });
  }));
}

function loadEuCSV() {
  return new Promise((resolve) => {
    Papa.parse(euCsvUrl, {
      download: true,
      header: true,
      delimiter: ";",
      skipEmptyLines: true,
      complete: (result) => {
        const rows = result.data || [];
        const list = [];
        rows.forEach(row => {
          const name = (row.MdA_2025 || row.MdB_2025 || row.full_name || row.name || "").trim();
          if (!name) return;
          const party = normalizeParty(row.party_short_name || row.party_name || row.Party || row.Partei || "");
          const website = normalizePoliticianLinkUrl(row.official_website || row.website || row.SourceURL || "");
          const listLabel = (row.Wahlkreis || row.electoral_list || "").trim();
          const berlinFlag = String(row.berlin_residence || "").trim().toLowerCase();
          const isBerlinRes = ["true", "1", "yes", "ja"].includes(berlinFlag);
          const listType = (row.berlin_list_type || "").trim();
          const connection = (row.berlin_connection || "").trim();
          const roleParts = [];
          if (isBerlinRes) roleParts.push("Wohnsitz Berlin");
          if (listLabel) roleParts.push(listLabel);
          if (listType) {
            const lowerParts = roleParts.map(part => part.toLowerCase());
            const listLower = listType.toLowerCase();
            const hasListType = lowerParts.some(part => part.includes(listLower));
            if (!hasListType) roleParts.push(listType);
          }
          if (connection) roleParts.push(connection);
          const role = roleParts.length ? `EU-Parlament (${roleParts.join(" · ")})` : "EU-Parlament";
          const entry = { name, party, role, art: "Liste" };
          if (website) entry.website = website;
          list.push(entry);
        });
        list.sort((a, b) => stripAcademicTitles(a.name).localeCompare(stripAcademicTitles(b.name), "de"));
        euCitywide = list;
        resolve();
      },
      error: (err) => {
        console.warn("EU CSV could not be loaded. Skipping EU list.", err);
        euCitywide = [];
        resolve();
      }
    });
  });
}

function loadBtgTooltipCSV() {
  return new Promise((resolve) => {
    Papa.parse(btgTooltipCsvUrl, {
      download: true,
      header: true,
      delimiter: ",",
      skipEmptyLines: true,
      complete: (result) => {
        (result.data || []).forEach(row => {
          const bwk = normalizeWkr(row.BWK || row.bwk || row["BWK"]);
          if (!bwk) return;
          const name = (row["Wahlkreis-Name"] || row["Wahlkreisname"] || row.Name || "").trim();
          const bez = normalizeBez(row.BEZ || row.Bez || row.bez);
          btgTooltipByBwk.set(bwk, { name, bez });
        });
        resolve();
      },
      error: (err) => {
        console.warn("BTG Wahlkreis tooltip mapping could not be loaded.", err);
        resolve();
      }
    });
  });
}

function parseBvvFile(text) {
  const lines = text.split(/\r?\n/).map(l => l.trimEnd()).filter(l => l.trim() !== "");
  if (lines.length <= 1) return [];
  const dataLines = lines.slice(1);
  const entries = [];
  for (let i = 0; i < dataLines.length; i += 4) {
    const name = (dataLines[i] || "").split("\t")[0]?.trim();
    const role = (dataLines[i + 1] || "").split("\t")[0]?.trim();
    const partyRaw = (dataLines[i + 2] || "").split("\t")[0]?.trim();
    const since = (dataLines[i + 3] || "").split("\t")[0]?.trim();
    if (!name) continue;
    entries.push({
      name,
      party: normalizeParty(partyRaw),
      role: normalizeBvvRole(role),
      since
    });
  }
  return entries;
}

function parseBvvCsvText(text) {
  const result = Papa.parse(text, {
    header: true,
    delimiter: ",",
    skipEmptyLines: true
  });
  const entries = [];
  const seen = new Set();
  (result.data || []).forEach(row => {
    let rawName = (row.Name || row.name || "").trim();
    let rawRole = (row["Art der Mitarbeit"] || row.Art || row.Role || row.Funktion || "").trim();
    let rawParty = (row.Herkunft || row.Partei || row.Party || "").trim();
    let rawSince = (row.seit || row.Seit || row.since || "").trim();

    if (rawName === "Name") rawName = "";

    const fields = [
      { value: rawName },
      { value: rawRole },
      { value: rawParty },
      { value: rawSince }
    ].map(field => ({ value: String(field.value || "").trim() })).filter(field => field.value);

    const nameField = fields.find(field => looksLikeName(field.value));
    if (!nameField) return;
    const roleField = fields.find(field => looksLikeRole(field.value));
    const partyField = fields.find(field => looksLikeParty(field.value));
    const dateField = fields.find(field => looksLikeDate(field.value));

    const name = nameField.value;
    const roleRaw = roleField?.value || "Bezirksverordnete/r";
    const partyRaw = partyField?.value || "parteilos";
    const since = dateField?.value || "";

    const entry = {
      name,
      party: normalizeParty(partyRaw),
      role: normalizeBvvRole(roleRaw),
      since
    };

    const key = `${entry.name}|${entry.party}|${entry.role}|${entry.since}`;
    if (seen.has(key)) return;
    seen.add(key);
    entries.push(entry);
  });
  return entries;
}

function logUnknownOparlLabels() {
  if (unknownOparlParties.size) {
    console.warn("Unrecognized BVV party labels from OPARL:", Array.from(unknownOparlParties).sort());
  }
  if (unknownOparlRoles.size) {
    console.warn("Unrecognized BVV roles from OPARL:", Array.from(unknownOparlRoles).sort());
  }
  if (unknownCommitteeLabels.size) {
    console.warn("Unmapped BVV committee labels from OPARL:", Array.from(unknownCommitteeLabels).sort());
  }
}

async function loadBvvLocalForBezirk(bezirk) {
  const fileNameCsv = `BVV-${bezirk}.csv`;
  const fileNameTxt = `BVV-${bezirk}.txt`;
  const fileUrlCsv = encodeURI(`${bvvBasePath}/${fileNameCsv}`);
  const fileUrlTxt = encodeURI(`${bvvBasePath}/${fileNameTxt}`);
  let res = await fetch(fileUrlCsv);
  if (res.ok) {
    const text = await res.text();
    const entries = parseBvvCsvText(text);
    if (entries.length) return entries;
  }
  res = await fetch(fileUrlTxt);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const text = await res.text();
  return parseBvvFile(text);
}

async function ensureBvvLocalForBezirk(bezirk) {
  if (!bezirk) return;
  const existing = bvvByBezirk.get(bezirk);
  if (Array.isArray(existing) && existing.length) return;
  try {
    const entries = await loadBvvLocalForBezirk(bezirk);
    if (entries && entries.length) {
      bvvByBezirk.set(bezirk, entries);
      if (!bvvOparlStatusByBezirk.has(bezirk)) {
        bvvOparlStatusByBezirk.set(bezirk, "local");
      }
      buildSearchIndex();
      if (getContextBezirkName(activeContext) === bezirk && currentLevel === "bezirk") {
        renderPanel(activeContext);
      }
    }
  } catch (err) {
    console.warn(`BVV list fallback not found for ${bezirk}.`, err);
  }
}

async function ensureBvvOparlForBezirk(bezirk) {
  if (!bezirk) return;
  const status = bvvOparlStatusByBezirk.get(bezirk);
  if (status === "loading" || status === "loaded" || status === "skipped" || status === "error") return;
  bvvOparlStatusByBezirk.set(bezirk, "loading");
  try {
    await loadOparlApiMap();
    const oparlUrl = oparlApiByBezirk.get(bezirk);
    if (!oparlUrl || bezirk === "Spandau") {
      bvvOparlStatusByBezirk.set(bezirk, "skipped");
      return;
    }
    const localEntries = bvvByBezirk.get(bezirk) || [];
    const entries = await loadBvvFromOparl(oparlUrl, bezirk);
    if (entries && entries.length) {
      mergeBvvPartyFromLocal(entries, localEntries);
      bvvByBezirk.set(bezirk, entries);
    } else if (localEntries.length) {
      bvvOparlStatusByBezirk.set(bezirk, "local");
      return;
    }
    logUnknownOparlLabels();
    bvvOparlStatusByBezirk.set(bezirk, "loaded");
  } catch (err) {
    console.warn(`OPARL BVV lookup failed for ${bezirk}.`, err);
    bvvOparlStatusByBezirk.set(bezirk, "error");
    await ensureBvvLocalForBezirk(bezirk);
  } finally {
    buildSearchIndex();
    if (getContextBezirkName(activeContext) === bezirk && currentLevel === "bezirk") {
      renderPanel(activeContext);
    }
  }
}

async function loadBvvLists() {
  const bezirke = Object.keys(bezirkeData);
  await Promise.all(bezirke.map(async (bezirk) => {
    try {
      const entries = await loadBvvLocalForBezirk(bezirk);
      if (entries && entries.length) {
        bvvByBezirk.set(bezirk, entries);
        bvvOparlStatusByBezirk.set(bezirk, "local");
      }
    } catch (err) {
      console.warn(`BVV list not found for ${bezirk}.`, err);
    }
  }));
}

async function loadExecutiveRoles() {
  await loadDepartmentMaps();
  return new Promise((resolve) => {
    Papa.parse(bvvExecutiveCsvUrl, {
      download: true,
      header: true,
      delimiter: ";",
      skipEmptyLines: true,
      complete: (result) => {
        const seen = new Set();
        (result.data || []).forEach(row => {
          const bezirk = String(row.Bezirk || row.bezirk || row.BEZIRK || "").trim();
          const name = String(row.Name || row.name || "").trim();
          const roleRaw = String(row.Role || row.role || row.Rolle || row.Funktion || row.RoleRaw || "").trim();
          if (!bezirk || !name || !roleRaw) return;
          const partyRaw = String(row.Party || row.party || row.Partei || "").trim();
          const keywordsRaw = row.department_keywords || row.department_keyword || row.DepartmentKeywords || row.DepartmentKeyword || "";
          const departmentKeywords = parseDepartmentKeywords(keywordsRaw);
          const sourceUrl = normalizePoliticianLinkUrl(row.SourceURL || row.source_url || row.sourceUrl || row.Website || row.website || "");
          const interpreted = interpretDepartment({
            department_keywords: departmentKeywords
          });
          const entry = {
            bezirk,
            name,
            role: roleRaw,
            party: normalizeParty(partyRaw),
            since: String(row.seit || row.Seit || row.since || row.Since || "").trim(),
            department_keywords: interpreted.keywords
          };
          if (sourceUrl) entry.website = sourceUrl;
          const key = `${bezirk}|${name}|${entry.party}|${roleRaw}`;
          if (seen.has(key)) return;
          seen.add(key);
          if (!bvvExecutiveByBezirk.has(bezirk)) bvvExecutiveByBezirk.set(bezirk, []);
          bvvExecutiveByBezirk.get(bezirk).push(entry);
        });
        resolve();
      },
      error: (err) => {
        console.warn("Executive roles could not be loaded.", err);
        resolve();
      }
    });
  });
}

async function loadSenateExecutiveRoles() {
  await loadDepartmentMaps();
  return new Promise((resolve) => {
    Papa.parse(senateExecutiveCsvUrl, {
      download: true,
      header: true,
      delimiter: ";",
      skipEmptyLines: true,
      complete: (result) => {
        const seen = new Set();
        (result.data || []).forEach(row => {
          const bezirkRaw = String(row.Bezirk || row.bezirk || row.BEZIRK || "").trim();
          const bezirk = normalizeExecutiveBezirk(bezirkRaw);
          const name = String(row.Name || row.name || "").trim();
          const roleRaw = String(row.Role || row.role || row.Rolle || row.Funktion || row.RoleRaw || "").trim();
          if (!name || !roleRaw) return;
          const partyRaw = String(row.Party || row.party || row.Partei || "").trim();
          const keywordsRaw = row.department_keywords || row.department_keyword || row.DepartmentKeywords || row.DepartmentKeyword || "";
          const departmentKeywords = parseDepartmentKeywords(keywordsRaw);
          const sourceUrl = normalizePoliticianLinkUrl(row.SourceURL || row.source_url || row.sourceUrl || row.Website || row.website || "");
          const interpreted = interpretDepartment({
            department_keywords: departmentKeywords
          });
          const entry = {
            name,
            role: roleRaw,
            party: normalizeParty(partyRaw),
            since: String(row.seit || row.Seit || row.since || row.Since || "").trim(),
            department_keywords: interpreted.keywords,
            art: "Senat",
            isExecutive: true
          };
          if (sourceUrl) entry.website = sourceUrl;
          const key = `${bezirk}|${name}|${entry.party}|${roleRaw}`;
          if (seen.has(key)) return;
          seen.add(key);
          if (bezirk && bezirk !== "Berlin") {
            if (!aghExecutiveByBezirk.has(bezirk)) aghExecutiveByBezirk.set(bezirk, []);
            aghExecutiveByBezirk.get(bezirk).push(entry);
          } else {
            aghExecutiveCitywide.push(entry);
          }
        });
        resolve();
      },
      error: (err) => {
        console.warn("Senate executive roles could not be loaded.", err);
        resolve();
      }
    });
  });
}

function loadBezirkArkis() {
  return new Promise((resolve) => {
    Papa.parse(bezirkArkisCsvUrl, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        (result.data || []).forEach(row => {
          const name = (row.Bezirk || row.bezirk || row.Name || "").trim();
          const code = normalizeArkis(row["ARKIS-Code"] || row.ARKIS || row.arkis || row.Code);
          if (!name || !code) return;
          bezirkByArkis.set(code, name);
        });
        resolve();
      },
      error: (err) => {
        console.warn("Bezirk/ARKIS mapping could not be loaded.", err);
        resolve();
      }
    });
  });
}

async function loadWahlkreiseGeoJSON() {
  const source = await shapefile.open(wahlkreiseShpUrl, wahlkreiseDbfUrl);
  const features = [];
  while (true) {
    const result = await source.read();
    if (result.done) break;
    const feature = result.value;
    const bez = normalizeBez(feature.properties?.BEZ);
    const awk = normalizeAwk(feature.properties?.AWK);
    const meta = districtByNumber.get(bez);
    feature.properties = {
      ...feature.properties,
      AWK: awk,
      BEZ: bez,
      name: meta?.name || `Bezirk ${bez}`,
      winner: meta?.winner || ""
    };
    feature.geometry = reprojectGeometry(feature.geometry);
    features.push(feature);
  }
  return { type: "FeatureCollection", features };
}

async function loadBtgGeoJSONFromShapefile() {
  const response = await fetch(btgLocalGeojsonUrl);
  if (!response.ok) {
    throw new Error(`BTG GeoJSON could not be loaded: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  const crsName = String(data?.crs?.properties?.name || "").toUpperCase();
  const needsReproject = crsName.includes("25833");
  if (needsReproject && Array.isArray(data.features)) {
    data.features.forEach(feature => {
      if (feature?.geometry) {
        feature.geometry = reprojectGeometry(feature.geometry);
      }
    });
  }
  return data;
}

function indexAghByBezirk(geojson) {
  aghByBez.clear();
  geojson?.features?.forEach(feature => {
    const bez = normalizeBez(feature.properties?.BEZ);
    const awk = normalizeAwk(feature.properties?.AWK);
    if (!bez || !awk) return;
    if (!aghByBez.has(bez)) aghByBez.set(bez, new Set());
    aghByBez.get(bez).add(awk);
  });
}

function getPartyForBezirk(name, feature) {
  const d = bezirkeData[name];
  if (!d) return "#444";
  if (currentLevel === "abgeordnetenhaus" || currentLevel === "senat") {
    const awk = normalizeAwk(feature?.properties?.AWK);
    const entries = awk ? (aghByAwk.get(awk) || []) : [];
    const direct = entries.find(e => e.art === "Direkt") || entries[0];
    if (direct?.party) return partyColors[direct.party] || "#888";
    if (currentLevel === "senat") {
      const localExecutive = aghExecutiveByBezirk.get(name) || [];
      if (localExecutive[0]?.party) return partyColors[localExecutive[0].party] || "#888";
      if (d.abgeordnetenhaus?.[0]?.party) return partyColors[d.abgeordnetenhaus[0].party] || "#888";
    }
  }
  if (currentLevel === "bundestag") {
    const meta = districtByName.get(name);
    if (meta?.winner) return partyColors[meta.winner] || "#888";
  }
  if (currentLevel === "alle") return partyColors[d.bezirk.party] || "#888";
  if (isBezirkLevel(currentLevel)) {
    if (currentLevel === "bezirksamt") {
      const executiveEntries = bvvExecutiveByBezirk.get(name) || [];
      const mayorEntry = executiveEntries.find(entry => getBvvRoleCanonical(entry?.role) === "bezirksbuergermeister");
      if (mayorEntry?.party) return partyColors[mayorEntry.party] || "#888";
    }
    return partyColors[d.bezirk.party] || "#888";
  }
  const reps = d[currentLevel];
  if (!reps || reps.length === 0) return "#444";
  if (Array.isArray(reps)) return partyColors[reps[0].party] || "#888";
  return partyColors[reps.party] || "#888";
}

function styleFeature(feature) {
  const name = feature.properties.name;
  const color = getPartyForBezirk(name, feature);
  return {
    fillColor: color,
    fillOpacity: 0.45,
    color: "#0d0f14",
    weight: 2,
    opacity: 1
  };
}

function highlightFeature(e) {
  const layer = e.target;
  const border = layer.options?.fillColor || layer.options?.color || "#c8a96e";
  layer.setStyle({ fillOpacity: 0.5, weight: 3, color: border });
  layer.bringToFront();
}

function resetHighlight(e) {
  if (selectedLayer && e.target === selectedLayer) return;
  geoLayer.resetStyle(e.target);
  e.target.setStyle({ fillOpacity: 0.45, weight: 2, color: "#0d0f14" });
}

function onFeatureClick(e) {
  clearOverlaySelection();
  if (selectedLayer) {
    geoLayer.resetStyle(selectedLayer);
    selectedLayer.setStyle({ fillOpacity: 0.45, weight: 2, color: "#0d0f14" });
  }
  selectedLayer = e.target;
  selectedFeature = e.target.feature;
  const base = styleFeature(selectedFeature);
  const highlightStyle = {
    ...base,
    color: base.fillColor || base.color,
    weight: 3,
    fillOpacity: 0.5
  };
  selectedLayer.setStyle(base);
  showHighlightLayer(selectedFeature, highlightStyle);
  if (typeof selectedLayer.bringToFront === "function") {
    selectedLayer.bringToFront();
  }
  handleLayerClick("agh", e.target.feature);
}

function initGeoLayer() {
  if (!berlinGeoJSON) return;
  const wasVisible = geoLayer ? map.hasLayer(geoLayer) : true;
  if (geoLayer) { map.removeLayer(geoLayer); geoLayer = null; }
  selectedLayer = null;
  ensurePane("pane-agh", 455);
  geoLayer = L.geoJSON(berlinGeoJSON, {
    pane: "pane-agh",
    style: styleFeature,
    onEachFeature: (feature, layer) => {
      layer.on({ click: onFeatureClick });
      layer.bindTooltip(feature.properties.name, {
        permanent: false,
        direction: "top",
        offset: [0, -12],
        className: "district-tooltip",
        opacity: 0.9
      });
    }
  }).addTo(map);

  aghOverlay = geoLayer;
  if (!wasVisible) map.removeLayer(aghOverlay);
  rebuildOverlayControl();
  applyLayerSelection(currentLevel);
}

function getAllowedLevels(layerId) {
  return layerLevelMap[layerId] || [];
}

function getEffectiveLevels(allowed) {
  if (!allowed || allowed.length === 0) return [];
  if (currentLevel === "alle") return allowed;
  if (allowed.includes(currentLevel)) return [currentLevel];
  return allowed;
}

function buildContextFromFeature(layerId, feature) {
  const context = {
    layerId,
    feature,
    allowedLevels: getAllowedLevels(layerId)
  };

  if (layerId === "agh") {
    context.awk = normalizeAwk(feature.properties?.AWK);
    context.bez = normalizeBez(feature.properties?.BEZ);
    context.bezirkName = feature.properties?.name;
    return context;
  }

  if (layerId === "btg") {
    context.btgWkr = findWkrValue(feature.properties);
    context.btgName = findWkrName(feature.properties);
    const mapping = context.btgWkr ? btgTooltipByBwk.get(context.btgWkr) : null;
    const mappedBez = mapping?.bez || normalizeBez(feature.properties?.BEZ || feature.properties?.Bez || feature.properties?.bez);
    if (mappedBez) {
      context.bez = mappedBez;
      context.bezirkName = districtByNumber.get(mappedBez)?.name || context.bezirkName;
    }
    if (!context.bezirkName) {
      const fallbackBez = getBezirkNameFromBtgName(mapping?.name || context.btgName);
      if (fallbackBez) context.bezirkName = fallbackBez;
    }
    return context;
  }

  if (layerId === "eu") {
    context.citywide = true;
    return context;
  }

  const name = layerId === "bezirke"
    ? getBezirkNameFromFeature(feature)
    : pickProp(feature, ["name", "bezirk", "bezeichnung", "bezirkname"]);
  if (name) {
    context.bezirkName = name;
    const meta = districtByName.get(name);
    if (meta?.bez) context.bez = meta.bez;
  }

  const centroid = getFeatureCentroid(feature);
  const aghFeature = centroid ? findContainingAghFeature(centroid) : null;
  if (aghFeature) {
    const bez = normalizeBez(aghFeature.properties?.BEZ);
    const awk = normalizeAwk(aghFeature.properties?.AWK);
    const bezName = aghFeature.properties?.name;
    if (!context.bez) context.bez = bez;
    if (!context.bezirkName && bezName) context.bezirkName = bezName;
    if (layerId !== "bezirke") context.awk = awk;
  }

  if (context.bezirkName) {
    const trimmed = String(context.bezirkName).trim();
    if (/^\d+$/.test(trimmed)) {
      const mapped = districtByNumber.get(normalizeBez(trimmed));
      if (mapped?.name) context.bezirkName = mapped.name;
    }
  }

  if (context.bez && !context.bezirkName) {
    const mapped = districtByNumber.get(context.bez);
    if (mapped?.name) context.bezirkName = mapped.name;
  }

  if (context.bezirkName && !context.bez) {
    const meta = districtByName.get(context.bezirkName);
    if (meta?.bez) context.bez = meta.bez;
  }

  return context;
}

function handleLayerClick(layerId, feature) {
  activeContext = buildContextFromFeature(layerId, feature);
  renderPanel(activeContext);
}

function collectBvvEntries(context) {
  const bezirkName = getContextBezirkName(context);
  return bezirkName ? [...(bvvByBezirk.get(bezirkName) || [])] : [];
}

function collectBezirksamtEntries(context) {
  const bezirkName = getContextBezirkName(context);
  return bezirkName ? [...(bvvExecutiveByBezirk.get(bezirkName) || [])] : [];
}

function collectAghEntries(context) {
  if (context?.awk) {
    return [...(aghByAwk.get(context.awk) || [])];
  }
  if (context?.bez) {
    const entries = [];
    const awks = aghByBez.get(context.bez);
    if (awks) {
      awks.forEach(awk => {
        const list = aghByAwk.get(awk) || [];
        list.forEach(entry => pushUnique(entries, entry));
      });
    }
    return entries;
  }
  return [];
}

function collectSenateEntries(context) {
  const entries = [];
  aghExecutiveCitywide.forEach(entry => pushUnique(entries, entry));
  const bezirkName = getContextBezirkName(context);
  if (bezirkName) {
    const local = aghExecutiveByBezirk.get(bezirkName) || [];
    local.forEach(entry => pushUnique(entries, entry));
  }
  return entries;
}

function sortExecutiveEntries(entries, level) {
  const list = Array.isArray(entries) ? [...entries] : [];
  return list.sort((a, b) => {
    const scoreFor = (entry) => {
      if (level === "bezirksamt") {
        const canonical = getBvvRoleCanonical(entry?.role);
        if (canonical === "bezirksbuergermeister") return 0;
        if (canonical === "stadtrat") return 1;
        return 2;
      }
      const roleText = normalizeRoleMatchText(entry?.role);
      if (roleText.includes("regierender buergermeister") || roleText.includes("regierende buergermeisterin")) return 0;
      if (roleText.includes("senator")) return 1;
      return 2;
    };
    const diff = scoreFor(a) - scoreFor(b);
    if (diff !== 0) return diff;
    const nameA = stripAcademicTitles(String(a?.name || ""));
    const nameB = stripAcademicTitles(String(b?.name || ""));
    return nameA.localeCompare(nameB, "de");
  });
}

function collectBundestagEntries(context) {
  const entries = [];
  if (context?.btgWkr) {
    const list = btgByWkr.get(context.btgWkr) || [];
    list.forEach(entry => pushUnique(entries, entry));
  }
  btgCitywide.forEach(entry => pushUnique(entries, entry));
  return entries;
}

function buildSearchContext(options = {}) {
  const level = options.level || currentLevel;
  const bezirkName = options.citywide
    ? (options.bezirkName || "Berlin")
    : (options.bezirkName || "");
  return {
    layerId: "search",
    allowedLevels: [level],
    bez: options.bez || "",
    bezirkName,
    awk: options.awk || "",
    btgWkr: options.btgWkr || "",
    btgName: options.btgName || "",
    citywide: Boolean(options.citywide)
  };
}

function getDefaultContextForLevel(level) {
  if (level === "senat") {
    return buildSearchContext({ level: "senat", citywide: true, bezirkName: "Berlin" });
  }
  return null;
}

function getSearchContextLabel(level, context) {
  if (!context) return "";
  if (level === "abgeordnetenhaus" && context.awk) {
    const suffix = context.bezirkName ? ` · ${context.bezirkName}` : "";
    return `WK ${context.awk}${suffix}`;
  }
  if (level === "bundestag" && context.btgWkr) {
    const suffix = context.btgName ? ` · ${context.btgName}` : "";
    return `WK ${context.btgWkr}${suffix}`;
  }
  if (context.citywide) return context.bezirkName || "Berlin";
  if (context.bezirkName && context.bez) return `Bezirk ${context.bez} · ${context.bezirkName}`;
  return context.bezirkName || "";
}

function looksLikeCommitteeSearchText(value) {
  return /ausschuss|unterausschuss|beirat|kommission|aeltestenrat|ältestenrat|vorstand|bezirksverordneten/i.test(String(value || ""));
}

function collectEntryCommitteeDescriptors(entry) {
  const descriptors = [];
  const seen = new Set();
  const addDescriptor = (label, committeeInfo) => {
    const labels = [];
    const rawLabel = String(label || "").trim();
    const short = String(committeeInfo?.short || "").trim();
    const name = String(committeeInfo?.name || rawLabel || short).trim();
    if (short) labels.push(short);
    if (name) labels.push(name);
    if (rawLabel) labels.push(rawLabel);
    const uniqueLabels = Array.from(new Set(labels.filter(Boolean)));
    const tokens = buildSearchTokens(uniqueLabels);
    if (!tokens.length) return;
    const id = short || normalizeSearchText(name);
    if (!id || seen.has(id)) return;
    seen.add(id);
    descriptors.push({
      id,
      short,
      name,
      labels: uniqueLabels,
      tokens,
      committee: committeeInfo || null
    });
  };

  if (Array.isArray(entry?.committee_memberships)) {
    entry.committee_memberships.forEach(item => {
      addDescriptor(item?.short || item?.committeeLabel || item?.name, item?.committee || null);
    });
  }

  if (Array.isArray(entry?.oparl_memberships)) {
    entry.oparl_memberships.forEach(item => {
      const orgLabel = String(item?.org || item?.name || "").trim();
      const committeeInfo = item?.committee || (looksLikeCommitteeSearchText(orgLabel) ? resolveCommitteeFromLabels([orgLabel]) : null);
      if (!committeeInfo && !looksLikeCommitteeSearchText(orgLabel)) return;
      addDescriptor(orgLabel, committeeInfo);
    });
  }

  return descriptors;
}

function entryMatchesSearchFocus(entry, level) {
  if (!activeSearchFocus || activeSearchFocus.level !== level) return true;
  if (activeSearchFocus.kind === "person") {
    return normalizePersonName(entry?.name) === activeSearchFocus.nameKey;
  }
  if (activeSearchFocus.kind === "committee") {
    const descriptorTokens = collectEntryCommitteeDescriptors(entry).flatMap(item => item.tokens || []);
    return descriptorTokens.some(token => activeSearchFocus.tokens.includes(token));
  }
  return true;
}

function filterEntriesBySearch(entries, level) {
  if (!activeSearchFocus || activeSearchFocus.level !== level) return entries;
  return entries.filter(entry => entryMatchesSearchFocus(entry, level));
}

function addSearchResult(results, seen, result) {
  if (!result || !result.id || seen.has(result.id)) return;
  seen.add(result.id);
  results.push(result);
}

function createPersonSearchResult(level, entry, context, roleLabel) {
  const name = String(entry?.name || "").trim();
  if (!name) return null;
  const nameKey = normalizePersonName(name);
  if (!nameKey) return null;
  const contextLabel = getSearchContextLabel(level, context);
  const subtitleParts = [levelLabels[level], contextLabel, roleLabel].filter(Boolean);
  const contextId = [
    context?.bez || "",
    context?.bezirkName || "",
    context?.awk || "",
    context?.btgWkr || "",
    context?.btgName || "",
    context?.citywide ? "city" : ""
  ].join("|");
  return {
    id: `person|${level}|${nameKey}|${contextId}|${normalizeSearchText(roleLabel)}`,
    kind: "person",
    kindLabel: "Politiker/in",
    level,
    title: name,
    queryLabel: name,
    subtitle: subtitleParts.join(" · "),
    tokens: buildSearchTokens([name, stripAcademicTitles(name)]),
    sortLabel: stripAcademicTitles(name),
    context,
    focus: {
      kind: "person",
      level,
      label: name,
      nameKey
    }
  };
}

function createCommitteeSearchResult(level, context, descriptor) {
  if (!descriptor) return null;
  const primaryTitle = descriptor.short || descriptor.name;
  if (!primaryTitle) return null;
  const title = descriptor.committee ? formatCommitteeShort(descriptor.committee) : primaryTitle;
  const longLabel = descriptor.committee ? formatCommitteeLong(descriptor.committee) : descriptor.name;
  const contextLabel = getSearchContextLabel(level, context);
  const subtitleParts = [
    levelLabels[level],
    contextLabel,
    longLabel && longLabel !== title ? longLabel : ""
  ].filter(Boolean);
  return {
    id: `committee|${level}|${context?.bez || ""}|${context?.awk || ""}|${context?.btgWkr || ""}|${descriptor.id}`,
    kind: "committee",
    kindLabel: "Ausschuss",
    level,
    title,
    queryLabel: descriptor.short || descriptor.name || title,
    subtitle: subtitleParts.join(" · "),
    tokens: descriptor.tokens || [],
    sortLabel: longLabel || primaryTitle,
    context,
    focus: {
      kind: "committee",
      level,
      label: longLabel && longLabel !== title ? `${title} · ${longLabel}` : title,
      tokens: descriptor.tokens || []
    }
  };
}

function buildSearchIndex() {
  const results = [];
  const seen = new Set();

  bvvByBezirk.forEach((entries, bezirkName) => {
    const bez = bezirkeData[bezirkName]?.nr || districtByName.get(bezirkName)?.bez || "";
    const context = buildSearchContext({ level: "bezirk", bez, bezirkName });
    const committeeSeen = new Set();
    (entries || []).forEach(entry => {
      const displayRole = applyBezirkRoleOverride(entry?.role || "Bezirksverordnete/r", bezirkName);
      addSearchResult(results, seen, createPersonSearchResult("bezirk", entry, context, displayRole));
      collectEntryCommitteeDescriptors(entry).forEach(descriptor => {
        const committeeKey = `committee|${bezirkName}|${descriptor.id}`;
        if (committeeSeen.has(committeeKey)) return;
        committeeSeen.add(committeeKey);
        addSearchResult(results, seen, createCommitteeSearchResult("bezirk", context, descriptor));
      });
    });
  });

  bvvExecutiveByBezirk.forEach((entries, bezirkName) => {
    const bez = bezirkeData[bezirkName]?.nr || districtByName.get(bezirkName)?.bez || "";
    const context = buildSearchContext({ level: "bezirksamt", bez, bezirkName });
    (entries || []).forEach(entry => {
      addSearchResult(results, seen, createPersonSearchResult("bezirksamt", entry, context, entry?.role || ""));
    });
  });

  aghByAwk.forEach((entries, awk) => {
    const aghFeature = berlinGeoJSON?.features?.find(feature => normalizeAwk(feature.properties?.AWK) === awk);
    const bez = aghFeature ? normalizeBez(aghFeature.properties?.BEZ) : "";
    const bezirkName = aghFeature?.properties?.name || districtByNumber.get(bez)?.name || "";
    const context = buildSearchContext({ level: "abgeordnetenhaus", bez, bezirkName, awk });
    const committeeSeen = new Set();
    (entries || []).forEach(entry => {
      const roleLabel = entry?.art === "Direkt" ? "Abgeordnete/r (MdA) · Direktmandat" : "Abgeordnete/r (MdA) · Listenmandat";
      addSearchResult(results, seen, createPersonSearchResult("abgeordnetenhaus", entry, context, roleLabel));
      collectEntryCommitteeDescriptors(entry).forEach(descriptor => {
        const committeeKey = `committee|agh|${awk}|${descriptor.id}`;
        if (committeeSeen.has(committeeKey)) return;
        committeeSeen.add(committeeKey);
        addSearchResult(results, seen, createCommitteeSearchResult("abgeordnetenhaus", context, descriptor));
      });
    });
  });

  aghExecutiveByBezirk.forEach((entries, bezirkName) => {
    const bez = bezirkeData[bezirkName]?.nr || districtByName.get(bezirkName)?.bez || "";
    const context = buildSearchContext({ level: "senat", bez, bezirkName });
    (entries || []).forEach(entry => {
      addSearchResult(results, seen, createPersonSearchResult("senat", entry, context, entry?.role || "Senat"));
    });
  });

  aghExecutiveCitywide.forEach(entry => {
    const context = buildSearchContext({ level: "senat", citywide: true, bezirkName: "Berlin" });
    addSearchResult(results, seen, createPersonSearchResult("senat", entry, context, entry?.role || "Senat"));
  });

  btgByWkr.forEach((entries, btgWkr) => {
    const mapping = btgTooltipByBwk.get(btgWkr);
    const bez = mapping?.bez || "";
    const bezirkName = districtByNumber.get(bez)?.name || getBezirkNameFromBtgName(mapping?.name || "");
    const context = buildSearchContext({
      level: "bundestag",
      bez,
      bezirkName,
      btgWkr,
      btgName: mapping?.name || ""
    });
    const committeeSeen = new Set();
    (entries || []).forEach(entry => {
      addSearchResult(results, seen, createPersonSearchResult("bundestag", entry, context, buildBtgMandateLine(entry)));
      collectEntryCommitteeDescriptors(entry).forEach(descriptor => {
        const committeeKey = `committee|btg|${btgWkr}|${descriptor.id}`;
        if (committeeSeen.has(committeeKey)) return;
        committeeSeen.add(committeeKey);
        addSearchResult(results, seen, createCommitteeSearchResult("bundestag", context, descriptor));
      });
    });
  });

  btgCitywide.forEach(entry => {
    const context = buildSearchContext({ level: "bundestag", citywide: true, bezirkName: "Berlin" });
    addSearchResult(results, seen, createPersonSearchResult("bundestag", entry, context, buildBtgMandateLine(entry)));
  });

  euCitywide.forEach(entry => {
    const context = buildSearchContext({ level: "eu", citywide: true, bezirkName: "Berlin" });
    addSearchResult(results, seen, createPersonSearchResult("eu", entry, context, entry?.role || "EU-Parlament"));
  });

  searchIndex = results.sort((a, b) => {
    if (a.kind !== b.kind) return a.kind === "person" ? -1 : 1;
    const byName = String(a.sortLabel || a.title || "").localeCompare(String(b.sortLabel || b.title || ""), "de");
    if (byName !== 0) return byName;
    return String(a.subtitle || "").localeCompare(String(b.subtitle || ""), "de");
  });
  renderSearchResults();
}

function scoreSearchResult(result, query) {
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) return Number.POSITIVE_INFINITY;
  const compactQuery = normalizedQuery.replace(/\s+/g, "");
  let best = Number.POSITIVE_INFINITY;
  (result?.tokens || []).forEach(token => {
    if (!token) return;
    if (token === normalizedQuery || token === compactQuery) {
      best = Math.min(best, 0);
      return;
    }
    if (token.startsWith(normalizedQuery) || token.startsWith(compactQuery)) {
      best = Math.min(best, 1);
      return;
    }
    if (token.split(" ").some(part => part.startsWith(normalizedQuery))) {
      best = Math.min(best, 2);
      return;
    }
    if (token.includes(normalizedQuery) || token.includes(compactQuery)) {
      best = Math.min(best, 3);
    }
  });
  if (result?.kind === "person") best -= 0.05;
  return best;
}

function getSearchMatches(query) {
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery || normalizedQuery.length < 2) return [];
  return searchIndex
    .map(result => ({ result, score: scoreSearchResult(result, normalizedQuery) }))
    .filter(item => Number.isFinite(item.score))
    .sort((a, b) => {
      if (a.score !== b.score) return a.score - b.score;
      const titleCompare = String(a.result.sortLabel || a.result.title || "").localeCompare(String(b.result.sortLabel || b.result.title || ""), "de");
      if (titleCompare !== 0) return titleCompare;
      return String(a.result.subtitle || "").localeCompare(String(b.result.subtitle || ""), "de");
    })
    .slice(0, SEARCH_RESULT_LIMIT)
    .map(item => item.result);
}

function closeSearchResults() {
  searchDropdownResults = [];
  searchActiveIndex = -1;
  const resultsEl = document.getElementById("topSearchResults");
  if (resultsEl) {
    resultsEl.hidden = true;
    resultsEl.innerHTML = "";
  }
}

function syncSearchClearButton() {
  const clearButton = document.getElementById("topSearchClear");
  const input = document.getElementById("topSearchInput");
  if (!clearButton) return;
  const hasValue = Boolean((input?.value || "").trim()) || Boolean(activeSearchFocus);
  clearButton.classList.toggle("visible", hasValue);
}

function renderSearchResults() {
  const input = document.getElementById("topSearchInput");
  const resultsEl = document.getElementById("topSearchResults");
  if (!input || !resultsEl) return;
  const query = String(input.value || "").trim();
  if (!query || normalizeSearchText(query).length < 2) {
    closeSearchResults();
    syncSearchClearButton();
    return;
  }
  const matches = getSearchMatches(query);
  searchDropdownResults = matches;
  searchActiveIndex = matches.length ? Math.max(0, Math.min(searchActiveIndex, matches.length - 1)) : -1;
  if (!matches.length) {
    searchActiveIndex = -1;
    resultsEl.innerHTML = `<div class="search-empty">Keine Treffer fuer diese Suche.</div>`;
    resultsEl.hidden = false;
    syncSearchClearButton();
    return;
  }
  resultsEl.innerHTML = matches.map((result, index) => `
    <button class="search-result${index === searchActiveIndex ? " active" : ""}" data-search-index="${index}" type="button">
      <span class="search-result-top">
        <span class="search-result-title">${escapeHtml(result.title)}</span>
        <span class="search-result-kind">${escapeHtml(result.kindLabel)}</span>
      </span>
      <span class="search-result-subtitle">${escapeHtml(result.subtitle)}</span>
    </button>
  `).join("");
  resultsEl.hidden = false;
  syncSearchClearButton();
}

function clearSearch(options = {}) {
  const input = document.getElementById("topSearchInput");
  if (options.clearInput !== false && input) {
    input.value = "";
  }
  activeSearchFocus = null;
  closeSearchResults();
  syncSearchClearButton();
  renderPanel(activeContext);
  if (options.focusInput && input) input.focus();
}

function activateSearchResult(result) {
  if (!result) return;
  const input = document.getElementById("topSearchInput");
  activePartyFilter = null;
  updateLegend();
  activeSearchFocus = result.focus ? { ...result.focus } : null;
  if (input) {
    input.value = result.queryLabel || result.title || "";
  }
  closeSearchResults();
  syncSearchClearButton();
  setLevel(result.level);
  activeContext = result.context ? { ...result.context } : null;
  renderPanel(activeContext);
}

function warmBvvSearchData() {
  if (bvvSearchWarmupStarted) return;
  bvvSearchWarmupStarted = true;
  const bezirke = Object.keys(bezirkeData).filter(name => name !== "Spandau");
  (async () => {
    for (const bezirkName of bezirke) {
      try {
        await ensureBvvOparlForBezirk(bezirkName);
      } catch (err) {
        console.warn(`Search warmup skipped for ${bezirkName}.`, err);
      }
    }
  })();
}

function getSearchFocusBannerHtml() {
  if (!activeSearchFocus || activeSearchFocus.level !== currentLevel) return "";
  const kicker = activeSearchFocus.kind === "committee" ? "Ausschuss-Suche" : "Personen-Suche";
  return `
    <div class="search-focus-banner">
      <div class="search-focus-kicker">${escapeHtml(kicker)}</div>
      <div class="search-focus-value">${escapeHtml(activeSearchFocus.label || "")}</div>
    </div>
  `;
}

function updateSidebarHeader(context) {
  const nrEl = document.getElementById("districtHeaderNr");
  const nameEl = document.getElementById("districtHeaderName");
  if (!nrEl || !nameEl) return;

  if (!context) {
    nrEl.textContent = "Bezirk";
    nameEl.textContent = "Auf der Karte auswählen";
    return;
  }

  const canonicalBezirkName = getContextBezirkName(context);
  const bezData = canonicalBezirkName ? bezirkeData[canonicalBezirkName] : null;
  const headerName = isBezirkLevel(currentLevel)
    ? (canonicalBezirkName || context.bezirkName || (context.layerId === "eu" ? "Berlin (Stadtgebiet)" : "Berlin"))
    : (context.bezirkName || canonicalBezirkName || (context.layerId === "eu" ? "Berlin (Stadtgebiet)" : "Berlin"));
  const headerNr = context.bez || bezData?.nr;
  const wkLabel = (isAghLevel(currentLevel) && context.awk) ? `WK ${context.awk}` : "";

  if (headerNr) {
    nrEl.textContent = wkLabel ? `Bezirk ${headerNr} · ${wkLabel}` : `Bezirk ${headerNr}`;
  } else {
    nrEl.textContent = wkLabel ? `Stadtgebiet · ${wkLabel}` : "Stadtgebiet";
  }
  nameEl.textContent = headerName;
}

function renderPanel(context) {
  updateSidebarHeader(context);
  if (!context) {
    document.getElementById('districtInfo').innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🗺️</div>
        <div class="empty-text">Bezirk auf der Karte auswählen</div>
      </div>`;
    return;
  }

  const bezirkName = getContextBezirkName(context);

  if (currentLevel === "bezirk" && bezirkName) {
    ensureBvvOparlForBezirk(bezirkName);
    ensureBvvLocalForBezirk(bezirkName);
  }

  const allowed = context.allowedLevels || getAllowedLevels(context.layerId);
  const levels = getEffectiveLevels(allowed);
  let html = getSearchFocusBannerHtml();
  let hasRenderedContent = false;

  for (const lvl of levels) {
    const label = levelLabels[lvl];
    if (lvl === "bezirk") {
      const entries = filterEntriesBySearch(filterEntriesByParty(collectBvvEntries(context)), lvl);
      if (entries.length > 0) {
        hasRenderedContent = true;
        const orderedEntries = [...entries].sort((a, b) => {
          const isFactionChairA = a?.faction_membership && (a.faction_membership.canonicalRole || getBvvRoleCanonical(a.faction_membership.role)) === "fraktionsvorsitz";
          const isFactionChairB = b?.faction_membership && (b.faction_membership.canonicalRole || getBvvRoleCanonical(b.faction_membership.role)) === "fraktionsvorsitz";
          const roleA = isFactionChairA ? "fraktionsvorsitz" : getBvvRoleCanonical(a?.role);
          const roleB = isFactionChairB ? "fraktionsvorsitz" : getBvvRoleCanonical(b?.role);
          const rankA = BVV_ROLE_ORDER.indexOf(roleA);
          const rankB = BVV_ROLE_ORDER.indexOf(roleB);
          const scoreA = rankA === -1 ? BVV_ROLE_ORDER.length + 1 : rankA;
          const scoreB = rankB === -1 ? BVV_ROLE_ORDER.length + 1 : rankB;
          if (scoreA !== scoreB) return scoreA - scoreB;
          const nameA = stripAcademicTitles(String(a?.name || ""));
          const nameB = stripAcademicTitles(String(b?.name || ""));
          return nameA.localeCompare(nameB, "de");
        });
        orderedEntries.forEach((entry, entryIndex) => {
          const sinceYear = formatSinceYear(entry.since);
          const sinceText = sinceYear ? ` · seit ${sinceYear}` : "";
          const isFactionChair = entry.faction_membership && (entry.faction_membership.canonicalRole || getBvvRoleCanonical(entry.faction_membership.role)) === "fraktionsvorsitz";
          const baseRole = isFactionChair ? "Fraktionsvorsitzende/r" : entry.role;
          const displayRole = applyBezirkRoleOverride(baseRole, bezirkName);
          const metaLines = [];
          if (Array.isArray(entry.committee_memberships)) {
            entry.committee_memberships.forEach(membership => {
              const canonical = membership?.canonicalRole || getBvvRoleCanonical(membership?.role);
              if (canonical === "ausschussvorsitz" || canonical === "stv_ausschussvorsitz") {
                const roleLabel = normalizeBvvRole(membership?.role);
                const committeeShort = (membership?.committeeLabel || membership?.committee?.short || membership?.committee?.name || membership?.name || "").trim();
                const committeeDisplay = committeeShort ? renderCommitteeAbbrev(committeeShort, membership?.committee) : "";
                const line = formatMembershipMetaText(committeeDisplay, roleLabel);
                if (line) metaLines.push(`<div class="rep-role">${line}</div>`);
              }
            });
          }
          if (entry.oparl_status) {
            metaLines.push(`<div class="rep-role">Status: ${entry.oparl_status}</div>`);
          }
          if (Array.isArray(entry.oparl_memberships)) {
            entry.oparl_memberships.forEach(item => {
              const isString = typeof item === "string";
              const text = isString ? item : (item?.text || "");
              const parts = String(text || "").split(" · ");
              const orgText = isString ? (parts[0] || "") : (item?.org || "");
              const roleText = isString ? parts.slice(1).join(" · ") : (item?.role || "");
              const canonicalRole = isString ? "" : String(item?.canonicalRole || "").trim();
              const normalizedRole = String(roleText || "").toLowerCase();
              if (canonicalRole === "mitglied_bvv") return;
              if (canonicalRole === "fraktionsvorsitz") return;
              if (canonicalRole === "fraktionsmitglied") return;
              if (/bezirksverordnet/.test(normalizedRole)) return;
              if (/fraktionsvorsitz/.test(normalizedRole)) return;
              if (/fraktionsmitglied/.test(normalizedRole)) return;
              const committeeInfo = item?.committee || (orgText && /ausschuss|unterausschuss|beirat|kommission|aeltestenrat|ältestenrat|vorstand|bezirksverordneten/i.test(orgText) ? resolveCommitteeFromLabels([orgText]) : null);
              const orgDisplay = committeeInfo ? renderCommitteeAbbrev(orgText, committeeInfo) : String(orgText || "").trim();
              const line = formatMembershipMetaText(orgDisplay, roleText);
              if (line) metaLines.push(`<div class="rep-role">${line}</div>`);
            });
          }
          const metaId = `bvv-meta-${bezirkName || "bezirk"}-${entryIndex}`;
          const metaHtml = metaLines.length
            ? `<button class="meta-toggle" data-target="${metaId}" type="button" aria-expanded="false"><span class="meta-toggle-arrow">▸</span><span class="meta-toggle-label">${displayRole}${sinceText}</span></button><div class="rep-meta" id="${metaId}" style="display:none;">${metaLines.join("")}</div>`
            : "";
          const keywordText = getDepartmentKeywordText(entry);
          const keywordHtml = keywordText ? `<div class="rep-role rep-department">${keywordText}</div>` : "";
          const partyLabel = normalizePartyLabel(entry.party);
          html += `<div class="rep-card">
            <div class="rep-level">${label}</div>
            <div class="rep-name-line">
              ${renderPoliticianNameHtml(entry)}
              <span class="rep-party party-${partyClassName(partyLabel)}">${partyLabel}</span>
            </div>
            ${metaLines.length ? "" : `<div class="rep-role">${displayRole}${sinceText}</div>`}
            ${metaHtml}
            ${keywordHtml}
          </div>`;
        });
      }
    } else if (lvl === "bezirksamt") {
      const entries = sortExecutiveEntries(filterEntriesBySearch(filterEntriesByParty(collectBezirksamtEntries(context)), lvl), "bezirksamt");
      if (entries.length > 0) {
        hasRenderedContent = true;
        entries.forEach(entry => {
          const sinceYear = formatSinceYear(entry.since);
          const sinceText = sinceYear ? ` · seit ${sinceYear}` : "";
          const keywordText = getDepartmentKeywordText(entry);
          const keywordHtml = keywordText ? `<div class="rep-role rep-department">${keywordText}</div>` : "";
          const partyLabel = normalizePartyLabel(entry.party);
          html += `<div class="rep-card">
            <div class="rep-level">${label}</div>
            <div class="rep-name-line">
              ${renderPoliticianNameHtml(entry)}
              <span class="rep-party party-${partyClassName(partyLabel)}">${partyLabel}</span>
            </div>
            <div class="rep-role">${entry.role}${sinceText}</div>
            ${keywordHtml}
          </div>`;
        });
      }
    } else if (lvl === "abgeordnetenhaus") {
      const entries = filterEntriesBySearch(filterEntriesByParty(collectAghEntries(context)), lvl);
      if (entries.length > 0) {
        hasRenderedContent = true;
        const direct = entries.filter(e => e.art === "Direkt").sort((a, b) => stripAcademicTitles(a.name).localeCompare(stripAcademicTitles(b.name), "de"));
        const lists = entries.filter(e => e.art !== "Direkt").sort((a, b) => stripAcademicTitles(a.name).localeCompare(stripAcademicTitles(b.name), "de"));
        const ordered = direct.concat(lists);
        ordered.forEach((entry, entryIndex) => {
          const isList = entry.art !== "Direkt";
          const partyLabel = normalizePartyLabel(entry.party);
          const role = isList
            ? (() => {
              const parts = ["Abgeordnete/r (MdA)", "Listenmandat"];
              if (entry.note) parts.push(entry.note);
              return parts.join(" · ");
            })()
            : "Abgeordnete/r (MdA) · Direktmandat";
          const committeeLines = [];
          if (Array.isArray(entry.committee_memberships)) {
            entry.committee_memberships.forEach(membership => {
              const committeeShort = (membership?.committeeLabel || membership?.committee?.short || membership?.committee?.name || membership?.name || "").trim();
              const committeeDisplay = committeeShort ? renderCommitteeAbbrev(committeeShort, membership?.committee) : "";
              const line = formatMembershipMetaText(committeeDisplay, membership?.role || "Ausschussmitglied");
              if (line) committeeLines.push(`<div class="rep-role">${line}</div>`);
            });
          }
          const metaId = `agh-meta-${entry.awk || "agh"}-${entryIndex}`;
          const metaHtml = committeeLines.length
            ? `<button class="meta-toggle" data-target="${metaId}" type="button" aria-expanded="false"><span class="meta-toggle-arrow">▸</span><span class="meta-toggle-label">${role}</span></button><div class="rep-meta" id="${metaId}" style="display:none;">${committeeLines.join("")}</div>`
            : "";
          html += `<div class="rep-card agh-entry${isList ? " list-entry" : ""}">
            <div class="rep-level">${label}</div>
            <div class="rep-name-line">
              ${renderPoliticianNameHtml(entry)}
              <span class="rep-party party-${partyClassName(partyLabel)}">${partyLabel}</span>
            </div>
            ${committeeLines.length ? "" : `<div class="rep-role">${role}</div>`}
            ${metaHtml}
          </div>`;
        });
      }
    } else if (lvl === "senat") {
      const entries = sortExecutiveEntries(filterEntriesBySearch(filterEntriesByParty(collectSenateEntries(context)), lvl), "senat");
      if (entries.length > 0) {
        hasRenderedContent = true;
        entries.forEach(entry => {
          const sinceYear = formatSinceYear(entry.since);
          const sinceText = sinceYear ? ` · seit ${sinceYear}` : "";
          const keywordText = getDepartmentKeywordText(entry);
          const keywordHtml = keywordText ? `<div class="rep-role rep-department">${keywordText}</div>` : "";
          const partyLabel = normalizePartyLabel(entry.party);
          html += `<div class="rep-card agh-entry">
            <div class="rep-level">${label}</div>
            <div class="rep-name-line">
              ${renderPoliticianNameHtml(entry)}
              <span class="rep-party party-${partyClassName(partyLabel)}">${partyLabel}</span>
            </div>
            <div class="rep-role">${entry.role}${sinceText}</div>
            ${keywordHtml}
          </div>`;
        });
      }
    } else if (lvl === "bundestag") {
      const entries = filterEntriesBySearch(filterEntriesByParty(collectBundestagEntries(context)), lvl);
      if (entries.length > 0) {
        hasRenderedContent = true;
        entries.forEach((entry, entryIndex) => {
          const isList = entry.art !== "Direkt";
          const mandateLine = buildBtgMandateLine(entry);
          const partyLabel = normalizePartyLabel(entry.party);
          const committeeLines = [];
          if (Array.isArray(entry.committee_memberships)) {
            entry.committee_memberships.forEach(membership => {
              const committeeShort = (membership?.committeeLabel || membership?.committee?.short || membership?.committee?.name || membership?.name || "").trim();
              const committeeDisplay = committeeShort ? renderCommitteeAbbrev(committeeShort, membership?.committee) : "";
              const line = formatMembershipMetaText(committeeDisplay, membership?.role || "Ausschussmitglied");
              if (line) committeeLines.push(`<div class="rep-role">${line}</div>`);
            });
          }
          const metaId = `btg-meta-${entry.wkr || "btg"}-${entryIndex}`;
          const metaHtml = committeeLines.length
            ? `<button class="meta-toggle" data-target="${metaId}" type="button" aria-expanded="false"><span class="meta-toggle-arrow">▸</span><span class="meta-toggle-label">Bundestagsabgeordnete/r · ${mandateLine}</span></button><div class="rep-meta" id="${metaId}" style="display:none;">${committeeLines.join("")}</div>`
            : "";
          html += `<div class="rep-card${isList ? " list-entry" : ""}">
            <div class="rep-level">${label}</div>
            <div class="rep-name-line">
              ${renderPoliticianNameHtml(entry)}
              <span class="rep-party party-${partyClassName(partyLabel)}">${partyLabel}</span>
            </div>
            ${committeeLines.length ? "" : `<div class="rep-role">Bundestagsabgeordnete/r</div><div class="rep-role">${mandateLine}</div>`}
            ${metaHtml}
          </div>`;
        });
      }
    } else if (lvl === "eu") {
      const entries = filterEntriesBySearch(filterEntriesByParty(euCitywide), lvl);
      if (entries.length > 0) {
        hasRenderedContent = true;
        entries.forEach(entry => {
          const partyLabel = normalizePartyLabel(entry.party);
          html += `<div class="rep-card">
            <div class="rep-level">${label}</div>
            <div class="rep-name-line">
              ${renderPoliticianNameHtml(entry)}
              <span class="rep-party party-${partyClassName(partyLabel)}">${partyLabel}</span>
            </div>
            <div class="rep-role">${entry.role}</div>
          </div>`;
        });
      }
    }
  }

  if (!levels.length) {
    hasRenderedContent = true;
    html += `<div class="rep-card"><div class="rep-role">Keine passenden Ebenen für diese Ebene.</div></div>`;
  }

  if (!hasRenderedContent) {
    html = `
      ${getSearchFocusBannerHtml()}
      <div class="empty-state">
        <div class="empty-icon">⌕</div>
        <div class="empty-text">Keine Treffer im aktuellen Ausschnitt.</div>
      </div>`;
  }

  document.getElementById('districtInfo').innerHTML = html;
}

function setLevel(level) {
  currentLevel = level;
  resetMapSelection();
  const defaultContext = getDefaultContextForLevel(level);
  if (defaultContext) {
    activeContext = defaultContext;
  } else if (activeContext) {
    const allowed = activeContext.allowedLevels || getAllowedLevels(activeContext.layerId);
    if (!allowed.includes(currentLevel)) {
      activeContext = null;
    }
  }
  document.querySelectorAll('.tab').forEach(t => {
    t.classList.toggle('active', t.dataset.level === level);
  });
  initGeoLayer();
  applyLayerSelection(currentLevel);
  updateLegend();
  renderPanel(activeContext);
}


function updateLegend() {
  const parties = [
    "CDU", "SPD", "Grüne", "Linke", "AfD", "FDP",
    "BSW", "Tierschutzpartei", "Die PARTEI", "Die Grauen", "Volt Berlin",
    "Andere", "parteilos"
  ];
  const legend = document.getElementById('legend');
  legend.innerHTML = parties.map(p => `
      <button class="legend-item${activePartyFilter === p ? " active" : ""}" data-party="${p}" type="button">
        <div class="legend-dot" style="background:${partyColors[p]}"></div>
        ${p}
      </button>`).join('');
}

function matchesPartyFilter(party) {
  if (!activePartyFilter) return true;
  const filter = normalizePartyFilterValue(activePartyFilter);
  const normalized = normalizePartyLabel(party || "");
  if (filter === "Andere") {
    return normalized === "Andere" || !STANDARD_PARTIES.has(normalized);
  }
  return normalized === filter;
}

function filterEntriesByParty(entries) {
  if (!activePartyFilter) return entries;
  return entries.filter(entry => matchesPartyFilter(entry?.party));
}

function setPartyFilter(party) {
  const filter = normalizePartyFilterValue(party);
  activePartyFilter = activePartyFilter === filter ? null : filter;
  updateLegend();
  renderPanel(activeContext);
}

const legendEl = document.getElementById('legend');
if (legendEl) {
  legendEl.addEventListener('click', (event) => {
    const button = event.target.closest('.legend-item');
    if (!button) return;
    const party = button.dataset.party;
    if (!party) return;
    setPartyFilter(party);
  });
}

const districtInfoEl = document.getElementById('districtInfo');
if (districtInfoEl) {
  districtInfoEl.addEventListener('click', (event) => {
    const button = event.target.closest('.meta-toggle');
    if (!button) return;
    const targetId = button.dataset.target;
    if (!targetId) return;
    const panel = document.getElementById(targetId);
    if (!panel) return;
    const isOpen = panel.style.display === "block";
    panel.style.display = isOpen ? "none" : "block";
    const arrow = button.querySelector('.meta-toggle-arrow');
    if (arrow) arrow.textContent = isOpen ? "▸" : "▾";
    button.setAttribute('aria-expanded', isOpen ? "false" : "true");
  });
}

const searchInputEl = document.getElementById("topSearchInput");
const searchResultsEl = document.getElementById("topSearchResults");
const searchClearEl = document.getElementById("topSearchClear");
const headerSearchEl = document.getElementById("headerSearch");

if (searchInputEl) {
  searchInputEl.addEventListener("focus", () => {
    warmBvvSearchData();
    renderSearchResults();
  });

  searchInputEl.addEventListener("input", () => {
    if (activeSearchFocus) {
      activeSearchFocus = null;
      renderPanel(activeContext);
    }
    warmBvvSearchData();
    renderSearchResults();
  });

  searchInputEl.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeSearchResults();
      return;
    }
    if (!searchDropdownResults.length) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      searchActiveIndex = (searchActiveIndex + 1) % searchDropdownResults.length;
      renderSearchResults();
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      searchActiveIndex = (searchActiveIndex - 1 + searchDropdownResults.length) % searchDropdownResults.length;
      renderSearchResults();
      return;
    }
    if (event.key === "Enter") {
      event.preventDefault();
      const result = searchDropdownResults[searchActiveIndex] || searchDropdownResults[0];
      if (result) activateSearchResult(result);
    }
  });
}

if (searchResultsEl) {
  searchResultsEl.addEventListener("click", (event) => {
    const button = event.target.closest(".search-result");
    if (!button) return;
    const index = Number.parseInt(button.dataset.searchIndex || "", 10);
    if (Number.isNaN(index)) return;
    activateSearchResult(searchDropdownResults[index]);
  });
}

if (searchClearEl) {
  searchClearEl.addEventListener("click", () => {
    clearSearch({ clearInput: true, focusInput: true });
  });
}

document.addEventListener("click", (event) => {
  if (!headerSearchEl) return;
  if (headerSearchEl.contains(event.target)) return;
  closeSearchResults();
});

syncSearchClearButton();

async function initData() {
  try {
    const results = await Promise.allSettled([
      loadDistrictCSV(),
      loadAghCSV(),
      loadBtgCSV(),
      loadEuCSV(),
      loadBtgTooltipCSV(),
      loadBvvLists(),
      loadExecutiveRoles(),
      loadSenateExecutiveRoles(),
      loadBezirkArkis()
    ]);
    if (results[0].status === "rejected" || results[1].status === "rejected") {
      throw new Error("Pflichtdaten konnten nicht geladen werden.");
    }
    berlinGeoJSON = await loadWahlkreiseGeoJSON();
    indexAghByBezirk(berlinGeoJSON);
    buildSearchIndex();
    initGeoLayer();
    updateLegend();
    renderPanel(activeContext);
    warmBvvSearchData();
  } catch (err) {
    console.error("Daten konnten nicht geladen werden:", err);
    document.getElementById('districtInfo').innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">⚠️</div>
        <div class="empty-text">Daten konnten nicht geladen werden. Prüfen Sie die Dateien im Repo.</div>
      </div>`;
  }
}

// Add tooltip style
const style = document.createElement('style');
style.textContent = `
  .leaflet-container { outline: none; }
  .leaflet-tooltip { outline: none; }
  path.leaflet-interactive:focus { outline: none; }
  .district-tooltip { background: #1a1f2e; border: 1px solid #c8a96e; color: #e8eaf0; font-family: 'IBM Plex Sans', sans-serif; font-size: 13px; font-weight: 500; padding: 4px 10px; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.5); outline: none; }
  .osm-dark { filter: brightness(0.82) contrast(1.05) saturate(0.9); }
`;
document.head.appendChild(style);

const RUN_BVV_PERSON_CARD_TESTS = false;
const RUN_BVV_OPARL_TEST_BEZIRK = "";

initData().then(async () => {
  initOverlayLayers();
  if (!RUN_BVV_PERSON_CARD_TESTS) return;
  try {
    runBvvPersonCardTests();
    console.log("BVV person card tests passed.");
    if (RUN_BVV_OPARL_TEST_BEZIRK) {
      await runBvvPersonCardOparlTestForBezirk(RUN_BVV_OPARL_TEST_BEZIRK);
    }
  } catch (err) {
    console.error("BVV person card tests failed.", err);
  }
});

// Globaler Schutz vor E-Mail-Scraping
document.addEventListener('click', function (e) {
  const el = e.target.closest('.email-link');
  if (!el) return;

  const u = el.getAttribute('data-u');
  const d = el.getAttribute('data-d');
  const t = el.getAttribute('data-t') || 'de';

  if (u && d) {
    const email = u + '@' + d + '.' + t;
    window.location.href = 'mailto:' + email;
  }
});
