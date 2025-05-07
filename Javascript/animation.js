document.addEventListener('DOMContentLoaded', () => {
    // Função para animar elementos ao aparecerem na tela
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-text, .service-card, .team-member, .info-card, .contact-form');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;

            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('visible');
            }
        });
    };

    // Verifica elementos visíveis ao carregar a página
    animateOnScroll();

    // Verifica elementos visíveis durante o scroll
    window.addEventListener('scroll', animateOnScroll);

    // Efeito de parallax para a seção hero
    const hero = document.querySelector('.hero');
if (hero && window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
    });
}


    // Efeito de digitação no título da seção hero
    const typeWriter = (element, text, speed) => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(interval); // Para o intervalo quando o texto estiver completo
            }
        }, speed);
    };

    const heroTitle = document.querySelector('.hero-content h1.animate-text');
    if (heroTitle) {
        const text = heroTitle.textContent; // Obtém o texto original
        heroTitle.textContent = ''; // Limpa o texto para iniciar o efeito
        typeWriter(heroTitle, text, 100); // Chama a função com velocidade de 100ms por letra
    }
});