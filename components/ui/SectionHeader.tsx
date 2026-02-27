interface SectionHeaderProps {
  tag?: string
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
}

export default function SectionHeader({ tag, title, subtitle, center = false, light = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {tag && (
        <span
          className={`inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4 ${
            light ? 'bg-white/10 text-blue-200' : 'bg-electric/10 text-electric'
          }`}
        >
          {tag}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold leading-tight ${
          light ? 'text-white' : 'text-navy'
        }`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''} ${
            light ? 'text-blue-200' : 'text-gray-500'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
