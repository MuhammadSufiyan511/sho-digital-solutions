import type { Metadata } from 'next'
import type { ComponentType } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, CarFront, HeartPulse, Landmark, Scale, ShoppingBag, UtensilsCrossed } from 'lucide-react'
import { industries } from '@/lib/data'
import CTASection from '@/components/sections/CTASection'
import PageHero from '@/components/sections/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Industries',
  description: 'Industry-focused website and digital system solutions for businesses that need a more tailored fit.',
}

const industryIcons: Record<string, ComponentType<{ className?: string }>> = {
  restaurant: UtensilsCrossed,
  healthcare: HeartPulse,
  'real-estate': Landmark,
  legal: Scale,
  fitness: CarFront,
  ecommerce: ShoppingBag,
}

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        tag="Industry expertise"
        title="We shape websites around the needs of the industry, not the other way around."
        subtitle="A restaurant, clinic, or law firm does not need the same kind of website. We tailor the structure and message so the site makes sense for the people who will use it."
        chips={['Restaurants', 'Healthcare', 'Real estate']}
        panelTitle="Tailored systems"
        panelBody="Different industries need different journeys. We structure the experience around trust, clarity, and conversion."
        panelStats={['Booking', 'Lead gen', 'Authority']}
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industryIcons[industry.id] ?? ShoppingBag
              return (
                <article
                  key={industry.id}
                  className="surface-card rounded-[1.75rem] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-electric/20"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-electric/10 text-electric">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-xl font-bold text-navy">{industry.name}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{industry.description}</p>

                  <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Common solutions
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {industry.solutions.map((solution) => (
                      <li key={solution} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-electric" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeader
            tag="Not listed?"
            title="We can still build for your business."
            subtitle="If your niche is not here, it usually just means we have not named it yet."
            center
          />
          <Link href="/contact" className="btn-primary">
            Tell us about your business <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CTASection
        title="Your industry deserves a site that feels like it belongs."
        subtitle="We can help shape that experience so it feels more aligned with the people you want to reach."
      />
    </>
  )
}
