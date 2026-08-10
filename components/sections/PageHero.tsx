type PageHeroProps = {
  tag: string
  title: string
  subtitle: string
  chips?: string[]
  panelTitle?: string
  panelBody?: string
  panelStats?: string[]
}

export default function PageHero({
  tag,
  title,
  subtitle,
  chips = [],
  panelTitle,
  panelBody,
  panelStats = [],
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,118,110,0.06),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.03),transparent_24%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      <div className="absolute left-1/2 top-8 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-electric/10 blur-[120px] animate-float-soft" />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-electric shadow-sm">
          <span className="h-2 w-2 rounded-full bg-electric" />
          {tag}
        </p>

        <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.04] text-slate-950 text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">{subtitle}</p>

        {chips.length > 0 && (
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-600 shadow-sm"
              >
                {chip}
              </span>
            ))}
          </div>
        )}

        {(panelTitle || panelBody || panelStats.length > 0) && (
          <div className="mx-auto mt-14 max-w-4xl">
            <div className="surface-card rounded-[2rem] p-4 text-left shadow-[0_24px_50px_rgba(15,23,42,0.08)]">
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6">
                <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
                  <div>
                    {panelTitle && (
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                        {panelTitle}
                      </p>
                    )}
                    <p className="mt-3 text-xl font-bold text-slate-950">{title}</p>
                    {panelBody && <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">{panelBody}</p>}
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {(panelStats.length > 0 ? panelStats : ['Clear', 'Polished', 'Reliable']).map((item) => (
                      <div
                        key={item}
                        className="rounded-[1.25rem] border border-slate-200 bg-slate-50 px-4 py-4 text-center text-sm font-medium text-slate-700 shadow-sm"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
