const audio = document.querySelector('audio');
const targetSection = document.getElementById('sobre');
let userInteracted = false;

// Detecta interação do usuário (clique ou toque)
const enableAudioPlayback = () => {
    userInteracted = true;
    document.removeEventListener('click', enableAudioPlayback);
    document.removeEventListener('touchstart', enableAudioPlayback);
};

document.addEventListener('click', enableAudioPlayback);
document.addEventListener('touchstart', enableAudioPlayback);

const playAudioWhenVisible = () => {
    if (!userInteracted || !targetSection) return; // Verifica se o usuário interagiu e se a seção existe

    const sectionRect = targetSection.getBoundingClientRect();
    const isFullyVisible = sectionRect.top >= 0 && sectionRect.bottom <= window.innerHeight;

    if (isFullyVisible) {
        audio.play().catch((error) => {
            console.error('Erro ao reproduzir o áudio:', error);
        });
        window.removeEventListener('scroll', playAudioWhenVisible); // Remove o evento após tocar o áudio
    }
};

// Adiciona o evento de scroll para verificar a visibilidade da seção
if (targetSection) {
    window.addEventListener('scroll', playAudioWhenVisible);
}