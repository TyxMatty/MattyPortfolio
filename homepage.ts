"use strict";

type Lang = "en" | "pt";
type Line = [string, string?];

// Loaded from jsDelivr (with SRI) in index.html.
declare const emailjs: any;

const translations: Record<string, Record<Lang, string>> = {
    // Navigation
    "skip-link": { en: "Skip to content", pt: "Pular para o conteúdo" },
    "nav-about": { en: "About", pt: "Sobre" },
    "nav-games": { en: "Games", pt: "Jogos" },
    "nav-projects": { en: "Projects", pt: "Projetos" },
    "nav-contact": { en: "Contact", pt: "Contato" },

    // Hero
    "hero-eyebrow": { en: "online · open to opportunities", pt: "online · aberto a oportunidades" },
    "hero-title": {
        en: "Hi, I'm <span class=\"glitch\" data-text=\"Matty\">Matty</span>.",
        pt: "Olá, eu sou o <span class=\"glitch\" data-text=\"Matty\">Matty</span>."
    },
    "hero-subtitle": {
        en: "Game developer and full stack engineer. I build immersive games and robust software, with security in mind from the first commit.",
        pt: "Desenvolvedor de jogos e engenheiro full stack. Crio jogos imersivos e software robusto, pensando em segurança desde o primeiro commit."
    },
    "btn-jayc": { en: "See Jay-C", pt: "Ver o Jay-C" },
    "btn-work": { en: "See My Work", pt: "Ver Meus Projetos" },
    "btn-contact": { en: "Let's Talk", pt: "Vamos Conversar" },
    "stat-games": { en: "making games since", pt: "criando jogos desde" },
    "stat-room": { en: "people per Jay-C room", pt: "pessoas por sala no Jay-C" },
    "stat-langs": { en: "programming languages", pt: "linguagens de programação" },
    "term-try": { en: "try:", pt: "tente:" },

    // About
    "about-tag": { en: "// 01 · about", pt: "// 01 · sobre" },
    "about-title": { en: "About Me", pt: "Sobre Mim" },
    "id-role-k": { en: "role", pt: "função" },
    "id-role": { en: "Software Engineering student", pt: "Estudante de Eng. de Software" },
    "id-loc-k": { en: "location", pt: "local" },
    "id-loc": { en: "Brazil", pt: "Brasil" },
    "id-status": { en: "available", pt: "disponível" },
    "about-bio1": {
        en: "Hello! I'm <strong>Mateus Valenga</strong>, also known as <strong>Matty</strong>. I'm a 18-year-old Software Engineering student with a passion for software development, web development and game creation. I'm currently based in Brazil, and I'm eager to connect with like-minded individuals and explore exciting opportunities in the tech world.",
        pt: "Olá! Eu sou <strong>Mateus Valenga</strong>, também conhecido como <strong>Matty</strong>. Tenho 18 anos, sou estudante de Engenharia de Software e apaixonado por desenvolvimento de sistemas, web e criação de jogos. Atualmente resido no Brasil e estou ansioso para me conectar com pessoas da área e explorar novas oportunidades no mundo da tecnologia."
    },
    "about-bio2": {
        en: "My core focus lies in <strong>Software Engineering</strong>, <strong>C/C++</strong> and <strong>Full Stack Web Development</strong>, alongside crafting immersive experiences as a <strong>Game Developer</strong>, specializing in <strong>lua, luau and C#</strong>. Currently, I'm expanding my Full Stack Web Development skills to bring robust backends and clean frontends to life and working on my app development abilities, whilst improving my overall technical capabilities - which include consulting skills and project management.",
        pt: "Meu foco principal está na <strong>Engenharia de Software</strong>, <strong>C/C++</strong> e <strong>Desenvolvimento Web Full Stack</strong>, além de criar experiências imersivas como <strong>Desenvolvedor de Jogos</strong> (focado em <strong>Lua, Luau e C#</strong>). Atualmente, estou expandindo minhas habilidades em Web Full Stack para construir backends robustos e frontends limpos, aprimorando minhas capacidades técnicas gerais, que incluem consultoria e gestão de projetos."
    },

    // Skills & Accomplishments
    "skills-core-languages": { en: "Core Languages", pt: "Linguagens Principais" },
    "skills-domains-title": { en: "Domains & Interests", pt: "Domínios e Interesses" },
    "skills-domains-desc": {
        en: "<li>Game Development</li><li>Digital Logic</li><li>Full Stack Web</li><li>App Development</li>",
        pt: "<li>Desenvolvimento de Jogos</li><li>Lógica Digital</li><li>Web Full Stack</li><li>Desenvolvimento de Apps</li>"
    },
    "skills-sec-title": { en: "Security Mindset", pt: "Mentalidade de Segurança" },
    "skills-sec-desc": {
        en: "<li>Rate limiting</li><li>Input validation</li><li>Anti-exploit</li><li>CSP &amp; SRI</li><li>Self-hosting</li>",
        pt: "<li>Rate limiting</li><li>Validação de entrada</li><li>Anti-exploit</li><li>CSP &amp; SRI</li><li>Self-hosting</li>"
    },
    "acc-oba-title": { en: "OBA Gold medalist", pt: "Medalhista de Ouro OBA" },
    "acc-oba-desc": { en: "I won the gold medal at the OBA (Olimpíada Brasileira de Astronomia), which demonstrated excellence in astronomical knowledge, problem-solving and logic related skills.", pt: "Conquistei a medalha de ouro na OBA (Olimpíada Brasileira de Astronomia), o que demonstrou a minha excelência em conhecimentos astronômicos, resolução de problemas e lógica." },
    "acc-ambev-title": { en: "AMBEV-Consulting", pt: "AMBEV-Consultoria" },
    "acc-ambev-desc": { en: "I was hired as a junior consultant to work on various I.T-related projects, mostly involving SAP, automation and database management.", pt: "Fui contratado como consultor júnior para atuar em diversos projetos de T.I., principalmente envolvendo SAP, automações e gerenciamento de banco de dados." },
    "acc-milestones-title": { en: "Academic & Professional Milestones", pt: "Marcos Acadêmicos e Profissionais" },
    "acc-milestones-desc": { en: "I completed multiple courses in software engineering, web development, and game creation, enhancing my technical skills and knowledge, such as getting admitted in UEPG and other institutions.", pt: "Concluí diversos cursos em engenharia de software, desenvolvimento web e criação de jogos, aprimorando minhas habilidades, bem como obtendo aprovações na UEPG e outras instituições." },

    // The Jay line
    "jay-tag": { en: "// 02 · my own brand", pt: "// 02 · minha própria marca" },
    "jay-title": { en: "The Jay line", pt: "A linha Jay" },
    "jay-lead": {
        en: "Jay is my own family of lightweight, open-source desktop apps. They share the wolf, the look and the stack, and they work together: one for calls, one for audio, one for files and a hub that installs them all.",
        pt: "Jay é a minha própria família de apps desktop leves e open source. Eles compartilham o lobo, o visual e a stack, e funcionam juntos: um para chamadas, um para áudio, um para arquivos e um hub que instala todos."
    },
    "jay-p1-title": { en: "Light by design", pt: "Leve por natureza" },
    "jay-p1": { en: "Tauri v2 instead of Electron, with the heavy work in Rust. Small installers, low memory, fast start.", pt: "Tauri v2 no lugar do Electron, com o trabalho pesado em Rust. Instaladores pequenos, pouca memória e abertura rápida." },
    "jay-p2-title": { en: "One look", pt: "Um só visual" },
    "jay-p2": { en: "Every app ships the same Calm, Neon and Soft styles, light or dark, in English or Portuguese.", pt: "Todo app traz os mesmos estilos Calm, Neon e Soft, claro ou escuro, em inglês ou português." },
    "jay-p3-title": { en: "Built to work together", pt: "Feitos para funcionar juntos" },
    "jay-p3": { en: "Jay-A hands Jay-C a filtered microphone over a local link, and Jay-H installs and updates the whole line.", pt: "O Jay-A entrega ao Jay-C o microfone filtrado por um link local, e o Jay-H instala e atualiza a linha toda." },
    "jay-p4-title": { en: "Open and yours", pt: "Aberto e seu" },
    "jay-p4": { en: "MIT licensed, no accounts, no ads. Updates come straight from the public GitHub releases.", pt: "Licença MIT, sem contas e sem anúncios. As atualizações vêm direto dos releases públicos no GitHub." },
    "jayc-role": { en: "calls & screen sharing · flagship", pt: "chamadas e tela · carro-chefe" },
    "jaya-role": { en: "audio", pt: "áudio" },
    "jaya-desc": {
        en: "The audio app of the line: a clean voice for Jay-C calls without a noise-removal subscription. It runs in the tray and feeds Jay-C through the <strong>Jay Link</strong>; if Jay-A stops, the call keeps going on Jay-C's own filter.",
        pt: "O app de áudio da linha: voz limpa nas chamadas do Jay-C sem assinatura de remoção de ruído. Ele roda na bandeja e alimenta o Jay-C pelo <strong>Jay Link</strong>; se o Jay-A parar, a chamada segue com o filtro do próprio Jay-C."
    },
    "jaya-features": {
        en: "<li>AI noise removal (DeepFilterNet or RNNoise) plus WebRTC cleanup</li><li>Effect chain: filter, gate, EQ, compressor, de-esser, limiter, with presets</li><li>Soundboard, audio editor and converter on the way</li>",
        pt: "<li>Remoção de ruído com IA (DeepFilterNet ou RNNoise) mais a limpeza do WebRTC</li><li>Cadeia de efeitos: filtro, gate, EQ, compressor, de-esser, limiter, com presets</li><li>Soundboard, editor de áudio e conversor a caminho</li>"
    },
    "jaye-role": { en: "editor & reader", pt: "editor e leitor" },
    "jaye-shot-image": { en: "image", pt: "imagem" },
    "jaye-desc": {
        en: "One small, fast app to open, fix up and convert everyday files, instead of an office suite, a photo editor and a video editor.",
        pt: "Um app pequeno e rápido para abrir, ajustar e converter arquivos do dia a dia, no lugar de um pacote office, um editor de fotos e um editor de vídeo."
    },
    "jaye-features": {
        en: "<li>Its own PDF reader drawn in Rust, with search and password-protected files</li><li>Markdown and LaTeX with a live preview; DOCX, ODT and RTF export</li><li>Images to WebP/AVIF in batches; cut and join video without re-encoding</li><li>Markdown preview sanitized in Rust (ammonia) before it reaches the page</li>",
        pt: "<li>Leitor de PDF próprio desenhado em Rust, com busca e arquivos com senha</li><li>Markdown e LaTeX com prévia ao vivo; exporta DOCX, ODT e RTF</li><li>Imagens para WebP/AVIF em lote; corta e junta vídeo sem recodificar</li><li>Prévia do Markdown sanitizada em Rust (ammonia) antes de chegar à página</li>"
    },
    "jayh-role": { en: "hub", pt: "hub" },
    "jayh-desc": {
        en: "The front door of the line: every Jay app in one place, to install, update and open it.",
        pt: "A porta de entrada da linha: todos os apps Jay num lugar só, para instalar, atualizar e abrir."
    },
    "jayh-features": {
        en: "<li>A card per app with the installed version and the latest GitHub release</li><li>One click to install, update or open; it updates itself too</li><li>Per-user Windows installer: no admin rights needed</li>",
        pt: "<li>Um card por app com a versão instalada e o último release no GitHub</li><li>Um clique para instalar, atualizar ou abrir; ele também se atualiza</li><li>Instalador do Windows por usuário: sem precisar de admin</li>"
    },

    // Jay-C
    "jayc-lead": {
        en: "Lightweight, open-source calls and screen sharing for desktop and mobile, on a server you control.",
        pt: "Chamadas e compartilhamento de tela leves e open source, para desktop e mobile, num servidor que você controla."
    },
    "jayc-shot-call": { en: "call", pt: "chamada" },
    "jayc-shot-home": { en: "home", pt: "início" },
    "jayc-shot-settings": { en: "settings", pt: "configurações" },
    "jayc-desc1": {
        en: "Jay-C runs on a signaling server that you or a friend host with a single <code>docker compose up</code>. No accounts, no ads, no third-party cloud in the middle of your calls.",
        pt: "O Jay-C roda num servidor de sinalização que você ou um amigo hospeda com um único <code>docker compose up</code>. Sem contas, sem anúncios e sem nuvem de terceiros no meio das suas chamadas."
    },
    "jayc-desc2": {
        en: "Built with <strong>Tauri v2</strong> (Rust) and <strong>Vanilla JS</strong>, with a <strong>mediasoup</strong> SFU in Node.js: each person uploads their stream once and the server forwards it to up to 16 people, without decoding it. A native Windows plugin captures per-process audio, so you can stream a game with its sound and leave Discord out.",
        pt: "Feito com <strong>Tauri v2</strong> (Rust) e <strong>Vanilla JS</strong>, com um SFU <strong>mediasoup</strong> em Node.js: cada pessoa envia sua transmissão uma vez e o servidor repassa para até 16 pessoas, sem decodificar. Um plugin nativo para Windows captura o áudio por processo, então dá para transmitir um jogo com o som dele e deixar o Discord de fora."
    },
    "jayc-sec-title": { en: "security by design", pt: "segurança desde o projeto" },
    "jayc-sec-list": {
        en: "<li>Media encrypted in transit with WebRTC <strong>DTLS-SRTP</strong></li><li>Signaling hardened with per-connection <strong>token-bucket rate limits</strong>, a 64 KB message cap and an optional origin allowlist</li><li>Strict <strong>Content Security Policy</strong> in the app: scripts only from the app itself</li><li>Self-hosted: your calls stay on infrastructure you control</li><li>Open source under the <strong>MIT</strong> license</li>",
        pt: "<li>Mídia criptografada em trânsito com WebRTC <strong>DTLS-SRTP</strong></li><li>Sinalização protegida com <strong>rate limit (token bucket)</strong> por conexão, limite de 64 KB por mensagem e allowlist de origens opcional</li><li><strong>Content Security Policy</strong> rígida no app: scripts só do próprio app</li><li>Self-hosted: suas chamadas ficam numa infraestrutura que você controla</li><li>Open source sob a licença <strong>MIT</strong></li>"
    },
    "jayc-github": { en: "Source code", pt: "Código-fonte" },
    "jayc-download": { en: "Download for Windows", pt: "Baixar para Windows" },

    // Steal a Creepypasta
    "sac-tag": { en: "// 03 · game in development", pt: "// 03 · jogo em desenvolvimento" },
    "sac-lead": {
        en: "A multiplayer survival-theft game on Roblox, set in Creepypasta lore.",
        pt: "Um jogo multiplayer de sobrevivência e roubo no Roblox, no universo das Creepypastas."
    },
    "sac-desc": {
        en: "Players sneak into the Hazard Zone to steal cursed eggs, run them home past three patrolling Hunters, unseal the entity at their bunker altar and put it to work earning Essence, while defending their base with traps and raiding everyone else's.",
        pt: "Os jogadores entram na Hazard Zone para roubar ovos amaldiçoados, correm de volta passando por três Hunters que patrulham a área, liberam a entidade no altar do bunker e a colocam para gerar Essence, enquanto defendem a base com armadilhas e invadem a base dos outros."
    },
    "sac-features": {
        en: "<li>17 entities across 5 rarity tiers, rolled with luck</li><li>Boss fights with a live damage ranking</li><li>Bunker defense: traps, door hacking and raids</li><li>Powers, passes and a collectible index</li>",
        pt: "<li>17 entidades em 5 raridades, sorteadas com sorte</li><li>Lutas contra chefes com ranking de dano ao vivo</li><li>Defesa de bunker: armadilhas, hack de portas e invasões</li><li>Poderes, passes e um índice de colecionáveis</li>"
    },
    "sac-sec-title": { en: "anti-exploit", pt: "anti-exploit" },
    "sac-sec-list": {
        en: "<li><strong>Server-authoritative</strong>: the client only sends intent</li><li>Server-side <strong>movement sanity check</strong> that puts teleporting exploiters back</li><li>Remote calls with <strong>payload validation</strong> (types, NaN, ranges) and per-player <strong>rate limits</strong></li><li>Thefts checked against server state, never against client-side doors</li>",
        pt: "<li><strong>Servidor autoritativo</strong>: o cliente só envia a intenção</li><li><strong>Verificação de movimento</strong> no servidor que devolve exploiters que se teleportam</li><li>Chamadas remotas com <strong>validação de payload</strong> (tipos, NaN, intervalos) e <strong>rate limit</strong> por jogador</li><li>Roubos conferidos pelo estado do servidor, nunca por portas do lado do cliente</li>"
    },
    "sac-shot-boss": { en: "boss", pt: "chefe" },
    "sac-shot-entities": { en: "entities", pt: "entidades" },
    "sac-shot-powers": { en: "powers", pt: "poderes" },
    "sac-note": { en: "In development. The source code is private for now.", pt: "Em desenvolvimento. O código-fonte é privado por enquanto." },

    // Projects
    "projects-tag": { en: "// 04 · more projects", pt: "// 04 · outros projetos" },
    "projects-title": { en: "My Projects", pt: "Meus Projetos" },
    "link-docs": { en: "View Documentation", pt: "Ver Documentação" },
    "link-scripts": { en: "View Core Scripts", pt: "Ver Scripts Principais" },
    "projects-valenga-description1": { en: "My work at <strong>Valenga Consulting</strong> included developing macro solutions for the corporation, made with Lua, and general I.T solutions, but most importantly, I was tasked with the modernizing and digitalizing of Valenga Consulting, which culminated in:", pt: "Meu trabalho na <strong>Valenga Consultoria</strong> incluiu o desenvolvimento de soluções de macro para a corporação usando Lua, e soluções gerais de TI. O mais importante foi a minha liderança na modernização e digitalização da empresa, que culminou em:" },
    "projects-valenga-description2": { en: "<strong>Valenga Consulting's</strong> digital presence was a huge step for its growth. The website is a project which took me over 3 months to complete, but was a huge starting step for my career in Web Development, mastering <strong>Python</strong> and <strong>TypeScript</strong> as backend languages.", pt: "A presença digital da <strong>Valenga Consultoria</strong> foi um grande passo para o seu crescimento. O site levou mais de 3 meses para ser concluído, servindo como o ponto de partida para a minha carreira em Desenvolvimento Web e o domínio de <strong>Python</strong> e <strong>TypeScript</strong>." },
    "projects-valenga-description3": { en: "The modernizing of <strong>Valenga Consulting</strong> was a swift process due to the proper application of the AGILE method, ending in a boom in sales.", pt: "A modernização da <strong>Valenga Consultoria</strong> foi um processo rápido devido à aplicação correta da metodologia AGILE, resultando em um forte aumento nas vendas." },
    "projects-valenga-note": { en: "Note: Valenga Consulting is currently going through a digital transformation and rebrading, with updates to be posted soon, therefore, the information on this page may not be up-to-date.", pt: "Nota: A Valenga Consultoria está passando por uma transformação digital e rebranding no momento. As informações aqui podem não estar 100% atualizadas." },
    "projects-priint-description1": { en: "The <strong>PRIINT Project</strong> (Projeto de Integração Internacional Tecnológica) is an initiative I developed alongside my partner, in collaboration with the <strong>State University of Ponta Grossa (UEPG)</strong>. Our core mission is to integrate all kinds of people into the learning process, with a strong focus on accessibility for people with disabilities.", pt: "O <strong>Projeto PRIINT</strong> é uma iniciativa desenvolvida por mim e meu parceiro em colaboração com a <strong>Universidade Estadual de Ponta Grossa (UEPG)</strong>. Nossa missão principal é integrar todo tipo de pessoa no processo de aprendizagem, com forte foco na acessibilidade para pessoas com deficiência." },
    "projects-priint-description2": { en: "Designed for educational institutions, the software utilizes AI to provide personalized learning experiences, adapting to each student's unique needs and preferences. Built with <strong>Python</strong> and <strong>TypeScript</strong>, and integrating LLMs like <strong>Gemini</strong> and <strong>ChatGPT</strong>, PRIINT aims to aid students from all over the world in their educational journey.", pt: "Projetado para instituições de ensino, o software utiliza IA para fornecer experiências de aprendizado personalizadas. Desenvolvido com <strong>Python</strong> e <strong>TypeScript</strong>, e integrando LLMs como <strong>Gemini</strong> e <strong>ChatGPT</strong>, o PRIINT visa auxiliar estudantes ao redor do mundo." },
    "projects-priint-note": { en: "Note: The PRIINT project is currently in development. Documentation is being updated on our GitHub repository, with official updates to be posted at <a href=\"https://thepriintproject.com.br/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"project-link\">https://thepriintproject.com.br</a>.", pt: "Nota: O projeto PRIINT está atualmente em desenvolvimento. A documentação pode ser acompanhada no GitHub e novidades serão postadas em <a href=\"https://thepriintproject.com.br/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"project-link\">https://thepriintproject.com.br</a>." },
    "projects-roblox-title": { en: "Roblox Game Development", pt: "Desenvolvimento de Jogos no Roblox" },
    "projects-roblox-description1": { en: "Since 2019, I've been developing games on the <strong>Roblox</strong> platform, utilizing <strong>Lua</strong> and <strong>Luau</strong>. What started as a passion for creating immersive experiences evolved into a deep dive into Software Engineering.", pt: "Desde 2019 desenvolvo jogos na plataforma <strong>Roblox</strong> utilizando <strong>Lua</strong> e <strong>Luau</strong>. O que começou como uma paixão evoluiu para um mergulho profundo na Engenharia de Software." },
    "projects-roblox-description2": { en: "Working within Roblox Studio allowed me to master core backend concepts like <strong>Client-Server architecture</strong>, network optimization, and Object-Oriented Programming. This solid foundation in game logic made my transition into systems programming (<strong>C</strong> and <strong>C++</strong>) and Full Stack Web Development (<strong>Python</strong>, <strong>TypeScript</strong>, and <strong>C#</strong>) natural and intuitive.", pt: "Trabalhar com o Roblox Studio me permitiu dominar conceitos pesados de backend como <strong>Arquitetura Cliente-Servidor</strong>, otimização de rede e Programação Orientada a Objetos. Essa base sólida tornou a minha transição para programação de sistemas (<strong>C/C++</strong>) e Full Stack Web (<strong>Python, TypeScript e C#</strong>) muito fluida." },
    "projects-paws-title": {
        en: "Paws and Paths - Narrative Game (UEPG)",
        pt: "Entre Patas e Caminhos - Jogo Narrativo (UEPG)"
    },
    "projects-paws-description1": {
        en: "I led the development of <strong>Entre Patas e Caminhos (Paws and Paths)</strong>, a narrative awareness game created at the State University of Ponta Grossa (UEPG). The project intersects animal welfare with the protagonist's mental health recovery.",
        pt: "Liderei o desenvolvimento do <strong>Entre Patas e Caminhos</strong>, um jogo narrativo de consciencialização criado na Universidade Estadual de Ponta Grossa (UEPG). O projeto cruza o bem-estar animal com a recuperação da saúde mental do protagonista."
    },
    "projects-paws-description2": {
        en: "In this project, which is in development, I was responsible for the complete <strong>Requirements Engineering</strong> (functional and non-functional), software architecture modeling via <strong>UML</strong>, flowchart creation, and the structuring of complex branching logic for the game's dialogue trees.",
        pt: "Neste projeto, que está em desenvolvimento, fui responsável por toda a <strong>Engenharia de Requisitos</strong> (funcionais e não funcionais), modelação da arquitetura de software via <strong>UML</strong>, criação de fluxogramas e pela estruturação de lógicas ramificadas complexas para as árvores de diálogo do jogo."
    },

    // Contact & Footer
    "contact-tag": { en: "// 05 · contact", pt: "// 05 · contato" },
    "contact-title": { en: "Contact Me!", pt: "Entre em Contato!" },
    "contact-lead": {
        en: "Got an opportunity, a project idea or a bug to report? Send a message and it lands straight in my inbox.",
        pt: "Tem uma oportunidade, uma ideia de projeto ou um bug para reportar? Mande uma mensagem e ela chega direto no meu e-mail."
    },
    "contact-name": { en: "Name:", pt: "Nome:" },
    "contact-email": { en: "Email:", pt: "E-mail:" },
    "contact-subject": { en: "Subject:", pt: "Assunto:" },
    "contact-message": { en: "Message:", pt: "Mensagem:" },
    "contact-submit": { en: "Send Message", pt: "Enviar Mensagem" },
    "footer-text": { en: "&copy; 2026 Mateus Valenga - \"Matty\". All rights reserved.", pt: "&copy; 2026 Mateus Valenga - \"Matty\". Todos os direitos reservados." },
    "footer-sec": { en: "CSP · SRI · no trackers · no cookies", pt: "CSP · SRI · sem rastreadores · sem cookies" }
};

