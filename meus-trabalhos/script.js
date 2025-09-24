// JavaScript específico da página Meus Trabalhos
document.addEventListener('DOMContentLoaded', function() {
    const carouselTrack = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const carouselViewport = document.querySelector('.carousel');

    let currentIndex = 0;
    const totalItems = carouselItems.length;

    function getGapPx() {
        const gapStr = getComputedStyle(carouselTrack).gap || '0px';
        const parsed = parseFloat(gapStr);
        return Number.isNaN(parsed) ? 0 : parsed;
    }

    function getItemWidthPx() {
        if (!carouselItems[0]) return 0;
        const itemRect = carouselItems[0].getBoundingClientRect();
        return itemRect.width + getGapPx();
    }

    function getItemsPerView() {
        const itemWidth = getItemWidthPx();
        if (itemWidth === 0) return 1;
        const viewportWidth = carouselViewport.clientWidth;
        return Math.max(1, Math.floor(viewportWidth / itemWidth));
    }

    // Função para atualizar a posição do carrossel
    function updateCarousel() {
        const itemWidth = getItemWidthPx();
        const itemsPerView = getItemsPerView();
        const maxIndex = Math.max(0, totalItems - itemsPerView);

        // Garantir índice dentro do intervalo
        if (currentIndex > maxIndex) currentIndex = maxIndex;
        if (currentIndex < 0) currentIndex = 0;

        const translateX = -currentIndex * itemWidth;
        carouselTrack.style.transform = `translateX(${translateX}px)`;

        // Atualizar estado dos botões
        const atStart = currentIndex === 0;
        const atEnd = currentIndex >= maxIndex;
        prevBtn.style.opacity = atStart ? '0.5' : '1';
        nextBtn.style.opacity = atEnd ? '0.5' : '1';
        prevBtn.disabled = atStart;
        nextBtn.disabled = atEnd;
    }

    // Event listener para o botão anterior
    prevBtn.addEventListener('click', function() {
        currentIndex -= 1;
        updateCarousel();
    });

    // Event listener para o botão próximo
    nextBtn.addEventListener('click', function() {
        currentIndex += 1;
        updateCarousel();
    });

    // Inicializar carrossel (aguardar layout)
    updateCarousel();
    
    // Adicionar efeito de hover nas imagens
    const allImages = document.querySelectorAll('.main-image, .carousel-image-frame img');
    
    allImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Adicionar efeito de clique nas imagens do carrossel
    carouselItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            // Efeito visual de clique
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Aqui você pode adicionar funcionalidade para trocar a imagem principal
            const clickedImage = this.querySelector('img');
            const mainImage = document.querySelector('.main-image');
            
            if (clickedImage && mainImage) {
                // Criar efeito de transição suave
                mainImage.style.opacity = '0.7';
                setTimeout(() => {
                    mainImage.src = clickedImage.src.replace('w=200&h=150', 'w=600&h=400');
                    mainImage.alt = clickedImage.alt;
                    mainImage.style.opacity = '1';
                }, 200);
            }
        });
    });
    
    // Suporte para navegação por teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        } else if (e.key === 'ArrowRight' && currentIndex < totalItems - itemsToShow) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    // Atualizar carrossel quando a janela for redimensionada
    window.addEventListener('resize', function() {
        updateCarousel();
    });
});
