/**
 * BioVerse 360° | The Living Machine — Human Body Systems
 * Complete interactive logic: Holographic Scanner, ECG Canvas Engine,
 * Reflex Tester, Breathing Pacer, Trivia Quiz, and Web Audio SFX Engine.
 */

// =============================================================================
// 1. ORGAN DATABASE & TELEMETRY
// =============================================================================
const ORGAN_DATA = {
  heart: {
    name: "The Human Heart",
    systemTag: "CIRCULATORY SYSTEM",
    role: "The Unstoppable Bio-Pump",
    emoji: "🫀",
    stats: {
      workload: "~100,000 beats/day",
      power: "7,500 L Blood / Day",
      speed: "60 - 100 BPM",
      size: "Size of your fist"
    },
    superpower: "Your heart contains its own intrinsic electrical conduction pacemaker (the SA node)! It can continue beating outside the body as long as it receives oxygen!",
    howItWorks: "Pumps deoxygenated blood to the lungs to absorb fresh oxygen, then forcefully ejects oxygenated blood through the aorta to fuel all cells.",
    fact: "If all your blood vessels were tied together, they would stretch 60,000 miles—wrapping around the Earth twice!",
    pinPos: { top: "27%", left: "53%", label: "Heart: 75 BPM (Pumping)" },
    soundType: "heart"
  },
  brain: {
    name: "The Human Brain",
    systemTag: "NERVOUS SYSTEM",
    role: "The Master Command Center",
    emoji: "🧠",
    stats: {
      workload: "86 Billion Neurons",
      power: "20 Watts (Light bulb)",
      speed: "268 MPH Signal Speed",
      size: "About 3 lbs (1.4 kg)"
    },
    superpower: "Your brain generates enough electricity every day to power a low-watt LED light bulb, and processes sensory data faster than the world's best supercomputers!",
    howItWorks: "Receives sensory input from optic, auditory, and tactile nerves, computes optimal reactions, and fires motor impulses down the spinal cord in milliseconds.",
    fact: "Information inside your nervous system travels along myelin-sheathed neurons at speeds up to 120 meters/sec (268 mph)!",
    pinPos: { top: "10%", left: "50%", label: "Brain: 86B Neurons Active" },
    soundType: "beep"
  },
  lungs: {
    name: "The Respiratory Lungs",
    systemTag: "RESPIRATORY SYSTEM",
    role: "The Oxygen Exchange Engine",
    emoji: "🫁",
    stats: {
      workload: "~20,000 breaths/day",
      power: "600M Micro-Alveoli",
      speed: "12 - 20 Breaths/min",
      size: "Surface: Tennis Court"
    },
    superpower: "The combined surface area of all your lung alveoli unfolded is about 70-100 square meters—equivalent to half a tennis court!",
    howItWorks: "Your diaphragm muscle contracts down, creating negative air pressure inside the chest. Oxygen diffuses across alveolar capillaries directly into red blood cells.",
    fact: "Your left lung is about 10% smaller than your right lung to make room for your tilted heart!",
    pinPos: { top: "26%", left: "42%", label: "Lungs: O2 Exchange 98%" },
    soundType: "breath"
  },
  stomach: {
    name: "Stomach & Digestion",
    systemTag: "DIGESTIVE SYSTEM",
    role: "The Acid Refinery",
    emoji: "🥣",
    stats: {
      workload: "pH 1.5 - 2.0 (Hydrochloric)",
      power: "2-4 Hour Breakdown",
      speed: "Peristalsis Waves",
      size: "Expands 4x When Full"
    },
    superpower: "Stomach acid is so corrosive (hydrochloric acid) it could dissolve razor blades! To protect itself, the stomach produces a thick mucus lining that replaces itself every 3 days!",
    howItWorks: "Muscular gastric walls churn food with pepsin and acids to convert food boluses into creamy chyme before releasing it into the 22-foot small intestine.",
    fact: "The small intestine has millions of microscopic velvet-like fingers called villi that absorb 90% of your body's food energy!",
    pinPos: { top: "38%", left: "51%", label: "Stomach: Churning pH 1.8" },
    soundType: "beep"
  },
  kidneys: {
    name: "The Dual Kidneys",
    systemTag: "EXCRETORY & CIRCULATORY",
    role: "The Master Blood Filter",
    emoji: "🩸",
    stats: {
      workload: "200 Liters Filtered/day",
      power: "2 Million Nephrons",
      speed: "Filters Blood 40x/day",
      size: "10-12 cm (Soap Bar)"
    },
    superpower: "Your kidneys filter your entire blood volume roughly 40 times every single 24 hours, adjusting electrolyte balances with surgical precision!",
    howItWorks: "Microscopic nephrons filter urea, toxins, and surplus ions from arterial blood, returning purified plasma to circulation while funneling urine to the bladder.",
    fact: "You only need 75% of one kidney to live a full healthy life! That's why kidney donation is one of medicine's greatest miracles.",
    pinPos: { top: "43%", left: "44%", label: "Kidneys: 200L Filtered/day" },
    soundType: "beep"
  },
  skeleton: {
    name: "The Human Skeleton",
    systemTag: "SKELETAL & MUSCULAR",
    role: "Living Armor & Blood Factory",
    emoji: "🦴",
    stats: {
      workload: "206 Living Bones",
      power: "4x Stronger than Concrete",
      speed: "Red Marrow: 2M RBC/sec",
      size: "15% of Body Weight"
    },
    superpower: "Bone is a living, regenerative composite material. Ounce for ounce, human bone has a higher tensile strength than reinforced steel and concrete!",
    howItWorks: "Provides rigid structural levers for 600+ muscles, shields vulnerable internal organs like the brain and heart, and continuously manufactures fresh red blood cells in the marrow.",
    fact: "You were born with about 270 soft bones! As you grew, many bones (like in your skull and spine) fused together into the 206 bones you have now.",
    pinPos: { top: "72%", left: "45%", label: "Femur: High-Tensile Bone" },
    soundType: "beep"
  }
};

