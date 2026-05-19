import type { Metadata } from 'next'
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })
const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"] })

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://abhishek-roshan-000.github.io/Reviso-landingPage'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Reviso - AI-Powered Flashcard Learning App | Study Smarter',
    template: '%s | Reviso AI Flashcards',
  },
  description: 'Master any subject with AI-generated flashcards, spaced repetition, and intelligent review sessions. Turn notes, PDFs, and images into smart study materials. Study smarter, not harder with Reviso.',
  keywords: ['AI flashcards', 'study app', 'spaced repetition', 'active recall', 'AI learning tool', 'flashcard generator', 'study smarter', 'memory retention', 'note to flashcard', 'PDF to flashcards', 'student study tool', 'exam preparation', 'Reviso app'],
  authors: [{ name: 'Reviso Labs' }],
  creator: 'Reviso Labs, Inc.',
  publisher: 'Reviso Labs, Inc.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Reviso',
    title: 'Reviso - AI-Powered Flashcard Learning App',
    description: 'Master any subject with AI-generated flashcards and intelligent review sessions. Study smarter, not harder.',
    images: [
      {
        url: '/Reviso-landingPage/reviso-homescreen-mockup-og.png',
        width: 1200,
        height: 630,
        alt: 'Reviso AI Flashcard App Interface',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reviso - AI-Powered Flashcard Learning App',
    description: 'Master any subject with AI-generated flashcards and intelligent review sessions.',
    images: ['/Reviso-landingPage/reviso-homescreen-mockup-og.png'],
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
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  category: 'Education',
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
    <html lang="en" className="bg-background">
      <body className={`${geist.className} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  )
}
