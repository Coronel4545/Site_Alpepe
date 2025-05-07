document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.querySelector('.contact-form input[type="text"]');
        const email = document.querySelector('.contact-form input[type="email"]');
        const message = document.querySelector('.contact-form textarea');

        const mailtoLink = `mailto:support@ramceo.xyz?subject=Contato de ${encodeURIComponent(name.value)}&body=${encodeURIComponent(message.value)}%0A%0AEmail para resposta: ${encodeURIComponent(email.value)}`;

        try {
            window.location.href = mailtoLink;

            // Desfoca o fundo
            document.body.classList.add('blur');

            // Remove o desfoque após 3 segundos
            setTimeout(() => {
                document.body.classList.remove('blur');
            }, 3000);

            // Limpa os campos do formulário
            name.value = '';
            email.value = '';
            message.value = '';
        } catch (error) {
            console.error('Erro ao tentar enviar o e-mail:', error);
        }
    });
});