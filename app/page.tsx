import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import ServicesHighlight from '@/components/sections/ServicesHighlight'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import ProcessSection from '@/components/sections/ProcessSection'
import PortfolioPreview from '@/components/sections/PortfolioPreview'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Home',
  description:
    'SixByte Technologies helps businesses build a more polished, credible, and conversion-focused online presence.',
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
