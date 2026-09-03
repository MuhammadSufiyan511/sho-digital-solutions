import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import TrustStrip from '@/components/sections/TrustStrip'
import TechStackTicker from '@/components/sections/TechStackTicker'
import KineticTypographySection from '@/components/sections/KineticTypographySection'
import ServicesHighlight from '@/components/sections/ServicesHighlight'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import ProcessSection from '@/components/sections/ProcessSection'
import PortfolioPreview from '@/components/sections/PortfolioPreview'
import PricingPreviewSection from '@/components/sections/PricingPreviewSection'
import IndustriesSection from '@/components/sections/IndustriesSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Web Development Islamabad & Custom Software Solutions | SixByte Technologies',
  description:
    'SixByte Technologies delivers custom website design, Next.js web development in Islamabad, e-commerce development, and tailored software solutions that drive real growth.',
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
      <PricingPreviewSection />
      <IndustriesSection />
      <TestimonialsSection limit={3} />
      <CTASection />
    </>
  )
}
