import { Reveal, Stagger, StaggerItem } from '@/components/animations/Motion'

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
    <section className="relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,118,110,0.06),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.03),transparent_24%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      <Reveal className="absolute left-1/2 top-8 h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-electric/10 blur-[120px] sm:h-[320px] sm:w-[320px]" distance={0} />

      <Stagger className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <StaggerItem>
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-electric shadow-sm dark:border-slate-700 dark:bg-slate-900/80 dark:text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-electric" />
            {tag}
          </p>
        </StaggerItem>

        <StaggerItem>
          <h1 className="heading-accent heading-accent-center mx-auto mt-6 max-w-4xl text-3xl font-bold leading-[1.06] text-slate-950 text-balance sm:text-5xl lg:text-6xl dark:text-slate-50">
            {title}
          </h1>
        </StaggerItem>

        <StaggerItem>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg dark:text-slate-300">
            {subtitle}
          </p>
        </StaggerItem>

        {chips.length > 0 && (
          <StaggerItem>
            <div className="mt-7 flex flex-wrap justify-center gap-2.5 sm:gap-3">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-slate-200 bg-white/80 px-3.5 py-2 text-xs text-slate-600 shadow-sm sm:px-4 sm:text-sm dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
                >
                  {chip}
                </span>
              ))}
            </div>
          </StaggerItem>
        )}

        {(panelTitle || panelBody || panelStats.length > 0) && (
          <StaggerItem>
            <div className="mx-auto mt-10 max-w-4xl sm:mt-14">
              <div className="surface-card rounded-[1.5rem] p-3 text-left shadow-[0_24px_50px_rgba(15,23,42,0.08)] sm:rounded-[2rem] sm:p-4">
                <div className="rounded-[1.25rem] border border-slate-200 bg-white p-4 sm:rounded-[1.5rem] sm:p-6 dark:border-slate-700 dark:bg-slate-900">
                  <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-center">
                    <div>
                      {panelTitle && (
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-300">
                          {panelTitle}
                        </p>
                      )}
                      <p className="mt-3 text-lg font-bold text-slate-950 sm:text-xl dark:text-slate-50">{title}</p>
                      {panelBody && <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">{panelBody}</p>}
                    </div>

                    <Stagger className="grid gap-3 sm:grid-cols-3">
                      {(panelStats.length > 0 ? panelStats : ['Clear', 'Polished', 'Reliable']).map((item) => (
                        <StaggerItem
                          key={item}
                          className="rounded-[1.25rem] border border-slate-200 bg-slate-50 px-4 py-4 text-center text-sm font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                        >
                          {item}
                        </StaggerItem>
                      ))}
                    </Stagger>
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>
        )}
      </Stagger>
    </section>
  )
}
