/**
 * The Living Machine | Human Body Systems Science Project
 * Interactive JavaScript for Middle School Biology Exhibition
 * Features: Dynamic SVG Organ Diagrams, Audio Synth, ECG Simulator,
 * Reflex Tester, Breathing Pacer, and Pop Quiz Engine.
 */

// =============================================================================
// 1. ORGAN DATA & INLINE VECTOR DIAGRAMS (100% Human-crafted SVGs)
// =============================================================================
const ORGAN_DATA = {
  heart: {
    title: "The Human Heart",
    systemBadge: "CIRCULATORY SYSTEM",
    badgeClass: "heart",
    tagline: "The Body's Tireless Power Pump",
    workload: "100,000 beats/day",
    power: "2,000 gallons of blood",
    size: "Same size as your fist!",
    mechanism: "The heart has four chambers: the right side collects oxygen-depleted blood from your body and pumps it to the lungs. The left side receives fresh oxygenated blood from your lungs and sends it speeding through your aorta to fuel every living cell in your body.",
    superpower: "Your heart has its own internal electrical pacemaker called the Sinoatrial (SA) node! It generates its own electrical pulses, which means it can keep beating even outside the body as long as it has oxygen.",
    soundType: "heart",
    svg: `
      <svg viewBox="0 0 280 280" class="organ-vector-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="heartGrad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stop-color="#fda4af" />
            <stop offset="100%" stop-color="#e11d48" />
          </radialGradient>
        </defs>
        <!-- Aorta & Vena Cava -->
        <path d="M115,70 C115,25 160,25 160,70" fill="none" stroke="#be123c" stroke-width="14" stroke-linecap="round" />
        <line x1="128" y1="36" x2="128" y2="20" stroke="#be123c" stroke-width="8" stroke-linecap="round" />
        <line x1="144" y1="36" x2="144" y2="20" stroke="#be123c" stroke-width="8" stroke-linecap="round" />
        <path d="M80,45 L80,95" stroke="#2563eb" stroke-width="12" stroke-linecap="round" />
        
        <!-- Main Heart Body -->
        <path d="M140,75 C125,45 80,40 60,70 C30,110 40,165 140,240 C240,165 250,110 220,70 C200,40 155,45 140,75 Z" fill="url(#heartGrad)" stroke="#9f1239" stroke-width="4" />
        
        <!-- Chamber Divider Lines -->
        <path d="M140,90 Q138,150 140,225" stroke="#881337" stroke-width="3" stroke-dasharray="6,4" fill="none" />
        
        <!-- Internal Labels -->
        <rect x="68" y="105" width="56" height="24" rx="4" fill="#ffffff" stroke="#2563eb" stroke-width="1.5" />
        <text x="96" y="121" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">R. Atrium</text>

        <rect x="64" y="150" width="64" height="24" rx="4" fill="#ffffff" stroke="#2563eb" stroke-width="1.5" />
        <text x="96" y="166" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">R. Ventricle</text>

        <rect x="156" y="105" width="56" height="24" rx="4" fill="#ffffff" stroke="#be123c" stroke-width="1.5" />
        <text x="184" y="121" font-size="10" font-weight="bold" fill="#881337" text-anchor="middle">L. Atrium</text>

        <rect x="152" y="150" width="64" height="24" rx="4" fill="#ffffff" stroke="#be123c" stroke-width="1.5" />
        <text x="184" y="166" font-size="10" font-weight="bold" fill="#881337" text-anchor="middle">L. Ventricle</text>
      </svg>
    `
  },
  brain: {
    title: "The Human Brain",
    systemBadge: "NERVOUS SYSTEM",
    badgeClass: "brain",
    tagline: "The Master Command Center",
    workload: "86 Billion Neurons",
    power: "20 Watts of Electricity",
    size: "About 3 lbs (1.4 kg)",
    mechanism: "The brain processes all sight, sound, touch, and emotions. Signals travel down the spinal cord and throughout the peripheral nerves at up to 268 mph, allowing you to react, move, think, and dream simultaneously.",
    superpower: "Your brain generates about 20 watts of continuous electrical power—enough to illuminate a low-watt LED light bulb! Even when you are fast asleep, your brain is actively reorganizing memories and clearing metabolic toxins.",
    soundType: "beep",
    svg: `
      <svg viewBox="0 0 280 280" class="organ-vector-svg" xmlns="http://www.w3.org/2000/svg">
        <!-- Cerebrum Main Brain Outline -->
        <path d="M85,110 C70,70 110,40 145,40 C190,40 225,70 215,110 C225,135 210,165 180,165 C165,180 135,180 120,165 C90,165 75,135 85,110 Z" fill="#fef3c7" stroke="#d97706" stroke-width="4" />
        <!-- Gyri / Brain Folds -->
        <path d="M105,75 Q135,60 165,75 Q195,90 175,115 M115,115 Q140,100 155,130 M135,145 Q150,135 170,145" stroke="#b45309" stroke-width="3" fill="none" stroke-linecap="round" />
        <!-- Cerebellum -->
        <ellipse cx="180" cy="175" rx="22" ry="16" fill="#fde68a" stroke="#d97706" stroke-width="3" />
        <path d="M165,175 Q180,170 195,175 M168,182 Q180,177 192,182" stroke="#b45309" stroke-width="2" fill="none" />
        <!-- Brain Stem -->
        <path d="M140,170 L140,245" stroke="#d97706" stroke-width="12" stroke-linecap="round" />
        <!-- Labels -->
        <text x="145" y="90" font-size="12" font-weight="bold" fill="#78350f" text-anchor="middle">Cerebrum</text>
        <text x="215" y="195" font-size="10" font-weight="bold" fill="#92400e">Cerebellum</text>
        <text x="140" y="260" font-size="10" font-weight="bold" fill="#78350f" text-anchor="middle">Spinal Cord</text>
      </svg>
    `
  },
  lungs: {
    title: "The Respiratory Lungs",
    systemBadge: "RESPIRATORY SYSTEM",
    badgeClass: "lungs",
    tagline: "The Vital Oxygen Gas Station",
    workload: "20,000 breaths/day",
    power: "600M Tiny Alveoli",
    size: "Surface of a Tennis Court!",
    mechanism: "When you inhale, air travels down the trachea (windpipe) and divides into the bronchial tree of each lung. At the microscopic tips, 600 million bubble-like alveoli let oxygen diffuse straight into your red blood cells while picking up carbon dioxide to exhale.",
    superpower: "Your left lung is about 10% smaller than your right lung to make space for your tilted heart! If you unfolded the surface of all your tiny lung alveoli, they would cover an entire tennis court!",
    soundType: "breath",
    svg: `
      <svg viewBox="0 0 280 280" class="organ-vector-svg" xmlns="http://www.w3.org/2000/svg">
        <!-- Trachea (Windpipe) -->
        <path d="M140,30 L140,95" stroke="#0284c7" stroke-width="12" stroke-linecap="round" />
        <!-- Cartilage Rings -->
        <line x1="132" y1="45" x2="148" y2="45" stroke="#bae6fd" stroke-width="3" />
        <line x1="132" y1="60" x2="148" y2="60" stroke="#bae6fd" stroke-width="3" />
        <line x1="132" y1="75" x2="148" y2="75" stroke="#bae6fd" stroke-width="3" />
        <!-- Bronchi branches -->
        <path d="M140,95 L105,130 M140,95 L175,130" stroke="#0284c7" stroke-width="8" stroke-linecap="round" />
        
        <!-- Left & Right Lung Lobes -->
        <path d="M105,120 C75,130 55,165 60,205 C68,235 105,230 120,215 C128,195 128,145 105,120 Z" fill="#e0f2fe" stroke="#0284c7" stroke-width="4" />
        <path d="M175,120 C205,130 225,165 220,205 C212,235 175,230 160,215 C152,195 152,145 175,120 Z" fill="#e0f2fe" stroke="#0284c7" stroke-width="4" />
        
        <!-- Diaphragm -->
        <path d="M50,245 Q140,220 230,245" stroke="#ea580c" stroke-width="4" fill="none" stroke-dasharray="6,3" />
        <!-- Labels -->
        <text x="140" y="25" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">Trachea</text>
        <text x="85" y="180" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">Right Lung</text>
        <text x="195" y="180" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">Left Lung</text>
        <text x="140" y="260" font-size="10" font-weight="bold" fill="#c2410c" text-anchor="middle">Diaphragm Muscle</text>
      </svg>
    `
  },
  stomach: {
    title: "Stomach & Digestion",
    systemBadge: "DIGESTIVE SYSTEM",
    badgeClass: "stomach",
    tagline: "The Body's Chemical Fuel Refinery",
    workload: "pH 1.5 - 2.0 (Hydrochloric Acid)",
    power: "Absorbs 90% in Small Intestine",
    size: "Stretches 4x its empty size!",
    mechanism: "Food enters the esophagus and lands in the stomach, where muscular contractions churn it with hydrochloric acid and enzymes. The liquefied nutrients then pass into the 22-foot small intestine, where millions of microscopic villi absorb vitamins and nutrients.",
    superpower: "Stomach acid is so powerful it could dissolve metal nails! To keep from digesting itself, your stomach secretes a protective mucus barrier that completely renews itself every three days.",
    soundType: "beep",
    svg: `
      <svg viewBox="0 0 280 280" class="organ-vector-svg" xmlns="http://www.w3.org/2000/svg">
        <!-- Esophagus -->
        <line x1="140" y1="20" x2="140" y2="65" stroke="#ea580c" stroke-width="8" stroke-linecap="round" />
        
        <!-- Stomach J-shape -->
        <path d="M140,65 C160,65 190,75 185,110 C180,150 125,150 115,130 C105,115 125,85 140,65 Z" fill="#ffedd5" stroke="#ea580c" stroke-width="4" />
        
        <!-- Liver -->
        <path d="M70,75 C95,65 120,70 120,95 C115,120 85,125 75,110 Z" fill="#fee2e2" stroke="#dc2626" stroke-width="3" />
        
        <!-- Small & Large Intestine Box -->
        <rect x="95" y="155" width="90" height="70" rx="14" fill="#f0fdf4" stroke="#16a34a" stroke-width="4" />
        <path d="M110,180 Q140,170 170,180 M115,195 Q140,205 165,195" stroke="#16a34a" stroke-width="3" fill="none" stroke-linecap="round" />
        
        <!-- Labels -->
        <text x="88" y="100" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">Liver</text>
        <text x="155" y="112" font-size="11" font-weight="bold" fill="#9a3412" text-anchor="middle">Stomach</text>
        <text x="140" y="215" font-size="11" font-weight="bold" fill="#166534" text-anchor="middle">Intestines</text>
      </svg>
    `
  },
  kidneys: {
    title: "The Dual Kidneys",
    systemBadge: "EXCRETORY & CIRCULATORY",
    badgeClass: "kidneys",
    tagline: "The Master Blood Purification Filters",
    workload: "50 Gallons Filtered Daily",
    power: "2 Million Nephron Units",
    size: "About 4 inches (Soap Bar)",
    mechanism: "Arterial blood enters the kidneys, where 2 million microscopic filtering units called nephrons remove toxins, extra fluid, and metabolic wastes. Pure, cleansed blood returns to circulation while wastes are sent down the ureters to the bladder.",
    superpower: "Your kidneys filter your entire body's blood supply approximately 40 times every single day! You only need about 75% of one kidney to live completely healthily.",
    soundType: "beep",
    svg: `
      <svg viewBox="0 0 280 280" class="organ-vector-svg" xmlns="http://www.w3.org/2000/svg">
        <!-- Vena Cava & Aorta -->
        <line x1="130" y1="30" x2="130" y2="240" stroke="#2563eb" stroke-width="8" stroke-linecap="round" />
        <line x1="150" y1="30" x2="150" y2="240" stroke="#dc2626" stroke-width="8" stroke-linecap="round" />
        
        <!-- Left Kidney -->
        <path d="M85,90 C105,90 100,120 105,145 C100,170 85,170 75,150 C65,130 65,110 75,95 Z" fill="#fecaca" stroke="#b91c1c" stroke-width="4" />
        <!-- Right Kidney -->
        <path d="M195,95 C175,95 180,125 175,150 C180,175 195,175 205,155 C215,135 215,115 205,100 Z" fill="#fecaca" stroke="#b91c1c" stroke-width="4" />
        
        <!-- Renal Vessels -->
        <line x1="105" y1="130" x2="130" y2="130" stroke="#2563eb" stroke-width="4" />
        <line x1="150" y1="135" x2="175" y2="135" stroke="#dc2626" stroke-width="4" />
        
        <!-- Ureters -->
        <path d="M95,155 Q105,210 135,235" stroke="#f59e0b" stroke-width="3" fill="none" />
        <path d="M185,160 Q175,210 145,235" stroke="#f59e0b" stroke-width="3" fill="none" />
        
        <!-- Labels -->
        <text x="85" y="80" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">Kidney</text>
        <text x="195" y="80" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">Kidney</text>
        <text x="140" y="255" font-size="10" font-weight="bold" fill="#b45309" text-anchor="middle">Ureters to Bladder</text>
      </svg>
    `
  },
  skeleton: {
    title: "Skeletal & Muscular System",
    systemBadge: "SKELETAL & MUSCULAR",
    badgeClass: "skeleton",
    tagline: "The Living Armor & Movement Motor",
    workload: "206 Living Bones",
    power: "4x Stronger than Concrete",
    size: "600+ Contracting Muscles",
    mechanism: "Bones provide a strong, protective framework while bone marrow creates 2 million red blood cells each second. Muscles work in opposing pairs (like biceps and triceps) contracting and pulling bones like levers to let you run, throw, and smile!",
    superpower: "Bone is living, self-healing tissue that constantly rebuilds itself. Ounce for ounce, human bone has a higher tensile strength than reinforced steel!",
    soundType: "beep",
    svg: `
      <svg viewBox="0 0 280 280" class="organ-vector-svg" xmlns="http://www.w3.org/2000/svg">
        <!-- Skull -->
        <ellipse cx="140" cy="40" rx="20" ry="18" fill="#f8fafc" stroke="#475569" stroke-width="3" />
        <circle cx="133" cy="40" r="3" fill="#475569" />
        <circle cx="147" cy="40" r="3" fill="#475569" />
        <!-- Spine -->
        <line x1="140" y1="60" x2="140" y2="170" stroke="#475569" stroke-width="5" stroke-linecap="round" />
        <!-- Ribcage -->
        <ellipse cx="140" cy="100" rx="30" ry="24" fill="none" stroke="#475569" stroke-width="3" />
        <line x1="115" y1="92" x2="165" y2="92" stroke="#475569" stroke-width="2" />
        <line x1="112" y1="105" x2="168" y2="105" stroke="#475569" stroke-width="2" />
        <!-- Arm & Muscle -->
        <line x1="110" y1="75" x2="80" y2="120" stroke="#475569" stroke-width="4" stroke-linecap="round" />
        <path d="M140,75 L180,100 L200,135" stroke="#475569" stroke-width="4" stroke-linecap="round" fill="none" />
        <!-- Bicep Muscle highlight -->
        <path d="M155,80 Q180,85 178,110" stroke="#ef4444" stroke-width="6" stroke-linecap="round" fill="none" />
        <!-- Pelvis & Legs -->
        <path d="M120,170 C130,160 150,160 160,170 C150,190 130,190 120,170 Z" fill="#e2e8f0" stroke="#475569" stroke-width="3" />
        <line x1="125" y1="185" x2="115" y2="250" stroke="#475569" stroke-width="5" stroke-linecap="round" />
        <line x1="155" y1="185" x2="165" y2="250" stroke="#475569" stroke-width="5" stroke-linecap="round" />
        
        <!-- Labels -->
        <text x="140" y="20" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">Cranium (Skull)</text>
        <text x="195" y="85" font-size="10" font-weight="bold" fill="#dc2626">Bicep Muscle</text>
        <text x="140" y="268" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">Femur (Strongest Bone)</text>
      </svg>
    `
  }
};

