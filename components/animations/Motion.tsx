'use client'

import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

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

function useRevealVariants(delay = 0, distance = 22) {
  const prefersReducedMotion = useReducedMotion()

  return {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : distance,
      filter: prefersReducedMotion ? 'none' : 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'none',
      transition: {
        duration: prefersReducedMotion ? 0 : 0.55,
        delay,
      },
    },
  }
}

export function Reveal({ children, className, delay = 0, distance = 22 }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={useRevealVariants(delay, distance)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.24 }}
    >
      {children}
    </motion.div>
  )
}

export function Stagger({ children, className, delay = 0 }: StaggerProps) {
  const prefersReducedMotion = useReducedMotion()

  const variants = {
    hidden: {},
    visible: {
      transition: prefersReducedMotion
        ? undefined
        : {
            delayChildren: delay,
            staggerChildren: 0.08,
          },
    },
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          y: prefersReducedMotion ? 0 : 18,
          filter: prefersReducedMotion ? 'none' : 'blur(3px)',
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: 'none',
          transition: {
            duration: prefersReducedMotion ? 0 : 0.5,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
