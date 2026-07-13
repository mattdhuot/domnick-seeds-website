const products = Array.isArray(window.DEKALB_PRODUCTS) ? window.DEKALB_PRODUCTS : [];
const guideProducts = products.filter(
  (product) => product.relativeMaturity >= 92 && product.relativeMaturity <= 106
);

const grid = document.querySelector("#dekalbGuideGrid");
const count = document.querySelector("#dekalbGuideCount");
const searchInput = document.querySelector("#dekalbSearch");
const rmFilter = document.querySelector("#dekalbRmFilter");
const traitFilter = document.querySelector("#dekalbTraitFilter");
const clearButton = document.querySelector("#dekalbClearFilters");
const printButtons = document.querySelectorAll(".print-button");

const byRmThenName = (a, b) => a.relativeMaturity - b.relativeMaturity || a.name.localeCompare(b.name);

function uniqueValues(key) {
  return [...new Set(guideProducts.map((product) => product[key]).filter(Boolean))].sort((a, b) =>
    String(a).localeCompare(String(b), undefined, { numeric: true })
  );
}

function option(value, label) {
  const node = document.createElement("option");
  node.value = value;
  node.textContent = label;
  return node;
}

function setupFilters() {
  if (rmFilter) {
    uniqueValues("relativeMaturity").forEach((rm) => {
      rmFilter.appendChild(option(String(rm), `${rm} RM`));
    });
  }

  if (traitFilter) {
    uniqueValues("traitPackage").forEach((trait) => {
      traitFilter.appendChild(option(trait, trait));
    });
  }
}

function includesAny(text, words) {
  return words.some((word) => text.includes(word));
}

function productText(product) {
  return product.strengths.map(cleanTraitStrength).join(" ").toLowerCase();
}

function cleanTraitStrength(strength) {
  return String(strength || "")
    .replace(/\u00e2\u20ac\u2122/g, "'")
    .replace(/\u00e2\u20ac\u0153/g, '"')
    .replace(/\u00e2\u20ac\u009d/g, '"')
    .replace(/\u00e2\u20ac\u201c/g, "-")
    .replace(/\u00c3\u00a2\u00e2\u201a\u00ac\u00e2\u201e\u00a2/g, "'")
    .replace(/\u00c3\u00a2\u00e2\u201a\u00ac\u00c5\u201c/g, '"')
    .replace(/\u00c3\u00a2\u00e2\u201a\u00ac\u00c2\u009d/g, '"')
    .replace(/\u00c3\u00a2\u00e2\u201a\u00ac\u00e2\u20ac\u0153/g, "-")
    .replace(/^\s*\d+\)\s*/, "")
    .replace(/\s+/g, " ")
    .trim();
}

function toTraitNote(strength) {
  const text = cleanTraitStrength(strength);
  const lower = text.toLowerCase();

  if (includesAny(lower, ["limit exposure", "avoid", "manage "])) {
    if (lower.includes("goss")) return { priority: 1, label: "Watch", text: "limit high Goss's Wilt pressure" };
    if (lower.includes("population")) return { priority: 5, label: "Manage", text: "watch population fit" };
    return { priority: 6, label: "Manage", text: text.slice(0, 68) };
  }

  if (includesAny(lower, ["population", "ear type", "flex", "semi-flex", "semi-fix"])) {
    if (includesAny(lower, ["medium high", "medium-high"])) return { priority: 6, label: "Population", text: "responds to medium-high pops" };
    if (includesAny(lower, ["medium low", "medium-low"])) return { priority: 6, label: "Population", text: "fits medium-low pops" };
    if (lower.includes("flex")) return { priority: 6, label: "Ear type", text: "flex ear type" };
    return { priority: 6, label: "Population", text: "population responsive" };
  }

  if (lower.includes("yield")) {
    if (includesAny(lower, ["top-end", "top end"])) return { priority: 2, label: "Yield", text: "strong top-end yield potential" };
    if (includesAny(lower, ["excellent", "impressive"])) return { priority: 2, label: "Yield", text: "excellent yield potential" };
    if (includesAny(lower, ["consistent", "stable"])) return { priority: 2, label: "Yield", text: "consistent yield performance" };
    return { priority: 2, label: "Yield", text: "solid yield potential" };
  }

  if (includesAny(lower, ["emergence", "vigor", "early season"])) {
    if (includesAny(lower, ["strong", "excellent", "outstanding"])) return { priority: 3, label: "Emergence", text: "strong emergence / vigor" };
    return { priority: 3, label: "Emergence", text: "good early vigor" };
  }

  if (includesAny(lower, ["root", "stalk", "standability"])) {
    if (lower.includes("root") && lower.includes("stalk")) return { priority: 4, label: "Standability", text: "strong roots and stalks" };
    if (lower.includes("root")) return { priority: 4, label: "Roots", text: "strong root package" };
    return { priority: 4, label: "Stalks", text: "strong stalk package" };
  }

  if (includesAny(lower, ["disease", "goss", "northern corn leaf blight", "anthracnose", "tar spot"])) {
    if (lower.includes("goss") && lower.includes("northern")) return { priority: 5, label: "Disease", text: "Goss's Wilt + NCLB tolerance" };
    if (lower.includes("goss")) return { priority: 5, label: "Disease", text: "Goss's Wilt tolerance" };
    if (lower.includes("northern")) return { priority: 5, label: "Disease", text: "NCLB tolerance" };
    if (lower.includes("tar spot")) return { priority: 5, label: "Disease", text: "Tar Spot tolerance" };
    return { priority: 5, label: "Disease", text: "solid disease package" };
  }

  if (includesAny(lower, ["test weight", "drydown", "dry down", "grain", "harvest", "staygreen"])) {
    if (lower.includes("test weight")) return { priority: 7, label: "Grain", text: "strong test weight" };
    if (includesAny(lower, ["drydown", "dry down"])) return { priority: 7, label: "Drydown", text: "favorable drydown" };
    if (lower.includes("staygreen")) return { priority: 7, label: "Harvest", text: "good staygreen" };
    return { priority: 7, label: "Harvest", text: "good harvest appearance" };
  }

  if (includesAny(lower, ["drought", "stress", "heat"])) {
    return { priority: 8, label: "Stress", text: "good stress tolerance" };
  }

  if (includesAny(lower, ["east", "west", "north", "south", "broad", "adapted", "movement", "acre"])) {
    return { priority: 9, label: "Fit", text: "broad placement fit" };
  }

  return { priority: 10, label: "Note", text: text.length > 68 ? `${text.slice(0, 65)}...` : text };
}

