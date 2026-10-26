// ==========================================
// DATA STRUCTURES
// ==========================================

const COMPARISON_DATA = [
  {
    param: "Land Acquisition Cost",
    gpv: "High (Major CAPEX constraint, ~1.6 ha/MW)",
    fpv: "Near Zero (Utilizes existing water surfaces)",
    type: "advantages",
    badge: "FPV Advantage",
    badgeColor: "bg-emerald-100 text-emerald-800"
  },
  {
    param: "Operating Temperature",
    gpv: "High (Significant thermal efficiency loss)",
    fpv: "Low (Water acts as convective heat sink, 2-8°C cooler)",
    type: "advantages",
    badge: "FPV Advantage",
    badgeColor: "bg-emerald-100 text-emerald-800"
  },
  {
    param: "Surface Albedo (Reflectivity)",
    gpv: "High (0.20 default, high bifacial gain)",
    fpv: "Low (0.05 - 0.11, limits rear-side generation)",
    type: "challenges",
    badge: "FPV Challenge",
    badgeColor: "bg-amber-100 text-amber-800"
  },
  {
    param: "Soiling & Dust Impact",
    gpv: "High (Severe in arid regions)",
    fpv: "Moderate (Reduced dust, but bird fouling increases)",
    type: "advantages",
    badge: "Neutral / Tradeoff",
    badgeColor: "bg-slate-100 text-slate-800"
  },
  {
    param: "Structural Foundation",
    gpv: "Rigid piling / Concrete ballast",
    fpv: "Dynamic mooring & buoyant HDPE floats",
    type: "challenges",
    badge: "Engineering Challenge",
    badgeColor: "bg-amber-100 text-amber-800"
  },
  {
    param: "Evaporative Benefits",
    gpv: "None",
    fpv: "Reduces water evaporation by 20% - 33%",
    type: "advantages",
    badge: "Key Environmental Benefit",
    badgeColor: "bg-teal-100 text-teal-800"
  }
];

const PROJECTS_DATA = [
  {
    id: "ramagundam",
    name: "NTPC Ramagundam",
    location: "Telangana, India",
    capacity: "100 MW",
    cost: "₹423 Crores ($51M)",
    waterBody: "Thermal Plant Balancing Ash Pond (500 acres)",
    mooring: "High-Modulus Polyethylene (HMPE) Rope Catenary",
    benefits: "Saves 3.25M m³ water/yr; avoids 210,000t CO2",
    highlights: "Designed to resist acidic coal ash leachate chemistry."
  },
  {
    id: "omkareshwar",
    name: "Omkareshwar Solar Park",
    location: "Madhya Pradesh, India",
    capacity: "600 MW (World's Largest)",
    cost: "₹3,000+ Crores",
    waterBody: "Omkareshwar Hydroelectric Dam Reservoir",
    mooring: "Multi-point Catenary with Clump Weights",
    benefits: "Integrated hydro-solar peak power dispatch",
    highlights: "Accommodates extreme 10-15 meter seasonal water level variance."
  },
  {
    id: "gedcol",
    name: "GEDCOL-NHPC JV",
    location: "Odisha, India",
    capacity: "500 MW (300MW Phase 1)",
    cost: "₹2,000+ Crores",
    waterBody: "Rengali Reservoir",
    mooring: "Flexible Compliant Mooring Array",
    benefits: "Massive regional decarbonization & transmission sharing",
    highlights: "Joint venture model optimizing hydroelectric grid tie-ins."
  },
  {
    id: "farniente",
    name: "Far Niente Winery",
    location: "California, USA",
    capacity: "175 kW (Historic Pioneer)",
    cost: "Commercial Prototype",
    waterBody: "Irrigation Reservoir",
    mooring: "Taut Polypropylene Mooring",
    benefits: "Preserved high-value vineyard land from panel placement",
    highlights: "First commercial FPV system installed worldwide (2008)."
  }
];

