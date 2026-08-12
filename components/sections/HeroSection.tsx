'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Stagger, StaggerItem } from '@/components/animations/Motion'

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
  const sectionRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const prefersReducedMotion = useReducedMotion()
  const leftBlobY = useTransform(scrollYProgress, [0, 1], [0, -90])
  const leftBlobX = useTransform(scrollYProgress, [0, 1], [0, 18])
  const leftBlobScale = useTransform(scrollYProgress, [0, 1], [1, 1.04])
  const rightBlobY = useTransform(scrollYProgress, [0, 1], [0, 110])
  const rightBlobX = useTransform(scrollYProgress, [0, 1], [0, -22])
  const rightBlobScale = useTransform(scrollYProgress, [0, 1], [1, 1.05])
  const bottomBlobY = useTransform(scrollYProgress, [0, 1], [0, 70])
  const bottomBlobScale = useTransform(scrollYProgress, [0, 1], [1, 1.03])
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -40])

  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-16 dark:bg-[linear-gradient(180deg,#020617_0%,#0b1020_48%,#020617_100%)]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_46%,#f8fafc_100%)] dark:hidden" />
      <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_20%_15%,rgba(34,211,238,0.18),transparent_18%),radial-gradient(circle_at_78%_18%,rgba(59,130,246,0.18),transparent_14%),radial-gradient(circle_at_85%_78%,rgba(168,85,247,0.16),transparent_20%),radial-gradient(circle_at_bottom_left,rgba(15,118,110,0.18),transparent_22%)] dark:block" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-cyan-300/60" />
      <motion.div
        className="absolute left-[-6rem] top-[-4rem] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.22),transparent_62%)] blur-2xl dark:bg-[radial-gradient(circle,rgba(34,211,238,0.26),transparent_62%)]"
        style={
          prefersReducedMotion
            ? undefined
            : {
                y: leftBlobY,
                x: leftBlobX,
              }
        }
      />
      <motion.div
        className="absolute left-[-12rem] top-[12rem] hidden h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.14),transparent_62%)] blur-3xl sm:block dark:bg-[radial-gradient(circle,rgba(168,85,247,0.22),transparent_62%)]"
        style={prefersReducedMotion ? undefined : { y: leftBlobY, scale: leftBlobScale }}
      />
      <motion.div
        className="absolute right-[-6rem] top-[4rem] h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.2),transparent_64%)] blur-2xl dark:bg-[radial-gradient(circle,rgba(59,130,246,0.22),transparent_64%)]"
        style={
          prefersReducedMotion
            ? undefined
            : {
                y: rightBlobY,
                x: rightBlobX,
              }
        }
      />
      <motion.div
        className="absolute right-[-14rem] top-[10rem] hidden h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.14),transparent_64%)] blur-3xl sm:block dark:bg-[radial-gradient(circle,rgba(34,211,238,0.18),transparent_64%)]"
        style={prefersReducedMotion ? undefined : { y: rightBlobY, scale: rightBlobScale }}
      />
      <motion.div
        className="absolute bottom-[-7rem] right-[-4rem] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(15,118,110,0.14),transparent_60%)] blur-2xl dark:bg-[radial-gradient(circle,rgba(34,211,238,0.22),transparent_60%)]"
        style={prefersReducedMotion ? undefined : { y: bottomBlobY }}
      />
      <motion.div
        className="absolute left-[-10rem] bottom-[-9rem] hidden h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(15,118,110,0.12),transparent_62%)] blur-3xl sm:block dark:bg-[radial-gradient(circle,rgba(168,85,247,0.18),transparent_62%)]"
        style={prefersReducedMotion ? undefined : { y: bottomBlobY, scale: bottomBlobScale }}
      />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-3rem] top-[4rem] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.95),rgba(255,255,255,0.22)_46%,transparent_72%)] opacity-75 sm:h-96 sm:w-96 dark:hidden" />
        <div className="absolute left-[-3rem] top-[4rem] hidden h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.18),rgba(34,211,238,0.08)_45%,transparent_72%)] opacity-90 blur-2xl sm:h-96 sm:w-96 dark:block" />
        <div className="absolute left-[-6rem] top-[30%] hidden h-44 w-44 rounded-full border border-blue-300/35 sm:block" />
        <div className="absolute left-[-4rem] bottom-[18%] hidden h-16 w-16 rounded-full bg-amber-400 shadow-[0_0_0_14px_rgba(245,158,11,0.12)] sm:block" />
        <div className="absolute left-[26%] top-[8%] hidden h-24 w-24 rounded-full border border-slate-300/40 lg:block" />
        <div className="absolute left-[34%] top-[12%] hidden h-4 w-4 rounded-full bg-amber-400 shadow-[0_0_0_10px_rgba(245,158,11,0.12)] lg:block" />
        <div className="absolute left-[22%] bottom-[15%] hidden h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_0_9px_rgba(59,130,246,0.12)] lg:block" />
        <div className="absolute right-[28%] top-[20%] hidden h-20 w-20 rounded-full border border-blue-300/40 lg:block" />
        <div className="absolute right-[-7rem] top-[26%] hidden h-52 w-52 rounded-full border border-amber-300/35 lg:block" />
        <div className="absolute right-[-5rem] bottom-[16%] hidden h-[4.5rem] w-[4.5rem] rounded-full bg-blue-500 shadow-[0_0_0_14px_rgba(59,130,246,0.12)] sm:block" />
        <div className="absolute left-[7%] top-[17%] hidden h-28 w-28 rounded-full border border-blue-300/40 lg:block" />
        <div className="absolute left-[12%] top-[21%] hidden h-14 w-14 rounded-full border border-amber-300/60 lg:block" />
        <div className="absolute right-[16%] top-[14%] hidden h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_0_10px_rgba(245,158,11,0.12)] lg:block" />
        <div className="absolute right-[10%] top-[23%] hidden h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_0_8px_rgba(59,130,246,0.12)] lg:block" />
        <div className="absolute left-[9%] bottom-[16%] hidden h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.24),transparent_70%)] blur-lg sm:block" />
        <div className="absolute right-[8%] bottom-[12%] hidden h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.2),transparent_72%)] blur-lg sm:block dark:bg-[radial-gradient(circle,rgba(34,211,238,0.16),transparent_72%)]" />
        <motion.div
          className="absolute inset-x-0 top-16 h-[24rem] bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(circle_at_center,black_34%,transparent_76%)] opacity-35 sm:h-[30rem] sm:opacity-45 dark:hidden"
          style={prefersReducedMotion ? undefined : { y: gridY }}
        />
        <div className="absolute inset-x-0 top-16 hidden h-[24rem] bg-[linear-gradient(rgba(34,211,238,0.13)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.11)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(circle_at_center,black_34%,transparent_76%)] opacity-45 sm:h-[30rem] dark:block" />
        <div className="absolute left-1/2 top-[22%] hidden h-[36rem] w-[36rem] -translate-x-1/2 rounded-full border border-dashed border-amber-300/25 opacity-70 lg:block dark:border-cyan-300/25" />
        <div className="absolute left-1/2 top-[28%] hidden h-[28rem] w-[28rem] -translate-x-1/2 rounded-full border border-slate-300/35 opacity-60 lg:block dark:border-slate-500/30" />
        <div className="absolute left-[42%] top-[18%] hidden h-2 w-2 rounded-full bg-teal-500 shadow-[0_0_0_8px_rgba(20,184,166,0.1)] sm:block" />
        <div className="absolute right-[40%] bottom-[24%] hidden h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_0_8px_rgba(249,115,22,0.12)] lg:block" />
        <div className="absolute left-[18%] top-[9%] hidden h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_0_8px_rgba(59,130,246,0.12)] sm:block" />
        <div className="absolute left-[22%] bottom-[18%] hidden h-20 w-20 rounded-full border border-slate-300/35 lg:block" />
        <div className="absolute right-[24%] bottom-[14%] hidden h-16 w-16 rounded-full border border-amber-300/45 lg:block" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <Stagger className="mx-auto max-w-4xl text-center">
          <StaggerItem>
            <h1 className="heading-accent heading-accent-center mt-4 text-3xl font-bold leading-[1.02] text-slate-950 text-balance sm:mt-6 sm:text-5xl lg:text-6xl dark:text-slate-50">
              Websites that look{' '}
              <span className="bg-gradient-to-r from-electric via-sky-500 to-amber-400 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-400 dark:to-fuchsia-400">
                premium
              </span>
              , feel trustworthy, and turn visits into real conversations.
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg dark:text-slate-300">
              We craft polished digital experiences with clear structure, strong visual hierarchy, and the kind of
              confidence that helps people trust your business faster.
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-sm text-slate-600 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
                >
                  <CheckCircle2 className="h-4 w-4 text-electric" />
                  {item}
                </div>
              ))}
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Start your project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/portfolio" className="btn-outline-navy">
                See selected work
              </Link>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.35rem] border border-slate-200 bg-white/85 p-4 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/75"
                >
                  <div className="text-2xl font-bold text-slate-950 dark:text-slate-50">{stat.value}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-500 dark:text-slate-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  )
}
