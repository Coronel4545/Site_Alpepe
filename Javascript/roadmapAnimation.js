document.addEventListener('DOMContentLoaded', () => {
    const roadmapItems = document.querySelectorAll('.roadmap-item');

    roadmapItems.forEach((item) => {
        item.addEventListener('click', () => {
            item.classList.toggle('flipped'); // Alterna a classe "flipped" ao clicar
        });
    });
});