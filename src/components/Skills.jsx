import { useSettings } from '../settings'
import Section from './Section'
import Reveal from './Reveal'

export default function Skills() {
  const { data, t } = useSettings()
  return (
    <Section id="skills" index="02" title={t.nav.skills}>
      <div className="grid gap-6 md:grid-cols-2">
        {data.skills.map((g, i) => (
          <Reveal key={i} delay={i * 100}
            className="rounded-2xl border border-line bg-card p-6 transition hover:border-accent/40">
            <h3 className="mb-5 font-display text-lg font-semibold text-fg">{g.group}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li key={s} className="rounded-full border border-line bg-chip px-3 py-1.5 text-sm text-text">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