// =============================================================================
// 2. SYNTHESIZED SOUND EFFECTS ENGINE (Web Audio API)
// Zero external files, ultra-reliable, zero latency
// =============================================================================
class BioSoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
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
    // Lub (low thud)
    this.triggerThump(t, 80, 40, 0.12, 0.4);
    // Dub (sharper thud, 0.18s later)
    this.triggerThump(t + 0.18, 110, 45, 0.14, 0.35);
  }

  triggerThump(time, startFreq, endFreq, duration, volume) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(startFreq, time);
    osc.frequency.exponentialRampToValueAtTime(endFreq, time + duration);

    gain.gain.setValueAtTime(volume, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(time);
    osc.stop(time + duration);
  }

  playBeep(freq = 600, duration = 0.08) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, t);

    gain.gain.setValueAtTime(0.15, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + duration);
  }

  playSuccess() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    [523.25, 659.25, 783.99, 1046.5].forEach((f, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.frequency.value = f;
      gain.gain.setValueAtTime(0.1, t + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.08 + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t + idx * 0.08);
      osc.stop(t + idx * 0.08 + 0.3);
    });
  }

  playError() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(160, t);
    osc.frequency.linearRampToValueAtTime(110, t + 0.25);

    gain.gain.setValueAtTime(0.2, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(t);
    osc.stop(t + 0.25);
  }
}

const audio = new BioSoundEngine();

