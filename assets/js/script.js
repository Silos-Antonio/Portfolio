document.addEventListener('DOMContentLoaded', function() {
    const navLink = document.querySelectorAll('nav ul li a');
    const allArticles = document.querySelectorAll('main article');

    // Esconde todos os artigos, exceto o primeiro, ao carregar a página
    allArticles.forEach ((article, index) => {
        if (index !== 0) {
            article.classList.add('oculto');
        }
    });

    // Lógica de navegação entre as abas
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

    // Lógica de expansão dos cards de habilidades
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

    // Lógica expansão botão descrição experiência
    const botoesXP = document.querySelectorAll('.btn-descricao-xp');

    botoesXP.forEach(botao => {
        botao.addEventListener('click', function() {
            const descricao = this.nextElementSibling;
            
            if (descricao.style.display === 'block') {
                descricao.style.display = 'none';
                this.textContent = 'Mais informações';
            } else {
                descricao.style.display = 'block';
                this.textContent = 'Ocultar informações';
            }
        });
    });

    // Lógica expansão botão descrição certificação
    const botoesDesc = document.querySelectorAll('.btn-descricao-cert');

    botoesDesc.forEach(botao => {
        botao.addEventListener('click', function() {
            const descricao = this.nextElementSibling;
            
            if (descricao.style.display === 'block') {
                descricao.style.display = 'none';
                this.textContent = 'Ver detalhes';
            } else {
                descricao.style.display = 'block';
                this.textContent = 'Ocultar detalhes';
            }
        });
    });

    // Lógica de expansão do projeto com fechar ao clicar fora
    const botoesProj = document.querySelectorAll('.btn-descricao-proj');

    botoesProj.forEach(botao => {
        botao.addEventListener('click', function(event) {
            // Impede que o clique no botão "suba" para o documento e feche o card na hora
            event.stopPropagation();

            // Fecha todos os outros overlays abertos antes de abrir o novo (opcional, melhora a UX)
            document.querySelectorAll('.card-overlay').forEach(ov => ov.classList.remove('ativo'));

            const cardPai = this.closest('.card-projeto');
            const overlay = cardPai.querySelector('.card-overlay');
            overlay.classList.add('ativo');
        });
    });

    // Lógica para fechar ao clicar fora
    document.addEventListener('click', function(event) {
        const overlaysAbertos = document.querySelectorAll('.card-overlay.ativo');
        
        overlaysAbertos.forEach(overlay => {
            // Se o clique NÃO foi dentro do card que está aberto, removemos a classe 'ativo'
            if (!overlay.closest('.card-projeto').contains(event.target)) {
                overlay.classList.remove('ativo');
            }
        });
});

    // Menu Hambúrguer
    const btnMenu = document.getElementById('botao-menu'); // Corrigido para 'botao-menu'
    const listNav = document.querySelector('.lista-navegacao');

    if (btnMenu && listNav) {
        btnMenu.addEventListener('click', () => {
            listNav.classList.toggle('ativo');
        });
    }

    // Fechar menu ao clicar em um link (Melhoria de UX)
    navLink.forEach(link => {
        link.addEventListener('click', () => {
            listNav.classList.remove('ativo');
        });
    });

    //Expandir Contatos no Aside 
    const btnContatos = document.getElementById('toggle-contatos');
    const listaContatos = document.getElementById('lista-contato');

    btnContatos.addEventListener('click', () => {
        listaContatos.classList.toggle('ativo');
        btnContatos.querySelector('i').classList.toggle('rotacionar-icone');
    });
});
