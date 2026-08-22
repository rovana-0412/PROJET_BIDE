// Données initiales par défaut du Réseau Togo
const defaultTogoNetworkData = {
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

let togoNetworkData = {};

// Gestion de la mémoire locale (Persistance)
function loadFromStorage() {
  const savedData = localStorage.getItem('togoNetworkData');
  if (savedData) {
    togoNetworkData = JSON.parse(savedData);
  } else {
    togoNetworkData = JSON.parse(JSON.stringify(defaultTogoNetworkData));
    saveToStorage();
  }
}

function saveToStorage() {
  localStorage.setItem('togoNetworkData', JSON.stringify(togoNetworkData));
}

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

// ==========================================
// COUCHE "API" — NEWSLETTER
// ==========================================
// Ces fonctions imitent la forme d'un futur appel réseau (async + Promise).
// Aujourd'hui elles lisent/écrivent dans localStorage. Le jour où le
// backend existera, il suffira de remplacer le CORPS de chaque fonction
// par un vrai `fetch('/api/newsletter/...')` — le reste du code
// (render, formulaires, etc.) n'aura pas besoin de changer.

const defaultSubscribers = [
  { id: "sub1", nom: "Ama Dovi", email: "ama.dovi@gmail.com", region: "Maritime", origine: "Site web", statut: "Actif", date: "12/08/2026" },
  { id: "sub2", nom: "Kokou Awuma", email: "kokou.awuma@yahoo.fr", region: "Kara", origine: "Station", statut: "Actif", date: "15/08/2026" },
  { id: "sub3", nom: "Essohanam Bissa", email: "essohanam.b@hotmail.com", region: "Centrale", origine: "Site web", statut: "Actif", date: "19/08/2026" }
];

const defaultCampaigns = [
  { id: "camp1", sujet: "Bienvenue chez Bidè", message: "Merci de nous avoir rejoint !", audience: "Tous", date: "10/08/2026", envoyeA: 3 }
];

function NewsletterApi_load(key, fallback) {
  const saved = localStorage.getItem(key);
  return saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(fallback));
}

