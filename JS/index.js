const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

document.querySelectorAll('.gallery img').forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active');

        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        const img = document.createElement('img');
        img.src = image.src;
        lightbox.appendChild(img);
    });
});

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove('active');
});