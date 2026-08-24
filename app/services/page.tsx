import type { Metadata } from 'next'
import type { ComponentType } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Globe, LayoutPanelTop, RefreshCcw, Search, ShoppingCart, Wrench } from 'lucide-react'
import { services } from '@/lib/data'
import CTASection from '@/components/sections/CTASection'
import PageHero from '@/components/sections/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Services | Website Development & Digital Systems',
  description: 'Explore the web design, development, and support services offered by SixByte Technologies.',
  alternates: { canonical: '/services' },
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

      <section className="py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <SectionHeader
                tag="Service lineup"
                title="A clear mix of design, development, and support work."
                subtitle="Each service is shaped to help the experience feel more useful, calm, and conversion-focused."
              />
              <div className="mt-6">
                <Link href="/contact" className="btn-primary">
                  Start a project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="space-y-6 lg:col-span-8">
              {services.map((service, index) => {
                const Icon = serviceIcons[service.id] ?? LayoutPanelTop
                return (
                  <article
                    key={service.id}
                    id={service.id}
                    className="surface-card rounded-xl p-6 sm:p-8"
                  >
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-slate-200 bg-slate-50 text-teal dark:border-slate-800 dark:bg-slate-900 dark:text-teal-light">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            Service 0{index + 1}
                          </span>
                          <h2 className="text-xl font-bold text-navy dark:text-white">{service.title}</h2>
                        </div>
                      </div>

                      <Link href="/contact" className="btn-outline-navy shrink-0 text-xs">
                        Inquire <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {service.description}
                    </p>

                    <div className="mt-6 border-t border-slate-100 pt-6 dark:border-slate-800">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Features</h3>
                      <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-teal" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="bg-slate-50/80 py-10 dark:bg-slate-950/60 lg:py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeader
            tag="Our promise"
            title="Built for clarity, ownership, and long-term value."
            subtitle="We want you to leave with something that is useful, maintainable, and easy to stand behind."
            center
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { title: 'Clear scope', desc: 'A defined process that avoids confusion and protects the timeline.' },
              { title: 'Transparent pricing', desc: 'Simple estimates with no hidden extras or unclear add-ons.' },
              { title: 'Source ownership', desc: 'You keep the assets and the work we build for your business.' },
            ].map((item) => (
              <article key={item.title} className="surface-card rounded-xl p-6 text-center">
                <h3 className="text-sm font-bold text-navy dark:text-white">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">{item.desc}</p>
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
