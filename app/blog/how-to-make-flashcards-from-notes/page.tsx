import type { Metadata } from 'next'
import Link from 'next/link'
import { PageSection, SectionLabel } from '@/components/page-section'

export const metadata: Metadata = {
  title: 'How to Make Flashcards from Notes — AI-Powered Guide',
  description: 'Stop manually writing flashcards. Learn how to turn your notes into AI-generated flashcards in seconds. Perfect for NEET, JEE, UPSC, and board exam prep.',
  openGraph: {
    title: 'How to Make Flashcards from Notes — AI-Powered Guide',
    description: 'Stop manually writing flashcards. Learn how to turn your notes into AI-generated flashcards in seconds.',
  },
  alternates: {
    canonical: '/blog/how-to-make-flashcards-from-notes/'
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Make Flashcards from Notes — AI-Powered Guide",
  "description": "Stop manually writing flashcards. Learn how to turn your notes into AI-generated flashcards in seconds.",
  "author": { "@type": "Organization", "name": "Reviso" },
}

export default function HowToMakeFlashcardsFromNotes() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <PageSection>
        <SectionLabel>Blog / How-To</SectionLabel>
        <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
          How to Make Flashcards from Notes
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">Three methods, from manual to fully automated.</p>

        <div className="mt-10 max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>Making flashcards from your notes is the single highest-leverage study habit you can adopt. The act of converting notes into question-answer pairs forces you to identify what matters. And the resulting flashcards give you a reusable study tool you can review anytime.</p>
          <p>The problem is that manual card creation is slow. A single hour of lecture can generate 30–50 minutes of card-writing work. Here are three methods, ranked by speed.</p>

          <h2 className="text-xl font-semibold text-foreground pt-6">Method 1: Manual (Traditional)</h2>
          <p>Read through your notes and identify key facts, definitions, and concepts. For each one, write a question on one side and the answer on the other. Best for: situations where the act of writing helps you remember. Worst for: speed and scale.</p>

          <h2 className="text-xl font-semibold text-foreground pt-6">Method 2: Digital with Copy-Paste</h2>
          <p>If your notes are digital, copy key passages into a flashcard tool. Many tools (including Reviso) accept pasted text and generate flashcards from it. This is faster than manual but still requires you to identify what to paste.</p>

          <h2 className="text-xl font-semibold text-foreground pt-6">Method 3: AI-Generated (Fastest)</h2>
          <p>With Reviso, you photograph your handwritten or printed notes — or paste text — and AI generates complete flashcards automatically. The AI identifies key concepts, creates meaningful question-answer pairs, and presents them for review. You can edit or delete cards before saving. This method turns a 30-minute card-writing session into a 30-second scan-and-generate workflow.</p>

          <p className="pt-4">
            <Link href="/features/ai-flashcard-generator" className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300">
              Try Reviso AI flashcard generator →
            </Link>
          </p>

          <h2 className="text-xl font-semibold text-foreground pt-6">Tips for Better Flashcards</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>One fact per card.</strong> Cards that test multiple facts make it impossible to know which part you got wrong.</li>
            <li><strong>Questions, not prompts.</strong> "What is the function of mitochondria?" is better than "Mitochondria function."</li>
            <li><strong>Use images.</strong> Flashcards with images are more memorable. Photograph diagrams and let AI generate cards around them.</li>
            <li><strong>Review immediately.</strong> Generated cards have the highest retention value if reviewed within 24 hours of creation.</li>
          </ul>
        </div>
      </PageSection>
    </>
  )
}
