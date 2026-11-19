// ✏️ Modifie ce fichier pour personnaliser ton portfolio.
// Chaque texte existe en français (fr) et en anglais (en).

// ——— Informations identiques dans les deux langues ———
const common = {
  name: 'Al Seny Diallo',
  email: 'alsenydiallo0409@gmail.com',
  cv: 'CV_Alseny_Diallo.pdf', // fichier placé dans /public
  available: true, // affiche le badge "Disponible"
  socials: {
    github: 'https://github.com/alseny-diallo',
    linkedin: 'https://www.linkedin.com/in/al-seny-diallo',
  },
}

// github / demo : laisse vide ('') si le projet n'a pas de lien public
const projectLinks = [
  { github: '', demo: '' }, // KOOB
  { github: '', demo: '' }, // Back-office Orange
  { github: '', demo: '' }, // Blazor Foundation
]

// ——— Contenu traduit ———
const fr = {
  ...common,
  role: 'Ingénieur logiciel Full-Stack',
  location: 'Dakar, Sénégal',
  tagline:
    'Je conçois et développe des applications web robustes — API NestJS, interfaces React — avec une vraie exigence de qualité et de maintenabilité.',
  about: [
    "Développeur Full-Stack avec plus de 4 ans d'expérience, je conçois, développe et intègre des API REST avec NestJS, Node.js et PostgreSQL, et des interfaces modernes avec React et Next.js.",
    "Chez Quadra Afrique de l'Ouest, j'ai piloté la migration du cœur backend de KOOB, une plateforme SaaS de réservation touristique, de Ruby on Rails vers NestJS, et intégré des API partenaires comme STAAH et Koedia.",
    "J'attache une grande importance à la qualité du code — Clean Architecture, DDD, CQRS, tests, Docker — et j'aime transmettre : j'anime les cérémonies Scrum et j'accompagne stagiaires et nouveaux développeurs.",
  ],
  stats: [
    { value: '4+', label: "années d'expérience" },
    { value: '3', label: 'entreprises, dont Sonatel (Orange)' },
    { value: 'Bac+5', label: 'Master en Génie Logiciel' },
  ],
  skills: [
    { group: 'Langages & Front-end', items: ['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Zustand'] },
    { group: 'Back-end & données', items: ['Node.js', 'NestJS', 'PostgreSQL', 'MikroORM', 'Redis', 'BullMQ', 'GraphQL'] },
    { group: 'Architecture & qualité', items: ['Clean Architecture', 'DDD', 'CQRS', 'Jest', 'Cypress', 'Docker'] },
    { group: 'Outils & méthodes', items: ['Git', 'Gitflow', 'Agile / Scrum', 'Kanban', 'XP'] },
  ],
  projects: [
    {
      title: 'KOOB',
      context: "Quadra Afrique de l'Ouest",
      description:
        'Plateforme SaaS de réintermédiation touristique qui connecte producteurs de voyage, tours-opérateurs et agences pour la réservation instantanée. Migration du backend Ruby on Rails vers NestJS, intégration des API STAAH et Koedia.',
      tags: ['NestJS', 'React', 'PostgreSQL', 'Docker', 'DDD', 'CQRS'],
    },
    {
      title: 'Back-office boutique Orange',
      context: 'Sonatel',
      description:
        "Outil interne de gestion des produits, du stock, des commandes et des paiements, avec tableau de bord analytique — en remplacement de l'ancienne plateforme.",
      tags: ['Next.js', 'Drupal', 'Gitflow', 'Scrum'],
    },
    {
      title: 'Documentation Blazor Foundation 6',
      context: 'OpenCodeDev — Canada (remote)',
      description:
        'Site de documentation de la bibliothèque de composants Blazor Foundation 6 (v3), compatible .NET Core 6, avec composants réutilisables : coloration syntaxique, modales, copie en un clic.',
      tags: ['Blazor', 'C#', '.NET Core 6'],
    },
  ],
  experience: [
    {
      period: 'Fév. 2023 — Aujourd’hui',
      title: 'Développeur Full-Stack',
      company: "Quadra Afrique de l'Ouest",
      text: 'Migration du module central de Ruby on Rails vers NestJS / Node.js 22, refonte du front React (Zustand), optimisation des performances (MikroORM, Redis, BullMQ), revues de code, animation Scrum et encadrement de stagiaires.',
    },
    {
      period: 'Mars 2022 — Août 2022',
      title: 'Développeur Front-End',
      company: 'Sonatel (Orange)',
      text: 'Nouvelles fonctionnalités du back-office de la boutique en ligne Orange avec Next.js et interfaces ergonomiques pour les équipes métiers, en environnement Agile.',
    },
    {
      period: 'Juin 2021 — Août 2021',
      title: 'Développeur Front-End',
      company: 'OpenCodeDev, Québec (remote)',
      text: 'Site de documentation Blazor Foundation 6, composants et plugins C# réutilisables, en full remote (Kanban, eXtreme Programming).',
    },
  ],
  education: [
    { period: '2024 — 2026', title: 'Master en Génie Logiciel', school: 'Collège Supérieur de Paris (Dakar Tech)' },
    { period: '2020 — 2021', title: "Licence en Génie Logiciel et Systèmes d'Information", school: 'École Supérieure Polytechnique de Dakar (ESP)' },
    { period: '2018 — 2020', title: 'DST en Informatique', school: 'École Supérieure Polytechnique de Dakar (ESP)' },
  ],
  languages: ['Français (courant)', 'Wolof (courant)', 'Anglais (professionnel)'],
}

