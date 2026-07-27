import type { Metadata } from 'next'
import Link from 'next/link'
import { PageSection, SectionLabel } from '@/components/page-section'

export const metadata: Metadata = {
  title: 'Convert NCERT Notes to Flashcards — AI-Powered Guide',
  description: 'Learn how to convert NCERT notes into AI flashcards in seconds. Photograph your NCERT textbook and let AI generate question-answer pairs. Perfect for NEET, JEE & CBSE.',
  openGraph: {
    title: 'Convert NCERT Notes to Flashcards — AI-Powered Guide',
    description: 'Turn NCERT textbook pages into AI flashcards. Photograph, generate, review.',
  },
}

export default function ConvertNcertNotesToFlashcards() {
  return (
    <PageSection>
      <SectionLabel>Blog / How-To</SectionLabel>
      <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
        Convert NCERT Notes to Flashcards with AI
      </h1>
      <p className="mt-4 text-sm text-muted-foreground">Stop typing out NCERT content. Photograph, generate, and review.</p>

      <div className="mt-10 max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p>NCERT textbooks are the foundation of NEET, JEE, CBSE, and UPSC preparation. If you are studying for any of these exams, you will spend hundreds of hours reading NCERT pages. The problem is that reading alone has very low retention — studies show we retain only 10–20% of what we read passively.</p>
        <p>The solution is to convert every NCERT chapter you read into flashcards. Here is the fastest workflow:</p>

        <h2 className="text-xl font-semibold text-foreground pt-6">Step 1: Photograph the Page</h2>
        <p>Open Reviso and use the camera scan feature. Photograph any NCERT page — Biology, Chemistry, Physics, Maths, History, Geography, Polity. The AI recognizes printed text (including diagrams with labels) and extracts the content.</p>

        <h2 className="text-xl font-semibold text-foreground pt-6">Step 2: AI Generates Flashcards</h2>
        <p>Within seconds, Reviso analyzes the page content and generates question-answer pairs. It identifies key concepts, definitions, and factual relationships. Each card tests a single piece of information using active recall. You can preview all generated cards before saving them.</p>

        <h2 className="text-xl font-semibold text-foreground pt-6">Step 3: Review on an FSRS Schedule</h2>
        <p>Saved cards enter your FSRS-powered review queue. The algorithm schedules each card for review at the optimal interval — starting with 1 day, then 3 days, 1 week, 1 month, and beyond. You never have to decide what to review or when; FSRS handles it automatically.</p>

        <h2 className="text-xl font-semibold text-foreground pt-6">Why This Works for NCERT Content</h2>
        <p>NCERT textbooks are dense with facts, definitions, and labeled diagrams — exactly the type of content that translates well into flashcards. Each paragraph contains multiple testable facts. By converting each chapter into flashcards, you transform a one-time reading session into a permanent review resource that stays with you throughout your entire exam prep timeline.</p>

        <p className="pt-4">
          <Link href="/features/photo-to-flashcards" className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300">
            Try NCERT photo-to-flashcards →
          </Link>
        </p>
      </div>
    </PageSection>
  )
}