const formMessages: Record<string, Record<Lang, string>> = {
    sending: { en: "Sending...", pt: "Enviando..." },
    default: { en: "Send Message", pt: "Enviar Mensagem" },
    ok: { en: "[ok] Message delivered. I'll get back to you soon!", pt: "[ok] Mensagem entregue. Responderei em breve!" },
    error: { en: "[err] Could not send right now. Please try again later.", pt: "[err] Não foi possível enviar agora. Tente novamente mais tarde." },
    invalid: { en: "[err] Please fill in every field, with a valid email.", pt: "[err] Preencha todos os campos, com um e-mail válido." },
    cooldown: { en: "[wait] Message already sent. Please wait a minute before sending another.", pt: "[wait] Mensagem já enviada. Aguarde um minuto para enviar outra." }
};

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function readPref(key: string): string | null {
    try { return localStorage.getItem(key); } catch { return null; }
}

// =====================
// LANGUAGE
// =====================
const savedLang = readPref("lang");
let currentLang: Lang = savedLang === "pt" || savedLang === "en"
    ? savedLang
    : navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en";

function setLanguage(lang: Lang) {
    currentLang = lang;
    try { localStorage.setItem("lang", lang); } catch { /* private mode: keep it in memory */ }
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    // Only static, developer-written strings go through innerHTML.
    document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
        const entry = translations[el.dataset.i18n ?? ""];
        if (entry) el.innerHTML = entry[lang];
    });
    const label = document.getElementById("lang-label");
    if (label) label.textContent = lang === "en" ? "PT-BR" : "EN-US";
    document.getElementById("lang-btn")?.setAttribute("aria-label", lang === "en" ? "Mudar para português" : "Switch to English");
}

