function openLightbox(imgElement) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxDescription = document.getElementById('lightbox-description');
    const lightboxLongDescription = document.getElementById('lightbox-long-description');
    
    // Asignamos la imagen
    lightboxImg.src = imgElement.src;
    
    // Asignamos la descripción
    lightboxDescription.textContent = imgElement.nextElementSibling.textContent;
    
    // Agregar una descripción larga específica a cada imagen si lo deseas
    lightboxLongDescription.textContent = "Descripción adicional: Esta es una descripción genérica. Cambia este texto por uno más personalizado para cada imagen.";

    // Mostramos el lightbox
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
