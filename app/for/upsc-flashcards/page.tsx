import type { Metadata } from 'next'
import Link from 'next/link'
import { PageSection, SectionLabel, SectionHeading } from '@/components/page-section'

export const metadata: Metadata = {
  title: 'UPSC Flashcards App — Turn Notes & Current Affairs into AI Flashcards',
  description: 'Generate UPSC flashcards from current affairs notes, static GK textbooks, and NCERT sources. Free, AI-powered, with FSRS spaced repetition. Built for UPSC CSE Prelims & Mains.',
  openGraph: {
    title: 'UPSC Flashcards — Turn Your Notes & Current Affairs into AI Flashcards',
    description: 'Generate UPSC flashcards from current affairs and static GK. Free AI flashcard app.',
  },
}

export default function UpscFlashcardsPage() {
  return (
    <>
      <PageSection>
        <SectionLabel>UPSC Flashcards</SectionLabel>
        <SectionHeading>
          Your UPSC prep runs 1–3 years. FSRS was <span className="text-cyan-400">built for timelines like this</span>.
        </SectionHeading>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          UPSC CSE Prelims and Mains cover an enormous range — Indian Polity, Economy, History, Geography,
          Science & Technology, Environment, and Current Affairs of the past 12–18 months.
          The existing UPSC content ecosystem is dominated by static notes and current-affairs websites,
          not flashcard tools. This is exactly where Reviso fits: turn your daily notes, newspaper clippings,
          and standard textbooks into AI-generated flashcards that are reviewed at optimal intervals across
          your entire preparation timeline.
        </p>
      </PageSection>

      <PageSection>
        <SectionLabel>How It Works</SectionLabel>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border/50 bg-border/50 md:grid-cols-2">
          {[
            { title: 'Photograph Your Notes', desc: 'Daily current-affairs notes, NCERT pages, or standard reference books (Laxmikanth, Spectrum, GC Leong). AI extracts concepts instantly.' },
            { title: 'AI Generates Q&A Pairs', desc: 'Each concept becomes a question-answer card. Current affairs cards are dated so you can track which year/month they cover.' },
            { title: 'FSRS Schedules Review', desc: 'Cards resurface right before you would forget. The 1–3 year UPSC timeline is ideal for FSRS — intervals stretch naturally across months.' },
            { title: 'AI Scores Your Answers', desc: 'Type your answer during review. AI grades it and converts the score into a spaced-repetition rating. No self-grading guesswork.' },
          ].map((f) => (
            <div key={f.title} className="flex flex-col gap-4 bg-background p-8 lg:p-10">
              <h3 className="text-lg font-semibold tracking-[-0.02em]">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionLabel>Static GK vs Current Affairs</SectionLabel>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border/50 p-6">
            <h3 className="text-lg font-semibold tracking-[-0.02em]">Static GK</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Polity, History, Geography, Economy, Environment, Science & Tech — generate decks from
              standard textbooks once and review them on an ever-expanding FSRS schedule.
              These cards stay relevant for your entire prep.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-border/50 px-3 py-1 text-xs text-muted-foreground">Laxmikanth</span>
              <span className="rounded-full border border-border/50 px-3 py-1 text-xs text-muted-foreground">Spectrum</span>
              <span className="rounded-full border border-border/50 px-3 py-1 text-xs text-muted-foreground">GC Leong</span>
              <span className="rounded-full border border-border/50 px-3 py-1 text-xs text-muted-foreground">NCERTs</span>
            </div>
          </div>
          <div className="rounded-xl border border-border/50 p-6">
            <h3 className="text-lg font-semibold tracking-[-0.02em]">Current Affairs</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Photograph your daily current-affairs notes or paste text directly. Each card is tagged with
              its date for chronological review. Refresh older cards as new developments replace them.
              Current affairs content generates repeat visits — good for organic growth.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-border/50 px-3 py-1 text-xs text-muted-foreground">Daily notes → cards</span>
              <span className="rounded-full border border-border/50 px-3 py-1 text-xs text-muted-foreground">Date-tagged review</span>
              <span className="rounded-full border border-border/50 px-3 py-1 text-xs text-muted-foreground">Monthly refreshes</span>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <SectionLabel>FAQ</SectionLabel>
        <div className="mt-6 space-y-6">
          {[
            { q: 'Can I make flashcards from my daily current-affairs notes?', a: 'Yes. Photograph your handwritten daily notes or paste text from digital sources. Reviso AI converts them into dated flashcards automatically.' },
            { q: 'Does spaced repetition work over a 1–2 year UPSC prep timeline?', a: 'Yes — FSRS is specifically designed for long intervals. Cards you see in month 1 will resurface months later, right before you would forget them. This is harder to do manually but is exactly what the algorithm optimizes for.' },
            { q: 'How is Reviso different from a static UPSC flashcard PDF?', a: 'A static PDF cannot adapt to your individual memory. Reviso schedules each card based on your actual recall performance — cards you find easy appear less often, cards you struggle with appear more frequently.' },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-border/50 p-6">
              <h3 className="text-base font-medium">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Start generating UPSC flashcards — free.
          </h2>
          <p className="mt-4 max-w-lg text-sm text-muted-foreground">
            Download Reviso. Photograph your notes. AI builds your review deck in seconds.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.reviso.app"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 rounded-full border border-white/15 bg-white px-8 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Download from Play Store
          </a>
        </div>
      </PageSection>
    </>
  )
}
