const allPlacements = ["corn-on-corn", "early-planting", "productive", "variable-drought", "irrigated", "sugarbeets"];

const catalogNotes = {
  "DKC084-15": "Bayer catalog: strong across yield environments, early flowering for the 85 RM zone, excellent drydown, emergence, and vigor.",
  "DKC086-66": "Bayer catalog: strong yield potential for RM with excellent test weight, emergence, early vigor, and northern disease tolerance.",
  "DKC087-97": "Bayer catalog: strong yield potential, excellent vigor and emergence, drought stress tolerance, and strong root/stalk profile.",
  "DKC088-39": "Bayer catalog: strong yield potential across tested levels with above-average emergence, early vigor, flexible population use, and northern/western movement.",
  "DKC091-43": "Bayer catalog: stable in medium-to-high yield environments with strong emergence, early vigor, excellent roots, and medium-high population response.",
  "DKC091-44": "Bayer catalog: stable medium-to-high yield fit with strong emergence, early vigor, excellent root anchoring, and medium-high population response.",
  "DKC092-13": "Bayer catalog: broadly adapted early-90s product with flex ear, excellent emergence/vigor, and solid root and stalk strength.",
  "DKC092-14": "Bayer catalog: similar broad early-90s adaptation with flex ear, excellent emergence/vigor, and solid roots and stalks.",
  "DKC094-51": "Bayer catalog: broad-acre performance, northward movement, excellent emergence and early vigor, strong disease tolerance, staygreen, and good drydown.",
  "DKC094-67": "Bayer catalog: strong yield potential across environments with root/stalk strength, early-season emergence, early-planting fit, high population management, and heat/drought tolerance.",
  "DKC094-78": "Bayer catalog: strong 90-to-early-95 RM yield potential, grain quality, test weight, disease tolerance, and population flexibility.",
  "DKC095-57": "Bayer catalog: offensive yield product with management response to fertility/fungicide, good drydown, and very strong early vigor.",
  "DKC096-21": "Bayer catalog: strong stress package with roots, stalks, greensnap tolerance, Goss's Wilt tolerance, and western placement potential.",
  "DKC096-96": "Bayer catalog: VT4PRO product with strong yield potential, excellent roots/stalks, late-season appearance, semi-flex ears, and drydown.",
  "DKC096-97": "Bayer catalog: Trecepta product with strong yield potential, excellent roots/stalks, late-season appearance, semi-flex ears, and drydown.",
  "DKC097-37": "Bayer catalog: SmartStax PRO product with yield versatility, flexible planting timing, strong roots/stalks, greensnap tolerance, and broad disease package.",
  "DKC097-51": "Bayer catalog: versatile yield product with medium-low ear placement, upright canopy, heat/drought tolerance, and medium population recommendation.",
  "DKC098-88": "Bayer catalog: broad east-west placement with very good emergence/vigor, defensive agronomics, strong roots, greensnap tolerance, and disease package.",
  "DKC098-98": "Bayer catalog: SmartStax PRO product with heat/drought stressed performance and season-long agronomics.",
  "DKC099-11": "Bayer catalog: good emergence/vigor, staygreen, late-season appearance, broad adaptation, and drought stress tolerance.",
  "DKC099-59": "Bayer catalog: strong yield potential, cold-stress emergence, balanced stature, loose husk, and medium population fit.",
  "DKC100-21": "Bayer catalog: versatile broad-acre placement with strong emergence/vigor, roots/stalks, medium-population performance, and fungicide benefit under disease pressure.",
  "DKC100-53": "Bayer catalog: SmartStax PRO product with elite performance across soil and management types, strong emergence/vigor, roots, stalks, greensnap, and stress tolerance.",
  "DKC100-70": "Bayer catalog: Trecepta 100 RM product with strong yield potential, emergence/vigor, roots/stalks, semi-flex placement, and heat/drought tolerance.",
  "DKC101-33": "Bayer catalog: stable yield across environments with good emergence, early growth, disease tolerance, and population-flexible semi-flex ear.",
  "DKC101-35": "Bayer catalog: stable yield across environments with good emergence, early growth, strong northern disease tolerance, and flexible semi-flex ear.",
  "DKC102-13": "Bayer catalog: excellent emergence/vigor, strong northern disease tolerance, solid roots/stalks, and attractive plant stature.",
  "DKC102-18": "Bayer catalog: broad soil and management versatility with strong roots/stalks, greensnap tolerance, Goss's Wilt and NCLB tolerance, and medium-to-low population fit.",
  "DKC102-28": "Bayer catalog: strong agronomic package, roots/stalks, greensnap, late-season appearance, drought tolerance, and medium-high population fit.",
  "DKC103-63": "Bayer catalog: strong stalks and excellent roots, medium population fit, strong emergence/vigor, grain quality, and fungal disease tolerance.",
  "DKC104-08": "Bayer catalog: broad yield adaptation, greensnap and Goss's Wilt tolerance, western fit, and VT4PRO above-ground/rootworm protection.",
  "DKC104-14": "Bayer catalog: stable yield across environments with excellent emergence, strong vigor, roots/stalks, Goss's Wilt, and greensnap tolerance.",
  "DKC104-32": "Bayer catalog: central-to-east product with strong 105 RM yield potential, semi-flex ear, stalk strength, greensnap, and heat/drought stability.",
  "DKC105-21": "Bayer catalog: broad-acre versatility and stability with roots/stalks, greensnap, grain quality, test weight, emergence, and early vigor.",
  "DKC106-98": "Bayer catalog: yield potential, stress tolerance, southern movement, fungal disease package, root strength, and greensnap tolerance.",
  "DKC107-11": "Bayer catalog: broad-acre product with yield potential, staygreen, Goss's Wilt and Tar Spot tolerance, and drought stress tolerance.",
  "DKC107-69": "Bayer catalog: stable yield across levels with strong yield-to-moisture ratio, roots/stalks, greensnap, and density response.",
  "DKC108-64": "Bayer catalog: broad-acre yield product with semi-flex ear, early harvest management, roots, stalks, and greensnap tolerance.",
  "DKC108-87": "Bayer catalog: SmartStax PRO product with western movement, emergence/vigor, Goss's Wilt and Anthracnose tolerance, and medium population fit.",
  "DKC109-71": "Bayer catalog: strong yield potential with medium-to-medium-high population recommendation and greensnap tolerance.",
  "DKC110-10": "Bayer catalog: broad adaptation with yield potential, staygreen, roots/stalks, greensnap, and average emergence/vigor.",
  "DKC110-15": "Bayer catalog: SmartStax PRO product with broad-acre versatility, strong stalks, roots, greensnap, and medium population response.",
  "DKC110-82": "Bayer catalog: broad-acre product with strong yield potential, disease tolerance, east-west movement, and average-population semi-flex ear.",
  "DKC111-61": "Bayer catalog: yield potential, attractive appearance, excellent roots, very good stalk strength, fungicide response, and medium-to-high population fit.",
};

