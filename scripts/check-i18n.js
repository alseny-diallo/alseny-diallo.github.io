// Checks that:
//  - every locale file has the same keys, with the same type (text or list), none empty;
//  - every item in src/data/profile.js has a unique `id` and its text in every locale;
//  - optional project links are valid URLs.
// Runs automatically before each build: `npm run check:i18n`.

import { readdirSync, readFileSync } from 'node:fs'
import { profile } from '../src/data/profile.js'

const localesDir = new URL('../src/locales/', import.meta.url)
const locales = Object.fromEntries(
  readdirSync(localesDir)
    .filter((file) => file.endsWith('.json'))
    .map((file) => [file.replace('.json', ''), JSON.parse(readFileSync(new URL(file, localesDir), 'utf8'))]),
)

// { a: { b: 'x', c: ['y'] } } => Map { 'a.b' => 'x', 'a.c' => ['y'] }
function flatten(obj, prefix = '', out = new Map()) {
  for (const [key, value] of Object.entries(obj)) {
    if (value && typeof value === 'object' && !Array.isArray(value)) flatten(value, `${prefix}${key}.`, out)
    else out.set(`${prefix}${key}`, value)
  }
  return out
}

const typeOf = (value) => (Array.isArray(value) ? 'list' : typeof value)
const isEmpty = (value) => (Array.isArray(value) ? value.length === 0 || value.some(isEmpty) : value === '')

const errors = []

// Unique ids in each profile list
for (const [list, items] of Object.entries(profile)) {
  if (!Array.isArray(items)) continue
  const ids = items.map((item) => item.id)
  for (const id of new Set(ids.filter((id, i) => ids.indexOf(id) !== i))) {
    errors.push(`profile.js: duplicate id "${id}" in ${list}`)
  }
}

// Optional project links must be full http(s) URLs when present
for (const project of profile.projects) {
  for (const field of ['link', 'github']) {
    if (project[field] !== undefined && !/^https?:\/\/\S+$/.test(project[field])) {
      errors.push(`profile.js: project "${project.id}" has an invalid ${field} "${project[field]}"`)
    }
  }
}

// Keys required by the profile items
const required = [
  ...profile.stats.flatMap((s) => [`about.stats.${s.id}.label`, ...(s.value ? [] : [`about.stats.${s.id}.value`])]),
  ...profile.skills.map((g) => `skills.groups.${g.id}`),
  ...profile.projects.flatMap((p) => [`projects.items.${p.id}.title`, `projects.items.${p.id}.description`]),
  ...profile.experience.flatMap((e) => ['title', 'company', 'description'].map((f) => `experience.items.${e.id}.${f}`)),
  ...profile.education.map((e) => `education.items.${e.id}`),
  ...profile.languages.flatMap((l) => [`spokenLanguages.names.${l.id}`, `spokenLanguages.levels.${l.level}`]),
]

// The first locale that has a key defines its expected type
const flat = Object.fromEntries(Object.entries(locales).map(([lng, data]) => [lng, flatten(data)]))
const expectedType = new Map()
for (const entries of Object.values(flat)) {
  for (const [key, value] of entries) if (!expectedType.has(key)) expectedType.set(key, typeOf(value))
}

for (const [lng, entries] of Object.entries(flat)) {
  for (const key of new Set([...expectedType.keys(), ...required])) {
    if (!entries.has(key)) {
      errors.push(`${lng}.json: missing "${key}"`)
      continue
    }
    const value = entries.get(key)
    if (expectedType.get(key) !== typeOf(value)) {
      errors.push(`${lng}.json: "${key}" should be a ${expectedType.get(key)}, found a ${typeOf(value)}`)
    } else if (isEmpty(value)) {
      errors.push(`${lng}.json: "${key}" is empty`)
    }
  }
}

if (errors.length) {
  console.error(`✖ Translation check failed:\n  ${errors.join('\n  ')}`)
  process.exit(1)
}
console.log(`✔ Translations complete (${Object.keys(locales).join(', ')})`)
