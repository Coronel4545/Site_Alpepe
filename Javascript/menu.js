function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
    
    // Fechar o menu quando clicar em algum link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('open');
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Adiciona o evento de clique para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Impede o comportamento padrão do link

            const targetId = this.getAttribute('href'); // Obtém o ID do destino
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth', // Ativa o scroll suave
                    block: 'start' // Alinha o topo do elemento com o topo da janela
                });
            }
        });
    });
});