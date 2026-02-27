import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { services } from '@/lib/data'
import CTASection from '@/components/sections/CTASection'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore SHO Digital Solutions\' full range of web development and digital marketing services.',
}

const serviceColors: Record<string, string> = {
  'web-dev': 'border-t-blue-500',
  ecommerce: 'border-t-purple-500',
  'industry-systems': 'border-t-cyan-500',
  maintenance: 'border-t-green-500',
  'lead-integration': 'border-t-orange-500',
  seo: 'border-t-pink-500',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-navy relative overflow-hidden" style={{ backgroundColor: '#0A1F44' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] opacity-20" style={{ background: 'radial-gradient(circle, #2563EB, transparent)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-electric/20 text-blue-200 px-3 py-1 rounded-full mb-6">
            What We Offer
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Every Service Designed to<br/>
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #60A5FA, #2563EB)' }}>
              Grow Your Revenue
            </span>
          </h1>
          <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto">
            From initial concept to ongoing growth — we offer a full suite of digital services so you never need to look elsewhere.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" className="w-full">
            <path d="M0 40L1440 40L1440 10C1200 35 960 0 720 15C480 30 240 0 0 10L0 40Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className={`bg-white rounded-2xl border border-gray-100 border-t-4 ${serviceColors[service.id] || 'border-t-blue-500'} p-7 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex flex-col`}
              >
                <div className="text-4xl mb-5">{service.icon}</div>
                <h2 className="text-navy font-bold text-xl mb-3">{service.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{service.description}</p>

                <div className="mb-6">
                  <h3 className="text-navy font-semibold text-sm mb-3 uppercase tracking-wider">Key Features</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-electric flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-electric text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-electric-dark transition-all duration-200 hover:-translate-y-0.5"
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            tag="Our Guarantee"
            title="You&apos;re Protected. Always."
            subtitle="Every service comes with our satisfaction guarantee. If you're not happy, we make it right — no questions asked."
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: '30-Day Revision Policy', desc: 'Free revisions for 30 days after launch' },
              { title: 'Transparent Pricing', desc: 'No hidden fees. What we quote is what you pay.' },
              { title: 'Source Code Ownership', desc: 'You own everything we build for you.' },
            ].map((g) => (
              <div key={g.title} className="bg-white rounded-xl border border-gray-100 p-6">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="font-bold text-navy mb-1 text-sm">{g.title}</h3>
                <p className="text-gray-500 text-xs">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Not Sure Which Service You Need?" subtitle="Book a free consultation and we'll recommend the exact package that fits your business goals and budget." />
    </>
  )
}
