import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { profile } from './data/profile'
import fr from './locales/fr.json'
import en from './locales/en.json'

// To add a language: create src/locales/<code>.json and register it here.
export const resources = {
  fr: { translation: fr },
  en: { translation: en },
}
export const languages = Object.keys(resources)

// Keep <html lang>, the page title and the meta description in sync
i18n.on('languageChanged', () => {
  document.documentElement.lang = i18n.resolvedLanguage
  document.title = `${profile.name} — ${i18n.t('hero.role')}`
  document.querySelector('meta[name="description"]')?.setAttribute('content', i18n.t('meta.description'))
})

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: languages,
    fallbackLng: 'en',
    initAsync: false, // Resources are bundled, so there is nothing to wait for
    interpolation: { escapeValue: false }, // React already escapes output
    detection: {
      order: ['localStorage', 'navigator'], // Saved choice first, then the browser language
      lookupLocalStorage: 'lang',
      caches: [], // Only an explicit choice is saved, see setLanguage()
    },
    // In development, log missing translations to the console
    saveMissing: import.meta.env.DEV,
    missingKeyHandler: (lngs, _ns, key) => console.warn(`[i18n] Missing translation (${lngs.join(', ')}): ${key}`),
  })

// Switches language and remembers the visitor's choice
export function setLanguage(lng) {
  i18n.changeLanguage(lng)
  i18n.services.languageDetector.cacheUserLanguage(lng, ['localStorage'])
}

export default i18n
