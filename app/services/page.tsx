import type { Metadata } from 'next'
import type { ComponentType } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Globe, LayoutPanelTop, RefreshCcw, Search, ShoppingCart, Wrench } from 'lucide-react'
import { services } from '@/lib/data'
import CTASection from '@/components/sections/CTASection'
import PageHero from '@/components/sections/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore the web design, development, and support services offered by SHO Digital Solutions.',
}

const serviceIcons: Record<string, ComponentType<{ className?: string }>> = {
  'web-dev': LayoutPanelTop,
  ecommerce: ShoppingCart,
  'industry-systems': Globe,
  maintenance: Wrench,
  'lead-integration': RefreshCcw,
  seo: Search,
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        tag="Services"
        title="Practical services for businesses that want a more polished online presence."
        subtitle="We design, build, and support digital experiences that help people trust your brand faster and make it easier for them to take action."
        chips={['Website design', 'E-commerce', 'Support']}
        panelTitle="What we do"
        panelBody="A clear mix of design, development, and support work that keeps the experience useful, calm, and conversion-focused."
        panelStats={['Design', 'Build', 'Support']}
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = serviceIcons[service.id] ?? LayoutPanelTop
              return (
                <article
                  key={service.id}
                  id={service.id}
                  className="surface-card flex flex-col rounded-[1.75rem] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-electric/20"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-electric/10 text-electric">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-xl font-bold text-navy">{service.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{service.description}</p>

                  <div className="mt-6">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Key features</h3>
                    <ul className="mt-4 space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-electric" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="btn-primary mt-7 w-full justify-center"
                  >
                    Start a project <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            tag="Our promise"
            title="Built for clarity, ownership, and long-term value."
            subtitle="We want you to leave with something that is useful, maintainable, and easy to stand behind."
            center
          />

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { title: 'Clear scope', desc: 'A defined process that avoids confusion and protects the timeline.' },
              { title: 'Transparent pricing', desc: 'Simple estimates with no hidden extras or unclear add-ons.' },
              { title: 'Source ownership', desc: 'You keep the assets and the work we build for your business.' },
            ].map((item) => (
              <article key={item.title} className="surface-card rounded-[1.5rem] p-6">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-electric/10 text-electric">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-sm font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-600">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which service fits your business best?"
        subtitle="We can talk through your goals and suggest the most practical starting point."
      />
    </>
  )
}
