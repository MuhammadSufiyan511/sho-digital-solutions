import type { Metadata } from 'next'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/lib/data'
import CTASection from '@/components/sections/CTASection'
import PageHero from '@/components/sections/PageHero'

export const metadata: Metadata = {
  title: 'Client Testimonials | Client Reviews',
  description: 'Read what our clients say about working with SixByte Technologies.',
}

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        tag="Social proof"
        title="Words from clients who wanted a website that felt more credible and more useful."
        subtitle="We care about the process, but we care just as much about how the work feels once it is in the hands of your customers."
        chips={['Reviews', 'Results', 'Trust']}
        panelTitle="What clients notice"
        panelBody="Clear communication, stronger presentation, and a more reliable digital presence are usually what people mention first."
        panelStats={['Responsive', 'Thoughtful', 'Reliable']}
      />

      <section className="py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="surface-card flex flex-col justify-between rounded-xl p-6 transition-all duration-200 hover:border-teal/30"
              >
                <div>
                  <Quote className="h-6 w-6 text-teal/40" />
                  <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal text-xs font-bold text-white">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-navy dark:text-white">{t.name}</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        {t.role}, {t.company}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="h-3 w-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Ready to become our next success story?" />
    </>
  )
}
