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



/* =========================================================
   PAGE CONTACT - JAVASCRIPT SPÉCIFIQUE
========================================================= */

// Attend que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {

    /* =========================================================
       1. GESTION DU FORMULAIRE DE CONTACT
    ========================================================= */

    const contactForm = document.querySelector('.contact-form-wrapper form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Empêche l'envoi par défaut

            // Récupération des champs
            const prenom = document.getElementById('prenom');
            const nom = document.getElementById('nom');
            const email = document.getElementById('email');
            const telephone = document.getElementById('telephone');
            const sujet = document.getElementById('sujet');
            const message = document.getElementById('message');

            // Validation simple
            let isValid = true;
            let errorMessages = [];

            // Validation du prénom
            if (!prenom.value.trim()) {
                isValid = false;
                errorMessages.push('Veuillez renseigner votre prénom.');
                prenom.classList.add('is-invalid');
            } else {
                prenom.classList.remove('is-invalid');
                prenom.classList.add('is-valid');
            }

            // Validation du nom
            if (!nom.value.trim()) {
                isValid = false;
                errorMessages.push('Veuillez renseigner votre nom.');
                nom.classList.add('is-invalid');
            } else {
                nom.classList.remove('is-invalid');
                nom.classList.add('is-valid');
            }

            // Validation de l'email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
                isValid = false;
                errorMessages.push('Veuillez renseigner une adresse email valide.');
                email.classList.add('is-invalid');
            } else {
                email.classList.remove('is-invalid');
                email.classList.add('is-valid');
            }

            // Validation du téléphone (optionnelle mais recommandée)
            if (telephone.value.trim() && telephone.value.trim().length < 8) {
                isValid = false;
                errorMessages.push('Le numéro de téléphone doit contenir au moins 8 chiffres.');
                telephone.classList.add('is-invalid');
            } else {
                telephone.classList.remove('is-invalid');
                if (telephone.value.trim()) {
                    telephone.classList.add('is-valid');
                }
            }

            // Validation du sujet
            if (!sujet.value) {
                isValid = false;
                errorMessages.push('Veuillez sélectionner un sujet.');
                sujet.classList.add('is-invalid');
            } else {
                sujet.classList.remove('is-invalid');
                sujet.classList.add('is-valid');
            }

            // Validation du message
            if (!message.value.trim() || message.value.trim().length < 10) {
                isValid = false;
                errorMessages.push('Veuillez renseigner un message d\'au moins 10 caractères.');
                message.classList.add('is-invalid');
            } else {
                message.classList.remove('is-invalid');
                message.classList.add('is-valid');
            }

            // Si le formulaire est valide
            if (isValid) {
                // Récupérer les données
                const formData = {
                    prenom: prenom.value.trim(),
                    nom: nom.value.trim(),
                    email: email.value.trim(),
                    telephone: telephone.value.trim(),
                    sujet: sujet.value,
                    message: message.value.trim()
                };

                console.log('📨 Données du formulaire :', formData);

                // Afficher un message de succès
                showToast('✅ Message envoyé avec succès !', 'success');

                // Réinitialiser le formulaire
                contactForm.reset();

                // Supprimer les classes de validation
                contactForm.querySelectorAll('.is-valid, .is-invalid').forEach(function(el) {
                    el.classList.remove('is-valid', 'is-invalid');
                });

                // Ici, tu peux ajouter l'envoi vers un serveur
                // Exemple avec fetch (à décommenter si nécessaire) :
                /*
                fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                })
                .then(response => response.json())
                .then(data => {
                    console.log('✅ Réponse du serveur :', data);
                    showToast('✅ Message envoyé avec succès !', 'success');
                    contactForm.reset();
                })
                .catch(error => {
                    console.error('❌ Erreur :', error);
                    showToast('❌ Une erreur est survenue. Veuillez réessayer.', 'error');
                });
                */

            } else {
                // Afficher les erreurs
                showToast('⚠️ ' + errorMessages.join(' '), 'error');
                
                // Scroll vers le premier champ invalide
                const firstInvalid = contactForm.querySelector('.is-invalid');
                if (firstInvalid) {
                    firstInvalid.focus();
                }
            }
        });

        // Nettoyer les validations lors de la saisie
        contactForm.querySelectorAll('input, textarea, select').forEach(function(field) {
            field.addEventListener('input', function() {
                if (this.classList.contains('is-invalid')) {
                    this.classList.remove('is-invalid');
                }
                if (this.value.trim()) {
                    this.classList.add('is-valid');
                } else {
                    this.classList.remove('is-valid');
                }
            });
        });
    }


    /* =========================================================
       2. GESTION DES TOASTS (notifications)
    ========================================================= */

    function showToast(message, type) {
        // Supprimer les toasts existants
        const existingToasts = document.querySelectorAll('.toast-message');
        existingToasts.forEach(function(toast) {
            toast.remove();
        });

        // Créer le conteneur
        const toastContainer = document.createElement('div');
        toastContainer.className = 'toast-message';
        toastContainer.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            max-width: 400px;
            padding: 16px 24px;
            border-radius: 8px;
            color: #fff;
            font-weight: 600;
            font-size: 0.95rem;
            z-index: 9999;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.3s ease;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        `;

        // Couleurs selon le type
        if (type === 'success') {
            toastContainer.style.background = '#10B981';
        } else if (type === 'error') {
            toastContainer.style.background = '#EF4444';
        } else {
            toastContainer.style.background = '#3B82F6';
        }

        toastContainer.textContent = message;

        document.body.appendChild(toastContainer);

        // Animation d'entrée
        setTimeout(function() {
            toastContainer.style.opacity = '1';
            toastContainer.style.transform = 'translateY(0)';
        }, 10);

        // Auto-suppression après 5 secondes
        setTimeout(function() {
            toastContainer.style.opacity = '0';
            toastContainer.style.transform = 'translateY(20px)';
            setTimeout(function() {
                toastContainer.remove();
            }, 300);
        }, 5000);
    }


    /* =========================================================
       3. COPIE DES INFORMATIONS DE CONTACT
    ========================================================= */

    // Copier le téléphone
    const phoneElement = document.querySelector('.info-card a[href^="tel:"]');
    if (phoneElement) {
        phoneElement.addEventListener('click', function(e) {
            e.preventDefault();
            const phoneNumber = this.getAttribute('href').replace('tel:', '');
            navigator.clipboard.writeText(phoneNumber).then(function() {
                showToast('📱 Numéro copié dans le presse-papier !', 'success');
            }).catch(function() {
                // Fallback pour les navigateurs qui ne supportent pas clipboard
                window.location.href = 'tel:' + phoneNumber;
            });
        });
    }

    // Copier l'email
    const emailElement = document.querySelector('.info-card a[href^="mailto:"]');
    if (emailElement) {
        emailElement.addEventListener('click', function(e) {
            e.preventDefault();
            const emailAddress = this.getAttribute('href').replace('mailto:', '');
            navigator.clipboard.writeText(emailAddress).then(function() {
                showToast('📧 Email copié dans le presse-papier !', 'success');
            }).catch(function() {
                window.location.href = 'mailto:' + emailAddress;
            });
        });
    }


    /* =========================================================
       4. CHARGEUR DE CARTE GOOGLE MAPS (lazy loading)
    ========================================================= */

    const mapIframe = document.querySelector('.map-container iframe');
    if (mapIframe) {
        // Observer l'entrée dans le viewport
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const iframe = entry.target;
                    // Charger la carte si elle n'est pas déjà chargée
                    if (!iframe.src || iframe.src === '') {
                        iframe.src = iframe.dataset.src || iframe.getAttribute('data-src') || iframe.src;
                    }
                    observer.unobserve(iframe);
                }
            });
        }, {
            threshold: 0.1
        });

        observer.observe(mapIframe);
    }


    /* =========================================================
       5. SCROLL DOUX VERS LE FORMULAIRE
    ========================================================= */

    // Bouton "Nous contacter" du CTA
    const ctaButton = document.querySelector('.contact-cta .btn-light');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            if (target && target.startsWith('#')) {
                const targetElement = document.querySelector(target);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    }


    /* =========================================================
       6. MASQUER/REMONTER LA NAVBAR AU SCROLL
    ========================================================= */

    let lastScroll = 0;
    const navbar = document.querySelector('.navbar-bide');

    if (navbar) {
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll > 100) {
                navbar.style.background = 'rgba(18, 18, 18, 0.95)';
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
                navbar.style.transition = 'background 0.3s ease, box-shadow 0.3s ease';
            } else {
                navbar.style.background = 'transparent';
                navbar.style.boxShadow = 'none';
            }

            lastScroll = currentScroll;
        });
    }


    /* =========================================================
       7. EFFET PARALLAXE SUR LA BANNIÈRE (optionnel)
    ========================================================= */

    const contactHero = document.querySelector('.contact-hero');
    if (contactHero) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            const heroOffset = contactHero.offsetTop;
            const windowHeight = window.innerHeight;

            if (scrollPosition < heroOffset + windowHeight) {
                const parallaxValue = scrollPosition * 0.3;
                contactHero.style.backgroundPositionY = (parallaxValue) + 'px';
            }
        });
    }


    /* =========================================================
       8. VALIDATION EN TEMPS RÉEL (champs avec contraintes)
    ========================================================= */

    // Validation de l'email en temps réel
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.value.trim() && !emailRegex.test(this.value.trim())) {
                this.classList.add('is-invalid');
                this.classList.remove('is-valid');
            } else if (this.value.trim()) {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
            }
        });
    }

    // Validation du téléphone en temps réel
    const telephoneInput = document.getElementById('telephone');
    if (telephoneInput) {
        telephoneInput.addEventListener('blur', function() {
            const phoneValue = this.value.trim().replace(/\s/g, '');
            if (phoneValue && phoneValue.length < 8) {
                this.classList.add('is-invalid');
                this.classList.remove('is-valid');
            } else if (phoneValue) {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
            }
        });
    }

    // Validation du message en temps réel
    const messageInput = document.getElementById('message');
    if (messageInput) {
        messageInput.addEventListener('blur', function() {
            if (this.value.trim() && this.value.trim().length < 10) {
                this.classList.add('is-invalid');
                this.classList.remove('is-valid');
            } else if (this.value.trim()) {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
            }
        });
    }


    /* =========================================================
       9. ANIMATION DES CARTES AU SCROLL
    ========================================================= */

    const infoCards = document.querySelectorAll('.info-card');
    if (infoCards.length > 0) {
        const cardObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    cardObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });

        infoCards.forEach(function(card) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            cardObserver.observe(card);
        });
    }


    /* =========================================================
       10. FERMETURE DU MENU MOBILE APRÈS CLIC
    ========================================================= */

    const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .navbar-login');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const toggler = document.querySelector('.navbar-toggler');
                if (toggler) {
                    toggler.click();
                }
            }
        });
    });


    /* =========================================================
       11. MISE À JOUR DE L'ANNÉE DANS LE FOOTER
    ========================================================= */

    const footerYear = document.querySelector('footer .border-top div:first-child');
    if (footerYear) {
        const currentYear = new Date().getFullYear();
        footerYear.textContent = footerYear.textContent.replace('2026', currentYear);
    }


    /* =========================================================
       12. GESTION DES CHAMPS REQUIS AVEC ASTERISQUE
    ========================================================= */

    document.querySelectorAll('.contact-form-wrapper [required]').forEach(function(field) {
        const label = field.closest('.col-12, .col-md-6, .col-md-4');
        if (label) {
            const labelElement = label.querySelector('.form-label');
            if (labelElement) {
                // Ajouter un astérisque rouge si le champ est requis
                if (!labelElement.innerHTML.includes('*')) {
                    labelElement.innerHTML += ' <span style="color: #EF4444;">*</span>';
                }
            }
        }
    });

});