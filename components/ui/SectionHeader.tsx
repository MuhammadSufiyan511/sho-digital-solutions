interface SectionHeaderProps {
  tag?: string
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
}

export default function SectionHeader({ tag, title, subtitle, center = false, light = false }: SectionHeaderProps) {
  return (
    <div className={`mb-10 sm:mb-12 ${center ? 'text-center' : ''}`}>
      {tag && (
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] mb-4 ${
            light ? 'bg-white/10 text-white/80' : 'bg-electric/10 text-electric'
          }`}
        >
          {tag}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-balance ${
          light ? 'text-white' : 'text-navy dark:text-slate-50'
        } heading-accent ${center ? 'heading-accent-center' : ''}`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-sm leading-relaxed sm:text-base md:text-lg ${center ? 'mx-auto' : ''} ${
            light ? 'text-white/70' : 'text-slate-600 dark:text-slate-300'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