const en = {
  ...common,
  role: 'Full-Stack Software Engineer',
  location: 'Dakar, Senegal',
  tagline:
    'I design and build robust web applications — NestJS APIs, React interfaces — with a strong focus on quality and maintainability.',
  about: [
    'Full-Stack developer with 4+ years of experience, I design, build and integrate REST APIs with NestJS, Node.js and PostgreSQL, and modern interfaces with React and Next.js.',
    "At Quadra West Africa, I led the migration of KOOB's core backend — a SaaS travel booking platform — from Ruby on Rails to NestJS, and integrated partner APIs such as STAAH and Koedia.",
    'I care deeply about code quality — Clean Architecture, DDD, CQRS, testing, Docker — and I enjoy sharing knowledge: I facilitate Scrum ceremonies and mentor interns and new developers.',
  ],
  stats: [
    { value: '4+', label: 'years of experience' },
    { value: '3', label: 'companies, including Sonatel (Orange)' },
    { value: 'MSc', label: 'in Software Engineering' },
  ],
  skills: [
    { group: 'Languages & Front-end', items: ['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Zustand'] },
    { group: 'Back-end & data', items: ['Node.js', 'NestJS', 'PostgreSQL', 'MikroORM', 'Redis', 'BullMQ', 'GraphQL'] },
    { group: 'Architecture & quality', items: ['Clean Architecture', 'DDD', 'CQRS', 'Jest', 'Cypress', 'Docker'] },
    { group: 'Tools & methods', items: ['Git', 'Gitflow', 'Agile / Scrum', 'Kanban', 'XP'] },
  ],
  projects: [
    {
      title: 'KOOB',
      context: 'Quadra West Africa',
      description:
        'SaaS travel re-intermediation platform connecting travel producers, tour operators and agencies for instant booking. Migrated the backend from Ruby on Rails to NestJS and integrated the STAAH and Koedia APIs.',
      tags: ['NestJS', 'React', 'PostgreSQL', 'Docker', 'DDD', 'CQRS'],
    },
    {
      title: 'Orange online store back-office',
      context: 'Sonatel',
      description:
        'Internal tool to manage products, stock, orders and payments, with an analytics dashboard — replacing the previous platform.',
      tags: ['Next.js', 'Drupal', 'Gitflow', 'Scrum'],
    },
    {
      title: 'Blazor Foundation 6 documentation',
      context: 'OpenCodeDev — Canada (remote)',
      description:
        'Documentation website for the Blazor Foundation 6 (v3) component library, compatible with .NET Core 6, with reusable components: syntax highlighting, modals, one-click copy.',
      tags: ['Blazor', 'C#', '.NET Core 6'],
    },
  ],
  experience: [
    {
      period: 'Feb 2023 — Present',
      title: 'Full-Stack Developer',
      company: 'Quadra West Africa',
      text: 'Migrated the core module from Ruby on Rails to NestJS / Node.js 22, rebuilt the React front-end (Zustand), improved performance (MikroORM, Redis, BullMQ), led code reviews and Scrum ceremonies, and mentored interns.',
    },
    {
      period: 'Mar 2022 — Aug 2022',
      title: 'Front-End Developer',
      company: 'Sonatel (Orange)',
      text: 'Built new features for the Orange online store back-office with Next.js and designed user-friendly interfaces for business teams, in an Agile environment.',
    },
    {
      period: 'Jun 2021 — Aug 2021',
      title: 'Front-End Developer',
      company: 'OpenCodeDev, Québec (remote)',
      text: 'Blazor Foundation 6 documentation website, reusable C# components and plugins, fully remote (Kanban, eXtreme Programming).',
    },
  ],
  education: [
    { period: '2024 — 2026', title: "Master's in Software Engineering", school: 'Collège Supérieur de Paris (Dakar Tech)' },
    { period: '2020 — 2021', title: "Bachelor's in Software Engineering & Information Systems", school: 'École Supérieure Polytechnique de Dakar (ESP)' },
    { period: '2018 — 2020', title: 'Higher Technology Diploma (DST) in Computer Science', school: 'École Supérieure Polytechnique de Dakar (ESP)' },
  ],
  languages: ['French (fluent)', 'Wolof (fluent)', 'English (professional)'],
}

