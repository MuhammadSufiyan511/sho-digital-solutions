import Link from 'next/link'
import { ArrowRight, CheckCircle, Play } from 'lucide-react'

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '3x', label: 'Avg. Lead Increase' },
  { value: '48h', label: 'Turnaround Start' },
]

const trust = [
  'No long-term contracts',
  'Free initial consultation',
  'Results-driven approach',
]

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#0A1F44' }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 animate-float-soft"
          style={{ background: 'radial-gradient(circle, #2563EB, transparent)' }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10 animate-float-soft"
          style={{ background: 'radial-gradient(circle, #3B82F6, transparent)' }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-electric/15 border border-electric/30 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-blue-200 text-xs font-semibold tracking-wider uppercase">
                Now Accepting New Clients
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              We Build{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #60A5FA, #2563EB)' }}
              >
                Revenue-Generating
              </span>{' '}
              Websites
            </h1>

            <p className="text-lg text-blue-200 leading-relaxed mb-8 max-w-xl">
              From concept to conversion — we design and develop high-performance websites that attract your ideal
              customers, build trust, and grow your bottom line. <strong className="text-white">Smart. Fast. Affordable.</strong>
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {trust.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-blue-200">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-electric text-white px-8 py-4 rounded-lg font-bold hover:bg-electric-dark transition-all duration-200 shadow-lg hover:shadow-electric/40 hover:-translate-y-0.5"
                style={{ boxShadow: '0 4px 24px rgba(37, 99, 235, 0.4)' }}
              >
                Get Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Play className="w-4 h-4" /> View Our Work
              </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-blue-300 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual Element */}
          <div className="hidden lg:block relative">
            <div className="relative">
              {/* Browser mockup */}
              <div className="bg-white/5 border border-white/15 rounded-2xl p-1 backdrop-blur-sm shadow-2xl">
                {/* Browser bar */}
                <div className="bg-white/10 rounded-xl px-4 py-3 flex items-center gap-3 mb-1">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                    <div className="w-3 h-3 rounded-full bg-green-400/70" />
                  </div>
                  <div className="flex-1 bg-white/10 rounded-md px-3 py-1.5 text-xs text-blue-200">
                    yourbusiness.com
                  </div>
                </div>
                {/* Content mockup */}
                <div className="bg-white/5 rounded-xl p-6 space-y-4">
                  <div className="h-5 bg-white/20 rounded w-1/2" />
                  <div className="h-3 bg-white/10 rounded w-3/4" />
                  <div className="h-3 bg-white/10 rounded w-2/3" />
                  <div className="flex gap-3 mt-4">
                    <div className="h-10 bg-electric/60 rounded-lg w-32" />
                    <div className="h-10 border border-white/20 rounded-lg w-28" />
                  </div>
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-2">
                        <div className="w-8 h-8 bg-electric/30 rounded-lg" />
                        <div className="h-2.5 bg-white/20 rounded" />
                        <div className="h-2 bg-white/10 rounded w-3/4" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating metrics */}
              <div className="absolute -right-6 top-1/4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 border border-gray-100 animate-float-soft">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 font-bold text-sm">↑</span>
                </div>
                <div>
                  <div className="text-navy font-bold text-sm">+143%</div>
                  <div className="text-gray-400 text-xs">Organic Traffic</div>
                </div>
              </div>

              <div className="absolute -left-6 bottom-1/4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 border border-gray-100 animate-float-soft">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <span className="text-electric font-bold text-sm">⚡</span>
                </div>
                <div>
                  <div className="text-navy font-bold text-sm">98/100</div>
                  <div className="text-gray-400 text-xs">Performance Score</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 20C1200 55 960 10 720 30C480 50 240 5 0 20L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
