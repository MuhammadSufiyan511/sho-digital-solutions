'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '@/components/animations/Motion'
import SectionHeader from '@/components/ui/SectionHeader'

const steps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We start by understanding your business goals, your audience, and the impression you want to create online.',
    details: ['Business goals review', 'Audience & competitor scan', 'Messaging direction', 'Scope alignment'],
  },
  {
    number: '02',
    title: 'Shape the experience',
    description:
      'We map the structure and design a presentation that feels credible, calm, and easy to navigate.',
    details: ['Wireframes & page flow', 'Visual direction', 'Copy refinement', 'Client review'],
  },
  {
    number: '03',
    title: 'Build with care',
    description:
      'Your site is developed with clean code, fast performance, and the flexibility to grow with your business.',
    details: ['Responsive development', 'Performance tuning', 'Integrations', 'Quality assurance'],
  },
  {
    number: '04',
    title: 'Launch and support',
    description:
      'We launch carefully, check the details, and stay available as your site starts working in the real world.',
    details: ['Pre-launch review', 'Deployment support', 'Analytics setup', 'Ongoing maintenance'],
  },
]

export default function ProcessSection() {
  return (
    <section className="bg-white py-10 dark:bg-slate-950 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            tag="Our process"
            title="A straightforward way to move from idea to polished launch."
            subtitle="The experience should feel organized and reassuring from the first conversation to the final handoff."
            center
          />
        </Reveal>

        <div className="relative mt-12">
          {/* Scroll-Activated Animated Horizontal Connecting Line Desktop */}
          <motion.div
            className="absolute left-0 right-0 top-6 hidden h-0.5 origin-left bg-teal/40 dark:bg-teal/60 lg:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />

          <Stagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, idx) => (
              <StaggerItem key={step.number} className="relative">
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="surface-card flex h-full flex-col rounded-xl p-6 transition-all hover:border-teal/40"
                >
                  <div className="flex items-center justify-between">
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 + 0.3, duration: 0.4 }}
                      className="text-2xl font-extrabold text-teal dark:text-teal-light"
                    >
                      {step.number}
                    </motion.span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Step
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-navy dark:text-white">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {step.description}
                  </p>

                  <ul className="mt-6 space-y-2 border-t border-slate-100 pt-4 dark:border-slate-800">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-teal" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
