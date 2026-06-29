import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { TrustBar } from "@/components/landing/trust-bar";
import { Features } from "@/components/landing/features";
import { AutoScoring } from "@/components/landing/auto-scoring";
import { ImageToCards } from "@/components/landing/image-to-cards";
import { Analytics } from "@/components/landing/analytics";
import { HowItWorks } from "@/components/landing/how-it-works";
import { UseCases } from "@/components/landing/use-cases";
import { Testimonials } from "@/components/landing/testimonials";
import { Pricing } from "@/components/landing/pricing";
import { FAQ } from "@/components/landing/faq";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://studywithreviso.in'

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": SITE_URL,
      "name": "Reviso",
      "description": "AI-Powered Flashcard Learning App",
      "publisher": {
        "@id": `${SITE_URL}/#organization`
      }
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#application`,
      "name": "Reviso",
      "url": SITE_URL,
      "description": "AI-powered flashcard learning app that turns notes and images into smart study materials with spaced repetition and active recall.",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Android, iOS",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "screenshot": [
        { "@type": "ImageObject", "url": `${SITE_URL}/reviso-homescreen-mockup-half-trans.png` }
      ],
      "featureList": "AI flashcard generation, spaced repetition, progress analytics, adaptive review, image-to-cards, AI answer scoring",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1250",
        "bestRating": "5",
        "worstRating": "1"
      },
      "author": {
        "@id": `${SITE_URL}/#organization`
      }
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      "name": "Reviso",
      "url": SITE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/Logo.png`
      },
      "sameAs": []
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Reviso?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reviso is an AI-powered flashcard learning app that turns your notes and images into smart flashcards. It uses spaced repetition to help you retain information longer and study more efficiently."
          }
        },
        {
          "@type": "Question",
          "name": "Is Reviso free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Reviso is completely free. You get 100 credits every day that refresh after 24 hours, full spaced repetition system, and Android & iOS access. The free plan includes ads."
          }
        },
        {
          "@type": "Question",
          "name": "How does spaced repetition work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reviso uses the FSRS (Free Spaced Repetition Scheduler) algorithm, the same science-backed system used by Anki. Cards resurface right before you would forget them, maximizing memory retention while minimizing study time."
          }
        },
        {
          "@type": "Question",
          "name": "Can I import cards from Anki?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reviso is built on the same FSRS algorithm as Anki, making it fully compatible with Anki's scheduling system. Support for direct .apkg import is coming soon."
          }
        },
        {
          "@type": "Question",
          "name": "What happens to my data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your study data is stored locally on your device by default. You can sign in with Google to save your credit balance and ad-free status to your account. We never sell your data or use your study content to train AI models."
          }
        },
        {
          "@type": "Question",
          "name": "Does Reviso work offline?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Core review functionality works offline. AI features like card generation and answer scoring require an internet connection. Your study data is stored on your device."
          }
        },
        {
          "@type": "Question",
          "name": "What platforms are supported?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reviso is available on Android and iOS."
          }
        },
        {
          "@type": "Question",
          "name": "How does Reviso generate flashcards from images?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reviso uses AI vision technology to analyze photos of textbooks, handwritten notes, or lecture slides. It extracts key concepts and automatically generates question-answer pairs. You can preview, edit, and select which cards to save."
          }
        },
        {
          "@type": "Question",
          "name": "How does the AI answer scoring work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When reviewing flashcards, just type your answer and Reviso AI automatically scores it and converts it into a spaced repetition rating so you do not have to grade yourself."
          }
        },
        {
          "@type": "Question",
          "name": "What makes Reviso different from other flashcard apps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unlike traditional flashcard apps, Reviso uses AI to auto-generate cards from your study materials and auto-score your written answers. It combines an Anki-compatible spaced repetition algorithm with image scanning, progress heatmaps, daily goal tracking."
          }
        }
      ]
    }
  ]
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Hero />
      <TrustBar />
      <Features />
      <AutoScoring />
      <ImageToCards />
      <Analytics />
      <HowItWorks />
      <UseCases />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
