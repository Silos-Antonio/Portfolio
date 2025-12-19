document.addEventListener('DOMContentLoaded', function() {
    const navLink = document.querySelectorAll('nav ul li a');
    const allArticles = document.querySelectorAll('main article');

    allArticles.forEach ((article, index) => {
        if (index !== 0) {
            article.classList.add('oculto');
        }
    });

    navLink.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href');
            allArticles.forEach(article => {
                article.classList.add('oculto');
            });

            const targetArticle = document.querySelector(targetId);
            if (targetArticle) {
                targetArticle.classList.remove('oculto');
            }
        });
    });

    const headers = document.querySelectorAll('.cabecalho-card');
    
    
    headers.forEach(header => {
        header.addEventListener('click', () => {
            
            const parentCard = header.closest('.habilidades-conteudo');
            
            const descriptionContainer = parentCard.querySelector('.habilidades-desc-conteudo');
            
            const icon = header.querySelector('.ph-caret-down');
            
            descriptionContainer.classList.toggle('expandido');
            
            icon.classList.toggle('rotacionar-icone');
        });
    });
});

