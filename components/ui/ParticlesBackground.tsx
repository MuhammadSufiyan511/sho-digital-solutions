'use client'

import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  alpha: number
}

export default function ParticlesBackground({
  quantity = 30,
  color = '15, 118, 110', // teal rgb
}: {
  quantity?: number
  color?: string
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let animationFrameId: number

    // Device performance adaptation
    const isMobile = window.innerWidth < 768
    const isLowEnd = typeof navigator !== 'undefined' && navigator.hardwareConcurrency ? navigator.hardwareConcurrency <= 4 : false
    const count = isMobile || isLowEnd ? Math.min(quantity, 16) : Math.min(quantity, 35)

    const resize = () => {
      if (!canvas.parentElement) return
      canvas.width = canvas.parentElement.clientWidth
      canvas.height = canvas.parentElement.clientHeight
      initParticles()
    }

    const initParticles = () => {
      const particles: Particle[] = []
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.8 + 1,
          alpha: Math.random() * 0.4 + 0.1,
        })
      }
      particlesRef.current = particles
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    resize()
    window.addEventListener('resize', resize, { passive: true })
    if (!isMobile) {
      window.addEventListener('mousemove', onMouseMove, { passive: true })
    }

    const render = () => {
      // Pause rendering when tab is inactive to save battery and CPU
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(render)
        return
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const mx = mouseRef.current.x
      const my = mouseRef.current.y
      const particles = particlesRef.current

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Mouse interaction (desktop only)
        if (!isMobile) {
          const dx = mx - p.x
          const dy = my - p.y
          const distSq = dx * dx + dy * dy

          if (distSq < 10000 && distSq > 0) { // 100px radius
            const dist = Math.sqrt(distSq)
            p.x += (dx / dist) * 0.3
            p.y += (dy / dist) * 0.3
          }
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color}, ${p.alpha})`
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', resize)
      if (!isMobile) {
        window.removeEventListener('mousemove', onMouseMove)
      }
      cancelAnimationFrame(animationFrameId)
    }
  }, [quantity, color])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
    />
  )
}
