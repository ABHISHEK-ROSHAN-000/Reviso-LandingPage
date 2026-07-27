import type { Metadata } from 'next'
import Link from 'next/link'
import { PageSection, SectionLabel } from '@/components/page-section'

export const metadata: Metadata = {
  title: 'JEE Physics Formula Flashcards — AI-Generated from Your Formula Sheet',
  description: 'Turn your JEE Physics formula sheets into AI-generated flashcards. Photograph, generate, and review with FSRS spaced repetition. Perfect for Main & Advanced.',
  openGraph: {
    title: 'JEE Physics Formula Flashcards — AI-Generated',
    description: 'Turn JEE Physics formula sheets into AI flashcards. Photograph, generate, review.',
  },
  alternates: {
    canonical: '/blog/jee-physics-formula-flashcards/'
  },
}

export default function JeePhysicsFormulaFlashcards() {
  return (
    <PageSection>
      <SectionLabel>Blog / JEE Prep</SectionLabel>
      <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
        JEE Physics Formula Flashcards
      </h1>
      <p className="mt-4 text-sm text-muted-foreground">The fastest way to lock JEE Physics formulas into long-term memory.</p>

      <div className="mt-10 max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p>JEE Physics tests your ability to recall and apply formulas under time pressure. There is no substitute for having formulas at instant recall — the difference between a 3-minute solution and a 30-second solution is often whether you knew the formula immediately or had to derive it.</p>

        <h2 className="text-xl font-semibold text-foreground pt-6">From Formula Sheet to Flashcard Deck</h2>
        <p>Most JEE aspirants have a compiled formula sheet or a formula book. Instead of re-reading it (passive review), turn it into flashcards: photograph each section of your formula sheet with Reviso, AI extracts individual formulas, and creates Q&A cards. "Question: Formula for centripetal force. Answer: F = mv²/r."</p>

        <h2 className="text-xl font-semibold text-foreground pt-6">Key Physics Topics for Formula Flashcards</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Mechanics:</strong> Kinematics equations, Newton laws, work-energy theorem, collision formulas</li>
          <li><strong>Electrostatics & Current:</strong> Coulomb law, electric field formulas, Ohm law, Kirchhoff rules</li>
          <li><strong>Magnetism & EMI:</strong> Magnetic field formulas, Faraday law, Lenz law, AC circuit formulas</li>
          <li><strong>Optics:</strong> Lens formula, mirror formula, refractive index, prism formulas</li>
          <li><strong>Modern Physics:</strong> Photoelectric effect, Bohr model, nuclear decay formulas</li>
        </ul>

        <p className="pt-4">
          <Link href="/for/jee-flashcards" className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300">
            Build your JEE formula deck →
          </Link>
        </p>
      </div>
    </PageSection>
  )
}