function NewsletterApi_save(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

const Api = {
  async getSubscribers() {
    // Futur backend : return fetch('/api/newsletter/subscribers').then(r => r.json());
    return NewsletterApi_load('bideNewsletterSubscribers', defaultSubscribers);
  },
  async addSubscriber(subscriber) {
    // Futur backend : return fetch('/api/newsletter/subscribers', { method: 'POST', body: JSON.stringify(subscriber) });
    const list = await this.getSubscribers();
    const newSub = {
      id: 'sub' + Date.now(),
      statut: 'Actif',
      date: new Date().toLocaleDateString('fr-FR'),
      region: subscriber.region || '—',
      ...subscriber
    };
    list.push(newSub);
    NewsletterApi_save('bideNewsletterSubscribers', list);
    return newSub;
  },
  async deleteSubscriber(id) {
    // Futur backend : return fetch(`/api/newsletter/subscribers/${id}`, { method: 'DELETE' });
    const list = await this.getSubscribers();
    const filtered = list.filter(s => s.id !== id);
    NewsletterApi_save('bideNewsletterSubscribers', filtered);
    return true;
  },
  async getCampaigns() {
    // Futur backend : return fetch('/api/newsletter/campaigns').then(r => r.json());
    return NewsletterApi_load('bideNewsletterCampaigns', defaultCampaigns);
  },
  async sendCampaign(campaign) {
    // Futur backend : return fetch('/api/newsletter/campaigns', { method: 'POST', body: JSON.stringify(campaign) });
    const subs = await this.getSubscribers();
    const targetCount = campaign.audience === 'Tous'
      ? subs.filter(s => s.statut === 'Actif').length
      : subs.filter(s => s.statut === 'Actif' && s.region === campaign.audience).length;

    const campaigns = await this.getCampaigns();
    const newCampaign = {
      id: 'camp' + Date.now(),
      date: new Date().toLocaleDateString('fr-FR'),
      envoyeA: targetCount,
      ...campaign
    };
    campaigns.unshift(newCampaign);
    NewsletterApi_save('bideNewsletterCampaigns', campaigns);
    return newCampaign;
  }
};

async function renderNewsletterData() {
  const subscribers = await Api.getSubscribers();
  const campaigns = await Api.getCampaigns();

  const activeSubs = subscribers.filter(s => s.statut === 'Actif');

  document.getElementById('badgeSubscribers').textContent = activeSubs.length;
  document.getElementById('kpiSubscribers').textContent = activeSubs.length;
  document.getElementById('kpiCampaigns').textContent = campaigns.length;
  document.getElementById('kpiLastCampaign').textContent = campaigns.length ? campaigns[0].sujet : '—';

  document.getElementById('subscribersTable').innerHTML = subscribers.map(s => `
    <tr>
      <td class="fw-bold">${s.nom}</td>
      <td>${s.email}</td>
      <td><span class="badge bg-light text-dark border">${s.origine}</span></td>
      <td><span class="badge ${s.statut === 'Actif' ? 'bg-success-subtle text-success' : 'bg-secondary-subtle text-secondary'}">${s.statut}</span></td>
      <td class="text-center">
        <button class="btn btn-sm btn-light border text-danger" title="Retirer" onclick="supprimerAbonne('${s.id}')">
          <i class="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  `).join('');

  document.getElementById('campaignsList').innerHTML = campaigns.length ? campaigns.map(c => `
    <div class="p-3 bg-light border-start border-3 border-danger">
      <div class="d-flex justify-content-between align-items-start">
        <div class="fw-bold small">${c.sujet}</div>
        <span class="badge bg-dark rounded-pill">${c.envoyeA} envoi${c.envoyeA > 1 ? 's' : ''}</span>
      </div>
      <div class="text-muted" style="font-size:0.78rem;">${c.audience} • ${c.date}</div>
    </div>
  `).join('') : '<p class="small text-muted mb-0">Aucune campagne envoyée pour le moment.</p>';
}

async function supprimerAbonne(id) {
  await Api.deleteSubscriber(id);
  renderNewsletterData();
}

document.getElementById('formAddSubscriber').addEventListener('submit', async (e) => {
  e.preventDefault();
  const nom = document.getElementById('subNom').value;
  const email = document.getElementById('subEmail').value;
  const origine = document.getElementById('subOrigine').value;

  await Api.addSubscriber({ nom, email, origine });

  bootstrap.Modal.getInstance(document.getElementById('modalAddSubscriber')).hide();
  e.target.reset();
  renderNewsletterData();
  alert('Abonné ajouté avec succès !');
});

document.getElementById('formNewCampaign').addEventListener('submit', async (e) => {
  e.preventDefault();
  const sujet = document.getElementById('campSujet').value;
  const message = document.getElementById('campMessage').value;
  const audience = document.getElementById('campAudience').value;

  await Api.sendCampaign({ sujet, message, audience });

  bootstrap.Modal.getInstance(document.getElementById('modalNewCampaign')).hide();
  e.target.reset();
  renderNewsletterData();
  alert('Campagne envoyée avec succès !');
});

// Navigation
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
      demandes: "Suivi des Demandes de Service",
      parking: "Stations de Parking",
      vehicules: "Vente & Location de Véhicules",
      formations: "Auto-École & Formation Professionnelle",
      fidelite: "Carte de Fidélité Client",
      newsletter: "Newsletter — Abonnés & Campagnes",
      partenariats: "Partenariats Écoles & Grossistes"
    };
    document.getElementById('sectionTitle').textContent = titles[sectionKey] || "Administration";
  }
}

