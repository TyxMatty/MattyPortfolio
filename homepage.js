"use strict";
// ==========================================
// MÓDULO DE INTERNACIONALIZAÇÃO (i18n)
// ==========================================
const translations = {
    // Header & Hero
    "header-desc": {
        en: "Game Developer, Junior Full Stack Web Developer & Software Engineer student",
        pt: "Desenvolvedor de Jogos, Desenvolvedor Web Full Stack Júnior e Estudante de Engenharia de Software"
    },
    "hero-title": {
        en: "Hi, I'm <span class=\"highlight\">Matty</span>.",
        pt: "Olá, eu sou o <span class=\"highlight\">Matty</span>."
    },
    "hero-subtitle": {
        en: "Engineering robust websites and crafting immersive games.",
        pt: "Projetando sites robustos e criando jogos imersivos."
    },
    "btn-bio": { en: "Read My Bio", pt: "Ler Minha Bio" },
    "btn-work": { en: "See My Work", pt: "Ver Meus Projetos" },
    "btn-contact": { en: "Let's Talk", pt: "Vamos Conversar" },
    // About
    "about-title": { en: "About Me", pt: "Sobre Mim" },
    "about-bio1": {
        en: "Hello! I'm <strong>Mateus Valenga</strong>, also known as <strong>Matty</strong>. I'm a 17-year-old Software Engineering student with a passion for software development, web development and game creation. I'm currently based in Brazil, and I'm eager to connect with like-minded individuals and explore exciting opportunities in the tech world.",
        pt: "Olá! Eu sou <strong>Mateus Valenga</strong>, também conhecido como <strong>Matty</strong>. Tenho 17 anos, sou estudante de Engenharia de Software e apaixonado por desenvolvimento de sistemas, web e criação de jogos. Atualmente resido no Brasil e estou ansioso para me conectar com pessoas da área e explorar novas oportunidades no mundo da tecnologia."
    },
    "about-bio2": {
        en: "My core focus lies in <strong>Software Engineering</strong>, <strong>C/C++</strong> and <strong>Full Stack Web Development</strong>, alongside crafting immersive experiences as a <strong>Game Developer</strong>, specializing in <strong>lua, luau and C#</strong>. Currently, I'm expanding my Full Stack Web Development skills to bring robust backends and clean frontends to life and working on my app development abilities, whilst improving my overall technical capabilities - which include consulting skills and project management,",
        pt: "Meu foco principal está na <strong>Engenharia de Software</strong>, <strong>C/C++</strong> e <strong>Desenvolvimento Web Full Stack</strong>, além de criar experiências imersivas como <strong>Desenvolvedor de Jogos</strong> (focado em <strong>Lua, Luau e C#</strong>). Atualmente, estou expandindo minhas habilidades em Web Full Stack para construir backends robustos e frontends limpos, aprimorando minhas capacidades técnicas gerais, que incluem consultoria e gestão de projetos."
    },
    // Skills & Accomplishments
    "skills-core-languages": { en: "Core Languages", pt: "Linguagens Principais" },
    "skills-domains-title": { en: "Domains & Interests", pt: "Domínios e Interesses" },
    "skills-domains-desc": { en: "Game Development, Digital Logic, Full Stack Web Development, App Development", pt: "Desenvolvimento de Jogos, Lógica Digital, Desenvolvimento Web Full Stack, Desenvolvimento de Apps" },
    "acc-oba-title": { en: "OBA Gold medalist", pt: "Medalhista de Ouro OBA" },
    "acc-oba-desc": { en: "I won the gold medal at the OBA (Olimpíada Brasileira de Astronomia), which demonstrated excellence in astronomical knowledge, problem-solving and logic related skills.", pt: "Conquistei a medalha de ouro na OBA (Olimpíada Brasileira de Astronomia), o que demonstrou a minha excelência em conhecimentos astronômicos, resolução de problemas e lógica." },
    "acc-ambev-title": { en: "AMBEV-Consulting", pt: "AMBEV-Consultoria" },
    "acc-ambev-desc": { en: "I was hired as a junior consultant to work on various I.T-related projects, mostly involving SAP, automation and database management.", pt: "Fui contratado como consultor júnior para atuar em diversos projetos de T.I., principalmente envolvendo SAP, automações e gerenciamento de banco de dados." },
    "acc-milestones-title": { en: "Academic & Professional Milestones", pt: "Marcos Acadêmicos e Profissionais" },
    "acc-milestones-desc": { en: "I completed multiple courses in software engineering, web development, and game creation, enhancing my technical skills and knowledge, such as getting admitted in UEPG and other institutions.", pt: "Concluí diversos cursos em engenharia de software, desenvolvimento web e criação de jogos, aprimorando minhas habilidades, bem como obtendo aprovações na UEPG e outras instituições." },
    // Projects
    "projects-title": { en: "My Projects", pt: "Meus Projetos" },
    "projects-valenga-description1": { en: "My work at <strong>Valenga Consulting</strong> included developing macro solutions for the corporation, made with Lua, and general I.T solutions, but most importantly, I was tasked with the modernizing and digitalizing of Valenga Consulting, which culminated in:", pt: "Meu trabalho na <strong>Valenga Consultoria</strong> incluiu o desenvolvimento de soluções de macro para a corporação usando Lua, e soluções gerais de TI. O mais importante foi a minha liderança na modernização e digitalização da empresa, que culminou em:" },
    "projects-valenga-description2": { en: "<strong>Valenga Consulting's</strong> digital presence was a huge step for its growth. The website is a project which took me over 3 months to complete, but was a huge starting step for my career in Web Development, mastering <strong>Python</strong> and <strong>TypeScript</strong> as backend languages.", pt: "A presença digital da <strong>Valenga Consultoria</strong> foi um grande passo para o seu crescimento. O site levou mais de 3 meses para ser concluído, servindo como o ponto de partida para a minha carreira em Desenvolvimento Web e o domínio de <strong>Python</strong> e <strong>TypeScript</strong>." },
    "projects-valenga-description3": { en: "The modernizing of <strong>Valenga Consulting</strong> was a swift process due to the proper application of the AGILE method, ending in a boom in sales.", pt: "A modernização da <strong>Valenga Consultoria</strong> foi um processo rápido devido à aplicação correta da metodologia AGILE, resultando em um forte aumento nas vendas." },
    "projects-valenga-note": { en: "Note: Valenga Consulting is currently going through a digital transformation and rebrading, with updates to be posted soon, therefore, the information on this page may not be up-to-date.", pt: "Nota: A Valenga Consultoria está passando por uma transformação digital e rebranding no momento. As informações aqui podem não estar 100% atualizadas." },
    "projects-priint-description1": { en: "The <strong>PRIINT Project</strong> (Projeto de Integração Internacional Tecnológica) is an initiative I developed alongside my partner, in collaboration with the <strong>State University of Ponta Grossa (UEPG)</strong>. Our core mission is to integrate all kinds of people into the learning process, with a strong focus on accessibility for people with disabilities.", pt: "O <strong>Projeto PRIINT</strong> é uma iniciativa desenvolvida por mim e meu parceiro em colaboração com a <strong>Universidade Estadual de Ponta Grossa (UEPG)</strong>. Nossa missão principal é integrar todo tipo de pessoa no processo de aprendizagem, com forte foco na acessibilidade para pessoas com deficiência." },
    "projects-priint-description2": { en: "Designed for educational institutions, the software utilizes AI to provide personalized learning experiences, adapting to each student's unique needs and preferences. Built with <strong>Python</strong> and <strong>TypeScript</strong>, and integrating LLMs like <strong>Gemini</strong> and <strong>ChatGPT</strong>, PRIINT aims to aid students from all over the world in their educational journey.", pt: "Projetado para instituições de ensino, o software utiliza IA para fornecer experiências de aprendizado personalizadas. Desenvolvido com <strong>Python</strong> e <strong>TypeScript</strong>, e integrando LLMs como <strong>Gemini</strong> e <strong>ChatGPT</strong>, o PRIINT visa auxiliar estudantes ao redor do mundo." },
    "projects-priint-note": { en: "Note: The PRIINT project is currently in development. Documentation is being updated on our GitHub repository, with official updates to be posted at <a href=\"https://thepriintproject.com.br/\" target=\"_blank\" class=\"project-link\">https://thepriintproject.com.br</a>.", pt: "Nota: O projeto PRIINT está atualmente em desenvolvimento. A documentação pode ser acompanhada no GitHub e novidades serão postadas em <a href=\"https://thepriintproject.com.br/\" target=\"_blank\" class=\"project-link\">https://thepriintproject.com.br</a>." },
    "projects-roblox-title": { en: "Roblox Game Development", pt: "Desenvolvimento de Jogos no Roblox" },
    "projects-roblox-description1": { en: "Since 2019, I've been developing games on the <strong>Roblox</strong> platform, utilizing <strong>Lua</strong> and <strong>Luau</strong>. What started as a passion for creating immersive experiences evolved into a deep dive into Software Engineering.", pt: "Desde 2019 desenvolvo jogos na plataforma <strong>Roblox</strong> utilizando <strong>Lua</strong> e <strong>Luau</strong>. O que começou como uma paixão evoluiu para um mergulho profundo na Engenharia de Software." },
    "projects-roblox-description2": { en: "Working within Roblox Studio allowed me to master core backend concepts like <strong>Client-Server architecture</strong>, network optimization, and Object-Oriented Programming. This solid foundation in game logic made my transition into systems programming (<strong>C</strong> and <strong>C++</strong>) and Full Stack Web Development (<strong>Python</strong>, <strong>TypeScript</strong>, and <strong>C#</strong>) natural and intuitive.", pt: "Trabalhar com o Roblox Studio me permitiu dominar conceitos pesados de backend como <strong>Arquitetura Cliente-Servidor</strong>, otimização de rede e Programação Orientada a Objetos. Essa base sólida tornou a minha transição para programação de sistemas (<strong>C/C++</strong>) e Full Stack Web (<strong>Python, TypeScript e C#</strong>) muito fluida." },
    // Contact & Footer
    "contact-title": { en: "Contact Me!", pt: "Entre em Contato!" },
    "contact-name": { en: "Name:", pt: "Nome:" },
    "contact-email": { en: "Email:", pt: "E-mail:" },
    "contact-subject": { en: "Subject:", pt: "Assunto:" },
    "contact-message": { en: "Message:", pt: "Mensagem:" },
    "contact-submit": { en: "Send Message", pt: "Enviar Mensagem" },
    "footer-text": { en: "&copy; 2026 Mateus Valenga - \"Matty\". All rights reserved.", pt: "&copy; 2026 Mateus Valenga - \"Matty\". Todos os direitos reservados." }
};
// form buttons ffs
const formMessages = {
    sending: { en: 'Sending...', pt: 'Enviando...' },
    success: { en: 'Sent Successfully!', pt: 'Enviado com Sucesso!' },
    error: { en: 'Failed to Send Message, try again in 5 seconds', pt: 'Falha ao Enviar, tente novamente em 5s' },
    default: { en: 'Send Message', pt: 'Enviar Mensagem' },
    alertSuccess: { en: 'Thank you for your message! I will get back to you soon.', pt: 'Obrigado pela mensagem! Entrarei em contato em breve.' },
    alertError: { en: 'An error occurred while sending your message. Please try again later.', pt: 'Ocorreu um erro ao enviar. Tente novamente mais tarde.' }
};
let currentLang = localStorage.getItem("lang") || "en";
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (key && translations[key]) {
            el.innerHTML = translations[key][lang];
        }
    });
    const langBtn = document.getElementById("lang-btn");
    if (langBtn) {
        langBtn.textContent = lang === "en" ? "🇧🇷 PT-BR" : "🇺🇸 EN-US";
    }
}
const langBtn = document.getElementById("lang-btn");
if (langBtn) {
    langBtn.addEventListener("click", () => {
        setLanguage(currentLang === "en" ? "pt" : "en");
    });
}
setLanguage(currentLang);
// @ts-ignore
const contactForm = document.getElementById('contact-form');



