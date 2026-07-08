const hybridProducts = [
  {
    name: "DKC088-39",
    rm: 88,
    trait: "SmartStaxPRO / VT4PRO / SS",
    traitGroup: "smartstax",
    placements: ["corn-on-corn", "early-planting", "productive", "irrigated"],
    highlighted: true,
    fungicide: "Not shown",
    strengths: ["early maturity", "corn-on-corn option", "productive soil fit", "irrigated fit"],
    watch: "Use where an 88 RM product fits the harvest window; fungicide response was not visible on the uploaded chart.",
  },
  {
    name: "DKC091-43",
    rm: 91,
    trait: "SmartStaxPRO / VT4PRO / SS",
    traitGroup: "smartstax",
    placements: ["corn-on-corn", "early-planting", "productive", "irrigated", "sugarbeets"],
    highlighted: true,
    fungicide: "MOD",
    strengths: ["broad placement", "early planting", "productive soil fit", "following sugarbeets"],
    watch: "Moderate fungicide response; consider scouting and disease history before deciding.",
  },
  {
    name: "DKC091-44",
    rm: 91,
    trait: "VT2PRO / Trecepta",
    traitGroup: "vt2",
    placements: ["early-planting", "productive", "irrigated", "sugarbeets"],
    highlighted: true,
    fungicide: "MOD",
    strengths: ["VT2/Trecepta option", "early planting", "productive soil fit", "irrigated fit"],
    watch: "Moderate fungicide response; verify fit where corn-on-corn traits are needed.",
  },
  {
    name: "DKC094-51",
    rm: 94,
    trait: "SmartStaxPRO / VT4PRO / SS",
    traitGroup: "smartstax",
    placements: ["corn-on-corn", "early-planting", "productive", "variable-drought", "irrigated", "sugarbeets"],
    highlighted: true,
    fungicide: "MOD",
    strengths: ["very broad placement", "variable/drought soils", "corn-on-corn", "irrigated fit"],
    watch: "One of the broadest fits on the placement sheet; still confirm population and disease package.",
  },
  {
    name: "DKC096-97",
    rm: 96,
    trait: "VT2PRO / Trecepta",
    traitGroup: "vt2",
    placements: ["early-planting", "productive", "variable-drought", "irrigated", "sugarbeets"],
    highlighted: true,
    fungicide: "MOD",
    strengths: ["broad VT2/Trecepta fit", "variable/drought soils", "early planting", "irrigated fit"],
    watch: "Moderate fungicide response; strong candidate when VT2/Trecepta platform is preferred.",
  },
  {
    name: "DKC097-37",
    rm: 97,
    trait: "SmartStaxPRO / VT4PRO / SS",
    traitGroup: "smartstax",
    image: "assets/dkc097-37.webp",
    placements: ["corn-on-corn", "early-planting", "productive", "variable-drought", "irrigated", "sugarbeets"],
    highlighted: true,
    fungicide: "MOD",
    strengths: ["broad placement", "variable/drought soils", "productive soils", "following sugarbeets"],
    watch: "Moderate fungicide response; good comparison against 94-51 in broad-fit situations.",
  },
  {
    name: "DKC098-88",
    rm: 98,
    trait: "SmartStaxPRO / VT4PRO / SS or VT2 cross-reference",
    traitGroup: "smartstax",
    placements: ["corn-on-corn", "early-planting", "productive", "irrigated", "sugarbeets"],
    highlighted: true,
    fungicide: "HIGH",
    strengths: ["high fungicide response", "productive soils", "early planting", "irrigated fit"],
    watch: "The placement screenshot appears to list DKC098-98, while the characteristics and fungicide charts show DKC098-88.",
  },
  {
    name: "DKC100-53",
    rm: 100,
    trait: "SmartStaxPRO / VT4PRO / SS",
    traitGroup: "smartstax",
    placements: ["corn-on-corn", "early-planting", "productive", "irrigated", "sugarbeets"],
    highlighted: true,
    fungicide: "MOD",
    strengths: ["100 RM anchor", "corn-on-corn", "productive soils", "following sugarbeets"],
    watch: "Moderate fungicide response; useful mid-full season fit where SmartStax/VT4PRO traits are desired.",
  },
  {
    name: "DKC100-70",
    rm: 100,
    trait: "VT2PRO / Trecepta",
    traitGroup: "vt2",
    placements: ["early-planting", "productive", "variable-drought", "irrigated", "sugarbeets"],
    highlighted: true,
    fungicide: "HIGH",
    strengths: ["high fungicide response", "VT2/Trecepta option", "variable/drought soils", "irrigated fit"],
    watch: "High fungicide response makes disease scouting and fungicide timing part of the conversation.",
  },
  {
    name: "DKC102-18",
    rm: 102,
    trait: "SmartStaxPRO / VT4PRO / SS",
    traitGroup: "smartstax",
    placements: ["corn-on-corn", "early-planting", "productive", "variable-drought", "irrigated", "sugarbeets"],
    highlighted: true,
    fungicide: "MOD",
    strengths: ["broad 102 RM fit", "early planting", "variable/drought soils", "sugarbeet rotation"],
    watch: "The fungicide chart also shows DKC102-13 as LOW response; keep product suffixes straight.",
  },
  {
    name: "DKC104-32",
    rm: 104,
    trait: "VT2PRO / Trecepta",
    traitGroup: "vt2",
    placements: ["early-planting", "productive", "variable-drought", "irrigated", "sugarbeets"],
    highlighted: true,
    fungicide: "HIGH",
    strengths: ["fuller-season VT2/Trecepta", "high fungicide response", "irrigated fit", "productive soils"],
    watch: "High fungicide response; make sure 104 RM fits planting date and harvest plan.",
  },
  {
    name: "DKC105-21",
    rm: 105,
    trait: "SmartStaxPRO / VT4PRO / SS",
    traitGroup: "smartstax",
    placements: ["corn-on-corn", "early-planting", "productive", "irrigated", "sugarbeets"],
    highlighted: true,
    fungicide: "MOD",
    strengths: ["full-season placement", "corn-on-corn", "productive soils", "irrigated fit"],
    watch: "Moderate fungicide response; make sure maturity and drydown fit the field.",
  },
  {
    name: "DKC106-98",
    rm: 106,
    trait: "SmartStaxPRO / VT4PRO / SS",
    traitGroup: "smartstax",
    placements: ["corn-on-corn", "productive", "variable-drought", "irrigated", "sugarbeets"],
    highlighted: false,
    fungicide: "MOD",
    strengths: ["full-season option", "corn-on-corn", "irrigated fit"],
    watch: "Use only where a 106 RM product fits the acre and harvest window.",
  },
];

