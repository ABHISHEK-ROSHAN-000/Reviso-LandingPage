import type { Metadata } from 'next'
import Link from 'next/link'
import { PageSection, SectionLabel } from '@/components/page-section'

export const metadata: Metadata = {
  title: 'What Is Spaced Repetition? A Complete Guide for Students',
  description: 'Spaced repetition is a science-backed study technique that schedules review sessions right before you would forget. Learn how it works and how to use it for exams.',
  openGraph: {
    title: 'What Is Spaced Repetition? A Complete Guide',
    description: 'Learn how spaced repetition works and why it is the most efficient way to study.',
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What Is Spaced Repetition? A Complete Guide for Students",
  "description": "Spaced repetition is a science-backed study technique that schedules review sessions right before you would forget. Learn how it works.",
  "author": { "@type": "Organization", "name": "Reviso" },
}

export default function WhatIsSpacedRepetition() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <PageSection>
        <SectionLabel>Blog / Study Techniques</SectionLabel>
        <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
          What Is Spaced Repetition?
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">A complete guide to the most efficient study method ever discovered.</p>

        <div className="mt-10 max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>Spaced repetition is a study technique where you review information at increasing intervals over time. Instead of cramming everything in one session (and forgetting most of it within days), you space out your reviews so each one happens right before you would naturally forget the material.</p>

          <p>This works because of a well-understood psychological principle called the <strong>spacing effect</strong>: our brains encode information more deeply when we encounter it multiple times over a period of time, rather than all at once. First studied by Hermann Ebbinghaus in the 1880s, the spacing effect is one of the most robust findings in all of cognitive science.</p>

          <h2 className="text-xl font-semibold text-foreground pt-6">How Spaced Repetition Works</h2>
          <p>When you first learn a piece of information — say, "Photosynthesis occurs in the chloroplasts" — you have a strong memory of it for a short period. Without review, that memory fades. The forgetting curve is steep at first and then flattens.</p>
          <p>Spaced repetition interrupts the forgetting curve. Each time you review the card, you push the memory back to full strength. The next review interval is longer than the previous one — one day, then three days, then a week, then a month — because each review strengthens the memory more durably than the last.</p>

          <h2 className="text-xl font-semibold text-foreground pt-6">FSRS: The Modern Algorithm</h2>
          <p>The Free Spaced Repetition Scheduler (FSRS) is the algorithm that powers both Anki (since 2023) and Reviso. Unlike older algorithms that use fixed formulas for everyone, FSRS adapts to your individual memory patterns. It tracks how you perform on each card and adjusts future intervals based on your actual recall history. The result is fewer reviews for the same retention rate — typically 15–30% fewer than older algorithms.</p>

          <h2 className="text-xl font-semibold text-foreground pt-6">Why Spaced Repetition Beats Cramming</h2>
          <p>Cramming works for exactly one exam — the one happening tomorrow. Because the information was never transferred to long-term memory, it fades rapidly after the test. Spaced repetition builds durable memory that persists for months or years. For students preparing for NEET, JEE, or UPSC — exams that test material learned 1–2 years prior — spaced repetition is not just helpful, it is essential.</p>

          <p className="pt-4">
            <Link href="/features/spaced-repetition-fsrs" className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300">
              Learn how Reviso implements FSRS for Indian exam prep →
            </Link>
          </p>
        </div>
      </PageSection>
    </>
  )
}
