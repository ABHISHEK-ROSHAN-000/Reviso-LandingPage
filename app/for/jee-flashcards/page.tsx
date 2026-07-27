import type { Metadata } from 'next'
import Link from 'next/link'
import { PageSection, SectionLabel, SectionHeading } from '@/components/page-section'

export const metadata: Metadata = {
  title: 'JEE Flashcards App — AI-Generated Physics, Chemistry & Maths Formula Cards',
  description: 'Turn formula sheets, derivation notes, and textbook photos into AI flashcards for JEE Main & Advanced. Free, FSRS-based spaced repetition. Built for IIT-JEE prep.',
  openGraph: {
    title: 'JEE Flashcards — AI-Generated Physics, Chemistry & Maths Formula Cards',
    description: 'Turn formula sheets into AI flashcards. Free spaced repetition for IIT-JEE prep.',
  },
}

export default function JeeFlashcardsPage() {
  return (
    <>
      <PageSection>
        <SectionLabel>JEE Flashcards</SectionLabel>
        <SectionHeading>
          Formulas, derivations, problem patterns — <span className="text-cyan-400">memorized on autopilot</span>.
        </SectionHeading>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          JEE Main and Advanced test hundreds of formulas across Physics, Chemistry, and Mathematics.
          Unlike purely factual subjects, JEE requires you to recall formulas and apply problem-solving patterns
          under time pressure. Reviso turns your formula sheets, derivation notes, and practice problem solutions
          into AI flashcards that reinforce both recall and application.
        </p>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border/50 bg-border/50 md:grid-cols-2">
          {[
            { title: 'Formula Sheet → Flashcards', desc: 'Photograph your formula sheet. AI extracts each formula and creates Q&A pairs — question on front, formula on back. No manual typing.' },
            { title: 'Derivation Recall', desc: 'Break multi-step derivations into individual flashcards. Each card tests one logical step. FSRS schedules review so you retain the full chain.' },
            { title: 'Problem Pattern Recognition', desc: 'Turn solved PYQs into flashcards that test the approach, not just the answer. AI-generated cards identify the trigger that suggests a specific method.' },
            { title: 'Free, No Card-Creation Cost', desc: '50 AI credits daily — generate up to 50 cards from photos or text every day at no cost. Manual review is unlimited and always free.' },
          ].map((f) => (
            <div key={f.title} className="flex flex-col gap-4 bg-background p-8 lg:p-10">
              <h3 className="text-lg font-semibold tracking-[-0.02em]">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionLabel>Subject Areas</SectionLabel>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { name: 'Physics', topics: 'Mechanics, Electrostatics, Thermodynamics, Optics, Modern Physics, EMI & AC, Waves' },
            { name: 'Chemistry', topics: 'Physical (mole concept, thermodynamics), Organic (reaction mechanisms, named reactions), Inorganic (periodicity, coordination compounds)' },
            { name: 'Mathematics', topics: 'Calculus, Algebra, Coordinate Geometry, Vectors & 3D, Trigonometry, Probability & Statistics' },
          ].map((s) => (
            <div key={s.name} className="rounded-xl border border-border/50 p-6">
              <h3 className="text-lg font-semibold">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.topics}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionLabel>FAQ</SectionLabel>
        <div className="mt-6 space-y-6">
          {[
            { q: 'Can I turn a formula-sheet photo into flashcards?', a: 'Yes. Photograph any formula sheet — handwritten or printed — and Reviso AI identifies each formula and creates individual flashcards. You can preview and select which to save.' },
            { q: 'Does this work for JEE Advanced or only JEE Main?', a: 'Both. Both syllabuses overlap significantly, and the AI generation + FSRS scheduling works identically. Advanced-specific topics (like matrix algebra or complex numbers) are handled through your own uploaded materials.' },
            { q: 'How is this different from using Anki for JEE?', a: 'Anki is a manual card-creation tool. Reviso generates cards automatically from photos and text, and scores your typed answers with AI during review. The spacing algorithm (FSRS) is the same one Anki itself now uses.' },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-border/50 p-6">
              <h3 className="text-base font-medium">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Start generating JEE flashcards — free.
          </h2>
          <p className="mt-4 max-w-lg text-sm text-muted-foreground">
            Download Reviso. Photograph your formula sheet. Let AI build your review deck.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.reviso.app"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 rounded-full border border-white/15 bg-white px-8 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Download from Play Store
          </a>
        </div>
      </PageSection>
    </>
  )
}
