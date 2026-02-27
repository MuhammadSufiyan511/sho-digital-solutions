import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { industries } from '@/lib/data'
import CTASection from '@/components/sections/CTASection'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'SHO Digital Solutions builds specialized digital solutions for restaurants, healthcare, real estate, legal, fitness, and retail businesses.',
}

export default function IndustriesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-navy relative overflow-hidden" style={{ backgroundColor: '#0A1F44' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] opacity-20" style={{ background: 'radial-gradient(circle, #2563EB, transparent)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-electric/20 text-blue-200 px-3 py-1 rounded-full mb-6">
            Industry Expertise
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            We Speak Your<br/>
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #60A5FA, #2563EB)' }}>
              Industry&apos;s Language
            </span>
          </h1>
          <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto">
            Generic websites don&apos;t cut it. We build industry-specific digital systems that understand your customers, your competition, and your compliance requirements.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="bg-white rounded-2xl border border-gray-100 p-7 hover:-translate-y-1.5 hover:shadow-2xl hover:border-electric/20 transition-all duration-300 group"
              >
                <div className="text-5xl mb-5">{industry.icon}</div>
                <h2 className="text-navy font-bold text-xl mb-3 group-hover:text-electric transition-colors">{industry.name}</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{industry.description}</p>

                <div className="mb-6">
                  <h3 className="text-navy text-xs font-semibold uppercase tracking-wider mb-3">Digital Solutions</h3>
                  <ul className="space-y-2">
                    {industry.solutions.map((s) => (
                      <li key={s} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <CheckCircle className="w-3.5 h-3.5 text-electric flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-electric text-sm font-semibold group-hover:gap-2.5 transition-all"
                >
                  Explore Solutions <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            tag="Don't See Your Industry?"
            title="We Build for Any Business"
            subtitle="Our team adapts to the unique requirements of any industry. If your niche isn't listed, we've almost certainly built something like it before."
            center
          />
          <Link href="/contact" className="btn-primary">
            Tell Us About Your Business <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CTASection title="Your Industry. Our Expertise." subtitle="Book a free consultation and see how we've helped businesses just like yours grow online." />
    </>
  )
}
