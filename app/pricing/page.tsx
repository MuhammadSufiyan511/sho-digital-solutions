import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { pricingPlans } from '@/lib/data'
import CTASection from '@/components/sections/CTASection'
import PageHero from '@/components/sections/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent, affordable pricing for professional web development. No hidden fees.',
}

const faqs = [
  {
    q: "What's included in the free consultation?",
    a: 'A 30-minute strategy call where we discuss your goals, assess your current digital presence, and outline what a winning strategy would look like for your business.',
  },
  {
    q: 'How long does a website project take?',
    a: 'Starter projects: 2-3 weeks. Growth projects: 4-6 weeks. Enterprise: 8-16 weeks. Timelines vary by complexity and how quickly you provide feedback.',
  },
  {
    q: 'Do you offer monthly payment plans?',
    a: 'Yes! We offer flexible payment structures, typically 50% upfront and 50% on launch. Monthly installment plans are available for larger projects.',
  },
  {
    q: "Who owns the website after it's built?",
    a: 'You do. 100%. We transfer all files, credentials, and code ownership to you at project completion.',
  },
  {
    q: 'Can I upgrade my plan later?',
    a: 'Absolutely. Many clients start with Starter and upgrade as their business grows. We build everything to be scalable from day one.',
  },
]

export default function PricingPage() {
  return (
    <>
      <PageHero
        tag="Pricing"
        title="Clear pricing with no surprises."
        subtitle="We believe in straightforward pricing. What you see is what you pay, and every investment should make sense."
        chips={['Transparent', 'Flexible', 'Scoped']}
        panelTitle="Investment"
        panelBody="A simple pricing structure that keeps the work clear, the process honest, and the scope easier to understand."
        panelStats={['Starter', 'Growth', 'Enterprise']}
      />

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl flex flex-col ${
                  plan.highlighted
                    ? 'bg-navy text-white shadow-2xl scale-105 z-10'
                    : 'bg-white border border-gray-100 shadow-sm'
                }`}
                style={plan.highlighted ? { backgroundColor: '#0A1F44' } : undefined}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-electric text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8 flex-1">
                  <h2 className={`font-bold text-xl mb-1 ${plan.highlighted ? 'text-white' : 'text-navy'}`}>
                    {plan.name}
                  </h2>
                  <p className={`text-sm mb-6 ${plan.highlighted ? 'text-blue-200' : 'text-gray-500'}`}>
                    {plan.description}
                  </p>

                  <div className="mb-8">
                    <div className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-navy'}`}>
                      {plan.price}
                    </div>
                    <div className={`text-xs mt-0.5 ${plan.highlighted ? 'text-blue-300' : 'text-gray-400'}`}>
                      {plan.period}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            plan.highlighted ? 'text-blue-300' : 'text-electric'
                          }`}
                        />
                        <span className={plan.highlighted ? 'text-blue-100' : 'text-gray-600'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 pt-0">
                  <Link
                    href="/contact"
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-bold text-sm transition-all hover:-translate-y-0.5 ${
                      plan.highlighted
                        ? 'bg-electric text-white hover:bg-electric-dark'
                        : 'bg-electric/10 text-electric hover:bg-electric hover:text-white'
                    }`}
                  >
                    {plan.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-sm mt-12">
            All prices in USD. Maintenance plans from $99/month. Custom integrations quoted separately.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader tag="FAQ" title="Questions about <span style='color:#0f766e'>pricing</span>" center />
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="text-navy font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which plan is right for you?"
        subtitle="Our free consultation helps you figure out exactly what you need, and what you don't."
      />
    </>
  )
}
