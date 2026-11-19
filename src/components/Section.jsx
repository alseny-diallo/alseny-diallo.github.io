import Reveal from './Reveal'

export default function Section({ id, index, title, children }) {
  return (
    <section id={id} className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-14 flex items-baseline gap-4">
          <span className="font-mono text-sm text-accent">{index}</span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">{title}</h2>
          <span className="h-px flex-1 bg-gradient-to-r from-line to-transparent" />
        </Reveal>
        {children}
      </div>
    </section>
  )
}
