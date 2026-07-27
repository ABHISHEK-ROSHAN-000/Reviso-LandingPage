import type { Metadata } from 'next'
import Link from 'next/link'
import { PageSection, SectionLabel } from '@/components/page-section'

export const metadata: Metadata = {
  title: 'Spaced Repetition for NEET — The Ultimate Memory Strategy',
  description: 'How to use spaced repetition for NEET UG preparation. Learn which subjects benefit most, how to schedule reviews, and why FSRS beats manual planning.',
  openGraph: {
    title: 'Spaced Repetition for NEET — The Ultimate Memory Strategy',
    description: 'How to use spaced repetition for NEET UG prep. Best subjects, scheduling tips, and FSRS.',
  },
  alternates: {
    canonical: '/blog/spaced-repetition-for-neet/'
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Spaced Repetition for NEET — The Ultimate Memory Strategy",
  "description": "How to use spaced repetition for NEET UG preparation with FSRS.",
  "author": { "@type": "Organization", "name": "Reviso" },
}

export default function SpacedRepetitionForNeet() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <PageSection>
        <SectionLabel>Blog / NEET Prep</SectionLabel>
        <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
          Spaced Repetition for NEET
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">Why NEET is the best exam in India for spaced repetition — and how to use it.</p>

        <div className="mt-10 max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>NEET UG is perhaps the single best Indian exam for spaced repetition. Here is why: the syllabus is enormous (97 chapters across Biology, Physics, and Chemistry), the prep timeline is 1–2 years, and Biology — the highest-weight subject (90 of 200 questions) — is almost entirely fact-based memorization.</p>
          <p>These three factors together mean that traditional study methods (read → highlight → reread → cram) are catastrophically inefficient for NEET. By the time you finish Physics, you have forgotten last month Biology. Spaced repetition solves this.</p>

          <h2 className="text-xl font-semibold text-foreground pt-6">Biology: The Highest-Return Subject</h2>
          <p>NEET Biology is 90 questions drawn from NCERT Class 11 and 12. Most of these questions test direct recall: "What is the function of Golgi apparatus?" "Which hormone regulates blood calcium?" "Name the largest bone in the human body." These are ideal spaced-repetition targets because each fact is discrete, testable, and independent.</p>
          <p>Photograph each NCERT Biology page using Reviso, generate flashcards, and FSRS will schedule them across your entire prep timeline. A card about "Barr body" created in month 1 will resurface in month 6, month 10, and month 14 — right before your brain would naturally discard it.</p>

          <h2 className="text-xl font-semibold text-foreground pt-6">Chemistry: Reactions & Mechanisms</h2>
          <p>Chemistry is a mix of memorization (reactions, named reactions, periodic trends) and application. Use flashcards for the memorization components: organic reactions, name reactions, reagent-substrate-product triples. The AI answer scoring feature is particularly useful here — typing a reaction product and having AI verify it is faster than checking a key.</p>

          <h2 className="text-xl font-semibold text-foreground pt-6">Physics: Formula Retention</h2>
          <p>Physics for NEET requires recalling formulas quickly during problem-solving. Create formula flashcards from your formula sheets — photograph them and let AI extract each formula into a Q&A card. Review these daily using FSRS to build automatic recall.</p>

          <h2 className="text-xl font-semibold text-foreground pt-6">Sample NEET Study Schedule with Reviso</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Daily:</strong> After studying a chapter, photograph your notes → generate 5–10 flashcards (5 minutes)</li>
            <li><strong>Each morning:</strong> Review whatever cards FSRS scheduled for today (10–15 minutes)</li>
            <li><strong>Weekly:</strong> Browse your weakest subjects in the analytics dashboard; add new cards for areas where recall is low</li>
            <li><strong>Monthly:</strong> All cards scheduled by FSRS automatically — no manual planning needed</li>
          </ul>

          <p className="pt-4">
            <Link href="/for/neet-flashcards" className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300">
              Start with Reviso for NEET →
            </Link>
          </p>
        </div>
      </PageSection>
    </>
  )
}