const MOORING_TYPES = [
  {
    id: "catenary",
    name: "Catenary Mooring",
    depth: "Deep Water (> 10m)",
    variance: "High Water Level Variance (10-15m)",
    mechanism: "Galvanized chain self-weight creates non-linear restoring force.",
    pros: "Smooth energy dissipation along seabed; handles extreme storm surges.",
    cons: "Large seabed footprint requirement."
  },
  {
    id: "taut",
    name: "Taut Mooring",
    depth: "Medium Water Depth (5-15m)",
    variance: "Low Water Level Variance",
    mechanism: "High-performance synthetic polymer ropes under constant tension.",
    pros: "Minimal spatial footprint on seabed; restricts horizontal surge/sway.",
    cons: "Risk of dynamic snap-loads if water drops cause slack."
  },
  {
    id: "compliant",
    name: "Compliant Hybrid",
    depth: "Variable Depth Waters",
    variance: "Moderate to High Variance",
    mechanism: "Integrates submerged clump weights or buoyancy floats along lines.",
    pros: "Spring-like dampening isolates platform from high-frequency wave fatigue.",
    cons: "Higher component complexity."
  },
  {
    id: "piles",
    name: "Vertical Guide Piles",
    depth: "Shallow Water (< 5m)",
    variance: "Moderate Variance",
    mechanism: "Steel/concrete piles driven into bed; collars permit vertical heave.",
    pros: "Zero horizontal drift; eliminates line breakage risk.",
    cons: "Transfers immense bending moments directly into seabed geology."
  }
];

const FMEA_DATA = [
  {
    id: "fmea1",
    risk: "Wave-Induced Dynamic Fatigue",
    severity: "high",
    sevLabel: "High Severity",
    sevColor: "bg-rose-100 text-rose-800",
    cause: "Continuous short-period wave excitation on pontoon connection joints.",
    impact: "Catastrophic warpage, joint shearing, raft delamination.",
    mitigation: "DNV-RP-0584 structural modeling; flexible multi-body constraint chains."
  },
  {
    id: "fmea2",
    risk: "Macro Biofouling (Quagga Mussels)",
    severity: "medium",
    sevLabel: "Medium Severity",
    sevColor: "bg-amber-100 text-amber-800",
    cause: "Aquatic organism colonization on submerged pontoon undersides.",
    impact: "Excess dead-weight load destroys buoyancy reserve factor.",
    mitigation: "Submarine ROV inspection; non-toxic anti-fouling coatings."
  },
  {
    id: "fmea3",
    risk: "Microplastic UV Degradation",
    severity: "medium",
    sevLabel: "Medium Severity",
    sevColor: "bg-amber-100 text-amber-800",
    cause: "Photo-oxidative scission of unfortified polyethylene matrix.",
    impact: "Microplastic shedding into drinking water reservoirs.",
    mitigation: "2.5% Carbon Black (22nm particle size) + HALS UV stabilization."
  },
  {
    id: "fmea4",
    risk: "Submarine Cable Shearing",
    severity: "high",
    sevLabel: "High Severity",
    sevColor: "bg-rose-100 text-rose-800",
    cause: "Bending radius violation at floating-to-underwater transition.",
    impact: "Dynamic cable short circuits, array power shutdown.",
    mitigation: "Articulated steel armor with strain-relief bend stiffeners."
  },
  {
    id: "fmea5",
    risk: "Potential Induced Degradation (PID)",
    severity: "high",
    sevLabel: "High Severity",
    sevColor: "bg-rose-100 text-rose-800",
    cause: "1500V DC bias combined with persistent 90%+ aquatic humidity.",
    impact: "Rapid cell power degradation up to 30%.",
    mitigation: "Mandatory IEC 62804 PID-free module certification & IP68 connectors."
  },
  {
    id: "fmea6",
    risk: "Limnological Hypoxia",
    severity: "medium",
    sevLabel: "Medium Severity",
    sevColor: "bg-amber-100 text-amber-800",
    cause: "Extensive surface coverage (>30%) blocking water sunlight penetration.",
    impact: "Dissolved oxygen drop, benthic macrophyte die-off.",
    mitigation: "Maintain open water corridors and limit coverage ratios."
  }
];

// Chart Instances Store
let charts = {};