// Ajoute les liens GitHub / démo à chaque projet
for (const lang of [fr, en]) {
  lang.projects = lang.projects.map((p, i) => ({ ...p, ...projectLinks[i] }))
}

export const content = { fr, en }

// ——— Textes de l'interface ———
export const ui = {
  fr: {
    nav: { about: 'À propos', skills: 'Compétences', projects: 'Projets', experience: 'Parcours', contact: 'Contact' },
    contactMe: 'Me contacter',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    available: 'Disponible pour de nouveaux projets',
    seeProjects: 'Voir mes projets',
    downloadCv: 'Télécharger mon CV',
    scrollDown: 'Défiler vers le bas',
    education: 'Formation',
    languages: 'Langues',
    code: 'Code de',
    demo: 'Démo de',
    contactTitle: 'Travaillons ensemble.',
    contactText: "Un projet, une opportunité ou simplement envie d'échanger ? Ma boîte mail est toujours ouverte.",
    copy: 'Copier',
    copied: 'Copié !',
    copyEmail: "Copier l'adresse email",
    madeWith: 'Fait avec React 19 & Tailwind CSS',
    toLight: 'Passer au thème clair',
    toDark: 'Passer au thème sombre',
    switchLang: 'Switch to English',
  },
  en: {
    nav: { about: 'About', skills: 'Skills', projects: 'Projects', experience: 'Experience', contact: 'Contact' },
    contactMe: 'Contact me',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    available: 'Available for new projects',
    seeProjects: 'See my projects',
    downloadCv: 'Download my resume',
    scrollDown: 'Scroll down',
    education: 'Education',
    languages: 'Languages',
    code: 'Source code of',
    demo: 'Live demo of',
    contactTitle: "Let's work together.",
    contactText: 'A project, an opportunity, or just want to chat? My inbox is always open.',
    copy: 'Copy',
    copied: 'Copied!',
    copyEmail: 'Copy email address',
    madeWith: 'Built with React 19 & Tailwind CSS',
    toLight: 'Switch to light theme',
    toDark: 'Switch to dark theme',
    switchLang: 'Passer en français',
  },
}
