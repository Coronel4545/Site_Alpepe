document.addEventListener('DOMContentLoaded', () => {
    const audio = document.querySelector('audio');
    let audioPlayed = false; // Garante que o áudio toque apenas uma vez
    let userInteracted = false; // Garante que o usuário interagiu com a página

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

        // Toca o áudio após 4 segundos da interação do usuário
        setTimeout(() => {
            if (!audioPlayed) {
                audio.play().catch((error) => {
                    console.error('Erro ao reproduzir o áudio:', error);
                });
                audioPlayed = true; // Marca o áudio como tocado
            }
        }, 4000); // 4 segundos de atraso
    };

    document.addEventListener('click', enableAudioPlayback);
    document.addEventListener('touchstart', enableAudioPlayback);
});
