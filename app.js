/**
 * Body Systems | Minimalist Black Theme (1-Screen Viewport)
 * Systems drill-down engine, AI organ search bar, and 10s pencil sketch pin-pointer.
 */

// =============================================================================
// 1. COMPACT SYSTEMS & ORGANS DATABASE
// =============================================================================
const SYSTEMS_DATA = {
  circulatory: {
    id: "circulatory",
    title: "Circulatory System",
    badge: "SYSTEM 01",
    stats: ["⚡ 100,000 beats/day", "🛣️ 60,000 miles vessels"],
    organs: [
      {
        id: "heart",
        name: "The Heart",
        role: "Primary Muscular Pump",
        emoji: "🫀",
        func: "Pumps oxygenated blood to your body cells and forces used blood into the lungs.",
        fact: "Generates its own electrical impulses using the SA node, beating independently!",
        subparts: "Right/Left Atria, Right/Left Ventricles, Aorta, Valves",
        pin: { top: "30%", left: "51%", label: "Heart" },
        sound: "heart"
      },
      {
        id: "arteries",
        name: "Arteries & Aorta",
        role: "High-Pressure Delivery Pipes",
        emoji: "🔴",
        func: "Carry thick, oxygen-rich bright red blood away from the heart at high pressure.",
        fact: "The aorta is the thickest blood vessel—about the diameter of a garden hose!",
        subparts: "Aorta, Carotid Artery, Coronary Arteries",
        pin: { top: "33%", left: "54%", label: "Arteries" },
        sound: "beep"
      },
      {
        id: "veins",
        name: "Veins & Vena Cava",
        role: "Return Highway",
        emoji: "🔵",
        func: "Return deoxygenated blood back to the heart with one-way valves to prevent backflow.",
        fact: "Veins look blue through your skin because of how red light penetrates tissue!",
        subparts: "Superior Vena Cava, Inferior Vena Cava, Jugular",
        pin: { top: "35%", left: "47%", label: "Veins" },
        sound: "beep"
      },
      {
        id: "capillaries",
        name: "Capillaries",
        role: "Microscopic Drop-off Points",
        emoji: "🕸️",
        func: "Microscopic single-cell thin tubes where oxygen and nutrients enter cells.",
        fact: "Ten capillaries bundled together are thinner than a single strand of hair!",
        subparts: "Arterioles, Capillary Beds, Venules",
        pin: { top: "45%", left: "50%", label: "Capillaries" },
        sound: "beep"
      },
      {
        id: "blood",
        name: "Blood & Plasma",
        role: "Living Transport Fluid",
        emoji: "🩸",
        func: "Carries oxygen (red cells), fights germs (white cells), and clots cuts (platelets).",
        fact: "Your body makes roughly 2 million fresh red blood cells every single second!",
        subparts: "Red Blood Cells, White Blood Cells, Platelets, Plasma",
        pin: { top: "50%", left: "50%", label: "Blood" },
        sound: "beep"
      }
    ]
  },

  respiratory: {
    id: "respiratory",
    title: "Respiratory System",
    badge: "SYSTEM 02",
    stats: ["💨 20,000 breaths/day", "🫧 600M Alveoli"],
    organs: [
      {
        id: "lungs",
        name: "The Lungs",
        role: "Gas Exchange Sponges",
        emoji: "🫁",
        func: "Exchange inhaled oxygen with bloodstream waste carbon dioxide every breath.",
        fact: "Your left lung is 10% smaller than the right one to leave room for your heart!",
        subparts: "Right Lobe (3 sections), Left Lobe (2 sections), Pleura",
        pin: { top: "27%", left: "44%", label: "Lungs" },
        sound: "breath"
      },
      {
        id: "trachea",
        name: "Trachea (Windpipe)",
        role: "Protected Air Tunnel",
        emoji: "🌬️",
        func: "Directs air straight down the neck into the chest; protected by cartilage rings.",
        fact: "Lined with tiny hairs called cilia that sweep dust and germs upward!",
        subparts: "Cartilage C-Rings, Epiglottis, Larynx (Voice Box)",
        pin: { top: "20%", left: "50%", label: "Trachea" },
        sound: "beep"
      },
      {
        id: "alveoli",
        name: "Alveoli (Air Sacs)",
        role: "Microscopic Diffusion Chambers",
        emoji: "🫧",
        func: "600 million microscopic bubbles where oxygen diffuses directly into capillaries.",
        fact: "If all alveoli were flattened out, they would cover an entire tennis court!",
        subparts: "Alveolar Clusters, Surfactant, Capillary Mesh",
        pin: { top: "29%", left: "55%", label: "Alveoli" },
        sound: "breath"
      },
      {
        id: "diaphragm",
        name: "The Diaphragm",
        role: "Breathing Engine Muscle",
        emoji: "🎛️",
        func: "Pulls downward to create negative chest pressure so air rushes into your lungs.",
        fact: "Hiccups happen when your diaphragm muscle involuntarily spasms!",
        subparts: "Central Tendon, Sternal & Lumbar Attachments",
        pin: { top: "36%", left: "50%", label: "Diaphragm" },
        sound: "beep"
      }
    ]
  },

  nervous: {
    id: "nervous",
    title: "Nervous System",
    badge: "SYSTEM 03",
    stats: ["⚡ 268 MPH Signal Speed", "🧠 86 Billion Neurons"],
    organs: [
      {
        id: "brain",
        name: "The Brain",
        role: "Master Computer",
        emoji: "🧠",
        func: "Processes sensory thoughts, controls movement, and regulates automatic breathing.",
        fact: "Generates enough electrical power (20 Watts) to illuminate a low-watt LED bulb!",
        subparts: "Cerebrum, Cerebellum, Brainstem, Hypothalamus",
        pin: { top: "11%", left: "50%", label: "Brain" },
        sound: "beep"
      },
      {
        id: "spinal-cord",
        name: "Spinal Cord",
        role: "Main Neural Super-Highway",
        emoji: "⚡",
        func: "Transmits impulses between brain and peripheral nerves down your back.",
        fact: "Handles emergency reflexes (like pulling your hand off a hot stove) before the brain feels it!",
        subparts: "Cervical, Thoracic, Lumbar, Sacral Nerves",
        pin: { top: "35%", left: "50%", label: "Spinal Cord" },
        sound: "beep"
      },
      {
        id: "neurons",
        name: "Neurons & Synapses",
        role: "Microscopic Electrical Wire",
        emoji: "🔌",
        func: "Send electrochemical signals across synaptic gaps in fractions of a millisecond.",
        fact: "Information travels along myelin-insulated axons at over 260 miles per hour!",
        subparts: "Dendrites, Soma (Cell Body), Axon, Synapse",
        pin: { top: "14%", left: "52%", label: "Neurons" },
        sound: "beep"
      }
    ]
  },

  digestive: {
    id: "digestive",
    title: "Digestive System",
    badge: "SYSTEM 04",
    stats: ["🥪 24-hr Journey", "📏 30 Feet of Tubing"],
    organs: [
      {
        id: "stomach",
        name: "The Stomach",
        role: "Acid Liquefier",
        emoji: "🥣",
        func: "Churns food with hydrochloric acid (pH 1.5) to liquefy meals into creamy chyme.",
        fact: "Produces a fresh protective mucus lining every 3 days to avoid digesting itself!",
        subparts: "Cardia, Fundus, Body, Pyloric Sphincter",
        pin: { top: "42%", left: "53%", label: "Stomach" },
        sound: "beep"
      },
      {
        id: "small-intestine",
        name: "Small Intestine",
        role: "Master Nutrient Absorber",
        emoji: "〰️",
        func: "22-foot coiled tube where microscopic villi absorb 90% of all vitamins and fuel.",
        fact: "Lined with millions of velvety villi that give it a huge surface area!",
        subparts: "Duodenum, Jejunum, Ileum, Villi",
        pin: { top: "50%", left: "50%", label: "Small Intestine" },
        sound: "beep"
      },
      {
        id: "liver",
        name: "The Liver",
        role: "Chemical Detox Plant",
        emoji: "🧫",
        func: "Filters toxins from blood, makes digestive bile, and stores glycogen fuel.",
        fact: "The liver is your largest internal organ and can regenerate itself from a small piece!",
        subparts: "Left/Right Lobes, Hepatic Artery, Gallbladder",
        pin: { top: "39%", left: "44%", label: "Liver" },
        sound: "beep"
      },
      {
        id: "large-intestine",
        name: "Large Intestine (Colon)",
        role: "Water Recycler & Waste Collector",
        emoji: "📦",
        func: "Reabsorbs water, houses beneficial gut bacteria, and forms compact waste.",
        fact: "Home to trillions of friendly microbes that produce essential Vitamin K!",
        subparts: "Cecum, Ascending/Descending Colon, Rectum",
        pin: { top: "54%", left: "50%", label: "Large Intestine" },
        sound: "beep"
      }
    ]
  },

  skeletal: {
    id: "skeletal",
    title: "Skeletal & Muscular System",
    badge: "SYSTEM 05",
    stats: ["🦴 206 Bones", "💪 600+ Muscles"],
    organs: [
      {
        id: "femur",
        name: "Femur (Thigh Bone)",
        role: "Strongest Structural Pillar",
        emoji: "🦴",
        func: "Supports body weight during running and jumping; produces marrow blood cells.",
        fact: "Stronger than solid concrete and reinforced steel ounce-for-ounce!",
        subparts: "Femoral Head, Shaft, Condyles",
        pin: { top: "72%", left: "44%", label: "Femur Bone" },
        sound: "beep"
      },
      {
        id: "skull",
        name: "Skull (Cranium)",
        role: "Brain Shield",
        emoji: "💀",
        func: "Encases and shields the delicate brain tissue and supports facial sensory organs.",
        fact: "Babies are born with 270 soft bones that fuse into the 206 adult bones!",
        subparts: "Cranial Bones, Mandible (Jaw), Sutures",
        pin: { top: "10%", left: "50%", label: "Skull" },
        sound: "beep"
      },
      {
        id: "ribcage",
        name: "Rib Cage",
        role: "Protective Chest Armor",
        emoji: "🦺",
        func: "12 pairs of curved bones shielding your heart and lungs that expand as you breathe.",
        fact: "Connected by flexible cartilage so your chest can expand with every breath!",
        subparts: "Sternum, True Ribs, Floating Ribs",
        pin: { top: "28%", left: "50%", label: "Rib Cage" },
        sound: "beep"
      },
      {
        id: "biceps",
        name: "Skeletal Muscles",
        role: "Opposing Pull Motors",
        emoji: "💪",
        func: "Muscles pull bones like levers. When biceps contract, triceps relax!",
        fact: "You use over 200 muscles just to take one single step forward!",
        subparts: "Muscle Fibers, Tendons, Actin & Myosin Filaments",
        pin: { top: "33%", left: "68%", label: "Bicep Muscle" },
        sound: "beep"
      }
    ]
  },

  excretory: {
    id: "excretory",
    title: "Excretory System",
    badge: "SYSTEM 06",
    stats: ["🩸 50 Gallons Filtered/day", "2M Nephrons"],
    organs: [
      {
        id: "kidneys",
        name: "The Kidneys",
        role: "Blood Purification Filters",
        emoji: "🩸",
        func: "Filter waste urea and extra fluids from blood roughly 40 times every single day.",
        fact: "You only need about 75% of one single kidney to live a full, normal life!",
        subparts: "Renal Cortex, Nephrons, Renal Pelvis",
        pin: { top: "45%", left: "44%", label: "Kidneys" },
        sound: "beep"
      },
      {
        id: "bladder",
        name: "The Bladder",
        role: "Expandable Fluid Storage",
        emoji: "🎈",
        func: "Hollow elastic pouch that holds liquid waste funneled down by the ureters.",
        fact: "Can stretch to hold about 2 cups (500ml) of fluid safely!",
        subparts: "Detrusor Muscle, Ureters, Urethra",
        pin: { top: "58%", left: "50%", label: "Bladder" },
        sound: "beep"
      }
    ]
  }
};

