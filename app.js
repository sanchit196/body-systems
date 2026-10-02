/**
 * Body Systems | Grade 7 Science Project
 * Minimal 1-Screen Edition featuring NIDDK Media Asset #17996 Digestive Pencil Drawing,
 * Interactive Hotspots, 10s Pencil Animation, and AI Organ Search.
 */

// =============================================================================
// 1. COMPREHENSIVE ORGAN & SYSTEM DATABASE
// Matches exact NIDDK #17996 labels + other major body systems
// =============================================================================
const SYSTEMS_DATA = {
  digestive: {
    id: "digestive",
    title: "Digestive System",
    badge: "SYSTEM 01",
    stats: ["🥪 24-hr Journey", "📏 30 Feet of Tubing"],
    organs: [
      {
        id: "stomach",
        name: "The Stomach",
        role: "Acid Liquefier & Churner",
        emoji: "🥣",
        func: "Churns food with hydrochloric acid (pH 1.5) to liquefy meals into creamy chyme.",
        fact: "Produces a fresh protective mucus lining every 3 days to avoid digesting itself!",
        subparts: "Cardia, Fundus, Body, Pyloric Sphincter",
        pinId: "stomach",
        sound: "beep"
      },
      {
        id: "esophagus",
        name: "Esophagus",
        role: "Muscular Food Chute",
        emoji: "🥛",
        func: "Rhythmic muscular waves (peristalsis) squeeze swallowed food past the windpipe into your stomach.",
        fact: "You can swallow food even when hanging upside down thanks to peristalsis!",
        subparts: "Upper/Lower Esophageal Sphincters, Smooth Muscle",
        pinId: "esophagus",
        sound: "beep"
      },
      {
        id: "liver",
        name: "The Liver",
        role: "Master Chemical Filter",
        emoji: "🧫",
        func: "Filters toxins from blood, makes digestive bile to break down fats, and stores glycogen fuel.",
        fact: "The liver is your heaviest internal organ and can regenerate itself from a fraction of its tissue!",
        subparts: "Left/Right Lobes, Hepatic Artery, Portal Vein",
        pinId: "liver",
        sound: "beep"
      },
      {
        id: "gallbladder",
        name: "Gallbladder",
        role: "Bile Reservoir",
        emoji: "🍐",
        func: "Stores and concentrates bitter green bile produced by the liver until fatty foods enter digestion.",
        fact: "Small pear-shaped sac tucked under your liver—it squeezes bile into the duodenum on demand!",
        subparts: "Cystic Duct, Common Bile Duct",
        pinId: "gallbladder",
        sound: "beep"
      },
      {
        id: "pancreas",
        name: "Pancreas",
        role: "Enzyme & Insulin Powerhouse",
        emoji: "🧬",
        func: "Releases powerful enzymes to digest carbs, proteins, and fats, and produces insulin to balance sugar.",
        fact: "Secretes bicarbonate that neutralizes intense stomach acid so it doesn't burn your intestines!",
        subparts: "Head, Body, Tail, Islets of Langerhans",
        pinId: "pancreas",
        sound: "beep"
      },
      {
        id: "duodenum",
        name: "Duodenum",
        role: "First Intestinal Mixing Hub",
        emoji: "🧪",
        func: "The C-shaped first 10 inches of the small intestine where stomach chyme mixes with bile and enzymes.",
        fact: "Named 'duodenum' from the Latin for 'twelve finger breadths' because of its exact length!",
        subparts: "Superior, Descending, Horizontal, and Ascending segments",
        pinId: "duodenum",
        sound: "beep"
      },
      {
        id: "small-intestine",
        name: "Small Intestine",
        role: "Master Nutrient Absorber",
        emoji: "〰️",
        func: "22-foot coiled tube where microscopic velvet villi absorb 90% of all vitamins and cellular fuel.",
        fact: "Its inner surface area unfolded would cover an entire tennis court!",
        subparts: "Jejunum, Ileum, Microscopic Villi & Microvilli",
        pinId: "small-intestine",
        sound: "beep"
      },
      {
        id: "large-intestine",
        name: "Large Intestine (Colon)",
        role: "Water Recycler & Waste Hub",
        emoji: "📦",
        func: "Reabsorbs water, houses trillions of friendly gut microbes, and compacts solid waste.",
        fact: "Your gut bacteria produce essential Vitamin K that helps your blood clot after cuts!",
        subparts: "Cecum, Ascending/Transverse/Descending Colon, Sigmoid Colon",
        pinId: "large-intestine",
        sound: "beep"
      },
      {
        id: "appendix",
        name: "Appendix",
        role: "Microbiome Safe-House",
        emoji: "🪱",
        func: "Small 4-inch pouch extending from the cecum; serves as a protective reservoir for beneficial gut bacteria.",
        fact: "Once thought useless, scientists now know it reboots good gut bacteria after stomach bugs!",
        subparts: "Mesoappendix, Lymphoid Follicles",
        pinId: "appendix",
        sound: "beep"
      },
      {
        id: "rectum",
        name: "Rectum",
        role: "Temporary Waste Reservoir",
        emoji: "🚪",
        func: "The final 5-6 inches of the large intestine where solid stool is temporarily held before elimination.",
        fact: "Equipped with sensitive nerve stretch receptors that signal to your brain when it's time to use the restroom!",
        subparts: "Rectal Ampulla, Rectal Columns, Internal Sphincter",
        pinId: "rectum",
        sound: "beep"
      },
      {
        id: "anus",
        name: "Anus",
        role: "Voluntary Muscular Exit",
        emoji: "⭕",
        func: "The terminal opening of the digestive tract controlled by dual internal and external sphincter rings.",
        fact: "The external sphincter is under conscious voluntary control, allowing you to hold waste until ready!",
        subparts: "Anal Canal, Involuntary Internal Sphincter, Voluntary External Sphincter",
        pinId: "anus",
        sound: "beep"
      }
    ]
  },

  circulatory: {
    id: "circulatory",
    title: "Circulatory System",
    badge: "SYSTEM 02",
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
        sound: "beep"
      }
    ]
  },

  respiratory: {
    id: "respiratory",
    title: "Respiratory System",
    badge: "SYSTEM 03",
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
        sound: "breath"
      }
    ]
  },

  nervous: {
    id: "nervous",
    title: "Nervous System",
    badge: "SYSTEM 04",
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
let activeSysKey = "digestive";
let activeOrganId = "stomach";

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

  // Highlight Hotspot Badges and Organ Dots on the sketch
  document.querySelectorAll(".hotspot-badge, .organ-dot").forEach(el => {
    const pinPart = el.getAttribute("data-part");
    const isMatch = pinPart === organ.id || (organ.pinId && pinPart === organ.pinId);
    el.classList.toggle("active", isMatch);
  });

  // Play audio cue
  if (organ.sound === "heart") {
    audio.playHeartbeat();
  } else {
    audio.playBeep(560, 0.05);
  }
}

