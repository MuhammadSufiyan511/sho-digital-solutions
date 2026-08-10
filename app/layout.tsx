import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import BackToTop from '@/components/layout/BackToTop'
import { Plus_Jakarta_Sans } from 'next/font/google'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: {
    template: '%s | SHO Digital Solutions',
    default: 'SHO Digital Solutions | Smart Websites for Growing Businesses',
  },
  description:
    'SHO Digital Solutions creates polished, high-converting websites and digital experiences for businesses that want to look credible and grow with confidence.',
  keywords: [
    'web development',
    'digital agency',
    'business portfolio',
    'website design',
    'e-commerce',
    'SEO',
    'SHO Digital Solutions',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shodigital.com',
    siteName: 'SHO Digital Solutions',
    title: 'SHO Digital Solutions | Smart Websites for Growing Businesses',
    description:
      'We build credible digital experiences that help businesses win trust, convert better, and grow with clarity.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SHO Digital Solutions',
    description: 'Smart websites for growing businesses.',
  },
  icons: {
    icon: '/assets/logo.webp',
    shortcut: '/assets/logo.webp',
    apple: '/assets/logo.webp',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
