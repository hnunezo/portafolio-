export const translations = {
  en: {
    nav: {
      home: "HOME",
      about: "ABOUT",
      experience: "EXPERIENCE",
      skills: "SKILLS",
      projects: "PROJECTS",
      contact: "CONTACT",
    },
    hero: {
      role: "Full Stack Developer",
      pitch:
        "I build maintainable enterprise applications, document workflows and system integrations. Over 3 years of experience working in legal tech.",
      meta: "Chile · Open to remote opportunities",
    },
    about: {
      title: "ABOUT",
      p1Before:
        "I’m a Computer Engineer and Full Stack Developer based in Concepción, Chile, focused on ",
      p1Highlight: "legal tech",
      p1After:
        ". My professional experience has been building enterprise systems for the public sector: case management, document workflows, electronic signatures, auditing and integrations with institutional services.",
    },
    experience: {
      title: "EXPERIENCE",
      roles: [
        {
          company: "Lexflow — MINVU",
          title: "Full Stack Developer",
          period: "2023–2026",
          summary:
            "Developed enterprise modules for case management, work queues, requests, electronic signatures and reporting. Designed an auditing system from scratch, implemented asynchronous workflows with RabbitMQ and integrated external document and identity services in a multitenant architecture.",
        },
        {
          company: "UNIJUD — Poder Judicial",
          title: "Full Stack Developer",
          period: "Professional engagement",
          summary:
            "Contributed to judicial information systems with a focus on integrations with the Corte Suprema, auditing capabilities and asynchronous messaging. Supported reliable data exchange and operational workflows in a regulated institutional environment—presented here as a professional case study without confidential details.",
        },
      ],
    },
    skills: {
      title: "SKILLS",
      groups: {
        backend: "Backend",
        frontend: "Frontend",
        data: "Data",
        tools: "Tools & delivery",
        testing: "Testing",
      },
    },
    projects: {
      title: "PROJECTS",
      kicker: "Personal side projects",
      view: "View project",
      items: [
        {
          title: "WeebList",
          description:
            "Browser for anime, manga, characters and voice actors — with favorites and a draggable ranking list.",
          tags: ["Search", "Favorites", "Drag & drop"],
        },
        {
          title: "NASA App",
          description:
            "Explore space imagery: daily photo with context, random discovery and custom image search.",
          tags: ["NASA API", "Search", "Daily image"],
        },
        {
          title: "Pokémon App",
          description:
            "Catch wild Pokémon, build a team, fill the Pokédex and store creatures on the PC.",
          tags: ["Teams", "Pokédex", "Storage"],
        },
        {
          title: "Mathgram",
          description:
            "Math quiz app to practice logic and track progress with pass percentages per exam.",
          tags: ["Quizzes", "Scoring"],
        },
      ],
    },
    contact: {
      title: "CONTACT",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
    },
    footer: {
      copy: "Héctor Núñez © 2021–2026",
    },
  },
  es: {
    nav: {
      home: "INICIO",
      about: "SOBRE MÍ",
      experience: "EXPERIENCIA",
      skills: "HABILIDADES",
      projects: "PROYECTOS",
      contact: "CONTACTO",
    },
    hero: {
      role: "Desarrollador Full Stack",
      pitch:
        "Construyo aplicaciones empresariales mantenibles, flujos documentales e integraciones de sistemas. Más de 3 años de experiencia en legal tech / informática jurídica.",
      meta: "Chile · Abierto a oportunidades remotas",
    },
    about: {
      title: "SOBRE MÍ",
      p1Before:
        "Soy Ingeniero Civil Informático y Desarrollador Full Stack de Concepción, Chile, enfocado en ",
      p1Highlight: "legal tech / informática jurídica",
      p1After:
        ". Mi experiencia profesional ha sido construir sistemas empresariales para el sector público: gestión de casos, flujos documentales, firmas electrónicas, auditoría e integraciones con servicios institucionales.",
    },
    experience: {
      title: "EXPERIENCIA",
      roles: [
        {
          company: "Lexflow — MINVU",
          title: "Desarrollador Full Stack",
          period: "2023–2026",
          summary:
            "Desarrollé módulos empresariales de gestión de casos, colas de trabajo, solicitudes, firmas electrónicas y reportes. Diseñé un sistema de auditoría desde cero, implementé flujos asíncronos con RabbitMQ e integré servicios externos de documentos e identidad en una arquitectura multitenant.",
        },
        {
          company: "UNIJUD — Poder Judicial",
          title: "Desarrollador Full Stack",
          period: "Engagement profesional",
          summary:
            "Contribuí a sistemas de información judicial con foco en integraciones con la Corte Suprema, capacidades de auditoría y mensajería asíncrona. Apoyé el intercambio confiable de datos y flujos operativos en un entorno institucional regulado — presentado aquí como caso de estudio profesional, sin detalles confidenciales.",
        },
      ],
    },
    skills: {
      title: "HABILIDADES",
      groups: {
        backend: "Backend",
        frontend: "Frontend",
        data: "Datos",
        tools: "Herramientas & entrega",
        testing: "Testing",
      },
    },
    projects: {
      title: "PROYECTOS",
      kicker: "Proyectos personales",
      view: "Ver proyecto",
      items: [
        {
          title: "WeebList",
          description:
            "Explorador de anime, manga, personajes y seiyuus — con favoritos y ranking arrastrable.",
          tags: ["Búsqueda", "Favoritos", "Drag & drop"],
        },
        {
          title: "NASA App",
          description:
            "Explora imágenes del espacio: foto del día con contexto, descubrimiento aleatorio y búsqueda personalizada.",
          tags: ["NASA API", "Búsqueda", "Imagen diaria"],
        },
        {
          title: "Pokémon App",
          description:
            "Captura Pokémon salvajes, arma un equipo, completa la Pokédex y guárdalos en el PC.",
          tags: ["Equipos", "Pokédex", "Almacenamiento"],
        },
        {
          title: "Mathgram",
          description:
            "App de quizzes matemáticos para practicar lógica y medir avance con porcentajes por examen.",
          tags: ["Quizzes", "Puntaje"],
        },
      ],
    },
    contact: {
      title: "CONTACTO",
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      send: "Enviar",
    },
    footer: {
      copy: "Héctor Núñez © 2021–2026",
    },
  },
};

