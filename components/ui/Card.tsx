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
      className={`surface-card rounded-xl ${paddings[padding]} ${
        hover ? 'transition-all duration-200 hover:border-teal/30 hover:shadow-md' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}

export function DarkCard({ children, className = '', hover = true, padding = 'md' }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-slate-800 bg-[#0E1A2E] text-slate-100 ${paddings[padding]} ${
        hover ? 'transition-all duration-200 hover:border-teal/50' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