const scenarioLabels = {
  "corn-on-corn": "corn on corn",
  "early-planting": "early planting",
  productive: "highly productive soils",
  "variable-drought": "variable / drought soils",
  irrigated: "irrigated ground",
  sugarbeets: "following sugarbeets",
};

const pickerForm = document.querySelector("#hybridPickerForm");
const pickerTopName = document.querySelector("#pickerTopName");
const pickerTopReason = document.querySelector("#pickerTopReason");
const pickerResultList = document.querySelector("#pickerResultList");

function maturityScore(hybrid, maturity) {
  if (maturity === "early") return hybrid.rm <= 91 ? 5 : hybrid.rm <= 97 ? 2 : -3;
  if (maturity === "mid") return hybrid.rm >= 92 && hybrid.rm <= 97 ? 5 : hybrid.rm <= 102 ? 2 : -1;
  if (maturity === "late") return hybrid.rm >= 103 && hybrid.rm <= 106 ? 5 : hybrid.rm >= 100 ? 2 : -2;
  return hybrid.rm >= 92 && hybrid.rm <= 102 ? 3 : 1;
}

function fieldConditionScore(hybrid, answers) {
  let score = 0;
  if (hybrid.placements.includes(answers.scenario)) score += 8;
  if (answers.trait !== "any" && hybrid.traitGroup === answers.trait) score += 4;
  if (answers.trait !== "any" && hybrid.traitGroup !== answers.trait) score -= 4;
  if (answers.soil === "light" && hybrid.placements.includes("variable-drought")) score += 3;
  if (answers.soil === "heavy" && hybrid.placements.includes("corn-on-corn")) score += 1;
  if (answers.soil === "productive" && hybrid.placements.includes("productive")) score += 3;
  if (answers.soil === "variable" && hybrid.placements.includes("variable-drought")) score += 3;
  if (answers.yield === "high" && hybrid.placements.includes("productive")) score += 3;
  if (answers.yield === "stress" && hybrid.placements.includes("variable-drought")) score += 3;
  if (answers.rotation === "corn-corn" && hybrid.placements.includes("corn-on-corn")) score += 4;
  if (answers.rotation === "sugarbeets" && hybrid.placements.includes("sugarbeets")) score += 4;
  if (answers.rotation === "irrigated" && hybrid.placements.includes("irrigated")) score += 4;
  if (answers.priority === "drydown" && hybrid.rm <= 97) score += 2;
  if (answers.priority === "top-yield" && hybrid.placements.includes("productive")) score += 2;
  if (answers.priority === "disease" && ["HIGH", "MOD"].includes(hybrid.fungicide)) score += hybrid.fungicide === "HIGH" ? 3 : 1;
  if (answers.priority === "standability" && hybrid.placements.includes("corn-on-corn")) score += 1;
  if (answers.risk === "drought" && hybrid.placements.includes("variable-drought")) score += 3;
  if (answers.risk === "disease" && hybrid.fungicide === "HIGH") score += 3;
  if (answers.risk === "root-stalk" && hybrid.placements.includes("corn-on-corn")) score += 2;
  if (answers.risk === "wet" && hybrid.placements.includes("corn-on-corn")) score += 1;
  return score;
}

