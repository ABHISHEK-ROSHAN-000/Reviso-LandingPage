import type { Metadata } from 'next'
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/landing/header'
import { Footer } from '@/components/landing/footer'

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })
const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"] })

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://studywithreviso.in'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Reviso — Free AI Flashcard App for NEET, JEE & UPSC | Study with Reviso',
    template: '%s | Reviso AI Flashcards',
  },
  description: 'AI-powered flashcard app for Indian competitive exams. Turn NCERT notes, textbook photos, and handwritten notes into smart flashcards. Free, FSRS-based spaced repetition. Built for NEET, JEE, UPSC & CBSE.',
  keywords: ['AI flashcards', 'NEET flashcards app', 'JEE flashcards', 'UPSC flashcards', 'spaced repetition', 'study app India', 'flashcard generator', 'NCERT flashcards', 'Reviso app', 'free flashcard app', 'exam preparation app', 'ai flashcard generator India'],
  authors: [{ name: 'Reviso' }],
  applicationName: 'Reviso AI Flashcards',
  creator: 'Reviso',
  publisher: 'Reviso',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Reviso AI Flashcards',
    title: 'Reviso — Free AI Flashcard App for NEET, JEE & UPSC',
    description: 'Turn notes, textbook photos, and handwritten pages into AI flashcards. Free spaced repetition app built for Indian competitive exams.',
    images: [
      {
        url: '/reviso-homescreen-mockup-og.png',
        width: 1200,
        height: 630,
        alt: 'Reviso AI Flashcard App Interface',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reviso — Free AI Flashcard App',
    description: 'Turn notes into AI flashcards. Free for NEET, JEE & UPSC prep.',
    images: ['/reviso-homescreen-mockup-og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'NFzf-c6yFuqzCShI06_hNiB8WuRxK1gYEnVWIWaow84',
  },
  category: 'Education',
  icons: {
    icon: '/Logo%201%20r%201.png',
    apple: '/Logo%201%20r%201.png',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050505',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className="bg-background">
      <body className={`${geist.className} antialiased bg-background text-foreground`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
