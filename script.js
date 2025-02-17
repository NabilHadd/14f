function openLightbox(imgElement) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const description = document.getElementById('lightbox-description');
    
    lightboxImg.src = imgElement.src;
    description.textContent = "Descripción"; // Puedes personalizar esta parte
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

// Agregar un listener para el clic en la imagen
document.querySelectorAll('.image-card img').forEach(img => {
    img.addEventListener('click', function() {
        openLightbox(this);
    });
});

// Agregar un listener para cerrar el lightbox al hacer clic en el fondo
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightbox();
    }
});