document.getElementById("lang-btn")?.addEventListener("click", () => {
    setLanguage(currentLang === "en" ? "pt" : "en");
});
setLanguage(currentLang);

// =====================
// INTERACTIVE TERMINAL
// =====================
const termOut = document.getElementById("term-output");
const termForm = document.getElementById("term-form") as HTMLFormElement | null;
const termInput = document.getElementById("term-cmd") as HTMLInputElement | null;
const SECTIONS = ["about", "jay", "creepypasta", "projects", "contact"];
// cd aliases for anchors inside a section
const CD_ALIASES: Record<string, string> = { games: "creepypasta", jayc: "jayc", "jay-a": "jay-a", "jay-e": "jay-e", "jay-h": "jay-h" };

const termText: Record<Lang, Record<string, Line[]>> = {
    en: {
        boot: [["booting matty.dev v2.0 ...", "t-muted"], ["[ok] modules loaded: game-dev, full-stack, security", "t-ok"], ["[ok] brand loaded: Jay (C · A · E · H)", "t-ok"], ["type 'help' to list commands.", "t-accent"]],
        help: [["available commands:", "t-accent"], ["  whoami     who is Matty"], ["  skills     languages and domains"], ["  jay        the Jay line (my brand)"], ["  jayc       Jay-C, the flagship"], ["  games      Steal a Creepypasta"], ["  security   how this site is hardened"], ["  socials    where to find me"], ["  ls / cd    list and jump to sections"], ["  lang       switch EN / PT"], ["  date, echo, clear"]],
        whoami: [["Mateus Valenga, aka Matty.", "t-accent"], ["18 y/o Software Engineering student from Brazil."], ["Game dev since 2019 (Lua/Luau, C#), full stack (TS, Python),"], ["systems (C/C++, Rust) and a security-first mindset."]],
        skills: [["languages: C/C++  C#  TypeScript  JavaScript  Python  Lua  Luau  Rust"], ["domains:   game dev · full stack web · apps · digital logic"], ["security:  rate limiting · input validation · anti-exploit · CSP/SRI", "t-ok"]],
        jayc: [["Jay-C: self-hosted calls & screen sharing", "t-accent"], ["stack: Tauri v2 (Rust) + Vanilla JS + mediasoup SFU + Docker"], ["[ok] DTLS-SRTP media  [ok] token-bucket rate limits  [ok] strict CSP", "t-ok"], ["up to 16 people per room. MIT licensed."], ["-> cd jayc", "t-muted"]],
        games: [["Steal a Creepypasta: Sealed Entities (Roblox)", "t-accent"], ["steal cursed eggs, unseal entities, defend your bunker."], ["[!!] server-authoritative, movement sanity checks, payload validation", "t-err"], ["-> cd creepypasta", "t-muted"]],
        security: [["site security report", "t-accent"], ["[ok] Content-Security-Policy: scripts from self + jsDelivr only", "t-ok"], ["[ok] Subresource Integrity on every CDN script/style", "t-ok"], ["[ok] no cookies, no trackers, no analytics", "t-ok"], ["[ok] contact form: honeypot, validation, length caps, cooldown", "t-ok"], ["[ok] external links: rel=noopener noreferrer", "t-ok"], ["[ok] this terminal renders input as text, never HTML", "t-ok"]],
        socials: [["github:   github.com/TyxMatty"], ["linkedin: linkedin.com/in/mateus-valenga-dos-santos-arruda"], ["or: cd contact", "t-muted"]],
        ls: [["about/  jay/  creepypasta/  projects/  contact/", "t-accent"], ["jay/: jayc  jay-a  jay-e  jay-h", "t-muted"]],
        jay: [["Jay: my own line of lightweight, open-source desktop apps", "t-accent"], ["  Jay-C  calls & screen sharing (flagship)"], ["  Jay-A  audio: AI noise removal, effects, Jay Link to Jay-C"], ["  Jay-E  editor & reader: PDF, Markdown, images, video"], ["  Jay-H  hub: installs and updates the whole line"], ["[ok] Tauri v2 + Rust  [ok] MIT  [ok] no accounts, no ads", "t-ok"], ["-> cd jay", "t-muted"]],
        sudo: [["matty is not in the sudoers file. This incident will be reported.", "t-err"]],
        notfound: [["command not found", "t-err"]],
        nodir: [["no such section. try: ls", "t-err"]],
        lang: [["[ok] language set to English", "t-ok"]]
    },
    pt: {
        boot: [["iniciando matty.dev v2.0 ...", "t-muted"], ["[ok] módulos carregados: game-dev, full-stack, segurança", "t-ok"], ["[ok] marca carregada: Jay (C · A · E · H)", "t-ok"], ["digite 'help' para ver os comandos.", "t-accent"]],
        help: [["comandos disponíveis:", "t-accent"], ["  whoami     quem é o Matty"], ["  skills     linguagens e áreas"], ["  jay        a linha Jay (minha marca)"], ["  jayc       Jay-C, o carro-chefe"], ["  games      Steal a Creepypasta"], ["  security   como este site é protegido"], ["  socials    onde me encontrar"], ["  ls / cd    listar e ir para as seções"], ["  lang       trocar EN / PT"], ["  date, echo, clear"]],
        whoami: [["Mateus Valenga, o Matty.", "t-accent"], ["18 anos, estudante de Engenharia de Software no Brasil."], ["Dev de jogos desde 2019 (Lua/Luau, C#), full stack (TS, Python),"], ["sistemas (C/C++, Rust) e mentalidade de segurança em primeiro lugar."]],
        skills: [["linguagens: C/C++  C#  TypeScript  JavaScript  Python  Lua  Luau  Rust"], ["áreas:      jogos · web full stack · apps · lógica digital"], ["segurança:  rate limiting · validação de entrada · anti-exploit · CSP/SRI", "t-ok"]],
        jayc: [["Jay-C: chamadas e compartilhamento de tela self-hosted", "t-accent"], ["stack: Tauri v2 (Rust) + Vanilla JS + SFU mediasoup + Docker"], ["[ok] mídia DTLS-SRTP  [ok] rate limit token bucket  [ok] CSP rígida", "t-ok"], ["até 16 pessoas por sala. Licença MIT."], ["-> cd jayc", "t-muted"]],
        games: [["Steal a Creepypasta: Sealed Entities (Roblox)", "t-accent"], ["roube ovos amaldiçoados, libere entidades, defenda seu bunker."], ["[!!] servidor autoritativo, checagem de movimento, validação de payload", "t-err"], ["-> cd creepypasta", "t-muted"]],
        security: [["relatório de segurança do site", "t-accent"], ["[ok] Content-Security-Policy: scripts só do próprio site + jsDelivr", "t-ok"], ["[ok] Subresource Integrity em todo script/estilo de CDN", "t-ok"], ["[ok] sem cookies, sem rastreadores, sem analytics", "t-ok"], ["[ok] formulário: honeypot, validação, limite de tamanho, cooldown", "t-ok"], ["[ok] links externos: rel=noopener noreferrer", "t-ok"], ["[ok] este terminal exibe a entrada como texto, nunca como HTML", "t-ok"]],
        socials: [["github:   github.com/TyxMatty"], ["linkedin: linkedin.com/in/mateus-valenga-dos-santos-arruda"], ["ou: cd contact", "t-muted"]],
        ls: [["about/  jay/  creepypasta/  projects/  contact/", "t-accent"], ["jay/: jayc  jay-a  jay-e  jay-h", "t-muted"]],
        jay: [["Jay: minha linha de apps desktop leves e open source", "t-accent"], ["  Jay-C  chamadas e tela (carro-chefe)"], ["  Jay-A  áudio: remoção de ruído com IA, efeitos, Jay Link pro Jay-C"], ["  Jay-E  editor e leitor: PDF, Markdown, imagens, vídeo"], ["  Jay-H  hub: instala e atualiza a linha toda"], ["[ok] Tauri v2 + Rust  [ok] MIT  [ok] sem contas, sem anúncios", "t-ok"], ["-> cd jay", "t-muted"]],
        sudo: [["matty não está no arquivo sudoers. Este incidente será reportado.", "t-err"]],
        notfound: [["comando não encontrado", "t-err"]],
        nodir: [["seção não encontrada. tente: ls", "t-err"]],
        lang: [["[ok] idioma definido para português", "t-ok"]]
    }
};
// Commands that print a fixed block; 'notfound', 'nodir' and 'boot' are messages, not commands.
const STATIC_COMMANDS = ["help", "whoami", "skills", "jay", "jayc", "games", "creepypasta", "security", "socials", "ls", "sudo"];

