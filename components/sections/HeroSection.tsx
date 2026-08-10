import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const highlights = [
  'Strategy-led structure',
  'Clear messaging',
  'Built for trust and conversion',
]

const stats = [
  { value: '150+', label: 'Projects launched' },
  { value: '98%', label: 'Client satisfaction' },
  { value: '3x', label: 'Avg. lead lift' },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_46%,#f8fafc_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(59,130,246,0.16),transparent_16%),radial-gradient(circle_at_74%_24%,rgba(249,115,22,0.12),transparent_14%),radial-gradient(circle_at_84%_78%,rgba(15,118,110,0.09),transparent_18%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_20%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      <div
        className="absolute left-[-6rem] top-[-4rem] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.22),transparent_62%)] blur-2xl animate-float-soft"
        style={{ animationDuration: '13s' }}
      />
      <div className="absolute left-[-12rem] top-[12rem] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.14),transparent_62%)] blur-3xl animate-float-soft" />
      <div
        className="absolute right-[-6rem] top-[4rem] h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.2),transparent_64%)] blur-2xl animate-float-soft"
        style={{ animationDuration: '15s', animationDelay: '-4s' }}
      />
      <div className="absolute right-[-14rem] top-[10rem] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.14),transparent_64%)] blur-3xl animate-float-soft" />
      <div className="absolute bottom-[-7rem] right-[-4rem] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(15,118,110,0.14),transparent_60%)] blur-2xl animate-float-soft" />
      <div className="absolute left-[-10rem] bottom-[-9rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(15,118,110,0.12),transparent_62%)] blur-3xl animate-float-soft" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-3rem] top-[4rem] h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.95),rgba(255,255,255,0.22)_46%,transparent_72%)] opacity-75" />
        <div className="absolute left-[-6rem] top-[30%] h-44 w-44 rounded-full border border-blue-300/35" />
        <div className="absolute left-[-4rem] bottom-[18%] h-16 w-16 rounded-full bg-amber-400 shadow-[0_0_0_14px_rgba(245,158,11,0.12)]" />
        <div className="absolute left-[26%] top-[8%] h-24 w-24 rounded-full border border-slate-300/40" />
        <div className="absolute left-[34%] top-[12%] h-4 w-4 rounded-full bg-amber-400 shadow-[0_0_0_10px_rgba(245,158,11,0.12)]" />
        <div className="absolute left-[22%] bottom-[15%] h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_0_9px_rgba(59,130,246,0.12)]" />
        <div className="absolute right-[28%] top-[20%] h-20 w-20 rounded-full border border-blue-300/40" />
        <div className="absolute right-[-7rem] top-[26%] h-52 w-52 rounded-full border border-amber-300/35" />
        <div className="absolute right-[-5rem] bottom-[16%] h-[4.5rem] w-[4.5rem] rounded-full bg-blue-500 shadow-[0_0_0_14px_rgba(59,130,246,0.12)]" />
        <div className="absolute left-[7%] top-[17%] h-28 w-28 rounded-full border border-blue-300/40" />
        <div className="absolute left-[12%] top-[21%] h-14 w-14 rounded-full border border-amber-300/60" />
        <div className="absolute right-[16%] top-[14%] h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_0_10px_rgba(245,158,11,0.12)]" />
        <div className="absolute right-[10%] top-[23%] h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_0_8px_rgba(59,130,246,0.12)]" />
        <div className="absolute left-[9%] bottom-[16%] h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.24),transparent_70%)] blur-lg" />
        <div className="absolute right-[8%] bottom-[12%] h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.2),transparent_72%)] blur-lg" />
        <div className="absolute inset-x-0 top-16 h-[30rem] bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(circle_at_center,black_34%,transparent_76%)] opacity-45" />
        <div className="absolute left-1/2 top-[22%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full border border-dashed border-amber-300/25 opacity-70" />
        <div className="absolute left-1/2 top-[28%] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full border border-slate-300/35 opacity-60" />
        <div className="absolute left-[42%] top-[18%] h-2 w-2 rounded-full bg-teal-500 shadow-[0_0_0_8px_rgba(20,184,166,0.1)]" />
        <div className="absolute right-[40%] bottom-[24%] h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_0_8px_rgba(249,115,22,0.12)]" />
        <div className="absolute left-[18%] top-[9%] h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_0_8px_rgba(59,130,246,0.12)]" />
        <div className="absolute left-[22%] bottom-[18%] h-20 w-20 rounded-full border border-slate-300/35" />
        <div className="absolute right-[24%] bottom-[14%] h-16 w-16 rounded-full border border-amber-300/45" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* <div
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-electric shadow-sm backdrop-blur-sm animate-fade-down"
            style={{ animationDelay: '80ms' }}
          >
            <span className="h-2 w-2 rounded-full bg-electric" />
            Modern websites for growing businesses
          </div> */}

          <h1
            className="mt-6 text-4xl font-bold leading-[1.02] text-slate-950 text-balance sm:text-5xl lg:text-6xl animate-fade-down"
            style={{ animationDelay: '140ms' }}
          >
            Websites that look{' '}
            <span className="bg-gradient-to-r from-electric via-sky-500 to-amber-400 bg-clip-text text-transparent">
              premium
            </span>
            , feel trustworthy, and turn visits into real conversations.
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg animate-fade-down"
            style={{ animationDelay: '200ms' }}
          >
            We craft polished digital experiences with clear structure, strong visual hierarchy, and the kind of
            confidence that helps people trust your business faster.
          </p>

          <div
            className="mt-8 flex flex-wrap justify-center gap-3 animate-fade-down"
            style={{ animationDelay: '260ms' }}
          >
            {highlights.map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-sm text-slate-600 shadow-sm backdrop-blur-sm"
              >
                <CheckCircle2 className="h-4 w-4 text-electric" />
                {item}
              </div>
            ))}
          </div>

          <div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-down"
            style={{ animationDelay: '320ms' }}
          >
            <Link href="/contact" className="btn-primary">
              Start your project <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/portfolio" className="btn-outline-navy">
              See selected work
            </Link>
          </div>

          <div
            className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3 animate-fade-down"
            style={{ animationDelay: '380ms' }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[1.35rem] border border-slate-200 bg-white/85 p-4 shadow-sm backdrop-blur-sm">
                <div className="text-2xl font-bold text-slate-950">{stat.value}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
