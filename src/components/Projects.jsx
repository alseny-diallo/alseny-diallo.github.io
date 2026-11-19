import { ArrowUpRight } from 'lucide-react'
import { useSettings } from '../settings'
import Section from './Section'
import Reveal from './Reveal'
import { GithubIcon } from './icons'

export default function Projects() {
  const { data, t } = useSettings()
  const projects = data.projects

  return (
    <Section id="projects" index="03" title={t.nav.projects}>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={i} delay={(i % 2) * 100}
            className={`group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/40 ${
              i === 0 && projects.length % 2 === 1 ? 'md:col-span-2' : ''
            }`}>
            <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-accent/0 blur-3xl transition duration-500 group-hover:bg-accent/20" />

            <div className="mb-4 flex items-start justify-between gap-4">
              <span className="font-mono text-sm text-subtle">{String(i + 1).padStart(2, '0')}</span>
              <div className="flex items-center gap-3">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${t.code} ${p.title}`}
                    className="text-subtle transition hover:text-fg">
                    <GithubIcon className="h-5 w-5" />
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" aria-label={`${t.demo} ${p.title}`}
                    className="text-subtle transition hover:text-accent">
                    <ArrowUpRight size={22} />
                  </a>
                )}
              </div>
            </div>

            <h3 className="font-display text-2xl font-semibold text-fg">{p.title}</h3>
            {p.context && <p className="mt-1 text-sm text-subtle">{p.context}</p>}
            <p className="mt-3 flex-1 leading-relaxed text-muted">{p.description}</p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <li key={tag} className="font-mono text-xs text-accent">#{tag}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
