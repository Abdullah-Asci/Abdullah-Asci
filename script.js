// Initialisation AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser les animations AOS
    AOS.init({
        duration: 800,
        easing: 'ease',
        once: true,
        offset: 100
    });
    
    // Navigation responsive
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');
    
    if(burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            burger.classList.toggle('active');
        });
    }
    
    // Fermer le menu lorsqu'un lien est cliqué
    const navItems = document.querySelectorAll('.nav-link');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
        });
    });
    
    // Navigation active au scroll
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        // Ajouter la classe scrolled à la navbar lorsqu'on scroll
        if(window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Navigation active au scroll
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if(window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // Filtrage des projets
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Retirer la classe active de tous les boutons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Ajouter la classe active au bouton cliqué
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if(filter === 'all') {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 300);
                } else if(card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 300);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Animation des barres de compétences
    const skillLevels = document.querySelectorAll('.skill-level');
    
    function animateSkills() {
        skillLevels.forEach(skill => {
            const width = skill.style.width;
            skill.style.width = '0';
            
            setTimeout(() => {
                skill.style.width = width;
            }, 500);
        });
    }
    
    // Observer for skills section
    const skillsSection = document.getElementById('competences');
    
    if(skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    animateSkills();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(skillsSection);
    }
    
    // Formulaire de contact
    const contactForm = document.getElementById('contactForm');
    
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simuler l'envoi du formulaire
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Envoi en cours...';
            
            // Simulation d'envoi (à remplacer par un vrai envoi AJAX)
            setTimeout(() => {
                alert('Votre message a été envoyé avec succès!');
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }, 1500);
        });
    }
    
    // Effet de parallaxe pour la section hero
    const hero = document.querySelector('.hero');
    
    if(hero) {
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY;
            if(scrollPos < hero.offsetHeight) {
                hero.style.backgroundPosition = `center ${scrollPos * 0.5}px`;
            }
        });
    }
    
    // Animation fluide pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
