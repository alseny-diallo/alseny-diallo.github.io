import { useTranslation } from 'react-i18next'
import { profile } from '../data/profile'
import Section from './Section'
import Reveal from './Reveal'

export default function About({ id, index }) {
  const { t } = useTranslation()
  const paragraphs = t('about.paragraphs', { returnObjects: true })

  return (
    <Section id={id} index={index}>
      <div className="grid gap-12 lg:grid-cols-5">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted lg:col-span-3">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>
        <div className="grid grid-cols-3 gap-4 lg:col-span-2 lg:grid-cols-1">
          {profile.stats.map((s, i) => (
            <Reveal key={s.id} delay={i * 100}
              className="rounded-2xl border border-line bg-card p-5 lg:flex lg:items-baseline lg:gap-4">
              <div className="font-display text-3xl font-bold text-fg sm:text-4xl">
                {s.value ?? t(`about.stats.${s.id}.value`)}
              </div>
              <div className="mt-1 text-sm text-subtle">{t(`about.stats.${s.id}.label`)}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
