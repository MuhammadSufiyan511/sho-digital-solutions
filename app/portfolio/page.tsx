import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { projects } from '@/lib/data'
import CTASection from '@/components/sections/CTASection'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'View SHO Digital Solutions\' portfolio of websites, e-commerce stores, and digital systems.',
}

const industries = ['All', ...Array.from(new Set(projects.map((p) => p.industry)))]

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-navy relative overflow-hidden" style={{ backgroundColor: '#0A1F44' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] opacity-20" style={{ background: 'radial-gradient(circle, #2563EB, transparent)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-electric/20 text-blue-200 px-3 py-1 rounded-full mb-6">
            Our Work
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Projects That Prove <br/>
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #60A5FA, #2563EB)' }}>
              Results Speak Louder
            </span>
          </h1>
          <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto">
            Every project in our portfolio was built with a single goal: to drive measurable business growth for our clients.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" className="w-full">
            <path d="M0 40L1440 40L1440 10C1200 35 960 0 720 15C480 30 240 0 0 10L0 40Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter tags */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {industries.map((ind) => (
              <span
                key={ind}
                className="px-4 py-2 text-sm rounded-full border border-gray-200 text-gray-600 hover:bg-electric hover:text-white hover:border-electric transition-colors cursor-pointer"
              >
                {ind}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Link
                      href={`/portfolio/${project.id}`}
                      className="bg-white text-navy text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-electric hover:text-white transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <Badge variant="blue">{project.industry}</Badge>
                  <h3 className="text-navy font-bold text-xl mt-3 mb-2">{project.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/portfolio/${project.id}`}
                    className="inline-flex items-center gap-1.5 text-electric text-sm font-semibold hover:gap-2.5 transition-all"
                  >
                    View Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Like What You See? Let's Build Yours." subtitle="Every project starts with a free consultation. Tell us about your goals and we'll build a strategy around them." />
    </>
  )
}

