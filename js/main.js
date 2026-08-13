/* =================================================================     
   APPLE-GRADE INTERACTION ENGINE — LUIS FLORES
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Smooth Scrolling para los enlaces de navegación interna
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. Efecto de aparición progresiva (Scroll Reveal) al estilo Apple
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Seleccionamos las secciones que queremos animar al hacer scroll
    const sectionsToAnimate = document.querySelectorAll('section, .experience-item');
    
    sectionsToAnimate.forEach(section => {
        section.classList.add('reveal-on-scroll');
        observer.observe(section);
    });

});
