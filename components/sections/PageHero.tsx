'use client'

import { motion } from 'framer-motion'
import AnimatedTagHeader from '@/components/ui/AnimatedTagHeader'
import { Reveal, Stagger, StaggerItem } from '@/components/animations/Motion'

type PageHeroProps = {
  tag: string
  title: string
  subtitle: string
  chips?: string[]
  panelTitle?: string
  panelBody?: string
  panelStats?: string[]
}

export default function PageHero({
  tag,
  title,
  subtitle,
  chips = [],
  panelTitle,
  panelBody,
  panelStats = [],
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-50/80 pt-24 pb-8 dark:bg-slate-950/60 lg:pt-28 lg:pb-10">
      <div className="absolute inset-x-0 bottom-0 h-px bg-slate-200 dark:bg-slate-800" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <Stagger className="lg:col-span-8">
            <StaggerItem>
              <AnimatedTagHeader tag={tag} />
            </StaggerItem>

            <StaggerItem>
              <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl dark:text-white">
                {title}
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
                {subtitle}
              </p>
            </StaggerItem>

            {chips.length > 0 && (
              <StaggerItem>
                <div className="mt-6 flex flex-wrap gap-2">
                  {chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-xs dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </StaggerItem>
            )}
          </Stagger>

          {(panelTitle || panelBody || panelStats.length > 0) && (
            <Reveal className="lg:col-span-4">
              <div className="surface-card rounded-xl p-6">
                {panelTitle && (
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {panelTitle}
                  </h3>
                )}
                {panelBody && (
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {panelBody}
                  </p>
                )}

                {panelStats.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-100 pt-4 dark:border-slate-800">
                    {panelStats.map((stat) => (
                      <span
                        key={stat}
                        className="inline-flex items-center gap-1.5 rounded bg-teal/10 px-2.5 py-1 text-xs font-semibold text-teal dark:bg-teal/20 dark:text-teal-light"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                        {stat}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
