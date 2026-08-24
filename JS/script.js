document.addEventListener("DOMContentLoaded", () => {
  // --- STATE INITIAL DE L'APPLICATION ---
  const state = {
    utilisateur: {
      nom: "Jean-Marc Koffi",
      email: "client@bide.com",
      telephone: "+228 90 12 34 56",
      adresse: "Lomé, Togo",
      photo: null, // stockera la source Data URL de la photo
    },
    // Compte de démonstration prérempli
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

  // --- 1. CONNEXION & INSCRIPTION ---
  const ecranConnexion = document.getElementById("ecran-connexion");
  const applicationPrincipale = document.getElementById(
    "application-principale",
  );
  const boutonSeConnecter = document.getElementById("bouton-se-connecter");
  const formConnexion = document.getElementById("formulaire-connexion");
  const formInscription = document.getElementById("formulaire-inscription");

  const blocConnexion = document.getElementById("bloc-connexion");
  const blocInscription = document.getElementById("bloc-inscription");
  const lienVersInscription = document.getElementById("lien-vers-inscription");
  const lienVersConnexion = document.getElementById("lien-vers-connexion");

  if (lienVersInscription) {
    lienVersInscription.addEventListener("click", (e) => {
      e.preventDefault();
      blocConnexion.classList.add("masque");
      blocInscription.classList.remove("masque");
    });
  }

  if (lienVersConnexion) {
    lienVersConnexion.addEventListener("click", (e) => {
      e.preventDefault();
      blocInscription.classList.add("masque");
      blocConnexion.classList.remove("masque");
    });
  }

  function executerConnexion(e) {
    if (e) e.preventDefault();
    if (ecranConnexion && applicationPrincipale) {
      ecranConnexion.classList.add("masque");
      applicationPrincipale.classList.remove("masque");
      mettreAJourRendusVehicules();
      mettreAJourHistoriqueRendu();
      mettreAJourAffichageProfil();
    }
  }

  if (formInscription) {
    formInscription.addEventListener("submit", (e) => {
      e.preventDefault();
      const nom = document.getElementById("inscri-nom").value;
      const email = document.getElementById("inscri-email").value;

      state.utilisateur.nom = nom;
      state.utilisateur.email = email;
      state.utilisateur.telephone = "";
      state.utilisateur.adresse = "";
      state.utilisateur.photo = null;

      // Réinitialisation des véhicules et de l'historique à 0 pour le nouveau client
      state.vehicules = [];
      state.historique = [];

      alert(`Bienvenue ${nom} ! Votre compte a été créé avec succès.`);
      executerConnexion();
    });
  }

  if (boutonSeConnecter)
    boutonSeConnecter.addEventListener("click", executerConnexion);
  if (formConnexion)
    formConnexion.addEventListener("submit", executerConnexion);

  // --- 2. NAVIGATION ---
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

  liensNavigation.forEach((lien) => {
    lien.addEventListener("click", (e) => {
      e.preventDefault();
      naviguerVers(lien.getAttribute("data-cible"));
    });
  });

  document.querySelectorAll(".action-vers-rdv").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      naviguerVers("rdv");
    });
  });

  // --- GESTION DU PROFIL UTILISATEUR ---
  const elNomAffiche = document.getElementById("nom-utilisateur-affichage");
  const profilNomCarte = document.getElementById("profil-nom-carte");
  const profilEmailCarte = document.getElementById("profil-email-carte");

  const inputNom = document.getElementById("profil-input-nom");
  const inputEmail = document.getElementById("profil-input-email");
  const inputTel = document.getElementById("profil-input-telephone");
  const inputAdresse = document.getElementById("profil-input-adresse");

  const avatarIconeMenu = document.getElementById("avatar-icone-menu");
  const avatarImgMenu = document.getElementById("avatar-img-menu");
  const avatarIconeProfil = document.getElementById("avatar-icone-profil");
  const avatarImgProfil = document.getElementById("avatar-img-profil");

  const inputPhotoProfil = document.getElementById("input-photo-profil");
  const btnSupprimerPhoto = document.getElementById("btn-supprimer-photo");
  const formModifierProfil = document.getElementById("form-modifier-profil");

  function mettreAJourAffichageProfil() {
    // Noms et E-mails
    if (elNomAffiche) elNomAffiche.textContent = state.utilisateur.nom;
    if (profilNomCarte) profilNomCarte.textContent = state.utilisateur.nom;
    if (profilEmailCarte)
      profilEmailCarte.textContent = state.utilisateur.email;

    const prenoms = document.querySelectorAll(".prenom-dyn");
    prenoms.forEach(
      (p) => (p.textContent = state.utilisateur.nom.split(" ")[0]),
    );

    // Remplissage Formulaire
    if (inputNom) inputNom.value = state.utilisateur.nom;
    if (inputEmail) inputEmail.value = state.utilisateur.email;
    if (inputTel) inputTel.value = state.utilisateur.telephone || "";
    if (inputAdresse) inputAdresse.value = state.utilisateur.adresse || "";

    // Photo de profil
    if (state.utilisateur.photo) {
      if (avatarIconeMenu) avatarIconeMenu.classList.add("masque");
      if (avatarImgMenu) {
        avatarImgMenu.src = state.utilisateur.photo;
        avatarImgMenu.classList.remove("masque");
      }

      if (avatarIconeProfil) avatarIconeProfil.classList.add("masque");
      if (avatarImgProfil) {
        avatarImgProfil.src = state.utilisateur.photo;
        avatarImgProfil.classList.remove("masque");
      }

      if (btnSupprimerPhoto) btnSupprimerPhoto.style.display = "inline-block";
    } else {
      if (avatarIconeMenu) avatarIconeMenu.classList.remove("masque");
      if (avatarImgMenu) avatarImgMenu.classList.add("masque");

      if (avatarIconeProfil) avatarIconeProfil.classList.remove("masque");
      if (avatarImgProfil) avatarImgProfil.classList.add("masque");

      if (btnSupprimerPhoto) btnSupprimerPhoto.style.display = "none";
    }
  }

  // Soumission des coordonnées
  if (formModifierProfil) {
    formModifierProfil.addEventListener("submit", (e) => {
      e.preventDefault();
      state.utilisateur.nom = inputNom.value;
      state.utilisateur.email = inputEmail.value;
      state.utilisateur.telephone = inputTel.value;
      state.utilisateur.adresse = inputAdresse.value;

      mettreAJourAffichageProfil();
      alert("Vos coordonnées ont été mises à jour avec succès !");
    });
  }

  // Modification photo de profil
  if (inputPhotoProfil) {
    inputPhotoProfil.addEventListener("change", (e) => {
      const fichier = e.target.files[0];
      if (fichier) {
        const lecteur = new FileReader();
        lecteur.onload = function (evt) {
          state.utilisateur.photo = evt.target.result;
          mettreAJourAffichageProfil();
        };
        lecteur.readAsDataURL(fichier);
      }
    });
  }

  // Suppression photo de profil
  if (btnSupprimerPhoto) {
    btnSupprimerPhoto.addEventListener("click", () => {
      state.utilisateur.photo = null;
      if (inputPhotoProfil) inputPhotoProfil.value = "";
      mettreAJourAffichageProfil();
    });
  }

  // --- 3. GESTION DES VÉHICULES ---
  const conteneurListeVehicules = document.querySelector(
    ".liste-cartes-vehicules",
  );
  const selectVehiculeRdv = document.querySelector("#ecran-rdv select");
  const selectVehiculeParking = document.getElementById(
    "parking-select-vehicule",
  );

  function mettreAJourRendusVehicules() {
    if (conteneurListeVehicules) {
      if (state.vehicules.length === 0) {
        conteneurListeVehicules.innerHTML =
          "<p>Aucun véhicule enregistré pour le moment.</p>";
      } else {
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
    }

    const optionsVehicules =
      state.vehicules.length > 0
        ? state.vehicules
            .map(
              (v) => `<option value="${v.nom}">${v.nom} - ${v.immat}</option>`,
            )
            .join("")
        : `<option value="Aucun">Aucun véhicule enregistré</option>`;

    if (selectVehiculeRdv) selectVehiculeRdv.innerHTML = optionsVehicules;
    if (selectVehiculeParking)
      selectVehiculeParking.innerHTML = optionsVehicules;

    const statVehiculesNb = document.getElementById("stat-vehicules-nb");
    if (statVehiculesNb)
      statVehiculesNb.textContent = `${state.vehicules.length} Véhicules`;

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

  // --- 4. RÉCAPITULATIF RDV ---
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

  // --- 5. HISTORIQUE & SUIVI DES ACTIVITÉS ---
  const btnConfirmerRdv = document.getElementById("bouton-confirmer-rdv");
  const corpsTableauHistorique = document.querySelector(
    ".tableau-historique tbody",
  );
  const listeActivitesDashboard = document.getElementById(
    "liste-activites-recentes",
  );

  function mettreAJourHistoriqueRendu() {
    if (corpsTableauHistorique) {
      if (state.historique.length === 0) {
        corpsTableauHistorique.innerHTML = `<tr><td colspan="5" style="text-align:center;">Aucune prestation enregistrée.</td></tr>`;
      } else {
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
    }

    if (listeActivitesDashboard) {
      if (state.historique.length === 0) {
        listeActivitesDashboard.innerHTML = "<p>Aucune activité récente.</p>";
      } else {
        listeActivitesDashboard.innerHTML = state.historique
          .slice(0, 3)
          .map(
            (h) => `
          <div class="element-activite">
            <i class="fa-solid fa-wrench icone-act"></i>
            <div class="info-act">
              <strong>${h.prestation}</strong>
              <small>${h.vehicule}</small>
            </div>
            <span class="badge-statut ${h.statut === "Effectué" ? "effectue" : "en-attente"}">${h.statut}</span>
          </div>
        `,
          )
          .join("");
      }
    }

    const statInterventions = document.getElementById("stat-interventions-nb");
    if (statInterventions)
      statInterventions.textContent = `${state.historique.length} Interventions`;

    const statProchainRdv = document.getElementById("stat-prochain-rdv");
    if (statProchainRdv) {
      const rdvEnAttente = state.historique.find(
        (h) => h.statut === "En attente",
      );
      statProchainRdv.textContent = rdvEnAttente
        ? rdvEnAttente.date
        : "--/--/----";
    }

    mettreAJourCompteurFidelite();
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

  // --- 6. FORMULAIRES DE LA SECTION SERVICES REGROUPÉS ---
  const formParking = document.getElementById("form-parking");
  if (formParking) {
    formParking.addEventListener("submit", (e) => {
      e.preventDefault();
      const forfait = document.getElementById("parking-type-forfait").value;
      const vehicule = selectVehiculeParking.value;

      state.historique.unshift({
        date: new Date().toLocaleDateString("fr-FR"),
        prestation: `Parking (${forfait})`,
        vehicule: vehicule,
        montant: forfait.includes("35 000")
          ? "35 000 F CFA"
          : forfait.includes("3 000")
            ? "3 000 F CFA"
            : "1 500 F CFA",
        statut: "En attente",
      });

      mettreAJourHistoriqueRendu();
      alert("Réservation de parking effectuée !");
      naviguerVers("historique");
    });
  }

  document.querySelectorAll(".btn-action-voiture").forEach((btn) => {
    btn.addEventListener("click", () => {
      const titre = btn.getAttribute("data-titre");
      alert(`Votre demande concernant : "${titre}" a été envoyée avec succès.`);
    });
  });

  // GESTION DU FORMULAIRE D'INSCRIPTION EN LIGNE À UNE FORMATION
  const formFormation = document.getElementById("form-inscription-formation");
  if (formFormation) {
    formFormation.addEventListener("submit", (e) => {
      e.preventDefault();
      const nom = document.getElementById("formation-nom").value;
      const prenoms = document.getElementById("formation-prenoms").value;
      const formation = document.getElementById("formation-type").value;
      const horaire = document.getElementById("formation-horaire").value;
      const paiement = document.getElementById("formation-paiement").value;

      // Ajout dans l'historique utilisateur
      state.historique.unshift({
        date: new Date().toLocaleDateString("fr-FR"),
        prestation: `Inscription : ${formation} (${horaire})`,
        vehicule: "N/A",
        montant: paiement.includes("Paiement en ligne")
          ? "Inscrit (En ligne)"
          : "Inscrit (Guichet)",
        statut: "En attente",
      });

      mettreAJourHistoriqueRendu();
      alert(
        `Inscription réussie pour ${prenoms} ${nom} !\n\nFormation: ${formation}\nCréneau: ${horaire}\nMode de paiement choisi: ${paiement}`,
      );
      formFormation.reset();
      naviguerVers("historique");
    });
  }

  const formStage = document.getElementById("form-demande-stage");
  if (formStage) {
    formStage.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Demande de stage transmise au service gestionnaire.");
      formStage.reset();
    });
  }

  const formPieces = document.getElementById("form-achat-pieces");
  if (formPieces) {
    formPieces.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Demande de devis pour pièces détachées envoyée.");
      formPieces.reset();
    });
  }

  // --- 7. PROGRAMME DE FIDÉLITÉ ---
  function mettreAJourCompteurFidelite() {
    const totalVisites = state.historique.length;
    const elCompteur = document.getElementById("compteur-visites-fidelite");
    const elMessage = document.getElementById("statut-fidelite-message");
    const elBadgeStat = document.getElementById("stat-fidelite-badge");

    if (elCompteur) elCompteur.textContent = totalVisites;

    if (totalVisites > 4) {
      if (elBadgeStat) elBadgeStat.textContent = "Éligible VIP";
      if (elMessage) {
        elMessage.innerHTML = `
          <div style="background-color: var(--success-bg); color: var(--success-text); padding: 15px; border-radius: 8px;">
            <strong>Félicitations !</strong> Vous avez cumulé ${totalVisites} prestations. Vous remplissez tous les critères pour recevoir votre Carte de Fidélité VIP. 
            <br/><br/>
            <em>Veuillez vous adresser au gestionnaire du garage lors de votre passage pour la récupérer en main propre.</em>
          </div>
        `;
      }
    } else {
      const restants = 5 - totalVisites;
      if (elBadgeStat)
        elBadgeStat.textContent = `${totalVisites}/5 Prestations`;
      if (elMessage) {
        elMessage.innerHTML = `
          <div style="background-color: var(--warning-bg); color: var(--warning-text); padding: 15px; border-radius: 8px;">
            Encore <strong>${restants}</strong> prestation(s) / visite(s) afin de valider vos critères.
            <br/><br/>
            Une fois le quota atteint, la Carte de Fidélité vous sera officiellement délivrée par le gestionnaire.
          </div>
        `;
      }
    }
  }

  // --- INITIALISATION DE L'ÉCRAN ---
  mettreAJourRendusVehicules();
  mettreAJourRecapitulatifRdv();
  mettreAJourHistoriqueRendu();
  mettreAJourAffichageProfil();
});
