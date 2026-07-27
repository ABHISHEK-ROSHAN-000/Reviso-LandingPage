import type { Metadata } from 'next'
import { PageSection, SectionLabel, SectionHeading } from '@/components/page-section'

export const metadata: Metadata = {
  title: 'AI Flashcard Generator — Notes to Flashcards Free | Reviso',
  description: 'Turn your notes, NCERT text, and study materials into AI-generated flashcards. Free, no manual card-writing. Built for NEET, JEE, UPSC & CBSE students.',
  openGraph: {
    title: 'AI Flashcard Generator — Notes to Flashcards Free',
    description: 'Turn notes into AI flashcards instantly. Free for Indian competitive exam prep.',
  },
}

export default function AiFlashcardGeneratorPage() {
  return (
    <>
      <PageSection>
        <SectionLabel>AI Flashcard Generator</SectionLabel>
        <SectionHeading>
          From notes to flashcards in <span className="text-cyan-400">seconds</span>, not hours.
        </SectionHeading>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Manual card-writing is the biggest barrier to using flashcards effectively.
          Every hour you spend writing cards is an hour you are not reviewing them.
          Reviso generates flashcards from your study materials automatically — paste text,
          type notes, or photograph a page, and AI handles the rest.
        </p>
      </PageSection>

      <PageSection>
        <SectionLabel>How It Works</SectionLabel>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border/50 bg-border/50 md:grid-cols-3">
          {[
            { step: '01', title: 'Input Your Material', desc: 'Paste text, type notes, or photograph a textbook page. Reviso accepts NCERT content, handwritten notes, coaching material, and digital documents.' },
            { step: '02', title: 'AI Generates Cards', desc: 'Our AI identifies key concepts, facts, and relationships in your material. It creates question-answer pairs designed for active recall testing.' },
            { step: '03', title: 'Review & Save', desc: 'Preview the generated cards. Edit if needed, select which ones to keep, and add them to your study deck. Start reviewing immediately.' },
          ].map((s) => (
            <div key={s.step} className="flex flex-col gap-4 bg-background p-8 lg:p-10">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/40">Step {s.step}</span>
              <h3 className="text-lg font-semibold tracking-[-0.02em]">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionLabel>Free Tier</SectionLabel>
        <div className="rounded-xl border border-border/50 p-8">
          <h3 className="text-2xl font-semibold tracking-[-0.02em]">50 free AI cards every day.</h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            No credit card. No paid tier. 50 AI generation credits refresh every 24 hours.
            If you run through your daily credits, you can still review cards manually —
            unlimited manual review is always free. The free plan is ad-supported.
          </p>
        </div>
      </PageSection>

      <PageSection>
        <SectionLabel>FAQ</SectionLabel>
        <div className="mt-6 space-y-6">
          {[
            { q: 'How does Reviso turn my notes into flashcards?', a: 'Reviso uses AI to analyze your input text — it identifies key concepts, definitions, and factual relationships, then generates question-answer pairs. The AI understands context, so cards are meaningful rather than random phrases.' },
            { q: 'How many can I generate free per day?', a: '50 credits per day. Each card generation costs 1 credit. Credits refresh automatically every 24 hours. Manual review is unlimited and always free.' },
            { q: 'Can I edit AI-generated cards afterward?', a: 'Yes. Generated cards appear in a preview screen where you can edit the question, answer, or delete cards before saving them to your deck.' },
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
