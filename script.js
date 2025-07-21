const items = [/* your full item list from before (no changes) */];

// Create tile element for each item
function createTile(item) {
  const div = document.createElement("div");
  div.className = "tile";
  div.id = item.id;

  const iconSpan = document.createElement("span");
  iconSpan.textContent = item.icon;
  div.appendChild(iconSpan);

  const label = document.createElement("div");
  label.textContent = item.name;
  div.appendChild(label);

  div.addEventListener("click", () => {
    div.classList.toggle("selected");
    updateTotal();
    tryShowPopup();
  });

  return div;
}

function renderTiles() {
  const fee99Container = document.getElementById("fee-99");
  const fee49Container = document.getElementById("fee-49");
  const fee0Container = document.getElementById("fee-0");

  items.forEach(item => {
    const tile = createTile(item);
    if (item.fee === 99) fee99Container.appendChild(tile);
    else if (item.fee === 49) fee49Container.appendChild(tile);
    else fee0Container.appendChild(tile);
  });
}

function updateTotal() {
  const selectedTiles = document.querySelectorAll(".tile.selected");
  let total = 0;
  selectedTiles.forEach(tile => {
    const item = items.find(i => i.id === tile.id);
    if (item) total += item.cost;
  });
  document.getElementById("grand-total").textContent = `$${total.toLocaleString()}`;

  const claimSection = document.getElementById("claim-process");
  if (total > 0) {
    claimSection.classList.remove("hidden");
  } else {
    claimSection.classList.add("hidden");
  }
}

// Modal handling
const modal = document.createElement("div");
modal.className = "modal";
modal.id = "info-modal";
modal.innerHTML = `
  <div class="modal-content">
    <p>Did you know it does not matter if your tech is 1 year old or 20 years old? It’s Covered!</p>
    <button id="modal-ok-btn">OK</button>
  </div>
`;
document.body.appendChild(modal);

modal.querySelector("#modal-ok-btn").addEventListener("click", () => {
  modal.classList.remove("show");
});

let popupShown = false;
function tryShowPopup() {
  if (!popupShown && document.querySelectorAll(".tile.selected").length > 0) {
    modal.classList.add("show");
    popupShown = true;
  }
}

// Intro swipe or tap to dismiss
const introOverlay = document.getElementById("intro-overlay");
const mainContent = document.getElementById("main-content");

let touchStartY = 0;
introOverlay.addEventListener("touchstart", e => {
  touchStartY = e.touches[0].clientY;
});
introOverlay.addEventListener("touchmove", e => {
  const currentY = e.touches[0].clientY;
  if (touchStartY - currentY > 50) {
    introOverlay.classList.add("hidden");
    mainContent.style.display = "block";
  }
});
introOverlay.addEventListener("click", () => {
  introOverlay.classList.add("hidden");
  mainContent.style.display = "block";
});

// Step by step claim slider
const steps = document.querySelectorAll("#claim-process .step");
const prevBtn = document.getElementById("prev-step");
const nextBtn = document.getElementById("next-step");
let currentStep = 0;

function updateSteps() {
  steps.forEach((step, idx) => {
    step.classList.toggle("active", idx === currentStep);
  });
  prevBtn.disabled = currentStep === 0;
  nextBtn.disabled = currentStep === steps.length - 1;
}

prevBtn.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    updateSteps();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    updateSteps();
  }
});

updateSteps();

function init() {
  renderTiles();
  updateTotal();
  mainContent.style.display = "none";
}

window.onload = init;
