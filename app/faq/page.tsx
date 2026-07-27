import type { Metadata } from 'next'
import { PageSection, SectionLabel, SectionHeading } from '@/components/page-section'

export const metadata: Metadata = {
  title: 'FAQ — Frequently Asked Questions About Reviso',
  description: 'Answers to common questions about Reviso: Is it free? How does AI flashcard generation work? Does it work for NEET/JEE/UPSC? What is FSRS?',
  openGraph: {
    title: 'FAQ — Frequently Asked Questions About Reviso',
    description: 'Is Reviso free? How does AI scoring work? Answers to common questions.',
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question", "name": "What is Reviso?",
      "acceptedAnswer": { "@type": "Answer", "text": "Reviso is an AI-powered flashcard learning app that turns your notes and images into smart flashcards. It uses FSRS spaced repetition to help you retain information longer and study more efficiently." }
    },
    {
      "@type": "Question", "name": "Is Reviso free?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Reviso is completely free. You get 50 AI credits every day, full FSRS spaced repetition system, and Android access. The free plan includes ads." }
    },
    {
      "@type": "Question", "name": "How does Reviso generate flashcards from images?",
      "acceptedAnswer": { "@type": "Answer", "text": "Reviso uses AI vision technology to analyze photos of textbooks, handwritten notes, or lecture slides. It extracts key concepts and automatically generates question-answer pairs." }
    },
    {
      "@type": "Question", "name": "How does the AI answer scoring work?",
      "acceptedAnswer": { "@type": "Answer", "text": "When reviewing flashcards, just type your answer and Reviso AI automatically scores it and converts it into a spaced repetition rating." }
    },
    {
      "@type": "Question", "name": "How does spaced repetition work in Reviso?",
      "acceptedAnswer": { "@type": "Answer", "text": "Reviso uses the FSRS (Free Spaced Repetition Scheduler) algorithm, the same science-backed system used by Anki. Cards resurface right before you would forget them." }
    },
    {
      "@type": "Question", "name": "Can I use Reviso for NEET preparation?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Reviso is built for NEET UG preparation. You can photograph NCERT Biology, Chemistry, and Physics pages to generate flashcards, and the FSRS algorithm adapts to your multi-year prep timeline." }
    },
    {
      "@type": "Question", "name": "Can I use Reviso for JEE preparation?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Reviso works well for JEE Main and Advanced. Photograph formula sheets and derivation notes, and AI generates recall cards. The AI answer scoring is particularly useful for formula recall practice." }
    },
    {
      "@type": "Question", "name": "Can I use Reviso for UPSC preparation?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Reviso is designed for the long UPSC prep timeline. Turn current affairs notes and static GK textbooks into dated flashcards that FSRS schedules across months." }
    },
    {
      "@type": "Question", "name": "What platforms are supported?",
      "acceptedAnswer": { "@type": "Answer", "text": "Reviso is available on Android." }
    },
    {
      "@type": "Question", "name": "Does Reviso work offline?",
      "acceptedAnswer": { "@type": "Answer", "text": "Core review functionality works offline. AI features like card generation and answer scoring require an internet connection. Your study data is stored on your device." }
    },
    {
      "@type": "Question", "name": "Can I import cards from Anki?",
      "acceptedAnswer": { "@type": "Answer", "text": "Reviso is built on the same FSRS algorithm as Anki, making it compatible with Anki scheduling. Support for direct .apkg import is coming soon." }
    },
    {
      "@type": "Question", "name": "What makes Reviso different from other flashcard apps?",
      "acceptedAnswer": { "@type": "Answer", "text": "Reviso uniquely combines AI-generated cards from photos, AI-graded answer scoring during review, and FSRS spaced repetition. No other India-focused flashcard app has all three." }
    },
  ]
}

const faqItems = [
  { q: 'What is Reviso?', a: 'Reviso is an AI-powered flashcard learning app that turns your notes and images into smart flashcards. It uses FSRS spaced repetition to help you retain information longer and study more efficiently.' },
  { q: 'Is Reviso free?', a: 'Yes. Reviso is completely free. You get 50 AI credits every day, full FSRS spaced repetition system, and Android access. The free plan includes ads.' },
  { q: 'How does Reviso generate flashcards from images?', a: 'Reviso uses AI vision technology to analyze photos of textbooks, handwritten notes, or lecture slides. It extracts key concepts and automatically generates question-answer pairs.' },
  { q: 'How does the AI answer scoring work?', a: 'When reviewing flashcards, just type your answer and Reviso AI automatically scores it and converts it into a spaced repetition rating — no self-grading required.' },
  { q: 'How does spaced repetition work in Reviso?', a: 'Reviso uses the FSRS (Free Spaced Repetition Scheduler) algorithm, the same science-backed system used by Anki. Cards resurface right before you would forget them, maximizing memory retention while minimizing study time.' },
  { q: 'Can I use Reviso for NEET preparation?', a: 'Yes. Reviso is built for NEET UG preparation. You can photograph NCERT Biology, Chemistry, and Physics pages to generate flashcards, and the FSRS algorithm adapts to your 1-2 year prep timeline.' },
  { q: 'Can I use Reviso for JEE preparation?', a: 'Yes. Reviso works well for JEE Main and Advanced. Photograph formula sheets and derivation notes, and AI generates recall cards. AI answer scoring is particularly useful for formula recall practice.' },
  { q: 'Can I use Reviso for UPSC preparation?', a: 'Yes. Reviso is designed for the long UPSC prep timeline. Turn current affairs notes and static GK textbooks into dated flashcards that FSRS schedules across months.' },
  { q: 'What platforms are supported?', a: 'Reviso is available on Android.' },
  { q: 'Does Reviso work offline?', a: 'Core review functionality works offline. AI features like card generation and answer scoring require an internet connection. Your study data is stored on your device.' },
  { q: 'Can I import cards from Anki?', a: 'Reviso is built on the same FSRS algorithm as Anki, making it compatible with Anki scheduling. Support for direct .apkg import is coming soon.' },
  { q: 'What happens to my data?', a: 'Your study data is stored locally on your device by default. You can sign in with Google to save your credit balance and ad-free status to your account. We never sell your data or use your study content to train AI models.' },
  { q: 'What makes Reviso different from other flashcard apps?', a: 'Reviso uniquely combines AI-generated cards from photos, AI-graded answer scoring during review, and FSRS spaced repetition. No other India-focused flashcard app has all three.' },
]

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageSection>
        <SectionLabel>FAQ</SectionLabel>
        <SectionHeading>
          Questions? <span className="underline decoration-foreground/30 underline-offset-[6px]">Answers</span>.
        </SectionHeading>

        <div className="mt-12 divide-y divide-border/50">
          {faqItems.map((item, i) => (
            <div key={i} className="flex gap-4 py-6">
              <span className="shrink-0 pt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/40">[Q{i + 1}]</span>
              <div className="flex-1">
                <h3 className="text-base font-medium tracking-[-0.01em]">{item.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </PageSection>
    </>
  )
}
