interface BadgeProps {
  children: React.ReactNode
  variant?: 'blue' | 'navy' | 'gray' | 'green'
}

const variants = {
  blue: 'bg-electric/10 text-electric',
  navy: 'bg-navy/10 text-navy',
  gray: 'bg-gray-100 text-gray-600',
  green: 'bg-green-50 text-green-700',
}

export default function Badge({ children, variant = 'blue' }: BadgeProps) {
  return (
    <span className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full ${variants[variant]}`}>
      {children}
    </span>
  )
}
