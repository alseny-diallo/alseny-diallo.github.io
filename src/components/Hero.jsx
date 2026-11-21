import { useTranslation } from 'react-i18next'
import { ArrowDown, ArrowUpRight, Download, MapPin } from 'lucide-react'
import { profile } from '../data/profile'
import { sections } from '../sections'
import SocialLinks from './SocialLinks'

const words = profile.name.split(' ')
const lastName = words.pop()
const firstName = words.join(' ')

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden pt-16">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[400px] w-[400px] rounded-full bg-accent-2/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
        <div className="mb-8 flex flex-wrap items-center gap-3 text-sm">
          {profile.available && (
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {t('hero.available')}
            </span>
          )}
          <span className="inline-flex items-center gap-1.5 text-subtle">
            <MapPin size={14} /> {t('hero.location')}
          </span>
        </div>

        <h1 className="font-display text-5xl leading-[0.95] font-bold tracking-tight text-fg sm:text-7xl lg:text-8xl">
          {firstName}
          <br />
          <span className="bg-gradient-to-r from-accent via-accent-3 to-accent-2 bg-clip-text text-transparent">
            {lastName}
          </span>
        </h1>

        <p className="mt-6 font-display text-xl text-fg sm:text-2xl">{t('hero.role')}</p>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">{t('hero.tagline')}</p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-ink transition hover:shadow-[0_0_40px_-5px] hover:shadow-accent/60"
          >
            {t('hero.seeProjects')}
            <ArrowUpRight size={18} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          {profile.cv && (
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-medium text-fg transition hover:border-fg/40"
            >
              <Download size={18} /> {t('hero.downloadCv')}
            </a>
          )}
          <div className="flex items-center gap-2">
            <SocialLinks linkClassName="rounded-full border border-line p-3 text-muted transition hover:border-fg/30 hover:text-fg" />
          </div>
        </div>
      </div>

      <a href={`#${sections[0].id}`} aria-label={t('hero.scrollDown')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-subtle hover:text-fg">
        <ArrowDown size={20} />
      </a>
    </section>
  )
}
