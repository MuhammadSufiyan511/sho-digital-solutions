'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Linkedin, ChevronLeft, ChevronRight } from 'lucide-react'
import AnimatedTagHeader from '@/components/ui/AnimatedTagHeader'

export type TeamMember = {
  name: string
  role: string
  description?: string
  bio?: string
  image?: string
  initials: string
  linkedin?: string
}

type KineticTeamShowcaseProps = {
  team: TeamMember[]
  title?: string
  subtitle?: string
  tag?: string
}

// Background spinning (+) elements — various sizes, positions, speeds
const backgroundSpinningPluses = [
  { id: 1, position: 'top-6 left-10', size: 'text-4xl sm:text-5xl', opacity: 'opacity-[0.08]', color: 'text-teal-400', speed: 20 },
  { id: 2, position: 'bottom-8 right-12', size: 'text-5xl sm:text-7xl', opacity: 'opacity-[0.06]', color: 'text-teal-300', speed: 25 },
  { id: 3, position: 'bottom-10 left-1/4', size: 'text-3xl sm:text-4xl', opacity: 'opacity-[0.10]', color: 'text-teal-400', speed: 15 },
  { id: 4, position: 'top-8 right-1/4', size: 'text-3xl sm:text-4xl', opacity: 'opacity-[0.07]', color: 'text-slate-400', speed: 18 },
  { id: 5, position: 'left-4 top-1/2 -translate-y-1/2', size: 'text-2xl sm:text-3xl', opacity: 'opacity-[0.12]', color: 'text-teal-400', speed: 12 },
  { id: 6, position: 'right-4 top-1/3', size: 'text-2xl sm:text-3xl', opacity: 'opacity-[0.09]', color: 'text-slate-500', speed: 14 },
  { id: 7, position: 'top-1/3 left-1/2', size: 'text-4xl sm:text-6xl', opacity: 'opacity-[0.04]', color: 'text-teal-300', speed: 22 },
  { id: 8, position: 'bottom-1/4 right-1/3', size: 'text-2xl', opacity: 'opacity-[0.10]', color: 'text-slate-400', speed: 16 },
]

