import type { Metadata } from 'next'
import type { ComponentType } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowRight,
  CheckCircle2,
  Brain,
  Blocks,
  Code2,
  Layers3,
  PenTool,
  ShoppingBag,
  Smartphone,
  Globe,
  Store,
  Workflow,
  Database,
} from 'lucide-react'
import { services, industries } from '@/lib/data'
import { serviceContent } from '@/lib/services-content'
import { pageMetadata, serviceLd, breadcrumbLd, faqLd } from '@/lib/seo'
import CTASection from '@/components/sections/CTASection'
import PageHero from '@/components/sections/PageHero'
import FaqAccordion from '@/components/ui/FaqAccordion'
import JsonLd from '@/components/JsonLd'

interface Props {
  params: { slug: string }
}

const serviceIcons: Record<string, ComponentType<{ className?: string }>> = {
  'web-dev': Code2,
  wordpress: Globe,
  shopify: ShoppingBag,
  'mobile-apps': Smartphone,
  saas: Layers3,
  'pos-systems': Store,
  'custom-software': Blocks,
  'ui-ux-design': PenTool,
  'database-solutions': Database,
  devops: Workflow,
  'ai-solutions': Brain,
}

const fallbackIndustries = ['ecommerce', 'restaurant', 'healthcare', 'real-estate', 'legal']

function buildFallbackContent(service: (typeof services)[number]) {
  return {
    slug: service.id,
    metaTitle: `${service.title} Services`,
    metaDescription: `Learn how SixByte Technologies approaches ${service.title.toLowerCase()} with a clean, scalable delivery process.`,
    heroTitle: service.title,
    heroSubtitle: service.description,
    summary: service.description,
    overview: [
      `Our ${service.title.toLowerCase()} work is shaped around clarity, dependable structure, and a polished user experience.`,
      'We start by mapping the core user flow, then design and build the solution so it feels easy to use and straightforward to maintain.',
      'The goal is a result that looks premium, behaves well on every screen, and can grow without becoming difficult to manage.',
    ],
    whoFor: [
      `Businesses that need ${service.title.toLowerCase()} built from the ground up`,
      'Teams looking for a more professional digital experience',
      'Projects that need a scalable, maintainable technical foundation',
    ],
    deliverables: service.features,
    process: [
      {
        title: 'Discovery',
        detail:
          'We clarify the workflow, technical needs, and the outcome you want before the build begins.',
      },
      {
        title: 'Design',
        detail:
          'We shape the structure and user experience so the service feels clear, premium, and conversion-friendly.',
      },
      {
        title: 'Build',
        detail:
          'We implement the solution with a modern stack, keeping the codebase organized and scalable.',
      },
      {
        title: 'Launch',
        detail:
          'We test across devices, validate the key flows, and hand over a solution you fully own.',
      },
    ],
    faqs: [
      {
        q: `Can you tailor ${service.title.toLowerCase()} to our exact process?`,
        a: 'Yes. We start from your workflow and shape the solution around how your business actually operates.',
      },
      {
        q: 'Will it work well on mobile and tablets?',
        a: 'Yes. Responsive behavior is built in from the start so the experience stays usable across screen sizes.',
      },
      {
        q: 'Can this connect to other tools we already use?',
        a: 'In most cases, yes. We can integrate with APIs, databases, and external services where needed.',
      },
    ],
    relatedIndustries: fallbackIndustries,
    relatedServices: services
      .map((item) => item.id)
      .filter((id) => id !== service.id)
      .slice(0, 3),
    keywords: [service.title.toLowerCase(), 'custom software', 'digital solutions'],
  }
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }))
}

