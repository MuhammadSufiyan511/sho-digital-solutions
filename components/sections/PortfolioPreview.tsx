'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { projects } from '@/lib/data'
import { Reveal, StaggerItem } from '@/components/animations/Motion'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'

const featured = projects.slice(0, 4)

export default function PortfolioPreview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              tag="Selected work"
              title="A few examples that show how a polished website can support real business goals."
              subtitle="The goal is not just to look good. Each project is built to improve clarity, trust, and action."
            />
            <div className="shrink-0 sm:pb-12">
              <Link href="/portfolio" className="btn-outline-navy">
                View full portfolio <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-12">
          {featured.map((project, index) => (
            <StaggerItem
              key={project.id}
              className={`group overflow-hidden rounded-xl border border-slate-200/80 bg-white transition-all duration-300 hover:border-teal/30 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 ${
                index === 0
                  ? 'lg:col-span-12'
                  : index === 1
                  ? 'lg:col-span-7'
                  : index === 2
                  ? 'lg:col-span-5'
                  : 'lg:col-span-12'
              }`}
            >
              <div className={`grid gap-6 ${index === 0 || index === 3 ? 'lg:grid-cols-12 lg:items-center' : ''}`}>
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative overflow-hidden bg-slate-900 ${
                    index === 0 || index === 3 ? 'lg:col-span-7 h-64 sm:h-80 lg:h-96' : 'h-64'
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 opacity-60 transition-opacity group-hover:opacity-40" />
                </motion.div>

                <div
                  className={`p-6 ${
                    index === 0 || index === 3 ? 'lg:col-span-5 lg:p-8' : ''
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="blue">{project.industry}</Badge>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded border border-slate-200 bg-slate-50 text-slate-600 transition-colors group-hover:border-teal group-hover:bg-teal group-hover:text-white dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-navy transition-colors group-hover:text-teal dark:text-white dark:group-hover:text-teal-light">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-slate-100 bg-slate-50 px-2.5 py-0.5 text-[11px] font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-800/80 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-4">
                    <Link
                      href={`/portfolio/${project.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal transition-colors hover:text-teal-dark dark:text-teal-light"
                    >
                      Open case study <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 transition-colors hover:text-navy dark:text-slate-400 dark:hover:text-white"
                      >
                        Live site <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </div>
      </div>
    </section>
  )
}
