# Al Seny Diallo — Portfolio

Personal portfolio of Al Seny Diallo, Full-Stack software engineer based in Dakar.
The site is bilingual (French / English) and comes in a light and a dark theme. By default it follows the visitor's browser and OS settings. Once the visitor picks a language or theme with the toggles, that choice is remembered.

Live at **<https://alseny-diallo.github.io>**. Every push to `main` deploys it to GitHub Pages.

## How the content is organised

The resume data lives in **one place**. Only the wording changes from one language to another.

| What | Where |
| --- | --- |
| Resume data: name, email, links, skills, project tags and links, dates, schools… | `src/data/profile.js` |
| Translated text: role, descriptions, job titles, interface labels… | `src/locales/fr.json`, `src/locales/en.json` |
| Section order (drives the menu and the 01, 02… numbering) | `src/sections.js` |
| Theme colours (`:root` = light, `.dark` = dark) | `src/index.css` |
| Downloadable resume (PDF) | `public/` |

Each item in `profile.js` has an `id`. Its translated text sits under that same `id` in every locale file:

```js
// src/data/profile.js
experience: [{ id: 'quadra', start: '2023-02', end: null }]
```

```json
// src/locales/en.json
"experience": { "items": { "quadra": { "title": "…", "company": "…", "description": "…" } } }
```

Dates are formatted for the current language automatically. `end: null` displays as "Present" or "Aujourd’hui".

## Common changes

- **Add a project, job, degree or skill group:** add an entry with a new `id` in `profile.js`, then add its text to each locale file. The comment above each list in `profile.js` gives the key to use.
- **Link a project:** add `link: 'https://…'` (live site) and/or `github: 'https://…'` (source code) to the project in `profile.js`. Both are optional: without them, the card simply shows no link.
- **Change a tag, link, date or skill:** edit `profile.js` only. It updates both languages.
- **Change wording:** edit the locale files only.
- **Add a language:** create `src/locales/<code>.json` from an existing file, then register it in `src/i18n.js`. The language switcher picks it up.
- **Add or reorder a section:** edit the list in `src/sections.js`, and add its label under `nav.<id>` in each locale file.

## Safety net

`npm run check:i18n` checks that:

- every locale file has the same keys, with the same shape (text or list), and none is empty;
- every item in `profile.js` has a unique `id` and its text in every language;
- project links, when present, are valid URLs.

The check also runs before each build, so a translation mistake fails the deployment instead of shipping a broken page. In development, a missing key also logs a warning in the browser console.