const bagImages = {
  vt2pro: "assets/dekalb-bag-vt2pro.webp",
  trecepta: "assets/dekalb-bag-trecepta.webp",
  vt4pro: "assets/dekalb-bag-vt4pro.webp",
  smartstaxpro: "assets/dekalb-bag-smartstaxpro.webp",
  smartstax: "assets/dekalb-bag-smartstax.webp",
  fieldcorn: "assets/dekalb-bag-fieldcorn.webp",
  fallback: "assets/dkc097-37.webp",
};

const bayerBagByHybrid = {
  "DKC084-15": bagImages.vt2pro,
  "DKC086-66": bagImages.trecepta,
  "DKC087-97": bagImages.trecepta,
  "DKC088-39": bagImages.vt4pro,
  "DKC091-43": bagImages.vt4pro,
  "DKC091-44": bagImages.trecepta,
  "DKC092-13": bagImages.smartstaxpro,
  "DKC092-14": bagImages.vt4pro,
  "DKC094-51": bagImages.smartstaxpro,
  "DKC094-67": bagImages.vt4pro,
  "DKC094-78": bagImages.trecepta,
  "DKC095-57": bagImages.vt4pro,
  "DKC096-21": bagImages.trecepta,
  "DKC096-96": bagImages.vt4pro,
  "DKC096-97": bagImages.trecepta,
  "DKC097-37": bagImages.smartstaxpro,
  "DKC097-51": bagImages.trecepta,
  "DKC098-86": bagImages.fieldcorn,
  "DKC098-88": bagImages.vt4pro,
  "DKC098-98": bagImages.smartstaxpro,
  "DKC099-11": bagImages.vt2pro,
  "DKC099-59": bagImages.smartstaxpro,
  "DKC100-21": bagImages.vt2pro,
  "DKC100-53": bagImages.smartstaxpro,
  "DKC100-70": bagImages.trecepta,
  "DKC101-33": bagImages.smartstaxpro,
  "DKC101-35": bagImages.vt2pro,
  "DKC102-13": bagImages.vt4pro,
  "DKC102-18": bagImages.smartstaxpro,
  "DKC102-28": bagImages.trecepta,
  "DKC103-63": bagImages.smartstaxpro,
  "DKC104-08": bagImages.vt4pro,
  "DKC104-14": bagImages.smartstaxpro,
  "DKC104-32": bagImages.vt2pro,
  "DKC105-21": bagImages.vt4pro,
  "DKC106-98": bagImages.vt4pro,
  "DKC107-11": bagImages.smartstaxpro,
  "DKC107-69": bagImages.trecepta,
  "DKC108-64": bagImages.smartstaxpro,
  "DKC108-87": bagImages.smartstaxpro,
  "DKC109-71": bagImages.smartstaxpro,
  "DKC110-10": bagImages.smartstax,
  "DKC110-15": bagImages.smartstaxpro,
  "DKC110-82": bagImages.vt2pro,
  "DKC111-61": bagImages.vt4pro,
  "DKC111-62": bagImages.trecepta,
  "DKC112-03": bagImages.smartstaxpro,
  "DKC112-19": bagImages.vt4pro,
  "DKC112-35": bagImages.smartstaxpro,
};

