// ================= NAVIGATION ENTRE LES PAGES =================
function showPage(pageName) {
    // Cacher toutes les pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Afficher la page demandée
    const page = document.getElementById('page-' + pageName);
    if (page) {
        page.classList.add('active');
    }

    // Mettre à jour le menu
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.classList.remove('active');
    });

    // Activer le bon lien du menu
    const navItem = document.getElementById('nav-' + pageName);
    if (navItem) {
        navItem.classList.add('active');
    }
}


// ================= GESTION CLIENTS =================
const clientModal = document.getElementById("clientModal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const cancelModal = document.getElementById("cancelModal");
const clientForm = document.getElementById("clientForm");
const clientTable = document.getElementById("clientTable");
const searchInput = document.getElementById("searchInput");

// OUVRIR LA MODALE
if (openModal) {
    openModal.addEventListener("click", () => {
        clientModal.classList.add("show");
    });
}

// FERMER LA MODALE
if (closeModal) {
    closeModal.addEventListener("click", fermerClientModal);
}

if (cancelModal) {
    cancelModal.addEventListener("click", fermerClientModal);
}

function fermerClientModal() {
    clientModal.classList.remove("show");
    clientForm.reset();
}

// FERMER EN CLIQUANT EN DEHORS
if (clientModal) {
    clientModal.addEventListener("click", (event) => {
        if (event.target === clientModal) {
            fermerClientModal();
        }
    });
}

// AJOUTER UN CLIENT
if (clientForm) {
    clientForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const nom = document.getElementById("nom").value;
        const prenom = document.getElementById("prenom").value;
        const telephone = document.getElementById("telephone").value;
        const email = document.getElementById("email").value;
        const piece = document.getElementById("piece").value;

        // Initiales
        const initiales = (prenom.charAt(0) + nom.charAt(0)).toUpperCase();

        // Nouvelle ligne
        const ligne = document.createElement("tr");
        ligne.innerHTML = `
            <td>
                <div class="client-info">
                    <div class="client-avatar">${initiales}</div>
                    <div>
                        <strong>${prenom} ${nom}</strong>
                        <small>${email || "Aucun e-mail"}</small>
                    </div>
                </div>
            </td>
            <td>${telephone}</td>
            <td>${piece}</td>
            <td>0</td>
            <td><span class="service">Aucune</span></td>
            <td>
                <button class="action view"><i class="fa-solid fa-eye"></i></button>
                <button class="action edit"><i class="fa-solid fa-pen"></i></button>
                <button class="action delete"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;

        clientTable.appendChild(ligne);
        mettreAJourCompteurClients();
        fermerClientModal();
    });
}

// COMPTEUR CLIENTS
function mettreAJourCompteurClients() {
    const lignes = clientTable.querySelectorAll("tr");
    document.getElementById("totalClients").textContent = lignes.length;
}

if (clientTable) {
    mettreAJourCompteurClients();
}

// RECHERCHE CLIENTS
if (searchInput) {
    searchInput.addEventListener("input", () => {
        const recherche = searchInput.value.toLowerCase();
        const lignes = clientTable.querySelectorAll("tr");

        lignes.forEach((ligne) => {
            const texte = ligne.textContent.toLowerCase();
            if (texte.includes(recherche)) {
                ligne.style.display = "";
            } else {
                ligne.style.display = "none";
            }
        });
    });
}

// SUPPRESSION CLIENTS
if (clientTable) {
    clientTable.addEventListener("click", (event) => {
        const bouton = event.target.closest(".delete");
        if (!bouton) return;

        const ligne = bouton.closest("tr");
        const confirmation = confirm("Voulez-vous vraiment supprimer ce client ?");

        if (confirmation) {
            ligne.remove();
            mettreAJourCompteurClients();
        }
    });
}


// ================= GESTION VEHICULES =================
const vehicleModal = document.getElementById("vehicleModal");
const openVehicleModal = document.getElementById("openVehicleModal");
const closeVehicleModal = document.getElementById("closeVehicleModal");
const cancelVehicleModal = document.getElementById("cancelVehicleModal");
const vehicleForm = document.getElementById("vehicleForm");
const vehicleTable = document.getElementById("vehicleTable");
const searchVehicle = document.getElementById("searchVehicle");

// OUVRIR
if (openVehicleModal) {
    openVehicleModal.addEventListener("click", () => {
        vehicleModal.classList.add("show");
    });
}

// FERMER
function fermerVehicleModal() {
    vehicleModal.classList.remove("show");
    vehicleForm.reset();
}

if (closeVehicleModal) {
    closeVehicleModal.addEventListener("click", fermerVehicleModal);
}

if (cancelVehicleModal) {
    cancelVehicleModal.addEventListener("click", fermerVehicleModal);
}

// CLIC EN DEHORS
if (vehicleModal) {
    vehicleModal.addEventListener("click", (event) => {
        if (event.target === vehicleModal) {
            fermerVehicleModal();
        }
    });
}

// AJOUT VEHICULE
if (vehicleForm) {
    vehicleForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const client = document.getElementById("client").value;
        const type = document.getElementById("vehicleType").value;
        const brand = document.getElementById("brand").value;
        const model = document.getElementById("model").value;
        const registration = document.getElementById("registration").value;
        const color = document.getElementById("color").value;
        const year = document.getElementById("year").value;
        const state = document.getElementById("vehicleState").value;

        let icon = "fa-car";
        if (type === "Moto") {
            icon = "fa-motorcycle";
        }

        let stateClass = "service";
        if (state === "En réparation") {
            stateClass = "service repair";
        }

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <div class="client-info">
                    <div class="client-avatar"><i class="fa-solid ${icon}"></i></div>
                    <div>
                        <strong>${brand} ${model}</strong>
                        <small>${year || "Année inconnue"}</small>
                    </div>
                </div>
            </td>
            <td>${client}</td>
            <td>${type}</td>
            <td>${registration}</td>
            <td>${color}</td>
            <td><span class="${stateClass}">${state}</span></td>
            <td>
                <button class="action view"><i class="fa-solid fa-eye"></i></button>
                <button class="action edit"><i class="fa-solid fa-pen"></i></button>
                <button class="action delete"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;

        vehicleTable.appendChild(row);
        updateVehicleCount();
        fermerVehicleModal();
    });
}

// COMPTEUR
function updateVehicleCount() {
    const rows = vehicleTable.querySelectorAll("tr");
    document.getElementById("totalVehicles").textContent = rows.length;
}

// RECHERCHE
if (searchVehicle) {
    searchVehicle.addEventListener("input", () => {
        const search = searchVehicle.value.toLowerCase();
        const rows = vehicleTable.querySelectorAll("tr");

        rows.forEach((row) => {
            const text = row.textContent.toLowerCase();
            if (text.includes(search)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    });
}

// SUPPRESSION
if (vehicleTable) {
    vehicleTable.addEventListener("click", (event) => {
        const deleteButton = event.target.closest(".delete");
        if (!deleteButton) return;

        const row = deleteButton.closest("tr");
        if (confirm("Voulez-vous vraiment supprimer ce véhicule ?")) {
            row.remove();
            updateVehicleCount();
        }
    });
}


// ================= GESTION SERVICES =================
const serviceModal = document.getElementById("serviceModal");
const openServiceModal = document.getElementById("openServiceModal");
const closeServiceModal = document.getElementById("closeServiceModal");
const cancelServiceModal = document.getElementById("cancelServiceModal");
const serviceForm = document.getElementById("serviceForm");
const serviceTable = document.getElementById("serviceTable");
const serviceType = document.getElementById("serviceType");

const washingOptions = document.getElementById("washingOptions");
const repairOptions = document.getElementById("repairOptions");
const towingOptions = document.getElementById("towingOptions");
const otherOptions = document.getElementById("otherOptions");

function hideAllSections() {
    if (washingOptions) washingOptions.style.display = "none";
    if (repairOptions) repairOptions.style.display = "none";
    if (towingOptions) towingOptions.style.display = "none";
    if (otherOptions) otherOptions.style.display = "none";
}

if (serviceType) {
    hideAllSections();

    serviceType.addEventListener("change", () => {
        hideAllSections();

        if (serviceType.value === "Lavage") {
            washingOptions.style.display = "block";
        }
        if (serviceType.value === "Réparation") {
            repairOptions.style.display = "block";
        }
        if (serviceType.value === "Remorquage") {
            towingOptions.style.display = "block";
        }
        if (serviceType.value === "Autres") {
            otherOptions.style.display = "block";
        }
    });
}

if (openServiceModal) {
    openServiceModal.addEventListener("click", () => {
        serviceModal.classList.add("show");
    });
}

function fermerServiceModal() {
    serviceModal.classList.remove("show");
    serviceForm.reset();
    hideAllSections();
}

if (closeServiceModal) {
    closeServiceModal.addEventListener("click", fermerServiceModal);
}

if (cancelServiceModal) {
    cancelServiceModal.addEventListener("click", fermerServiceModal);
}

if (serviceModal) {
    serviceModal.addEventListener("click", (event) => {
        if (event.target === serviceModal) {
            fermerServiceModal();
        }
    });
}

if (serviceForm) {
    serviceForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const client = document.getElementById("serviceClient").value;
        const vehicle = document.getElementById("serviceVehicle").value;
        const type = document.getElementById("serviceType").value;
        const amount = document.getElementById("serviceAmount").value;
        const date = document.getElementById("serviceDate").value;
        const status = document.getElementById("serviceStatus").value;

        const row = document.createElement("tr");
        let statusClass = "service";

        if (status === "En cours" || status === "Annulé") {
            statusClass = "service repair";
        }

        row.innerHTML = `
            <td><strong>${client}</strong></td>
            <td>${vehicle}</td>
            <td><span class="service">${type}</span></td>
            <td>${date}</td>
            <td>${Number(amount).toLocaleString("fr-FR")} FCFA</td>
            <td><span class="${statusClass}">${status}</span></td>
            <td>
                <button class="action view"><i class="fa-solid fa-eye"></i></button>
                <button class="action edit"><i class="fa-solid fa-pen"></i></button>
                <button class="action delete"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;

        serviceTable.appendChild(row);
        updateServiceCount();
        fermerServiceModal();
    });
}

