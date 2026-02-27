import { DollarSign, Zap, Globe, Headphones, Award, TrendingUp } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const reasons = [
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden fees, no surprises. You get clear quotes upfront and we stick to them.',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Most projects are delivered in 2–6 weeks. We move fast without sacrificing quality.',
  },
  {
    icon: Globe,
    title: 'Local Market Insight',
    description: 'We understand regional buyer behavior and build strategies tailored to your market.',
  },
  {
    icon: Headphones,
    title: 'Ongoing Support',
    description: 'We don\'t disappear after launch. Our team is always a message away when you need us.',
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: '150+ successful projects across industries with measurable, documented results.',
  },
  {
    icon: TrendingUp,
    title: 'Growth-Focused',
    description: 'Every decision we make — design, copy, tech — is aimed at growing your revenue.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0A1F44' }}>
      {/* Background */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] opacity-20"
        style={{ background: 'radial-gradient(circle, #2563EB, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          tag="Why SHO Digital"
          title="The Agency That Treats<br/>Your Business Like Its Own"
          subtitle="We measure our success by your success. Here's what sets us apart from the rest."
          center
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-electric/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-electric/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-electric transition-colors duration-300">
                <Icon className="w-6 h-6 text-electric group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
              <p className="text-blue-200 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