function hybrid({
  name,
  rm,
  trait = "SmartStaxPRO / VT4PRO / SS",
  traitGroup = "smartstax",
  placements = ["productive"],
  highlighted = false,
  fungicide = "Not shown",
  strengths,
  watch,
  image,
}) {
  return {
    name,
    rm,
    trait,
    traitGroup,
    placements,
    highlighted,
    fungicide,
    strengths: strengths || [placements.includes("productive") ? "productive soil fit" : "supporting placement", `${rm} RM option`],
    watch: watch || `${rm} RM product visible in the uploaded DEKALB placement, characteristics, or fungicide charts; confirm local ratings and availability before final placement.`,
    catalogNote: catalogNotes[name] || "",
    image: bayerBagByHybrid[name] || image || bagImages.fallback,
  };
}

const hybridProducts = [
  hybrid({ name: "DKC084-15", rm: 84, trait: "VT2PRO / Trecepta", traitGroup: "vt2", placements: ["productive"], watch: "84 RM product visible in the characteristics chart. It sits below the original 85-106 RM study range." }),
  hybrid({ name: "DKC086-66", rm: 86, trait: "VT2PRO / Trecepta", traitGroup: "vt2", placements: ["productive"], fungicide: "Not shown" }),
  hybrid({ name: "DKC087-97", rm: 87, trait: "VT2PRO / Trecepta", traitGroup: "vt2", placements: ["productive"], fungicide: "Not shown" }),
  hybrid({
    name: "DKC088-39",
    rm: 88,
    placements: ["corn-on-corn", "early-planting", "productive", "irrigated"],
    highlighted: true,
    strengths: ["early maturity", "corn-on-corn option", "productive soil fit", "irrigated fit"],
    watch: "Use where an 88 RM product fits the harvest window; fungicide response was not visible on the uploaded chart.",
  }),
  hybrid({
    name: "DKC091-43",
    rm: 91,
    placements: ["corn-on-corn", "early-planting", "productive", "irrigated", "sugarbeets"],
    highlighted: true,
    fungicide: "MOD",
    strengths: ["broad placement", "early planting", "productive soil fit", "following sugarbeets"],
    watch: "Moderate fungicide response; consider scouting and disease history before deciding.",
  }),
  hybrid({
    name: "DKC091-44",
    rm: 91,
    trait: "VT2PRO / Trecepta",
    traitGroup: "vt2",
    placements: ["early-planting", "productive", "irrigated", "sugarbeets"],
    highlighted: true,
    fungicide: "MOD",
    strengths: ["VT2/Trecepta option", "early planting", "productive soil fit", "irrigated fit"],
    watch: "Moderate fungicide response; verify fit where corn-on-corn traits are needed.",
  }),
  hybrid({ name: "DKC092-13", rm: 92, placements: ["corn-on-corn", "early-planting", "productive", "variable-drought", "irrigated", "sugarbeets"], fungicide: "MOD" }),
  hybrid({ name: "DKC092-14", rm: 92, placements: ["productive"], fungicide: "MOD" }),
  hybrid({ name: "DKC43-75", rm: 93, trait: "VT2PRO / Trecepta", traitGroup: "vt2", placements: ["variable-drought"] }),
  hybrid({
    name: "DKC094-51",
    rm: 94,
    image: "assets/dkc094-51.webp",
    placements: allPlacements,
    highlighted: true,
    fungicide: "MOD",
    strengths: ["very broad placement", "variable/drought soils", "corn-on-corn", "irrigated fit"],
    watch: "One of the broadest fits on the placement sheet; still confirm population and disease package.",
  }),
  hybrid({ name: "DKC094-67", rm: 94, placements: ["corn-on-corn", "early-planting", "productive", "variable-drought", "irrigated", "sugarbeets"], fungicide: "MOD", strengths: ["94 RM support option", "variable/drought soils", "sugarbeet rotation"], watch: "Moderate fungicide response; added so the 94-67 product visible in your screenshots is covered." }),
  hybrid({ name: "DKC094-78", rm: 94, trait: "VT2PRO / Trecepta", traitGroup: "vt2", placements: ["productive", "variable-drought", "irrigated"] }),
  hybrid({ name: "DKC095-57", rm: 95, placements: ["corn-on-corn"], watch: "Visible in the corn-on-corn placement group; confirm detailed trait and fungicide notes locally." }),
  hybrid({ name: "DKC095-59", rm: 95, placements: ["variable-drought"], watch: "Visible in the variable/drought soil placement group; confirm detailed trait and fungicide notes locally." }),
  hybrid({ name: "DKC096-21", rm: 96, trait: "VT2PRO / Trecepta", traitGroup: "vt2", placements: ["early-planting", "productive", "variable-drought", "irrigated", "sugarbeets"] }),
  hybrid({ name: "DKC096-96", rm: 96, placements: ["corn-on-corn", "early-planting", "productive", "variable-drought", "irrigated", "sugarbeets"], fungicide: "MOD" }),
  hybrid({
    name: "DKC096-97",
    rm: 96,
    trait: "VT2PRO / Trecepta",
    traitGroup: "vt2",
    placements: ["early-planting", "productive", "variable-drought", "irrigated", "sugarbeets"],
    highlighted: true,
    fungicide: "MOD",
    strengths: ["broad VT2/Trecepta fit", "variable/drought soils", "early planting", "irrigated fit"],
    watch: "Moderate fungicide response; strong candidate when VT2/Trecepta platform is preferred.",
  }),
  hybrid({
    name: "DKC097-37",
    rm: 97,
    image: "assets/dkc097-37.webp",
    placements: allPlacements,
    highlighted: true,
    fungicide: "MOD",
    strengths: ["broad placement", "variable/drought soils", "productive soils", "following sugarbeets"],
    watch: "Moderate fungicide response; good comparison against 94-51 in broad-fit situations.",
  }),
  hybrid({ name: "DKC097-51", rm: 97, trait: "VT2PRO / Trecepta", traitGroup: "vt2", placements: ["productive", "variable-drought", "irrigated", "sugarbeets"] }),
  hybrid({ name: "DKC098-86", rm: 98, trait: "Conventional / RR2", traitGroup: "other", placements: ["productive"], watch: "Visible as a conventional/RR2 cross-reference in the characteristics chart." }),
  hybrid({
    name: "DKC098-88",
    rm: 98,
    placements: ["corn-on-corn", "early-planting", "productive", "variable-drought", "irrigated", "sugarbeets"],
    highlighted: true,
    fungicide: "HIGH",
    strengths: ["high fungicide response", "productive soils", "early planting", "irrigated fit"],
    watch: "Characteristics and fungicide charts show DKC098-88; the placement screenshot also appears to reference a similar 98 RM product.",
  }),
  hybrid({ name: "DKC098-98", rm: 98, placements: ["corn-on-corn", "early-planting", "productive", "irrigated", "sugarbeets"], highlighted: true, watch: "Visible on the placement screenshot; confirm whether this is the same selling family as DKC098-88 in your local guide." }),
  hybrid({ name: "DKC099-11", rm: 99, trait: "VT2PRO / Trecepta", traitGroup: "vt2", placements: ["early-planting", "productive", "irrigated", "sugarbeets"] }),
  hybrid({ name: "DKC099-59", rm: 99, placements: ["corn-on-corn", "variable-drought"], fungicide: "HIGH", strengths: ["high fungicide response", "variable/drought soil option", "corn-on-corn support"] }),
  hybrid({ name: "DKC100-21", rm: 100, trait: "VT2PRO / Trecepta", traitGroup: "vt2", placements: ["early-planting", "productive", "variable-drought", "irrigated", "sugarbeets"], fungicide: "HIGH" }),
  hybrid({
    name: "DKC100-53",
    rm: 100,
    placements: ["corn-on-corn", "early-planting", "productive", "irrigated", "sugarbeets"],
    highlighted: true,
    fungicide: "MOD",
    strengths: ["100 RM anchor", "corn-on-corn", "productive soils", "following sugarbeets"],
    watch: "Moderate fungicide response; useful mid-full season fit where SmartStax/VT4PRO traits are desired.",
  }),
  hybrid({
    name: "DKC100-70",
    rm: 100,
    trait: "VT2PRO / Trecepta",
    traitGroup: "vt2",
    placements: ["early-planting", "productive", "variable-drought", "irrigated", "sugarbeets"],
    highlighted: true,
    fungicide: "HIGH",
    strengths: ["high fungicide response", "VT2/Trecepta option", "variable/drought soils", "irrigated fit"],
    watch: "High fungicide response makes disease scouting and fungicide timing part of the conversation.",
  }),
  hybrid({ name: "DKC101-33", rm: 101, placements: ["corn-on-corn", "early-planting", "productive", "variable-drought", "irrigated", "sugarbeets"], fungicide: "HIGH" }),
  hybrid({ name: "DKC101-35", rm: 101, trait: "VT2PRO / Trecepta", traitGroup: "vt2", placements: ["productive", "variable-drought", "irrigated", "sugarbeets"], fungicide: "HIGH" }),
  hybrid({ name: "DKC102-13", rm: 102, placements: ["corn-on-corn", "early-planting", "productive", "irrigated"], fungicide: "LOW", watch: "Low fungicide response on the fungicide chart; keep distinct from DKC102-18." }),
  hybrid({
    name: "DKC102-18",
    rm: 102,
    placements: ["corn-on-corn", "early-planting", "productive", "variable-drought", "irrigated", "sugarbeets"],
    highlighted: true,
    fungicide: "MOD",
    strengths: ["broad 102 RM fit", "early planting", "variable/drought soils", "sugarbeet rotation"],
    watch: "The fungicide chart also shows DKC102-13 as LOW response; keep product suffixes straight.",
  }),
  hybrid({ name: "DKC102-28", rm: 102, trait: "VT2PRO / Trecepta", traitGroup: "vt2", placements: ["productive", "variable-drought", "irrigated", "sugarbeets"] }),
  hybrid({ name: "DKC103-63", rm: 103, placements: ["corn-on-corn", "early-planting", "productive", "variable-drought", "irrigated", "sugarbeets"], fungicide: "MOD" }),
  hybrid({ name: "DKC104-08", rm: 104, placements: ["productive"], fungicide: "HIGH" }),
  hybrid({ name: "DKC104-14", rm: 104, placements: ["corn-on-corn", "variable-drought", "sugarbeets"], watch: "Visible in placement groups; confirm detailed ratings locally." }),
  hybrid({
    name: "DKC104-32",
    rm: 104,
    trait: "VT2PRO / Trecepta",
    traitGroup: "vt2",
    placements: ["early-planting", "productive", "variable-drought", "irrigated", "sugarbeets"],
    highlighted: true,
    fungicide: "HIGH",
    strengths: ["fuller-season VT2/Trecepta", "high fungicide response", "irrigated fit", "productive soils"],
    watch: "High fungicide response; make sure 104 RM fits planting date and harvest plan.",
  }),
  hybrid({
    name: "DKC105-21",
    rm: 105,
    placements: ["corn-on-corn", "early-planting", "productive", "irrigated", "sugarbeets"],
    highlighted: true,
    fungicide: "MOD",
    strengths: ["full-season placement", "corn-on-corn", "productive soils", "irrigated fit"],
    watch: "Moderate fungicide response; make sure maturity and drydown fit the field.",
  }),
  hybrid({
    name: "DKC106-98",
    rm: 106,
    placements: ["corn-on-corn", "productive", "variable-drought", "irrigated", "sugarbeets"],
    fungicide: "MOD",
    strengths: ["full-season option", "corn-on-corn", "irrigated fit"],
    watch: "Use only where a 106 RM product fits the acre and harvest window.",
  }),
  hybrid({ name: "DKC107-11", rm: 107, placements: ["corn-on-corn", "early-planting", "productive", "variable-drought"], fungicide: "HIGH" }),
  hybrid({ name: "DKC107-69", rm: 107, trait: "VT2PRO / Trecepta", traitGroup: "vt2", placements: ["early-planting", "productive", "variable-drought", "irrigated", "sugarbeets"], fungicide: "MOD" }),
  hybrid({ name: "DKC108-64", rm: 108, placements: ["corn-on-corn"], watch: "Visible in the placement chart outside the main 85-106 RM focus." }),
  hybrid({ name: "DKC108-87", rm: 108, placements: ["corn-on-corn", "early-planting", "productive"], highlighted: true, fungicide: "MOD" }),
  hybrid({ name: "DKC109-71", rm: 109, placements: ["corn-on-corn", "productive"], fungicide: "HIGH" }),
  hybrid({ name: "DKC110-10", rm: 110, placements: ["variable-drought"], watch: "Visible in the variable/drought soils placement group outside the main 85-106 RM focus." }),
  hybrid({ name: "DKC110-15", rm: 110, placements: ["early-planting", "productive"], fungicide: "MOD", watch: "Visible as a 110 RM product in the fungicide and placement information; confirm local suffix/name." }),
  hybrid({ name: "DKC110-82", rm: 110, trait: "VT2PRO / Trecepta", traitGroup: "vt2", placements: ["early-planting", "productive", "irrigated"], highlighted: true, fungicide: "HIGH" }),
  hybrid({ name: "DKC110-115", rm: 110, placements: ["corn-on-corn", "productive", "irrigated"], highlighted: true, watch: "Visible on the placement chart; confirm exact local product naming before final use." }),
  hybrid({ name: "DKC111-61", rm: 111, placements: ["productive"], fungicide: "HIGH" }),
  hybrid({ name: "DKC111-62", rm: 111, trait: "VT2PRO / Trecepta", traitGroup: "vt2", placements: ["productive"], fungicide: "HIGH" }),
  hybrid({ name: "DKC112-03", rm: 112, placements: ["productive"], fungicide: "MOD" }),
  hybrid({ name: "DKC112-19", rm: 112, placements: ["productive"], fungicide: "MOD" }),
  hybrid({ name: "DKC112-35", rm: 112, placements: ["productive"], fungicide: "MOD" }),
];

