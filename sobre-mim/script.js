// JavaScript específico da página Sobre Mim
document.addEventListener('DOMContentLoaded', function() {
    // Efeito de animação para os itens da lista de habilidades
    const skillItems = document.querySelectorAll('.skills-list li');
    
    skillItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 100);
    });
    
    // Efeito hover para os ícones das habilidades
    skillItems.forEach(item => {
        const icon = item.querySelector('i');
        
        item.addEventListener('mouseenter', function() {
            icon.style.transform = 'scale(1.2) rotate(5deg)';
            icon.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // Animação de entrada para a imagem
    const aboutImage = document.querySelector('.about-image');
    if (aboutImage) {
        aboutImage.style.opacity = '0';
        aboutImage.style.transform = 'translateX(30px)';
        
        setTimeout(() => {
            aboutImage.style.transition = 'all 0.8s ease';
            aboutImage.style.opacity = '1';
            aboutImage.style.transform = 'translateX(0)';
        }, 300);
    }
});
