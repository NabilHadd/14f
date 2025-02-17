function openLightbox(imgElement) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxDescription = document.getElementById('lightbox-description');
    
    // Asignamos la imagen
    lightboxImg.src = imgElement.src;
    
    // Asignamos la descripción
    lightboxDescription.textContent = imgElement.nextElementSibling.textContent;
    
    // Mostramos el lightbox
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
