import type { Metadata } from 'next'
import Link from 'next/link'
import { PageSection, SectionLabel } from '@/components/page-section'

export const metadata: Metadata = {
  title: 'UPSC Current Affairs Flashcards — Turn Daily Notes into AI Cards',
  description: 'Learn how to turn your daily current affairs notes into AI-powered flashcards for UPSC CSE. Automatic generation, date-tagged review, and FSRS scheduling.',
  openGraph: {
    title: 'UPSC Current Affairs Flashcards — Turn Daily Notes into AI Cards',
    description: 'Turn UPSC current affairs notes into AI flashcards automatically.',
  },
  alternates: {
    canonical: '/blog/upsc-current-affairs-flashcards/'
  },
}

export default function UpscCurrentAffairsFlashcards() {
  return (
    <PageSection>
      <SectionLabel>Blog / UPSC Prep</SectionLabel>
      <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
        UPSC Current Affairs Flashcards with AI
      </h1>
      <p className="mt-4 text-sm text-muted-foreground">Stop losing your current affairs notes. Turn them into a permanent review resource.</p>

      <div className="mt-10 max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p>Current affairs is the most dynamic component of UPSC CSE preparation. News changes daily, and the syllabus spans the last 12–18 months of events. Traditional note-taking is essential, but notes alone do not build durable memory — you need active recall practice on that content.</p>

        <h2 className="text-xl font-semibold text-foreground pt-6">The Workflow</h2>
        <p><strong>1. Take notes as usual.</strong> Read your newspaper or monthly current affairs magazine. Make handwritten or digital notes as you normally would.</p>
        <p><strong>2. Photograph or paste into Reviso.</strong> Photograph your daily notes page or paste text from digital sources. AI generates flashcards automatically.</p>
        <p><strong>3. Review on an FSRS schedule.</strong> Current affairs cards are date-tagged. FSRS schedules them so you see them again at the right intervals — monthly for older events, more frequently for recent ones.</p>

        <h2 className="text-xl font-semibold text-foreground pt-6">Why This Beats Static Notes</h2>
        <p>Static notes are excellent for reference but poor for retention. By converting each day's notes into flashcards, you transform a one-time reading session into a recurring review item. The act of recalling "Which country launched the X initiative?" from memory six months after you first read about it is what builds exam-ready knowledge.</p>

        <p className="pt-4">
          <Link href="/for/upsc-flashcards" className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300">
            Start with Reviso for UPSC →
          </Link>
        </p>
      </div>
    </PageSection>
  )
}