function getPickerAnswers() {
  const formData = new FormData(pickerForm);
  return {
    scenario: formData.get("scenario"),
    maturity: formData.get("maturity"),
    trait: formData.get("trait"),
    soil: formData.get("soil"),
    yield: formData.get("yield"),
    rotation: formData.get("rotation"),
    priority: formData.get("priority"),
    risk: formData.get("risk"),
  };
}

function rankHybrids(answers) {
  return hybridProducts
    .map((hybrid) => ({
      ...hybrid,
      score: fieldConditionScore(hybrid, answers) + maturityScore(hybrid, answers.maturity),
    }))
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      if (Number(b.highlighted) !== Number(a.highlighted)) return Number(b.highlighted) - Number(a.highlighted);
      return Math.abs(a.rm - 100) - Math.abs(b.rm - 100);
    })
    .slice(0, 4);
}

function renderPickerResults() {
  const answers = getPickerAnswers();
  const ranked = rankHybrids(answers);
  const top = ranked[0];
  const scenario = scenarioLabels[answers.scenario];

  pickerTopName.textContent = top.name;
  pickerTopReason.textContent = `${top.rm} RM ${top.trait}. Strongest match for ${scenario}: ${top.strengths.join(", ")}.`;

  pickerResultList.innerHTML = ranked
    .map(
      (hybrid, index) => `
        <article class="picker-result-card">
          ${
            hybrid.image
              ? `<img class="picker-product-image" src="${hybrid.image}" alt="${hybrid.name} DEKALB seed bag" />`
              : ""
          }
          <div>
            <span>${index === 0 ? "Best match" : "Alternate fit"}</span>
            <strong>${hybrid.rm} RM</strong>
          </div>
          <h3>${hybrid.name}</h3>
          <p>${hybrid.trait}</p>
          <ul>
            <li>Placement: ${hybrid.placements.map((placement) => scenarioLabels[placement]).join(", ")}</li>
            <li>Fungicide response: ${hybrid.fungicide}</li>
            <li>${hybrid.highlighted ? "Highlighted on placement sheet" : "Listed as a supporting option"}</li>
          </ul>
          <small>${hybrid.watch}</small>
        </article>
      `
    )
    .join("");
}

if (pickerForm) {
  pickerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    renderPickerResults();
  });

  pickerForm.querySelectorAll("select").forEach((select) => {
    select.addEventListener("change", renderPickerResults);
  });

  renderPickerResults();
}
