document.addEventListener("DOMContentLoaded", () => {
  // --- 1. RÉCUPÉRER LE NOM DE L'UTILISATEUR CONNECTÉ (Depuis la page connexion) ---
  const userNom = sessionStorage.getItem('userName') || 'Jean-Marc Koffi';
  const userEmail = sessionStorage.getItem('userEmail') || 'client@bide.com';

  // Mettre à jour les éléments HTML avec le nom et l'email
  document.querySelectorAll('.prenom-dyn').forEach(el => el.textContent = userNom.split(' ')[0]);
  document.getElementById('nom-utilisateur-affichage').textContent = userNom;
  document.getElementById('profil-nom-carte').textContent = userNom;
  document.getElementById('profil-email-carte').textContent = userEmail;
  document.getElementById('profil-input-nom').value = userNom;
  document.getElementById('profil-input-email').value = userEmail;

  // --- 2. STATE DE L'APPLICATION (Données dynamiques) ---
  const state = {
    vehicules: [
      { id: 1, nom: "Peugeot 208", immat: "TG-1234-AZ", annee: "2020", categorie: "citadine" },
      { id: 2, nom: "Toyota RAV4", immat: "TG-5678-BX", annee: "2022", categorie: "suv" }
    ],
    historique: [
      { date: "19/12/2024", prestation: "Lavage Complet", vehicule: "Peugeot 208", montant: "5 000 F CFA", statut: "En attente" },
      { date: "10/12/2024", prestation: "Vidange Moteur", vehicule: "Toyota RAV4", montant: "20 000 F CFA", statut: "Effectué" }
    ],
    tarifsServices: {
      "Lavage Automobile": "5 000 F CFA",
      "Remorquage": "15 000 F CFA",
      "Visite Mécanique": "20 000 F CFA"
    }
  };

  // --- 3. NAVIGATION ENTRE LES ÉCRANS ---
  const liensNavigation = document.querySelectorAll(".lien-navigation");
  const ecransSections = document.querySelectorAll(".ecran-section");

  function naviguerVers(cibleId) {
    liensNavigation.forEach((lien) => {
      lien.classList.toggle("actif", lien.getAttribute("data-cible") === cibleId);
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

  // Boutons vers RDV
  document.querySelectorAll(".action-vers-rdv").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      naviguerVers("rdv");
    });
  });

  // --- 4. GESTION DES VÉHICULES ---
  const conteneurListeVehicules = document.querySelector(".liste-cartes-vehicules");
  const selectVehiculeRdv = document.getElementById("rdv-select-vehicule");

  function mettreAJourRendusVehicules() {
    if (conteneurListeVehicules) {
      conteneurListeVehicules.innerHTML = state.vehicules.map((v) => `
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
      `).join("");
    }

    if (selectVehiculeRdv) {
      selectVehiculeRdv.innerHTML = state.vehicules.map((v) => `<option value="${v.nom}">${v.nom} - ${v.immat}</option>`).join("");
    }

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

  // Ajout de véhicule
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
        categorie: inputs[2].value
      };
      state.vehicules.push(nouveauVehicule);
      mettreAJourRendusVehicules();
      mettreAJourRecapitulatifRdv();
      formAjoutVehicule.reset();
      alert("Véhicule enregistré avec succès !");
    });
  }

  // --- 5. RÉCAPITULATIF RDV ---
  const radiosService = document.querySelectorAll('input[name="service"]');
  const recapService = document.querySelector(".carte-recapitulatif p:nth-child(2) strong");
  const recapVehicule = document.querySelector(".carte-recapitulatif p:nth-child(3) strong");
  const recapTotal = document.querySelector(".carte-recapitulatif p:nth-child(4) strong");

  function mettreAJourRecapitulatifRdv() {
    const serviceChoisi = document.querySelector('input[name="service"]:checked')?.value || "Aucun";
    const vehiculeChoisi = selectVehiculeRdv?.value || "Aucun";
    if (recapService) recapService.textContent = serviceChoisi;
    if (recapVehicule) recapVehicule.textContent = vehiculeChoisi;
    if (recapTotal) recapTotal.textContent = state.tarifsServices[serviceChoisi] || "0 F CFA";
  }

  radiosService.forEach((radio) => radio.addEventListener("change", mettreAJourRecapitulatifRdv));
  if (selectVehiculeRdv) selectVehiculeRdv.addEventListener("change", mettreAJourRecapitulatifRdv);

  // --- 6. CONFIRMATION RDV & HISTORIQUE ---
  const btnConfirmerRdv = document.getElementById("bouton-confirmer-rdv");
  const corpsTableauHistorique = document.querySelector(".tableau-historique tbody");

  function mettreAJourHistoriqueRendu() {
    if (!corpsTableauHistorique) return;
    corpsTableauHistorique.innerHTML = state.historique.map((h) => `
      <tr>
        <td>${h.date}</td>
        <td>${h.prestation}</td>
        <td>${h.vehicule}</td>
        <td>${h.montant}</td>
        <td><span class="badge-statut ${h.statut === "Effectué" ? "effectue" : "en-attente"}">${h.statut}</span></td>
      </tr>
    `).join("");
  }

  if (btnConfirmerRdv) {
    btnConfirmerRdv.addEventListener("click", (e) => {
      e.preventDefault();
      const service = document.querySelector('input[name="service"]:checked')?.value;
      const vehicule = selectVehiculeRdv?.value;
      const dateInput = document.getElementById("rdv-date")?.value;

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
        statut: "En attente"
      });

      mettreAJourHistoriqueRendu();
      alert("Votre rendez-vous a bien été enregistré !");
      naviguerVers("historique");
    });
  }

  // --- 7. GESTION DU PROFIL (Ajout de la photo + modification) ---
  const inputPhoto = document.getElementById("input-photo-profil");
  const avatarIconeProfil = document.getElementById("avatar-icone-profil");
  const avatarImgProfil = document.getElementById("avatar-img-profil");
  const avatarIconeMenu = document.getElementById("avatar-icone-menu");
  const avatarImgMenu = document.getElementById("avatar-img-menu");
  const btnSupprimerPhoto = document.getElementById("btn-supprimer-photo");

  if (inputPhoto) {
    inputPhoto.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          avatarIconeProfil.classList.add("masque");
          avatarImgProfil.src = event.target.result;
          avatarImgProfil.classList.remove("masque");
          avatarIconeMenu.classList.add("masque");
          avatarImgMenu.src = event.target.result;
          avatarImgMenu.classList.remove("masque");
          btnSupprimerPhoto.classList.remove("masque");
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (btnSupprimerPhoto) {
    btnSupprimerPhoto.addEventListener("click", () => {
      avatarImgProfil.classList.add("masque");
      avatarIconeProfil.classList.remove("masque");
      avatarImgMenu.classList.add("masque");
      avatarIconeMenu.classList.remove("masque");
      btnSupprimerPhoto.classList.add("masque");
      inputPhoto.value = "";
    });
  }

  const formModifierProfil = document.getElementById("form-modifier-profil");
  if (formModifierProfil) {
    formModifierProfil.addEventListener("submit", (e) => {
      e.preventDefault();
      const nom = document.getElementById("profil-input-nom").value;
      const email = document.getElementById("profil-input-email").value;
      sessionStorage.setItem('userName', nom);
      sessionStorage.setItem('userEmail', email);
      
      document.getElementById("nom-utilisateur-affichage").textContent = nom;
      document.getElementById("profil-nom-carte").textContent = nom;
      document.getElementById("profil-email-carte").textContent = email;
      document.querySelectorAll('.prenom-dyn').forEach(el => el.textContent = nom.split(' ')[0]);
      
      alert("Profil mis à jour avec succès !");
    });
  }

  // --- 8. SERVICES GROUPÉS (Parking, Formation, Pièces, etc.) ---
  // Parking
  const formParking = document.getElementById("form-parking");
  if (formParking) {
    formParking.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Place de parking réservée avec succès !");
      formParking.reset();
    });
  }

  // Location / Vente véhicule
  document.querySelectorAll(".btn-action-voiture").forEach((btn) => {
    btn.addEventListener("click", () => {
      alert(`Demande envoyée pour : ${btn.getAttribute('data-titre')}`);
    });
  });

  // Formation
  const formFormation = document.getElementById("form-inscription-formation");
  if (formFormation) {
    formFormation.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Inscription à la formation envoyée avec succès !");
      formFormation.reset();
    });
  }

  // Stage
  const formStage = document.getElementById("form-demande-stage");
  if (formStage) {
    formStage.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Demande de stage soumise avec succès !");
      formStage.reset();
    });
  }

  // Pièces
  const formPieces = document.getElementById("form-achat-pieces");
  if (formPieces) {
    formPieces.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Devis pièces demandé avec succès !");
      formPieces.reset();
    });
  }

  // --- 9. FIDÉLITÉ (Calcul basique) ---
  const compteurVisites = document.getElementById("compteur-visites-fidelite");
  const statutFidelite = document.getElementById("statut-fidelite-message");
  if (compteurVisites && statutFidelite) {
    const visites = state.historique.length; // Exemple basique
    compteurVisites.textContent = visites;
    if (visites >= 4) {
      statutFidelite.innerHTML = '<span class="badge bg-success">Carte de fidélité attribuée !</span>';
    } else {
      statutFidelite.innerHTML = '<span class="badge bg-warning">Encore ' + (4 - visites) + ' visite(s) pour obtenir la carte</span>';
    }
  }

  // --- INITIALISATION INITIALE ---
  mettreAJourRendusVehicules();
  mettreAJourRecapitulatifRdv();
  mettreAJourHistoriqueRendu();
});