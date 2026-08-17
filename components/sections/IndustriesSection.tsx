'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { industries } from '@/lib/data'
import { Reveal, Stagger, StaggerItem } from '@/components/animations/Motion'
import SectionHeader from '@/components/ui/SectionHeader'

export default function IndustriesSection() {
  return (
    <section className="bg-slate-50/80 py-20 dark:bg-slate-950/60 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            tag="Industries we serve"
            title="Tailored digital solutions shaped around your specific market."
            subtitle="Different industries need different journeys. We structure the experience around trust, authority, and conversion."
            center
          />
        </Reveal>

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => (
            <StaggerItem key={item.id}>
              <div className="surface-card group flex h-full flex-col justify-between rounded-xl p-6 transition-all duration-200 hover:border-teal/40">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal dark:text-teal-light">
                      {item.name}
                    </span>
                    <span className="text-slate-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-teal">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>

                  <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3 dark:border-slate-800">
                    {item.solutions.slice(0, 3).map((sol) => (
                      <li key={sol} className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                        <CheckCircle2 className="h-3 w-3 text-teal shrink-0" />
                        {sol}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-2">
                  <Link
                    href="/industries"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-teal transition-colors hover:text-teal-dark dark:text-teal-light"
                  >
                    Explore solutions <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
