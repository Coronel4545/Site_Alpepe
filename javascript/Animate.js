// Função para observar elementos e adicionar a classe especificada quando entrarem na viewport
function observeElementsForAnimation(selector, animationClass, threshold = 0.1) {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animationClass);
                // Opcional: Parar de observar depois que a animação for acionada
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: threshold
    });

    elements.forEach(element => {
        observer.observe(element);
    });
}

// Chamar a função para os elementos que precisam de animação ao rolar
document.addEventListener('DOMContentLoaded', () => {
    // Observar guardiões na seção about com animação slide-in
    observeElementsForAnimation('.about-row .Guardian1', 'visible-slide-in-left');
    observeElementsForAnimation('.about-row .Guardian2', 'visible-slide-in-right');
    // Observar cards na seção about com animação fade-in up
    observeElementsForAnimation('.about-card', 'visible-fade-in-up');
    // Observar container do swap com animação scale-in
    observeElementsForAnimation('.swap-container', 'visible-scale-in');
    // Observar cards na seção tokenomics com animação fade-in up e delay
    observeElementsForAnimation('.tokenomics-info-card', 'visible-fade-in-up-delayed', 1.0);
    // Observar itens na seção roadmap com animação fade-in e delay
    observeElementsForAnimation('.timeline-item', 'visible-fade-in-delayed');
    // Observar footer bottom com animação fade-in
    observeElementsForAnimation('.footer-bottom', 'visible-fade-in');
    
    // Adicionar outros seletores conforme necessário para animação
    // Exemplo: animar títulos de seção
     observeElementsForAnimation('section h2', 'visible-fade-in');
});