// =============================================================================
// 4. AI SEARCH BOX
// =============================================================================
function initAiSearch() {
  const searchInput = document.getElementById("ai-search-input");
  const dropdown = document.getElementById("search-dropdown");
  const clearBtn = document.getElementById("clear-search-btn");

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
    const matches = searchIndex.filter(item => item.keywords.includes(q)).slice(0, 5);

    if (matches.length === 0) {
      dropdown.innerHTML = `<div class="search-item"><div class="search-item-top">No exact match for "${query}"</div><div class="search-item-desc">Try searching Stomach, Liver, Esophagus, Pancreas, or Heart!</div></div>`;
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
// 5. PENCIL SKETCH CONTROLLER (10-Second Loop & Hotspots)
// =============================================================================
function initPencilSketch() {
  const restartBtn = document.getElementById("restart-sketch-btn");
  const invertBtn = document.getElementById("invert-view-btn");
  const stage = document.getElementById("sketch-stage");
  const curtain = document.getElementById("drawing-curtain");
  const pencilTip = document.getElementById("pencil-tip");

  // Replay 10s sketch animation
  function replaySketch() {
    curtain.style.animation = "none";
    void curtain.offsetWidth;
    curtain.style.animation = "";

    if (pencilTip) {
      pencilTip.style.animation = "none";
      void pencilTip.offsetWidth;
      pencilTip.style.animation = "";
    }

    audio.playBeep(520, 0.06);
  }

  if (restartBtn) restartBtn.addEventListener("click", replaySketch);

  // Toggle Paper vs Chalkboard
  if (invertBtn) {
    invertBtn.addEventListener("click", () => {
      const isChalkboard = stage.classList.toggle("chalkboard-mode");
      invertBtn.textContent = isChalkboard ? "☀️ Chalkboard" : "🌓 Paper Mode";
      audio.playBeep(600, 0.04);
    });
  }

  // Hotspot Badges & Organ Dots Clicks & Paired-Hover
  document.querySelectorAll(".hotspot-badge, .organ-dot").forEach(el => {
    el.addEventListener("click", () => {
      const partId = el.getAttribute("data-part");
      for (const sKey of Object.keys(SYSTEMS_DATA)) {
        const found = SYSTEMS_DATA[sKey].organs.find(o => o.id === partId || o.pinId === partId);
        if (found) {
          selectSystem(sKey, found.id);
          break;
        }
      }
    });

    // Dual-hover pairing: hovering either the text badge or organ dot highlights both
    el.addEventListener("mouseenter", () => {
      const partId = el.getAttribute("data-part");
      document.querySelectorAll(`.hotspot-badge[data-part="${partId}"], .organ-dot[data-part="${partId}"]`).forEach(sibling => {
        sibling.classList.add("hover-paired");
      });
    });

    el.addEventListener("mouseleave", () => {
      const partId = el.getAttribute("data-part");
      document.querySelectorAll(`.hotspot-badge[data-part="${partId}"], .organ-dot[data-part="${partId}"]`).forEach(sibling => {
        sibling.classList.remove("hover-paired");
      });
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

  const audioToggle = document.getElementById("audio-toggle-btn");
  if (audioToggle) {
    audioToggle.addEventListener("click", () => {
      const on = audio.toggle();
      audioToggle.textContent = on ? "🔊" : "🔇";
      if (on) audio.playBeep(600, 0.04);
    });
  }

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
  document.querySelectorAll(".sys-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      selectSystem(chip.getAttribute("data-sys"));
    });
  });

  initAiSearch();
  initPencilSketch();
  initModal();

  // Load Digestive system as default (matches NIDDK sketch #17996)
  selectSystem("digestive", "stomach");

  console.log("Body Systems Grade 7 Science Project initialized with NIDDK sketch.");
});
