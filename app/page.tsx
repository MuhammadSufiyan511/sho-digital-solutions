import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import TrustStrip from '@/components/sections/TrustStrip'
import TechStackTicker from '@/components/sections/TechStackTicker'
import KineticTypographySection from '@/components/sections/KineticTypographySection'
import ServicesHighlight from '@/components/sections/ServicesHighlight'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import ProcessSection from '@/components/sections/ProcessSection'
import PortfolioPreview from '@/components/sections/PortfolioPreview'
import IndustriesSection from '@/components/sections/IndustriesSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Home | Smart Websites for Growing Businesses',
  description:
    'SixByte Technologies helps businesses build a more polished, credible, and conversion focused online presence.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <TechStackTicker />
      <KineticTypographySection />
      <ServicesHighlight />
      <WhyChooseUs />
      <ProcessSection />
      <PortfolioPreview />
      <IndustriesSection />
      <TestimonialsSection limit={3} />
      <CTASection />
    </>
  )
}
