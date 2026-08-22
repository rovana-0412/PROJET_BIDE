# 🚗 Bidè - AKIMMAKO Auto Services

**Plateforme web complète pour la gestion des services automobiles au Togo.**

Bidè est une solution numérique tout-en-un conçue pour les particuliers, les professionnels et les gestionnaires. Elle couvre la gestion des services (réparation, lavage, remorquage, parking, formation), la facturation, la gestion du réseau national (5 régions, 25 stations) et l'administration complète de la plateforme.

---

## 📦 Livrables & Démonstration

- 🔗 **Dépôt GitHub :** [Insérer le lien de votre repository ici]
- 🌐 **Plateforme fonctionnelle :** [Insérer le lien Netlify / Vercel / ou spécifier "Lancer en local avec Live Server"]
- 📄 **Cahier des charges détaillé :** Supervisé par toute l'équipe. Disponible dans le dossier `docs/`
- 📊 **Historique des commits & Rôles :** Suivi via l'outil **Trello** et disponible sur l'onglet "Insights" → "Contributors" de votre GitHub

---

## 📂 Arborescence du Projet

```text
PROJET_BIDE/
│
├── css/                        # Styles globaux du site public
├── images/                     # Images globales (logos, illustrations)
├── js/                         # Scripts globaux (navigation, formulaire, etc.)
├── pages/                      # Toutes les pages internes
│   ├── admin/                  # ESPACE ADMINISTRATEUR
│   │   ├── admin.html          # Dashboard Admin (Gestion des stations, clients, etc.)
│   │   ├── admin-script.js     # Logique du dashboard admin
│   │   └── admin-style.css     # Styles du dashboard admin
│   │
│   ├── depot_serge/            # ESPACE CLIENT (Nommé "Serge")
│   │   ├── CSS/                # Styles spécifiques à l'espace client
│   │   ├── Images/             # Images du dashboard client
│   │   ├── JS/                 # Scripts spécifiques à l'espace client
│   │   ├── clients.html        # Page principale de l'espace client
│   │   └── dashboard.html      # Tableau de bord client
│   │
│   ├── gestionnaire/           # ESPACE GESTIONNAIRE
│   │   ├── index.html          # Dashboard Gestionnaire
│   │   ├── script.js           # Logique de gestion (Clients, Véhicules, Services, Factures)
│   │   └── style.css           # Styles du dashboard gestionnaire
│   │
│   ├── MaJ_service/            # PAGE SERVICES PUBLICS
│   │   ├── image/              # Images des services (Réparation, Lavage, etc.)
│   │   ├── video/              # Vidéo d'arrière-plan du hero
│   │   ├── service.html        # Page des services avec carte interactive du Togo
│   │   ├── script.js           # Logique de la page services (Stations, Modal RDV)
│   │   └── style.css           # Styles de la page services
│   │
│   ├── connexion.html          # Page de connexion (Redirige vers les 3 dashboards)
│   ├── contact.html            # Page de contact (Formulaire + Google Maps + Horaires)
│   └── depot_serge.html        # Page de redirection spécifique (si utilisée)
│
├── videos/                     # Vidéos globales du site (Hero accueil)
├── README.md                   # Ce fichier
└── index.html                  # Page d'accueil du site public

---

## 🔐 Rôles & Accès (Système de Connexion)

La page `pages/connexion.html` permet de se connecter selon 3 rôles différents. Les identifiants de démonstration sont :

| Rôle | Email | Mot de passe | Redirection |
| :--- | :--- | :--- | :--- |
| **Administrateur** | `admin@bide.tg` | `password` | `pages/admin/admin.html` |
| **Gestionnaire** | `gestionnaire@bide.tg` | `password` | `pages/gestionnaire/index.html` |
| **Client** | `client@bide.tg` | `password` | `pages/depot_serge/clients.html` |

> 💡 *Le nom affiché dans les dashboards est récupéré via la session utilisateur (`sessionStorage`).*

---

## 🛠️ Fonctionnalités Principales

### 🌐 Site Public (index.html)
- Hero vidéo plein écran.
- Présentation des services (Parking, Location, Auto-école, Formation, Fidélité, Pièces).
- Section Témoignages, Partenariats Écoles, Newsletter.
- Footer complet avec horaires et réseaux sociaux.

### 🗺️ Page Services (MaJ_service/service.html)
- **Carte interactive du Togo** (SVG cliquable) pour sélectionner les 5 régions (Maritime, Plateaux, Centrale, Kara, Savanes).
- Affichage dynamique des 25 stations avec horaires.
- Modale de prise de rendez-vous.

### 👑 Dashboard Administrateur (pages/admin)
- Vue d'ensemble des KPIs (Clients, Gestionnaires, Stations, Demandes).
- Gestion du **Réseau Togo** (5 régions, 25 villes, gestionnaires).
- Gestion des Clients, Demandes de service, Stations de parking, Vente & Location.
- Gestion des Formations, Carte de fidélité, Newsletter et Partenariats.
- **Persistance des données** via `localStorage`.

### 📊 Dashboard Gestionnaire (pages/gestionnaire)
- Gestion complète des Clients, Véhicules, Services, Factures et Historiques.
- Modales d'ajout avec formulaires dynamiques (options conditionnelles selon le type de service).
- Recherche en temps réel dans les tableaux.

### 👤 Espace Client (pages/depot_serge)
- Tableau de bord avec statistiques personnelles.
- Gestion des véhicules et prise de rendez-vous.
- Consultation de l'historique des prestations et des tarifs.

---

### 🔴 Module Spécifique : Facturation (Module Gestionnaire)
- **Création de Facture :** Génération automatique de factures (FAC-XXXX) associées à un client, un véhicule et un service.
- **Gestion du Statut :** Permettre de marquer une facture comme "Payée", "En attente" ou "Annulée".
- **Calcul Automatique :** Afficher le montant total du service en FCFA.
- **Moyens de Paiement :** Intégration des moyens de paiement locaux (Espèces, T-Money, Flooz, Carte bancaire).
- **Historique :** Suivi des paiements et des factures impayées.

---

## 🎨 Technologies & Design

- **HTML5** : Structure sémantique.
- **CSS3** : Design moderne, responsive (Mobile-first) et animations.
- **JavaScript (Vanilla)** : Interactivité, manipulation du DOM, persistance des données.
- **Bootstrap 5** : Framework CSS pour la mise en page rapide.
- **Bootstrap Icons & FontAwesome** : Icônes.
- **SVG** : Carte interactive du Togo.

---

## 🚀 Lancement du Projet

1. **Téléchargez ou clonez** le dépôt GitHub.
2. Ouvrez le dossier dans votre éditeur de code (VS Code recommandé).
3. Pour une expérience optimale (éviter les erreurs de chemins), utilisez l'extension **Live Server** de VS Code ou lancez un serveur local (ex: `python -m http.server`).
4. Ouvrez `index.html` pour accéder au site public.
5. Rendez-vous sur `pages/connexion.html` pour tester les différents rôles.

---

## 📊 Gestion de Projet, Rôles & Responsabilités

| Membre | Rôle | Contribution Principale |
| :--- | :--- | :--- |
| **AKUESON Adoudé Claudia Rovana** | **Scrum Master** | Page Accueil, Page Contact, Page Connexion (HTML, CSS, JS, Bootstrap). **Rédaction du Cahier des Charges** (supervisé par toute l'équipe). |
| **CAMARA Guy Mari Mohamed** | Développeur Front-End | Page Services et Dashboard Admin (HTML, CSS, JS, Bootstrap). |
| **CHAOLD Komi Serge** | Développeur Front-End / UI | Dashboard Client (HTML, CSS, JS, Bootstrap), **Création de la Maquette et du Logo** (supervisés par l'équipe). |
| **APETOH Yannick-Eudes Cédric** | Développeur Front-End / Outils | Dashboard Gestionnaire et **Gestion de l'outil Trello** (Suivi des tâches). |

> **Historique des commits :** Consultez l'onglet **"Insights" → "Contributors"** ou la liste des commits sur GitHub pour voir la répartition du travail et la progression du développement.

---

## 📝 Auteurs & Licence

Projet développé dans le cadre de la plateforme **Bidè - AKIMMAKO Auto Services**.
© 2026 Bidè / AKIMMAKO Auto Services. Tous droits réservés.