const cmdHistory: string[] = [];
let historyIndex = 0;

function print(text: string, cls?: string) {
    if (!termOut) return;
    const line = document.createElement("div");
    if (cls) line.className = cls;
    line.textContent = text; // user input is echoed here, so never innerHTML
    termOut.appendChild(line);
    termOut.scrollTop = termOut.scrollHeight;
}

function printBlock(key: string, prefix = "") {
    termText[currentLang][key].forEach(([text, cls], i) => print(i === 0 && prefix ? `${prefix}: ${text}` : text, cls));
}

function runCommand(raw: string) {
    const input = raw.trim().slice(0, 64);
    if (!input) return;
    cmdHistory.push(input);
    historyIndex = cmdHistory.length;
    print(input, "t-cmd");

    const [first, ...args] = input.split(/\s+/);
    const cmd = first.toLowerCase();

    if (cmd === "clear") {
        if (termOut) termOut.textContent = "";
    } else if (cmd === "lang") {
        setLanguage(currentLang === "en" ? "pt" : "en");
        printBlock("lang");
    } else if (cmd === "date") {
        print(new Date().toLocaleString(currentLang === "pt" ? "pt-BR" : "en-US"));
    } else if (cmd === "echo") {
        print(args.join(" "));
    } else if (cmd === "cd") {
        const target = (args[0] ?? "").replace(/\/$/, "").toLowerCase();
        const id = Object.prototype.hasOwnProperty.call(CD_ALIASES, target) ? CD_ALIASES[target] : target;
        const section = SECTIONS.includes(id) || Object.values(CD_ALIASES).includes(id) ? document.getElementById(id) : null;
        if (section) {
            print(`-> /${id}`, "t-accent");
            section.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
        } else {
            printBlock("nodir", `cd ${target || "~"}`);
        }
    } else if (STATIC_COMMANDS.includes(cmd)) {
        printBlock(cmd === "creepypasta" ? "games" : cmd);
    } else {
        printBlock("notfound", cmd);
    }
}