// =============================================================================
// 2. WEB AUDIO SYNTHESIZER
// =============================================================================
class MinimalAudio {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }
  init() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) this.ctx = new AC();
    }
  }
  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }
  playHeartbeat() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.thump(t, 85, 45, 0.1, 0.3);
    this.thump(t + 0.16, 110, 50, 0.1, 0.25);
  }
  thump(t, startF, endF, dur, vol) {
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.frequency.setValueAtTime(startF, t);
    o.frequency.exponentialRampToValueAtTime(endF, t + dur);
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g);
    g.connect(this.ctx.destination);
    o.start(t);
    o.stop(t + dur);
  }
  playBeep(freq = 520, dur = 0.06) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.frequency.setValueAtTime(freq, t);
    g.gain.setValueAtTime(0.1, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g);
    g.connect(this.ctx.destination);
    o.start(t);
    o.stop(t + dur);
  }
}
const audio = new MinimalAudio();

// =============================================================================
// 3. MAIN DASHBOARD CONTROLLER
// =============================================================================
let activeSysKey = "circulatory";
let activeOrganId = "heart";

function selectSystem(sysKey, targetOrganId = null) {
  const sysData = SYSTEMS_DATA[sysKey];
  if (!sysData) return;

  activeSysKey = sysKey;

  // Update System Chips
  document.querySelectorAll(".sys-chip").forEach(chip => {
    chip.classList.toggle("active", chip.getAttribute("data-sys") === sysKey);
  });

  // Update Summary Header
  document.getElementById("sys-badge").textContent = sysData.badge;
  document.getElementById("sys-title").textContent = sysData.title;
  document.getElementById("sys-stat-1").textContent = sysData.stats[0];
  document.getElementById("sys-stat-2").textContent = sysData.stats[1];

  // Render Organ Buttons List
  const organsList = document.getElementById("organs-list");
  organsList.innerHTML = "";

  sysData.organs.forEach(organ => {
    const btn = document.createElement("button");
    btn.className = "organ-btn";
    btn.setAttribute("data-organ-id", organ.id);
    btn.innerHTML = `${organ.emoji} ${organ.name}`;
    btn.addEventListener("click", () => selectOrgan(organ));
    organsList.appendChild(btn);
  });

  // Select target organ or default to first organ
  const chosenOrgan = targetOrganId
    ? sysData.organs.find(o => o.id === targetOrganId) || sysData.organs[0]
    : sysData.organs[0];

  selectOrgan(chosenOrgan);
}

