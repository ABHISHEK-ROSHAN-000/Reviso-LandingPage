import type { Metadata } from 'next'
import Link from 'next/link'
import { PageSection, SectionLabel } from '@/components/page-section'

export const metadata: Metadata = {
  title: 'How Many Flashcards Should I Study Per Day? A Practical Guide',
  description: 'Find your ideal daily flashcard count based on your exam timeline and study intensity. Includes recommendations for NEET, JEE, UPSC, and board exam prep.',
  openGraph: {
    title: 'How Many Flashcards Should I Study Per Day?',
    description: 'Find your ideal daily flashcard count. Includes recommendations for NEET, JEE, UPSC & boards.',
  },
  alternates: {
    canonical: '/blog/how-many-flashcards-per-day/'
  },
}

export default function HowManyFlashcardsPerDay() {
  return (
    <PageSection>
      <SectionLabel>Blog / Study Tips</SectionLabel>
      <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
        How Many Flashcards Should I Study Per Day?
      </h1>
      <p className="mt-4 text-sm text-muted-foreground">The answer depends on your exam timeline, but the range is narrower than you think.</p>

      <div className="mt-10 max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p>The most common question new flashcard users ask is "How many cards per day?" The honest answer is: it depends on how much time you have before your exam. But research and user data give us useful guidelines.</p>

        <h2 className="text-xl font-semibold text-foreground pt-6">The 20–50 Card Sweet Spot</h2>
        <p>For most students, reviewing 20–50 new cards per day (plus scheduled reviews from previous days) is sustainable. At 20 new cards/day, you build a deck of ~600 cards per month. At 50 new cards/day, you build ~1,500 cards per month. For a NEET aspirant covering Biology (38 chapters), 20–30 cards per day is sufficient to have a comprehensive deck ready before exam day.</p>

        <h2 className="text-xl font-semibold text-foreground pt-6">Casual / Regular / Serious / Intens</h2>
        <p>Reviso includes four daily goal presets that adjust your target review volume:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Casual:</strong> ~10 new cards/day — for students with 6+ months remaining</li>
          <li><strong>Regular:</strong> ~25 new cards/day — the default for consistent prep</li>
          <li><strong>Serious:</strong> ~50 new cards/day — for peak prep periods</li>
          <li><strong>Intense:</strong> ~80 new cards/day — for last-month revision surges</li>
        </ul>
        <p>The key insight: FSRS automatically schedules reviews so you never see more cards than you can handle. If you miss a day, the algorithm adjusts. There is no "falling behind" in spaced repetition — the algorithm simply reschedules.</p>

        <p className="pt-4">
          <Link href="/features/" className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300">
            Set your daily goal in Reviso →
          </Link>
        </p>
      </div>
    </PageSection>
  )
}
