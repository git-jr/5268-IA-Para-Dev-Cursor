// JavaScript específico da página Meus Trabalhos
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Função para filtrar a galeria
    function filterGallery(category) {
        galleryItems.forEach((item, index) => {
            const itemCategory = item.getAttribute('data-category');
            
            if (category === 'all' || itemCategory === category) {
                item.classList.remove('hidden');
                // Adicionar delay para animação
                setTimeout(() => {
                    item.style.display = 'block';
                }, index * 50);
            } else {
                item.classList.add('hidden');
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    }
    
    // Event listeners para os botões de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover classe active de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adicionar classe active ao botão clicado
            this.classList.add('active');
            
            // Filtrar galeria
            const category = this.getAttribute('data-filter');
            filterGallery(category);
        });
    });
    
    // Efeito de hover para os itens da galeria
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Efeito de clique para os itens da galeria
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Adicionar efeito de clique
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Aqui você pode adicionar funcionalidade para abrir um modal ou lightbox
            console.log('Item da galeria clicado:', this.querySelector('h3').textContent);
        });
    });
    
    // Animação de entrada para os filtros
    filterButtons.forEach((button, index) => {
        button.style.opacity = '0';
        button.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            button.style.transition = 'all 0.5s ease';
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        }, index * 100 + 500);
    });
});
