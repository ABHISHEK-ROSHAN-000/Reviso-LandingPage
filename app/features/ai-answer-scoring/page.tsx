import type { Metadata } from 'next'
import { PageSection, SectionLabel, SectionHeading } from '@/components/page-section'

export const metadata: Metadata = {
  title: 'AI Answer Scoring — Auto-Graded Flashcard Review | Reviso',
  description: 'Type your answer during flashcard review. AI scores it automatically and converts to a spaced-repetition rating. The only flashcard app with AI-graded written answers for Indian exams.',
  openGraph: {
    title: 'AI Answer Scoring — Auto-Graded Flashcard Review',
    description: 'Type your answer. AI scores it. The most defensible feature in the Reviso app.',
  },
}

export default function AiAnswerScoringPage() {
  return (
    <>
      <PageSection>
        <SectionLabel>AI Answer Scoring</SectionLabel>
        <SectionHeading>
          Your <span className="text-cyan-400">most underrated</span> study tool.
        </SectionHeading>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Almost every flashcard app asks you to grade yourself: "Did you get it right? Rate Again/Hard/Good/Easy."
          The problem is that self-grading is unreliable — you either remember the answer (and rate it too generously)
          or do not (and learn nothing). Reviso replaces self-grading with AI-scored written answers.
          You type your answer. The AI compares it semantically to the correct answer and assigns a score.
          That score is automatically converted to an Again/Hard/Good/Easy rating for the spaced-repetition scheduler.
        </p>
      </PageSection>

      <PageSection>
        <SectionLabel>How It Works</SectionLabel>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border/50 bg-border/50 md:grid-cols-3">
          {[
            { step: '01', title: 'See the Question', desc: 'The front of the card displays your question — just like any flashcard app. But instead of flipping and self-grading, you type your answer.' },
            { step: '02', title: 'Type Your Answer', desc: 'Write what you remember in your own words. You are not selecting from multiple choices — you are demonstrating actual recall, which is a stronger memory test.' },
            { step: '03', title: 'AI Scores & Schedules', desc: 'The AI compares your answer to the expected answer using semantic matching. It scores your answer and converts it to an FSRS rating automatically. No self-grading needed.' },
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
        <SectionLabel>Why Typed Recall Wins</SectionLabel>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border/50 p-6">
            <h3 className="text-lg font-semibold tracking-[-0.02em]">Stronger Memory Traces</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Cognitive science research consistently shows that active recall — pulling information
              out of memory rather than recognizing it — produces stronger, longer-lasting memory traces.
              Typing your answer is pure active recall. Flipping a card and deciding "yeah, I knew that"
              is passive recognition. They are not the same thing, and the brain treats them differently.
            </p>
          </div>
          <div className="rounded-xl border border-border/50 p-6">
            <h3 className="text-lg font-semibold tracking-[-0.02em]">No More Self-Grading Bias</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Self-grading is unreliable. Students consistently over-rate their recall on flip cards
              (the "I knew that" effect) or under-rate it (impostor syndrome). AI scoring gives you
              an objective third party that evaluates your actual answer, not your confidence level.
              The resulting spaced-repetition schedule is more accurate.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <SectionLabel>FAQ</SectionLabel>
        <div className="mt-6 space-y-6">
          {[
            { q: 'How does AI grading actually work?', a: 'Reviso uses semantic matching — it compares the meaning of your typed answer to the expected answer. It understands synonyms, paraphrasing, and partial correctness. Your answer does not need to be word-for-word identical to get full credit.' },
            { q: 'Is it more accurate than self-grading?', a: 'For most students, yes. The AI is consistent — it applies the same criteria every time. Self-grading varies based on mood, confidence, and how recently you saw the material. The AI removes that variability.' },
            { q: 'Can I override the AI score if I disagree?', a: 'Yes. After the AI scores your answer, you can manually adjust the rating if you feel the AI was too generous or too strict.' },
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