// Rendus des Tableaux
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

  document.getElementById('pendingGestList').innerHTML = mockPendingGest.map(g => `
    <div class="p-3 bg-light border-start border-3 border-danger d-flex justify-content-between align-items-center">
      <div>
        <div class="fw-bold small">${g.nom}</div>
        <div class="text-muted" style="font-size:0.75rem;">${g.email} • ${g.city} (${g.region})</div>
      </div>
      <button class="btn btn-sm btn-red" onclick="alert('Gestionnaire validé !')">Affecter</button>
    </div>
  `).join('');

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

// Modification & Mutation
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

document.getElementById('formEditGestionnaire').addEventListener('submit', (e) => {
  e.preventDefault();

  const gestId = document.getElementById('editGestId').value;
  const oldRegionKey = document.getElementById('editOldRegionKey').value;
  const newRegionKey = document.getElementById('editSelectRegion').value;
  const newStationName = document.getElementById('editSelectStation').value;
  const newNom = document.getElementById('editNom').value;
  const newPhone = document.getElementById('editPhone').value;
  const newStatut = document.getElementById('editStatut').value;

  let currentGest = null;
  const oldStationIndex = togoNetworkData[oldRegionKey].stations.findIndex(s => s.id === gestId);
  if (oldStationIndex !== -1) {
    currentGest = togoNetworkData[oldRegionKey].stations[oldStationIndex];
    togoNetworkData[oldRegionKey].stations.splice(oldStationIndex, 1);
  }

  currentGest.manager = newNom;
  currentGest.phone = newPhone;
  currentGest.statut = newStatut;

  const targetStation = togoNetworkData[newRegionKey].stations.find(s => s.station === newStationName);
  if (targetStation) {
    targetStation.manager = newNom;
    targetStation.phone = newPhone;
    targetStation.statut = newStatut;
  } else {
    currentGest.station = newStationName;
    togoNetworkData[newRegionKey].stations.push(currentGest);
  }

  saveToStorage();
  bootstrap.Modal.getInstance(document.getElementById('modalEditGestionnaire')).hide();
  renderDashboardData();
  renderStationsGrid();
  alert('Gestionnaire et affectation mis à jour avec succès !');
});

// Suppression
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
    saveToStorage();
    bootstrap.Modal.getInstance(document.getElementById('modalDeleteGestionnaire')).hide();
    renderDashboardData();
    renderStationsGrid();
  }
});

// Ajout
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

  saveToStorage();
  bootstrap.Modal.getInstance(document.getElementById('modalAddGestionnaire')).hide();
  renderDashboardData();
  renderStationsGrid();
  alert('Gestionnaire ajouté et affecté avec succès !');
});

// Filtres
document.getElementById('adminFilterRegion').addEventListener('change', (e) => {
  renderStationsGrid(e.target.value);
});

// ==========================================
// FACTORY GÉNÉRIQUE POUR RESSOURCES CRUD
// ==========================================
// Même logique de "fausse API" que pour la Newsletter, réutilisée pour
// toutes les nouvelles fonctionnalités. Chaque ressource obtient
// getAll() / add() / remove() / update(), prêts à devenir de vrais
// appels fetch('/api/...') plus tard.
function createResourceApi(storageKey, defaultData) {
  return {
    async getAll() {
      const saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(defaultData));
    },
    async add(item) {
      const list = await this.getAll();
      const newItem = { id: storageKey + '_' + Date.now(), ...item };
      list.push(newItem);
      localStorage.setItem(storageKey, JSON.stringify(list));
      return newItem;
    },
    async remove(id) {
      const list = await this.getAll();
      const filtered = list.filter(i => i.id !== id);
      localStorage.setItem(storageKey, JSON.stringify(filtered));
      return true;
    },
    async update(id, changes) {
      const list = await this.getAll();
      const idx = list.findIndex(i => i.id === id);
      if (idx !== -1) {
        list[idx] = { ...list[idx], ...changes };
        localStorage.setItem(storageKey, JSON.stringify(list));
        return list[idx];
      }
      return null;
    }
  };
}

