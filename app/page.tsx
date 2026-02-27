import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import ServicesHighlight from '@/components/sections/ServicesHighlight'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import ProcessSection from '@/components/sections/ProcessSection'
import PortfolioPreview from '@/components/sections/PortfolioPreview'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'SHO Digital Solutions — Smart Websites. Real Growth.',
  description:
    'We build revenue-generating websites for businesses ready to grow. Web development, e-commerce, SEO, and digital strategy — all under one roof.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesHighlight />
      <WhyChooseUs />
      <ProcessSection />
      <PortfolioPreview />
      <TestimonialsSection limit={3} />
      <CTASection />
    </>
  )
}
