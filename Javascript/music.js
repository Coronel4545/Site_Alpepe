document.addEventListener('DOMContentLoaded', () => {
    const audio = document.querySelector('audio');
    const targetSection = document.getElementById('sobre');
    let userInteracted = false;
    let audioPlayed = false; // Garante que o áudio toque apenas uma vez

    // Verifica se o elemento <audio> existe
    if (!audio) {
        console.error('Elemento <audio> não encontrado no DOM.');
        return;
    }

    // Configura o volume inicial para um nível suave
    audio.volume = 0.3; // Volume ajustado para ser suave

    // Detecta interação do usuário (clique ou toque)
    const enableAudioPlayback = () => {
        userInteracted = true;
        document.removeEventListener('click', enableAudioPlayback);
        document.removeEventListener('touchstart', enableAudioPlayback);
    };

    document.addEventListener('click', enableAudioPlayback);
    document.addEventListener('touchstart', enableAudioPlayback);

    // Função para tocar o áudio quando o usuário rolar até o final da seção "sobre"
    const playAudioWhenVisible = () => {
        if (!userInteracted || !targetSection || audioPlayed) return; // Verifica se o usuário interagiu, se a seção existe e se o áudio já foi tocado

        const sectionRect = targetSection.getBoundingClientRect();
        const isFullyVisible =
            sectionRect.top >= 0 && // O topo da seção está visível
            sectionRect.bottom <= window.innerHeight; // O final da seção está visível

        if (isFullyVisible) {
            audio.play().catch((error) => {
                console.error('Erro ao reproduzir o áudio:', error);
            });
            audioPlayed = true; // Marca o áudio como tocado
            window.removeEventListener('scroll', playAudioWhenVisible); // Remove o evento após tocar o áudio
        }
    };

    // Adiciona o evento de scroll para verificar a visibilidade da seção
    if (targetSection) {
        window.addEventListener('scroll', playAudioWhenVisible);
    }
});
