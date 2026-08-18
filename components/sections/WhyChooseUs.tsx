'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShieldCheck, Sparkles, Globe, Headphones, Award, TrendingUp } from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '@/components/animations/Motion'
import SectionHeader from '@/components/ui/SectionHeader'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Clear pricing',
    description: 'You get straightforward quotes, no hidden extras, and no vague scope creep.',
  },
  {
    icon: Sparkles,
    title: 'Thoughtful design',
    description: 'The work feels polished without feeling over-designed or hard to use.',
  },
  {
    icon: Globe,
    title: 'Market awareness',
    description: 'We understand how to speak to local and international customers with confidence.',
  },
  {
    icon: Headphones,
    title: 'Reliable support',
    description: 'We stay available after launch so your team never feels left on its own.',
  },
  {
    icon: Award,
    title: 'Proven delivery',
    description: 'We have a history of shipping work that supports real business goals.',
  },
  {
    icon: TrendingUp,
    title: 'Growth mindset',
    description: 'Every choice is made with your long-term brand and revenue in mind.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-[#0E1A2E] py-10 text-white lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            tag="Why SixByte"
            title="A partner that cares about how your business actually shows up online."
            subtitle="We keep the work calm, clear, and accountable so the end result feels dependable rather than flashy."
            light
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Visual Left with Scroll Activation */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900 p-2 shadow-2xl">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-slate-950">
                  <Image
                    src="/assets/about_architecture.png"
                    alt="Digital architecture and systems positioning"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Grid Right */}
          <div className="lg:col-span-7">
            <Stagger className="grid gap-6 sm:grid-cols-2">
              {reasons.map(({ icon: Icon, title, description }, index) => (
                <StaggerItem key={title}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.2 } }}
                    className="rounded-lg border border-slate-800 bg-slate-900/60 p-5 transition-colors hover:border-teal/50 hover:bg-slate-900"
                  >
                    <div className="flex items-center justify-between">
                      <Icon className="h-5 w-5 text-teal" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-3 text-base font-bold text-white">{title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-400">{description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  )
}
