interface BadgeProps {
  children: React.ReactNode
  variant?: 'blue' | 'navy' | 'gray' | 'green'
}

const variants = {
  blue: 'bg-electric/10 text-electric',
  navy: 'bg-navy/10 text-navy',
  gray: 'bg-slate-100 text-slate-600',
  green: 'bg-emerald-50 text-emerald-700',
}

export default function Badge({ children, variant = 'blue' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${variants[variant]}`}>
      {children}
    </span>
  )
}