// =============================================================================
// 3. HOLOGRAPHIC SCANNER CONTROLLER
// =============================================================================
function initScanner() {
  const layerButtons = document.querySelectorAll(".layer-btn");
  const organChips = document.querySelectorAll(".organ-chip");
  const organHotspots = document.querySelectorAll(".organ-hotspot");
  const pin = document.getElementById("active-organ-pin");
  const pinLabel = document.getElementById("pin-label");
  const dynFact = document.getElementById("scanner-dyn-fact");
  const currentOrganText = document.getElementById("scanner-current-organ-text");

  // HUD fields
  const dispSystemTag = document.getElementById("disp-system-tag");
  const dispEmoji = document.getElementById("disp-emoji");
  const dispName = document.getElementById("disp-name");
  const dispRole = document.getElementById("disp-role");
  const dispStat1 = document.getElementById("disp-stat-1");
  const dispStat2 = document.getElementById("disp-stat-2");
  const dispStat3 = document.getElementById("disp-stat-3");
  const dispStat4 = document.getElementById("disp-stat-4");
  const dispSuperpower = document.getElementById("disp-superpower");
  const dispHow = document.getElementById("disp-how");
  const soundBtn = document.getElementById("play-organ-sound-btn");

  let currentOrganKey = "heart";

  function selectOrgan(key) {
    const data = ORGAN_DATA[key];
    if (!data) return;

    currentOrganKey = key;

    // Update Telemetry Display
    dispSystemTag.textContent = data.systemTag;
    dispEmoji.textContent = data.emoji;
    dispName.textContent = data.name;
    dispRole.textContent = data.role;
    dispStat1.textContent = data.stats.workload;
    dispStat2.textContent = data.stats.power;
    dispStat3.textContent = data.stats.speed;
    dispStat4.textContent = data.stats.size;
    dispSuperpower.textContent = data.superpower;
    dispHow.textContent = data.howItWorks;
    dynFact.textContent = data.fact;
    currentOrganText.textContent = `Active Selection: ${data.name}`;

    // Update Pin Position
    pin.style.top = data.pinPos.top;
    pin.style.left = data.pinPos.left;
    pinLabel.textContent = data.pinPos.label;

    // Update active chip
    organChips.forEach(c => {
      c.classList.toggle("active", c.getAttribute("data-organ") === key);
    });

    // Update active SVG hotspot
    organHotspots.forEach(h => {
      h.classList.toggle("active", h.getAttribute("data-organ") === key);
    });

    // Audio cue
    if (data.soundType === "heart") {
      audio.playHeartbeat();
    } else {
      audio.playBeep(520, 0.07);
    }
  }

  // Hotspot Click Listeners
  organHotspots.forEach(node => {
    node.addEventListener("click", () => {
      const organ = node.getAttribute("data-organ");
      selectOrgan(organ);
    });
  });

  // Organ Chip Listeners
  organChips.forEach(chip => {
    chip.addEventListener("click", () => {
      const organ = chip.getAttribute("data-organ");
      selectOrgan(organ);
    });
  });

  // Layer Filter Switching
  layerButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      layerButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const layer = btn.getAttribute("data-layer");
      applyLayerFilter(layer);
      audio.playBeep(700, 0.05);
    });
  });

  function applyLayerFilter(layer) {
    const circLayer = document.getElementById("layer-circulatory");
    const respLayer = document.getElementById("layer-respiratory");
    const nervLayer = document.getElementById("layer-nervous");
    const skelLayer = document.getElementById("layer-skeletal");

    // Reset opacities
    const allLayers = [circLayer, respLayer, nervLayer, skelLayer].filter(Boolean);
    allLayers.forEach(l => (l.style.opacity = "1"));

    organHotspots.forEach(h => (h.style.opacity = "1"));

    if (layer === "all") {
      return;
    }

    allLayers.forEach(l => (l.style.opacity = "0.15"));
    organHotspots.forEach(h => (h.style.opacity = "0.2"));

    if (layer === "circulatory") {
      if (circLayer) circLayer.style.opacity = "1";
      document.getElementById("organ-heart-node").style.opacity = "1";
      document.getElementById("organ-kidneys-node").style.opacity = "1";
      selectOrgan("heart");
    } else if (layer === "respiratory") {
      document.getElementById("organ-lungs-node").style.opacity = "1";
      selectOrgan("lungs");
    } else if (layer === "nervous") {
      if (nervLayer) nervLayer.style.opacity = "1";
      document.getElementById("organ-brain-node").style.opacity = "1";
      selectOrgan("brain");
    } else if (layer === "digestive") {
      document.getElementById("organ-stomach-node").style.opacity = "1";
      selectOrgan("stomach");
    } else if (layer === "skeletal") {
      if (skelLayer) skelLayer.style.opacity = "1";
      document.getElementById("organ-skeleton-node").style.opacity = "1";
      selectOrgan("skeleton");
    }
  }

  // Listen to Pulse button
  soundBtn.addEventListener("click", () => {
    if (currentOrganKey === "heart") {
      audio.playHeartbeat();
    } else {
      audio.playBeep(640, 0.1);
    }
  });

  // Default selection
  selectOrgan("heart");
}

