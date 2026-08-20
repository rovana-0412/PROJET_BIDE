// Data initiale des 5 Régions et 25 Villes du Togo
let togoNetworkData = {
  maritime: {
    name: "Maritime",
    stations: [
      { id: "m1", city: "Lomé", station: "Lomé — Agoè", manager: "Kodjo Amégée", phone: "+228 90 01 11 22", statut: "Actif" },
      { id: "m2", city: "Tsévié", station: "Tsévié Centre", manager: "Kossi Tossou", phone: "+228 90 01 11 23", statut: "Actif" },
      { id: "m3", city: "Aného", station: "Aného Littoral", manager: "Abla Lawson", phone: "+228 90 01 11 24", statut: "Actif" },
      { id: "m4", city: "Tabligbo", station: "Tabligbo Usine", manager: "Yao Mensah", phone: "+228 90 01 11 25", statut: "Actif" },
      { id: "m5", city: "Vogan", station: "Vogan Marché", manager: "Afi Mawuli", phone: "+228 90 01 11 26", statut: "Actif" }
    ]
  },
  plateaux: {
    name: "Plateaux",
    stations: [
      { id: "p1", city: "Atakpamé", station: "Atakpamé Gare", manager: "Michel Akakpo", phone: "+228 91 02 22 31", statut: "Actif" },
      { id: "p2", city: "Kpalimé", station: "Kpalimé Cascades", manager: "Sonia Gbégnon", phone: "+228 91 02 22 32", statut: "Actif" },
      { id: "p3", city: "Badou", station: "Badou Centre", manager: "Komi Adaglo", phone: "+228 91 02 22 33", statut: "Actif" },
      { id: "p4", city: "Anié", station: "Anié Route Nationale", manager: "Koffi Djobo", phone: "+228 91 02 22 34", statut: "Actif" },
      { id: "p5", city: "Notsé", station: "Notsé Agora", manager: "Esaïe Agbèko", phone: "+228 91 02 22 35", statut: "Actif" }
    ]
  },
  centrale: {
    name: "Centrale",
    stations: [
      { id: "c1", city: "Sokodé", station: "Sokodé Grand Marché", manager: "Ouro-Sama Fousseni", phone: "+228 92 03 33 41", statut: "Actif" },
      { id: "c2", city: "Tchamba", station: "Tchamba Voie Cotonou", manager: "Ali Koriko", phone: "+228 92 03 33 42", statut: "Actif" },
      { id: "c3", city: "Sotouboua", station: "Sotouboua Carrefour", manager: "Issa Traoré", phone: "+228 92 03 33 43", statut: "Actif" },
      { id: "c4", city: "Blitta", station: "Blitta Gare", manager: "Mamadou Tchagnao", phone: "+228 92 03 33 44", statut: "Actif" },
      { id: "c5", city: "Djarkpanga", station: "Djarkpanga Ouest", manager: "Salifou Tairou", phone: "+228 92 03 33 45", statut: "Actif" }
    ]
  },
  kara: {
    name: "Kara",
    stations: [
      { id: "k1", city: "Kara", station: "Kara Douane", manager: "Esaïe Bakali", phone: "+228 93 04 44 51", statut: "Actif" },
      { id: "k2", city: "Bassar", station: "Bassar Yam", manager: "Gaston Gnassingbé", phone: "+228 93 04 44 52", statut: "Actif" },
      { id: "k3", city: "Niamtougou", station: "Niamtougou Aéroport", manager: "Paul Bataka", phone: "+228 93 04 44 53", statut: "Actif" },
      { id: "k4", city: "Kétao", station: "Kétao Frontière", manager: "Antoine Kpao", phone: "+228 93 04 44 54", statut: "Actif" },
      { id: "k5", city: "Guérin-Kouka", station: "Guérin-Kouka Pistes", manager: "Lucien Patcha", phone: "+228 93 04 44 55", statut: "Actif" }
    ]
  },
  savanes: {
    name: "Savanes",
    stations: [
      { id: "s1", city: "Dapaong", station: "Dapaong Centre", manager: "Bambogue Yentchabré", phone: "+228 90 05 55 61", statut: "Actif" },
      { id: "s2", city: "Mango", station: "Mango Oti", manager: "Moussa Kombate", phone: "+228 90 05 55 62", statut: "Actif" },
      { id: "s3", city: "Mandouri", station: "Mandouri Nord", manager: "Lalle Kanfitine", phone: "+228 90 05 55 63", statut: "Actif" },
      { id: "s4", city: "Cinkassé", station: "Cinkassé Post-Frontière", manager: "Tchaboré Naki", phone: "+228 90 05 55 64", statut: "Actif" },
      { id: "s5", city: "Tandjouaré", station: "Tandjouaré Collines", manager: "Kombate Sanwogou", phone: "+228 90 05 55 65", statut: "Actif" }
    ]
  }
};

