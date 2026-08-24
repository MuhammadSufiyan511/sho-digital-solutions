import type { Metadata } from 'next'
import type { ComponentType } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, CarFront, HeartPulse, Landmark, Scale, ShoppingBag, UtensilsCrossed } from 'lucide-react'
import { industries } from '@/lib/data'
import CTASection from '@/components/sections/CTASection'
import PageHero from '@/components/sections/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Industries | Tailored Digital Systems',
  description: 'Industry-focused website and digital system solutions for businesses that need a more tailored fit.',
  alternates: { canonical: '/industries' },
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

      <section className="py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industryIcons[industry.id] ?? ShoppingBag
              return (
                <article
                  key={industry.id}
                  className="surface-card rounded-xl p-7 transition-all duration-200 hover:border-teal/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded border border-slate-200 bg-slate-50 text-teal dark:border-slate-800 dark:bg-slate-900 dark:text-teal-light">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-xl font-bold text-navy dark:text-white">{industry.name}</h2>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">{industry.description}</p>

                  <div className="mt-6 border-t border-slate-100 pt-4 dark:border-slate-800">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Common solutions
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {industry.solutions.map((solution) => (
                        <li key={solution} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-teal" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50/80 py-10 dark:bg-slate-950/60 lg:py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeader
            tag="Not listed?"
            title="We can still build for your business."
            subtitle="If your niche is not here, it usually just means we have not named it yet."
            center
          />
          <div className="mt-6">
            <Link href="/contact" className="btn-primary">
              Tell us about your business <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Your industry deserves a site that feels like it belongs."
        subtitle="We can help shape that experience so it feels more aligned with the people you want to reach."
      />
    </>
  )
}
