document.addEventListener('DOMContentLoaded', function () {
    const navLink = document.querySelectorAll('nav ul li a');
    const allArticles = document.querySelectorAll('main article');

    // Esconde todos os artigos, exceto o primeiro, ao carregar a página
    allArticles.forEach((article, index) => {
        if (index !== 0) {
            article.classList.add('oculto');
        }
    });

    // Lógica de navegação entre as abas
    navLink.forEach(link => {
        link.addEventListener('click', function (event) {
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
        botao.addEventListener('click', function () {
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
        botao.addEventListener('click', function () {
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
        botao.addEventListener('click', function (event) {
            
            event.stopPropagation();

            document.querySelectorAll('.card-overlay').forEach(ov => ov.classList.remove('ativo'));

            const projeto = this.closest('.projeto');
            const card = projeto.querySelector('.card-projeto');
            const overlay = card.querySelector('.card-overlay');

            overlay.classList.add('ativo');
        });
    });

    // Lógica para fechar ao clicar fora
    document.addEventListener('click', function (event) {
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

const container = document.querySelector('.lista-certificacoes');

let isDown = false;
let startX;
let scrollLeft;

container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.classList.add('active');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
    isDown = false;
});

container.addEventListener('mouseup', () => {
    isDown = false;
});

container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
});

const translations = {
    pt: {
        title: "Antonio Silos - Portfólio Profissional",
        role: "Desenvolvedor Fullstack Jr.",
        tel: "Telefone",
        address: "Endereço",
        about: "Sobre mim",
        projects: "Projetos",
        formation: "Formação",
        resume: "Currículo",
        aboutIntro1: "Sou um desenvolvedor Jr. apaixonado por tecnologia e criação de soluções interativas. Tenho experiência prática com Python, MySQL, HTML5, CSS3 e JavaScript, além de vivência com bibliotecas como Pygame, Pandas, Pyautogui, Playwright, e frameworks como Flask, Django e Bootstrap.Minha trajetória profissional inclui atuação no levantamento de requisitos e contato direto com clientes, o que fortaleceu minha comunicação e visão analítica. Sou uma pessoa curiosa, criativa e focada, sempre em busca de aprender sempre mais e aprimorar minhas habilidades.Meu objetivo é crescer na área de desenvolvimento de soluções capazes de gerar conexão e praticidade, aliando minhas competências técnicas à capacidade de compreender as necessidades dos usuários, para entregar experiências funcionais e intuitivas.",
        aboutIntro2: "Minha trajetória profissional inclui atuação no levantamento de requisitos e contato direto com clientes, o que fortaleceu minha comunicação e visão analítica. Sou uma pessoa curiosa, criativa e focada, sempre em busca de aprender sempre mais e aprimorar minhas habilidades.",
        aboutIntro3: "Meu objetivo é crescer na área de desenvolvimento de soluções capazes de gerar conexão e praticidade, aliando minhas competências técnicas à capacidade de compreender as necessidades dos usuários, para entregar experiências funcionais e intuitivas.",
        stacksTitle: "Stacks et Compétences",
        stacksTitle: "Stacks e Habilidades",
        stacksInfo: "Do front-end à IA, uno desenvolvimento e análise de dados para transformar ideias em soluções funcionais.",
        frontend: "Desenvolvimento Front-end",
        frontContent: "Atuo no desenvolvimento de interfaces web responsivas e orientadas à experiência do usuário, utilizando HTML5, CSS3 e JavaScript. Tenho foco em código semântico, organização estrutural e boas práticas de desenvolvimento, sempre buscando alinhar estética, performance e clareza na navegação.Desenvolvi projetos aplicando conceitos de responsividade, grids flexíveis e microinterações para criar experiências modernas e intuitivas.Meu objetivo é construir interfaces que não apenas funcionem, mas que comuniquem valor, transmitam profissionalismo e contribuam diretamente para a percepção do produto.",
        btnExpand: "Expandir",
        backend: "Desenvolvimento Back-end",
        backendContent: "Desenvolvo aplicações web utilizando Python (Flask) com integração a bancos de dados relacionais (MySQL), construindo soluções completas que conectam frontend, regras de negócio e persistência de dados de forma estruturada e segura.Tenho experiência em modelagem de dados, criação de schemas e escrita de consultas SQL otimizadas, garantindo consistência, desempenho e escalabilidade das aplicações. Já implementei autenticação de usuários, integração entre camadas da aplicação e estruturas organizadas seguindo boas práticas de arquitetura fullstack.Busco desenvolver sistemas que não apenas funcionem tecnicamente, mas que tenham base sólida em estrutura de dados, segurança e organização, preparando o projeto para crescimento e manutenção futura.",
        databases: "Arquitetura & Estrutura de Soluções",
        databasesContent: "Antes de iniciar a implementação, priorizo a organização e o planejamento da solução, utilizando modelagem, definição de fluxos e estruturação em camadas para garantir clareza e eficiência no desenvolvimento.Valorizo princípios como separação de responsabilidades, código limpo e organização arquitetural, buscando reduzir retrabalho e facilitar manutenção e escalabilidade.Acredito que boas soluções não começam no código, mas na construção de uma base sólida que sustente crescimento, performance e evolução contínua do produto.",
        ai: "Machine Learning e Análise de Dados",
        aiContent: "Tenho experiência com Python aplicado à análise de dados e Inteligência Artificial, desenvolvendo soluções que transformam dados em suporte estratégico para tomada de decisão. Já implementei projetos práticos, como um modelo de análise de perfil de crédito com IA, explorando conceitos de machine learning, estruturação de dados e validação de resultados.Possuo experiência igualmente com automação, raspagem de dados e organização de informações para análise, integrando processos de coleta, tratamento e interpretação de dados.Desenvolvi a habilidade de aplicar IA de forma responsável e orientada a problemas reais, utilizando tecnologia para gerar insights relevantes e impacto concreto em produtos e serviços.",
        tools: "Ferramentas que eu domino",
        projectTitle: "Meus projetos",
        project1:"Desenvolvimento de uma landing page orientada à conversão, com foco em estruturação estratégica do conteúdo, hierarquia visual e otimização da experiência do usuário. Aplicação de boas práticas de HTML semântico, CSS moderno e interações com JavaScript para criar uma interface clara, fluida e funcional.",
        techUsed: "Tecnologias utilizas",
        githubLink: "Veja e acesse o projeto pelo meu Github",
        project1Title: "Landing Page Para Terapeuta Holística",
        project2: "Página Web que desenvolvi para homenagear o minha esposa em seu aniversário. É responsiva e contém um quiz inicial que ao final irá direcionar para a página da homenagem. Foi meu primeiro projeto utilizando mais de uma página.",
        project2Title: "Página de Presente de Aniversário",
        project3: "Projeto de backend no qual trabalhei com as bibliotecas Pandas e Scikit-learn. O projeto envolveu tratamento de dados que são analisados por um modelo de IA treinado para fornecer previsões de perfil de crédito para novos cliente.",
        project3Title: "IA para análise de dados",
        project4:"Um desafio que eu impuz a mim mesmo unindo minha paixão por game e o interesse em aprender mais sobre POO (Programação Orientada a Objetos). Com ele aprendi sobre a biblioteca Pygame, a forma correta de usar Classes e até sobre animação de sprites. Um projeto que ainda está inacabado, mas o qual ainda revisito sempre que quero praticar de uma forma muito divertida.",
        project4Title: "Jogo em 2D Usando Pygame",
        repoWarn: "Repositório em desenvolvimento", 
        formTitle: "Formação Acadêmica",
        formTime1: "Formado em Dezembro de 2025",
        formDesc1: "Formação sólida para atuar em desenvolvimento de software, com foco em análise de requisitos, modelagem de sistemas, programação, banco de dados e testes. Fui capacitado a criar soluções tecnológicas que atendem às demandas do mercado, com habilidades práticas para atuar em equipes de desenvolvimento, solucionando problemas e inovando processos. Preparado para contribuir na construção de sistemas eficientes e escaláveis.",
        formTitle1: "Análise e Desenvolvimento de Sistemas",
        formTime2: "Formado em Dezembro de 2014",
        formTitle2: "Ensino Médio",
        formDesc2: "Formação generalista que desenvolveu minha base crítica, raciocínio lógico e habilidades interpessoais, preparando-me para enfrentar desafios com disciplina, adaptabilidade e vontade constante de aprender.",
        certTitle: "Diploma e Certificações",
        certTitle1: "Graduação em Análise e Desenvolvimento de Sistemas",
        certDesc1: "Formação em Análise e Desenvolvimento de Sistemas, com foco na construção de soluções digitais estruturadas, escaláveis e orientadas a boas práticas.<br>Mais do que aprender tecnologias, desenvolvi a capacidade de analisar problemas, estruturar soluções e executar projetos com organização e visão estratégica.",
        certTitle2: "Análise de dados com Python",
        certDesc2: "Capacitação prática em manipulação, limpeza e análise de dados utilizando bibliotecas como Pandas, NumPy e Matplotlib. Desenvolvimento de habilidades para transformar dados brutos em insights valiosos, apoiando a tomada de decisões estratégicas com base em análises eficientes e visualizações claras.",
        certTitle3: "Desenvolvimento e Gerenciamento de Banco de Dados com MySQL",
        certDesc3: "Certificação prática em modelagem, criação e gerenciamento de bancos de dados relacionais utilizando MySQL. Conhecimento aplicado em consultas SQL, manipulação de dados e estruturação eficiente de informações para suportar sistemas e aplicações.",
        certTitle4: "Língua Inglesa",
        certDesc4: "Aprendizado sobre as principais palavras e expressões fundamentais para comunicação eficaz em inglês, ampliando a fluência e a compreensão em contextos cotidianos e profissionais.",
        resumeTitle: "Currículo",
        expTitle: "Experiência",
        expTitle1: "Analista de Suporte Técnico - Grupo Sigma Software",
        expInit: "Abril/2025",
        expEnd1: "Atualmente",
        expDesc1: "Nesta posição, atuo como a ponte entre o usuário e a tecnologia, fornecendo suporte técnico de 1º e 2º nível para sistemas ERP. Mais do que resolver problemas, esta experiência aprimorou minha capacidade de diagnosticar falhas lógicas e de sistema, uma habilidade essencial para o debugging e para a criação de código robusto. A constante interação com os usuários me ensinou a importância da empatia e da comunicação clara, fortalecendo minha capacidade de traduzir termos técnicos complexos para uma linguagem acessível. A cada chamado, aprimoro minha visão de como um software pode ser mais amigável e eficiente, alinhando a técnica à experiência do usuário, o que me motiva a buscar a excelência no desenvolvimento de soluções.",
        expTitle2: "Analista Comerial - Grupo Sigma Software",
        expInit2: "Dezembro/2023",
        expEnd2: "Abril/2025",
        expDesc2: "Nessa função, atuei na linha de frente do desenvolvimento de soluções, focando no levantamento de requisitos e na análise de processos de negócio. Mais do que vender um produto, minha missão era entender a fundo as dores e necessidades dos clientes, traduzindo-as em soluções de gestão empresarial. Essa experiência me deu uma visão estratégica de negócios e aprimorou minha escuta ativa, habilidades que considero cruciais para um desenvolvedor. Entender a fundo o problema antes de propor a solução técnica me permite construir sistemas mais eficazes e alinhados aos objetivos do usuário, unindo o mundo da tecnologia ao mundo dos negócios de forma harmoniosa.",
        expTitle3: "Fiscal de Caixa – Cobasi",
        expInit3: "Dezembro/2022",
        expEnd3: "Novembro/2022",
        expDesc3: "Minha primeira imersão na logística de uma empresa e no mundo da tecnologia. Nesta posição, liderei uma equipe de frente de caixa e gerenciei processos de vendas em um robusto sistema ERP. Foi aqui que, indiretamente, comecei a desenvolver meu olhar crítico para a experiência do usuário. O uso diário de um software de gestão me fez entender, na prática, a importância de cada detalhe: desde a fluidez dos processos até a clareza da interface. Essa experiência me deu a certeza de que um software eficiente e amigável é a chave para a produtividade. Hoje, essa visão me motiva a criar soluções que não apenas funcionem, mas que também ofereçam uma experiência intuitiva e que facilite o dia a dia dos usuários, unindo eficiência operacional à qualidade no atendimento."


    },
    fr: {
        title: "Antonio Silos - Portfolio Professionnel",
        role: "Développeur Fullstack Jr.",
        tel: "Téléphone",
        address: "Adresse",
        about: "À propos de moi",
        projects: "Projets",
        formation: "Formation",
        resume: "Résumé",
        aboutIntro1: "Je suis un développeur Jr. passionné par la technologie et la création de solutions interactives. J'ai une expérience pratique avec Python, MySQL, HTML5, CSS3 et JavaScript, ainsi qu'une expérience avec des bibliothèques telles que Pygame, Pandas, Pyautogui, Playwright, et des frameworks comme Flask, Django et Bootstrap.Mon parcours professionnel inclut une expérience dans la collecte de exigences et le contact direct avec les clients, ce qui a renforcé ma communication et ma vision analytique. Je suis une personne curieuse, créative et concentrée, toujours à la recherche d'apprendre toujours plus et d'améliorer mes compétences.Mon objectif est de grandir dans le domaine du développement de solutions capables de générer connexion et praticité, alliant mes compétences techniques à la capacité de comprendre les besoins des utilisateurs, pour livrer des expériences fonctionnelles et intuitives.",
        aboutIntro2: "Mon parcours professionnel inclut une expérience dans la collecte de exigences et le contact direct avec les clients, ce qui a renforcé ma communication et ma vision analytique. Je suis une personne curieuse, créative et concentrée, toujours à la recherche d'apprendre toujours plus et d'améliorer mes compétences.",
        aboutIntro3: "Mon objectif est de grandir dans le domaine du développement de solutions capables de générer connexion et praticité, alliant mes compétences techniques à la capacité de comprendre les besoins des utilisateurs, pour livrer des expériences fonctionnelles et intuitives.",
        stacksInfo: "Du front-end à l'IA, j'unis développement et analyse de données pour transformer les idées en solutions fonctionnelles.",
        frontend: "Développement Front-end",
        frontContent: "Je travaille sur le développement d'interfaces web réactives et orientées vers l'expérience utilisateur, utilisant HTML5, CSS3 et JavaScript. Je me concentre sur un code sémantique, une organisation structurelle et de bonnes pratiques de développement, cherchant toujours à aligner esthétique, performance et clarté dans la navigation.J'ai développé des projets en appliquant des concepts de réactivité, de grilles flexibles et de micro-interactions pour créer des expériences modernes et intuitives.Mon objectif est de construire des interfaces qui ne fonctionnent pas seulement, mais qui communiquent de la valeur, transmettent du professionnalisme et contribuent directement à la perception du produit.",
        btnExpand: "+ d'infos",
        backend: "Développement Back-end",
        backendContent: "Je développe des applications web utilisant Python (Flask) avec intégration à des bases de données relationnelles (MySQL), construisant des solutions complètes qui connectent frontend, règles de business et persistance de données de manière structurée et sécurisée.J'ai une expérience en modélisation de données, création de schemas et rédaction de requêtes SQL optimisées, garantissant la cohérence, la performance et l'extensibilité des applications.J'ai déjà mis en œuvre l'authentification des utilisateurs, l'intégration entre les couches de l'application et des structures organisées suivant les bonnes pratiques d'architecture fullstack.Je cherche à développer des systèmes qui fonctionnent non seulement techniquement, mais qui reposent sur une base solide d'architecture de données, sécurité et organisation, préparant le projet à une croissance et une maintenance futures.",
        databases: "Architecture & Structure de Solutions",
        databasesContent: "Avant de commencer l'implémentation, je priorise l'organisation et la planification de la solution, utilisant la modélisation, la définition de flux et la structuration en couches pour garantir clarté et efficacité dans le développement.Je valorise des principes tels que la séparation des responsabilités, le code propre et l'organisation architecturale, cherchant à réduire les retours en arrière et à faciliter la maintenance et l'extensibilité.Je crois que de bonnes solutions ne commencent pas dans le code, mais dans la construction d'une base solide qui soutient la croissance, la performance et l'évolution continue du produit.",
        ai: "Machine Learning et Analyse de Données",
        aiContent: "J'ai une expérience avec Python appliqué à l'analyse de données et à l'intelligence artificielle, développant des solutions qui transforment les données en support stratégique pour la prise de décision. J'ai déjà mis en œuvre des projets pratiques, tels qu'un modèle d'analyse de profil de crédit avec IA, explorant des concepts de machine learning, de structuration de données et de validation des résultats.J'ai également une expérience avec l'automatisation, le scraping de données et l'organisation d'informations pour l'analyse, intégrant des processus de collecte, de traitement et d'interprétation des données.J'ai développé la capacité d'appliquer l'IA de manière responsable et orientée vers des problèmes réels, utilisant la technologie pour générer des insights pertinents et un impact concret sur les produits et services.",
        tools: "Outils que je maîtrise",
        projectTitle: "Mes projets",
        project1:"Développement d'une landing page orientée vers la conversion, avec un focus sur la structuration stratégique du contenu, la hiérarchie visuelle et l'optimisation de l'expérience utilisateur. Application de bonnes pratiques de HTML sémantique, CSS moderne et interactions avec JavaScript pour créer une interface claire, fluide et fonctionnelle.",
        techUsed: "Technologies utilisées",
        githubLink: "Voir et accéder au projet sur mon Github",
        project1Title: "Landing Page Pour Thérapeute Holistique",
        project2: "Page Web que j'ai développée pour honorer ma femme à son anniversaire. Elle est réactive et contient un quiz initial qui à la fin dirigera vers la page de l'hommage. C'était mon premier projet utilisant plus d'une page.",
        project2Title: "Page de Cadeau d'Anniversaire",
        project3: "Projet de backend dans lequel j'ai travaillé avec les bibliothèques Pandas et Scikit-learn. Le projet impliquait le traitement de données qui sont analysées par un modèle d'IA entraîné pour fournir des prévisions de profil de crédit pour de nouveaux clients.",
        project3Title: "IA pour analyse de données",
        project4:"Un défi que je me suis imposé en unissant ma passion pour les jeux et l'intérêt d'apprendre davantage sur la POO (Programmation Orientée Objet). Avec lui, j'ai appris sur la bibliothèque Pygame, la façon correcte d'utiliser les Classes et même sur l'animation de sprites. Un projet qui est encore inachevé, mais que je revisite toujours chaque fois que je veux pratiquer de manière très amusante.",
        project4Title: "Jeu en 2D Utilisant Pygame",
        repoWarn: "Dépôt en développement",
        formTitle: "Formation Académique",
        formTime1: "Diplômé en Décembre 2025",
        formDesc1: "Formation solide pour agir dans le développement de logiciels, avec un focus sur l'analyse des exigences, la modélisation des systèmes, la programmation, les bases de données et les tests. J'ai été formé pour créer des solutions technologiques qui répondent aux demandes du marché, avec des compétences pratiques pour agir dans des équipes de développement, résoudre des problèmes et innover des processus. Préparé pour contribuer à la construction de systèmes efficaces et évolutifs.",
        formTitle1: "Analyse et Développement de Systèmes",
        formTime2: "Diplômé en Décembre 2014",
        formTitle2: "Enseignement Secondaire",
        formDesc2: "Formation généraliste qui a développé ma base critique, mon raisonnement logique et mes compétences interpersonnelles, me préparant à affronter les défis avec discipline, adaptabilité et volonté constante d'apprendre.",
        certTitle: "Diplômes et Certifications",
        certTitle1: "Licence en Analyse et Développement de Systèmes",
        certDesc1: "Formation en Analyse et Développement de Systèmes, avec un focus sur la construction de solutions digitales structurées, évolutives et orientées vers les bonnes pratiques.<br>Plus que d'apprendre des technologies, j'ai développé la capacité d'analyser des problèmes, de structurer des solutions et d'exécuter des projets avec organisation et vision stratégique.",
        certTitle2: "Analyse de données avec Python",
        certDesc2: "Capacitation pratique en manipulation, nettoyage et analyse de données utilisant des bibliothèques telles que Pandas, NumPy et Matplotlib. Développement de compétences pour transformer des données brutes en insights précieux, soutenant la prise de décisions stratégiques basées sur des analyses efficaces et des visualisations claires.",
        certTitle3: "Développement et Gestion de Bases de Données avec MySQL",
        certDesc3: "Certification pratique en modélisation, création et gestion de bases de données relationnelles utilisant MySQL. Connaissance appliquée en requêtes SQL, manipulation de données et structuration efficace d'informations pour supporter des systèmes et applications.",
        certTitle4: "Langue Anglaise",
        certDesc4: "Apprentissage des principaux mots et expressions fondamentaux pour une communication efficace en anglais, élargissant la fluidité et la compréhension dans des contextes quotidiens et professionnels.",
        resumeTitle: "Résumé",
        expTitle: "Expérience",
        expTitle1: "Analyste de Support Technique - Groupe Sigma Software",
        expInit: "Avril/2025",
        expEnd1: "Actuellement",
        expDesc1: "Dans ce poste, j'agis comme le pont entre l'utilisateur et la technologie, fournissant un support technique de 1er et 2ème niveau pour les systèmes ERP. Plus que résoudre des problèmes, cette expérience a amélioré ma capacité à diagnostiquer des défaillances logiques et de système, une compétence essentielle pour le debugging et pour la création de code robuste. L'interaction constante avec les utilisateurs m'a enseigné l'importance de l'empathie et de la communication claire, renforçant ma capacité à traduire des termes techniques complexes en un langage accessible. À chaque appel, j'améliore ma vision de comment un logiciel peut être plus convivial et efficace, alignant la technique à l'expérience utilisateur.",
        expTitle2: "Analyste Commercial - Groupe Sigma Software",
        expInit2: "Décembre/2023",
        expEnd2: "Avril/2025",
        expDesc2: "Dans cette fonction, j'ai agi en première ligne du développement de solutions, me concentrant sur la collecte de exigences et l'analyse des processus de business. Plus que vendre un produit, ma mission était de comprendre profondément les douleurs et les besoins des clients, les traduisant en solutions de gestion d'entreprise. Cette expérience m'a donné une vision stratégique des affaires et a amélioré mon écoute active, des compétences que je considère cruciales pour un développeur. Comprendre profondément le problème avant de proposer la solution technique me permet de construire des systèmes plus efficaces et alignés aux objectifs de l'utilisateur, unissant le monde de la technologie au monde des affaires de manière harmonieuse.",
        expTitle3: "Caissier Leader – Cobasi",
        expInit3: "Décembre/2022",
        expEnd3: "Novembre/2022",
        expDesc3: "Ma première immersion dans la logistique d'une entreprise et dans le monde de la technologie. Dans ce poste, j'ai dirigé une équipe de front de caisse et géré des processus de ventes dans un robuste système ERP. C'est ici que, indirectement, j'ai commencé à développer mon regard critique pour l'expérience utilisateur. L'utilisation quotidienne d'un logiciel de gestion m'a fait comprendre, dans la pratique, l'importance de chaque détail : depuis la fluidité des processus jusqu'à la clarté de l'interface. Cette expérience m'a donné la certitude qu'un logiciel efficace et convivial est la clé pour la productivité. Aujourd'hui, cette vision me motive à créer des solutions qui ne fonctionnent pas seulement, mais qui offrent également une expérience intuitive et qui facilite le quotidien des utilisateurs, unissant efficacité opérationnelle à la qualité du service."

    }
};

document.querySelectorAll(".lang-btn").forEach(button => {
    button.addEventListener("click", () => {
        const lang = button.getAttribute("data-lang");
        changeLanguage(lang);
    });
});

function changeLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");

        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Atualiza o título da página
    document.title = translations[lang].title;
}