const mockClients = [
  { id: 1, nom: "Kossi Lawson", email: "kossi@gmail.com", tel: "+228 90 12 34 56", region: "Maritime", date: "18/08/2026" },
  { id: 2, nom: "Abla Tossou", email: "abla.t@yahoo.fr", tel: "+228 91 88 77 66", region: "Plateaux", date: "17/08/2026" },
  { id: 3, nom: "Yao Adom", email: "adom.y@hotmail.com", tel: "+228 92 11 22 33", region: "Centrale", date: "15/08/2026" }
];

const mockPendingGest = [
  { id: 101, nom: "Boris Kouma", email: "b.kouma@bide.tg", region: "Plateaux", city: "Kpalimé" },
  { id: 102, nom: "Fatimatou Bawa", email: "f.bawa@bide.tg", region: "Kara", city: "Kara" }
];

const mockDemandes = [
  { id: "REQ-101", client: "Kossi Lawson", service: "Réparation d'engins", station: "Lomé — Agoè", date: "Aujourd'hui 14:20", statut: "En cours" },
  { id: "REQ-102", client: "Abla Tossou", service: "Lavage & entretien", station: "Atakpamé Gare", date: "Aujourd'hui 11:05", statut: "Terminé" },
  { id: "REQ-103", client: "Yao Adom", service: "Remorquage longue distance", station: "Sokodé Grand Marché", date: "Hier 18:30", statut: "En attente" }
];

let gestToDelete = null;

// Navigation Onglets
document.querySelectorAll('#adminMenu .nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    switchSection(link.getAttribute('data-section'));
  });
});

function switchSection(sectionKey) {
  document.querySelectorAll('#adminMenu .nav-link').forEach(l => l.classList.remove('active'));
  document.querySelectorAll('.admin-tab-section').forEach(sec => sec.classList.remove('active'));

  const activeLink = document.querySelector(`#adminMenu .nav-link[data-section="${sectionKey}"]`);
  const activeSection = document.getElementById(`section-${sectionKey}`);

  if (activeLink && activeSection) {
    activeLink.classList.add('active');
    activeSection.classList.add('active');

    const titles = {
      overview: "Vue d'ensemble",
      regions: "Réseau Togo — 5 Régions & 25 Villes",
      gestionnaires: "Gestionnaires de Station",
      clients: "Clients Inscrits",
      demandes: "Suivi des Demandes de Service"
    };
    document.getElementById('sectionTitle').textContent = titles[sectionKey] || "Administration";
  }
}

