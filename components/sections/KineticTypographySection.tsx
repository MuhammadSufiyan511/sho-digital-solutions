'use client'

import { memo, useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Plus } from 'lucide-react'

// 8 Rich Motion Typography Sequences
const sequences = [
  // SEQ 01 - Vertical Lock & Right-to-Left Attach
  {
    id: 1,
    layout: 'vertical-attach',
    verticalText: 'DIGITAL',
    verticalColor: 'text-teal dark:text-teal-light',
    attachedText: 'EXPERIENCES THAT CONVERT',
    attachedColor: 'text-offWhite-light dark:text-white',
  },
  // SEQ 02 - Slide Up Spring
  {
    id: 2,
    layout: 'standard',
    animType: 'slide-up',
    lines: [
      { text: 'WE BUILD HIGH IMPACT', color: 'text-offWhite-light dark:text-white', align: 'text-left' },
      { text: 'PRODUCTS THAT SCALE', color: 'text-teal dark:text-teal-light', align: 'text-right' },
    ],
  },
  // SEQ 03 - Vertical Lock & Right-to-Left Attach
  {
    id: 3,
    layout: 'vertical-attach',
    verticalText: 'FUTURE',
    verticalColor: 'text-softBlue dark:text-slate-200',
    attachedText: 'PROOF SOFTWARE ARCHITECTURE',
    attachedColor: 'text-teal dark:text-teal-light',
  },
  // SEQ 04 - 3D Perspective Flip
  {
    id: 4,
    layout: 'standard',
    animType: 'flip-3d',
    lines: [
      { text: 'CRAFTING MEMORABLE', color: 'text-softBlue dark:text-slate-200', align: 'text-left' },
      { text: 'USER EXPERIENCES', color: 'text-teal dark:text-teal-light', align: 'text-right' },
    ],
  },
  // SEQ 05 - Zoom & Blur Reveal
  {
    id: 5,
    layout: 'standard',
    animType: 'zoom-reveal',
    lines: [
      { text: 'NEXT-GEN WEB PLATFORMS', color: 'text-softBlue dark:text-slate-200', align: 'text-center' },
      { text: 'FULL-STACK SAAS & APPS', color: 'text-teal dark:text-teal-light', align: 'text-center' },
    ],
  },
  // SEQ 06 - Asymmetric Lateral Drift
  {
    id: 6,
    layout: 'standard',
    animType: 'asymmetric-drift',
    lines: [
      { text: 'HIGH PERFORMANCE', color: 'text-offWhite-light dark:text-white', align: 'text-left' },
      { text: 'CLOUD NATIVE', color: 'text-teal dark:text-teal-light', align: 'text-right' },
    ],
  },
  // SEQ 07 - Split Center Horizontal
  {
    id: 7,
    layout: 'standard',
    animType: 'split-center',
    lines: [
      { text: 'DISCOVER • DESIGN', color: 'text-offWhite-light dark:text-white', align: 'text-center' },
      { text: 'ENGINEER • LAUNCH', color: 'text-teal dark:text-teal-light', align: 'text-center' },
    ],
  },
  // SEQ 08 - Vertical Lock & Right-to-Left Attach
  {
    id: 8,
    layout: 'vertical-attach',
    verticalText: 'SIXBYTE',
    verticalColor: 'text-teal dark:text-teal-light',
    attachedText: 'ELEVATING GLOBAL BRANDS',
    attachedColor: 'text-offWhite-light dark:text-white',
  },
]

// Professional Floating Enterprise System Nodes with Spinning (+) Icons
const professionalFloatingNodes = [
  {
    id: 1,
    content: (
      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-teal-light">
        <Plus className="h-4 w-4 text-teal animate-spin" style={{ animationDuration: '8s' }} />
        <span>SYS.STATUS // ACTIVE</span>
      </div>
    ),
    position: 'top-6 left-6 sm:left-10',
    duration: 8,
    y: [-8, 8, -8],
  },
  {
    id: 2,
    content: (
      <div className="flex items-center gap-2 font-mono text-[11px] tracking-wider text-white/60 border border-white/10 bg-white/5 backdrop-blur-md px-3 py-1 rounded-md">
        <Plus className="h-3.5 w-3.5 text-teal-light animate-spin" style={{ animationDuration: '10s' }} />
        <span>99.99% UPTIME</span>
      </div>
    ),
    position: 'top-7 right-6 sm:right-10',
    duration: 10,
    y: [8, -10, 8],
  },
  {
    id: 3,
    content: (
      <div className="flex items-center gap-2 font-mono text-[11px] text-teal/80 border border-teal/20 bg-teal/10 backdrop-blur-md px-3 py-1 rounded-md">
        <Plus className="h-3.5 w-3.5 text-teal-light animate-spin" style={{ animationDuration: '12s' }} />
        <span>ENTERPRISE STACK</span>
      </div>
    ),
    position: 'bottom-8 left-6 sm:left-10',
    duration: 9,
    y: [-10, 10, -10],
  },
  {
    id: 4,
    content: (
      <div className="flex items-center gap-2 font-mono text-[11px] text-white/50 border border-white/10 bg-white/5 backdrop-blur-md px-3 py-1 rounded-md">
        <Plus className="h-3.5 w-3.5 text-emerald-400 animate-spin" style={{ animationDuration: '9s' }} />
        <span>SECURE ENDPOINTS</span>
      </div>
    ),
    position: 'bottom-8 right-6 sm:right-10',
    duration: 7,
    y: [10, -8, 10],
  },
]

