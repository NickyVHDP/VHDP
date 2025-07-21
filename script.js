// List of all items
const items = [
  // $99 Service Fee items
  { id: "99-1", name: "PCs (Desktops, Laptops, Tablets)", fee: 99, cost: 1200, icon: "🖥️" },
  { id: "99-2", name: "TVs (LCD, Plasma or LED)", fee: 99, cost: 1000, icon: "📺" },
  { id: "99-3", name: "Gaming Systems", fee: 99, cost: 500, icon: "🎮" },
  { id: "99-4", name: "Printers", fee: 99, cost: 200, icon: "🖨️" },
  { id: "99-5", name: "Home Routers (Mesh)", fee: 99, cost: 300, icon: "📡" },
  { id: "99-6", name: "Home Theater System in a Box", fee: 99, cost: 600, icon: "🎵" },
  { id: "99-7", name: "Bluetooth and Wi-Fi Enabled Speakers", fee: 99, cost: 250, icon: "🔊" },
  { id: "99-8", name: "Virtual Reality Headsets", fee: 99, cost: 700, icon: "🕶️" },
  { id: "99-9", name: "Augmented Reality Headsets", fee: 99, cost: 700, icon: "🕶️" },
  { id: "99-10", name: "Smart Pet Collars", fee: 99, cost: 150, icon: "🐾" },
  { id: "99-11", name: "Robotic Vacuums", fee: 99, cost: 400, icon: "🤖" },
  { id: "99-12", name: "Robotic Mops", fee: 99, cost: 450, icon: "🤖" },

  // $49 Service Fee items
  { id: "49-1", name: "Smart Door Locks", fee: 49, cost: 200, icon: "🔒" },
  { id: "49-2", name: "Smart Home Security Cameras", fee: 49, cost: 150, icon: "📷" },
  { id: "49-3", name: "Smart Thermostats", fee: 49, cost: 180, icon: "🌡️" },
  { id: "49-4", name: "Smart Video Doorbells", fee: 49, cost: 200, icon: "🔔" },
  { id: "49-5", name: "Premium Audio Headsets", fee: 49, cost: 120, icon: "🎧" },
  { id: "49-6", name: "Smart Watches", fee: 49, cost: 300, icon: "⌚" },
  { id: "49-7", name: "Health and Fitness Bands", fee: 49, cost: 150, icon: "🏃" },
  { id: "49-8", name: "Pet Snack & Food Dispensers", fee: 49, cost: 100, icon: "🍖" },
  { id: "49-9", name: "Pet Auto Fetch Machines", fee: 49, cost: 150, icon: "🐕" },

  // No Service Fee items
  { id: "0-1", name: "Remote Control (Original Control Only)", fee: 0, cost: 50, icon: "🎮" },
  { id: "0-2", name: "Game Controllers", fee: 0, cost: 60, icon: "🎮" },
  { id: "0-3", name: "External PC Speakers (Wired or Wireless)", fee: 0, cost: 80, icon: "🔊" },
  { id: "0-4", name: "Audio/Video Streaming Devices", fee: 0, cost: 70, icon: "📺" },
  { id: "0-5", name: "Monitors", fee: 0, cost: 250, icon: "🖥️" },
  { id: "0-6", name: "Keyboards", fee: 0, cost: 50, icon: "⌨️" },
  { id: "0-7", name: "Mouse", fee: 0, cost: 40, icon: "🖱️" },
  { id: "0-8", name: "Modems", fee: 0, cost: 80, icon: "📡" },
  { id: "0-9", name: "DVD and Blu-Ray Players", fee: 0, cost: 100, icon: "📀" },
  { id: "0-10", name: "Home Routers (Non-Mesh)", fee: 0, cost: 150, icon: "📡" },
  { id: "0-11", name: "Smart Device Hubs", fee: 0, cost: 90, icon: "🏠" },
  { id: "0-12", name: "Smart Light Dimmers", fee: 0, cost: 60, icon: "💡" },
  { id: "0-13", name: "Smart Smoke and Carbon Monoxide Detectors", fee: 0, cost: 120, icon: "🔥" },
  { id: "0-14", name: "Smart Alarm Contact Sensors", fee: 0, cost: 70, icon: "🔔" },
  { id: "0-15", name: "Smart Alarm Flood and Freeze Sensors", fee: 0, cost: 80, icon: "❄️" },
  { id: "0-16", name: "Smart Alarm Glassbreak Sensors", fee: 0, cost: 90, icon: "🔊" },
  { id: "0-17", name: "Smart Alarm Keypads", fee: 0, cost: 100, icon: "🔢" },
  { id: "0-18", name: "Smart Alarm Motion Detectors", fee: 0, cost: 110, icon: "📡" },
  { id: "0-19", name: "Smart Alarm Panic Buttons", fee: 0, cost: 60, icon: "🚨" },
  { id: "0-20", name: "Smart Alarm Range Extenders", fee: 0, cost: 70, icon: "📶" },
  { id: "0-21", name: "Smart Blood Pressure Monitors", fee: 0, cost: 200, icon: "❤️" },
  { id: "0-22", name: "Smart Personal Home Use EKG Monitors", fee: 0, cost: 300, icon: "💓" },
  { id: "0-23", name: "Smart Pulse Oximeters", fee: 0, cost: 150, icon: "🩸" },
];

