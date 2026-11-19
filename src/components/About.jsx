import { useSettings } from '../settings'
import Section from './Section'
import Reveal from './Reveal'

export default function About() {
  const { data, t } = useSettings()
  return (
    <Section id="about" index="01" title={t.nav.about}>
      <div className="grid gap-12 lg:grid-cols-5">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted lg:col-span-3">
          {data.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>
        <div className="grid grid-cols-3 gap-4 lg:col-span-2 lg:grid-cols-1">
          {data.stats.map((s, i) => (
            <Reveal key={i} delay={i * 100}
              className="rounded-2xl border border-line bg-card p-5 lg:flex lg:items-baseline lg:gap-4">
              <div className="font-display text-3xl font-bold text-fg sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-subtle">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