function updateServiceCount() {
    const rows = serviceTable.querySelectorAll("tr");
    document.getElementById("totalServices").textContent = rows.length;
}

const searchService = document.getElementById("searchService");
if (searchService) {
    searchService.addEventListener("input", function() {
        const search = this.value.toLowerCase();
        const rows = serviceTable.querySelectorAll("tr");

        rows.forEach((row) => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(search) ? "" : "none";
        });
    });
}

if (serviceTable) {
    serviceTable.addEventListener("click", (event) => {
        const deleteButton = event.target.closest(".delete");
        if (!deleteButton) return;

        const row = deleteButton.closest("tr");
        if (confirm("Voulez-vous vraiment supprimer ce service ?")) {
            row.remove();
            updateServiceCount();
        }
    });
}


// ================= GESTION FACTURES =================
const invoiceModal = document.getElementById("invoiceModal");
const openInvoiceModal = document.getElementById("openInvoiceModal");
const closeInvoiceModal = document.getElementById("closeInvoiceModal");
const cancelInvoiceModal = document.getElementById("cancelInvoiceModal");
const invoiceForm = document.getElementById("invoiceForm");
const invoiceTable = document.getElementById("invoiceTable");

if (openInvoiceModal) {
    openInvoiceModal.addEventListener("click", () => {
        invoiceModal.classList.add("show");
    });
}

