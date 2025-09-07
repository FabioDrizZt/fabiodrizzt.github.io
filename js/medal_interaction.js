// ========================================
// MEDAL INTERACTION - Funcionalidad de medalla
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const medalIcon = document.querySelector('.medal-icon');
    const medalGallery = document.getElementById('medalGallery');
    const medalImages = document.querySelectorAll('.medal-image');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.querySelector('.modal-caption');
    const modalClose = document.querySelector('.modal-close');
    const diplomaImage = document.querySelector('.diploma-image');
    
    if (!medalIcon || !medalGallery || !medalImages.length) {
        console.log('Elementos de medalla no encontrados');
        return;
    }
    
    let currentImageIndex = 0;
    let isHovering = false;
    let autoRotateInterval;
    
    // Función para cambiar la imagen de la medalla
    function switchMedalImage() {
        medalImages.forEach((img, index) => {
            img.classList.toggle('active', index === currentImageIndex);
        });
    }
    
    // Función para mostrar imagen en modal
    function showImageModal(imageSrc, caption) {
        modalImage.src = imageSrc;
        modalCaption.textContent = caption;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    
    // Función para cerrar modal
    function closeImageModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Función para rotar automáticamente las imágenes
    function startAutoRotate() {
        if (autoRotateInterval) clearInterval(autoRotateInterval);
        
        autoRotateInterval = setInterval(() => {
            if (!isHovering) {
                currentImageIndex = (currentImageIndex + 1) % medalImages.length;
                switchMedalImage();
            }
        }, 3000); // Cambia cada 3 segundos
    }
    
    // Función para detener la rotación automática
    function stopAutoRotate() {
        if (autoRotateInterval) {
            clearInterval(autoRotateInterval);
            autoRotateInterval = null;
        }
    }
    
    // Evento click en el icono de medalla
    medalIcon.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Cambiar a la siguiente imagen
        currentImageIndex = (currentImageIndex + 1) % medalImages.length;
        switchMedalImage();
        
        // Efecto visual de click
        this.style.transform = 'scale(0.9) rotate(-5deg)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
        
        // Reiniciar rotación automática después de un click
        stopAutoRotate();
        setTimeout(() => {
            if (!isHovering) {
                startAutoRotate();
            }
        }, 2000);
    });
    
    // Evento hover en el icono de medalla
    medalIcon.addEventListener('mouseenter', function() {
        isHovering = true;
        stopAutoRotate();
        
        // Efecto de hover en la galería
        medalGallery.style.transform = 'scale(1.1)';
        medalGallery.style.boxShadow = '0 0 35px rgba(0, 255, 0, 0.6)';
    });
    
    medalIcon.addEventListener('mouseleave', function() {
        isHovering = false;
        
        // Restaurar efectos de hover
        medalGallery.style.transform = '';
        medalGallery.style.boxShadow = '';
        
        // Reiniciar rotación automática
        startAutoRotate();
    });
    
    // Evento hover en la galería de medallas
    medalGallery.addEventListener('mouseenter', function() {
        isHovering = true;
        stopAutoRotate();
    });
    
    medalGallery.addEventListener('mouseleave', function() {
        isHovering = false;
        startAutoRotate();
    });
    
    // Click en la galería para cambiar imagen
    medalGallery.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % medalImages.length;
        switchMedalImage();
        
        // Efecto visual
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
        
        // Reiniciar rotación automática
        stopAutoRotate();
        setTimeout(() => {
            if (!isHovering) {
                startAutoRotate();
            }
        }, 2000);
    });
    
    // Click en imágenes del carrusel para mostrar en modal
    medalImages.forEach((medalImg, index) => {
        medalImg.addEventListener('click', function(e) {
            e.stopPropagation();
            const img = this.querySelector('img');
            const label = this.querySelector('.medal-label').textContent;
            showImageModal(img.src, label);
        });
    });
    
    // El diploma ahora está incluido en el carrusel, no necesita evento separado
    
    // Navegación con botones
    if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            currentImageIndex = currentImageIndex === 0 ? medalImages.length - 1 : currentImageIndex - 1;
            switchMedalImage();
            stopAutoRotate();
            setTimeout(() => {
                if (!isHovering) {
                    startAutoRotate();
                }
            }, 2000);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            currentImageIndex = (currentImageIndex + 1) % medalImages.length;
            switchMedalImage();
            stopAutoRotate();
            setTimeout(() => {
                if (!isHovering) {
                    startAutoRotate();
                }
            }, 2000);
        });
    }
    
    // Eventos del modal
    if (modalClose) {
        modalClose.addEventListener('click', closeImageModal);
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeImageModal();
            }
        });
    }
    
    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeImageModal();
        }
    });
    
    // Inicializar con la primera imagen activa
    switchMedalImage();
    
    // Iniciar rotación automática
    startAutoRotate();
    
    // Limpiar intervalos cuando la página se oculta
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            stopAutoRotate();
        } else {
            if (!isHovering) {
                startAutoRotate();
            }
        }
    });
    
    console.log('Medal interaction initialized successfully');
});
