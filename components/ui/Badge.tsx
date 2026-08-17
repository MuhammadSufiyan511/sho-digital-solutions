interface BadgeProps {
  children: React.ReactNode
  variant?: 'blue' | 'navy' | 'gray' | 'green'
}

const variants = {
  blue: 'border border-teal/20 bg-teal/10 text-teal dark:border-teal/30 dark:bg-teal/20 dark:text-teal-light',
  navy: 'border border-navy/20 bg-navy/10 text-navy dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200',
  gray: 'border border-slate-200 bg-slate-100 text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300',
  green: 'border border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900/50 dark:bg-emerald-950/40 dark:text-emerald-300',
}

export default function Badge({ children, variant = 'blue' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${variants[variant]}`}
    >
      {children}
    </span>
  )
}