// =============================================================================
// 2. AUDIO SYNTHESIZER (Web Audio API)
// =============================================================================
class SimpleAudio {
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
    this.thump(t, 85, 45, 0.12, 0.35);
    this.thump(t + 0.16, 110, 50, 0.12, 0.3);
  }

  thump(time, startF, endF, dur, vol) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(startF, time);
    osc.frequency.exponentialRampToValueAtTime(endF, time + dur);
    gain.gain.setValueAtTime(vol, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + dur);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(time);
    osc.stop(time + dur);
  }

  playBeep(freq = 550, dur = 0.08) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, t);
    gain.gain.setValueAtTime(0.12, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + dur);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(t);
    osc.stop(t + dur);
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
      gain.gain.setValueAtTime(0.08, t + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.08 + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t + idx * 0.08);
      osc.stop(t + idx * 0.08 + 0.25);
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
    osc.frequency.setValueAtTime(180, t);
    osc.frequency.linearRampToValueAtTime(120, t + 0.2);
    gain.gain.setValueAtTime(0.15, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(t);
    osc.stop(t + 0.2);
  }
}

const sound = new SimpleAudio();

// =============================================================================
// 3. EXPLORER CONTROLLER
// =============================================================================
function initExplorer() {
  const tabs = document.querySelectorAll(".sys-tab");
  const diagramContainer = document.getElementById("diagram-container");
  const organBadge = document.getElementById("organ-badge");
  const organTitle = document.getElementById("organ-title");
  const organTagline = document.getElementById("organ-tagline");
  const statWorkload = document.getElementById("stat-workload");
  const statPower = document.getElementById("stat-power");
  const statSize = document.getElementById("stat-size");
  const organMechanism = document.getElementById("organ-mechanism");
  const organSuperpower = document.getElementById("organ-superpower");
  const soundBtn = document.getElementById("organ-sound-btn");

  let currentKey = "heart";

  function renderOrgan(key) {
    const data = ORGAN_DATA[key];
    if (!data) return;

    currentKey = key;

    tabs.forEach(t => {
      t.classList.toggle("active", t.getAttribute("data-organ") === key);
    });

    diagramContainer.innerHTML = data.svg;
    organBadge.textContent = data.systemBadge;
    organTitle.textContent = data.title;
    organTagline.textContent = data.tagline;
    statWorkload.textContent = data.workload;
    statPower.textContent = data.power;
    statSize.textContent = data.size;
    organMechanism.textContent = data.mechanism;
    organSuperpower.textContent = data.superpower;

    if (data.soundType === "heart") {
      sound.playHeartbeat();
    } else {
      sound.playBeep(520, 0.06);
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      renderOrgan(tab.getAttribute("data-organ"));
    });
  });

  if (soundBtn) {
    soundBtn.addEventListener("click", () => {
      if (currentKey === "heart") sound.playHeartbeat();
      else sound.playBeep(600, 0.1);
    });
  }

  renderOrgan("heart");
}

