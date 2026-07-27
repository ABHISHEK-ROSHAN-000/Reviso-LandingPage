import type { Metadata } from 'next'
import Link from 'next/link'
import { PageSection, SectionLabel, SectionHeading, SectionSubtext } from '@/components/page-section'
import { Wand2, Camera, Brain, BarChart3, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Features — AI Flashcard Generator, Photo to Cards, AI Scoring & More',
  description: 'Explore Reviso features: AI flashcard generation from notes and photos, AI answer scoring, FSRS spaced repetition, and study analytics. Built for Indian competitive exams.',
  openGraph: {
    title: 'Reviso Features — AI-Powered Flashcard Learning',
    description: 'AI flashcard generation, photo-to-cards, AI answer scoring, and FSRS spaced repetition.',
  },
  alternates: {
    canonical: '/features/'
  },
}

const features = [
  { icon: Wand2, title: 'AI Flashcard Generator', href: '/features/ai-flashcard-generator', desc: 'Turn notes, pasted text, and PDFs into AI-generated flashcards in seconds. 50 free cards daily.' },
  { icon: Camera, title: 'Photo to Flashcards', href: '/features/photo-to-flashcards', desc: 'Photograph textbooks, handwritten notes, or lecture slides. AI extracts key concepts automatically.' },
  { icon: Brain, title: 'AI Answer Scoring', href: '/features/ai-answer-scoring', desc: 'Type your answer during review. AI scores it and converts to a spaced-repetition rating automatically.' },
  { icon: BarChart3, title: 'Spaced Repetition (FSRS)', href: '/features/spaced-repetition-fsrs', desc: 'The same algorithm Anki uses. Cards resurface right before you would forget them.' },
]

export default function FeaturesHubPage() {
  return (
    <PageSection>
      <SectionLabel>Features</SectionLabel>
      <SectionHeading>
        Everything you need to <span className="underline decoration-foreground/30 underline-offset-[6px]">remember more</span>, study less.
      </SectionHeading>
      <SectionSubtext>
        Reviso combines AI generation, AI grading, and the science of spaced repetition into one app.
        No other flashcard tool for Indian exams brings all three together.
      </SectionSubtext>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border/50 bg-border/50 md:grid-cols-2">
        {features.map((f) => (
          <Link key={f.href} href={f.href} className="flex flex-col gap-4 bg-background p-8 transition-colors hover:bg-foreground/[0.02] lg:p-10">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5">
              <f.icon className="h-5 w-5 text-foreground/60" strokeWidth={1.25} />
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-[-0.02em]">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </PageSection>
  )
}
