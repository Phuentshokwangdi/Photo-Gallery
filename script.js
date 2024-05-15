const lightbox = document.getElementById('lightbox');
const galleryImages = document.querySelectorAll('.gallery-image');

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.querySelector('img').src = image.dataset.full;
        lightbox.style.display = 'flex';
    });
});

lightbox.addEventListener('click', (event) => {
    if (event.target !== event.currentTarget) return;
    lightbox.style.display = 'none';
});