// =============================================================================
// 4. LAB 1: REAL-TIME CARDIAC ECG WAVEFORM ENGINE (Canvas)
// =============================================================================
function initEcgLab() {
  const canvas = document.getElementById("ecg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const slider = document.getElementById("bpm-slider");
  const bpmVal = document.getElementById("bpm-val");
  const bpmReadout = document.getElementById("ecg-bpm-readout");
  const activityLabel = document.getElementById("ecg-activity-label");
  const presetButtons = document.querySelectorAll(".preset-btn[data-bpm]");
  const insightText = document.getElementById("ecg-insight-text");

  let bpm = 75;
  let x = 0;
  const height = canvas.height;
  const width = canvas.width;
  let phase = 0;
  let lastBeatTime = 0;

  function setBpm(newBpm) {
    bpm = parseInt(newBpm, 10);
    slider.value = bpm;
    bpmVal.textContent = `${bpm} BPM`;
    bpmReadout.textContent = `${bpm} BPM`;

    let label = "Normal Resting";
    let insight = `At ${bpm} BPM, your heart pumps approximately 5 liters of blood per minute through your 60,000 miles of vessels!`;

    if (bpm < 60) {
      label = "Deep Sleep / Bradycardia";
      insight = `At ${bpm} BPM, metabolic demand drops. Heart muscles conserve energy and coronary arteries replenish oxygen reserves.`;
    } else if (bpm >= 60 && bpm <= 100) {
      label = "Relaxed / Study Mode";
      insight = `At ${bpm} BPM, your cardiac rhythm is in an ideal homeostasis balance for cognitive focus and organ nourishment.`;
    } else if (bpm > 100 && bpm < 150) {
      label = "Aerobic Exercise / Jog";
      insight = `At ${bpm} BPM, muscles require more oxygen! Stroke volume increases and capillaries in leg muscles dilate widely.`;
    } else {
      label = "Maximum Sprint / Adrenaline";
      insight = `At ${bpm} BPM, cardiac output surges up to 20-25 Liters/min! Adrenaline tells the SA node to fire maximum electrical impulses.`;
    }

    activityLabel.textContent = label;
    insightText.textContent = insight;

    presetButtons.forEach(btn => {
      btn.classList.toggle("active", parseInt(btn.getAttribute("data-bpm"), 10) === bpm);
    });
  }

  slider.addEventListener("input", e => setBpm(e.target.value));

  presetButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      setBpm(btn.getAttribute("data-bpm"));
      audio.playBeep(500, 0.05);
    });
  });

  // Clear background
  ctx.fillStyle = "#020617";
  ctx.fillRect(0, 0, width, height);

  function getEcgY(p) {
    const mid = height / 2;
    // Standard P-Q-R-S-T wave calculation
    if (p > 0.1 && p < 0.2) {
      // P Wave (atrial depolarization)
      return mid - Math.sin((p - 0.1) * 10 * Math.PI) * 12;
    } else if (p >= 0.28 && p < 0.3) {
      // Q dip
      return mid + 10;
    } else if (p >= 0.3 && p < 0.35) {
      // R spike (ventricular contraction)
      return mid - 55;
    } else if (p >= 0.35 && p < 0.38) {
      // S dip
      return mid + 20;
    } else if (p > 0.45 && p < 0.6) {
      // T wave (ventricular repolarization)
      return mid - Math.sin((p - 0.45) * 6.66 * Math.PI) * 16;
    }
    // Baseline with slight biological vibration
    return mid + (Math.random() - 0.5) * 1.5;
  }

  let prevY = height / 2;

  function animateEcg(timestamp) {
    const cycleTime = 60000 / bpm; // ms per beat

    // Play heart sound on R-wave peak
    if (timestamp - lastBeatTime > cycleTime) {
      lastBeatTime = timestamp;
      audio.playHeartbeat();
    }

    // Step across canvas
    const step = 2.5;
    const nextX = (x + step) % width;

    // Erase beam ahead
    ctx.fillStyle = "rgba(2, 6, 23, 0.3)";
    ctx.fillRect(nextX, 0, 18, height);

    // Compute Y
    phase = ((timestamp % cycleTime) / cycleTime);
    const currY = getEcgY(phase);

    // Draw line
    ctx.beginPath();
    ctx.strokeStyle = "#00f2fe";
    ctx.lineWidth = 2.2;
    ctx.shadowColor = "#00f2fe";
    ctx.shadowBlur = 8;
    ctx.moveTo(x, prevY);
    ctx.lineTo(nextX, currY);
    ctx.stroke();

    x = nextX;
    prevY = currY;

    requestAnimationFrame(animateEcg);
  }

  requestAnimationFrame(animateEcg);
}

