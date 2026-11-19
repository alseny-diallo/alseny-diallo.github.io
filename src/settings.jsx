import { createContext, use, useEffect, useState } from 'react'
import { content, ui } from './data'

const SettingsContext = createContext(null)

function read(key) {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}
function save(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* stockage indisponible */
  }
}

function initialTheme() {
  const saved = read('theme')
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function initialLang() {
  const saved = read('lang')
  if (saved === 'fr' || saved === 'en') return saved
  return navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en'
}

export function SettingsProvider({ children }) {
  const [theme, setTheme] = useState(initialTheme)
  const [lang, setLang] = useState(initialLang)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    save('theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = `${content[lang].name} — ${content[lang].role}`
    save('lang', lang)
  }, [lang])

  const value = {
    theme,
    toggleTheme: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    lang,
    toggleLang: () => setLang((l) => (l === 'fr' ? 'en' : 'fr')),
    data: content[lang], // contenu du portfolio dans la langue choisie
    t: ui[lang], // textes de l'interface
  }

  return <SettingsContext value={value}>{children}</SettingsContext>
}

export function useSettings() {
  return use(SettingsContext)
}