if (termForm && termInput) {
    termForm.addEventListener("submit", (event) => {
        event.preventDefault();
        runCommand(termInput.value);
        termInput.value = "";
    });

    termInput.addEventListener("keydown", (event) => {
        if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
        event.preventDefault();
        historyIndex = Math.max(0, Math.min(cmdHistory.length, historyIndex + (event.key === "ArrowUp" ? -1 : 1)));
        termInput.value = cmdHistory[historyIndex] ?? "";
    });

    termOut?.addEventListener("click", () => {
        if (!window.getSelection()?.toString()) termInput.focus({ preventScroll: true });
    });
}

document.querySelectorAll<HTMLButtonElement>("[data-cmd]").forEach((btn) => {
    btn.addEventListener("click", () => runCommand(btn.dataset.cmd ?? ""));
});

// Boot sequence: typed line by line, or all at once when motion is reduced.
termText[currentLang].boot.forEach(([text, cls], i) => {
    if (reduceMotion) print(text, cls);
    else setTimeout(() => print(text, cls), 350 + i * 380);
});

// =====================
// SLIDESHOWS + LIGHTBOX
// =====================
type Slide = { src: string; alt: string };
// Each slideshow, keyed by its root, so the lightbox can page through the same images.
const slideshows = new WeakMap<Element, (step: number) => Slide>();