// =============================================================================
// 5. LAB 2: NEURAL REFLEX TESTER
// =============================================================================
function initReflexLab() {
  const reflexBox = document.getElementById("reflex-box");
  const screen = document.getElementById("reflex-screen");
  const heading = document.getElementById("reflex-heading");
  const subtext = document.getElementById("reflex-subtext");
  const icon = document.getElementById("reflex-icon");
  const startBtn = document.getElementById("reflex-start-btn");
  const bestScoreDisp = document.getElementById("reflex-best-score");

  let state = "idle"; // idle, waiting, ready, done
  let timerId = null;
  let startTime = 0;
  let bestScore = Infinity;

  function startTest() {
    state = "waiting";
    reflexBox.className = "reflex-arena waiting";
    icon.textContent = "⏳";
    heading.textContent = "Get Ready...";
    subtext.textContent = "Wait for the screen to turn GREEN!";
    startBtn.disabled = true;

    const delay = Math.random() * 2500 + 1500; // 1.5s to 4s
    timerId = setTimeout(() => {
      state = "ready";
      startTime = performance.now();
      reflexBox.className = "reflex-arena ready";
      icon.textContent = "⚡";
      heading.textContent = "CLICK NOW!";
      subtext.textContent = "Tap anywhere inside this box immediately!";
      audio.playBeep(880, 0.05);
    }, delay);
  }

  function handleBoxClick() {
    if (state === "waiting") {
      // False start / too early
      clearTimeout(timerId);
      state = "idle";
      reflexBox.className = "reflex-arena";
      icon.textContent = "⚠️";
      heading.textContent = "Too Early!";
      subtext.textContent = "You reacted before the green signal. Try again!";
      startBtn.disabled = false;
      audio.playError();
    } else if (state === "ready") {
      const elapsed = Math.round(performance.now() - startTime);
      state = "done";
      reflexBox.className = "reflex-arena";
      icon.textContent = "🎯";
      heading.textContent = `${elapsed} milliseconds!`;

      if (elapsed < bestScore) {
        bestScore = elapsed;
        bestScoreDisp.textContent = `${bestScore} ms`;
      }

      let verdict = "Lightning reflexes! Faster than 90% of people!";
      if (elapsed > 350) {
        verdict = "Good attempt! Average human visual reaction time is ~250ms.";
      } else if (elapsed <= 250) {
        verdict = "Neural impulse speed record! Synapses firing at top velocity!";
      }

      subtext.textContent = verdict;
      startBtn.disabled = false;
      startBtn.textContent = "Test Again";
      audio.playSuccess();
    }
  }

  startBtn.addEventListener("click", startTest);
  reflexBox.addEventListener("click", handleBoxClick);
}

