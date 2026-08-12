import { Award, Globe, Headphones, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '@/components/animations/Motion'
import SectionHeader from '@/components/ui/SectionHeader'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Clear pricing',
    description: 'You get straightforward quotes, no hidden extras, and no vague scope creep.',
  },
  {
    icon: Sparkles,
    title: 'Thoughtful design',
    description: 'The work feels polished without feeling over-designed or hard to use.',
  },
  {
    icon: Globe,
    title: 'Market awareness',
    description: 'We understand how to speak to local and international customers with confidence.',
  },
  {
    icon: Headphones,
    title: 'Reliable support',
    description: 'We stay available after launch so your team never feels left on its own.',
  },
  {
    icon: Award,
    title: 'Proven delivery',
    description: 'We have a history of shipping work that supports real business goals.',
  },
  {
    icon: TrendingUp,
    title: 'Growth mindset',
    description: 'Every choice is made with your long-term brand and revenue in mind.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 sm:py-24">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-electric/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            tag="Why SixByte"
            title="A partner that cares about how your business actually shows up online."
            subtitle="We keep the work calm, clear, and accountable so the end result feels dependable rather than flashy."
            center
            light
          />
        </Reveal>

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, description }) => (
            <StaggerItem
              key={title}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-electric/30 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-electric/15 text-electric">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">{description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
