import type { Metadata } from 'next'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/lib/data'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Client Testimonials',
  description: 'Read what our clients say about working with SHO Digital Solutions.',
}

export default function TestimonialsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-navy relative overflow-hidden" style={{ backgroundColor: '#0A1F44' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] opacity-20" style={{ background: 'radial-gradient(circle, #2563EB, transparent)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-electric/20 text-blue-200 px-3 py-1 rounded-full mb-6">
            Social Proof
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Our Clients&apos; Words Are<br/>
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #60A5FA, #2563EB)' }}>
              Our Biggest Achievement
            </span>
          </h1>
          <div className="flex items-center justify-center gap-1 mb-4">
            {[1,2,3,4,5].map((i) => <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
          </div>
          <p className="text-blue-200 text-lg">
            <strong className="text-white">4.9/5</strong> average rating · {testimonials.length} verified reviews
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" className="w-full">
            <path d="M0 40L1440 40L1440 10C1200 35 960 0 720 15C480 30 240 0 0 10L0 40Z" fill="white" />
          </svg>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl border border-gray-100 p-7 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <Quote className="w-8 h-8 text-electric/20 mb-4 flex-shrink-0" />
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">&ldquo;{t.content}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 bg-electric rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">{t.avatar}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-navy font-semibold text-sm truncate">{t.name}</div>
                    <div className="text-gray-400 text-xs truncate">{t.role}, {t.company}</div>
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

      <CTASection title="Ready to Become Our Next Success Story?" />
    </>
  )
}
