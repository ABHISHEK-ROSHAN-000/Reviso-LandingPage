import type { Metadata } from 'next'
import Link from 'next/link'
import { PageSection, SectionLabel } from '@/components/page-section'

export const metadata: Metadata = {
  title: 'FSRS vs SM-2 — Which Spaced Repetition Algorithm Is Better?',
  description: 'Compare FSRS and SM-2 spaced repetition algorithms. FSRS is 15-30% more efficient, adapts to individual memory, and is now used by both Anki and Reviso.',
  openGraph: {
    title: 'FSRS vs SM-2 — Which Spaced Repetition Algorithm Is Better?',
    description: 'Compare FSRS and SM-2. FSRS is 15-30% more efficient and adapts to your memory.',
  },
}

export default function FsrsVsSm2() {
  return (
    <PageSection>
      <SectionLabel>Blog / Study Science</SectionLabel>
      <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
        FSRS vs SM-2
      </h1>
      <p className="mt-4 text-sm text-muted-foreground">Why modern flashcard apps are moving from SM-2 to FSRS.</p>

      <div className="mt-10 max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p>The spaced repetition landscape has shifted. For decades, SM-2 (SuperMemo 2) was the gold standard — a simple, effective algorithm that powered Anki and most flashcard apps. In 2023, Anki adopted FSRS as its default algorithm. Here is why.</p>

        <h2 className="text-xl font-semibold text-foreground pt-6">SM-2: The Classic</h2>
        <p>SM-2 uses a fixed set of "ease factors" that determine how long to wait before showing a card again. When you rate a card "Good," the interval multiplies by a fixed factor. The system works well for most users but has a fundamental limitation: it treats everyone the same. A biology major and a physics major using the same deck get the same schedule, even though their memory strengths differ by subject.</p>

        <h2 className="text-xl font-semibold text-foreground pt-6">FSRS: The Modern Replacement</h2>
        <p>FSRS models memory as a continuous function with parameters that adapt to each user's actual performance. After a few review sessions, FSRS has built a personalized model of how you remember different types of cards. It then schedules reviews at precisely the right intervals for <em>your</em> brain. Studies show this reduces review load by 15–30% for the same retention rate.</p>

        <h2 className="text-xl font-semibold text-foreground pt-6">Side-by-Side Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left py-2 pr-4 text-foreground font-medium">Feature</th>
                <th className="text-left py-2 pr-4 text-foreground font-medium">SM-2</th>
                <th className="text-left py-2 text-foreground font-medium">FSRS</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/30"><td className="py-2 pr-4">Personalization</td><td className="py-2 pr-4">None — same for all users</td><td className="py-2">Adapts to individual memory</td></tr>
              <tr className="border-b border-border/30"><td className="py-2 pr-4">Efficiency</td><td className="py-2 pr-4">Baseline</td><td className="py-2">15–30% fewer reviews</td></tr>
              <tr className="border-b border-border/30"><td className="py-2 pr-4">Parameters</td><td className="py-2 pr-4">7 fixed ease factors</td><td className="py-2">Continuous model, multiple params</td></tr>
              <tr className="border-b border-border/30"><td className="py-2 pr-4">Used by</td><td className="py-2 pr-4">Legacy Anki, older apps</td><td className="py-2">Anki 23+, Reviso</td></tr>
              <tr><td className="py-2 pr-4">Long intervals</td><td className="py-2 pr-4">Less accurate</td><td className="py-2">Optimized for months/years</td></tr>
            </tbody>
          </table>
        </div>

        <p className="pt-4">
          <Link href="/features/spaced-repetition-fsrs" className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300">
            Experience FSRS with Reviso →
          </Link>
        </p>
      </div>
    </PageSection>
  )
}
