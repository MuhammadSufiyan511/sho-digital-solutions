'use client'

import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'

type HeaderPlusIconProps = {
  light?: boolean
  className?: string
}

export default function HeaderPlusIcon({ light = false, className = '' }: HeaderPlusIconProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -20, scale: 0.6, x: 28, rotate: 0 },
        visible: {
          opacity: [0, 1, 1, 1],
          y: [-20, 3, 0, 0],
          scale: [0.6, 1.15, 1.0, 1.0],
          x: [28, 28, 28, 0],
          rotate: [0, 0, 180, 360],
          transition: {
            duration: 1.15,
            times: [0, 0.35, 0.6, 1],
            ease: [0.25, 1, 0.5, 1],
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`inline-flex shrink-0 items-center justify-center p-0 border-0 bg-transparent shadow-none ${
        light ? 'text-teal-light' : 'text-teal dark:text-teal-light'
      } ${className}`}
    >
      <Plus className="h-4 w-4 stroke-[3]" />
    </motion.div>
  )
}
