import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { profile } from '../data/profile'
import { languages, setLanguage } from '../i18n'
import { sections } from '../sections'
import { useTheme } from '../hooks/useTheme'

function Toggles({ className = '' }) {
  const { t, i18n } = useTranslation()
  const { theme, toggleTheme } = useTheme()
  const current = i18n.resolvedLanguage
  const next = languages[(languages.indexOf(current) + 1) % languages.length]

  return (
    <div className={`flex items-center gap-1 rounded-full border border-line p-1 ${className}`}>
      <button
        onClick={() => setLanguage(next)}
        aria-label={t('settings.switchLang')}
        title={t('settings.switchLang')}
        className="flex h-8 items-center gap-1 rounded-full px-2.5 font-mono text-xs font-medium uppercase transition hover:bg-chip"
      >
        {languages.map((lng, i) => (
          <span key={lng} className="contents">
            {i > 0 && <span className="text-subtle">/</span>}
            <span className={lng === current ? 'text-fg' : 'text-subtle'}>{lng}</span>
          </span>
        ))}
      </button>
      <button
        onClick={toggleTheme}
        aria-label={theme === 'dark' ? t('settings.toLight') : t('settings.toDark')}
        title={theme === 'dark' ? t('settings.toLight') : t('settings.toDark')}
        className="flex h-8 w-8 items-center justify-center rounded-full text-muted transition hover:bg-chip hover:text-fg"
      >
        {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      </button>
    </div>
  )
}

const initials = profile.name
  .split(' ')
  .filter((_, i, a) => i === 0 || i === a.length - 1)
  .map((w) => w[0])
  .join('')
  .toUpperCase()

export default function Navbar() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = sections.map(({ id }) => ({ href: `#${id}`, label: t(`nav.${id}`) }))

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-line bg-bg/75 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-display text-lg font-bold tracking-tight text-fg">
          {initials}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-muted transition-colors hover:text-fg">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Toggles />
          <a
            href="#contact"
            className="hidden rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition hover:bg-accent hover:text-ink lg:inline-block"
          >
            {t('nav.contactMe')}
          </a>
          <button
            className="text-fg lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line lg:hidden">
          <ul className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-lg text-text hover:text-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