export const experienceTech = [
  [
    "Java",
    "Spring Boot",
    "Angular",
    "PostgreSQL",
    "RabbitMQ",
    "Hibernate",
    "Flyway",
    "Docker",
    "Azure DevOps",
  ],
  [
    "Java",
    "Spring Boot",
    "Angular",
    "PostgreSQL",
    "RabbitMQ",
    "REST APIs",
    "Hibernate",
  ],
];

export const projectMeta = [
  { img: "weeblist", href: "https://weeb-list.vercel.app/" },
  { img: "nasaapp", href: "https://nasa-app-iota.vercel.app/" },
  { img: "poke-app", href: "https://poke-app-eight-pi.vercel.app/" },
  { img: "mathgram", href: "https://mathgram.vercel.app/" },
];

export const skillGroups = [
  {
    key: "backend",
    items: [
      { label: "Java", logo: "java" },
      { label: "Spring Boot", logo: "spring" },
      { label: "JPA/Hibernate", logo: "hibernate" },
      { label: "REST APIs", logo: "rest" },
      { label: "RabbitMQ", logo: "rabbitmq" },
    ],
  },
  {
    key: "frontend",
    items: [
      { label: "Angular", logo: "angular" },
      { label: "TypeScript", logo: "typescript" },
      { label: "RxJS", logo: "rxjs" },
      { label: "HTML", logo: "html" },
      { label: "Sass", logo: "sass" },
    ],
  },
  {
    key: "data",
    items: [
      { label: "PostgreSQL", logo: "postgres" },
      { label: "SQL Server", logo: "sqlserver" },
    ],
  },
  {
    key: "tools",
    items: [
      { label: "Git", logo: "git" },
      { label: "Maven", logo: "maven" },
      { label: "Docker", logo: "docker" },
      { label: "Flyway", logo: "flyway" },
      { label: "Azure DevOps", logo: "azure" },
    ],
  },
  {
    key: "testing",
    items: [
      { label: "Karma", logo: "karma" },
      { label: "Jasmine", logo: "jasmine" },
      { label: "Cypress", logo: "cypress" },
    ],
  },
];