// ==========================================
// 1. STATIONS DE PARKING
// ==========================================
const defaultParkingStations = [
  { id: 'park1', nom: 'Parking Lomé Agoè', region: 'Maritime', placesTotales: 30, placesOccupees: 18, tarif: 1000, statut: 'Actif' },
  { id: 'park2', nom: 'Parking Kara Douane', region: 'Kara', placesTotales: 20, placesOccupees: 5, tarif: 800, statut: 'Actif' }
];
const ParkingApi = createResourceApi('bideParkingStations', defaultParkingStations);

async function renderParkingData() {
  const stations = await ParkingApi.getAll();
  document.getElementById('parkingTable').innerHTML = stations.map(s => `
    <tr>
      <td class="fw-bold">${s.nom}</td>
      <td><span class="badge bg-dark">${s.region}</span></td>
      <td>${s.placesTotales}</td>
      <td>${s.placesOccupees}</td>
      <td>${s.tarif} F CFA</td>
      <td><span class="badge ${s.statut === 'Actif' ? 'bg-success-subtle text-success' : 'bg-secondary-subtle text-secondary'}">${s.statut}</span></td>
      <td class="text-center">
        <button class="btn btn-sm btn-light border text-danger" title="Retirer" onclick="supprimerParking('${s.id}')">
          <i class="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  `).join('');
}

async function supprimerParking(id) {
  await ParkingApi.remove(id);
  renderParkingData();
}

document.getElementById('formAddParking').addEventListener('submit', async (e) => {
  e.preventDefault();
  const nom = document.getElementById('parkNom').value;
  const region = document.getElementById('parkRegion').value;
  const placesTotales = parseInt(document.getElementById('parkPlaces').value, 10);
  const tarif = parseInt(document.getElementById('parkTarif').value, 10);

  await ParkingApi.add({ nom, region, placesTotales, placesOccupees: 0, tarif, statut: 'Actif' });

  bootstrap.Modal.getInstance(document.getElementById('modalAddParking')).hide();
  e.target.reset();
  renderParkingData();
  alert('Station de parking ajoutée avec succès !');
});

// ==========================================
// 2. VENTE & LOCATION DE VÉHICULES
// ==========================================
const defaultVehicules = [
  { id: 'veh1', nom: 'Toyota Hilux 2022', categorie: 'Voiture', type: 'Vente', prix: '8 500 000 F CFA', station: 'Lomé — Agoè', statut: 'Disponible' },
  { id: 'veh2', nom: 'Yamaha DT 125', categorie: 'Moto', type: 'Location', prix: '5 000 F CFA / jour', station: 'Kara Douane', statut: 'Disponible' }
];
const VehiculesApi = createResourceApi('bideVehicules', defaultVehicules);

async function renderVehiculesData() {
  const vehicules = await VehiculesApi.getAll();
  document.getElementById('vehiculesTable').innerHTML = vehicules.map(v => `
    <tr>
      <td class="fw-bold">${v.nom}</td>
      <td><span class="badge bg-light text-dark border">${v.categorie}</span></td>
      <td><span class="badge ${v.type === 'Vente' ? 'bg-dark' : 'bg-danger'}">${v.type}</span></td>
      <td>${v.prix}</td>
      <td>${v.station}</td>
      <td><span class="badge bg-success-subtle text-success">${v.statut}</span></td>
      <td class="text-center">
        <button class="btn btn-sm btn-light border text-danger" title="Retirer" onclick="supprimerVehicule('${v.id}')">
          <i class="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  `).join('');
}

async function supprimerVehicule(id) {
  await VehiculesApi.remove(id);
  renderVehiculesData();
}

document.getElementById('formAddVehicule').addEventListener('submit', async (e) => {
  e.preventDefault();
  const nom = document.getElementById('vehNom').value;
  const categorie = document.getElementById('vehCategorie').value;
  const type = document.getElementById('vehType').value;
  const prix = document.getElementById('vehPrix').value;
  const station = document.getElementById('vehStation').value;

  await VehiculesApi.add({ nom, categorie, type, prix, station, statut: 'Disponible' });

  bootstrap.Modal.getInstance(document.getElementById('modalAddVehicule')).hide();
  e.target.reset();
  renderVehiculesData();
  alert('Véhicule ajouté au catalogue !');
});

