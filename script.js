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

// Create tiles with quantity selectors
function createTile(item) {
  const div = document.createElement("div");
  div.className = "tile";

  // Icon
  const iconSpan = document.createElement("span");
  iconSpan.className = "icon";
  iconSpan.textContent = item.icon;
  div.appendChild(iconSpan);

  // Name
  const nameSpan = document.createElement("span");
  nameSpan.textContent = item.name;
  div.appendChild(nameSpan);

  // Quantity controls container
  const qtyControls = document.createElement("div");
  qtyControls.className = "qty-controls";

  // Minus button
  const minusBtn = document.createElement("button");
  minusBtn.className = "qty-btn";
  minusBtn.textContent = "−";
  qtyControls.appendChild(minusBtn);

  // Quantity display
  const qtyDisplay = document.createElement("span");
  qtyDisplay.className = "qty-display";
  qtyDisplay.textContent = "0";
  qtyControls.appendChild(qtyDisplay);

  // Plus button
  const plusBtn = document.createElement("button");
  plusBtn.className = "qty-btn";
  plusBtn.textContent = "+";
  qtyControls.appendChild(plusBtn);

  div.appendChild(qtyControls);

  // Current quantity
  let quantity = 0;

  function updateQuantity(newQty) {
    quantity = Math.max(0, newQty);
    qtyDisplay.textContent = quantity;
    if (quantity > 0) {
      div.classList.add("selected");
    } else {
      div.classList.remove("selected");
    }
    updateTotal();
  }

  plusBtn.addEventListener("click", () => {
    updateQuantity(quantity + 1);
  });

  minusBtn.addEventListener("click", () => {
    updateQuantity(quantity - 1);
  });

  return { tileElement: div, getQuantity: () => quantity, item };
}

function updateTotal() {
  let total = 0;
  tiles.forEach(({ getQuantity, item }) => {
    total += getQuantity() * item.cost;
  });
  document.getElementById("grand-total").textContent = "$" + total.toLocaleString();

  // Show or hide claim section depending on total
  const claimSection = document.getElementById("claim-process");
  if (total > 0) {
    claimSection.classList.remove("hidden");
  } else {
    claimSection.classList.add("hidden");
  }
}

let tiles = [];

function init() {
  const fee99Container = document.getElementById("fee-99");
  const fee49Container = document.getElementById("fee-49");
  const fee0Container = document.getElementById("fee-0");

  items.forEach(item => {
    const { tileElement, getQuantity } = createTile(item);
    tiles.push({ tileElement, getQuantity, item });
    if (item.fee === 99) fee99Container.appendChild(tileElement);
    else if (item.fee === 49) fee49Container.appendChild(tileElement);
    else fee0Container.appendChild(tileElement);
  });

  updateTotal();
}

// Claim process navigation code (same as before)
const claimSection = document.getElementById('claim-process');
const steps = claimSection.querySelectorAll('.step');
const prevBtn = document.getElementById('prev-step');
const nextBtn = document.getElementById('next-step');
let currentStep = 0;

function updateStep() {
  steps.forEach((step, index) => {
    step.classList.toggle('active', index === currentStep);
  });
  prevBtn.disabled = currentStep === 0;
  nextBtn.disabled = currentStep === steps.length - 1;
}

prevBtn.addEventListener('click', () => {
  if (currentStep > 0) {
    currentStep--;
    updateStep();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    updateStep();
  }
});

updateStep();

window.onload = init;