function buildTraitNotes(product) {
  const notes = product.strengths
    .map(toTraitNote)
    .filter((note) => note.text)
    .sort((a, b) => a.priority - b.priority);

  const uniqueNotes = [];
  const labels = new Set();

  notes.forEach((note) => {
    if (!labels.has(note.label)) {
      labels.add(note.label);
      uniqueNotes.push(note);
    }
  });

  return uniqueNotes.slice(0, 3);
}

function productMatches(product) {
  const search = searchInput?.value.trim().toLowerCase() || "";
  const rm = rmFilter?.value || "";
  const trait = traitFilter?.value || "";

  const searchable = [product.name, product.fullName, product.traitPackage]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return (
    (!search || searchable.includes(search)) &&
    (!rm || String(product.relativeMaturity) === rm) &&
    (!trait || product.traitPackage === trait)
  );
}

function renderCard(product) {
  const traitNotes = buildTraitNotes(product);
  const listItems = traitNotes.length
    ? traitNotes.map((note) => `<li><strong>${note.label}:</strong> ${note.text}</li>`).join("")
    : "<li><strong>Traits:</strong> not published on the Bayer catalog card</li>";

  return `
    <article class="dekalb-card">
      <div class="dekalb-card-image">
        <img src="${product.image}" alt="${product.imageAlt}" loading="lazy" />
      </div>
      <div class="dekalb-card-body">
        <div class="dekalb-card-topline">
          <span>${product.traitPackage || "Trait not published"}</span>
          ${product.newProduct ? "<strong>New</strong>" : ""}
        </div>
        <div class="dekalb-card-title">
          <h2>${product.name}</h2>
          <div class="dekalb-rm">
            <span>${product.relativeMaturity}</span>
            <small>RM</small>
          </div>
        </div>
        <ul>${listItems}</ul>
        <div class="dekalb-card-actions">
          <a href="${product.sourceUrl}" target="_blank" rel="noreferrer">Learn more</a>
        </div>
      </div>
    </article>
  `;
}

function renderProducts() {
  if (!grid) {
    return;
  }

  const visibleProducts = guideProducts.filter(productMatches).sort(byRmThenName);
  grid.innerHTML = visibleProducts.map(renderCard).join("");

  if (count) {
    count.textContent = `${visibleProducts.length} of ${guideProducts.length} hybrids shown`;
  }
}

setupFilters();
renderProducts();

[searchInput, rmFilter, traitFilter].forEach((control) => {
  control?.addEventListener("input", renderProducts);
  control?.addEventListener("change", renderProducts);
});

clearButton?.addEventListener("click", () => {
  if (searchInput) searchInput.value = "";
  if (rmFilter) rmFilter.value = "";
  if (traitFilter) traitFilter.value = "";
  renderProducts();
});

printButtons.forEach((button) => {
  button.addEventListener("click", () => window.print());
});
