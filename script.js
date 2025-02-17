function openLightbox(imgElement) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const description = document.getElementById('lightbox-description');
    
    lightboxImg.src = imgElement.src;
    description.textContent = "Descripción"; // Aquí puedes poner la descripción correspondiente
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