// =============================================================================
// 6. LAB 3: LUNG EXPANSION BREATH PACER
// =============================================================================
function initBreathLab() {
  const bubble = document.getElementById("lung-bubble");
  const phaseText = document.getElementById("breath-phase-text");
  const timerText = document.getElementById("breath-timer");
  const startBtn = document.getElementById("breath-start-btn");
  const resetBtn = document.getElementById("breath-reset-btn");

  let isRunning = false;
  let interval = null;
  let countdown = 4;
  let phaseIndex = 0; // 0: inhale, 1: hold, 2: exhale, 3: hold

  const phases = [
    { name: "Inhale (O2 In)", class: "inhale" },
    { name: "Hold (Gas Exchange)", class: "hold" },
    { name: "Exhale (CO2 Out)", class: "exhale" },
    { name: "Rest & Reset", class: "hold" }
  ];

  function tick() {
    timerText.textContent = `${countdown}s`;
    if (countdown <= 0) {
      phaseIndex = (phaseIndex + 1) % phases.length;
      countdown = 4;
      const cur = phases[phaseIndex];
      phaseText.textContent = cur.name;
      bubble.className = `lung-bubble ${cur.class}`;
      audio.playBeep(440 + phaseIndex * 60, 0.06);
    }
    countdown--;
  }

  function start() {
    if (isRunning) return;
    isRunning = true;
    countdown = 4;
    phaseIndex = 0;
    bubble.className = "lung-bubble inhale";
    phaseText.textContent = "Inhale (O2 In)";
    audio.playBeep(520, 0.08);
    interval = setInterval(tick, 1000);
    startBtn.textContent = "Pacing Active...";
  }

  function stop() {
    isRunning = false;
    clearInterval(interval);
    bubble.className = "lung-bubble";
    phaseText.textContent = "Inhale (Oxygen)";
    timerText.textContent = "4s";
    startBtn.textContent = "▶ Start Breath Cycle";
  }

  startBtn.addEventListener("click", () => {
    if (isRunning) stop();
    else start();
  });

  resetBtn.addEventListener("click", stop);
}

// =============================================================================
// 7. LAB 4: DIGESTION TIMELINE INTERACTION
// =============================================================================
function initDigestionTimeline() {
  const steps = document.querySelectorAll(".timeline-step");
  steps.forEach(step => {
    step.addEventListener("click", () => {
      steps.forEach(s => s.classList.remove("active"));
      step.classList.add("active");
      audio.playBeep(580, 0.04);
    });
  });
}

// =============================================================================
// 8. SECTION 4: GAMIFIED CHALLENGE QUIZ
// =============================================================================
const QUIZ_QUESTIONS = [
  {
    emoji: "🫀",
    question: "Which organ pumps blood throughout the entire circulatory highway non-stop?",
    options: ["The Lungs", "The Human Heart", "The Liver", "The Stomach"],
    correctIndex: 1,
    explanation: "Correct! The heart beats around 100,000 times a day, pumping thousands of liters of blood through your circulatory system!"
  },
  {
    emoji: "⚡",
    question: "What are the microscopic electrical cells that transmit nerve signals in your brain?",
    options: ["Neurons", "Alveoli", "Nephrons", "Platelets"],
    correctIndex: 0,
    explanation: "Spot on! Your brain holds roughly 86 billion neurons communicating through trillions of synaptic connections."
  },
  {
    emoji: "🫧",
    question: "Where does oxygen diffuse across microscopic air sacs into your blood inside the lungs?",
    options: ["Trachea", "Bronchioles", "Alveoli", "Epiglottis"],
    correctIndex: 2,
    explanation: "Awesome! You have ~600 million tiny alveoli bubbles offering the surface area of a tennis court for oxygen transfer."
  },
  {
    emoji: "🥪",
    question: "In which digestive organ does roughly 90% of all nutrient absorption take place?",
    options: ["Stomach", "Large Intestine", "Small Intestine", "Esophagus"],
    correctIndex: 2,
    explanation: "Accurate! The small intestine stretches about 20-22 feet and its tiny villi absorb vitamins, carbs, and proteins."
  },
  {
    emoji: "🦴",
    question: "How many living bones are found inside an adult human skeleton?",
    options: ["106 Bones", "206 Bones", "306 Bones", "506 Bones"],
    correctIndex: 1,
    explanation: "Outstanding! Adults have 206 bones; infants start with around 270 soft bones that fuse together as they mature."
  }
];

