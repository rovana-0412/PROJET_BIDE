# 🚗 Bidè — Plateforme web de gestion des services automobiles

> **Votre partenaire automobile à Lomé et dans tout le Togo — « Votre véhicule, notre priorité. »**

Bidè est une plateforme web complète de gestion des services automobiles (réparation, lavage, remorquage, parking, vente/location, formation, auto-école, fidélité), développée dans le cadre d'un projet pédagogique pour le compte de **AKIMMAKO Auto Services**.

Ce dépôt contient l'intégralité de la plateforme : **site public**, **carte interactive du Togo**, **système de connexion multi-rôles**, **3 dashboards (Admin, Gestionnaire, Client)**, **module de facturation**, et un **cahier des charges** détaillé.

---

## 1. Présentation

| Élément | Détail |
|---|---|
| Client | AKIMMAKO Auto Services — entrepreneur |
| Interlocuteur direct | Le professeur (représentant du propriétaire) |
| Équipe | 4 membres |

## 👨‍💻 Équipe de développement

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/rovana-0412/PROJET_BIDE/blob/main/images/claudia.jpeg?raw=true" width="120px"><br>
      <b>AKUESON Adoudé Claudia Rovana</b><br>
      Scrum Master / Développeuse
    </td>
    <td align="center">
      <img src="images/einstein.jpeg" width="120px"><br>
      <b>CAMARA Guy Mari Mohamed</b><br>
      Développeur
    </td>
    <td align="center">
      <img src="images/serge.jpeg" width="120px"><br>
      <b>CHAOLD Komi Serge</b><br>
      Développeur / UI
    </td>
    <td align="center">
      <img src="images/cedric.jpg" width="120px"><br>
      <b>APETOH Yannick-Eudes Cédric</b><br>
      Développeur
    </td>
  </tr>
</table>

| Durée du projet | 17/08/2026 → 24/08/2026 |
| Stack technique | Bootstrap 5.3, JavaScript (vanilla ES6+), HTML5, CSS3, Git / GitHub |
| Gestion de projet | Trello |
| Type de site | Statique (Bootstrap + JS), données locales (localStorage) |
| Localisation cible | **Togo** (5 régions, 25 stations) |

### Fonctionnalités livrées

- **Accueil** : bannière hero vidéo, présentation des services, chiffres clés, témoignages, partenariats, CTA.
- **Services** : page détaillée avec **carte interactive du Togo** (5 régions), liste des 25 stations.
- **Contact** : formulaire validé, carte Google Maps, horaires.
- **Connexion** : page de connexion avec **3 rôles** (Admin, Gestionnaire, Client), redirection automatique.
- **Espace Administrateur** : KPIs, gestion du réseau, gestionnaires, clients, newsletter, formations, partenariats.
- **Espace Gestionnaire** : gestion des clients, véhicules, services, **facturation**, historique.
- **Espace Client** : tableau de bord, gestion des véhicules, prise de RDV, profil, fidélité.
- **Facturation** : création de factures (FAC-XXXX), statuts, modes de paiement (T-Money, Flooz, Espèces, Carte), suivi.
- **Responsive** : site adapté à tous les écrans.

### Pages du site

| Page | Fichier | Contenu |
|---|---|---|
| Accueil | `index.html` | Hero vidéo, services, chiffres, témoignages, CTA |
| Services | `pages/MaJ_service/service.html` | Carte interactive, stations, modal RDV |
| Contact | `pages/contact.html` | Formulaire, carte, horaires |
| Connexion | `pages/connexion.html` | 3 rôles, redirection automatique |
| Espace Admin | `pages/admin/admin.html` | KPIs, réseau, gestionnaires, newsletter |
| Espace Gestionnaire | `pages/gestionnaire/index.html` | Clients, véhicules, services, factures |
| Espace Client | `pages/depot_serge/clients.html` | Tableau de bord, véhicules, RDV, profil |

---

## 2. Stack technique et architecture

