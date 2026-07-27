import type { Metadata } from 'next'
import Link from 'next/link'
import { PageSection, SectionLabel } from '@/components/page-section'

export const metadata: Metadata = {
  title: 'Active Recall vs Spaced Repetition: What Is the Difference?',
  description: 'Active recall and spaced repetition are often confused. Learn what each one is, how they work together, and how to use both for exam preparation.',
  openGraph: {
    title: 'Active Recall vs Spaced Repetition: What Is the Difference?',
    description: 'Learn how active recall and spaced repetition work together for better exam prep.',
  },
  alternates: {
    canonical: '/blog/active-recall-vs-spaced-repetition/'
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Active Recall vs Spaced Repetition: What Is the Difference?",
  "description": "Active recall and spaced repetition are often confused. Learn what each one is and how they work together.",
  "author": { "@type": "Organization", "name": "Reviso" },
}

export default function ActiveRecallVsSpacedRepetition() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <PageSection>
        <SectionLabel>Blog / Study Techniques</SectionLabel>
        <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
          Active Recall vs Spaced Repetition
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">The two most powerful study techniques — and how they complement each other.</p>

        <div className="mt-10 max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>"Active recall" and "spaced repetition" are often used interchangeably, but they describe two different things. Understanding the distinction is important because combining both is significantly more effective than either alone.</p>

          <h2 className="text-xl font-semibold text-foreground pt-6">What Is Active Recall?</h2>
          <p>Active recall is the act of pulling information out of your memory rather than passively reviewing it. When you read a textbook, you are <em>recognizing</em> information — it is right there on the page. When you close the book and try to answer "What are the three parts of the cell theory?" from memory, you are doing active recall.</p>
          <p>Active recall is what makes flashcards effective. The front of the card asks a question; you have to retrieve the answer from memory before checking it. This retrieval process is what strengthens the memory trace. The harder the retrieval, the stronger the benefit.</p>

          <h2 className="text-xl font-semibold text-foreground pt-6">What Is Spaced Repetition?</h2>
          <p>Spaced repetition is the scheduling system that determines <em>when</em> you practice active recall. Instead of reviewing all cards every day, spaced repetition algorithms schedule each card for review at the optimal moment — right before you would forget it. This ensures you are always practicing active recall on material that is on the verge of leaving your memory.</p>

          <h2 className="text-xl font-semibold text-foreground pt-6">How They Work Together</h2>
          <p>Think of it this way: active recall is the <em>exercise</em>, spaced repetition is the <em>training schedule</em>. You need both to build lasting memory efficiently.</p>
          <p>Flashcard apps use both: each time you review a card, you practice active recall by retrieving the answer. The app uses spaced repetition to decide which cards to show you and when. Reviso adds a third layer — AI answer scoring — which makes the active recall practice more accurate by evaluating the quality of your retrieved answer rather than relying on your self-assessment.</p>

          <p className="pt-4">
            <Link href="/features/ai-answer-scoring" className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300">
              See how Reviso combines active recall, spaced repetition, and AI scoring →
            </Link>
          </p>
        </div>
      </PageSection>
    </>
  )
}