function selectOrgan(organ) {
  activeOrganId = organ.id;

  // Highlight active button
  document.querySelectorAll(".organ-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-organ-id") === organ.id);
  });

  // Update Fact Card
  document.getElementById("detail-emoji").textContent = organ.emoji;
  document.getElementById("detail-name").textContent = organ.name;
  document.getElementById("detail-role").textContent = organ.role;
  document.getElementById("detail-function").textContent = organ.func;
  document.getElementById("detail-fact").textContent = organ.fact;
  document.getElementById("detail-subparts").textContent = organ.subparts;

  // Move Pencil Sketch Pointer Pin
  const pointer = document.getElementById("sketch-pointer");
  const pointerText = document.getElementById("pointer-text");
  if (pointer && organ.pin) {
    pointer.style.top = organ.pin.top;
    pointer.style.left = organ.pin.left;
    pointerText.textContent = organ.pin.label;
  }

  // Highlight corresponding path in pencil sketch if present
  document.querySelectorAll(".organ-path").forEach(p => p.classList.remove("active"));
  const sketchNode = document.querySelector(`.organ-path[data-part="${organ.id}"]`);
  if (sketchNode) sketchNode.classList.add("active");

  // Play audio cue
  if (organ.sound === "heart") {
    audio.playHeartbeat();
  } else {
    audio.playBeep(560, 0.05);
  }
}