// =============================================================================
// 4. LAB 1: ECG CANVAS WAVEFORM
// =============================================================================
function initEcg() {
  const canvas = document.getElementById("ecg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const slider = document.getElementById("bpm-slider");
  const bpmDisplay = document.getElementById("bpm-display-val");
  const bpmReadout = document.getElementById("ecg-readout-bpm");
  const tagReadout = document.getElementById("ecg-readout-tag");
  const presetPills = document.querySelectorAll(".preset-pill");
  const scienceFact = document.getElementById("ecg-science-fact");

  let bpm = 75;
  let x = 0;
  const w = canvas.width;
  const h = canvas.height;
  let lastBeat = 0;

  function updateBpm(newVal) {
    bpm = parseInt(newVal, 10);
    slider.value = bpm;
    bpmDisplay.textContent = `${bpm} Beats / Minute`;
    bpmReadout.textContent = `${bpm} BPM`;

    let tag = "Normal Resting";
    let fact = `At ${bpm} BPM, your heart pumps ~1.3 gallons of blood every minute to your cells.`;

    if (bpm < 60) {
      tag = "Deep Sleep";
      fact = `At ${bpm} BPM, the parasympathetic nervous system conserves energy while muscles rest.`;
    } else if (bpm >= 60 && bpm <= 100) {
      tag = "Normal / Study Mode";
      fact = `At ${bpm} BPM, your cardiac cycle delivers the perfect balance of oxygen to your brain.`;
    } else if (bpm > 100 && bpm < 150) {
      tag = "Brisk Walk / Jog";
      fact = `At ${bpm} BPM, your working leg muscles demand double the oxygen volume!`;
    } else {
      tag = "Gym Sprint / High Activity";
      fact = `At ${bpm} BPM, the heart pumps up to 5 times more blood per minute than at rest!`;
    }

    tagReadout.textContent = tag;
    scienceFact.textContent = fact;

    presetPills.forEach(p => {
      p.classList.toggle("active", parseInt(p.getAttribute("data-bpm"), 10) === bpm);
    });
  }

  slider.addEventListener("input", e => updateBpm(e.target.value));

  presetPills.forEach(pill => {
    pill.addEventListener("click", () => {
      updateBpm(pill.getAttribute("data-bpm"));
      sound.playBeep(480, 0.05);
    });
  });

  ctx.fillStyle = "#0f172a";
  ctx.fillRect(0, 0, w, h);

  function getY(p) {
    const mid = h / 2;
    if (p > 0.1 && p < 0.2) return mid - Math.sin((p - 0.1) * 10 * Math.PI) * 10;
    if (p >= 0.28 && p < 0.3) return mid + 8;
    if (p >= 0.3 && p < 0.35) return mid - 45;
    if (p >= 0.35 && p < 0.38) return mid + 16;
    if (p > 0.45 && p < 0.6) return mid - Math.sin((p - 0.45) * 6.6 * Math.PI) * 14;
    return mid + (Math.random() - 0.5) * 1.5;
  }

  let prevY = h / 2;

  function loop(time) {
    const cycle = 60000 / bpm;
    if (time - lastBeat > cycle) {
      lastBeat = time;
      sound.playHeartbeat();
    }

    const step = 2.5;
    const nextX = (x + step) % w;

    ctx.fillStyle = "rgba(15, 23, 42, 0.25)";
    ctx.fillRect(nextX, 0, 16, h);

    const phase = (time % cycle) / cycle;
    const curY = getY(phase);

    ctx.beginPath();
    ctx.strokeStyle = "#38bdf8";
    ctx.lineWidth = 2.2;
    ctx.moveTo(x, prevY);
    ctx.lineTo(nextX, curY);
    ctx.stroke();

    x = nextX;
    prevY = curY;

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}

// =============================================================================
// 5. LAB 2: REFLEX TESTER
// =============================================================================
function initReflex() {
  const pad = document.getElementById("reflex-pad");
  const mainText = document.getElementById("reflex-main-text");
  const subText = document.getElementById("reflex-sub-text");
  const icon = document.getElementById("reflex-icon");
  const startBtn = document.getElementById("reflex-start-btn");
  const bestDisp = document.getElementById("reflex-best-ms");

  let state = "idle";
  let timeout = null;
  let startTime = 0;
  let best = Infinity;

  function start() {
    state = "waiting";
    pad.className = "reflex-pad waiting";
    icon.textContent = "⏳";
    mainText.textContent = "Get Ready...";
    subText.textContent = "Wait for the box to turn GREEN!";
    startBtn.disabled = true;

    const delay = Math.random() * 2000 + 1500;
    timeout = setTimeout(() => {
      state = "ready";
      startTime = performance.now();
      pad.className = "reflex-pad ready";
      icon.textContent = "⚡";
      mainText.textContent = "CLICK NOW!";
      subText.textContent = "Click as fast as you can!";
      sound.playBeep(800, 0.05);
    }, delay);
  }

  function handlePadClick() {
    if (state === "waiting") {
      clearTimeout(timeout);
      state = "idle";
      pad.className = "reflex-pad";
      icon.textContent = "⚠️";
      mainText.textContent = "Too early!";
      subText.textContent = "Wait until the green color appears.";
      startBtn.disabled = false;
      sound.playError();
    } else if (state === "ready") {
      const ms = Math.round(performance.now() - startTime);
      state = "idle";
      pad.className = "reflex-pad";
      icon.textContent = "🎯";
      mainText.textContent = `${ms} milliseconds!`;

      if (ms < best) {
        best = ms;
        bestDisp.textContent = `${best} ms`;
      }

      subText.textContent = ms < 250 ? "Lightning fast! Faster than average!" : "Great reaction! Normal human speed is ~250ms.";
      startBtn.disabled = false;
      startBtn.textContent = "Test Again";
      sound.playSuccess();
    }
  }

  startBtn.addEventListener("click", start);
  pad.addEventListener("click", handlePadClick);
}

// =============================================================================
// 6. LAB 3: BREATH PACER
// =============================================================================
function initBreath() {
  const circle = document.getElementById("lung-circle");
  const stepName = document.getElementById("breath-step-name");
  const counter = document.getElementById("breath-counter");
  const btn = document.getElementById("breath-toggle-btn");

  let running = false;
  let interval = null;
  let count = 4;
  let phase = 0;

  const phases = [
    { text: "Inhale (O2 In)", cls: "inhale" },
    { text: "Hold Air", cls: "hold" },
    { text: "Exhale (CO2 Out)", cls: "exhale" },
    { text: "Rest", cls: "hold" }
  ];

  function tick() {
    counter.textContent = `${count}s`;
    if (count <= 0) {
      phase = (phase + 1) % phases.length;
      count = 4;
      const cur = phases[phase];
      stepName.textContent = cur.text;
      circle.className = `lung-circle ${cur.cls}`;
      sound.playBeep(450 + phase * 50, 0.05);
    }
    count--;
  }

  btn.addEventListener("click", () => {
    if (running) {
      running = false;
      clearInterval(interval);
      circle.className = "lung-circle";
      stepName.textContent = "Inhale (Oxygen)";
      counter.textContent = "4s";
      btn.textContent = "▶ Start Breathing Exercise";
    } else {
      running = true;
      count = 4;
      phase = 0;
      circle.className = "lung-circle inhale";
      stepName.textContent = "Inhale (Oxygen)";
      interval = setInterval(tick, 1000);
      btn.textContent = "⏹ Stop Exercise";
      sound.playBeep(520, 0.08);
    }
  });
}

// =============================================================================
// 7. LAB 4: DIGESTION TIMELINE
// =============================================================================
function initDigestion() {
  const steps = document.querySelectorAll(".t-step");
  steps.forEach(s => {
    s.addEventListener("click", () => {
      steps.forEach(x => x.classList.remove("active"));
      s.classList.add("active");
      sound.playBeep(550, 0.04);
    });
  });
}

// =============================================================================
// 8. SECTION 4: POP QUIZ
// =============================================================================
const QUIZ_QUESTIONS = [
  {
    icon: "🫀",
    q: "Which organ pumps oxygen-rich blood through your arteries?",
    options: ["The Lungs", "The Heart", "The Liver", "The Kidneys"],
    answer: 1,
    info: "The heart pumps about 2,000 gallons of blood every day through your 60,000 miles of blood vessels!"
  },
  {
    icon: "🧠",
    q: "What are the microscopic electrical cells that communicate in your brain?",
    options: ["Neurons", "Alveoli", "Nephrons", "Platelets"],
    answer: 0,
    info: "Your brain has about 86 billion neurons firing electrical impulses at speeds up to 268 mph!"
  },
  {
    icon: "🫁",
    q: "Where does oxygen diffuse into the blood inside your lungs?",
    options: ["Trachea", "Diaphragm", "Alveoli (Air Sacs)", "Epiglottis"],
    answer: 2,
    info: "Over 600 million microscopic alveoli air sacs provide a surface area as large as a tennis court!"
  },
  {
    icon: "🥪",
    q: "Where does 90% of all food nutrient absorption happen in the body?",
    options: ["The Stomach", "The Small Intestine", "The Large Intestine", "The Mouth"],
    answer: 1,
    info: "The small intestine is 22 feet long and lined with tiny villi fingers that absorb nutrients into the blood!"
  },
  {
    icon: "🦴",
    q: "How many living bones are found inside an adult human body?",
    options: ["106 Bones", "206 Bones", "306 Bones", "500 Bones"],
    answer: 1,
    info: "Adults have 206 bones; babies are born with around 270 soft bones that gradually fuse together!"
  }
];

function initQuiz() {
  const qIndexDisp = document.getElementById("q-index-disp");
  const qScoreDisp = document.getElementById("q-score-disp");
  const progressBar = document.getElementById("quiz-progress-bar");
  const qIcon = document.getElementById("q-icon");
  const qText = document.getElementById("q-text");
  const choicesContainer = document.getElementById("quiz-choices-container");
  const feedbackBanner = document.getElementById("quiz-feedback-banner");
  const feedbackText = document.getElementById("quiz-feedback-text");
  const nextBtn = document.getElementById("quiz-next-question-btn");

  const quizCard = document.getElementById("quiz-main-card");
  const certCard = document.getElementById("quiz-cert-card");
  const certScore = document.getElementById("cert-final-score");
  const retakeBtn = document.getElementById("retake-quiz-btn");

  let current = 0;
  let score = 0;
  let locked = false;

  function loadQ(idx) {
    locked = false;
    const item = QUIZ_QUESTIONS[idx];
    qIndexDisp.textContent = idx + 1;
    qIcon.textContent = item.icon;
    qText.textContent = item.q;
    progressBar.style.width = `${((idx + 1) / QUIZ_QUESTIONS.length) * 100}%`;
    feedbackBanner.classList.add("hidden");
    choicesContainer.innerHTML = "";

    item.options.forEach((opt, oIdx) => {
      const btn = document.createElement("button");
      btn.className = "quiz-btn";
      btn.textContent = `${String.fromCharCode(65 + oIdx)}. ${opt}`;
      btn.addEventListener("click", () => handleAnswer(oIdx, btn));
      choicesContainer.appendChild(btn);
    });
  }

  function handleAnswer(choiceIdx, btnEl) {
    if (locked) return;
    locked = true;

    const item = QUIZ_QUESTIONS[current];
    const allBtns = choicesContainer.querySelectorAll(".quiz-btn");

    if (choiceIdx === item.answer) {
      score++;
      qScoreDisp.textContent = score;
      btnEl.classList.add("correct");
      feedbackText.innerHTML = `🎉 <strong>Correct!</strong> ${item.info}`;
      feedbackBanner.style.borderColor = "#22c55e";
      sound.playSuccess();
    } else {
      btnEl.classList.add("wrong");
      allBtns[item.answer].classList.add("correct");
      feedbackText.innerHTML = `❌ <strong>Not quite!</strong> ${item.info}`;
      feedbackBanner.style.borderColor = "#ef4444";
      sound.playError();
    }

    feedbackBanner.classList.remove("hidden");
    nextBtn.textContent = current === QUIZ_QUESTIONS.length - 1 ? "View Certificate 🏆" : "Next Question ➔";
  }

  nextBtn.addEventListener("click", () => {
    if (current < QUIZ_QUESTIONS.length - 1) {
      current++;
      loadQ(current);
      sound.playBeep(580, 0.04);
    } else {
      quizCard.classList.add("hidden");
      certCard.classList.remove("hidden");
      certScore.textContent = `${score}/5`;
      sound.playSuccess();
    }
  });

  retakeBtn.addEventListener("click", () => {
    current = 0;
    score = 0;
    qScoreDisp.textContent = "0";
    certCard.classList.add("hidden");
    quizCard.classList.remove("hidden");
    loadQ(0);
    sound.playBeep(500, 0.05);
  });

  loadQ(0);
}

// =============================================================================
// 9. QR CODE & COPY LINK
// =============================================================================
function initQr() {
  const copyBtn = document.getElementById("copy-url-btn");
  const copyInput = document.getElementById("site-url-input");
  const copyAlert = document.getElementById("copy-alert");

  const openModal = document.getElementById("open-qr-modal-btn");
  const closeModal = document.getElementById("modal-close-btn");
  const dismissModal = document.getElementById("modal-dismiss-btn");
  const modalCopy = document.getElementById("modal-copy-btn");
  const modal = document.getElementById("qr-modal");

  function copy(val) {
    navigator.clipboard.writeText(val).then(() => {
      copyAlert.classList.add("show");
      setTimeout(() => copyAlert.classList.remove("show"), 2500);
      sound.playSuccess();
    }).catch(() => {
      copyInput.select();
      document.execCommand("copy");
      copyAlert.classList.add("show");
      setTimeout(() => copyAlert.classList.remove("show"), 2500);
    });
  }

  if (copyBtn) copyBtn.addEventListener("click", () => copy(copyInput.value));
  if (modalCopy) modalCopy.addEventListener("click", () => copy("https://sanchit196.github.io/body-systems/"));

  if (openModal) {
    openModal.addEventListener("click", () => {
      modal.classList.remove("hidden");
      sound.playBeep(600, 0.04);
    });
  }

  const hide = () => modal.classList.add("hidden");
  if (closeModal) closeModal.addEventListener("click", hide);
  if (dismissModal) dismissModal.addEventListener("click", hide);
  modal.addEventListener("click", e => { if (e.target === modal) hide(); });

  const audioToggle = document.getElementById("audio-toggle-btn");
  const audioIcon = document.getElementById("audio-icon");
  if (audioToggle) {
    audioToggle.addEventListener("click", () => {
      const on = sound.toggle();
      audioIcon.textContent = on ? "🔊" : "🔇";
      if (on) sound.playBeep(600, 0.04);
    });
  }
}

// =============================================================================
// INITIALIZE ON LOAD
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initExplorer();
  initEcg();
  initReflex();
  initBreath();
  initDigestion();
  initQuiz();
  initQr();
  console.log("Body Systems Project initialized! Ready for Middle School Science Exhibition.");
});
