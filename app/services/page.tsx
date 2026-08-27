import type { Metadata } from 'next'
import { services } from '@/lib/data'
import { breadcrumbLd, absoluteUrl } from '@/lib/seo'
import CTASection from '@/components/sections/CTASection'
import PageHero from '@/components/sections/PageHero'
import ServicesKineticPreview from '@/components/sections/ServicesKineticPreview'
import ServicesCatalogSection from '@/components/sections/ServicesCatalogSection'
import SectionHeader from '@/components/ui/SectionHeader'
import SpotlightCard from '@/components/ui/SpotlightCard'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Services | Web, Mobile, SaaS, DevOps & AI',
  description: 'Explore the full range of modern software, product, and digital services offered by SixByte Technologies.',
  alternates: { canonical: '/services' },
}

const servicesItemListLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'SixByte Technologies services',
  itemListElement: services.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: service.title,
    url: absoluteUrl(`/services/${service.id}`),
  })),
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
          ]),
          servicesItemListLd,
        ]}
      />
      <PageHero
        tag="Services"
        title="Modern software services for brands that want to look sharper and scale with confidence."
        subtitle="From custom websites and WordPress to Shopify, SaaS, DevOps, and AI, SixByte Technologies designs digital systems that feel premium and technically solid."
        chips={['Web Development', 'WordPress', 'Shopify', 'AI']}
        panelTitle="How we work"
        panelBody="A focused process that keeps the work clear, technical, and conversion-minded from discovery through launch."
        panelStats={['Discover', 'Design', 'Build']}
      />

      <ServicesCatalogSection />
      <ServicesKineticPreview />

      {/* Promise */}
      <section className="bg-slate-50/80 py-6 dark:bg-slate-950/60 lg:py-8">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeader
            tag="Our promise"
            title="Built for clarity, ownership, and long-term value."
            subtitle="We want you to leave with something that is useful, maintainable, and easy to stand behind."
            center
          />

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {[
              { title: 'Clear scope', desc: 'A defined process that avoids confusion and protects the timeline.' },
              { title: 'Transparent pricing', desc: 'Simple estimates with no hidden extras or unclear add-ons.' },
              { title: 'Source ownership', desc: 'You keep the assets and the work we build for your business.' },
            ].map((item) => (
              <SpotlightCard key={item.title} className="surface-card rounded-xl p-6 text-center transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-700">
                <h3 className="text-sm font-bold text-navy dark:text-white">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">{item.desc}</p>
              </SpotlightCard>
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
