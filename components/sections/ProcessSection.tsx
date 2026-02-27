import SectionHeader from '@/components/ui/SectionHeader'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We start by understanding your business, your customers, and your goals. A deep discovery session ensures we build exactly what you need.',
    details: ['Business & goals audit', 'Competitor research', 'Target audience analysis', 'Technical requirements'],
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Our designers create wireframes and high-fidelity mockups. You get to see and approve everything before a single line of code is written.',
    details: ['Wireframes & prototypes', 'Brand alignment', 'UI/UX design', 'Client review & approval'],
  },
  {
    number: '03',
    title: 'Development',
    description:
      'We build your website with clean, scalable code. Every element is optimized for performance, SEO, and conversion from day one.',
    details: ['Front & back-end development', 'CMS setup', 'Integrations & testing', 'Performance optimization'],
  },
  {
    number: '04',
    title: 'Launch & Support',
    description:
      'We launch your website, set up analytics, and provide full handover documentation. Then we stay with you for ongoing support.',
    details: ['QA & pre-launch testing', 'Live deployment', 'Analytics & tracking', 'Ongoing maintenance'],
  },
]

export default function ProcessSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Our Process"
          title="How We Turn Your Vision<br/>Into a <span style='color:#2563EB'>Revenue-Generating Website</span>"
          subtitle="A transparent, proven 4-step process that delivers results on time and on budget."
          center
        />

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-electric/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Step Number */}
                <div className="relative inline-flex mb-6">
                  <div className="w-12 h-12 bg-electric rounded-xl flex items-center justify-center shadow-lg shadow-electric/30">
                    <span className="text-white font-bold text-sm">{step.number}</span>
                  </div>
                  {/* Arrow (not on last) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute left-14 top-1/2 -translate-y-1/2 text-electric/40">
                      →
                    </div>
                  )}
                </div>

                <h3 className="text-navy font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{step.description}</p>

                <ul className="space-y-1.5">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-xs text-gray-500">
                      <div className="w-1 h-1 bg-electric rounded-full flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
