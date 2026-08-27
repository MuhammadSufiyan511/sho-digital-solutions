'use client'

import { useEffect, useRef } from 'react'

export default function SquaresBackground({
  speed = 0.4,
  squareSize = 52,
  direction = 'diagonal',
  borderColor = 'rgba(15, 118, 110, 0.09)',
  hoverFillColor = 'rgba(15, 118, 110, 0.18)',
}: {
  speed?: number
  squareSize?: number
  direction?: 'diagonal' | 'up' | 'down' | 'right' | 'left'
  borderColor?: string
  hoverFillColor?: string
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const gridOffset = useRef({ x: 0, y: 0 })
  const hoveredSquare = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let animationFrameId: number
    const isMobile = window.innerWidth < 768
    const effectiveSquareSize = isMobile ? 64 : squareSize

    const resizeCanvas = () => {
      if (!canvas.parentElement) return
      canvas.width = canvas.parentElement.clientWidth
      canvas.height = canvas.parentElement.clientHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas, { passive: true })

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const mouseX = event.clientX - rect.left
      const mouseY = event.clientY - rect.top

      const startX = Math.floor((mouseX - gridOffset.current.x) / effectiveSquareSize)
      const startY = Math.floor((mouseY - gridOffset.current.y) / effectiveSquareSize)

      hoveredSquare.current = { x: startX, y: startY }
    }

    const handleMouseLeave = () => {
      hoveredSquare.current = null
    }

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true })
      canvas.addEventListener('mouseleave', handleMouseLeave)
    }

    const draw = () => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(draw)
        return
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const numCols = Math.ceil(canvas.width / effectiveSquareSize) + 2
      const numRows = Math.ceil(canvas.height / effectiveSquareSize) + 2

      gridOffset.current.x = (gridOffset.current.x + speed) % effectiveSquareSize
      gridOffset.current.y = (gridOffset.current.y + speed) % effectiveSquareSize

      ctx.strokeStyle = borderColor
      ctx.lineWidth = 0.5

      for (let i = -1; i < numCols; i++) {
        for (let j = -1; j < numRows; j++) {
          const x = i * effectiveSquareSize + gridOffset.current.x
          const y = j * effectiveSquareSize + gridOffset.current.y

          if (
            hoveredSquare.current &&
            hoveredSquare.current.x === i &&
            hoveredSquare.current.y === j
          ) {
            ctx.fillStyle = hoverFillColor
            ctx.fillRect(x, y, effectiveSquareSize, effectiveSquareSize)
          }

          ctx.strokeRect(x, y, effectiveSquareSize, effectiveSquareSize)
        }
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove)
        canvas.removeEventListener('mouseleave', handleMouseLeave)
      }
      cancelAnimationFrame(animationFrameId)
    }
  }, [speed, squareSize, direction, borderColor, hoverFillColor])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
    />
  )
}
