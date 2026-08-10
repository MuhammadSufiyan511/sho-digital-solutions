import Link from 'next/link'
import { ArrowRight, Database, LayoutPanelTop, RefreshCcw, ShoppingCart, Wrench } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const highlights = [
  {
    icon: LayoutPanelTop,
    title: 'Website Development',
    description: 'Clean, responsive websites designed to make your business feel established and easy to trust.',
    href: '/services#web-dev',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description: 'Conversion-focused online stores with smooth buying journeys and room to scale.',
    href: '/services#ecommerce',
  },
  {
    icon: Database,
    title: 'Industry Systems',
    description: 'Booking, lead, and workflow tools shaped around the way your business actually works.',
    href: '/services#industry-systems',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    description: 'Reliable support that keeps your site secure, updated, and performing at a high standard.',
    href: '/services#maintenance',
  },
]

export default function ServicesHighlight() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            tag="What we do"
            title="Practical digital services with a more polished, human feel."
            subtitle="We focus on the pieces that matter most: trust, clarity, and a user journey that feels effortless."
          />
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-electric transition-colors hover:text-electric-dark"
          >
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.title}
                href={item.href}
                className="group surface-card rounded-[1.75rem] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-electric/20"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-electric/10 text-electric">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy transition-colors group-hover:text-electric">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-electric">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
