import type { Metadata } from 'next'
import { PageSection, SectionLabel, SectionHeading } from '@/components/page-section'

export const metadata: Metadata = {
  title: 'FSRS Flashcard App — Anki-Compatible Spaced Repetition | Reviso',
  description: 'Reviso uses the same FSRS algorithm Anki does. Anki-compatible spaced repetition with AI-generated flashcards. Free, no card-creation cost.',
  openGraph: {
    title: 'FSRS Flashcard App — Anki-Compatible Spaced Repetition',
    description: 'The same FSRS algorithm Anki uses, with AI-generated flashcards. Free.',
  },
}

export default function SpacedRepetitionFsrsPage() {
  return (
    <>
      <PageSection>
        <SectionLabel>Spaced Repetition with FSRS</SectionLabel>
        <SectionHeading>
          The same algorithm <span className="text-cyan-400">Anki</span> trusts. With AI generation built in.
        </SectionHeading>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          If you already use Anki, you already trust FSRS — it is the algorithm Anki adopted in 2023
          to replace the older SM-2 algorithm. Reviso uses the exact same FSRS scheduler, so choosing
          Reviso is not abandoning a trusted algorithm. You are adding AI generation and AI answer
          scoring to the same spacing logic you already rely on.
        </p>
      </PageSection>

      <PageSection>
        <SectionLabel>FSRS vs SM-2</SectionLabel>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border/50 p-6">
            <h3 className="text-lg font-semibold tracking-[-0.02em]">FSRS (Reviso & Anki 23+)</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">• Adapts to individual memory patterns using 4+ parameters per user</li>
              <li className="flex gap-2">• More accurate intervals — cards appear exactly when you are about to forget</li>
              <li className="flex gap-2">• Uses actual review history to tune the model over time</li>
              <li className="flex gap-2">• Fewer reviews needed for same retention rate (15–30% more efficient)</li>
              <li className="flex gap-2">• Optimized for long retention intervals (months to years)</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border/50 p-6">
            <h3 className="text-lg font-semibold tracking-[-0.02em]">SM-2 (Legacy Anki)</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">• Fixed formula — same for every user and every subject</li>
              <li className="flex gap-2">• Simpler but less efficient — schedules more reviews than necessary</li>
              <li className="flex gap-2">• Does not learn from your performance patterns</li>
              <li className="flex gap-2">• Well-understood and battle-tested, but superseded by FSRS</li>
              <li className="flex gap-2">• Struggles with very long intervals used in multi-year exam prep</li>
            </ul>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <SectionLabel>Anki Compatibility</SectionLabel>
        <div className="rounded-xl border border-border/50 p-8">
          <h3 className="text-xl font-semibold tracking-[-0.02em]">Same algorithm. Smarter card creation.</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Anki users spend hours creating cards manually or downloading and adapting shared decks.
            Reviso keeps the scheduling you trust (FSRS) and replaces the manual card-creation step
            with AI generation from photos, pasted text, and notes. The result: Anki-quality scheduling
            without Anki-level setup time.
          </p>
        </div>
      </PageSection>

      <PageSection>
        <SectionLabel>FAQ</SectionLabel>
        <div className="mt-6 space-y-6">
          {[
            { q: 'What is FSRS and how is it different from Anki old SM-2 algorithm?', a: 'FSRS (Free Spaced Repetition Scheduler) is a modern algorithm that adapts to your individual memory. It is 15-30% more efficient than SM-2 — meaning fewer reviews for the same retention. Anki itself switched from SM-2 to FSRS.' },
            { q: 'Can I import or export Anki decks from Reviso?', a: 'Reviso is built on the same FSRS algorithm as Anki, making it scheduling-compatible. Support for direct .apkg import is coming soon. Currently, you generate cards within Reviso from your notes and photos.' },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-border/50 p-6">
              <h3 className="text-base font-medium">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </div>
          ))}
        </div>
      </PageSection>
    </>
  )
}
