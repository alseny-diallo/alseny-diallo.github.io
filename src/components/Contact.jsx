import { useState } from 'react'
import { Check, Copy, Mail } from 'lucide-react'
import { useSettings } from '../settings'
import Reveal from './Reveal'
import { GithubIcon, LinkedinIcon } from './icons'

export default function Contact() {
  const { data, t } = useSettings()
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(data.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* presse-papiers indisponible */
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="relative overflow-hidden rounded-3xl border border-line bg-card px-8 py-16 text-center sm:px-16 sm:py-24">
          <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-accent/20 blur-[100px]" />
          <p className="relative font-mono text-sm text-accent">05 — {t.nav.contact}</p>
          <h2 className="relative mt-4 font-display text-4xl font-bold tracking-tight text-fg sm:text-6xl">
            {t.contactTitle}
          </h2>
          <p className="relative mx-auto mt-5 max-w-lg text-lg text-muted">{t.contactText}</p>

          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href={`mailto:${data.email}`}
              className="inline-flex max-w-full items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium break-all text-ink transition hover:shadow-[0_0_40px_-5px] hover:shadow-accent/60">
              <Mail size={18} className="shrink-0" /> {data.email}
            </a>
            <button onClick={copy} aria-label={t.copyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm text-fg transition hover:border-fg/40">
              {copied ? <Check size={16} className="text-accent" /> : <Copy size={16} />}
              {copied ? t.copied : t.copy}
            </button>
          </div>

          <div className="relative mt-8 flex justify-center gap-4">
            <a href={data.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"
              className="text-subtle transition hover:text-fg"><GithubIcon className="h-6 w-6" /></a>
            <a href={data.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
              className="text-subtle transition hover:text-fg"><LinkedinIcon className="h-6 w-6" /></a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