document.querySelectorAll<HTMLElement>("[data-slideshow]").forEach((root) => {
    const img = root.querySelector<HTMLImageElement>(".slide-img");
    const count = root.querySelector(".slide-count");
    const thumbs = Array.from(root.querySelectorAll<HTMLButtonElement>(".thumb"));
    if (!img || thumbs.length === 0) return;
    let index = 0;

    const show = (i: number): Slide => {
        index = (i + thumbs.length) % thumbs.length;
        const btn = thumbs[index];
        const slide = { src: btn.dataset.src ?? img.src, alt: btn.dataset.alt ?? "" };
        thumbs.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
        if (count) count.textContent = `${index + 1} / ${thumbs.length}`;
        img.classList.add("is-swapping");
        setTimeout(() => {
            img.src = slide.src;
            img.alt = slide.alt;
            img.decode().catch(() => undefined).finally(() => img.classList.remove("is-swapping"));
        }, reduceMotion ? 0 : 180);
        return slide;
    };

    slideshows.set(root, (step) => show(index + step));
    thumbs.forEach((btn, i) => btn.addEventListener("click", () => show(i)));
    root.querySelector(".slide-prev")?.addEventListener("click", () => show(index - 1));
    root.querySelector(".slide-next")?.addEventListener("click", () => show(index + 1));
    root.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") show(index + (event.key === "ArrowLeft" ? -1 : 1));
    });

    // Horizontal swipe on touch screens.
    let touchX = 0;
    root.addEventListener("touchstart", (event) => { touchX = event.touches[0].clientX; }, { passive: true });
    root.addEventListener("touchend", (event) => {
        const dx = event.changedTouches[0].clientX - touchX;
        if (Math.abs(dx) > 40) show(index + (dx < 0 ? 1 : -1));
    });
});

