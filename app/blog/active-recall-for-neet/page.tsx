import type { Metadata } from 'next'
import Link from 'next/link'
import { PageSection, SectionLabel } from '@/components/page-section'

export const metadata: Metadata = {
  title: 'Active Recall Techniques for NEET — Study Strategies That Work',
  description: 'Learn active recall techniques specifically tailored for NEET UG preparation. How to use flashcards, self-testing, and AI scoring for Biology, Chemistry, and Physics.',
  openGraph: {
    title: 'Active Recall Techniques for NEET — Study Strategies That Work',
    description: 'Active recall techniques tailored for NEET UG. Flashcards, self-testing, and AI scoring.',
  },
}

export default function ActiveRecallForNeet() {
  return (
    <PageSection>
      <SectionLabel>Blog / NEET Prep</SectionLabel>
      <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
        Active Recall Techniques for NEET
      </h1>
      <p className="mt-4 text-sm text-muted-foreground">Why passive reading is failing you — and what to do instead.</p>

      <div className="mt-10 max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p>Most NEET aspirants spend 70% of their study time reading and highlighting — two of the least effective study methods ever measured. Active recall, by contrast, is one of the most effective. Here is how to apply it specifically to NEET subjects.</p>

        <h2 className="text-xl font-semibold text-foreground pt-6">Active Recall for NEET Biology</h2>
        <p>Biology is the highest-ROI subject for active recall because it is fact-dense. After reading a NCERT Biology chapter, close the book and try to answer: "What are the three layers of the heart wall?" "Name the hormone secreted by the thyroid." "What is the function of ribosomes?" Generate flashcards from the chapter and test yourself weekly.</p>

        <h2 className="text-xl font-semibold text-foreground pt-6">Active Recall for NEET Chemistry</h2>
        <p>For Organic Chemistry, cover the product side of a reaction and try to predict it. For Inorganic, cover the properties in a periodic trend and try to recall them. The AI answer scoring feature in Reviso is valuable here — you type the product or property, and AI confirms whether it is correct.</p>

        <h2 className="text-xl font-semibold text-foreground pt-6">Active Recall for NEET Physics</h2>
        <p>Cover the formula on your formula sheet and try to recall it. Cover the variable definitions and try to recall units. Physics active recall is more effective when combined with practice problems — use flashcards for formula memorization and problem sets for application.</p>

        <p className="pt-4">
          <Link href="/for/neet-flashcards" className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300">
            Apply active recall with Reviso for NEET →
          </Link>
        </p>
      </div>
    </PageSection>
  )
}
