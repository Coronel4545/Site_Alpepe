const upButton = document.getElementById('up');

window.addEventListener('scroll', () => {
    if (window.scrollY > 1500) {
        upButton.style.display = 'block';
    } else {
        upButton.style.display = 'none';
    }
});

upButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});