function initQuiz() {
  const qCurr = document.getElementById("q-curr");
  const qTotal = document.getElementById("q-total");
  const liveScore = document.getElementById("quiz-live-score");
  const progressFill = document.getElementById("quiz-progress-fill");
  const qEmoji = document.getElementById("quiz-emoji");
  const qTitle = document.getElementById("quiz-question-title");
  const optionsGrid = document.getElementById("quiz-options-container");
  const feedbackBox = document.getElementById("quiz-feedback");
  const feedbackText = document.getElementById("feedback-text");
  const nextBtn = document.getElementById("quiz-next-btn");

  const quizCard = document.getElementById("quiz-card");
  const resultsCard = document.getElementById("quiz-results");
  const finalScoreVal = document.getElementById("final-score-val");
  const restartBtn = document.getElementById("restart-quiz-btn");

  let currentIdx = 0;
  let score = 0;
  let answered = false;

  qTotal.textContent = QUIZ_QUESTIONS.length;

  function loadQuestion(idx) {
    answered = false;
    const q = QUIZ_QUESTIONS[idx];
    qCurr.textContent = idx + 1;
    qEmoji.textContent = q.emoji;
    qTitle.textContent = q.question;
    progressFill.style.width = `${((idx + 1) / QUIZ_QUESTIONS.length) * 100}%`;

    feedbackBox.classList.add("hidden");
    optionsGrid.innerHTML = "";

    q.options.forEach((opt, optIdx) => {
      const btn = document.createElement("button");
      btn.className = "quiz-opt-btn";
      btn.innerHTML = `<span><strong>${String.fromCharCode(65 + optIdx)}.</strong> ${opt}</span>`;
      btn.addEventListener("click", () => handleSelectOption(optIdx, btn));
      optionsGrid.appendChild(btn);
    });
  }

  function handleSelectOption(optIdx, clickedBtn) {
    if (answered) return;
    answered = true;

    const q = QUIZ_QUESTIONS[currentIdx];
    const allButtons = optionsGrid.querySelectorAll(".quiz-opt-btn");

    if (optIdx === q.correctIndex) {
      score++;
      liveScore.textContent = score * 100;
      clickedBtn.classList.add("correct");
      feedbackText.innerHTML = `🎉 <strong>Correct!</strong> ${q.explanation}`;
      feedbackBox.style.borderColor = "var(--accent-lung)";
      audio.playSuccess();
    } else {
      clickedBtn.classList.add("wrong");
      allButtons[q.correctIndex].classList.add("correct");
      feedbackText.innerHTML = `❌ <strong>Not quite!</strong> ${q.explanation}`;
      feedbackBox.style.borderColor = "var(--accent-heart)";
      audio.playError();
    }

    feedbackBox.classList.remove("hidden");
    if (currentIdx === QUIZ_QUESTIONS.length - 1) {
      nextBtn.textContent = "View Certificate 🏆";
    } else {
      nextBtn.textContent = "Next Question ➔";
    }
  }

  nextBtn.addEventListener("click", () => {
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      currentIdx++;
      loadQuestion(currentIdx);
      audio.playBeep(600, 0.05);
    } else {
      // Show Final Certificate
      quizCard.classList.add("hidden");
      resultsCard.classList.remove("hidden");
      finalScoreVal.textContent = `${score}/${QUIZ_QUESTIONS.length}`;
      audio.playSuccess();
    }
  });

  restartBtn.addEventListener("click", () => {
    currentIdx = 0;
    score = 0;
    liveScore.textContent = 0;
    resultsCard.classList.add("hidden");
    quizCard.classList.remove("hidden");
    loadQuestion(0);
    audio.playBeep(550, 0.05);
  });

  loadQuestion(0);
}

