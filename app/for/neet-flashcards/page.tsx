import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { PageSection, SectionLabel, SectionHeading } from '@/components/page-section'
import { CheckCircle, Camera, Brain, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'NEET Flashcards App — AI-Generated from Your Notes | Free & FSRS-Based',
  description: 'Turn NCERT textbook photos, handwritten notes, and study material into AI flashcards for NEET UG. Free, FSRS-based spaced repetition. Built for Biology, Physics & Chemistry.',
  openGraph: {
    title: 'NEET Flashcards App — AI-Generated from Your Own Notes',
    description: 'Turn NCERT photos into AI flashcards. Free spaced repetition for NEET UG prep.',
  },
  alternates: {
    canonical: '/for/neet-flashcards/'
  },
}

const features = [
  { icon: Camera, title: 'Photo to Flashcards', desc: 'Photograph an NCERT page or your handwritten notes — Reviso AI generates flashcards instantly using vision AI and OCR.' },
  { icon: Brain, title: 'FSRS Spaced Repetition', desc: 'The same algorithm Anki uses. Cards resurface right before you would forget them — ideal for the 2-year NEET prep timeline.' },
  { icon: Zap, title: 'AI Answer Scoring', desc: 'Type your answer during review. AI scores it and auto-converts to a spaced-repetion rating. No self-grading needed.' },
  { icon: CheckCircle, title: 'Free Forever', desc: '50 free AI credits daily. No paid tier, no credit card. Ad-supported. You can also manually rate cards when credits run out.' },
]

const subjects = [
  { name: 'Biology', weight: 'Highest weight — 90 of 200 questions', focus: 'NCERT Class 11–12, diagrams, classifications, physiological processes' },
  { name: 'Chemistry', weight: '45 of 200 questions', focus: 'Reactions, mechanisms, periodic trends, organic name reactions' },
  { name: 'Physics', weight: '45 of 200 questions', focus: 'Formula recall, derivations, conceptual application' },
]

export default function NeetFlashcardsPage() {
  return (
    <>
      <PageSection>
        <SectionLabel>NEET Flashcards</SectionLabel>
        <SectionHeading>
          NEET prep is a <span className="text-cyan-400">memory marathon</span>. Reviso paces it for you.
        </SectionHeading>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          The NEET UG syllabus is enormous — 97 chapters across Biology, Physics, and Chemistry.
          Biology alone is fact-dense enough to overwhelm traditional revision methods.
          Reviso turns your NCERT textbook photos, coaching notes, and handwritten summaries
          into AI-generated flashcards that surface at scientifically optimal intervals.
        </p>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border/50 bg-border/50 md:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col gap-4 bg-background p-8 lg:p-10">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5">
                <f.icon className="h-5 w-5 text-foreground/60" strokeWidth={1.25} />
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.02em]">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionLabel>Subject Breakdown</SectionLabel>
        <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
          Biology gets the most weight — Reviso gives it the most attention.
        </h2>
        <div className="mt-10 grid gap-4">
          {subjects.map((s) => (
            <div key={s.name} className="rounded-xl border border-border/50 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground/5 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/60">
                  {s.name[0]}
                </span>
                <div>
                  <h3 className="font-semibold">{s.name}</h3>
                  <p className="text-xs text-muted-foreground">{s.weight}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{s.focus}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection id="biology">
        <SectionLabel>NEET Biology</SectionLabel>
        <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
          Biology flashcards deserve their own workflow.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          NEET Biology is 90 questions of pure recall — classifications, diagrams, physiological processes.
          Reviso lets you photograph NCERT diagrams and handwritten notes, then generates Q&A pairs
          that test both recognition and recall. The FSRS algorithm schedules reviews across months,
          so you see each card again right before you would naturally forget it.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <span className="rounded-full border border-border/50 px-4 py-1.5 text-xs text-muted-foreground">NCERT Class 11 Biology</span>
          <span className="rounded-full border border-border/50 px-4 py-1.5 text-xs text-muted-foreground">NCERT Class 12 Biology</span>
          <span className="rounded-full border border-border/50 px-4 py-1.5 text-xs text-muted-foreground">Diagram-based flashcards</span>
          <span className="rounded-full border border-border/50 px-4 py-1.5 text-xs text-muted-foreground">PYQ recall cards</span>
        </div>
      </PageSection>

      <PageSection>
        <SectionLabel>FAQ</SectionLabel>
        <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
          Common questions about NEET flashcards.
        </h2>
        <div className="mt-10 space-y-6">
          {[
            { q: 'Can Reviso generate flashcards from NCERT textbook photos?', a: 'Yes. Photograph any NCERT page — Reviso uses vision AI to extract text and key concepts, then generates question-answer pairs automatically. Works for handwritten notes too.' },
            { q: 'Does Reviso cover NEET Biology diagrams?', a: 'Yes. You can photograph diagram pages and Reviso will generate flashcards that test both identification and function. The AI recognizes diagram labels and integrates them into card content.' },
            { q: 'Is there a pre-made NEET deck or do I build my own?', a: 'Reviso generates cards from your own materials — there is no pre-built deck. This means every card is relevant to exactly what you are studying, and you remember it better because you generated it from your own notes.' },
            { q: 'How is Reviso different from czed or FlashGenius?', a: 'Reviso uniquely combines AI-generated cards from photos, AI-graded answer scoring during review, and the FSRS algorithm (same as Anki). No other India-focused flashcard app has all three.' },
            { q: 'Is Reviso really free for NEET aspirants?', a: 'Yes. 50 free AI credits refresh every 24 hours. You can also review cards manually without credits. The free plan includes ads — no paid tier exists.' },
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
            Start generating NEET flashcards — free.
          </h2>
          <p className="mt-4 max-w-lg text-sm text-muted-foreground">
            Download Reviso on Android. Photograph your NCERT notes. AI generates your flashcards in seconds.
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