### Charte graphique (du cahier des charges)

| Élément | Valeur |
|---|---|
| Couleur primaire | #FF4D2E (Orange dynamique) |
| Couleur secondaire | #1A1A1A (Noir élégant) |
| Couleur de fond | #F5F3EF (Crème) |
| Police titres | Sans-serif (Arial, Helvetica) |
| Police corps | Sans-serif (Arial, Helvetica) |
| Icônes | Bootstrap Icons |

---

## 3. Installation & lancement

Aucun build n'est nécessaire : le site est 100 % statique.

### Option 1 — Ouvrir directement

Ouvrez `index.html` dans votre navigateur (double-clic).

### Option 2 — Serveur local (recommandé)

```bash
# Python
python -m http.server 8000
# puis ouvrir http://localhost:8000

# Ou avec Node.js
npx serve .
---

## 5. Rôles & Accès (Système de Connexion)

| Rôle | Email | Mot de passe | Redirection |
| :--- | :--- | :--- | :--- |
| **Administrateur** | `admin@bide.tg` | `password` | `pages/admin/admin.html` |
| **Gestionnaire** | `gestionnaire@bide.tg` | `password` | `pages/gestionnaire/index.html` |
| **Client** | `client@bide.tg` | `password` | `pages/depot_serge/clients.html` |

---

## 6. Module Spécifique : Facturation

- **Création de Facture :** Génération automatique de factures (FAC-XXXX) associées à un client, un véhicule et un service.
- **Gestion du Statut :** Permettre de marquer une facture comme "Payée", "En attente" ou "Annulée".
- **Calcul Automatique :** Afficher le montant total du service en FCFA.
- **Moyens de Paiement :** Intégration des moyens de paiement locaux (Espèces, T-Money, Flooz, Carte bancaire).
- **Historique :** Suivi des paiements et des factures impayées.

---

```markdown
---

## 7. Cahier des Charges

Le cahier des charges complet (avec la partie facturation) est disponible dans le fichier `cahier_des_charges.md` (ou sur demande).

---

## 8. Gestion de Projet, Rôles & Responsabilités

| Membre | Rôle | Contribution Principale |
| :--- | :--- | :--- |
| **AKUESON Adoudé Claudia Rovana** | **Scrum Master** | Page Accueil, Page Contact, Page Connexion (HTML, CSS, JS, Bootstrap). **Rédaction du Cahier des Charges** (supervisé par toute l'équipe). |
| **CAMARA Guy Mari Mohamed** | Développeur Front-End | Page Services et Dashboard Admin (HTML, CSS, JS, Bootstrap). |
| **CHAOLD Komi Serge** | Développeur Front-End / UI | Dashboard Client (HTML, CSS, JS, Bootstrap), **Création de la Maquette et du Logo** (supervisés par l'équipe). |
| **APETOH Yannick-Eudes Cédric** | Développeur Front-End / Outils | Dashboard Gestionnaire et **Gestion de l'outil Trello** (Suivi des tâches). |

> **Historique des commits :** Consultez l'onglet **"Insights" → "Contributors"** ou la liste des commits sur GitHub pour voir la répartition du travail et la progression du développement.

---

```markdown
---

## 9. Livrables & Démonstration

- 🔗 **Dépôt GitHub :** [https://github.com/rovana-0412/PROJET_BIDE](https://github.com/rovana-0412/PROJET_BIDE)
- 🌐 **Plateforme web fonctionnelle :** [https://bide-akimmako.netlify.app/](https://bide-akimmako.netlify.app/)
- 📄 **Cahier des charges détaillé :** Disponible dans le dossier `cahier_des_charges.md` (ou sur demande)
- 📊 **Historique des commits & Rôles :** Visible sur l'onglet "Insights" → "Contributors" de votre GitHub

---

© 2026 Bidè — AKIMMAKO Auto Services. Projet pédagogique réalisé par une équipe de 4 développeurs.