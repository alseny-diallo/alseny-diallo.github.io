// ✏️ Resume data: everything that is the same in every language.
//
// Each item has an `id`. Its translated text (titles, descriptions…) lives in
// src/locales/<lang>.json under that same `id`.
// To add an item: add it here, then add its text to every locale file.

export const profile = {
  name: 'Al Seny Diallo',
  email: 'alsenydiallo0409@gmail.com',
  cv: 'CV_Alseny_Diallo.pdf', // file in /public ('' hides the download button)
  available: true, // shows the "Available" badge
  socials: {
    github: 'https://github.com/alseny-diallo',
    linkedin: 'https://www.linkedin.com/in/al-seny-diallo',
  },

  // Without `value`, the value is translated: about.stats.<id>.value
  stats: [
    { id: 'experience', value: '4+' },
    { id: 'companies', value: '3' },
    { id: 'degree' },
  ],

  // Group title: skills.groups.<id>
  skills: [
    {
      id: 'frontend',
      items: ['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Zustand'],
    },
    {
      id: 'backend',
      items: [
        'Node.js',
        'NestJS',
        'PostgreSQL',
        'MikroORM',
        'Redis',
        'BullMQ',
        'GraphQL',
      ],
    },
    {
      id: 'quality',
      items: ['Clean Architecture', 'DDD', 'CQRS', 'Jest', 'Cypress', 'Docker'],
    },
    { id: 'tools', items: ['Git', 'Gitflow', 'Agile / Scrum', 'Kanban', 'XP'] },
  ],

  // Text: projects.items.<id>
  // Optional: `link` (live site) and `github` (source code). Leave them out if
  // the project has no public URL, e.g. { id: 'x', tags: [], link: 'https://…' }
  projects: [
    {
      id: 'koob',
      tags: ['NestJS', 'React', 'PostgreSQL', 'Docker', 'DDD', 'CQRS'],
      link: 'https://discover.koob.tech',
    },
    { id: 'orange', tags: ['Next.js', 'Drupal', 'Gitflow', 'Scrum'] },
    {
      id: 'blazor',
      tags: ['Blazor', 'C#', '.NET Core 6'],
      link: 'https://bf.opencodedev.com/',
      github: 'https://github.com/OpenCodeDev/OpenCodeDev.Blazor.Foundation',
    },
  ],

  // Text: experience.items.<id>  —  dates as 'YYYY-MM', end: null => "Present"
  experience: [
    { id: 'quadra', start: '2023-02', end: null },
    { id: 'sonatel', start: '2022-03', end: '2022-08' },
    { id: 'opencodedev', start: '2021-06', end: '2021-08' },
  ],

  // Degree title: education.items.<id>
  education: [
    {
      id: 'master',
      school: 'Collège Supérieur de Paris (Dakar Tech)',
      start: 2024,
      end: 2026,
    },
    {
      id: 'bachelor',
      school: 'École Supérieure Polytechnique de Dakar (ESP)',
      start: 2020,
      end: 2021,
    },
    {
      id: 'dst',
      school: 'École Supérieure Polytechnique de Dakar (ESP)',
      start: 2018,
      end: 2020,
    },
  ],

  // Names: spokenLanguages.names.<id>  —  levels: spokenLanguages.levels.<level>
  languages: [
    { id: 'fr', level: 'fluent' },
    { id: 'wo', level: 'fluent' },
    { id: 'en', level: 'professional' },
  ],
};
