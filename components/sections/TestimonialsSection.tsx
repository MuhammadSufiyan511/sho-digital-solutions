import { Quote, Star } from 'lucide-react'
import { testimonials } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'

export default function TestimonialsSection({ limit = 3 }: { limit?: number }) {
  const featured = testimonials.slice(0, limit)

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Client feedback"
          title="Real feedback from businesses that wanted a more polished digital presence."
          subtitle="We like specific outcomes and honest words. Those are usually the best sign that the work is doing its job."
          center
        />

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((t) => (
            <article
              key={t.id}
              className="surface-card flex flex-col rounded-[1.75rem] p-7 transition-all duration-300 hover:-translate-y-1"
            >
              <Quote className="h-8 w-8 text-electric/25" />
              <p className="mt-5 flex-1 text-sm leading-7 text-slate-600">
                &ldquo;{t.content}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-electric text-sm font-bold text-white">
                  {t.avatar}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-semibold text-navy">{t.name}</div>
                  <div className="truncate text-xs text-slate-500">
                    {t.role}, {t.company}
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, index) => (
                    <Star key={index} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
