function openLightbox(imgElement) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxDescription = document.getElementById('lightbox-description');

    // Set the source of the lightbox image
    lightboxImg.src = imgElement.src;

    // Set the description text (or modify this as needed)
    lightboxDescription.textContent = 'Descripción'; // Puedes cambiar la descripción aquí

    // Display the lightbox
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
