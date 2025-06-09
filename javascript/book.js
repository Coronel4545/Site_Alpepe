document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page');
    const prevButton = document.querySelector('.prev-page');
    const nextButton = document.querySelector('.next-page');
    const currentPageSpan = document.getElementById('current-page');
    let currentPage = 1;

    // Função para atualizar a página atual
    function updatePage(pageNumber) {
        pages.forEach(page => {
            page.classList.remove('active');
            if (parseInt(page.dataset.page) === pageNumber) {
                page.classList.add('active');
            }
        });
        currentPageSpan.textContent = pageNumber;
        
        // Atualizar estado dos botões
        prevButton.disabled = pageNumber === 1;
        nextButton.disabled = pageNumber === pages.length;
        
        // Adicionar/remover classe de desabilitado
        prevButton.classList.toggle('disabled', pageNumber === 1);
        nextButton.classList.toggle('disabled', pageNumber === pages.length);
    }

    // Event listeners para os botões
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            updatePage(currentPage);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPage < pages.length) {
            currentPage++;
            updatePage(currentPage);
        }
    });

    // Inicializar a primeira página
    updatePage(1);
}); 