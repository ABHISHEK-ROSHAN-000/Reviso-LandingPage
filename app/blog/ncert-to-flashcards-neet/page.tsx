import type { Metadata } from 'next'
import Link from 'next/link'
import { PageSection, SectionLabel } from '@/components/page-section'

export const metadata: Metadata = {
  title: 'NCERT to Flashcards for NEET — Complete Chapter-by-Chapter Guide',
  description: 'Convert every NCERT Biology, Chemistry, and Physics chapter into AI flashcards for NEET UG. Chapter-by-chapter guide with the fastest generation workflow.',
  openGraph: {
    title: 'NCERT to Flashcards for NEET — Chapter-by-Chapter Guide',
    description: 'Convert NCERT Biology, Chemistry, Physics into AI flashcards for NEET.',
  },
}

export default function NcertToFlashcardsNeet() {
  return (
    <PageSection>
      <SectionLabel>Blog / NEET Prep</SectionLabel>
      <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
        NCERT to Flashcards for NEET
      </h1>
      <p className="mt-4 text-sm text-muted-foreground">Turn every NCERT chapter into a reusable flashcard deck.</p>

      <div className="mt-10 max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p>NEET UG directly tests NCERT Class 11 and 12 content. This is not an exaggeration — numerous question-level analyses show that 85–90% of NEET questions are directly drawn from NCERT statements, with the remaining questions testing application of NCERT concepts.</p>
        <p>This means your NEET flashcard strategy should be simple: every NCERT chapter = one flashcard deck. Here is how to build this systematically.</p>

        <h2 className="text-xl font-semibold text-foreground pt-6">Biology (38 Chapters across 11th & 12th)</h2>
        <p>Biology gets priority because it has the highest question weight (90/200). Photograph each chapter's key pages — focus on "key points" boxes, tables, and diagrams. Each chapter generates 15–25 cards on average. Over 38 chapters, that is roughly 700–950 Biology flashcards — a comprehensive review deck built in a fraction of the time manual creation would require.</p>

        <h2 className="text-xl font-semibold text-foreground pt-6">Chemistry (30 Chapters)</h2>
        <p>Chemistry divides into Physical, Organic, and Inorganic. For Physical Chemistry, photograph formula pages. For Organic, photograph reaction mechanisms and named reactions. For Inorganic, photograph periodic trends and compound properties. Dense chapters like "s, p, d, f Block Elements" benefit from multiple photo passes — photograph each section separately for better card granularity.</p>

        <h2 className="text-xl font-semibold text-foreground pt-6">Physics (29 Chapters)</h2>
        <p>Physics formulas and derivations are the highest-yield target for flashcards. Photograph each chapter's formula summary page and key derivations. Create separate cards for formula recall vs. conceptual understanding.</p>

        <p className="pt-4">
          <Link href="/for/neet-flashcards" className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300">
            Start building your NEET flashcard deck →
            </Link>
        </p>
      </div>
    </PageSection>
  )
}
