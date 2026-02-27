import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const highlights = [
  {
    icon: '💻',
    title: 'Website Development',
    description: 'Custom, high-performance websites built to convert visitors into paying customers.',
    href: '/services#web-dev',
    color: 'from-blue-500/20 to-electric/10',
  },
  {
    icon: '🛒',
    title: 'E-commerce Solutions',
    description: 'Full-featured online stores that drive sales around the clock with seamless checkout.',
    href: '/services#ecommerce',
    color: 'from-purple-500/20 to-blue-500/10',
  },
  {
    icon: '🏗️',
    title: 'Industry-Specific Systems',
    description: 'Booking systems, patient portals, and property platforms built for your exact sector.',
    href: '/services#industry-systems',
    color: 'from-cyan-500/20 to-blue-400/10',
  },
  {
    icon: '🔧',
    title: 'Maintenance & Support',
    description: 'Keep your website secure, updated, and performing with ongoing expert support.',
    href: '/services#maintenance',
    color: 'from-green-500/20 to-emerald-400/10',
  },
]

export default function ServicesHighlight() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <SectionHeader
            tag="What We Do"
            title="Digital Solutions That<br/><span style='color:#2563EB'>Drive Real Results</span>"
            subtitle="We don't just build websites — we engineer growth platforms that work for your business 24/7."
          />
          <Link
            href="/services"
            className="flex-shrink-0 flex items-center gap-2 text-electric font-semibold text-sm hover:gap-3 transition-all"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:-translate-y-1.5 hover:shadow-xl hover:border-electric/20 transition-all duration-300"
            >
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${item.color}`}
              />
              <div className="relative">
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3 className="text-navy font-bold text-lg mb-3 group-hover:text-electric transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="flex items-center gap-1 text-electric text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