const lightbox = document.getElementById("lightbox") as HTMLDialogElement | null;
const lightboxImg = document.getElementById("lightbox-img") as HTMLImageElement | null;
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxArrows = [document.getElementById("lightbox-prev"), document.getElementById("lightbox-next")];
let lightboxStep: ((step: number) => Slide) | undefined;

function showInLightbox(slide: Slide) {
    if (!lightboxImg || !lightboxCaption) return;
    lightboxImg.src = slide.src;
    lightboxImg.alt = slide.alt;
    lightboxCaption.textContent = slide.alt;
}

document.addEventListener("click", (event) => {
    const trigger = (event.target as Element).closest("[data-zoom]");
    const img = trigger?.querySelector("img");
    if (!trigger || !img || !lightbox) return;
    const root = trigger.closest("[data-slideshow]");
    lightboxStep = root ? slideshows.get(root) : undefined;
    lightboxArrows.forEach((a) => { if (a) a.hidden = !lightboxStep; });
    showInLightbox({ src: img.currentSrc || img.src, alt: img.alt });
    lightbox.showModal();
});

const stepLightbox = (step: number) => { if (lightboxStep) showInLightbox(lightboxStep(step)); };
lightboxArrows[0]?.addEventListener("click", () => stepLightbox(-1));
lightboxArrows[1]?.addEventListener("click", () => stepLightbox(1));
lightbox?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") stepLightbox(event.key === "ArrowLeft" ? -1 : 1);
});

