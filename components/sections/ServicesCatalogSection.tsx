'use client'

import Link from 'next/link'
import { ArrowRight, Blocks, Brain, Code2, Database, Globe, Layers3, PenTool, ShoppingBag, Smartphone, Store, Workflow } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import SpotlightCard from '@/components/ui/SpotlightCard'
import { services } from '@/lib/data'

const serviceIcons = {
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
} as const

export default function ServicesCatalogSection() {
  const prefersReducedMotion = useReducedMotion() ?? false



  return (
    <section className="py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,7fr)] lg:items-start">
          {/* ── LEFT STICKY PANEL ── */}
          <div className="relative lg:sticky lg:top-24 lg:z-20 lg:self-start lg:h-fit">
            <div className="relative overflow-hidden rounded-3xl bg-[#0E1A2E] shadow-2xl shadow-navy/20 dark:shadow-black/40">
              {/* Top teal accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-teal via-teal-light to-teal" />

              {/* Subtle grid texture overlay */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:28px_28px]" />

              {/* Glow orb */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-teal/10 blur-3xl" />

              <div className="relative p-5">
                {/* Eyebrow */}
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-teal-light/70">
                  SixByte capabilities
                </p>

                {/* Big service count badge */}
                <div className="mt-4 flex items-end gap-2.5">
                  <span className="text-5xl font-extrabold leading-none tracking-tight text-white">
                    {services.length}
                  </span>
                  <div className="mb-1 flex flex-col">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                      Core
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                      services
                    </span>
                  </div>
                </div>

                {/* Heading */}
                <h3 className="mt-4 text-base font-bold leading-snug tracking-tight text-white">
                  Engineering services for digital products that need to feel polished and dependable.
                </h3>

                {/* Sub-text */}
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  From web and commerce to mobile, cloud, and AI — we help businesses build software that works.
                </p>

                {/* Divider */}
                <div className="my-4 h-px w-full bg-white/8" />

                {/* Stat rows */}
                <div className="space-y-2">
                  {[
                    { label: 'Coverage', value: 'Web · Commerce · Apps' },
                    { label: 'Stack', value: 'React, Next.js, Node & more' },
                    { label: 'Timeline', value: 'From 2 weeks' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center justify-between gap-3 rounded-xl bg-white/5 px-3.5 py-2"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">
                        {stat.label}
                      </span>
                      <span className="text-xs font-semibold text-slate-200">{stat.value}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-4">
                  <Link
                    href="/contact"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-teal/20 transition-all duration-200 hover:bg-teal/90 hover:shadow-teal/30 hover:-translate-y-0.5"
                  >
                    Start a project <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>


          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = serviceIcons[service.id as keyof typeof serviceIcons] ?? Code2
              return (
                <Link key={service.id} href={`/services/${service.id}`} className="block group">
                  <SpotlightCard className="h-full rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 group-hover:border-slate-300 group-hover:shadow-[0_18px_40px_rgba(15,23,42,0.06)] dark:border-slate-800 dark:bg-slate-950 dark:group-hover:border-slate-700">
                    <motion.article
                      whileHover={prefersReducedMotion ? undefined : { y: -3 }}
                      transition={{ duration: 0.2 }}
                      className="h-full flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-teal dark:border-slate-800 dark:bg-slate-900 dark:text-teal-light">
                              <Icon className="h-5 w-5" />
                            </div>
                            <div>
                              <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-400">
                                0{index + 1}
                              </span>
                              <h3 className="mt-2 text-lg font-semibold tracking-tight text-navy dark:text-white transition-colors group-hover:text-teal dark:group-hover:text-teal-light">
                                {service.title}
                              </h3>
                            </div>
                          </div>
                          <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-200 group-hover:border-teal group-hover:bg-teal group-hover:text-white dark:border-slate-800 dark:text-slate-500 dark:group-hover:border-teal-light dark:group-hover:bg-teal-light dark:group-hover:text-navy">
                            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                          </span>
                        </div>

                        <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                          {service.description}
                        </p>
                      </div>

                      <div className="mt-5 space-y-2 pt-2">
                        {service.features.slice(0, 3).map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </motion.article>
                  </SpotlightCard>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
