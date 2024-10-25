// Seleccionar elementos
const videoItems = document.querySelectorAll('.video-item');
const videoModal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');
const closeModal = document.getElementById('closeModal');

// Función para abrir el modal y cargar el video
videoItems.forEach(item => {
    item.addEventListener('click', () => {
        const videoId = item.getAttribute('data-video-id');
        modalVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`; // Cargar video
        videoModal.style.display = 'flex'; // Mostrar modal
    });
});

// Función para cerrar el modal
closeModal.addEventListener('click', () => {
    modalVideo.src = ''; // Limpiar la fuente del video
    videoModal.style.display = 'none'; // Ocultar modal
});

// Cerrar modal al hacer clic fuera del video
videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        modalVideo.src = ''; // Limpiar la fuente del video
        videoModal.style.display = 'none'; // Ocultar modal
    }
});
