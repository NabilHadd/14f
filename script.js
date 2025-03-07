function openLightbox(imgElement) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxDescription = document.getElementById('lightbox-description');
    const lightboxLongDescription = document.getElementById('lightbox-long-description');
    
    // Asignamos la imagen
    lightboxImg.src = imgElement.src;
    
    // Asignamos la descripción corta
    lightboxDescription.textContent = imgElement.nextElementSibling.textContent;
    
    // Reemplazamos \n por <br> en la descripción larga
    let description = imgElement.dataset.description; // Usa dataset en lugar de getAttribute
    lightboxLongDescription.innerHTML = description.replace(/\\n/g, '<br>');

    // Mostramos el lightbox
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
