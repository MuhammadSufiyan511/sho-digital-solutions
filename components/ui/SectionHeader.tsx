'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  tag?: string
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
}

export default function SectionHeader({ tag, title, subtitle, center = false, light = false }: SectionHeaderProps) {
  return (
    <div className={`mb-10 sm:mb-12 ${center ? 'text-center' : 'text-left'}`}>
      {/* Eyebrow Tag with Animated Underline directly beneath */}
      {tag && (
        <div className={`mb-3 inline-flex flex-col ${center ? 'items-center' : 'items-start'}`}>
          <span
            className={`text-xs font-bold uppercase tracking-[0.2em] ${
              light ? 'text-teal-light' : 'text-teal dark:text-teal-light'
            }`}
          >
            {tag}
          </span>
          <svg
            className={`h-2.5 w-full max-w-[120px] overflow-visible ${
              light ? 'text-teal-light' : 'text-teal dark:text-teal-light'
            }`}
            viewBox="0 0 80 10"
            fill="none"
          >
            <motion.path
              d="M2 5 Q 40 1, 78 5"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            />
          </svg>
        </div>
      )}

      {/* Main Section Title */}
      <div className={`relative w-full max-w-4xl ${center ? 'mx-auto' : ''}`}>
        <h2
          className={`text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl ${
            light ? 'text-white' : 'text-navy dark:text-white'
          }`}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>

      {/* Section Subtitle */}
      {subtitle && (
        <p
          className={`mt-3.5 max-w-2xl text-sm sm:text-base leading-relaxed ${center ? 'mx-auto' : ''} ${
            light ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
