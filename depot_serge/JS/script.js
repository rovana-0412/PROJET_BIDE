document.addEventListener("DOMContentLoaded", () => {
  // --- STATE DE L'APPLICATION (Données dynamiques) ---
  const state = {
    vehicules: [
      {
        id: 1,
        nom: "Peugeot 208",
        immat: "TG-1234-AZ",
        annee: "2020",
        categorie: "citadine",
      },
      {
        id: 2,
        nom: "Toyota RAV4",
        immat: "TG-5678-BX",
        annee: "2022",
        categorie: "suv",
      },
    ],
    historique: [
      {
        date: "19/12/2024",
        prestation: "Lavage Complet",
        vehicule: "Peugeot 208",
        montant: "5 000 F CFA",
        statut: "En attente",
      },
      {
        date: "10/12/2024",
        prestation: "Vidange Moteur",
        vehicule: "Toyota RAV4",
        montant: "20 000 F CFA",
        statut: "Effectué",
      },
    ],
    tarifsServices: {
      "Lavage Automobile": "5 000 F CFA",
      Remorquage: "15 000 F CFA",
      "Visite Mécanique": "20 000 F CFA",
    },
  };

  // --- 1. GESTION SÉCURISÉE DE LA CONNEXION ---
  const ecranConnexion = document.getElementById("ecran-connexion");
  const applicationPrincipale = document.getElementById(
    "application-principale",
  );
  const boutonSeConnecter = document.getElementById("bouton-se-connecter");
  const formConnexion = document.getElementById("formulaire-connexion");

  function executerConnexion(e) {
    if (e) e.preventDefault(); // Empêche le rechargement natif de la page

    if (ecranConnexion && applicationPrincipale) {
      ecranConnexion.classList.add("masque");
      applicationPrincipale.classList.remove("masque");
    }
  }

  if (boutonSeConnecter) {
    boutonSeConnecter.addEventListener("click", executerConnexion);
  }

  if (formConnexion) {
    formConnexion.addEventListener("submit", executerConnexion);
  }

  // --- 2. NAVIGATION ENTRE LES ÉCRANS ---
  const liensNavigation = document.querySelectorAll(".lien-navigation");
  const ecransSections = document.querySelectorAll(".ecran-section");

  function naviguerVers(cibleId) {
    liensNavigation.forEach((lien) => {
      lien.classList.toggle(
        "actif",
        lien.getAttribute("data-cible") === cibleId,
      );
    });

    ecransSections.forEach((section) => {
      if (section.id === `ecran-${cibleId}`) {
        section.classList.remove("masque");
      } else {
        section.classList.add("masque");
      }
    });
  }

  // Clics sur les onglets du menu latéral
  liensNavigation.forEach((lien) => {
    lien.addEventListener("click", (e) => {
      e.preventDefault();
      naviguerVers(lien.getAttribute("data-cible"));
    });
  });

  // Boutons d'action contextuels ("Réserver un service", "Prendre RDV")
  document.querySelectorAll(".action-vers-rdv").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      naviguerVers("rdv");
    });
  });

  // --- 3. DYNAMISME DES VÉHICULES ---
  const conteneurListeVehicules = document.querySelector(
    ".liste-cartes-vehicules",
  );
  const selectVehiculeRdv = document.querySelector("#ecran-rdv select");

  function mettreAJourRendusVehicules() {
    // A. Mise à jour du composant liste dans "Mes Véhicules"
    if (conteneurListeVehicules) {
      conteneurListeVehicules.innerHTML = state.vehicules
        .map(
          (v) => `
        <div class="carte-vehicule" data-id="${v.id}">
          <div class="infos-vehicule">
            <h3>${v.nom}</h3>
            <p>Année : ${v.annee} | Immat : ${v.immat}</p>
          </div>
          <div class="actions-vehicule">
            <button class="bouton-secondaire" type="button">Modifier</button>
            <button class="bouton-danger btn-supprimer-vehicule" type="button">Supprimer</button>
          </div>
        </div>
      `,
        )
        .join("");
    }

    // B. Synchronisation du menu déroulant dans "Prendre un RDV"
    if (selectVehiculeRdv) {
      selectVehiculeRdv.innerHTML = state.vehicules
        .map((v) => `<option value="${v.nom}">${v.nom} - ${v.immat}</option>`)
        .join("");
    }

    // Réattachement des écouteurs de suppression
    document.querySelectorAll(".btn-supprimer-vehicule").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const carte = e.target.closest(".carte-vehicule");
        const id = parseInt(carte.getAttribute("data-id"), 10);
        state.vehicules = state.vehicules.filter((v) => v.id !== id);
        mettreAJourRendusVehicules();
        mettreAJourRecapitulatifRdv();
      });
    });
  }

  // Soumission du formulaire d'ajout
  const formAjoutVehicule = document.getElementById("form-ajout-vehicule");
  if (formAjoutVehicule) {
    formAjoutVehicule.addEventListener("submit", (e) => {
      e.preventDefault();
      const inputs = formAjoutVehicule.querySelectorAll("input, select");
      const nouveauVehicule = {
        id: Date.now(),
        nom: inputs[0].value,
        immat: inputs[1].value,
        annee: new Date().getFullYear().toString(),
        categorie: inputs[2].value,
      };

      state.vehicules.push(nouveauVehicule);
      mettreAJourRendusVehicules();
      mettreAJourRecapitulatifRdv();
      formAjoutVehicule.reset();
      alert("Véhicule enregistré avec succès !");
    });
  }

  // --- 4. CALCUL EN DIRECT DU RÉCAPITULATIF DE RDV ---
  const radiosService = document.querySelectorAll('input[name="service"]');
  const recapService = document.querySelector(
    ".carte-recapitulatif p:nth-child(2) strong",
  );
  const recapVehicule = document.querySelector(
    ".carte-recapitulatif p:nth-child(3) strong",
  );
  const recapTotal = document.querySelector(
    ".carte-recapitulatif p:nth-child(4) strong",
  );

  function mettreAJourRecapitulatifRdv() {
    const serviceChoisi =
      document.querySelector('input[name="service"]:checked')?.value || "Aucun";
    const vehiculeChoisi = selectVehiculeRdv?.value || "Aucun";

    if (recapService) recapService.textContent = serviceChoisi;
    if (recapVehicule) recapVehicule.textContent = vehiculeChoisi;
    if (recapTotal)
      recapTotal.textContent = state.tarifsServices[serviceChoisi] || "0 F CFA";
  }

  radiosService.forEach((radio) =>
    radio.addEventListener("change", mettreAJourRecapitulatifRdv),
  );
  if (selectVehiculeRdv)
    selectVehiculeRdv.addEventListener("change", mettreAJourRecapitulatifRdv);

  // --- 5. CONFIRMATION RDV & HISTORIQUE DYNAMIQUE --- //
  const btnConfirmerRdv = document.getElementById("bouton-confirmer-rdv");
  const corpsTableauHistorique = document.querySelector(
    ".tableau-historique tbody",
  );

  function mettreAJourHistoriqueRendu() {
    if (!corpsTableauHistorique) return;
    corpsTableauHistorique.innerHTML = state.historique
      .map(
        (h) => `
      <tr>
        <td>${h.date}</td>
        <td>${h.prestation}</td>
        <td>${h.vehicule}</td>
        <td>${h.montant}</td>
        <td><span class="badge-statut ${h.statut === "Effectué" ? "effectue" : "en-attente"}">${h.statut}</span></td>
      </tr>
    `,
      )
      .join("");
  }

  if (btnConfirmerRdv) {
    btnConfirmerRdv.addEventListener("click", (e) => {
      e.preventDefault();
      const service = document.querySelector(
        'input[name="service"]:checked',
      )?.value;
      const vehicule = selectVehiculeRdv?.value;
      const dateInput = document.querySelector(
        '#ecran-rdv input[type="date"]',
      )?.value;

      if (!dateInput) {
        alert("Veuillez sélectionner une date pour le rendez-vous.");
        return;
      }

      const dateObj = new Date(dateInput);
      const dateFormatee = dateObj.toLocaleDateString("fr-FR");

      state.historique.unshift({
        date: dateFormatee,
        prestation: service,
        vehicule: vehicule,
        montant: state.tarifsServices[service] || "5 000 F CFA",
        statut: "En attente",
      });

      mettreAJourHistoriqueRendu();
      alert("Votre rendez-vous a bien été enregistré !");
      naviguerVers("historique");
    });
  }

  // --- INITIALISATION INITIALE --- //
  mettreAJourRendusVehicules();
  mettreAJourRecapitulatifRdv();
  mettreAJourHistoriqueRendu();
});
