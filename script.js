function openLightbox(imgElement) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxDescription = document.getElementById('lightbox-description');
    const lightboxLongDescription = document.getElementById('lightbox-long-description');
    
    // Asignamos la imagen
    lightboxImg.src = imgElement.src;
    
    // Asignamos la descripción corta (lo que está en el <p> de cada imagen)
    lightboxDescription.textContent = imgElement.nextElementSibling.textContent;
    
    // Asignamos la descripción larga desde el atributo data-description, permitiendo saltos de línea
    let description = imgElement.getAttribute('data-description');
    lightboxLongDescription.innerHTML = description.replace(/\n/g, '<br>'); // Reemplaza \n por <br>

    // Mostramos el lightbox
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
