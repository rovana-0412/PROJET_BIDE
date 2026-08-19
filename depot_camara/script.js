// Base de données des stations par région
const dataRegions = {
  maritime: {
    nom: "Maritime",
    stations: [
      { nom: "Lomé — Agoè", horaire: "07:00 — 19:00" },
      { nom: "Lomé — Port", horaire: "07:00 — 19:00" },
      { nom: "Tsévié Centre", horaire: "07:30 — 18:30" },
      { nom: "Aného Littoral", horaire: "07:00 — 18:00" },
      { nom: "Vogan Route Nationale", horaire: "07:00 — 19:00" }
    ]
  },
  plateaux: {
    nom: "Plateaux",
    stations: [
      { nom: "Atakpamé Gare", horaire: "07:00 — 18:30" },
      { nom: "Kpalimé Ouest", horaire: "07:00 — 18:00" },
      { nom: "Notsé Centre", horaire: "07:30 — 18:30" },
      { nom: "Amou Oblo", horaire: "07:00 — 18:00" },
      { nom: "Badou Route", horaire: "07:30 — 17:30" }
    ]
  },
  centrale: {
    nom: "Centrale",
    stations: [
      { nom: "Sokodé Grand Marché", horaire: "07:00 — 19:00" },
      { nom: "Blitta Sud", horaire: "07:30 — 18:00" },
      { nom: "Tchamba Centre", horaire: "08:00 — 18:00" },
      { nom: "Sotouboua", horaire: "07:30 — 18:00" }
    ]
  },
  kara: {
    nom: "Kara",
    stations: [
      { nom: "Kara Douane", horaire: "07:00 — 19:00" },
      { nom: "Bassar Ville", horaire: "07:30 — 18:00" },
      { nom: "Niamtougou Centre", horaire: "07:30 — 18:00" }
    ]
  },
  savanes: {
    nom: "Savanes",
    stations: [
      { nom: "Dapaong Centre", horaire: "07:00 — 18:00" },
      { nom: "Mango Pont", horaire: "07:30 — 18:00" },
      { nom: "Cinkassé Frontière", horaire: "07:00 — 19:00" },
      { nom: "Tandjouaré", horaire: "07:30 — 17:30" }
    ]
  }
};

// DOM Elements
const selectRegion = document.getElementById('selectRegion');
const selectStation = document.getElementById('selectStation');
const regionTitle = document.getElementById('regionTitle');
const stationCount = document.getElementById('stationCount');
const activeStationName = document.getElementById('activeStationName');
const stationsList = document.getElementById('stationsList');

// Synchronisation UI
function updateRegionUI(regionKey) {
  const region = dataRegions[regionKey];
  if (!region) return;

  regionTitle.textContent = region.nom;
  stationCount.textContent = `${String(region.stations.length).padStart(2, '0')} stations`;

  document.querySelectorAll('.map-region').forEach(path => {
    path.classList.remove('active');
  });
  const activePath = document.getElementById(`region-${regionKey}`);
  if (activePath) {
    activePath.classList.add('active');
  }

  selectRegion.value = regionKey;

  selectStation.innerHTML = '';
  region.stations.forEach(st => {
    const opt = document.createElement('option');
    opt.value = st.nom;
    opt.textContent = `${region.nom} — ${st.nom}`;
    selectStation.appendChild(opt);
  });

  stationsList.innerHTML = '';
  region.stations.forEach((st, index) => {
    const div = document.createElement('div');
    div.className = `station-row d-flex justify-content-between align-items-center border-bottom ${index === 0 ? 'active' : ''}`;
    div.innerHTML = `
      <div class="d-flex align-items-center gap-3">
        <span class="small fw-bold text-danger">${String(index + 1).padStart(2, '0')}</span>
        <span class="fw-semibold">${st.nom}</span>
      </div>
      <span class="small text-muted"><i class="bi bi-clock me-1"></i> ${st.horaire}</span>
    `;

    div.addEventListener('click', () => {
      document.querySelectorAll('.station-row').forEach(r => r.classList.remove('active'));
      div.classList.add('active');
      activeStationName.textContent = st.nom;
      selectStation.value = st.nom;
    });

    stationsList.appendChild(div);
  });

  if (region.stations.length > 0) {
    activeStationName.textContent = region.stations[0].nom;
  }
}

// Interactivité Carte
document.querySelectorAll('.map-region').forEach(path => {
  path.addEventListener('click', (e) => {
    const regionKey = e.target.getAttribute('data-region');
    updateRegionUI(regionKey);
  });
});

selectRegion.addEventListener('change', (e) => updateRegionUI(e.target.value));

selectStation.addEventListener('change', (e) => {
  const selectedName = e.target.value;
  activeStationName.textContent = selectedName;
  document.querySelectorAll('.station-row').forEach(row => {
    row.classList.toggle('active', row.textContent.includes(selectedName));
  });
});

// Modal RDV
function ouvrirService(serviceNom) {
  document.getElementById('modalServiceTitle').textContent = serviceNom;
  document.getElementById('modalSelectBesoin').value = serviceNom;
  const modal = new bootstrap.Modal(document.getElementById('modalRDV'));
  modal.show();
}

document.getElementById('formDemande').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Votre demande a été enregistrée avec succès !');
  bootstrap.Modal.getInstance(document.getElementById('modalRDV')).hide();
});

// Init
updateRegionUI('maritime');