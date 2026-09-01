import type { Metadata } from 'next'
import { fetchTechNews } from '@/lib/news'
import CTASection from '@/components/sections/CTASection'
import PageHero from '@/components/sections/PageHero'
import BlogFilter from '@/components/sections/BlogFilter'

export const revalidate = 1800 // Refresh live news every 30 minutes

export const metadata: Metadata = {
  title: 'Blog & Tech News | Live Industry Insights',
  description: 'Live technology news, software engineering updates, and digital industry insights from SixByte Technologies.',
  alternates: { canonical: '/blog' },
}

export default async function BlogPage() {
  const articles = await fetchTechNews()

  return (
    <>
      <PageHero
        tag="Technology & Engineering Stream"
        title="Tech News & Digital Engineering Insights"
        subtitle="Real time updates on AI systems, web engineering, cloud infrastructure, and software trends from across the tech industry."
        chips={['Artificial Intelligence', 'Web Engineering', 'Cloud & Systems']}
        panelTitle="Industry Pulse"
        panelBody="Live technology reporting synced with SixByte's core engineering focus — keeping your product team informed on digital shifts."
        panelStats={['Live Feed', 'Real Time', 'Tech Focus']}
      />

      <section className="py-10 lg:py-14">
        <BlogFilter articles={articles} />
      </section>

      <CTASection title="Ready to Build Next Generation Tech for Your Business?" />
    </>
  )
}