export function generateMetadata({ params }: Props): Metadata {
  const service = services.find((item) => item.id === params.slug)
  const content = serviceContent[params.slug] ?? (service ? buildFallbackContent(service) : undefined)
  if (!content) return { title: 'Service Not Found' }
  return pageMetadata({
    title: content.metaTitle,
    description: content.metaDescription,
    path: `/services/${content.slug}`,
  })
}

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find((s) => s.id === params.slug)
  const content = service ? serviceContent[params.slug] ?? buildFallbackContent(service) : undefined
  if (!service || !content) notFound()

  const Icon = serviceIcons[service.id] ?? Code2
  const relatedIndustries = content.relatedIndustries
    .map((id) => industries.find((i) => i.id === id))
    .filter((i): i is (typeof industries)[number] => Boolean(i))
  const relatedServices = content.relatedServices
    .map((id) => services.find((s) => s.id === id))
    .filter((s): s is (typeof services)[number] => Boolean(s))

  return (
    <>
      <JsonLd
        data={[
          serviceLd({
            name: service.title,
            description: content.summary,
            path: `/services/${content.slug}`,
            serviceType: service.title,
          }),
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: service.title, path: `/services/${content.slug}` },
          ]),
          faqLd(content.faqs),
        ]}
      />

      <PageHero
        tag="Service"
        title={content.heroTitle}
        subtitle={content.heroSubtitle}
        chips={['Design', 'Build', 'Support']}
        panelTitle={service.title}
        panelBody={content.summary}
        panelStats={['Scope', 'Build', 'Own']}
      />

      <section className="py-6 lg:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-4 text-xs text-slate-500 dark:text-slate-400">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link href="/" className="hover:text-teal">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services" className="hover:text-teal">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-navy dark:text-white">{service.title}</li>
            </ol>
          </nav>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Main content */}
            <div className="space-y-10 lg:col-span-8">
              <div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-slate-200 bg-slate-50 text-teal dark:border-slate-800 dark:bg-slate-900 dark:text-teal-light">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-navy dark:text-white">{service.title}</h2>
                </div>
                <div className="mt-5 space-y-4">
                  {content.overview.map((para) => (
                    <p key={para} className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* What you get */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">What you get</h3>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-teal" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who it's for */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Who it&apos;s for</h3>
                <ul className="mt-4 space-y-2">
                  {content.whoFor.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-teal mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">How we work</h3>
                <div className="mt-4 space-y-4">
                  {content.process.map((step, index) => (
                    <div key={step.title} className="surface-card rounded-xl p-5">
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-teal/10 text-xs font-bold text-teal dark:bg-teal/20 dark:text-teal-light">
                          {index + 1}
                        </span>
                        <h4 className="text-sm font-bold text-navy dark:text-white">{step.title}</h4>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">{step.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Frequently asked questions</h3>
                <FaqAccordion faqs={content.faqs} headingLevel={4} className="mt-4" />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6 lg:col-span-4 lg:sticky lg:top-28">
              <div className="surface-card rounded-xl p-6">
                <h3 className="text-sm font-bold text-navy dark:text-white">Start a project</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  Tell us about your business and we&apos;ll suggest the most practical starting point.
                </p>
                <Link href="/contact" className="btn-primary mt-4 w-full justify-center">
                  Book a consultation <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {relatedServices.length > 0 && (
                <div className="surface-card rounded-xl p-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Related services</h3>
                  <ul className="mt-3 space-y-2">
                    {relatedServices.map((s) => (
                      <li key={s.id}>
                        <Link
                          href={`/services/${s.id}`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal transition-colors hover:text-teal-dark dark:text-teal-light"
                        >
                          <ArrowRight className="h-3.5 w-3.5" /> {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {relatedIndustries.length > 0 && (
                <div className="surface-card rounded-xl p-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Industries we help</h3>
                  <ul className="mt-3 space-y-2">
                    {relatedIndustries.map((industry) => (
                      <li key={industry.id}>
                        <Link
                          href={`/industries/${industry.id}`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy transition-colors hover:text-teal dark:text-slate-200 dark:hover:text-teal-light"
                        >
                          <ArrowRight className="h-3.5 w-3.5 text-teal" /> {industry.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="surface-card rounded-xl p-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Explore</h3>
                <ul className="mt-3 space-y-2 text-xs">
                  <li>
                    <Link href="/portfolio" className="inline-flex items-center gap-1.5 font-semibold text-navy hover:text-teal dark:text-slate-200 dark:hover:text-teal-light">
                      <ArrowRight className="h-3.5 w-3.5 text-teal" /> See our work
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="inline-flex items-center gap-1.5 font-semibold text-navy hover:text-teal dark:text-slate-200 dark:hover:text-teal-light">
                      <ArrowRight className="h-3.5 w-3.5 text-teal" /> View pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="inline-flex items-center gap-1.5 font-semibold text-navy hover:text-teal dark:text-slate-200 dark:hover:text-teal-light">
                      <ArrowRight className="h-3.5 w-3.5 text-teal" /> All services
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to talk about ${service.title.toLowerCase()}?`}
        subtitle="Book a free consultation and we&apos;ll help you figure out the most practical next step."
      />
    </>
  )
}
