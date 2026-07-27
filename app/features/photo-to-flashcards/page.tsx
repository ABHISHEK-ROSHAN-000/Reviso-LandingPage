import type { Metadata } from 'next'
import { PageSection, SectionLabel, SectionHeading } from '@/components/page-section'

export const metadata: Metadata = {
  title: 'Photo to Flashcards — AI Flashcard App with Camera Scan | Reviso',
  description: 'Photograph textbooks, handwritten notes, and NCERT pages. AI converts them into smart flashcards instantly. The best photo-to-card converter for Indian students.',
  openGraph: {
    title: 'Photo to Flashcards — Camera Scan to AI Cards',
    description: 'Photograph your notes and AI generates flashcards instantly. Free for students.',
  },
}

export default function PhotoToFlashcardsPage() {
  return (
    <>
      <PageSection>
        <SectionLabel>Photo to Flashcards</SectionLabel>
        <SectionHeading>
          Point your camera at any page. AI does the <span className="text-cyan-400">rest</span>.
        </SectionHeading>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Indian students study from physical textbooks, handwritten notes, coaching handouts,
          and printed practice sets more often than digital documents. Reviso lets you photograph
          any of these — an NCERT Biology page, a formula sheet, a diagram, or your own notes —
          and converts them into AI-generated flashcards automatically. No typing required.
        </p>
      </PageSection>

      <PageSection>
        <SectionLabel>What You Can Scan</SectionLabel>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border/50 bg-border/50 md:grid-cols-2">
          {[
            { title: 'NCERT Textbooks', desc: 'Class 11 and 12 Biology, Chemistry, Physics, and Maths. Photograph any page and get concept-specific Q&A cards.' },
            { title: 'Handwritten Notes', desc: 'Your own revision notes, classroom notes, or summarized pages. AI recognizes handwriting and extracts key concepts.' },
            { title: 'Formula Sheets', desc: 'Physics formulas, chemistry reactions, mathematical derivations — each formula becomes a recall card automatically.' },
            { title: 'Diagrams & Charts', desc: 'NEET Biology diagrams, periodic tables, flowcharts. AI reads labels and generates cards that test identification and function.' },
          ].map((f) => (
            <div key={f.title} className="flex flex-col gap-4 bg-background p-8 lg:p-10">
              <h3 className="text-lg font-semibold tracking-[-0.02em]">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionLabel>Why This Matters</SectionLabel>
        <div className="rounded-xl border border-border/50 p-8">
          <h3 className="text-xl font-semibold tracking-[-0.02em]">The fastest way from study material to active recall.</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            The biggest friction point in flashcard study is card creation. Typing out every card
            takes longer than reviewing it. Reviso eliminates that friction entirely —
            photograph, generate, review. For students studying from physical books,
            this is the difference between actually using flashcards and planning to.
          </p>
        </div>
      </PageSection>

      <PageSection>
        <SectionLabel>FAQ</SectionLabel>
        <div className="mt-6 space-y-6">
          {[
            { q: 'Can I photograph a handwritten page?', a: 'Yes. Reviso uses vision AI to read handwriting and convert it into digital text, then generates flashcards from the extracted content.' },
            { q: 'Does it work with NCERT textbook photos?', a: 'Yes. NCERT textbooks are the primary use case. Photograph any NCERT page and get chapter-specific flashcards generated automatically.' },
            { q: 'What languages does OCR support?', a: 'English and Hindi are supported. Confirm full language support with the Reviso team before relying on other languages.' },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-border/50 p-6">
              <h3 className="text-base font-medium">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </div>
          ))}
        </div>
      </PageSection>
    </>
  )
}
