import type { Metadata } from 'next'
import { PageSection, SectionLabel, SectionHeading } from '@/components/page-section'
import { CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing — Reviso Is Free | 50 AI Credits Daily',
  description: 'Reviso is free forever. 50 AI generation credits daily, unlimited manual review, ad-supported. No paid tier, no credit card required.',
  openGraph: {
    title: 'Pricing — Reviso Is Free',
    description: '50 free AI credits daily. No paid tier. No credit card.',
  },
}

export default function PricingPage() {
  return (
    <PageSection>
      <SectionLabel>Pricing</SectionLabel>
      <SectionHeading>
        <span className="text-cyan-400">Free</span> forever. No paid tier. No credit card.
      </SectionHeading>
      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Reviso is genuinely free. There is no premium subscription, no pro tier, and no trial period.
        The app is supported by ads. Every student — whether preparing for NEET, JEE, UPSC, or boards —
        gets the same full feature set at no cost.
      </p>

      <div className="mt-16 mx-auto max-w-lg">
        <div className="rounded-2xl border border-border/50 bg-background p-8 lg:p-10">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-semibold tracking-[-0.03em]">₹0</span>
            <span className="text-sm text-muted-foreground">/ month</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">Free forever plan</p>

          <ul className="mt-8 space-y-4">
            {[
              '50 AI generation credits every day (refresh every 24h)',
              'Unlimited manual card review',
              'FSRS spaced repetition algorithm',
              'Photo-to-flashcard scanning (vision AI)',
              'AI answer scoring during review',
              'Study progress analytics & heatmaps',
              'Daily goal tracking (Casual to Intense)',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" strokeWidth={1.5} />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-xl bg-foreground/5 p-4">
            <p className="text-xs text-muted-foreground">
              <strong>What happens when credits run out?</strong> You can still review cards manually —
              just rate each card with Again/Hard/Good/Easy instead of using the AI scoring feature.
              Manual review is unlimited and always free.
            </p>
          </div>

          <a
            href="https://play.google.com/store/apps/details?id=com.reviso.app"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex w-full items-center justify-center rounded-full border border-white/15 bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Download Free
          </a>
        </div>
      </div>
    </PageSection>
  )
}
