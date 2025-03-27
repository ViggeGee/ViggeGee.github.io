// Updated version for lightbox.js
document.addEventListener('DOMContentLoaded', function() {
    // Create lightbox elements
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close">X</button>
            <img class="lightbox-image" src="">
        </div>
    `;
    document.body.appendChild(lightbox);
    
    // Set up close handlers
    const closeButton = document.querySelector('.lightbox-close');
    closeButton.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });
    
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
    
    // For modal images - using event delegation
    document.addEventListener('click', function(e) {
        // Check if click was on a gallery image
        const galleryImage = e.target.closest('.gallery-item img');
        if (galleryImage) {
            e.stopPropagation();
            const lightboxImg = document.querySelector('.lightbox-image');
            lightboxImg.src = galleryImage.src;
            lightbox.style.display = 'flex';
        }
    });
});