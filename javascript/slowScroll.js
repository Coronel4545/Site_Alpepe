// Função para verificar se um elemento está visível na viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Função para adicionar a classe 'visible' aos guardiões quando a seção about estiver visível
function handleScroll() {
    const aboutSection = document.getElementById('about');
    const guardian1 = document.querySelector('.Guardian1');
    const guardian2 = document.querySelector('.Guardian2');

    // Verifica se os elementos existem antes de tentar acessar suas propriedades
    if (aboutSection && guardian1 && guardian2) {
        if (isElementInViewport(aboutSection)) {
            guardian1.classList.add('visible');
            guardian2.classList.add('visible');
            // Opcional: Remover o listener depois que a animação acontecer uma vez
            // window.removeEventListener('scroll', handleScroll);
        }
    }
}

// Adicionar o evento de scroll
window.addEventListener('scroll', handleScroll);

// Verificar a posição inicial ao carregar a página
handleScroll();

// Lógica para rolagem suave ao clicar nos links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return; // Ignora links vazios

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });

            // Opcional: Fechar menu mobile se estiver aberto (depende da sua implementação de menu)
            // const mobileMenu = document.querySelector('.nav-links');
            // if (mobileMenu && mobileMenu.classList.contains('active')) {
            //     mobileMenu.classList.remove('active');
            // }
        }
    });
});

// Lógica para seleção de moeda na seção Swap
document.addEventListener('DOMContentLoaded', function() {
    const currencyButtons = document.querySelectorAll('.currency-button');

    // Função para lidar com o clique nos botões de moeda
    function handleCurrencyClick(event) {
        // Remover a classe 'selected' de todos os botões
        currencyButtons.forEach(button => {
            button.classList.remove('selected');
        });

        // Adicionar a classe 'selected' apenas ao botão clicado
        event.currentTarget.classList.add('selected');

        // Você pode adicionar lógica aqui para armazenar a moeda selecionada
        // Por exemplo: const selectedCurrency = event.currentTarget.dataset.currency;
        // console.log('Moeda selecionada:', selectedCurrency);
    }

    // Adicionar event listener de clique a cada botão de moeda
    currencyButtons.forEach(button => {
        button.addEventListener('click', handleCurrencyClick);
    });

    // Selecionar USDT por padrão ao carregar a página
    const defaultCurrencyButton = document.querySelector('.currency-button[data-currency="USDT"]');
    if (defaultCurrencyButton) {
        defaultCurrencyButton.classList.add('selected');
    }
});