// =============================================================================
// 9. QR CODE & COPY TO CLIPBOARD UTILITIES
// =============================================================================
function initQrAndSharing() {
  const copyBtn = document.getElementById("copy-url-btn");
  const copyInput = document.getElementById("copy-url-input");
  const copyHint = document.getElementById("copy-hint");

  const openModalBtn = document.getElementById("open-qr-modal-btn");
  const closeModalBtn = document.getElementById("close-qr-modal-btn");
  const dismissModalBtn = document.getElementById("modal-dismiss-btn");
  const modalCopyBtn = document.getElementById("modal-copy-btn");
  const qrModal = document.getElementById("qr-modal");

  function copyUrl() {
    navigator.clipboard.writeText(copyInput.value).then(() => {
      copyHint.classList.add("show");
      setTimeout(() => copyHint.classList.remove("show"), 2500);
      audio.playSuccess();
    }).catch(() => {
      copyInput.select();
      document.execCommand("copy");
      copyHint.classList.add("show");
      setTimeout(() => copyHint.classList.remove("show"), 2500);
    });
  }

  if (copyBtn) copyBtn.addEventListener("click", copyUrl);
  if (modalCopyBtn) modalCopyBtn.addEventListener("click", copyUrl);

  // Modal handlers
  if (openModalBtn) {
    openModalBtn.addEventListener("click", () => {
      qrModal.classList.remove("hidden");
      audio.playBeep(650, 0.05);
    });
  }

  const hideModal = () => qrModal.classList.add("hidden");
  if (closeModalBtn) closeModalBtn.addEventListener("click", hideModal);
  if (dismissModalBtn) dismissModalBtn.addEventListener("click", hideModal);

  qrModal.addEventListener("click", e => {
    if (e.target === qrModal) hideModal();
  });

  // Card Action smooth scrolling to labs
  document.querySelectorAll("[data-jump-lab]").forEach(btn => {
    btn.addEventListener("click", () => {
      const labId = btn.getAttribute("data-jump-lab");
      let targetEl = null;
      if (labId === "ecg") targetEl = document.getElementById("lab-card-ecg");
      if (labId === "breath") targetEl = document.getElementById("lab-card-breath");
      if (labId === "reflex") targetEl = document.getElementById("lab-card-reflex");
      if (labId === "digestive-timeline") targetEl = document.getElementById("lab-card-digestive-timeline");
      if (labId === "biomechanics") targetEl = document.getElementById("lab-card-ecg");

      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
        targetEl.style.boxShadow = "0 0 35px rgba(6, 182, 212, 0.6)";
        setTimeout(() => (targetEl.style.boxShadow = ""), 1500);
        audio.playBeep(600, 0.05);
      }
    });
  });

  // Sound toggle button in navbar
  const audioToggleBtn = document.getElementById("audio-toggle-btn");
  const audioIcon = document.getElementById("audio-icon");
  if (audioToggleBtn) {
    audioToggleBtn.addEventListener("click", () => {
      const isEnabled = audio.toggle();
      audioIcon.textContent = isEnabled ? "🔊" : "🔇";
      if (isEnabled) audio.playBeep(600, 0.05);
    });
  }
}

// =============================================================================
// DOM READY INITIALIZATION
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initScanner();
  initEcgLab();
  initReflexLab();
  initBreathLab();
  initDigestionTimeline();
  initQuiz();
  initQrAndSharing();
  console.log("BioVerse 360° initialized successfully! Ready for Science Showcase.");
});
