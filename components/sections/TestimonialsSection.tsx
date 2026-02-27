import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'

export default function TestimonialsSection({ limit = 3 }: { limit?: number }) {
  const featured = testimonials.slice(0, limit)

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Client Stories"
          title="Real Results, Real Businesses,<br/><span style='color:#2563EB'>Real Reviews</span>"
          subtitle="Don't take our word for it — hear from the businesses we've helped grow."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl border border-gray-100 p-7 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative flex flex-col"
            >
              <Quote className="w-8 h-8 text-electric/20 mb-4 flex-shrink-0" />

              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">&ldquo;{t.content}&rdquo;</p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 bg-electric rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">{t.avatar}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-navy font-semibold text-sm truncate">{t.name}</div>
                  <div className="text-gray-400 text-xs truncate">
                    {t.role}, {t.company}
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