// =============================================================================
// 4. AI SEARCH BOX (Instant Intelligent Organ Lookup)
// =============================================================================
function initAiSearch() {
  const searchInput = document.getElementById("ai-search-input");
  const dropdown = document.getElementById("search-dropdown");
  const clearBtn = document.getElementById("clear-search-btn");

  // Build searchable index of all organs & aliases
  const searchIndex = [];
  Object.keys(SYSTEMS_DATA).forEach(sysKey => {
    const sys = SYSTEMS_DATA[sysKey];
    sys.organs.forEach(organ => {
      searchIndex.push({
        name: organ.name,
        sysKey: sysKey,
        sysTitle: sys.title,
        organ: organ,
        keywords: `${organ.name} ${organ.role} ${organ.func} ${organ.fact} ${organ.subparts} ${sys.title}`.toLowerCase()
      });
    });
  });

  function performSearch(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      dropdown.classList.add("hidden");
      clearBtn.classList.add("hidden");
      return;
    }

    clearBtn.classList.remove("hidden");

    // Match keywords
    const matches = searchIndex.filter(item => item.keywords.includes(q)).slice(0, 5);

    if (matches.length === 0) {
      dropdown.innerHTML = `<div class="search-item"><div class="search-item-top">No exact match for "${query}"</div><div class="search-item-desc">Try typing Heart, Brain, Lungs, Femur, Alveoli, or Stomach!</div></div>`;
      dropdown.classList.remove("hidden");
      return;
    }

    dropdown.innerHTML = "";
    matches.forEach(item => {
      const el = document.createElement("div");
      el.className = "search-item";
      el.innerHTML = `
        <div class="search-item-top">
          <span>${item.organ.emoji} ${item.organ.name}</span>
          <span class="search-item-sys">${item.sysTitle}</span>
        </div>
        <div class="search-item-desc">${item.organ.func.slice(0, 75)}...</div>
      `;
      el.addEventListener("click", () => {
        selectSystem(item.sysKey, item.organ.id);
        dropdown.classList.add("hidden");
        searchInput.value = item.organ.name;
        audio.playBeep(640, 0.05);
      });
      dropdown.appendChild(el);
    });

    dropdown.classList.remove("hidden");
  }

  searchInput.addEventListener("input", e => performSearch(e.target.value));

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    dropdown.classList.add("hidden");
    clearBtn.classList.add("hidden");
  });

  document.addEventListener("click", e => {
    if (!e.target.closest(".search-container")) {
      dropdown.classList.add("hidden");
    }
  });
}

