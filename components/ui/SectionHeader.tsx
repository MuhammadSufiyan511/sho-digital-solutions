'use client'

import { motion } from 'framer-motion'
import AnimatedTagHeader from './AnimatedTagHeader'

interface SectionHeaderProps {
  tag?: string
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
}

export default function SectionHeader({
  tag,
  title,
  subtitle,
  center = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`mb-10 sm:mb-12 ${center ? 'text-center' : 'text-left'}`}
    >
      {/* Kinetic (+) icon sweep + character-by-character tag reveal */}
      {tag && (
        <div className={`mb-3 flex ${center ? 'justify-center' : 'justify-start'}`}>
          <AnimatedTagHeader tag={tag} light={light} center={center} />
        </div>
      )}

      {/* Main Section Title */}
      <div className={`relative w-full max-w-4xl ${center ? 'mx-auto' : ''}`}>
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 18 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, delay: 0.7, ease: [0.25, 1, 0.5, 1] },
            },
          }}
          className={`text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl ${
            light ? 'text-white' : 'text-navy dark:text-white'
          }`}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>

      {/* Section Subtitle */}
      {subtitle && (
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, delay: 0.85, ease: [0.25, 1, 0.5, 1] },
            },
          }}
          className={`mt-3.5 max-w-2xl text-sm sm:text-base leading-relaxed ${center ? 'mx-auto' : ''} ${
            light ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
