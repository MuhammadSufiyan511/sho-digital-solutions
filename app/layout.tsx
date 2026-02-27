import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    template: '%s | SHO Digital Solutions',
    default: 'SHO Digital Solutions — Smart Websites. Real Growth.',
  },
  description:
    'SHO Digital Solutions builds high-performance, revenue-generating websites for businesses across all industries. Expert web development, e-commerce, and digital strategy.',
  keywords: ['web development', 'digital agency', 'website design', 'e-commerce', 'SEO', 'SHO Digital'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shodigital.com',
    siteName: 'SHO Digital Solutions',
    title: 'SHO Digital Solutions — Smart Websites. Real Growth.',
    description: 'We build revenue-generating websites that drive real business growth.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SHO Digital Solutions',
    description: 'Smart Websites. Real Growth.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