// ==========================================
// 3. FORMATIONS (AUTO-ÉCOLE & MÉCANIQUE PRO)
// ==========================================
const defaultFormations = [
  { id: 'form1', nom: 'Permis B — Conduite', type: 'Auto-école', horaire: 'Cours du jour', duree: '2 mois', places: 12, station: 'Lomé — Agoè' },
  { id: 'form2', nom: 'Mécanique Diesel Pro', type: 'Mécanique', horaire: 'Cours du soir', duree: '4 mois', places: 8, station: 'Sokodé Grand Marché' }
];
const FormationsApi = createResourceApi('bideFormations', defaultFormations);

async function renderFormationsData() {
  const formations = await FormationsApi.getAll();
  document.getElementById('formationsTable').innerHTML = formations.map(f => `
    <tr>
      <td class="fw-bold">${f.nom}</td>
      <td><span class="badge bg-dark">${f.type}</span></td>
      <td><span class="badge ${f.horaire === 'Cours du jour' ? 'bg-warning-subtle text-warning' : 'bg-primary-subtle text-primary'}">${f.horaire}</span></td>
      <td>${f.duree}</td>
      <td>${f.places}</td>
      <td>${f.station}</td>
      <td class="text-center">
        <button class="btn btn-sm btn-light border text-danger" title="Retirer" onclick="supprimerFormation('${f.id}')">
          <i class="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  `).join('');
}

async function supprimerFormation(id) {
  await FormationsApi.remove(id);
  renderFormationsData();
}

document.getElementById('formAddFormation').addEventListener('submit', async (e) => {
  e.preventDefault();
  const nom = document.getElementById('formNom').value;
  const type = document.getElementById('formType').value;
  const horaire = document.getElementById('formHoraire').value;
  const duree = document.getElementById('formDuree').value;
  const places = parseInt(document.getElementById('formPlaces').value, 10);
  const station = document.getElementById('formStation').value;

  await FormationsApi.add({ nom, type, horaire, duree, places, station });

  bootstrap.Modal.getInstance(document.getElementById('modalAddFormation')).hide();
  e.target.reset();
  renderFormationsData();
  alert('Formation ajoutée avec succès !');
});

// ==========================================
// 4. CARTE DE FIDÉLITÉ (4 VISITES = ÉLIGIBLE)
// ==========================================
const defaultFidelite = [
  { id: 'fid1', nom: 'Kossi Lawson', region: 'Maritime', visites: 5 },
  { id: 'fid2', nom: 'Abla Tossou', region: 'Plateaux', visites: 2 },
  { id: 'fid3', nom: 'Yao Adom', region: 'Centrale', visites: 4 }
];
const FideliteApi = createResourceApi('bideFidelite', defaultFidelite);