// Background (+) Icons in Different Sizes Spinning Continuously
const backgroundSpinningPluses = [
  { id: 1, position: 'top-8 left-12', size: 'text-5xl sm:text-7xl', opacity: 'opacity-15 text-teal', speed: 20 },
  { id: 2, position: 'bottom-10 right-14', size: 'text-7xl sm:text-9xl', opacity: 'opacity-10 text-sky-400', speed: 25 },
  { id: 3, position: 'bottom-12 left-1/3', size: 'text-3xl sm:text-5xl', opacity: 'opacity-20 text-teal-light', speed: 15 },
  { id: 4, position: 'top-10 right-1/3', size: 'text-4xl sm:text-6xl', opacity: 'opacity-15 text-white', speed: 18 },
  { id: 5, position: 'left-6 top-1/2 -translate-y-1/2', size: 'text-2xl sm:text-4xl', opacity: 'opacity-25 text-teal', speed: 12 },
  { id: 6, position: 'right-6 top-1/2 -translate-y-1/2', size: 'text-3xl sm:text-5xl', opacity: 'opacity-20 text-teal-light', speed: 14 },
]

// Helper function to return sequence animation variants (pure — hoisted so it is
// not re-allocated on every 3.5s sequence change)
const getVariants = (animType: string, lineIndex: number) => {
  switch (animType) {
    case 'zoom-reveal':
      return {
        initial: { opacity: 0, scale: 0.85, filter: 'blur(8px)' },
        animate: { opacity: 1, scale: 1, filter: 'blur(0px)' },
        exit: { opacity: 0, scale: 1.1, filter: 'blur(6px)' },
        transition: { duration: 0.55, delay: lineIndex * 0.1, ease: [0.16, 1, 0.3, 1] as const },
      }
    case 'asymmetric-drift':
      return {
        initial: { opacity: 0, x: lineIndex % 2 === 0 ? -80 : 80 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: lineIndex % 2 === 0 ? 80 : -80 },
        transition: { duration: 0.6, delay: lineIndex * 0.1, ease: [0.22, 1, 0.36, 1] as const },
      }
    case 'flip-3d':
      return {
        initial: { opacity: 0, rotateX: 80, y: 30 },
        animate: { opacity: 1, rotateX: 0, y: 0 },
        exit: { opacity: 0, rotateX: -80, y: -30 },
        transition: { duration: 0.6, delay: lineIndex * 0.12, ease: [0.34, 1.56, 0.64, 1] as const },
      }
    case 'split-center':
      return {
        initial: { opacity: 0, scaleX: 0.7 },
        animate: { opacity: 1, scaleX: 1 },
        exit: { opacity: 0, scaleX: 1.25 },
        transition: { duration: 0.55, delay: lineIndex * 0.1, ease: [0.16, 1, 0.3, 1] as const },
      }
    case 'slide-up':
    default:
      return {
        initial: { opacity: 0, y: 55 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -45 },
        transition: { duration: 0.55, delay: lineIndex * 0.1, ease: [0.22, 1, 0.36, 1] as const },
      }
  }
}

/**
 * Continuous background layers (grid, marquee, glow orbs, spinning + symbols,
 * floating enterprise nodes). These do NOT depend on the active sequence, so
 * they are memoized to render once — the 3.5s sequence swap no longer forces a
 * costly reconciliation of ~12 infinite motion loops. `willChange: transform`
 * promotes each animated layer to its own compositor layer for smoother, GPU-
 * accelerated motion (transform/opacity only — no layout thrash).
 */
