'use client'

import Image from 'next/image'

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
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 md:gap-5">
      {team.map((member) => (
        <article
          key={member.name}
          tabIndex={0}
          className="group [perspective:1400px] focus:outline-none"
        >
          <div className="relative min-h-[18rem] rounded-[1.2rem] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)] motion-reduce:transition-none md:min-h-[19rem]">
            <div className="[backface-visibility:hidden] surface-card absolute inset-0 overflow-hidden rounded-[1.2rem] border border-slate-200 bg-white/90 p-4 text-center shadow-[0_24px_50px_rgba(15,23,42,0.08)] dark:border-slate-700 dark:bg-slate-900/80 sm:p-5">
              <div className="mx-auto flex h-full max-w-[12rem] flex-col items-center justify-center">
                <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-slate-100 shadow-md ring-4 ring-white dark:border-slate-700 dark:bg-slate-800 dark:ring-slate-900">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top_left,rgba(15,118,110,0.18),transparent_42%),linear-gradient(135deg,#f8fafc,#e2e8f0)] text-lg font-bold text-navy dark:bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_42%),linear-gradient(135deg,#0f172a,#111827)] dark:text-slate-50">
                      {member.initials}
                    </div>
                  )}
                </div>

                <h3 className="mt-4 text-sm font-bold leading-tight text-navy dark:text-slate-50 sm:text-base">
                  {member.name}
                </h3>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.2em] text-electric dark:text-cyan-300">
                  {member.role}
                </p>

                <div className="mt-4 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  Hover for details
                </div>
              </div>
            </div>

            <div className="[backface-visibility:hidden] absolute inset-0 rounded-[1.2rem] border border-slate-200 bg-[linear-gradient(180deg,rgba(15,118,110,0.12)_0%,rgba(255,255,255,0.94)_40%,rgba(248,250,252,0.98)_100%)] p-4 text-left shadow-[0_24px_50px_rgba(15,23,42,0.1)] [transform:rotateY(180deg)] dark:border-slate-700 dark:bg-[linear-gradient(180deg,rgba(8,145,178,0.22)_0%,rgba(15,23,42,0.92)_42%,rgba(2,6,23,0.98)_100%)] sm:p-5">
              <div className="absolute right-4 top-4 h-20 w-20 rounded-full bg-electric/10 blur-2xl dark:bg-cyan-400/20" />
              <div className="absolute bottom-3 left-3 h-16 w-16 rounded-full bg-amber-400/10 blur-2xl dark:bg-fuchsia-400/15" />

              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-start gap-3">
                  <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/60 bg-white shadow-md ring-2 ring-electric/10 dark:border-slate-600 dark:bg-slate-900">
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
                    <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-electric dark:text-cyan-300">
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-xs leading-6 text-slate-600 dark:text-slate-300 sm:text-sm">{member.bio}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[member.role, 'Team player', 'Client focused'].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-600 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