export default function KineticTeamShowcase({ team, title, subtitle, tag }: KineticTeamShowcaseProps) {
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<'center' | 'left'>('center')
  const prefersReducedMotion = useReducedMotion()

  const current = team[index]

  // Explicit timing state machine per team member
  useEffect(() => {
    if (prefersReducedMotion) return

    // 0.0s: Reset phase to center
    setPhase('center')

    // At 3.0s: Glide smoothly to left side
    const slideTimer = setTimeout(() => {
      setPhase('left')
    }, 3000)

    // At 8.5s: Progress to next team member
    const nextTimer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % team.length)
    }, 8500)

    return () => {
      clearTimeout(slideTimer)
      clearTimeout(nextTimer)
    }
  }, [index, prefersReducedMotion, team.length])

  const handleNext = () => {
    setPhase('center')
    setIndex((prev) => (prev + 1) % team.length)
  }

  const handlePrev = () => {
    setPhase('center')
    setIndex((prev) => (prev - 1 + team.length) % team.length)
  }

  // Reduced motion accessible fallback
  if (prefersReducedMotion) {
    return (
      <div className="w-full py-6 px-4 bg-[#0E1A2E]">
        <div className="mx-auto max-w-4xl grid gap-6 md:grid-cols-12 md:items-center rounded-2xl p-5 border border-white/10">
          <div className="md:col-span-5 flex justify-center">
            <div className="relative aspect-[4/5] w-full max-w-[300px] rounded-xl overflow-hidden bg-slate-900 border border-white/10">
              {current.image ? (
                <Image src={current.image} alt={current.name} fill className="object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-white">
                  {current.initials}
                </div>
              )}
            </div>
          </div>
          <div className="md:col-span-7 space-y-3">
            <h3 className="text-2xl font-bold text-white">{current.name}</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-teal-400">{current.role}</p>
            <p className="text-sm text-slate-300 leading-relaxed">{current.description || current.bio}</p>
            {current.linkedin && (
              <a
                href={current.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-teal-400 hover:underline"
              >
                <Linkedin className="h-4 w-4" /> Connect on LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="relative w-full py-5 lg:py-6 overflow-hidden bg-[#0E1A2E] rounded-3xl transition-colors duration-500">
      {/* Hairline Faint Background Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* SPINNING (+) BACKGROUND ELEMENTS */}
      {backgroundSpinningPluses.map((plus) => (
        <motion.div
          key={plus.id}
          className={`pointer-events-none absolute font-light z-0 ${plus.position} ${plus.size} ${plus.opacity} ${plus.color}`}
          animate={{ rotate: plus.id % 2 === 0 ? [0, 360] : [360, 0] }}
          transition={{ duration: plus.speed, repeat: Infinity, ease: 'linear' }}
        >
          +
        </motion.div>
      ))}

      {/* Subtle ambient glow orbs */}
      <motion.div
        className="pointer-events-none absolute left-1/4 top-1/3 h-40 w-40 rounded-full bg-teal-500/10 blur-3xl z-0"
        animate={{ scale: [1, 1.3, 1], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute right-1/4 bottom-1/4 h-40 w-40 rounded-full bg-sky-500/8 blur-3xl z-0"
        animate={{ scale: [1.3, 1, 1.3], y: [-10, 10, -10] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 flex flex-col justify-between">
        {/* SECTION HEADER INSIDE SHOWCASE WITH PENCIL UNDERLINE BELOW TAG */}
        {(title || subtitle) && (
          <div className="text-center mb-3 lg:mb-4 flex flex-col items-center">
            {tag && (
              <div className="mb-2 flex justify-center">
                <AnimatedTagHeader tag={tag} light center />
              </div>
            )}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-1 text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* CINEMATIC ANIMATION STAGE */}
        <div className="relative flex-1 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.4 } }}
              transition={{ duration: 0.5 }}
              className="relative w-full"
            >
              {/* ==================== DESKTOP LAYOUT (lg+) ==================== */}
              <div className="w-full hidden lg:grid grid-cols-12 items-center gap-6 min-h-[320px]">
                {/* Left 5 Columns — Image anchor position */}
                <div className="col-span-5 relative flex justify-center items-center h-[340px]">
                  <motion.div
                    /*
                      STATE MACHINE:
                      - phase 'center': Image sits at center of stage (translateX ~+70%)
                      - phase 'left': Image is at col-span-5 position (translateX 0%)
                      initial={false} prevents slide-in animation on first render
                    */
                    initial={false}
                    animate={{
                      x: phase === 'center' ? '70%' : '0%',
                      scale: phase === 'center' ? 1.0 : 0.92,
                    }}
                    transition={{
                      duration: phase === 'left' ? 1.5 : 0,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative w-[260px] h-[330px] rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10 bg-slate-900 z-30"
                  >
                    {current.image ? (
                      <Image
                        src={current.image}
                        alt={current.name}
                        fill
                        className="object-cover"
                        priority
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-4xl font-extrabold text-white">
                        {current.initials}
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Right 7 Columns — Member content reveal */}
                <div className="col-span-7 pl-2 flex flex-col justify-center space-y-3">
                  {phase === 'left' && (
                    <>
                      {/* Name */}
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight"
                      >
                        {current.name}
                      </motion.h3>

                      {/* Role Title */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="inline-flex items-center gap-2"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-teal-400">
                          {current.role}
                        </span>
                      </motion.div>

                      {/* Description Biography */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="text-xs lg:text-sm leading-relaxed text-slate-300 max-w-sm"
                      >
                        {current.description || current.bio}
                      </motion.p>

                      {/* LinkedIn / Social Link */}
                      {current.linkedin && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
                          className="pt-1"
                        >
                          <a
                            href={current.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-teal-400 transition-colors"
                          >
                            <Linkedin className="h-3.5 w-3.5 text-teal-400" />
                            <span>Connect on LinkedIn</span>
                          </a>
                        </motion.div>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* ==================== MOBILE / TABLET (< lg) ==================== */}
              <div className="w-full lg:hidden flex flex-col items-center justify-center text-center py-2 space-y-3">
                <motion.div
                  initial={false}
                  animate={{
                    y: phase === 'center' ? 0 : -12,
                    scale: phase === 'center' ? 1.0 : 0.94,
                  }}
                  transition={{
                    duration: phase === 'left' ? 1.2 : 0,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative aspect-[4/5] w-[200px] sm:w-[240px] h-[250px] sm:h-[300px] rounded-xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10 bg-slate-900"
                >
                  {current.image ? (
                    <Image src={current.image} alt={current.name} fill className="object-cover" priority />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-3xl font-extrabold text-white">
                      {current.initials}
                    </div>
                  )}
                </motion.div>

                {/* Mobile Content Reveal */}
                {phase === 'left' && (
                  <div className="space-y-2 max-w-sm px-2">
                    <motion.h3
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-xl sm:text-2xl font-extrabold text-white"
                    >
                      {current.name}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.45 }}
                      className="text-[11px] font-bold uppercase tracking-widest text-teal-400"
                    >
                      {current.role}
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="text-xs leading-relaxed text-slate-300"
                    >
                      {current.description || current.bio}
                    </motion.p>

                    {current.linkedin && (
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.75 }}
                        className="pt-0.5"
                      >
                        <a
                          href={current.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400"
                        >
                          <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                        </a>
                      </motion.div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* SUBTLE TEAM MEMBER NAVIGATION (BOTTOM COUNTER & MINIMAL ARROWS) */}
        <div className="relative z-30 flex items-center justify-between border-t border-white/10 pt-2.5 mt-2.5">
          <div className="font-mono text-[11px] font-bold tracking-widest text-slate-500">
            <span className="text-teal-400">0{index + 1}</span> / 0{team.length}
          </div>

          {/* Minimal Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 text-slate-400 hover:border-teal-400 hover:text-teal-400 transition-colors"
              aria-label="Previous team member"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={handleNext}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 text-slate-400 hover:border-teal-400 hover:text-teal-400 transition-colors"
              aria-label="Next team member"
            >
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
