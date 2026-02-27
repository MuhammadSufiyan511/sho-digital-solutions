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
      className={`bg-white rounded-xl border border-gray-100 shadow-sm ${paddings[padding]} ${
        hover ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gray-200' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}

export function DarkCard({ children, className = '', hover = true, padding = 'md' }: CardProps) {
  return (
    <div
      className={`bg-navy/50 border border-white/10 rounded-xl backdrop-blur-sm ${paddings[padding]} ${
        hover ? 'transition-all duration-300 hover:-translate-y-1 hover:border-electric/30 hover:bg-navy/70' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