// =====================
// EMAIL JS INTEGRATION
// =====================

// @ts-ignore
emailjs.init("u7iQzLsxAErz6ZGTw");
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const submitBtn = contactForm.querySelector('button');
        submitBtn.disabled = true;
        submitBtn.textContent = formMessages.sending[currentLang];
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const titleInput = document.getElementById('title');
        const dataAtual = new Date().toLocaleString();
        const templateParams = {
            name: nameInput.value,
            email: emailInput.value,
            title: titleInput.value,
            message: messageInput.value,
            time: dataAtual
        };
        // @ts-ignore
        emailjs.send("service_4lbn01n", "template_e3fqnem", templateParams)
            .then(() => {
            alert(formMessages.alertSuccess[currentLang]);
            contactForm.reset();
            submitBtn.textContent = formMessages.success[currentLang];
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = formMessages.default[currentLang];
            }, 3000);
        })
            .catch((error) => {
            console.error('Failed to send email:', error);
            alert(formMessages.alertError[currentLang]);
            submitBtn.textContent = formMessages.error[currentLang];
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = formMessages.default[currentLang];
            }, 5000);
        });
    });
}

// =============================
// SCROLL & PROGRESS BAR EFFECTS
// =============================
window.onscroll = function () {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
};
//@ts-ignore
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-section');
        }
    });
}, {
    threshold: 0.1 // O efeito dispara quando 10% do elemento aparece na tela
});
//@ts-ignore
const hiddenElements = document.querySelectorAll('.hidden-section');
hiddenElements.forEach((el) => observer.observe(el));