async function renderFideliteData() {
  const clients = await FideliteApi.getAll();
  const eligibles = clients.filter(c => c.visites >= 4);
  document.getElementById('badgeEligibles').textContent = eligibles.length;

  document.getElementById('fideliteTable').innerHTML = clients.map(c => {
    const eligible = c.visites >= 4;
    return `
      <tr>
        <td class="fw-bold">${c.nom}</td>
        <td><span class="badge bg-dark">${c.region}</span></td>
        <td>${c.visites}</td>
        <td><span class="badge ${eligible ? 'bg-success-subtle text-success' : 'bg-secondary-subtle text-secondary'}">${eligible ? 'Carte attribuée' : 'Non éligible'}</span></td>
        <td class="text-center">
          <button class="btn btn-sm btn-light border" title="Ajouter une visite" onclick="ajouterVisite('${c.id}')">
            <i class="bi bi-plus-lg"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

async function ajouterVisite(id) {
  const clients = await FideliteApi.getAll();
  const client = clients.find(c => c.id === id);
  if (client) {
    await FideliteApi.update(id, { visites: client.visites + 1 });
    renderFideliteData();
  }
}

// ==========================================
// 5. PARTENARIATS ÉCOLES & GROSSISTES
// ==========================================
const defaultEcoles = [
  { id: 'eco1', nom: 'Institut Technique de Lomé', contact: 'contact@itl.tg', stagiaires: 6, statut: 'Active' }
];
const EcolesApi = createResourceApi('bideEcoles', defaultEcoles);

const defaultGrossistes = [
  { id: 'gros1', nom: 'Garage Central Kara', contact: '+228 93 11 22 33', montant: 150000 }
];
const GrossistesApi = createResourceApi('bideGrossistes', defaultGrossistes);

async function renderEcolesData() {
  const ecoles = await EcolesApi.getAll();
  document.getElementById('ecolesTable').innerHTML = ecoles.map(e => `
    <tr>
      <td class="fw-bold">${e.nom}</td>
      <td>${e.contact}</td>
      <td>${e.stagiaires}</td>
      <td><span class="badge ${e.statut === 'Active' ? 'bg-success-subtle text-success' : e.statut === 'En négociation' ? 'bg-warning-subtle text-warning' : 'bg-secondary-subtle text-secondary'}">${e.statut}</span></td>
      <td class="text-center">
        <button class="btn btn-sm btn-light border text-danger" title="Retirer" onclick="supprimerEcole('${e.id}')">
          <i class="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  `).join('');
}

async function supprimerEcole(id) {
  await EcolesApi.remove(id);
  renderEcolesData();
}

document.getElementById('formAddEcole').addEventListener('submit', async (e) => {
  e.preventDefault();
  const nom = document.getElementById('ecoleNom').value;
  const contact = document.getElementById('ecoleContact').value;
  const statut = document.getElementById('ecoleStatut').value;

  await EcolesApi.add({ nom, contact, stagiaires: 0, statut });

  bootstrap.Modal.getInstance(document.getElementById('modalAddEcole')).hide();
  e.target.reset();
  renderEcolesData();
  alert('École partenaire ajoutée !');
});

async function renderGrossistesData() {
  const grossistes = await GrossistesApi.getAll();
  document.getElementById('grossistesList').innerHTML = grossistes.length ? grossistes.map(g => `
    <div class="p-3 bg-light border-start border-3 border-danger d-flex justify-content-between align-items-center">
      <div>
        <div class="fw-bold small">${g.nom}</div>
        <div class="text-muted" style="font-size:0.75rem;">${g.contact}</div>
      </div>
      <div class="text-end">
        <div class="fw-bold small text-danger">${g.montant.toLocaleString('fr-FR')} F</div>
        <button class="btn btn-sm btn-link text-muted p-0" style="font-size:0.7rem;" onclick="supprimerGrossiste('${g.id}')">Retirer</button>
      </div>
    </div>
  `).join('') : '<p class="small text-muted mb-0">Aucun grossiste enregistré.</p>';
}

async function supprimerGrossiste(id) {
  await GrossistesApi.remove(id);
  renderGrossistesData();
}

document.getElementById('formAddGrossiste').addEventListener('submit', async (e) => {
  e.preventDefault();
  const nom = document.getElementById('grosNom').value;
  const contact = document.getElementById('grosContact').value;
  const montant = parseInt(document.getElementById('grosMontant').value, 10);

  await GrossistesApi.add({ nom, contact, montant });

  bootstrap.Modal.getInstance(document.getElementById('modalAddGrossiste')).hide();
  e.target.reset();
  renderGrossistesData();
  alert('Grossiste ajouté !');
});

// Initialisation
loadFromStorage();
renderStationsGrid();
renderDashboardData();
renderNewsletterData();
renderParkingData();
renderVehiculesData();
renderFormationsData();
renderFideliteData();
renderEcolesData();
renderGrossistesData();
updateModalVilles('maritime');
