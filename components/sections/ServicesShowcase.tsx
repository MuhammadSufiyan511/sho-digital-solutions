'use client'

import Link from 'next/link'
import {
  ArrowRight,
  Blocks,
  Brain,
  Code2,
  Database,
  Globe,
  Layers3,
  PenTool,
  ShoppingBag,
  Smartphone,
  Store,
  Workflow,
} from 'lucide-react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import { useMemo, useRef, useState } from 'react'
import { services } from '@/lib/data'
import { servicePreviewMeta } from '@/lib/service-showcase'

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

type CardProps = {
  service: (typeof services)[number]
  index: number
  active: boolean
  onActivate: (id: string) => void
  scrollYProgress: MotionValue<number>
  reduced: boolean
}

function ServiceCard({ service, index, active, onActivate, scrollYProgress, reduced }: CardProps) {
  const Icon = serviceIcons[service.id as keyof typeof serviceIcons] ?? Code2
  const parallax = useSpring(
    useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? 16 : -12, index % 2 === 0 ? -12 : 16]),
    { stiffness: 90, damping: 22, mass: 0.2 },
  )

  return (
    <motion.div
      style={reduced ? undefined : { y: parallax }}
      className="h-full"
    >
      <Link
        href={`/services/${service.id}`}
        onMouseEnter={() => onActivate(service.id)}
        onFocus={() => onActivate(service.id)}
        className={`group flex h-full flex-col rounded-[1.75rem] border p-6 transition-all duration-300 sm:p-7 ${
          active
            ? 'border-teal/40 bg-white shadow-[0_18px_40px_rgba(15,118,110,0.08)] dark:bg-slate-950'
            : 'border-slate-200 bg-white/90 hover:border-slate-300 hover:shadow-[0_18px_40px_rgba(15,23,42,0.06)] dark:border-slate-800 dark:bg-slate-950/70 dark:hover:border-slate-700'
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border transition-colors ${
                active
                  ? 'border-teal/20 bg-teal text-white'
                  : 'border-slate-200 bg-slate-50 text-teal dark:border-slate-800 dark:bg-slate-900 dark:text-teal-light'
              }`}
            >
              <Icon className="h-5 w-5" />
            </div>

            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-400">
                0{index + 1}
              </span>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-navy dark:text-white">
                {service.title}
              </h3>
            </div>
          </div>

          <ArrowRight
            className={`mt-1 h-4 w-4 shrink-0 transition-transform duration-300 ${
              active
                ? 'translate-x-1 text-teal'
                : 'text-slate-300 group-hover:translate-x-1 group-hover:text-teal dark:text-slate-600'
            }`}
          />
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {service.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {service.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-teal transition-transform duration-300 group-hover:translate-x-1">
            Open details <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}

export default function ServicesShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const prefersReducedMotion = useReducedMotion() ?? false
  const [activeId, setActiveId] = useState<string>(services[0].id)

  const activeService = useMemo(
    () => services.find((service) => service.id === activeId) ?? services[0],
    [activeId],
  )

  const preview = servicePreviewMeta[activeService.id] ?? servicePreviewMeta['web-dev']
  const PreviewIcon = serviceIcons[activeService.id as keyof typeof serviceIcons] ?? Code2
  const previewY = useSpring(useTransform(scrollYProgress, [0, 1], [20, -20]), {
    stiffness: 90,
    damping: 24,
    mass: 0.25,
  })

  return (
    <section ref={sectionRef} className="py-10 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <motion.div
              style={prefersReducedMotion ? undefined : { y: previewY }}
              className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm dark:border-slate-800 sm:p-8"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(20,184,166,0.16),transparent_34%)]" />
              <div className="absolute -left-12 top-8 h-36 w-36 rounded-full bg-teal/15 blur-3xl" />
              <div className="absolute -bottom-16 right-0 h-44 w-44 rounded-full bg-white/10 blur-3xl" />

              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/60">Services</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Kinetic service blocks for a modern software studio.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/75">
                  A sticky introduction on the left, with the service cards moving beside it as you scroll.
                  Hover any card to preview it and jump straight into the full detail page.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  {[
                    { label: 'Services', value: String(services.length) },
                    { label: 'Focus', value: 'Web, product, AI' },
                    { label: 'Output', value: 'Conversion-ready systems' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">{item.label}</p>
                      <p className="mt-2 text-sm font-medium text-white">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/10 p-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white">
                      <PreviewIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/50">
                        Active preview
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-white">{activeService.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/70">{preview.summary}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Link href="/contact" className="btn-primary w-full justify-center">
                    Start a project <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-4 md:grid-cols-2">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                  active={service.id === activeId}
                  onActivate={setActiveId}
                  scrollYProgress={scrollYProgress}
                  reduced={prefersReducedMotion}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
