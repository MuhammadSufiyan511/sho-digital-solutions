'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Stagger, StaggerItem } from '@/components/animations/Motion'

type TeamMember = {
  initials: string
  name: string
  role: string
  bio: string
  image?: string
}

type TeamMembersSectionProps = {
  team: TeamMember[]
}

export default function TeamMembersSection({ team }: TeamMembersSectionProps) {
  return (
    <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {team.map((member) => (
        <StaggerItem key={member.name}>
          <article
            tabIndex={0}
            className="group [perspective:1400px] focus:outline-none h-full"
          >
            <motion.div
              whileHover={{ y: -6 }}
              className="relative min-h-[19rem] rounded-[1.2rem] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)] motion-reduce:transition-none md:min-h-[20rem]"
            >
              {/* FRONT SIDE CARD */}
              <div className="[backface-visibility:hidden] surface-card absolute inset-0 overflow-hidden rounded-[1.2rem] border border-slate-200/80 bg-white/90 p-5 text-center shadow-[0_15px_35px_rgba(14,26,46,0.06)] dark:border-slate-800 dark:bg-slate-900/90 sm:p-6 flex flex-col items-center justify-center">
                <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-teal/20 bg-slate-100 shadow-md ring-4 ring-white dark:border-teal/30 dark:bg-slate-800 dark:ring-slate-900">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top_left,rgba(15,118,110,0.18),transparent_42%),linear-gradient(135deg,#f8fafc,#e2e8f0)] text-lg font-bold text-navy dark:bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_42%),linear-gradient(135deg,#0f172a,#111827)] dark:text-slate-50">
                      {member.initials}
                    </div>
                  )}
                </div>

                <h3 className="mt-4 text-base font-bold leading-tight text-navy dark:text-slate-50">
                  {member.name}
                </h3>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-teal dark:text-teal-light">
                  {member.role}
                </p>

                <div className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-teal/20 bg-teal/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-teal dark:border-teal/30 dark:bg-teal/10 dark:text-teal-light">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
                  Hover for details
                </div>
              </div>

              {/* BACK SIDE CARD */}
              <div className="[backface-visibility:hidden] absolute inset-0 rounded-[1.2rem] border border-teal/30 bg-[linear-gradient(180deg,rgba(15,118,110,0.15)_0%,rgba(255,255,255,0.96)_40%,rgba(248,250,252,1)_100%)] p-5 text-left shadow-xl [transform:rotateY(180deg)] dark:border-teal/40 dark:bg-[linear-gradient(180deg,rgba(15,118,110,0.25)_0%,rgba(14,26,46,0.95)_42%,rgba(9,17,31,0.98)_100%)] sm:p-6 flex flex-col justify-between">
                <div className="absolute right-4 top-4 h-24 w-24 rounded-full bg-teal/10 blur-2xl dark:bg-teal/20" />

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="flex items-start gap-3">
                    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-teal/30 bg-white shadow-md ring-2 ring-teal/20 dark:border-slate-700 dark:bg-slate-900 shrink-0">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={48}
                          height={48}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-navy text-xs font-bold text-white">
                          {member.initials}
                        </div>
                      )}
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-bold leading-tight text-navy dark:text-slate-50">{member.name}</h3>
                      <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-teal dark:text-teal-light">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3">
                    <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xs">{member.bio}</p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {[member.role, 'Team player', 'Client focused'].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200/80 bg-white/90 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600 dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </article>
        </StaggerItem>
      ))}
    </Stagger>
  )
}
