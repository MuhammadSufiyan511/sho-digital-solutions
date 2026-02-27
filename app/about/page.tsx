import type { Metadata } from 'next'
import { CheckCircle, Award, Users, Globe, Target, Heart } from 'lucide-react'
import CTASection from '@/components/sections/CTASection'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about SHO Digital Solutions — our story, mission, and the team behind your digital growth.',
}

const values = [
  { icon: Target, title: 'Results First', description: 'Every decision is driven by one question: does it grow your business?' },
  { icon: Heart, title: 'Genuine Partnership', description: "We treat your business like it's our own. Your wins are our wins." },
  { icon: Award, title: 'Craft & Quality', description: 'We take pride in clean code, beautiful design, and pixel-perfect delivery.' },
  { icon: Globe, title: 'Transparency', description: 'Clear communication, honest timelines, and no hidden costs — ever.' },
]

const milestones = [
  { year: '2019', title: 'Founded', description: 'SHO Digital was born with a mission to make enterprise-quality web development accessible to all businesses.' },
  { year: '2020', title: '50 Projects', description: 'Hit our first 50 project milestone, expanding our team and service offerings.' },
  { year: '2022', title: 'Regional Expansion', description: 'Expanded to serve clients across multiple markets with a team of 12 specialists.' },
  { year: '2024', title: '150+ Projects', description: 'Over 150 successful projects delivered with a 98% client satisfaction rate.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden" style={{ backgroundColor: '#0A1F44' }}>
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] opacity-20"
          style={{ background: 'radial-gradient(circle, #2563EB, transparent)' }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-electric/20 text-blue-200 px-3 py-1 rounded-full mb-6">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            We&apos;re Not Just an Agency.<br/>
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #60A5FA, #2563EB)' }}>
              We&apos;re Your Growth Partner.
            </span>
          </h1>
          <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto">
            SHO Digital Solutions was founded with a clear mission: to give every business — regardless of size — access to
            the kind of high-performance digital presence that drives real, measurable growth.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 40L1440 40L1440 10C1200 35 960 0 720 15C480 30 240 0 0 10L0 40Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                tag="Our Mission"
                title="Leveling the Playing Field for<br/><span style='color:#2563EB'>Growing Businesses</span>"
              />
              <p className="text-gray-500 leading-relaxed mb-6">
                We believe every business deserves a world-class online presence. For too long, premium web development
                has been the exclusive domain of large corporations with six-figure budgets. We changed that.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Our team combines deep technical expertise with strategic business thinking. We don&apos;t just build websites
                — we architect digital growth engines tailored to your specific industry, market, and goals.
              </p>
              <ul className="space-y-3">
                {[
                  'Client-first approach in everything we do',
                  'Measurable results, not vanity metrics',
                  'Long-term relationships over one-off projects',
                  'Continuous learning and innovation',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-electric flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '150+', label: 'Projects Delivered', bg: 'bg-electric text-white' },
                { value: '98%', label: 'Satisfaction Rate', bg: 'bg-navy text-white', style: { backgroundColor: '#0A1F44' } },
                { value: '5+', label: 'Years Experience', bg: 'bg-gray-50 text-navy border border-gray-100' },
                { value: '12+', label: 'Team Members', bg: 'bg-blue-50 text-electric border border-blue-100' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`${stat.bg} rounded-2xl p-8 flex flex-col justify-center`}
                  style={stat.style}
                >
                  <div className="text-4xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Our Values"
            title="The Principles That Guide<br/>Every Project We Touch"
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white rounded-2xl border border-gray-100 p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-electric/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-electric" />
                </div>
                <h3 className="text-navy font-bold mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader tag="Our Journey" title="From Startup to Trusted <span style='color:#2563EB'>Digital Agency</span>" center />
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div key={m.year} className={`relative flex flex-col md:flex-row gap-8 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`flex-1 ${i % 2 === 1 ? 'md:text-right' : ''}`}>
                    <span className="text-electric font-bold text-sm">{m.year}</span>
                    <h3 className="text-navy font-bold text-xl mt-1 mb-2">{m.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{m.description}</p>
                  </div>
                  <div className="hidden md:flex w-10 h-10 bg-electric rounded-full items-center justify-center flex-shrink-0 z-10">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Want to Work With a Team That Cares?" subtitle="Let's have a conversation about your business goals and how we can help you achieve them." />
    </>
  )
}