// Rendus des données
function renderDashboardData() {
  document.getElementById('kpiClients').textContent = mockClients.length;
  document.getElementById('badgeClients').textContent = mockClients.length;
  document.getElementById('badgePendingGest').textContent = mockPendingGest.length;

  let totalGest = 0;
  let gestRows = "";

  Object.keys(togoNetworkData).forEach(rKey => {
    const reg = togoNetworkData[rKey];
    reg.stations.forEach(s => {
      totalGest++;
      gestRows += `
        <tr>
          <td class="fw-bold">${s.manager}</td>
          <td><span class="badge bg-dark">${reg.name}</span></td>
          <td>${s.station} (${s.city})</td>
          <td>${s.phone}</td>
          <td>
            <span class="badge ${s.statut === 'Actif' ? 'bg-success' : 'bg-secondary'}">${s.statut}</span>
          </td>
          <td class="text-center">
            <div class="btn-group btn-group-sm">
              <button class="btn btn-light border text-primary" title="Modifier / Muter" onclick="ouvrirEditModal('${rKey}', '${s.id}')">
                <i class="bi bi-pencil-square"></i>
              </button>
              <button class="btn btn-light border text-danger" title="Supprimer" onclick="ouvrirDeleteModal('${rKey}', '${s.id}', '${s.manager}')">
                <i class="bi bi-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    });
  });

  document.getElementById('kpiGestionnaires').textContent = totalGest;
  document.getElementById('gestionnairesTable').innerHTML = gestRows;

  // Demandes
  document.getElementById('recentDemandesTable').innerHTML = mockDemandes.map(d => `
    <tr>
      <td class="fw-bold">${d.client}</td>
      <td>${d.service}</td>
      <td><span class="badge bg-light text-dark border">${d.station}</span></td>
      <td>
        <span class="badge ${d.statut === 'Terminé' ? 'bg-success-subtle text-success' : d.statut === 'En cours' ? 'bg-warning-subtle text-warning' : 'bg-secondary-subtle text-secondary'}">
          ${d.statut}
        </span>
      </td>
    </tr>
  `).join('');

  // Pending
  document.getElementById('pendingGestList').innerHTML = mockPendingGest.map(g => `
    <div class="p-3 bg-light border-start border-3 border-danger d-flex justify-content-between align-items-center">
      <div>
        <div class="fw-bold small">${g.nom}</div>
        <div class="text-muted" style="font-size:0.75rem;">${g.email} • ${g.city} (${g.region})</div>
      </div>
      <button class="btn btn-sm btn-red" onclick="alert('Gestionnaire validé !')">Affecter</button>
    </div>
  `).join('');

  // Clients
  document.getElementById('clientsTable').innerHTML = mockClients.map(c => `
    <tr>
      <td class="fw-bold">${c.nom}</td>
      <td>${c.email}</td>
      <td>${c.tel}</td>
      <td>${c.region}</td>
      <td>${c.date}</td>
      <td><button class="btn btn-sm btn-light border"><i class="bi bi-eye"></i></button></td>
    </tr>
  `).join('');

  // All demandes
  document.getElementById('allDemandesTable').innerHTML = mockDemandes.map(d => `
    <tr>
      <td><code>${d.id}</code></td>
      <td class="fw-bold">${d.client}</td>
      <td>${d.service}</td>
      <td>${d.station}</td>
      <td>${d.date}</td>
      <td><span class="badge bg-danger">${d.statut}</span></td>
    </tr>
  `).join('');
}

function renderStationsGrid(filter = "toutes") {
  const container = document.getElementById('gridAdminStations');
  container.innerHTML = "";

  Object.keys(togoNetworkData).forEach(regionKey => {
    if (filter === "toutes" || filter === regionKey) {
      const reg = togoNetworkData[regionKey];
      reg.stations.forEach(st => {
        container.innerHTML += `
          <div class="col-md-6 col-lg-4">
            <div class="admin-station-card shadow-sm">
              <div class="d-flex justify-content-between align-items-center mb-1">
                <span class="badge bg-dark text-white rounded-0 small">${reg.name.toUpperCase()}</span>
                <span class="small fw-bold text-danger"><i class="bi bi-geo-alt"></i> ${st.city}</span>
              </div>
              <h6 class="fw-bold text-dark mt-2 mb-1">${st.station}</h6>
              <div class="small text-muted mb-2"><i class="bi bi-person-badge"></i> ${st.manager}</div>
              <div class="d-flex justify-content-between align-items-center pt-2 border-top">
                <span class="small text-secondary">${st.phone}</span>
                <span class="badge ${st.statut === 'Actif' ? 'bg-success-subtle text-success' : 'bg-secondary-subtle text-secondary'}">${st.statut}</span>
              </div>
            </div>
          </div>
        `;
      });
    }
  });
}

// --------------------------------------------------
// GESTION DU MODAL D'ÉDITION ET MUTATION
// --------------------------------------------------
function ouvrirEditModal(regionKey, gestId) {
  const station = togoNetworkData[regionKey].stations.find(s => s.id === gestId);
  if (!station) return;

  document.getElementById('editGestId').value = gestId;
  document.getElementById('editOldRegionKey').value = regionKey;
  document.getElementById('editNom').value = station.manager;
  document.getElementById('editPhone').value = station.phone;
  document.getElementById('editStatut').value = station.statut || "Actif";

  document.getElementById('editSelectRegion').value = regionKey;
  updateEditVilles(regionKey, station.station);

  const modal = new bootstrap.Modal(document.getElementById('modalEditGestionnaire'));
  modal.show();
}

function updateEditVilles(regionKey, selectedStationName = null) {
  const selectStation = document.getElementById('editSelectStation');
  selectStation.innerHTML = "";
  if (togoNetworkData[regionKey]) {
    togoNetworkData[regionKey].stations.forEach(st => {
      const opt = document.createElement('option');
      opt.value = st.station;
      opt.textContent = `${st.city} — ${st.station}`;
      if (selectedStationName && st.station === selectedStationName) {
        opt.selected = true;
      }
      selectStation.appendChild(opt);
    });
  }
}

document.getElementById('editSelectRegion').addEventListener('change', (e) => {
  updateEditVilles(e.target.value);
});

// Soumission du formulaire d'édition / mutation
document.getElementById('formEditGestionnaire').addEventListener('submit', (e) => {
  e.preventDefault();

  const gestId = document.getElementById('editGestId').value;
  const oldRegionKey = document.getElementById('editOldRegionKey').value;
  const newRegionKey = document.getElementById('editSelectRegion').value;
  const newStationName = document.getElementById('editSelectStation').value;
  const newNom = document.getElementById('editNom').value;
  const newPhone = document.getElementById('editPhone').value;
  const newStatut = document.getElementById('editStatut').value;

  // Récupérer et retirer l'ancien gestionnaire
  let currentGest = null;
  const oldStationIndex = togoNetworkData[oldRegionKey].stations.findIndex(s => s.id === gestId);
  if (oldStationIndex !== -1) {
    currentGest = togoNetworkData[oldRegionKey].stations[oldStationIndex];
    togoNetworkData[oldRegionKey].stations.splice(oldStationIndex, 1);
  }

  // Appliquer les nouvelles infos
  currentGest.manager = newNom;
  currentGest.phone = newPhone;
  currentGest.statut = newStatut;

  // Si réaffectation dans une nouvelle station
  const targetStation = togoNetworkData[newRegionKey].stations.find(s => s.station === newStationName);
  if (targetStation) {
    targetStation.manager = newNom;
    targetStation.phone = newPhone;
    targetStation.statut = newStatut;
  } else {
    // Si la station n'existait pas encore, on la rajoute
    currentGest.station = newStationName;
    togoNetworkData[newRegionKey].stations.push(currentGest);
  }

  bootstrap.Modal.getInstance(document.getElementById('modalEditGestionnaire')).hide();
  renderDashboardData();
  renderStationsGrid();
  alert('Gestionnaire et affectation mis à jour avec succès !');
});

// --------------------------------------------------
// GESTION DU MODAL DE SUPPRESSION
// --------------------------------------------------
function ouvrirDeleteModal(regionKey, gestId, gestName) {
  gestToDelete = { regionKey, gestId };
  document.getElementById('deleteGestName').textContent = gestName;
  const modal = new bootstrap.Modal(document.getElementById('modalDeleteGestionnaire'));
  modal.show();
}

document.getElementById('btnConfirmDelete').addEventListener('click', () => {
  if (gestToDelete) {
    const { regionKey, gestId } = gestToDelete;
    const idx = togoNetworkData[regionKey].stations.findIndex(s => s.id === gestId);
    if (idx !== -1) {
      togoNetworkData[regionKey].stations.splice(idx, 1);
    }
    gestToDelete = null;
    bootstrap.Modal.getInstance(document.getElementById('modalDeleteGestionnaire')).hide();
    renderDashboardData();
    renderStationsGrid();
  }
});

// Modal Ajout Dynamique
document.getElementById('modalSelectRegion').addEventListener('change', (e) => {
  updateModalVilles(e.target.value);
});

function updateModalVilles(regionKey) {
  const stationSelect = document.getElementById('modalSelectStation');
  stationSelect.innerHTML = "";
  if (togoNetworkData[regionKey]) {
    togoNetworkData[regionKey].stations.forEach(st => {
      stationSelect.innerHTML += `<option value="${st.station}">${st.city} — ${st.station}</option>`;
    });
  }
}

document.getElementById('formAddGestionnaire').addEventListener('submit', (e) => {
  e.preventDefault();
  const regionKey = document.getElementById('modalSelectRegion').value;
  const stationName = document.getElementById('modalSelectStation').value;
  const nom = document.getElementById('addNom').value;
  const phone = document.getElementById('addPhone').value;

  const targetStation = togoNetworkData[regionKey].stations.find(s => s.station === stationName);
  if (targetStation) {
    targetStation.manager = nom;
    targetStation.phone = phone;
    targetStation.statut = "Actif";
  }

  bootstrap.Modal.getInstance(document.getElementById('modalAddGestionnaire')).hide();
  renderDashboardData();
  renderStationsGrid();
  alert('Gestionnaire ajouté et affecté avec succès !');
});

// Filtre
document.getElementById('adminFilterRegion').addEventListener('change', (e) => {
  renderStationsGrid(e.target.value);
});

// Init
renderStationsGrid();
renderDashboardData();
updateModalVilles('maritime');