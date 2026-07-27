import type { Metadata } from 'next'
import Link from 'next/link'
import { PageSection, SectionLabel } from '@/components/page-section'

export const metadata: Metadata = {
  title: 'The Forgetting Curve Explained — Why We Forget and How to Stop It',
  description: 'Ebbinghaus forgetting curve shows we forget 50% of new information within hours. Learn how spaced repetition and active recall can flatten the curve.',
  openGraph: {
    title: 'The Forgetting Curve Explained — Why We Forget and How to Stop It',
    description: 'Learn why we forget so fast and how spaced repetition can flatten the forgetting curve.',
  },
  alternates: {
    canonical: '/blog/forgetting-curve-explained/'
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The Forgetting Curve Explained",
  "description": "Ebbinghaus forgetting curve shows we forget 50% of new information within hours. Spaced repetition is the solution.",
  "author": { "@type": "Organization", "name": "Reviso" },
}

export default function ForgettingCurveExplained() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <PageSection>
        <SectionLabel>Blog / Study Science</SectionLabel>
        <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
          The Forgetting Curve Explained
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">Hermann Ebbinghaus discovered in 1885 that humans forget exponentially — but the cure was discovered too.</p>

        <div className="mt-10 max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>In 1885, German psychologist Hermann Ebbinghaus conducted a series of experiments on his own memory. He memorized lists of nonsense syllables (like "BIH", "ZOD", "QAP") and tested himself at various intervals to see how much he retained. The result was the forgetting curve: a graph showing that memory decays exponentially unless it is reinforced.</p>

          <h2 className="text-xl font-semibold text-foreground pt-6">What the Forgetting Curve Shows</h2>
          <p>Ebbinghaus found that people forget approximately 50% of new information within an hour, and about 70% within 24 hours. After that, the forgetting rate slows — what remains after a week tends to stick much longer. The shape is exponential: steep drop at the beginning, then a long flat tail.</p>
          <p>This is why cramming the night before an exam is so ineffective for long-term retention. You have to re-learn most of it later because the initial steep drop happens before the second review.</p>

          <h2 className="text-xl font-semibold text-foreground pt-6">Flattening the Curve</h2>
          <p>Each time you review information, the forgetting curve resets to 100% but the new curve is shallower than the last one. After a few well-timed reviews, the curve becomes nearly flat — the information is now in long-term memory and decays very slowly.</p>
          <p>This is exactly what spaced repetition does. By scheduling reviews at increasing intervals — 1 day, 3 days, 1 week, 1 month — the algorithm catches each review at the optimal point on the curve. Review too early and you waste time. Review too late and you have to re-learn. Spaced repetition finds the Goldilocks window.</p>

          <h2 className="text-xl font-semibold text-foreground pt-6">Practical Implications for Exam Prep</h2>
          <p>For a NEET, JEE, or UPSC aspirant studying over 1–2 years, the forgetting curve has a clear message: review the material you learned last month, not just what you learned yesterday. This is what makes long-interval spaced repetition (like FSRS) invaluable — it actively schedules reviews of older material that you would otherwise never revisit until it is too late.</p>

          <p className="pt-4">
            <Link href="/features/spaced-repetition-fsrs" className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300">
              How Reviso uses FSRS to flatten your forgetting curve →
            </Link>
          </p>
        </div>
      </PageSection>
    </>
  )
}
