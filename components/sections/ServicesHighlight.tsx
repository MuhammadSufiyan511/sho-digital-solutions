'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '@/components/animations/Motion'
import SectionHeader from '@/components/ui/SectionHeader'

const highlights = [
  {
    number: '01',
    title: 'Website Development',
    description: 'Custom websites built to feel credible, load quickly, and guide visitors toward taking action.',
    href: '/services#web-dev',
  },
  {
    number: '02',
    title: 'E-commerce Solutions',
    description: 'Online stores designed to make browsing feel easy and purchasing feel confident.',
    href: '/services#ecommerce',
  },
  {
    number: '03',
    title: 'Industry-Specific Systems',
    description: 'Tailored systems for businesses that need more than a brochure website.',
    href: '/services#industry-systems',
  },
  {
    number: '04',
    title: 'Maintenance & Support',
    description: 'Ongoing support that keeps your site secure, updated, and running smoothly.',
    href: '/services#maintenance',
  },
]

export default function ServicesHighlight() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Header Left */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Reveal>
              <SectionHeader
                tag="What we do"
                title="Practical digital services with a more polished, human feel."
                subtitle="We focus on the pieces that matter most: trust, clarity, and a user journey that feels effortless."
              />

              <div className="mt-6">
                <Link href="/services" className="btn-outline-navy">
                  View all services <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Editorial Service Stack Right */}
          <div className="lg:col-span-7">
            <Stagger className="divide-y divide-slate-200 dark:divide-slate-800">
              {highlights.map((item) => (
                <StaggerItem key={item.title}>
                  <Link
                    href={item.href}
                    className="group relative block py-8 px-6 sm:px-8 transition-colors hover:bg-slate-50/50 dark:hover:bg-slate-900/50 rounded-lg"
                  >
                    {/* Hover Teal Accent Line */}
                    <div className="absolute left-0 top-0 h-full w-1 rounded-l origin-left scale-y-0 bg-teal transition-transform duration-300 group-hover:scale-y-100" />

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                      <div className="flex items-start gap-5">
                        <span className="text-sm font-bold text-slate-400 transition-colors group-hover:text-teal shrink-0">
                          {item.number}
                        </span>
                        <div>
                          <h3 className="text-xl font-bold text-navy transition-colors group-hover:text-teal dark:text-white dark:group-hover:text-teal-light">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded border border-slate-200 bg-white text-slate-500 transition-all duration-200 group-hover:translate-x-1 group-hover:border-teal group-hover:bg-teal group-hover:text-white dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  )
}
