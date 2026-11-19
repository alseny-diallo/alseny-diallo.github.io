import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useSettings } from '../settings'

function Toggles({ className = '' }) {
  const { theme, toggleTheme, lang, toggleLang, t } = useSettings()
  return (
    <div className={`flex items-center gap-1 rounded-full border border-line p-1 ${className}`}>
      <button
        onClick={toggleLang}
        aria-label={t.switchLang}
        title={t.switchLang}
        className="flex h-8 items-center gap-1 rounded-full px-2.5 font-mono text-xs font-medium transition hover:bg-chip"
      >
        <span className={lang === 'fr' ? 'text-fg' : 'text-subtle'}>FR</span>
        <span className="text-subtle">/</span>
        <span className={lang === 'en' ? 'text-fg' : 'text-subtle'}>EN</span>
      </button>
      <button
        onClick={toggleTheme}
        aria-label={theme === 'dark' ? t.toLight : t.toDark}
        title={theme === 'dark' ? t.toLight : t.toDark}
        className="flex h-8 w-8 items-center justify-center rounded-full text-muted transition hover:bg-chip hover:text-fg"
      >
        {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      </button>
    </div>
  )
}

export default function Navbar() {
  const { data, t } = useSettings()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = Object.entries(t.nav).map(([id, label]) => ({ href: `#${id}`, label }))

  const initials = data.name
    .split(' ')
    .filter((_, i, a) => i === 0 || i === a.length - 1)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

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
            {t.contactMe}
          </a>
          <button
            className="text-fg lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? t.closeMenu : t.openMenu}
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
