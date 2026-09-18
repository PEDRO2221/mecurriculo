(function () {
  const translations = {
    pt: {
      'meta.title': 'João Pedro Pequeno | Front-end Developer',
      'meta.description':
        'João Pedro Pequeno da Silva — Desenvolvedor Front-end com foco em Vue 3, TypeScript e Tailwind CSS.',
      'hero.iam': 'Eu sou',
      'hero.role': 'Front-end | Vue.js | TypeScript | Consumo de APIs REST',
      'about.titleA': 'Sobre',
      'about.titleB': 'mim',
      'about.titleBg': 'Sobre mim',
      'about.subtitle': 'Informações Sobre mim',
      'about.p1':
        'Desenvolvedor Front-end com foco em Vue 3, TypeScript e Tailwind CSS. Faço parte da equipe de tecnologia da Amigos do Bem, instituição que atua no combate à fome e à miséria no sertão nordestino. Meu trabalho é construir os sistemas internos que sustentam essa operação: uma plataforma de gestão de projetos sociais, um ERP para a área de empreendedorismo e um help desk usado pelas unidades para abrir e acompanhar chamados.',
      'about.p2':
        'Esse contexto moldou meu jeito de trabalhar. Quem usa os sistemas que eu desenvolvo nem sempre tem familiaridade com tecnologia ou uma boa conexão à internet — então cada tela precisa ser simples, rápida e óbvia. Interface bonita é consequência; interface que a pessoa consegue usar sozinha, no primeiro dia, é o objetivo.',
      'about.p3':
        'No dia a dia trabalho com Vue 3, TypeScript, Tailwind CSS e consumo de APIs REST. Tenho também boa base em Laravel e PostgreSQL, o que me permite entender o sistema de ponta a ponta e conversar de igual para igual com o back-end — mas é no front-end que está minha especialidade e o foco da minha carreira. Estou cursando Análise e Desenvolvimento de Sistemas e sigo estudando o que aparece pela frente: arquitetura de componentes, performance, acessibilidade e boas práticas de código.',
      'stats.systems': 'Sistemas em Produção',
      'stats.years': 'Anos de Experiência',
      'skills.title': 'Minhas Habilidades',
      'skills.rest': 'Consumo de APIs REST',
      'timeline.title': 'Experiência e Formação',
      'tl.job1.period': 'jan 2026 - Atualmente',
      'tl.job1.role': 'Programador Front-end Júnior',
      'tl.job1.desc':
        'Desenvolvimento dos sistemas internos da instituição em Vue 3, TypeScript e Tailwind CSS, consumindo APIs REST em Laravel: plataforma de gestão de projetos sociais, ERP de empreendedorismo e help desk de chamados.',
      'tl.job2.period': 'ago 2024 - Atualmente',
      'tl.job2.role': 'Instrutor',
      'tl.job2.desc':
        'Formação em informática e tecnologia para turmas da instituição no sertão nordestino.',
      'tl.job3.period': 'mai 2024 - Atualmente',
      'tl.job3.role': 'Desenvolvedor Front-end',
      'tl.job3.org': ' - Autônomo',
      'tl.job3.desc':
        'Desenvolvimento de telas para o aplicativo/site ADB-Chamados.',
      'tl.job4.period': 'fev 2022 - ago 2024',
      'tl.job4.role': 'Monitor de laboratório de informática',
      'tl.job4.desc':
        'Suporte ao laboratório de informática e apoio aos alunos no uso das ferramentas digitais.',
      'tl.edu1.period': '2023 - Cursando',
      'tl.edu1.role': 'Análise e Desenvolvimento de Sistemas',
      'tl.edu1.org': ' - Centro Universitário Paraíso, hoje na UNOPAR',
      'tl.edu1.desc':
        'Graduação iniciada no Centro Universitário Paraíso em 2023 e em andamento na UNOPAR.',
      'tl.edu2.period': '2017 - 2020',
      'tl.edu2.role': 'Técnico em Informática',
      'tl.edu2.desc': 'Curso técnico integrado ao ensino médio.',
      'port.titleA': 'Meu',
      'port.titleB': 'Portfolio',
      'port.titleBg': 'Minhas Atividades',
      'port.text':
        'Sistemas internos da Amigos do Bem (repositórios privados) e projetos pessoais com código aberto.',
      'port.drm.name': 'Gestão de Projetos Sociais',
      'port.erp.name': 'ERP de Empreendedorismo',
      'port.helpdesk.name': 'Help Desk de Chamados',
      'port.login.name': 'Front-end de Login',
      'port.calc.name': 'Calculadora em Svelte',
      'port.tcp.name': 'Servidor TCP em Python',
      'contact.titleA': 'Entre em',
      'contact.titleB': 'Contato',
      'contact.subtitle': 'Fale agora',
      'contact.text':
        'Aberto a trocar ideias sobre front-end, Vue e tecnologia aplicada a impacto social.',
      'contact.location': 'Localização',
      'contact.email': 'Email',
    },
    en: {
      'meta.title': 'João Pedro Pequeno | Front-end Developer',
      'meta.description':
        'João Pedro Pequeno da Silva — Front-end developer focused on Vue 3, TypeScript and Tailwind CSS.',
      'hero.iam': "I'm",
      'hero.role': 'Front-end | Vue.js | TypeScript | REST API integration',
      'about.titleA': 'About',
      'about.titleB': 'me',
      'about.titleBg': 'About me',
      'about.subtitle': 'Information about me',
      'about.p1':
        'Front-end developer focused on Vue 3, TypeScript and Tailwind CSS. I am part of the technology team at Amigos do Bem, a non-profit that fights hunger and poverty in the Brazilian northeastern backlands. My work is to build the internal systems that keep this operation running: a social project management platform, an ERP for the entrepreneurship area and a help desk the local units use to open and track tickets.',
      'about.p2':
        'That context shaped the way I work. The people who use the systems I build are not always familiar with technology, and their internet connection is often poor — so every screen has to be simple, fast and obvious. A beautiful interface is a consequence; an interface someone can use on their own, on day one, is the goal.',
      'about.p3':
        'Day to day I work with Vue 3, TypeScript, Tailwind CSS and REST API integration. I also have a solid grounding in Laravel and PostgreSQL, which lets me understand the system end to end and talk to the back-end as an equal — but the front-end is my specialty and the focus of my career. I am studying Systems Analysis and Development and I keep learning whatever comes next: component architecture, performance, accessibility and clean code practices.',
      'stats.systems': 'Systems in Production',
      'stats.years': 'Years of Experience',
      'skills.title': 'My Skills',
      'skills.rest': 'REST API integration',
      'timeline.title': 'Experience and Education',
      'tl.job1.period': 'Jan 2026 - Present',
      'tl.job1.role': 'Junior Front-end Developer',
      'tl.job1.desc':
        "Development of the organization's internal systems with Vue 3, TypeScript and Tailwind CSS, consuming REST APIs built in Laravel: social project management platform, entrepreneurship ERP and help desk.",
      'tl.job2.period': 'Aug 2024 - Present',
      'tl.job2.role': 'Instructor',
      'tl.job2.desc':
        'Computer and technology training for groups at the organization in the Brazilian northeastern backlands.',
      'tl.job3.period': 'May 2024 - Present',
      'tl.job3.role': 'Front-end Developer',
      'tl.job3.org': ' - Freelance',
      'tl.job3.desc':
        'Screen development for the ADB-Chamados web application.',
      'tl.job4.period': 'Feb 2022 - Aug 2024',
      'tl.job4.role': 'Computer Lab Monitor',
      'tl.job4.desc':
        'Computer lab support and assistance to students using digital tools.',
      'tl.edu1.period': '2023 - In progress',
      'tl.edu1.role': 'Systems Analysis and Development',
      'tl.edu1.org': ' - Centro Universitário Paraíso, now at UNOPAR',
      'tl.edu1.desc':
        'Degree started at Centro Universitário Paraíso in 2023 and currently in progress at UNOPAR.',
      'tl.edu2.period': '2017 - 2020',
      'tl.edu2.role': 'Technical Degree in Information Technology',
      'tl.edu2.desc': 'Technical course integrated with high school.',
      'port.titleA': 'My',
      'port.titleB': 'Portfolio',
      'port.titleBg': 'My Work',
      'port.text':
        'Internal systems built for Amigos do Bem (private repositories) and open source personal projects.',
      'port.drm.name': 'Social Project Management',
      'port.erp.name': 'Entrepreneurship ERP',
      'port.helpdesk.name': 'Help Desk',
      'port.login.name': 'Login Front-end',
      'port.calc.name': 'Svelte Calculator',
      'port.tcp.name': 'TCP Server in Python',
      'contact.titleA': 'Get in',
      'contact.titleB': 'Touch',
      'contact.subtitle': 'Talk to me',
      'contact.text':
        'Open to talking about front-end, Vue and technology applied to social impact.',
      'contact.location': 'Location',
      'contact.email': 'Email',
    },
  };

  const STORAGE_KEY = 'mecurriculo-lang';
  const HTML_LANG = { pt: 'pt-BR', en: 'en' };

  function detectLang() {
    let stored = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      stored = null;
    }
    if (stored && translations[stored]) return stored;
    const nav = (navigator.language || 'pt').toLowerCase();
    return nav.indexOf('pt') === 0 ? 'pt' : 'en';
  }

  function applyLang(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.documentElement.lang = HTML_LANG[lang];
    document.title = dict['meta.title'];

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const text = dict[el.dataset.i18n];
      if (text === undefined) return;
      if (el.tagName === 'META') el.setAttribute('content', text);
      else if (el.tagName === 'TITLE') el.textContent = text;
      else el.textContent = text;
    });

    document.querySelectorAll('.lang-switch button').forEach((button) => {
      button.classList.toggle('lang-active', button.dataset.lang === lang);
      button.setAttribute('aria-pressed', button.dataset.lang === lang);
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // localStorage indisponivel: idioma vale so nesta visita
    }
  }

  document.querySelectorAll('.lang-switch button').forEach((button) => {
    button.addEventListener('click', function () {
      applyLang(this.dataset.lang);
    });
  });

  applyLang(detectLang());
})();