// =============================================================================
// 5. PENCIL SKETCH ANIMATION CONTROLLER (10-Second Loop)
// =============================================================================
function initPencilSketch() {
  const restartBtn = document.getElementById("restart-sketch-btn");
  const svg = document.getElementById("pencil-svg");
  const pencilTip = document.getElementById("pencil-tip");

  function replaySketch() {
    // Reset animation by triggering reflow
    const paths = svg.querySelectorAll(".sketch-path");
    paths.forEach(p => {
      p.style.animation = "none";
      void p.offsetWidth;
      p.style.animation = "";
    });

    if (pencilTip) {
      pencilTip.style.animation = "none";
      void pencilTip.offsetWidth;
      pencilTip.style.animation = "";
    }

    audio.playBeep(520, 0.06);
  }

  if (restartBtn) restartBtn.addEventListener("click", replaySketch);

  // Click on SVG organs directly
  document.querySelectorAll(".organ-path").forEach(node => {
    node.addEventListener("click", () => {
      const part = node.getAttribute("data-part");
      // Find which system holds this organ
      for (const sKey of Object.keys(SYSTEMS_DATA)) {
        const found = SYSTEMS_DATA[sKey].organs.find(o => o.id === part);
        if (found) {
          selectSystem(sKey, found.id);
          break;
        }
      }
    });
  });
}

// =============================================================================
// 6. MODAL & QR CODE
// =============================================================================
function initModal() {
  const qrBtn = document.getElementById("qr-btn");
  const modal = document.getElementById("qr-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  const doneBtn = document.getElementById("modal-done-btn");
  const copyBtn = document.getElementById("modal-copy-btn");

  if (qrBtn) {
    qrBtn.addEventListener("click", () => {
      modal.classList.remove("hidden");
      audio.playBeep(600, 0.04);
    });
  }

  const hide = () => modal.classList.add("hidden");
  if (closeBtn) closeBtn.addEventListener("click", hide);
  if (doneBtn) doneBtn.addEventListener("click", hide);
  modal.addEventListener("click", e => { if (e.target === modal) hide(); });

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText("https://sanchit196.github.io/body-systems/").then(() => {
        copyBtn.textContent = "✓ Copied!";
        setTimeout(() => copyBtn.textContent = "📋 Copy Link", 2000);
        audio.playBeep(700, 0.06);
      });
    });
  }

  // Audio Toggle Button
  const audioToggle = document.getElementById("audio-toggle-btn");
  if (audioToggle) {
    audioToggle.addEventListener("click", () => {
      const on = audio.toggle();
      audioToggle.textContent = on ? "🔊" : "🔇";
      if (on) audio.playBeep(600, 0.04);
    });
  }

  // Sound button on fact card
  const playPulseBtn = document.getElementById("play-pulse-btn");
  if (playPulseBtn) {
    playPulseBtn.addEventListener("click", () => {
      if (activeOrganId === "heart") audio.playHeartbeat();
      else audio.playBeep(600, 0.08);
    });
  }
}

// =============================================================================
// DOM READY
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Initialize systems bar listeners
  document.querySelectorAll(".sys-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      selectSystem(chip.getAttribute("data-sys"));
    });
  });

  initAiSearch();
  initPencilSketch();
  initModal();

  // Load default system
  selectSystem("circulatory", "heart");

  console.log("Body Systems Minimal 1-Screen loaded cleanly.");
});
