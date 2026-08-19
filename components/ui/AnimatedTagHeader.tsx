'use client'

import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'

type AnimatedTagHeaderProps = {
  tag?: string
  light?: boolean
  center?: boolean
  className?: string
}

/**
 * Kinetic heading animation:
 * 1. Nothing visible at first
 * 2. The (+) icon fades in at the FAR RIGHT
 * 3. Icon immediately starts spinning and glides LEFT smoothly (no pause)
 * 4. As it moves left, characters snap into view one-by-one behind it (no fade — instant appear)
 * 5. Final state: [+ T A G   T E X T]
 */
export default function AnimatedTagHeader({
  tag,
  light = false,
  center = false,
  className = '',
}: AnimatedTagHeaderProps) {
  const letters = tag ? Array.from(tag) : []
  const totalChars = letters.length

  // Approximate pixel distance the icon travels
  const travelDistance = totalChars * 9.5 + 16

  // Total duration for the icon sweep
  const sweepDuration = 1.3
  // Small initial delay for icon to fade in before it starts moving
  const fadeInTime = 0.15

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`relative inline-flex items-center ${center ? 'justify-center' : 'justify-start'} ${className}`}
    >
      {/* (+) icon — fades in at far right, then immediately spins smoothly to the left. No pause. */}
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: travelDistance,
            rotate: 0,
          },
          visible: {
            opacity: 1,
            x: 0,
            rotate: 720,
            transition: {
              opacity: { duration: 0.1, ease: 'easeOut' },
              x: { duration: sweepDuration, delay: fadeInTime, ease: [0.35, 0, 0.25, 1] },
              rotate: { duration: sweepDuration, delay: fadeInTime, ease: 'linear' },
            },
          },
        }}
        className={`relative z-10 inline-flex shrink-0 items-center justify-center p-0 border-0 bg-transparent shadow-none ${light ? 'text-teal-light' : 'text-teal dark:text-teal-light'
          }`}
      >
        <Plus className="h-4 w-4 stroke-[3]" />
      </motion.div>

      {/* Characters — snap into view right-to-left as the icon sweeps past. No fade, just instant appear. */}
      {tag && (
        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: fadeInTime,
                staggerChildren: totalChars > 1 ? sweepDuration / (totalChars - 1) : 0,
                staggerDirection: -1,
              },
            },
          }}
          className={`ml-2.5 flex items-center text-xs font-bold uppercase tracking-[0.2em] ${light ? 'text-teal-light' : 'text-teal dark:text-teal-light'
            }`}
        >
          {letters.map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 0 },
                },
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.div>
      )}
    </motion.div>
  )
}
