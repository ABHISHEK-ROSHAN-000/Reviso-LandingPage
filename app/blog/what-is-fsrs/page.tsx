import type { Metadata } from 'next'
import Link from 'next/link'
import { PageSection, SectionLabel } from '@/components/page-section'

export const metadata: Metadata = {
  title: 'What Is FSRS? Free Spaced Repetition Scheduler Explained',
  description: 'FSRS (Free Spaced Repetition Scheduler) is the algorithm behind modern flashcard apps like Anki and Reviso. Learn how it adapts to your memory and why it beats older algorithms.',
  openGraph: {
    title: 'What Is FSRS? Free Spaced Repetition Scheduler Explained',
    description: 'FSRS adapts to your individual memory. Learn how it works and why it beats SM-2.',
  },
}

export default function WhatIsFsrs() {
  return (
    <PageSection>
      <SectionLabel>Blog / Study Science</SectionLabel>
      <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
        What Is FSRS?
      </h1>
      <p className="mt-4 text-sm text-muted-foreground">The Free Spaced Repetition Scheduler — the algorithm that personalizes your review schedule.</p>

      <div className="mt-10 max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p>FSRS stands for Free Spaced Repetition Scheduler. It is a modern algorithm that determines exactly when to show you each flashcard for review. Unlike older algorithms that apply the same formula to every user and every card, FSRS adapts to your individual memory patterns using a mathematical model with multiple parameters per user.</p>

        <h2 className="text-xl font-semibold text-foreground pt-6">How FSRS Works</h2>
        <p>FSRS models each user's memory using four key parameters: initial stability, stability growth rate, retrieval difficulty, and forgetting factor. As you review cards and rate your recall (Again/Hard/Good/Easy), the algorithm updates these parameters to fit your actual performance. Over time, it learns that you find Biology easier than Physics, or that you struggle with Organic Chemistry reactions.</p>
        <p>This personalization means FSRS schedules fewer reviews than older algorithms for the same retention rate — typically 15–30% fewer. For a NEET aspirant reviewing 200 cards daily, that saves 30–60 reviews per day without sacrificing retention.</p>

        <h2 className="text-xl font-semibold text-foreground pt-6">FSRS vs SM-2</h2>
        <p>SM-2 (the older Anki algorithm) uses a fixed formula with seven "ease factors" that apply to all cards equally. It does not learn from your performance patterns. FSRS, by contrast, is a continuous model that becomes more accurate the more you use it. Anki itself switched from SM-2 to FSRS in 2023 precisely because of these advantages.</p>

        <p className="pt-4">
          <Link href="/features/spaced-repetition-fsrs" className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300">
            Learn more about FSRS in Reviso →
          </Link>
        </p>
      </div>
    </PageSection>
  )
}