const KineticBackground = memo(function KineticBackground({ reduced }: { reduced: boolean | null }) {
  return (
    <>
      {/* 1. INFINITE BACKGROUND ELEMENT: Fine Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:36px_36px]" />

      {/* 2. INFINITE BACKGROUND ELEMENT: Continuous Horizontal Marquee Text */}
      {!reduced && (
        <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-0 right-0 overflow-hidden opacity-[0.06] z-0">
          <motion.div
            className="flex whitespace-nowrap text-6xl sm:text-8xl font-black uppercase tracking-widest text-teal-light"
            style={{ willChange: 'transform' }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          >
            <span>FULL STACK DEVELOPERS • SAAS ARCHITECTURE • CLOUD NATIVE • UI/UX DESIGN • BLAZING FAST PERF •&nbsp;</span>
            <span>FULL STACK DEVELOPERS • SAAS ARCHITECTURE • CLOUD NATIVE • UI/UX DESIGN • BLAZING FAST PERF •&nbsp;</span>
          </motion.div>
        </div>
      )}

      {/* 3. INFINITE BACKGROUND ELEMENT: Floating Ambient Glow Orbs */}
      {!reduced && (
        <>
          <motion.div
            className="pointer-events-none absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-teal/20 blur-3xl z-0"
            style={{ willChange: 'transform' }}
            animate={{ scale: [1, 1.3, 1], x: [-15, 15, -15] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="pointer-events-none absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-sky-500/15 blur-3xl z-0"
            style={{ willChange: 'transform' }}
            animate={{ scale: [1.3, 1, 1.3], y: [-15, 15, -15] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}

      {/* 4. BACKGROUND (+) SYMBOLS IN VARIOUS SIZES SPINNING CONTINUOUSLY */}
      {!reduced &&
        backgroundSpinningPluses.map((plus) => (
          <motion.div
            key={plus.id}
            className={`pointer-events-none absolute font-light z-0 ${plus.position} ${plus.size} ${plus.opacity}`}
            style={{ willChange: 'transform' }}
            animate={{ rotate: plus.id % 2 === 0 ? [0, 360] : [360, 0] }}
            transition={{ duration: plus.speed, repeat: Infinity, ease: 'linear' }}
          >
            +
          </motion.div>
        ))}

      {/* 5. PROFESSIONAL FLOATING ENTERPRISE NODES WITH SPINNING (+) ICONS */}
      {!reduced &&
        professionalFloatingNodes.map((node) => (
          <motion.div
            key={node.id}
            className={`pointer-events-none absolute z-10 ${node.position}`}
            style={{ willChange: 'transform' }}
            animate={{ y: node.y }}
            transition={{
              duration: node.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {node.content}
          </motion.div>
        ))}
    </>
  )
})

export default function KineticTypographySection() {
  const [index, setIndex] = useState(0)
  const prefersReducedMotion = useReducedMotion()

  // Automatic looping playback controller (3.5 seconds per sequence)
  useEffect(() => {
    if (prefersReducedMotion) return

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % sequences.length)
    }, 3500)

    return () => clearInterval(timer)
  }, [prefersReducedMotion])

  const currentSeq = sequences[index]

  return (
    <div className="w-full py-10 sm:py-16 px-4 sm:px-6">
      {/* 90% WIDTH BOXED CARD CONTAINER WITH MARGIN GAPS AND CORNER RADIUS */}
      <section className="relative h-[440px] sm:h-[480px] w-full sm:w-[92%] lg:w-[90%] max-w-[90%] mx-auto rounded-3xl border border-white/15 bg-[#0E1A2E] shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-white select-none overflow-hidden">
        {/* Continuous, sequence-independent background (memoized) */}
        <KineticBackground reduced={prefersReducedMotion} />

        {/* INNER STAGE CONTAINER */}
        <div className="relative z-20 mx-auto flex h-full w-full flex-col items-center justify-center px-6 py-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSeq.id}
              className="flex w-full flex-col items-center justify-center text-center"
            >
              {/* VERTICAL-ATTACH MOTION LAYOUT */}
              {currentSeq.layout === 'vertical-attach' ? (
                <div className="flex items-center justify-center gap-3 sm:gap-6">
                  {/* Rotated Vertical Anchor Text */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -90, y: 30 }}
                    animate={{ opacity: 1, scale: 1, rotate: -90, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: -90, y: -30 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
                    className={`text-[clamp(18px,3vw,42px)] font-black uppercase tracking-widest whitespace-nowrap ${currentSeq.verticalColor}`}
                  >
                    <div className="relative inline-block">
                      <span>{currentSeq.verticalText}</span>
                      <svg
                        className="absolute -bottom-1.5 left-0 h-2.5 w-full text-teal dark:text-teal-light overflow-visible pointer-events-none"
                        viewBox="0 0 120 20"
                        fill="none"
                      >
                        <motion.path
                          d="M3 14 C 40 4, 80 18, 117 10"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{
                            duration: 1.1,
                            delay: 0.2,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Right-to-Left Sliding Attached Text */}
                  <motion.div
                    initial={{ opacity: 0, x: 120, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, x: -80, filter: 'blur(6px)' }}
                    transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
                    className={`text-[clamp(20px,3.6vw,50px)] font-extrabold leading-[1.05] tracking-tight text-left max-w-lg ${currentSeq.attachedColor}`}
                  >
                    {currentSeq.attachedText}
                  </motion.div>
                </div>
              ) : (
                /* STANDARD KINETIC LINE SEQUENCES */
                <div className="flex w-full flex-col items-center justify-center space-y-1 sm:space-y-2">
                  {currentSeq.lines?.map((line, i) => {
                    const animProps = getVariants(currentSeq.animType || 'slide-up', i)
                    return (
                      <div key={`${currentSeq.id}-${line.text}`} className={`w-full overflow-hidden ${line.align}`}>
                        <motion.div
                          initial={animProps.initial}
                          animate={animProps.animate}
                          exit={animProps.exit}
                          transition={animProps.transition}
                          className={`text-[clamp(22px,4vw,56px)] font-extrabold leading-[1.0] tracking-tight ${line.color}`}
                        >
                          {line.text}
                        </motion.div>
                      </div>
                    )
                  })}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
