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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://abhishek-roshan-000.github.io/Reviso-landingPage'

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
      "description": "AI-powered flashcard learning app that turns notes, PDFs, and images into smart study materials with spaced repetition and active recall.",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Web, iOS, Android",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
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
      "name": "Reviso Labs, Inc.",
      "url": SITE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/Reviso-landingPage/Logo.png`
      },
      "sameAs": []
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
