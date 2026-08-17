'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Fluid spring configuration for smooth trailing ring
  const springConfig = { damping: 28, stiffness: 400, mass: 0.3 }
  const trailingX = useSpring(cursorX, springConfig)
  const trailingY = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Only enable custom cursor on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseDown = () => setIsClicked(true)
    const handleMouseUp = () => setIsClicked(false)

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('cursor-pointer') ||
          target.getAttribute('data-cursor') === 'hover')
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    const handleMouseLeaveWindow = () => setIsVisible(false)
    const handleMouseEnterWindow = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mouseover', handleMouseOver)
    document.body.addEventListener('mouseleave', handleMouseLeaveWindow)
    document.body.addEventListener('mouseenter', handleMouseEnterWindow)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mouseover', handleMouseOver)
      document.body.removeEventListener('mouseleave', handleMouseLeaveWindow)
      document.body.removeEventListener('mouseenter', handleMouseEnterWindow)
    }
  }, [cursorX, cursorY])

  if (!isVisible) return null

  return (
    <>
      {/* 1. Precise Inner Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal shadow-[0_0_12px_rgba(15,118,110,0.9)] dark:bg-teal-light"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isClicked ? 0.6 : isHovered ? 0 : 1,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* 2. Fluid Trailing Ring with Magnetic Expansion on Hover */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal/70 backdrop-blur-[1px] dark:border-teal-light/70"
        style={{
          x: trailingX,
          y: trailingY,
        }}
        animate={{
          scale: isClicked ? 0.75 : isHovered ? 1.8 : 1,
          backgroundColor: isHovered ? 'rgba(15, 118, 110, 0.15)' : 'transparent',
          borderColor: isHovered ? '#0F766E' : 'rgba(15, 118, 110, 0.5)',
        }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
      />
    </>
  )
}