const scenarioLabels = {
  "corn-on-corn": "corn on corn",
  "early-planting": "early planting",
  productive: "highly productive soils",
  "variable-drought": "variable / drought soils",
  irrigated: "irrigated ground",
  sugarbeets: "following sugarbeets",
};

const catalogForm = document.querySelector("#hybridCatalogFilters");
const catalogGrid = document.querySelector("#hybridCatalogGrid");
const catalogCount = document.querySelector("#hybridCatalogCount");
const profileBook = document.querySelector("#seedProfileBook");
const profileBookCount = document.querySelector("#seedProfileBookCount");

function getCatalogFilters() {
  const formData = new FormData(catalogForm);
  return {
    search: String(formData.get("search") || "").trim().toLowerCase(),
    maturity: formData.get("maturity"),
    trait: formData.get("trait"),
    placement: formData.get("placement"),
  };
}

function inMaturityWindow(hybrid, maturity) {
  if (maturity === "focus") return hybrid.rm >= 85 && hybrid.rm <= 106;
  if (maturity === "early") return hybrid.rm <= 91;
  if (maturity === "mid") return hybrid.rm >= 92 && hybrid.rm <= 99;
  if (maturity === "full") return hybrid.rm >= 100 && hybrid.rm <= 106;
  if (maturity === "extended") return hybrid.rm > 106;
  return true;
}

