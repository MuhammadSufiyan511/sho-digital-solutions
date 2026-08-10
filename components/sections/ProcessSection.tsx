import { CheckCircle2 } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const steps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We start by understanding your business goals, your audience, and the impression you want to create online.',
    details: ['Business goals review', 'Audience and competitor scan', 'Messaging direction', 'Scope alignment'],
  },
  {
    number: '02',
    title: 'Shape the experience',
    description:
      'We map the structure and design a presentation that feels credible, calm, and easy to navigate.',
    details: ['Wireframes and page flow', 'Visual direction', 'Copy refinement', 'Client review'],
  },
  {
    number: '03',
    title: 'Build with care',
    description:
      'Your site is developed with clean code, fast performance, and the flexibility to grow with your business.',
    details: ['Responsive development', 'Performance tuning', 'Integrations', 'Quality assurance'],
  },
  {
    number: '04',
    title: 'Launch and support',
    description:
      'We launch carefully, check the details, and stay available as your site starts working in the real world.',
    details: ['Pre-launch review', 'Deployment support', 'Analytics setup', 'Ongoing maintenance'],
  },
]

export default function ProcessSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Our process"
          title="A straightforward way to move from idea to polished launch."
          subtitle="The experience should feel organized and reassuring from the first conversation to the final handoff."
          center
        />

        <div className="grid gap-6 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={step.number} className="surface-card rounded-[1.75rem] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-electric text-sm font-bold text-white">
                {step.number}
              </div>
              <h3 className="mt-5 text-xl font-bold text-navy">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
              <ul className="mt-5 space-y-2">
                {step.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-electric" />
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
