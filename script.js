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

// Modal popup setup for first selection
let popupShown = false;
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
  popupShown = true;
});

// Scroll modal popup for "never need receipts"
let scrollModalShown = false;
const scrollModal = document.createElement("div");
scrollModal.className = "modal";
scrollModal.id = "scroll-modal";
scrollModal.innerHTML = `
  <div class="modal-content">
    <p>You will NEVER need to show receipts or proof of purchase anytime you need to make a claim</p>
    <button id="scroll-modal-ok-btn">OK</button>
  </div>
`;
document.body.appendChild(scrollModal);

const scrollModalOkBtn = document.getElementById("scroll-modal-ok-btn");
scrollModalOkBtn.addEventListener("click", () => {
  scrollModal.classList.remove("show");
});

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;

  if (!scrollModalShown && scrollPosition >= pageHeight - 50) {
    scrollModal.classList.add("show");
    scrollModalShown = true;
  }
});

// Create tile element for each item with quantity controls
function createTile(item) {
  const div = document.createElement("div");
  div.className = "tile";
  div.dataset.cost = item.cost;
  div.dataset.id = item.id;
  div.title = item.name;
  div.tabIndex = 0;

  // Icon
  const iconSpan = document.createElement("span");
  iconSpan.textContent = item.icon;
  iconSpan.style.fontSize = "36px";
  iconSpan.style.display = "block";
  iconSpan.style.marginBottom = "8px";

  // Name
  const nameSpan = document.createElement("span");
  nameSpan.textContent = item.name;

  // Quantity controls container
  const qtyControls = document.createElement("div");
  qtyControls.className = "qty-controls";
  qtyControls.style.marginTop = "10px";
  qtyControls.style.display = "flex";
  qtyControls.style.justifyContent = "center";
  qtyControls.style.alignItems = "center";
  qtyControls.style.gap = "10px";

  const minusBtn = document.createElement("button");
  minusBtn.textContent = "−"; // minus sign
  minusBtn.setAttribute("aria-label", `Decrease quantity for ${item.name}`);
  minusBtn.style.cursor = "pointer";

  const qtyDisplay = document.createElement("span");
  qtyDisplay.textContent = "0";
  qtyDisplay.style.minWidth = "20px";
  qtyDisplay.style.textAlign = "center";
  qtyDisplay.style.fontWeight = "600";

  const plusBtn = document.createElement("button");
  plusBtn.textContent = "+"; 
  plusBtn.setAttribute("aria-label", `Increase quantity for ${item.name}`);
  plusBtn.style.cursor = "pointer";

  qtyControls.appendChild(minusBtn);
  qtyControls.appendChild(qtyDisplay);
  qtyControls.appendChild(plusBtn);

  div.appendChild(iconSpan);
  div.appendChild(nameSpan);
  div.appendChild(qtyControls);

  // Track quantity internally
  let quantity = 0;

  // Update selection style based on quantity
  function updateSelection() {
    if (quantity > 0) {
      div.classList.add("selected");
    } else {
      div.classList.remove("selected");
    }
  }

  // Plus button increases quantity
  plusBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    quantity++;
    qtyDisplay.textContent = quantity;
    updateSelection();
    updateTotal();
    tryShowPopup();
  });

  // Minus button decreases quantity (min 0)
  minusBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (quantity > 0) {
      quantity--;
      qtyDisplay.textContent = quantity;
      updateSelection();
      updateTotal();
    }
  });

  // Keyboard support: allow space/enter to toggle selection and increase quantity by 1
  div.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      quantity++;
      qtyDisplay.textContent = quantity;
      updateSelection();
      updateTotal();
      tryShowPopup();
    }
  });

  return div;
}

function updateTotal() {
  let total = 0;
  const selectedTiles = document.querySelectorAll(".tile.selected");

  selectedTiles.forEach((tile) => {
    const cost = parseInt(tile.dataset.cost, 10);
    const qty = parseInt(tile.querySelector(".qty-controls span").textContent, 10) || 0;
    total += cost * qty;
  });

  document.getElementById("grand-total").textContent = "$" + total.toLocaleString();

  const claimSection = document.getElementById("claim-process");
  if (total > 0) {
    claimSection.classList.remove("hidden");
  } else {
    claimSection.classList.add("hidden");
  }
}

function tryShowPopup() {
  if (!popupShown && document.querySelectorAll(".tile.selected").length > 0) {
    modal.classList.add("show");
  }
}

function renderTiles() {
  const fee99Container = document.getElementById("fee-99");
  const fee49Container = document.getElementById("fee-49");
  const fee0Container = document.getElementById("fee-0");

  // Clear existing tiles before render (if any)
  fee99Container.innerHTML = "";
  fee49Container.innerHTML = "";
  fee0Container.innerHTML = "";

  items.forEach((item) => {
    const tile = createTile(item);
    if (item.fee === 99) fee99Container.appendChild(tile);
    else if (item.fee === 49) fee49Container.appendChild(tile);
    else fee0Container.appendChild(tile);
  });
}

// Intro overlay handlers
const introOverlay = document.getElementById("intro-overlay");
const mainContent = document.getElementById("main-content");

let touchStartY = 0;
introOverlay.addEventListener("touchstart", (e) => {
  touchStartY = e.touches[0].clientY;
});
introOverlay.addEventListener("touchmove", (e) => {
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

// Step-by-step claim navigation
const claimSection = document.getElementById("claim-process");
const steps = claimSection.querySelectorAll(".step");
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

// Initialization on page load
function init() {
  renderTiles();
  updateTotal();
  mainContent.style.display = "none"; // Hide main content initially behind intro overlay
}

window.onload = init;
