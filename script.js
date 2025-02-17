function openLightbox(imgElement) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxDescription = document.getElementById('lightbox-description');
    const lightboxLongDescription = document.getElementById('lightbox-long-description');
    
    // Asignamos la imagen
    lightboxImg.src = imgElement.src;
    
    // Asignamos la descripción corta (lo que está en el <p> de cada imagen)
    lightboxDescription.textContent = imgElement.nextElementSibling.textContent;
    
    // Asignamos la descripción larga desde el atributo data-description
    lightboxLongDescription.textContent = imgElement.getAttribute('data-description');
    
    // Mostramos el lightbox
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
