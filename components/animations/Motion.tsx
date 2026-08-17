'use client'

import type { ReactNode } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'

type RevealProps = {
  children?: ReactNode
  className?: string
  delay?: number
  distance?: number
}

type StaggerProps = {
  children: ReactNode
  className?: string
  delay?: number
}

type StaggerItemProps = {
  children: ReactNode
  className?: string
}

function useRevealVariants(delay = 0, distance = 16): Variants {
  const prefersReducedMotion = useReducedMotion()

  return {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : distance,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.45,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }
}

export function Reveal({ children, className, delay = 0, distance = 16 }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={useRevealVariants(delay, distance)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  )
}

export function Stagger({ children, className, delay = 0 }: StaggerProps) {
  const prefersReducedMotion = useReducedMotion()

  const variants: Variants = {
    hidden: {},
    visible: {
      transition: prefersReducedMotion
        ? undefined
        : {
            delayChildren: delay,
            staggerChildren: 0.07,
          },
    },
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion()

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 14,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  )
}
