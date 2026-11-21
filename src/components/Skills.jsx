import { useTranslation } from 'react-i18next'
import { profile } from '../data/profile'
import Section from './Section'
import Reveal from './Reveal'

export default function Skills({ id, index }) {
  const { t } = useTranslation()
  return (
    <Section id={id} index={index}>
      <div className="grid gap-6 md:grid-cols-2">
        {profile.skills.map((g, i) => (
          <Reveal key={g.id} delay={i * 100}
            className="rounded-2xl border border-line bg-card p-6 transition hover:border-accent/40">
            <h3 className="mb-5 font-display text-lg font-semibold text-fg">{t(`skills.groups.${g.id}`)}</h3>
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
