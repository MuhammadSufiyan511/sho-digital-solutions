import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { pricingPlans } from '@/lib/data'
import CTASection from '@/components/sections/CTASection'
import PageHero from '@/components/sections/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Pricing | Transparent Web Development Packages',
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

      <section className="py-10 lg:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-xl p-6 sm:p-8 transition-all ${
                  plan.highlighted
                    ? 'bg-[#0E1A2E] text-white shadow-xl ring-2 ring-teal dark:bg-slate-900'
                    : 'surface-card'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="rounded bg-teal px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  <h2 className={`text-xl font-bold ${plan.highlighted ? 'text-white' : 'text-navy dark:text-white'}`}>
                    {plan.name}
                  </h2>
                  <p className={`mt-2 text-xs leading-relaxed ${plan.highlighted ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'}`}>
                    {plan.description}
                  </p>

                  <div className="my-6 border-y border-slate-200/20 py-4">
                    <div className={`text-3xl font-extrabold ${plan.highlighted ? 'text-white' : 'text-navy dark:text-white'}`}>
                      {plan.price}
                    </div>
                    <div className={`mt-0.5 text-[11px] ${plan.highlighted ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>
                      {plan.period}
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs">
                        <CheckCircle
                          className={`h-4 w-4 shrink-0 ${
                            plan.highlighted ? 'text-teal-light' : 'text-teal'
                          }`}
                        />
                        <span className={plan.highlighted ? 'text-slate-200' : 'text-slate-600 dark:text-slate-300'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <Link
                    href="/contact"
                    className={`w-full justify-center ${
                      plan.highlighted
                        ? 'btn-primary bg-teal hover:bg-teal-light text-white'
                        : 'btn-primary'
                    }`}
                  >
                    {plan.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-xs text-slate-500 dark:text-slate-400">
            All prices in USD. Maintenance plans from $99/month. Custom integrations quoted separately.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50/80 py-10 dark:bg-slate-950/60 lg:py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeader tag="FAQ" title="Questions about pricing" center />
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="surface-card rounded-xl p-6">
                <h3 className="text-sm font-bold text-navy dark:text-white">{faq.q}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">{faq.a}</p>
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