function filterCatalog() {
  const filters = getCatalogFilters();
  return hybridProducts
    .filter((hybrid) => {
      const haystack = [hybrid.name, hybrid.rm, hybrid.trait, hybrid.catalogNote, hybrid.watch].join(" ").toLowerCase();
      if (filters.search && !haystack.includes(filters.search)) return false;
      if (!inMaturityWindow(hybrid, filters.maturity)) return false;
      if (filters.trait !== "all" && hybrid.traitGroup !== filters.trait) return false;
      if (filters.placement !== "all" && !hybrid.placements.includes(filters.placement)) return false;
      return true;
    })
    .sort((a, b) => a.rm - b.rm || a.name.localeCompare(b.name));
}

function placementTags(hybrid) {
  return hybrid.placements
    .map((placement) => `<span>${scenarioLabels[placement]}</span>`)
    .join("");
}

function renderCatalog() {
  const hybrids = filterCatalog();
  catalogCount.textContent = `${hybrids.length} hybrids shown`;

  if (!hybrids.length) {
    catalogGrid.innerHTML = `
      <article class="catalog-empty">
        <h3>No hybrids match those filters.</h3>
        <p>Clear a filter or search another DKC number to bring products back into view.</p>
      </article>
    `;
    return;
  }

  catalogGrid.innerHTML = hybrids
    .map(
      (hybrid) => `
        <article class="hybrid-catalog-card">
          <div class="hybrid-card-image">
            <img src="${hybrid.image}" alt="${hybrid.name} DEKALB seed bag" loading="lazy" />
          </div>
          <div class="hybrid-card-topline">
            <span>${hybrid.highlighted ? "Highlighted fit" : "Catalog hybrid"}</span>
            <strong>${hybrid.rm} RM</strong>
          </div>
          <h3>${hybrid.name}</h3>
          <p class="hybrid-platform">${hybrid.trait}</p>
          <div class="hybrid-tags" aria-label="${hybrid.name} placement fits">
            ${placementTags(hybrid)}
          </div>
          <dl class="hybrid-details">
            <div>
              <dt>Fungicide response</dt>
              <dd>${hybrid.fungicide}</dd>
            </div>
            <div>
              <dt>Key fit</dt>
              <dd>${hybrid.strengths.slice(0, 3).join(", ")}</dd>
            </div>
          </dl>
          ${hybrid.catalogNote ? `<p>${hybrid.catalogNote}</p>` : ""}
          <small>${hybrid.watch}</small>
        </article>
      `
    )
    .join("");
}