// ==========================================
// INITIALIZATION & TAB SWITCHING
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  renderComparisonCards('all');
  renderProjects();
  renderMooringSelector();
  renderFMEACards('all');
  updateCalculator();
  initCharts();
});

function switchTab(tabId) {
  const tabs = ['overview', 'engineering', 'simulation', 'economics', 'ecotox'];
  
  tabs.forEach(t => {
    const sec = document.getElementById(`sec-${t}`);
    const btn = document.getElementById(`tab-${t}`);
    if (t === tabId) {
      sec.classList.remove('hidden');
      btn.className = "tab-btn px-3 py-2 text-xs sm:text-sm font-medium rounded-md bg-cyan-600 text-white whitespace-nowrap shadow-sm";
    } else {
      sec.classList.add('hidden');
      btn.className = "tab-btn px-3 py-2 text-xs sm:text-sm font-medium rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 whitespace-nowrap";
    }
  });

  // Resize charts when switching tabs to fix rendering dimensions
  setTimeout(() => {
    Object.values(charts).forEach(chart => chart && chart.resize());
  }, 50);
}

// ==========================================
// RENDER FUNCTIONS
// ==========================================

function renderComparisonCards(filter) {
  const grid = document.getElementById('comparisonCardsGrid');
  grid.innerHTML = '';

  const filtered = COMPARISON_DATA.filter(item => filter === 'all' || item.type === filter);

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = "bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-2 flex flex-col justify-between";
    card.innerHTML = `
      <div>
        <div class="flex justify-between items-start gap-2 mb-1">
          <span class="font-bold text-xs text-slate-900">${item.param}</span>
          <span class="text-[10px] font-bold px-2 py-0.5 rounded ${item.badgeColor}">${item.badge}</span>
        </div>
        <div class="text-xs space-y-1.5 mt-2">
          <div class="bg-white p-2 rounded border border-slate-100">
            <span class="text-slate-400 font-semibold text-[10px] uppercase block">Ground PV (GPV)</span>
            <span class="text-slate-700">${item.gpv}</span>
          </div>
          <div class="bg-cyan-50/50 p-2 rounded border border-cyan-100">
            <span class="text-cyan-800 font-semibold text-[10px] uppercase block">Floating PV (FPV)</span>
            <span class="text-slate-800 font-medium">${item.fpv}</span>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterComparison(type) {
  ['all', 'adv', 'chal'].forEach(t => {
    const btn = document.getElementById(`btn-comp-${t}`);
    if ((t === 'all' && type === 'all') || (t === 'adv' && type === 'advantages') || (t === 'chal' && type === 'challenges')) {
      btn.className = "px-3 py-1 text-xs font-semibold rounded bg-white text-slate-800 shadow-sm";
    } else {
      btn.className = "px-3 py-1 text-xs font-semibold rounded text-slate-600 hover:text-slate-900";
    }
  });
  renderComparisonCards(type);
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = '';

  PROJECTS_DATA.forEach(p => {
    const card = document.createElement('div');
    card.className = "bg-slate-50 border border-slate-200 rounded-lg p-4 cursor-pointer hover:border-cyan-500 hover:bg-cyan-50/30 transition-all";
    card.onclick = () => showProjectDetail(p);
    card.innerHTML = `
      <div class="flex justify-between items-start mb-2">
        <span class="font-bold text-sm text-slate-900">${p.name}</span>
        <span class="text-[10px] font-bold bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded">${p.capacity}</span>
      </div>
      <p class="text-xs text-slate-500 mb-2">📍 ${p.location}</p>
      <div class="text-[11px] text-slate-700 font-medium line-clamp-2">
        ${p.waterBody}
      </div>
      <div class="mt-3 text-[10px] text-cyan-700 font-semibold flex items-center gap-1">
        <span>Inspect Details</span> →
      </div>
    `;
    grid.appendChild(card);
  });
}

function showProjectDetail(p) {
  const box = document.getElementById('projectDetailBox');
  box.classList.remove('hidden');
  box.innerHTML = `
    <div class="flex justify-between items-start mb-3 border-b border-slate-200 pb-2">
      <div>
        <h4 class="font-bold text-slate-900 text-base">${p.name} (${p.capacity})</h4>
        <span class="text-xs text-slate-500">${p.location} • Capex: ${p.cost}</span>
      </div>
      <button onclick="document.getElementById('projectDetailBox').classList.add('hidden')" class="text-slate-400 hover:text-slate-700 font-bold text-sm">✕ Close</button>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
      <div>
        <span class="font-bold text-slate-700 block mb-0.5">Water Body & Area:</span>
        <span class="text-slate-600">${p.waterBody}</span>
      </div>
      <div>
        <span class="font-bold text-slate-700 block mb-0.5">Mooring Solution:</span>
        <span class="text-slate-600">${p.mooring}</span>
      </div>
      <div>
        <span class="font-bold text-slate-700 block mb-0.5">Environmental Benefits:</span>
        <span class="text-slate-600">${p.benefits}</span>
      </div>
    </div>
    <div class="mt-3 bg-white p-2.5 rounded border border-slate-200 text-xs text-slate-700">
      <strong>Key Engineering Highlight:</strong> ${p.highlights}
    </div>
  `;
}

function renderMooringSelector() {
  const container = document.getElementById('mooringTabButtons');
  container.innerHTML = '';

  MOORING_TYPES.forEach((m, idx) => {
    const btn = document.createElement('button');
    btn.id = `btn-mooring-${m.id}`;
    btn.onclick = () => selectMooring(m.id);
    btn.className = idx === 0 
      ? "px-2.5 py-1 text-xs font-semibold rounded bg-cyan-600 text-white"
      : "px-2.5 py-1 text-xs font-semibold rounded bg-slate-100 text-slate-700 hover:bg-slate-200";
    btn.innerText = m.name;
    container.appendChild(btn);
  });

  selectMooring(MOORING_TYPES[0].id);
}

function selectMooring(id) {
  const mooring = MOORING_TYPES.find(m => m.id === id);
  MOORING_TYPES.forEach(m => {
    const btn = document.getElementById(`btn-mooring-${m.id}`);
    if (btn) {
      btn.className = m.id === id 
        ? "px-2.5 py-1 text-xs font-semibold rounded bg-cyan-600 text-white"
        : "px-2.5 py-1 text-xs font-semibold rounded bg-slate-100 text-slate-700 hover:bg-slate-200";
    }
  });

  const display = document.getElementById('mooringDetailDisplay');
  display.innerHTML = `
    <div class="flex justify-between items-start border-b border-slate-200 pb-2">
      <div>
        <h4 class="font-bold text-slate-900 text-sm">${mooring.name}</h4>
        <span class="text-[11px] text-cyan-800 font-semibold">${mooring.depth} | ${mooring.variance}</span>
      </div>
    </div>
    <p class="text-xs text-slate-700 leading-relaxed">${mooring.mechanism}</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
      <div class="bg-emerald-50 border border-emerald-200 p-2 rounded">
        <span class="font-bold text-emerald-900 block text-[11px]">Advantage</span>
        <span class="text-emerald-800 text-[11px]">${mooring.pros}</span>
      </div>
      <div class="bg-amber-50 border border-amber-200 p-2 rounded">
        <span class="font-bold text-amber-900 block text-[11px]">Engineering Limitation</span>
        <span class="text-amber-800 text-[11px]">${mooring.cons}</span>
      </div>
    </div>
  `;
}

function renderFMEACards(severity) {
  const grid = document.getElementById('fmeaGrid');
  grid.innerHTML = '';

  const filtered = FMEA_DATA.filter(f => severity === 'all' || f.severity === severity);

  filtered.forEach(f => {
    const card = document.createElement('div');
    card.className = "bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-2 flex flex-col justify-between";
    card.innerHTML = `
      <div>
        <div class="flex justify-between items-start gap-2 mb-1">
          <span class="font-bold text-xs text-slate-900">${f.risk}</span>
          <span class="text-[10px] font-bold px-2 py-0.5 rounded ${f.sevColor}">${f.sevLabel}</span>
        </div>
        <div class="text-[11px] space-y-1.5 mt-2">
          <div>
            <span class="text-slate-400 font-semibold block">Root Cause:</span>
            <span class="text-slate-700">${f.cause}</span>
          </div>
          <div>
            <span class="text-slate-400 font-semibold block">System Impact:</span>
            <span class="text-slate-700">${f.impact}</span>
          </div>
        </div>
      </div>
      <div class="bg-white p-2 rounded border border-slate-200 text-[11px] mt-2">
        <span class="font-bold text-teal-800 block">Mitigation Strategy:</span>
        <span class="text-slate-600">${f.mitigation}</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterFMEA(sev) {
  ['all', 'high', 'med'].forEach(s => {
    const btn = document.getElementById(`fmea-btn-${s}`);
    if ((s === 'all' && sev === 'all') || (s === 'high' && sev === 'high') || (s === 'med' && sev === 'medium')) {
      btn.className = "px-2.5 py-1 font-semibold rounded bg-slate-800 text-white";
    } else if (s === 'high') {
      btn.className = "px-2.5 py-1 font-semibold rounded bg-rose-100 text-rose-800";
    } else if (s === 'med') {
      btn.className = "px-2.5 py-1 font-semibold rounded bg-amber-100 text-amber-800";
    } else {
      btn.className = "px-2.5 py-1 font-semibold rounded bg-slate-100 text-slate-700";
    }
  });
  renderFMEACards(sev);
}

// ==========================================
// MATH ENGINE: THERMODYNAMIC CALCULATOR
// ==========================================

function updateCalculator() {
  const capacity = parseFloat(document.getElementById('inputCapacity').value);
  const temp = parseFloat(document.getElementById('inputTemp').value);
  const wind = parseFloat(document.getElementById('inputWind').value);
  const tariff = parseFloat(document.getElementById('inputTariff').value);

  document.getElementById('valCapacity').innerText = `${capacity} MW`;
  document.getElementById('valTemp').innerText = `${temp} °C`;
  document.getElementById('valWind').innerText = `${wind} m/s`;
  document.getElementById('valTariff').innerText = `$${tariff.toFixed(3)} / kWh`;

  // Thermodynamics Formula Approximation:
  // Delta Cooling = Base Water Effect (3.5°C) + Wind Factor (wind * 0.4) + Temp Factor ((temp-25) * 0.1)
  const coolingDelta = 3.2 + (wind * 0.35) + (Math.max(0, temp - 25) * 0.08);
  
  // Temperature coefficient efficiency boost = coolingDelta * 0.45% per °C
  const effGainPct = coolingDelta * 0.45;

  // Base Annual Generation = MW * 1650 MWh/MW/yr
  const baseMWh = capacity * 1650;
  const energyBoostMWh = baseMWh * (effGainPct / 100);

  // Water Evaporation Saved = ~2500 m³ per MW per year
  const waterSavedM3 = capacity * 2550;

  // Monetized Surplus = energyBoostMWh * 1000 kWh/MWh * tariff
  const revenueSurplus = energyBoostMWh * 1000 * tariff;

  document.getElementById('calcCoolingDelta').innerText = `-${coolingDelta.toFixed(1)} °C`;
  document.getElementById('calcEnergyBoost').innerText = `+${energyBoostMWh.toFixed(0)} MWh/yr`;
  document.getElementById('calcWaterSaved').innerText = `${(waterSavedM3 / 1000).toFixed(1)}k m³`;
  document.getElementById('calcRevenueSurplus').innerText = `$${(revenueSurplus / 1000).toFixed(1)}k / yr`;
}

// ==========================================
// CHART.JS INITIALIZATION
// ==========================================

function initCharts() {
  // Common Chart Config Defaults
  Chart.defaults.font.family = "system-ui, -apple-system, sans-serif";
  Chart.defaults.font.size = 11;
  Chart.defaults.color = "#64748b";

  // 1. Temperature vs Efficiency Chart
  const ctxTemp = document.getElementById('tempEfficiencyChart').getContext('2d');
  charts.tempEfficiency = new Chart(ctxTemp, {
    type: 'line',
    data: {
      labels: ['200 W/m²', '400 W/m²', '600 W/m²', '800 W/m²', '1000 W/m² (Peak)'],
      datasets: [
        {
          label: 'Ground PV Cell Temp (°C)',
          data: [32, 43, 54, 63, 71],
          borderColor: '#ef4444',
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          fill: false,
          tension: 0.3,
          borderWidth: 2
        },
        {
          label: 'Floating PV Cell Temp (°C)',
          data: [28, 37, 46, 54, 61],
          borderColor: '#0284c7',
          backgroundColor: 'rgba(2, 132, 199, 0.1)',
          fill: true,
          tension: 0.3,
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            afterBody: (context) => {
              return 'Floating PV operates ~6-10°C cooler under peak irradiance.';
            }
          }
        }
      },
      scales: {
        y: {
          title: { display: true, text: 'Cell Temperature (°C)' },
          grid: { color: '#f1f5f9' }
        },
        x: { grid: { display: false } }
      }
    }
  });

  // 2. Hydrodynamic Radar Spectrum
  const ctxHydro = document.getElementById('hydrodynamicChart').getContext('2d');
  charts.hydrodynamic = new Chart(ctxHydro, {
    type: 'radar',
    data: {
      labels: ['Surge (X-Trans)', 'Sway (Y-Trans)', 'Heave (Z-Trans)', 'Roll (X-Rot)', 'Pitch (Y-Rot)', 'Yaw (Z-Rot)'],
      datasets: [
        {
          label: 'Single Floating Raft Excitation',
          data: [85, 40, 90, 30, 80, 25],
          borderColor: '#f59e0b',
          backgroundColor: 'rgba(245, 158, 11, 0.2)',
          borderWidth: 2
        },
        {
          label: 'Interconnected Array (Damped)',
          data: [35, 15, 45, 10, 30, 10],
          borderColor: '#0d9488',
          backgroundColor: 'rgba(13, 148, 136, 0.2)',
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          angleLines: { color: '#e2e8f0' },
          grid: { color: '#cbd5e1' },
          suggestedMin: 0,
          suggestedMax: 100
        }
      }
    }
  });

  // 3. CAPEX Structure Doughnut Chart
  const ctxCapex = document.getElementById('capexChart').getContext('2d');
  charts.capex = new Chart(ctxCapex, {
    type: 'doughnut',
    data: {
      labels: ['Photovoltaic Modules', 'Structural BOS (HDPE/Anchors)', 'Electrical BOS (Cable/Inverters)', 'Marine Logistics & Installation'],
      datasets: [{
        data: [53, 24, 11, 12],
        backgroundColor: [
          '#0284c7', // Modules
          '#0d9488', // SBOS
          '#f59e0b', // EBOS
          '#64748b'  // Installation
        ],
        borderWidth: 2,
        borderColor: '#ffffff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { boxWidth: 12, padding: 10 }
        }
      }
    }
  });

  // 4. Regional Market Growth Stacked Bar Chart
  const ctxMarket = document.getElementById('marketChart').getContext('2d');
  charts.market = new Chart(ctxMarket, {
    type: 'bar',
    data: {
      labels: ['2022', '2024', '2026', '2028', '2030', '2033 (Forecast)'],
      datasets: [
        {
          label: 'Asia-Pacific (APAC)',
          data: [3.2, 8.5, 18.0, 31.0, 44.0, 57.0],
          backgroundColor: '#0284c7'
        },
        {
          label: 'Europe',
          data: [0.8, 1.8, 3.5, 6.0, 8.5, 11.0],
          backgroundColor: '#0d9488'
        },
        {
          label: 'Americas & Rest of World',
          data: [0.4, 1.1, 2.2, 3.8, 5.5, 9.0],
          backgroundColor: '#94a3b8'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom', labels: { boxWidth: 12 } }
      },
      scales: {
        x: { stacked: true, grid: { display: false } },
        y: {
          stacked: true,
          title: { display: true, text: 'Cumulative Capacity (GW)' },
          grid: { color: '#f1f5f9' }
        }
      }
    }
  });
}
