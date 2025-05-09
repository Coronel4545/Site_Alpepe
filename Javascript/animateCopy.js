function copyContract() {
    const messageDiv = document.getElementById('message');

    if (!navigator.clipboard) {
        console.error('Clipboard API não suportada pelo navegador.');
        messageDiv.textContent = 'Seu navegador não suporta cópia automática. Copie manualmente: 0x223009A2abDBFc2ccebCECdf420820b6ae0692eA';
        messageDiv.classList.add('show');

        // Remove a mensagem após 5 segundos
        setTimeout(() => {
            messageDiv.classList.remove('show');
        }, 5000);
        return;
    }

    // Copia o contrato para a área de transferência
    navigator.clipboard.writeText('0x223009A2abDBFc2ccebCECdf420820b6ae0692eA').then(() => {
        // Exibe a mensagem de notificação
        messageDiv.textContent = 'Contrato copiado com sucesso!';
        messageDiv.classList.add('show');

        // Remove a mensagem após 3 segundos
        setTimeout(() => {
            messageDiv.classList.remove('show');
        }, 3000);
    }).catch((error) => {
        console.error('Erro ao copiar o contrato:', error);
        messageDiv.textContent = 'Erro ao copiar o contrato. Tente novamente.';
        messageDiv.classList.add('show');

        // Remove a mensagem após 5 segundos
        setTimeout(() => {
            messageDiv.classList.remove('show');
        }, 5000);
    });
}

// Adiciona o evento de clique ao botão "Copiar contrato"
document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.querySelector('#home .hero-content button'); // Seleciona o botão dentro da seção #home
    if (copyButton) {
        copyButton.addEventListener('click', (e) => {
            e.preventDefault(); // Evita o comportamento padrão do botão
            copyContract();
        });
    }
});