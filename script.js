// Función para abrir el lightbox y mostrar la imagen y la descripción
function openLightbox(imgElement) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const description = document.getElementById('lightbox-description');

    // Establecer la fuente de la imagen
    lightboxImg.src = imgElement.src;
    // Establecer la descripción
    description.textContent = "Descripción";  // Aquí puedes personalizar la descripción
    
    // Mostrar el lightbox
    lightbox.style.display = 'flex';
}

// Función para cerrar el lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

// Agregar el evento de clic a todas las imágenes dentro de la galería
document.querySelectorAll('.image-card img').forEach(img => {
    img.addEventListener('click', function() {
        openLightbox(this);  // Abrir el lightbox al hacer clic en la imagen
    });
});

// Agregar el evento de clic para cerrar el lightbox al hacer clic en el fondo
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightbox();  // Cerrar el lightbox si se hace clic fuera de la imagen
    }
});
