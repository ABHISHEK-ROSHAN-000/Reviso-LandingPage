import type { Metadata } from 'next'
import Link from 'next/link'
import { Stethoscope, Beaker, BookOpen, GraduationCap, Calculator, Brain, FileText } from 'lucide-react'
import { PageSection, SectionLabel, SectionHeading, SectionSubtext } from '@/components/page-section'

export const metadata: Metadata = {
  title: 'Flashcard App for Competitive Exams India — NEET, JEE, UPSC & More',
  description: 'Exam-specific AI flashcard pages for Indian competitive exams. Turn NCERT notes and textbook photos into smart flashcards with spaced repetition.',
  openGraph: {
    title: 'Flashcard App for Competitive Exams India',
    description: 'Exam-specific AI flashcard pages for Indian competitive exams.',
  },
  alternates: {
    canonical: '/for/'
  },
}

const exams = [
  { icon: Stethoscope, title: 'NEET Flashcards', href: '/for/neet-flashcards', desc: 'Biology, Physics & Chemistry flashcards from NCERT photos and notes. AI-powered spaced repetition for NEET UG prep.' },
  { icon: Calculator, title: 'JEE Flashcards', href: '/for/jee-flashcards', desc: 'Physics, Chemistry & Maths formula flashcards. Turn formula sheets into smart cards with AI.' },
  { icon: BookOpen, title: 'UPSC Flashcards', href: '/for/upsc-flashcards', desc: 'Current affairs & static GK flashcards. Generate cards from your daily notes automatically.' },
  { icon: GraduationCap, title: 'CBSE Class 10 & 12', href: '/for/cbse-class-10-flashcards', desc: 'Board exam flashcards across all subjects. NCERT-aligned, AI-generated from your textbooks.' },
  { icon: Brain, title: 'GATE Flashcards', href: '/for/gate-flashcards', desc: 'Engineering exam flashcards. Anki-compatible FSRS for long-formula retention.' },
  { icon: Stethoscope, title: 'NEET PG Flashcards', href: '/for/neet-pg-flashcards', desc: 'Medical PG flashcards from case notes and textbooks. AI-generated, FSRS-scheduled.' },
  { icon: FileText, title: 'CA Exam Flashcards', href: '/for/ca-exam-flashcards', desc: 'CA Foundation & Inter flashcards. Turn study material into AI revision cards.' },
]

export default function ForHubPage() {
  return (
    <>
      <PageSection>
        <SectionLabel>Exam & Audience Hub</SectionLabel>
        <SectionHeading>
          Flashcards for every <span className="underline decoration-foreground/30 underline-offset-[6px]">Indian exam</span>.
        </SectionHeading>
        <SectionSubtext>
          Pick your exam below. Each page is built around how that specific subject tests your memory —
          whether it is NEET Biology diagram recall, JEE formula retention, or UPSC current affairs review.
        </SectionSubtext>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border/50 bg-border/50 md:grid-cols-2 lg:grid-cols-3">
          {exams.map((e) => (
            <Link key={e.href} href={e.href} className="flex flex-col gap-4 bg-background p-8 transition-colors hover:bg-foreground/[0.02] lg:p-10">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5">
                <e.icon className="h-5 w-5 text-foreground/60" strokeWidth={1.25} />
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.02em]">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </PageSection>
    </>
  )
}