// A click on the backdrop lands on the <dialog> itself.
lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox) lightbox.close();
});
document.getElementById("lightbox-close")?.addEventListener("click", () => lightbox?.close());

// =====================
// CONTACT FORM (EmailJS)
// =====================
const contactForm = document.getElementById("contact-form") as HTMLFormElement | null;
const formStatus = document.getElementById("form-status");
// shortcut: client-side cooldown only deters casual spam; the real limits live in the EmailJS dashboard.
const SEND_COOLDOWN_MS = 60_000;
let lastSentAt = 0;

if (typeof emailjs !== "undefined") emailjs.init("u7iQzLsxAErz6ZGTw");

function setStatus(key: string, kind: "ok" | "err" | "") {
    if (!formStatus) return;
    formStatus.textContent = formMessages[key][currentLang];
    formStatus.className = `form-status mono ${kind}`;
}

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const submitBtn = contactForm.querySelector("button[type=submit]") as HTMLButtonElement;
        const field = (id: string) => document.getElementById(id) as HTMLInputElement;
        const fields = [field("name"), field("email"), field("title"), field("message")];

        // Bots fill the hidden field; pretend it worked and drop the message.
        if (field("website").value) {
            contactForm.reset();
            setStatus("ok", "ok");
            return;
        }

        const invalid = fields.filter((input) => {
            const valid = input.value.trim() !== "" && input.checkValidity();
            input.setAttribute("aria-invalid", String(!valid));
            return !valid;
        });
        if (invalid.length > 0) {
            setStatus("invalid", "err");
            invalid[0].focus();
            return;
        }
        if (Date.now() - lastSentAt < SEND_COOLDOWN_MS) {
            setStatus("cooldown", "err");
            return;
        }
        if (typeof emailjs === "undefined") {
            setStatus("error", "err");
            return;
        }

        submitBtn.disabled = true;
        submitBtn.textContent = formMessages.sending[currentLang];
        setStatus("sending", "");

        const [nameInput, emailInput, titleInput, messageInput] = fields;
        const templateParams = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            title: titleInput.value.trim(),
            message: messageInput.value.trim(),
            time: new Date().toLocaleString()
        };

        emailjs.send("service_4lbn01n", "template_e3fqnem", templateParams)
            .then(() => {
                lastSentAt = Date.now();
                contactForm.reset();
                setStatus("ok", "ok");
            })
            .catch((error: unknown) => {
                console.error("Failed to send email:", error);
                setStatus("error", "err");
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = formMessages.default[currentLang];
            });
    });
}

// =============================
// SCROLL EFFECTS
// =============================
const progressBar = document.getElementById("myBar");
let scrollTicking = false;

window.addEventListener("scroll", () => {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(() => {
        const el = document.documentElement;
        const height = el.scrollHeight - el.clientHeight;
        if (progressBar) progressBar.style.width = `${height > 0 ? (el.scrollTop / height) * 100 : 0}%`;
        scrollTicking = false;
    });
}, { passive: true });

// Reveal on scroll, staggered among siblings.
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
    });
}, { threshold: 0.1 });

document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
    const siblings = el.parentElement ? Array.from(el.parentElement.children).filter((c) => c.classList.contains("reveal")) : [];
    el.style.setProperty("--delay", `${Math.min(siblings.indexOf(el), 4) * 90}ms`);
    revealObserver.observe(el);
});

// Highlight the nav link of the section in the middle of the viewport.
const navLinks = document.querySelectorAll<HTMLAnchorElement>(".site-nav a");
const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((a) => a.setAttribute("aria-current", String(a.hash === `#${entry.target.id}`)));
    });
}, { rootMargin: "-45% 0px -50% 0px" });
SECTIONS.forEach((id) => {
    const section = document.getElementById(id);
    if (section) navObserver.observe(section);
});

// Pointer glow: background spotlight + per-card highlight (mouse only).
const bgGrid = document.querySelector<HTMLElement>(".bg-grid");
let pointerTicking = false;

document.addEventListener("pointermove", (event) => {
    if (event.pointerType !== "mouse" || pointerTicking) return;
    pointerTicking = true;
    requestAnimationFrame(() => {
        bgGrid?.style.setProperty("--mx", `${event.clientX}px`);
        bgGrid?.style.setProperty("--my", `${event.clientY}px`);
        const card = (event.target as Element).closest?.(".card") as HTMLElement | null;
        if (card) {
            const rect = card.getBoundingClientRect();
            card.style.setProperty("--x", `${event.clientX - rect.left}px`);
            card.style.setProperty("--y", `${event.clientY - rect.top}px`);
        }
        pointerTicking = false;
    });
}, { passive: true });
