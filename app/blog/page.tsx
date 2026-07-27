import type { Metadata } from 'next'
import Link from 'next/link'
import { PageSection, SectionLabel, SectionHeading, SectionSubtext } from '@/components/page-section'

export const metadata: Metadata = {
  title: 'Blog — Study Tips, Flashcard Guides & Exam Prep Strategies',
  description: 'Learn how to study smarter with AI flashcards, spaced repetition, and active recall. NEET, JEE, UPSC, and CBSE exam prep guides.',
  openGraph: {
    title: 'Reviso Blog — Study Smarter with AI Flashcards',
    description: 'Study tips, flashcard guides, and exam prep strategies for Indian competitive exams.',
  },
  alternates: {
    canonical: '/blog/'
  },
}

const posts = [
  { title: 'What Is Spaced Repetition?', href: '/blog/what-is-spaced-repetition', desc: 'A complete guide to the most efficient study method ever discovered.', tag: 'Study Techniques' },
  { title: 'Active Recall vs Spaced Repetition', href: '/blog/active-recall-vs-spaced-repetition', desc: 'The two most powerful study techniques — and how they complement each other.', tag: 'Study Techniques' },
  { title: 'How to Make Flashcards from Notes', href: '/blog/how-to-make-flashcards-from-notes', desc: 'Three methods, from manual to fully automated AI generation.', tag: 'How-To' },
  { title: 'The Forgetting Curve Explained', href: '/blog/forgetting-curve-explained', desc: 'Why we forget 50% of new information within hours — and how to stop it.', tag: 'Study Science' },
  { title: 'Spaced Repetition for NEET', href: '/blog/spaced-repetition-for-neet', desc: 'Why NEET is the best exam for spaced repetition — and how to use it.', tag: 'NEET Prep' },
  { title: 'Convert NCERT Notes to Flashcards', href: '/blog/convert-ncert-notes-to-flashcards', desc: 'Turn NCERT textbook pages into AI flashcards. Photograph, generate, review.', tag: 'How-To' },
  { title: 'NCERT to Flashcards for NEET', href: '/blog/ncert-to-flashcards-neet', desc: 'Convert every NCERT Biology, Chemistry, Physics chapter into AI flashcards.', tag: 'NEET Prep' },
  { title: 'Active Recall Techniques for NEET', href: '/blog/active-recall-for-neet', desc: 'Active recall techniques specifically tailored for NEET UG preparation.', tag: 'NEET Prep' },
  { title: 'How to Memorize Fast for Exams', href: '/blog/how-to-memorize-fast-for-exams', desc: 'Science-backed methods that work for NEET, JEE, UPSC, and board exams.', tag: 'Study Techniques' },
  { title: 'Turn a Textbook Photo into Flashcards', href: '/blog/textbook-photo-to-flashcards', desc: 'The two-second workflow that replaces manual card creation.', tag: 'How-To' },
  { title: 'UPSC Current Affairs Flashcards', href: '/blog/upsc-current-affairs-flashcards', desc: 'Turn daily current affairs notes into AI-powered flashcards.', tag: 'UPSC Prep' },
  { title: 'JEE Physics Formula Flashcards', href: '/blog/jee-physics-formula-flashcards', desc: 'Lock formulas into long-term memory with AI-generated flashcards.', tag: 'JEE Prep' },
  { title: 'What Is FSRS?', href: '/blog/what-is-fsrs', desc: 'The Free Spaced Repetition Scheduler explained.', tag: 'Study Science' },
  { title: 'FSRS vs SM-2', href: '/blog/fsrs-vs-sm2', desc: 'Why modern flashcard apps are moving from SM-2 to FSRS.', tag: 'Study Science' },
  { title: 'How Many Flashcards Per Day?', href: '/blog/how-many-flashcards-per-day', desc: 'Find your ideal daily flashcard count for NEET, JEE, UPSC & boards.', tag: 'Study Tips' },
  { title: 'Best App for NEET Revision', href: '/blog/best-apps-neet-revision', desc: 'Reviso, czed, FlashGenius, and other NEET revision apps compared.', tag: 'NEET Prep' },
]

export default function BlogIndexPage() {
  return (
    <PageSection>
      <SectionLabel>Blog</SectionLabel>
      <SectionHeading>
        Study smarter with <span className="underline decoration-foreground/30 underline-offset-[6px]">flashcard science</span>.
      </SectionHeading>
      <SectionSubtext>
        Guides, strategies, and explainers for NEET, JEE, UPSC, CBSE — and the memory science behind all of them.
      </SectionSubtext>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border/50 bg-border/50 md:grid-cols-2">
        {posts.map((p) => (
          <Link key={p.href} href={p.href} className="flex flex-col gap-3 bg-background p-8 transition-colors hover:bg-foreground/[0.02] lg:p-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/40">{p.tag}</span>
            <h2 className="text-lg font-semibold tracking-[-0.02em]">{p.title}</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
          </Link>
        ))}
      </div>
    </PageSection>
  )
}
