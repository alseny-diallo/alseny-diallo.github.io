import { GraduationCap, Languages } from 'lucide-react'
import { useSettings } from '../settings'
import Section from './Section'
import Reveal from './Reveal'

export default function Experience() {
  const { data, t } = useSettings()
  return (
    <Section id="experience" index="04" title={t.nav.experience}>
      <div className="grid gap-16 lg:grid-cols-5">
        <ol className="relative ml-2 border-l border-line lg:col-span-3">
          {data.experience.map((e, i) => (
            <Reveal as="li" key={i} delay={i * 100} className="relative pb-12 pl-8 last:pb-0">
              <span className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-bg" />
              <p className="font-mono text-sm text-subtle">{e.period}</p>
              <h3 className="mt-1 font-display text-xl font-semibold text-fg">
                {e.title} <span className="text-subtle">· {e.company}</span>
              </h3>
              <p className="mt-2 max-w-2xl leading-relaxed text-muted">{e.text}</p>
            </Reveal>
          ))}
        </ol>

        <div className="space-y-6 lg:col-span-2">
          <Reveal className="rounded-2xl border border-line bg-card p-6">
            <h3 className="mb-5 flex items-center gap-2 font-display text-lg font-semibold text-fg">
              <GraduationCap size={20} className="text-accent" /> {t.education}
            </h3>
            <ul className="space-y-5">
              {data.education.map((ed, i) => (
                <li key={i}>
                  <p className="font-mono text-xs text-subtle">{ed.period}</p>
                  <p className="mt-1 font-medium text-fg">{ed.title}</p>
                  <p className="text-sm text-subtle">{ed.school}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100} className="rounded-2xl border border-line bg-card p-6">
            <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-semibold text-fg">
              <Languages size={20} className="text-accent" /> {t.languages}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {data.languages.map((l) => (
                <li key={l} className="rounded-full border border-line bg-chip px-3 py-1.5 text-sm text-text">{l}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
