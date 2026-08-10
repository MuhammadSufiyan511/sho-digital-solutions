interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

const paddings = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export default function Card({ children, className = '', hover = true, padding = 'md' }: CardProps) {
  return (
    <div
      className={`surface-card rounded-2xl ${paddings[padding]} ${
        hover ? 'transition-all duration-300 hover:-translate-y-1 hover:border-electric/20 hover:shadow-2xl' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}

export function DarkCard({ children, className = '', hover = true, padding = 'md' }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-navy/80 backdrop-blur-sm ${paddings[padding]} ${
        hover ? 'transition-all duration-300 hover:-translate-y-1 hover:border-electric/30 hover:bg-navy' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
