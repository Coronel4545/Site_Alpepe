document.addEventListener('DOMContentLoaded', () => {
    const book = document.querySelector('.book');

    if (book) {
        book.addEventListener('mousemove', (e) => {
            // Obter as dimensões e posição do elemento do livro
            const { offsetX, offsetY } = e;
            const { clientWidth, clientHeight } = book;

            // Calcular a posição do mouse relativa ao centro do elemento (de -0.5 a 0.5)
            const centerX = clientWidth / 2;
            const centerY = clientHeight / 2;

            const deltaX = offsetX - centerX;
            const deltaY = offsetY - centerY;

            // Mapear a posição do mouse para ângulos de rotação
            // Quanto mais longe do centro, maior a rotação
            // Ajuste os multiplicadores (e.g., 10, -10) para controlar a intensidade do efeito
            const rotateY = (deltaX / centerX) * 10; // Rotacionar no eixo Y baseado no movimento horizontal
            const rotateX = (deltaY / centerY) * -10; // Rotacionar no eixo X baseado no movimento vertical (invertido para um efeito mais natural)

            // Aplicar a transformação 3D com perspectiva
            book.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        book.addEventListener('mouseleave', () => {
            // Resetar a transformação quando o mouse sair
            book.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        });

        // Opcional: Definir uma transformação inicial sutil quando o mouse entrar
        // book.addEventListener('mouseenter', () => {
        //     book.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1.02)'; // Exemplo
        // });
    }
}); 