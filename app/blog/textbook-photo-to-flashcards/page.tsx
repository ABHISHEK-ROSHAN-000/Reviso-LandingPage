import type { Metadata } from 'next'
import Link from 'next/link'
import { PageSection, SectionLabel } from '@/components/page-section'

export const metadata: Metadata = {
  title: 'Turn Textbook Photo into Flashcards — AI Scanning Guide',
  description: 'Photograph any textbook page and turn it into AI flashcards. Works with NCERT, coaching notes, and reference books. The fastest way to build a study deck.',
  openGraph: {
    title: 'Turn Textbook Photo into Flashcards — AI Scanning Guide',
    description: 'Photograph any textbook page and get AI flashcards instantly.',
  },
  alternates: {
    canonical: '/blog/textbook-photo-to-flashcards/'
  },
}

export default function TextbookPhotoToFlashcards() {
  return (
    <PageSection>
      <SectionLabel>Blog / How-To</SectionLabel>
      <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
        Turn a Textbook Photo into Flashcards
      </h1>
      <p className="mt-4 text-sm text-muted-foreground">The two-second workflow that replaces manual card creation.</p>

      <div className="mt-10 max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p>Indian students study from physical books — NCERT textbooks, coaching modules, reference books, and handwritten notes. If you have ever tried to create flashcards from these, you know the drill: read a paragraph, identify key facts, type them into a card template, repeat. It takes forever.</p>
        <p>Reviso eliminates this entirely. Here is the workflow:</p>

        <h2 className="text-xl font-semibold text-foreground pt-6">The Photograph-Generate-Review Workflow</h2>
        <p><strong>1. Photograph.</strong> Open Reviso and point your camera at any textbook page. The app crops and enhances the image automatically.</p>
        <p><strong>2. Generate.</strong> AI analyzes the page content — it reads text, recognizes diagram labels, identifies key concepts, and generates question-answer pairs.</p>
        <p><strong>3. Review.</strong> Preview the generated cards, edit any that need adjustment, and save them to your study deck. The cards enter FSRS scheduling immediately.</p>

        <h2 className="text-xl font-semibold text-foreground pt-6">Best Types of Textbook Pages for This</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Definition-heavy pages</strong> — Biology taxonomy, Physics terminology, Chemistry definitions</li>
          <li><strong>Tables and comparison charts</strong> — Periodic trends, differences between mitosis and meiosis, hormone functions</li>
          <li><strong>Process descriptions</strong> — Krebs cycle, photosynthesis, chemical reactions</li>
          <li><strong>Diagrams with labels</strong> — Human heart, neuron structure, plant anatomy</li>
        </ul>

        <p className="pt-4">
          <Link href="/features/photo-to-flashcards" className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300">
            Try photo-to-flashcards →
          </Link>
        </p>
      </div>
    </PageSection>
  )
}
