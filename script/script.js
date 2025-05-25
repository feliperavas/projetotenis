const video = document.getElementById("video-centered");

// Controle da repetição a cada 30 segundos
video.addEventListener("ended", () => {
    setTimeout(() => {
        video.currentTime = 0; // Volta ao início do vídeo
        video.play(); // Reproduz novamente
    }, 30000); // 30 segundos em milissegundos
});