function closeInvoiceModalFn() {
    invoiceModal.classList.remove("show");
    invoiceForm.reset();
}

if (closeInvoiceModal) {
    closeInvoiceModal.addEventListener("click", closeInvoiceModalFn);
}

if (cancelInvoiceModal) {
    cancelInvoiceModal.addEventListener("click", closeInvoiceModalFn);
}

if (invoiceModal) {
    invoiceModal.addEventListener("click", (event) => {
        if (event.target === invoiceModal) {
            closeInvoiceModalFn();
        }
    });
}

if (invoiceForm) {
    invoiceForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const client = document.getElementById("invoiceClient").value;
        const vehicle = document.getElementById("invoiceVehicle").value;
        const service = document.getElementById("invoiceService").value;
        const amount = Number(document.getElementById("invoiceAmount").value);
        const date = document.getElementById("invoiceDate").value;
        const status = document.getElementById("invoiceStatus").value;
        const email = document.getElementById("invoiceEmail").value;

        const number = invoiceTable.querySelectorAll("tr").length + 1;
        const invoiceNumber = "FAC-" + String(number).padStart(4, "0");

        const formattedDate = date ? new Date(date).toLocaleDateString("fr-FR") : "";

        let statusClass = "service";
        if (status === "En attente" || status === "Annulée") {
            statusClass = "service repair";
        }

        const row = document.createElement("tr");
        row.dataset.email = email;
        row.innerHTML = `
            <td><strong>${invoiceNumber}</strong></td>
            <td>${client}</td>
            <td>${vehicle}</td>
            <td>${service}</td>
            <td>${formattedDate}</td>
            <td>${amount.toLocaleString("fr-FR")} FCFA</td>
            <td><span class="${statusClass}">${status}</span></td>
            <td>
                <button class="action view"><i class="fa-solid fa-eye"></i></button>
                <button class="action edit"><i class="fa-solid fa-pen"></i></button>
                <button class="action delete"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;

        invoiceTable.appendChild(row);
        updateInvoiceCount();
        closeInvoiceModalFn();
    });
}

function updateInvoiceCount() {
    const rows = invoiceTable.querySelectorAll("tr");
    document.getElementById("totalInvoices").textContent = rows.length;
}

const searchInvoice = document.getElementById("searchInvoice");
if (searchInvoice) {
    searchInvoice.addEventListener("input", function() {
        const search = this.value.toLowerCase();
        const rows = invoiceTable.querySelectorAll("tr");

        rows.forEach((row) => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(search) ? "" : "none";
        });
    });
}

if (invoiceTable) {
    invoiceTable.addEventListener("click", (event) => {
        const deleteButton = event.target.closest(".delete");
        if (!deleteButton) return;

        const row = deleteButton.closest("tr");
        if (confirm("Voulez-vous vraiment supprimer cette facture ?")) {
            row.remove();
            updateInvoiceCount();
        }
    });
}


// ================= GESTION HISTORIQUES =================
const historyTable = document.getElementById("historyTable");
const searchHistory = document.getElementById("searchHistory");
const historyFilter = document.getElementById("historyFilter");

function filterHistory() {
    const search = searchHistory.value.toLowerCase();
    const client = historyFilter.value;
    const rows = historyTable.querySelectorAll("tr");
    let visibleRows = 0;

    rows.forEach((row) => {
        const text = row.textContent.toLowerCase();
        const matchesSearch = text.includes(search);
        const matchesClient = client === "all" || text.includes(client.toLowerCase());

        if (matchesSearch && matchesClient) {
            row.style.display = "";
            visibleRows++;
        } else {
            row.style.display = "none";
        }
    });

    document.getElementById("totalHistory").textContent = visibleRows;
}

if (searchHistory && historyFilter) {
    searchHistory.addEventListener("input", filterHistory);
    historyFilter.addEventListener("change", filterHistory);
}