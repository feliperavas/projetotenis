const video = document.getElementById("video-centered");

// Controle da repetição a cada 30 segundos
video.addEventListener("ended", () => {
    setTimeout(() => {
        video.currentTime = 0; // Volta ao início do vídeo
        video.play(); // Reproduz novamente
    }, 30000); // 30 segundos em milissegundos
});

//Reponsivo menu

  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });




