/* =========================================================
   BIDÈ - AKIMMAKO AUTO SERVICES
   JAVASCRIPT - PAGE D'ACCUEIL
========================================================= */


/* =========================================================
   1. ATTENDRE QUE LA PAGE SOIT CHARGÉE
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       2. MENU HAMBURGER - FERMETURE AUTOMATIQUE
    ====================================================== */

    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarContent");

    if (navbarToggler && navbarCollapse) {

        const navLinks = navbarCollapse.querySelectorAll(".nav-link-bide");
        const loginLink = navbarCollapse.querySelector(".navbar-login");

        // Fermer le menu après un clic sur un lien
        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                if (window.innerWidth < 992) {
                    const bootstrapCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                    if (bootstrapCollapse) {
                        bootstrapCollapse.hide();
                    }
                }
            });
        });

        // Fermer le menu après un clic sur le bouton Connexion
        if (loginLink) {
            loginLink.addEventListener("click", function () {
                if (window.innerWidth < 992) {
                    const bootstrapCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                    if (bootstrapCollapse) {
                        bootstrapCollapse.hide();
                    }
                }
            });
        }

    }


    /* =====================================================
       3. GESTION DE L'ESPACE CLIENT DANS LA NAVBAR
    ====================================================== */

    function updateNavbarUser() {
        const navEspaceClient = document.getElementById('navEspaceClient');
        const navEspaceClientText = document.getElementById('navEspaceClientText');

        // Vérifier si l'utilisateur est connecté (via sessionStorage)
        const userRole = sessionStorage.getItem('userRole');
        const userName = sessionStorage.getItem('userName');

        if (userRole && navEspaceClient && navEspaceClientText) {
            // Utilisateur connecté
            switch (userRole) {
                case 'admin':
                    navEspaceClient.href = 'pages/admin/dashboard.html';
                    navEspaceClientText.textContent = '👑 Administration';
                    navEspaceClient.className = 'navbar-login admin';
                    break;
                case 'gestionnaire':
                    navEspaceClient.href = 'pages/gestionnaire/dashboard.html';
                    navEspaceClientText.textContent = '📊 Tableau de bord';
                    navEspaceClient.className = 'navbar-login gestionnaire';
                    break;
                case 'client':
                    navEspaceClient.href = 'pages/client/dashboard.html';
                    navEspaceClientText.textContent = '👤 ' + (userName || 'Mon compte');
                    navEspaceClient.className = 'navbar-login client';
                    break;
                default:
                    navEspaceClient.href = 'pages/connexion.html';
                    navEspaceClientText.textContent = '🔑 Espace client';
                    navEspaceClient.className = 'navbar-login';
            }
        }
    }

    // Appeler la fonction
    updateNavbarUser();


    /* =====================================================
       4. DÉFILEMENT FLUIDE (liens internes)
    ====================================================== */

    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                event.preventDefault();
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    /* =====================================================
       5. VIDÉO HERO - GESTION DES ERREURS
    ====================================================== */

    const heroVideo = document.querySelector(".hero-video");

    if (heroVideo) {
        heroVideo.addEventListener("error", function () {
            console.warn("La vidéo du fond n'a pas pu être chargée.");
            heroVideo.style.display = "none";
        });

        const playVideo = heroVideo.play();
        if (playVideo !== undefined) {
            playVideo.catch(function () {
                console.log("La lecture automatique de la vidéo a été bloquée.");
            });
        }
    }


    /* =====================================================
       6. ANIMATION DES CARTES SERVICES (Intersection Observer)
    ====================================================== */

    const serviceCards = document.querySelectorAll(".home-service-card");

    if (serviceCards.length > 0 && "IntersectionObserver" in window) {
        const serviceObserver = new IntersectionObserver(
            function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("service-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15
            }
        );

        serviceCards.forEach(function (card) {
            serviceObserver.observe(card);
        });
    }


    /* =====================================================
       7. ANIMATION DES CARTES "POURQUOI BIDÈ"
    ====================================================== */

    const reasonCards = document.querySelectorAll(".reason-card");

    if (reasonCards.length > 0 && "IntersectionObserver" in window) {
        const reasonObserver = new IntersectionObserver(
            function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("reason-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15
            }
        );

        reasonCards.forEach(function (card) {
            reasonObserver.observe(card);
        });
    }


    /* =====================================================
       8. ANIMATION DES CARTES PARTENAIRES
    ====================================================== */

    const partnerCards = document.querySelectorAll(".partner-card");

    if (partnerCards.length > 0 && "IntersectionObserver" in window) {
        const partnerObserver = new IntersectionObserver(
            function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("partner-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15
            }
        );

        partnerCards.forEach(function (card) {
            partnerObserver.observe(card);
        });
    }


    /* =====================================================
       9. ANIMATION DES TÉMOIGNAGES
    ====================================================== */

    const testimonialCards = document.querySelectorAll(".testimonial-card");

    if (testimonialCards.length > 0 && "IntersectionObserver" in window) {
        const testimonialObserver = new IntersectionObserver(
            function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("testimonial-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15
            }
        );

        testimonialCards.forEach(function (card) {
            testimonialObserver.observe(card);
        });
    }


    /* =====================================================
       10. ANIMATION DES CHIFFRES (statistiques)
    ====================================================== */

    const statistics = document.querySelectorAll(".display-4.fw-bold.text-danger");

    if (statistics.length > 0 && "IntersectionObserver" in window) {
        const statisticsObserver = new IntersectionObserver(
            function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.5
            }
        );

        statistics.forEach(function (stat) {
            stat.style.opacity = "0";
            stat.style.transform = "translateY(15px)";
            stat.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            statisticsObserver.observe(stat);
        });
    }


    /* =====================================================
       11. NEWSLETTER - VALIDATION ET ENVOI
    ====================================================== */

    const newsletterForm = document.querySelector(".newsletter-section form");

    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Supprimer les classes de validation précédentes
            emailInput.classList.remove("is-invalid", "is-valid");

            if (!email) {
                showToast("⚠️ Veuillez entrer votre adresse email.", "error");
                emailInput.classList.add("is-invalid");
                return;
            }

            if (!emailRegex.test(email)) {
                showToast("⚠️ Veuillez entrer une adresse email valide.", "error");
                emailInput.classList.add("is-invalid");
                return;
            }

            // Validation réussie
            emailInput.classList.add("is-valid");
            showToast("✅ Merci ! Vous êtes inscrit à la newsletter.", "success");

            // Simuler l'envoi vers le serveur
            const formData = {
                email: email
            };
            console.log("📨 Inscription newsletter :", formData);

            // Réinitialiser le formulaire après 3 secondes
            setTimeout(function () {
                this.reset();
                emailInput.classList.remove("is-valid");
            }.bind(this), 3000);
        });

        // Nettoyer la validation lors de la saisie
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        if (emailInput) {
            emailInput.addEventListener("input", function () {
                if (this.classList.contains("is-invalid")) {
                    this.classList.remove("is-invalid");
                }
                if (this.classList.contains("is-valid")) {
                    this.classList.remove("is-valid");
                }
            });
        }
    }


    /* =====================================================
       12. GESTION DES TOASTS (notifications)
    ====================================================== */

    function showToast(message, type) {
        // Supprimer les toasts existants
        const existingToasts = document.querySelectorAll(".toast-message");
        existingToasts.forEach(function (toast) {
            toast.remove();
        });

        // Créer le conteneur
        const toastContainer = document.createElement("div");
        toastContainer.className = "toast-message";

        // Couleurs selon le type
        let backgroundColor = "#3B82F6"; // Bleu par défaut
        if (type === "success") {
            backgroundColor = "#10B981"; // Vert
        } else if (type === "error") {
            backgroundColor = "#EF4444"; // Rouge
        } else if (type === "info") {
            backgroundColor = "#3B82F6"; // Bleu
        } else if (type === "warning") {
            backgroundColor = "#F59E0B"; // Jaune
        }

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
            background: ${backgroundColor};
        `;

        toastContainer.textContent = message;

        document.body.appendChild(toastContainer);

        // Auto-suppression après 5 secondes
        setTimeout(function () {
            toastContainer.style.opacity = "0";
            toastContainer.style.transition = "opacity 0.3s ease";
            setTimeout(function () {
                toastContainer.remove();
            }, 300);
        }, 5000);
    }


    /* =====================================================
       13. EFFET DE SCROLL SUR LA NAVBAR
    ====================================================== */

    const navbar = document.querySelector(".navbar-bide");
    let lastScroll = 0;

    if (navbar) {
        window.addEventListener("scroll", function () {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll > 100) {
                navbar.style.background = "rgba(18, 18, 18, 0.95)";
                navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.2)";
                navbar.style.transition = "background 0.3s ease, box-shadow 0.3s ease";
            } else {
                navbar.style.background = "rgba(18, 18, 18, 0.8)";
                navbar.style.boxShadow = "none";
            }

            lastScroll = currentScroll;
        });
    }


    /* =====================================================
       14. ANNÉE AUTOMATIQUE DANS LE FOOTER
    ====================================================== */

    const footerText = document.querySelector("footer");
    if (footerText) {
        const currentYear = new Date().getFullYear();
        footerText.innerHTML = footerText.innerHTML.replace(/©\s*2026/g, "© " + currentYear);
    }


    /* =====================================================
       15. DÉTECTION DE LA PAGE ACTIVE
    ====================================================== */

    const currentPage = window.location.pathname.split("/").pop();
    const navigationLinks = document.querySelectorAll(".nav-link-bide");

    navigationLinks.forEach(function (link) {
        const linkPage = link.getAttribute("href");

        if (
            linkPage === currentPage ||
            (currentPage === "" && linkPage === "index.html") ||
            (currentPage === "/" && linkPage === "index.html") ||
            (currentPage === "index.html" && linkPage === "index.html")
        ) {
            link.classList.add("active");
        }
    });


    /* =====================================================
       16. EFFET DE PARALLAXE SUR LE HERO
    ====================================================== */

    const heroSection = document.querySelector(".hero-video-section");

    if (heroSection) {
        window.addEventListener("scroll", function () {
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            const heroHeight = heroSection.offsetHeight;

            if (scrollPosition < heroHeight) {
                const video = heroSection.querySelector(".hero-video");
                if (video) {
                    const scale = 1 + (scrollPosition * 0.0002);
                    video.style.transform = "translate(-50%, -50%) scale(" + scale + ")";
                    video.style.transition = "transform 0.1s ease";
                }
            }
        });
    }


    /* =====================================================
       17. GESTION DES CARTES SERVICE AVEC BADGE "NOUVEAU"
    ====================================================== */

    const serviceCardsWithBadge = document.querySelectorAll(".home-service-card .badge.bg-danger");

    serviceCardsWithBadge.forEach(function (badge) {
        // Ajouter un tooltip
        badge.setAttribute("title", "Nouveau service disponible !");
        badge.style.cursor = "help";
    });


    /* =====================================================
       18. LAZY LOADING DES IMAGES
    ====================================================== */

    if ("loading" in HTMLImageElement.prototype) {
        // Le navigateur supporte le lazy loading natif
        console.log("✅ Lazy loading natif supporté.");
    } else {
        // Fallback pour les navigateurs plus anciens
        const lazyImages = document.querySelectorAll('img[data-src]');
        if (lazyImages.length > 0 && "IntersectionObserver" in window) {
            const imageObserver = new IntersectionObserver(function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute("data-src");
                        observer.unobserve(img);
                    }
                });
            });

            lazyImages.forEach(function (img) {
                imageObserver.observe(img);
            });
        }
    }


    /* =====================================================
       19. GESTION DU SCROLL POUR RÉVÉLER LE CTA
    ====================================================== */

    const ctaSection = document.querySelector(".home-cta");
    if (ctaSection && "IntersectionObserver" in window) {
        const ctaObserver = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";
                        ctaObserver.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.3
            }
        );

        ctaSection.style.opacity = "0";
        ctaSection.style.transform = "translateY(30px)";
        ctaSection.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        ctaObserver.observe(ctaSection);
    }


    /* =====================================================
       20. DÉTECTION DES RÉSEAUX SOCIAUX (hover)
    ====================================================== */

    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(function (link) {
        link.addEventListener('mouseenter', function () {
            this.style.color = '#FF4D2E';
            this.style.transform = 'translateY(-3px)';
            this.style.transition = 'all 0.3s ease';
        });
        link.addEventListener('mouseleave', function () {
            this.style.color = '#6B7280';
            this.style.transform = 'translateY(0)';
        });
    });


    /* =====================================================
       21. FERMETURE DU MENU MOBILE APRÈS CLIC SUR ESPACE CLIENT
    ====================================================== */

    const espaceClientLink = document.getElementById('navEspaceClient');
    if (espaceClientLink) {
        espaceClientLink.addEventListener('click', function () {
            if (window.innerWidth < 992 && navbarCollapse) {
                const bootstrapCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bootstrapCollapse) {
                    bootstrapCollapse.hide();
                }
            }
        });
    }


    /* =====================================================
       22. MESSAGE DE CONSOLE
    ====================================================== */

    console.log("✅ Bidè - AKIMMAKO Auto Services : JavaScript chargé avec succès.");
    console.log("📅 Année : " + new Date().getFullYear());

});


/* =========================================================
   FONCTION DE DÉCONNEXION (globale)
========================================================= */

function logout() {
    sessionStorage.removeItem('userRole');
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('userId');
    window.location.href = 'index.html';
}


/* =========================================================
   FONCTION DE CONNEXION (globale)
========================================================= */

function loginUser(role, name, id) {
    sessionStorage.setItem('userRole', role);
    sessionStorage.setItem('userName', name);
    sessionStorage.setItem('userId', id);

    // Rediriger vers le bon dashboard
    switch (role) {
        case 'admin':
            window.location.href = 'pages/admin/dashboard.html';
            break;
        case 'gestionnaire':
            window.location.href = 'pages/gestionnaire/dashboard.html';
            break;
        case 'client':
            window.location.href = 'pages/client/dashboard.html';
            break;
        default:
            window.location.href = 'index.html';
    }
}

/* =========================================================
   NAVBAR - EFFET AU SCROLL
========================================================= */

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar-bide");

    window.addEventListener("scroll", function () {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
    });
});

/* =========================================================
   PAGE CONTACT - JAVASCRIPT SPÉCIFIQUE
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       GESTION DU FORMULAIRE DE CONTACT
    ====================================================== */

    const contactForm = document.querySelector('.contact-form-wrapper form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Récupération des champs
            const prenom = document.getElementById('prenom');
            const nom = document.getElementById('nom');
            const email = document.getElementById('email');
            const telephone = document.getElementById('telephone');
            const sujet = document.getElementById('sujet');
            const message = document.getElementById('message');

            // Validation
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

            // Validation du téléphone (optionnelle)
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
                const formData = {
                    prenom: prenom.value.trim(),
                    nom: nom.value.trim(),
                    email: email.value.trim(),
                    telephone: telephone.value.trim(),
                    sujet: sujet.value,
                    message: message.value.trim()
                };

                console.log('📨 Données du formulaire :', formData);

                showToast('✅ Message envoyé avec succès !', 'success');

                contactForm.reset();
                contactForm.querySelectorAll('.is-valid, .is-invalid').forEach(function (el) {
                    el.classList.remove('is-valid', 'is-invalid');
                });

                // Ici, tu peux ajouter l'envoi vers un serveur
                // fetch('/api/contact', { method: 'POST', ... })

            } else {
                showToast('⚠️ ' + errorMessages.join(' '), 'error');

                const firstInvalid = contactForm.querySelector('.is-invalid');
                if (firstInvalid) {
                    firstInvalid.focus();
                }
            }
        });

        // Nettoyer les validations lors de la saisie
        contactForm.querySelectorAll('input, textarea, select').forEach(function (field) {
            field.addEventListener('input', function () {
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

});