// Create tile element for each item
function createTile(item) {
  const div = document.createElement("div");
  div.className = "tile";
  div.id = item.id;

  // Icon as big emoji
  const iconSpan = document.createElement("span");
  iconSpan.textContent = item.icon;
  div.appendChild(iconSpan);

  // Name label
  const label = document.createElement("div");
  label.textContent = item.name;
  div.appendChild(label);

  // Toggle selection on click
  div.addEventListener("click", () => {
    div.classList.toggle("selected");
    updateTotal();
    tryShowPopup();
  });

  return div;
}

// Render tiles into categories
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

// Calculate total cost of selected items
function updateTotal() {
  const selectedTiles = document.querySelectorAll(".tile.selected");
  let total = 0;
  selectedTiles.forEach(tile => {
    const item = items.find(i => i.id === tile.id);
    if (item) total += item.cost;
  });
  document.getElementById("grand-total").textContent = `$${total.toLocaleString()}`;

  // Show claim steps if total > 0
  const claimSection = document.getElementById("claim-process");
  if (total > 0) {
    claimSection.classList.remove("hidden");
  } else {
    claimSection.classList.add("hidden");
  }
}

// Popup modal handling
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

const modalOkBtn = document.getElementById("modal-ok-btn");
modalOkBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

let popupShown = false;
function tryShowPopup() {
  if (!popupShown && document.querySelectorAll(".tile.selected").length > 0) {
    modal.classList.add("show");
    popupShown = true;
  }
}

// Intro overlay handling (swipe down)
const introOverlay = document.getElementById("intro-overlay");
const mainContent = document.getElementById("main-content");

let touchStartY = 0;
introOverlay.addEventListener("touchstart", e => {
  touchStartY = e.touches[0].clientY;
});

introOverlay.addEventListener("touchmove", e => {
  const currentY = e.touches[0].clientY;
  if (touchStartY - currentY > 50) {
    // Swipe up detected, hide intro
    introOverlay.classList.add("hidden");
    mainContent.style.display = "block";
  }
});

// Claim steps slider
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

// Set real claim step images with correct filenames
const claimStepImages = [
  "step1.PNG",
  "step2.PNG",
  "step3.PNG",
  "step4.PNG"
];

steps.forEach((step, index) => {
  const img = step.querySelector('img');
  if(img) {
    img.src = claimStepImages[index];
    img.alt = `Step ${index + 1} image`;
  }
});

// Initialize app
function init() {
  renderTiles();
  updateTotal();
  mainContent.style.display = "none"; // Hide main content initially
}

window.onload = init;
