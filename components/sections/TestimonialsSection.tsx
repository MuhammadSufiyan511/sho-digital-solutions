'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { testimonials } from '@/lib/data'
import { Reveal, Stagger, StaggerItem } from '@/components/animations/Motion'
import SectionHeader from '@/components/ui/SectionHeader'

export default function TestimonialsSection({ limit = 3 }: { limit?: number }) {
  const featured = testimonials.slice(0, limit)
  const lead = featured[0]
  const rest = featured.slice(1)

  return (
    <section className="bg-white py-20 dark:bg-slate-950 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            tag="Client feedback"
            title="Real feedback from businesses that wanted a more polished digital presence."
            subtitle="We like specific outcomes and honest words. Those are usually the best sign that the work is doing its job."
            center
          />
        </Reveal>

        {lead && (
          <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-stretch">
            {/* Featured Lead Quote Left */}
            <div className="lg:col-span-6">
              <Reveal className="h-full">
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="surface-card flex h-full flex-col justify-between rounded-xl p-8"
                >
                  <div>
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Quote className="h-8 w-8 text-teal/50" />
                    </motion.div>
                    <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-200">
                      &ldquo;{lead.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal text-xs font-bold text-white">
                        {lead.avatar}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-navy dark:text-white">{lead.name}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          {lead.role}, {lead.company}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-0.5">
                      {Array.from({ length: lead.rating }).map((_, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 + 0.3 }}
                        >
                          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            </div>

            {/* Supporting Quotes Right */}
            <div className="lg:col-span-6">
              <Stagger className="flex flex-col gap-6">
                {rest.map((t) => (
                  <StaggerItem key={t.id}>
                    <motion.div
                      whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      className="surface-card rounded-xl p-6"
                    >
                      <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                        &ldquo;{t.content}&rdquo;
                      </p>

                      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 dark:border-slate-800">
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-[11px] font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                            {t.avatar}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-navy dark:text-white">{t.name}</div>
                            <div className="text-[11px] text-slate-500 dark:text-slate-400">
                              {t.role}, {t.company}
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-0.5">
                          {Array.from({ length: t.rating }).map((_, idx) => (
                            <Star key={idx} className="h-3 w-3 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