if (catalogForm && catalogGrid) {
  catalogForm.addEventListener("input", renderCatalog);
  catalogForm.addEventListener("change", renderCatalog);
  renderCatalog();
}

function renderSeedProfileBook() {
  const sortedHybrids = [...hybridProducts].sort((a, b) => a.rm - b.rm || a.name.localeCompare(b.name));
  profileBookCount.textContent = `${sortedHybrids.length} hybrid profiles`;
  profileBook.innerHTML = sortedHybrids
    .map(
      (hybrid) => `
        <article class="seed-profile-card">
          <div class="seed-profile-image">
            <img src="${hybrid.image}" alt="${hybrid.name} DEKALB seed bag" loading="lazy" />
          </div>
          <div class="seed-profile-header">
            <div>
              <span>${hybrid.rm} RM</span>
              <h2>${hybrid.name}</h2>
            </div>
            <strong>${hybrid.highlighted ? "Highlighted" : "Listed"}</strong>
          </div>
          <p class="seed-profile-platform">${hybrid.trait}</p>
          <dl class="seed-profile-facts">
            <div>
              <dt>Best fits</dt>
              <dd>${hybrid.placements.map((placement) => scenarioLabels[placement]).join(", ")}</dd>
            </div>
            <div>
              <dt>Fungicide response</dt>
              <dd>${hybrid.fungicide}</dd>
            </div>
            <div>
              <dt>Key strengths</dt>
              <dd>${hybrid.strengths.join(", ")}</dd>
            </div>
          </dl>
          ${hybrid.catalogNote ? `<p>${hybrid.catalogNote}</p>` : ""}
          <small>${hybrid.watch}</small>
        </article>
      `
    )
    .join("");
}

document.querySelectorAll(".print-button").forEach((button) => {
  button.addEventListener("click", () => window.print());
});

if (profileBook && profileBookCount) {
  renderSeedProfileBook();
}
