import { useTranslation } from 'react-i18next'
import { GraduationCap, Languages } from 'lucide-react'
import { profile } from '../data/profile'
import { formatMonth, formatPeriod } from '../lib/format'
import Section from './Section'
import Reveal from './Reveal'

export default function Experience({ id, index }) {
  const { t, i18n } = useTranslation()
  const present = t('common.present')
  const month = (value) => formatMonth(value, i18n.resolvedLanguage)

  return (
    <Section id={id} index={index}>
      <div className="grid gap-16 lg:grid-cols-5">
        <ol className="relative ml-2 border-l border-line lg:col-span-3">
          {profile.experience.map((e, i) => (
            <Reveal as="li" key={e.id} delay={i * 100} className="relative pb-12 pl-8 last:pb-0">
              <span className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-bg" />
              <p className="font-mono text-sm text-subtle">{formatPeriod(e.start, e.end, present, month)}</p>
              <h3 className="mt-1 font-display text-xl font-semibold text-fg">
                {t(`experience.items.${e.id}.title`)}{' '}
                <span className="text-subtle">· {t(`experience.items.${e.id}.company`)}</span>
              </h3>
              <p className="mt-2 max-w-2xl leading-relaxed text-muted">{t(`experience.items.${e.id}.description`)}</p>
            </Reveal>
          ))}
        </ol>

        <div className="space-y-6 lg:col-span-2">
          <Reveal className="rounded-2xl border border-line bg-card p-6">
            <h3 className="mb-5 flex items-center gap-2 font-display text-lg font-semibold text-fg">
              <GraduationCap size={20} className="text-accent" /> {t('education.title')}
            </h3>
            <ul className="space-y-5">
              {profile.education.map((ed) => (
                <li key={ed.id}>
                  <p className="font-mono text-xs text-subtle">{formatPeriod(ed.start, ed.end, present)}</p>
                  <p className="mt-1 font-medium text-fg">{t(`education.items.${ed.id}`)}</p>
                  <p className="text-sm text-subtle">{ed.school}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100} className="rounded-2xl border border-line bg-card p-6">
            <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-semibold text-fg">
              <Languages size={20} className="text-accent" /> {t('spokenLanguages.title')}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {profile.languages.map((l) => (
                <li key={l.id} className="rounded-full border border-line bg-chip px-3 py-1.5 text-sm text-text">
                  {t('spokenLanguages.entry', {
                    name: t(`spokenLanguages.names.${l.id}`),
                    level: t(`spokenLanguages.levels.${l.level}`),
                  })}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
