import { ArrowDown, ArrowUpRight, Download, MapPin } from 'lucide-react'
import { useSettings } from '../settings'
import { GithubIcon, LinkedinIcon } from './icons'

export default function Hero() {
  const { data, t } = useSettings()
  const words = data.name.split(' ')
  const last = words.pop()
  const first = words.join(' ')

  const iconBtn =
    'rounded-full border border-line p-3 text-muted transition hover:border-fg/30 hover:text-fg'

  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden pt-16">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[400px] w-[400px] rounded-full bg-accent-2/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
        <div className="mb-8 flex flex-wrap items-center gap-3 text-sm">
          {data.available && (
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {t.available}
            </span>
          )}
          <span className="inline-flex items-center gap-1.5 text-subtle">
            <MapPin size={14} /> {data.location}
          </span>
        </div>

        <h1 className="font-display text-5xl leading-[0.95] font-bold tracking-tight text-fg sm:text-7xl lg:text-8xl">
          {first}
          <br />
          <span className="bg-gradient-to-r from-accent via-accent-3 to-accent-2 bg-clip-text text-transparent">
            {last}
          </span>
        </h1>

        <p className="mt-6 font-display text-xl text-fg sm:text-2xl">{data.role}</p>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">{data.tagline}</p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-ink transition hover:shadow-[0_0_40px_-5px] hover:shadow-accent/60"
          >
            {t.seeProjects}
            <ArrowUpRight size={18} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          {data.cv && (
            <a
              href={data.cv}
              download
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-medium text-fg transition hover:border-fg/40"
            >
              <Download size={18} /> {t.downloadCv}
            </a>
          )}
          <div className="flex items-center gap-2">
            <a href={data.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={iconBtn}>
              <GithubIcon className="h-5 w-5" />
            </a>
            <a href={data.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={iconBtn}>
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <a href="#about" aria-label={t.scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-subtle hover:text-fg">
        <ArrowDown size={20} />
      </a>
    </section>
  )
}
