import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, CheckCircle, ExternalLink } from 'lucide-react'
import { projects } from '@/lib/data'
import { pageMetadata, breadcrumbLd } from '@/lib/seo'
import CTASection from '@/components/sections/CTASection'
import PageHero from '@/components/sections/PageHero'
import Badge from '@/components/ui/Badge'
import JsonLd from '@/components/JsonLd'

interface Props {
  params: { id: string }
}

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.id)
  if (!project) return { title: 'Project Not Found' }
  return pageMetadata({
    title: project.title,
    description: project.description,
    path: `/portfolio/${project.id}`,
    image: project.image,
  })
}

const projectDetails: Record<string, { challenge: string; solution: string; results: string[]; deliverables: string[] }> = {
  'connect-circle': {
    challenge: 'The client needed a lightweight but scalable social communication product where users could instantly connect, chat privately, and participate in group discussions without sacrificing security or performance.',
    solution: 'We designed and launched ConnectCircle as a real-time web platform with Firebase Authentication, live chat architecture powered by Firebase Realtime Database, and a responsive Vue.js + Tailwind CSS interface optimized for both desktop and mobile usage.',
    results: ['Real-time group and private messaging delivered with low-latency sync', 'Secure sign-up/login flow implemented with Firebase Auth', 'Stable production deployment pipeline using GitHub Actions + Firebase Hosting', 'Improved engagement through clean, intuitive UX across devices'],
    deliverables: ['Responsive frontend built with Vue.js (Vite) + Tailwind CSS', 'Group and one-to-one messaging system', 'Firebase Realtime Database integration', 'Firebase Authentication integration', 'CI/CD workflow via GitHub Actions', 'Live deployment on Firebase Hosting'],
  },
  'boski-and-mens': {
    challenge: "The client needed a polished digital storefront that reflected a premium Pakistani menswear identity while making product discovery easy for users browsing multiple collections and styles.",
    solution: "We developed a fashion-first e-commerce experience with strong visual branding, collection-led navigation, optimized product listing flows, and a streamlined cart-to-checkout path tailored for high-intent shoppers.",
    results: ['Stronger premium brand perception through cohesive visual design', 'Improved discovery across collections and featured products', 'Smoother user journey from landing page to cart action', 'Higher purchase readiness through clearer product presentation'],
    deliverables: ['Custom storefront UI for ethnic menswear positioning', 'Collection and category-driven navigation architecture', 'Product listing and detail page experience', 'Shopping cart and order flow integration', 'Responsive design for mobile and desktop shoppers', 'Brand-consistent typography and style system'],
  },
  'resto-booking': {
    challenge:
      "E2H Corian Fabrication needed a professional online presence to present their solid-surface fabrication work for kitchens, worktops, and interior surfaces, and to make it easy for prospective clients to understand their capabilities and get in touch.",
    solution:
      "We built a clean, image-led marketing website that showcases E2H's fabrication work and services, explains the material and its applications clearly, and guides visitors toward a direct enquiry.",
    results: [
      'A clear, professional presentation of fabrication services and completed work',
      'Easier for prospective clients to understand the offering and make an enquiry',
      'A mobile friendly experience that works consistently across devices',
      'A foundation that can grow as the business adds more projects and services',
    ],
    deliverables: [
      'Custom marketing website design',
      'Services and capabilities presentation',
      'Project and work gallery',
      'Enquiry and contact flow',
      'Responsive, mobile-first build',
      'Performance-focused implementation',
    ],
  },
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.id === params.id)
  if (!project) notFound()

  const details = projectDetails[project.id] || {
    challenge: 'The client needed a modern, high-performance digital presence to compete in their market and convert more visitors into customers.',
    solution: 'We delivered a custom-built website with a focus on conversion optimization, performance, and user experience that aligned with their brand and business goals.',
    results: ['Significant increase in online leads', 'Improved user experience scores', 'Better search engine visibility', 'Reduced bounce rate'],
    deliverables: ['Custom website design', 'Responsive development', 'CMS integration', 'SEO optimization', 'Analytics setup', 'Post-launch support'],
  }

  const related = projects.filter((p) => p.id !== project.id && p.industry === project.industry).slice(0, 2)

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Portfolio', path: '/portfolio' },
            { name: project.title, path: `/portfolio/${project.id}` },
          ]),
        ]}
      />
      <PageHero
        tag="Portfolio Case Study"
        title={project.title}
        subtitle={project.description}
        chips={[project.industry, ...project.tags]}
        panelTitle="Case study"
        panelBody="Detailed breakdown of the problem, our strategic engineering solution, and measurable business outcomes."
        panelStats={['Strategy', 'Build', 'Outcome']}
      />

      <section className="py-10 lg:py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/portfolio"
            scroll={false}
            className="mb-8 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition-colors hover:text-navy dark:text-slate-400 dark:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Portfolio
          </Link>

          {/* Featured Image */}
          <div className="relative mb-12 h-64 overflow-hidden rounded-xl border border-slate-200 bg-slate-900 shadow-lg sm:h-96 md:mb-16 lg:h-[450px] dark:border-slate-800">
            <Image src={project.image} alt={project.title} fill className="object-cover" />
          </div>

          <div className="grid gap-12 lg:grid-cols-12">
            <div className="space-y-10 lg:col-span-8">
              <div>
                <h2 className="text-xl font-bold text-navy dark:text-white">The Challenge</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{details.challenge}</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy dark:text-white">Our Solution</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{details.solution}</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-navy dark:text-white">Results Achieved</h2>
                <ul className="mt-4 space-y-2.5">
                  {details.results.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar Deliverables */}
            <div className="space-y-6 lg:col-span-4">
              <div className="surface-card rounded-xl p-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">What We Delivered</h3>
                <ul className="mt-4 space-y-2">
                  {details.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact" className="btn-primary w-full justify-center">
                Start a Similar Project <ExternalLink className="h-4 w-4" />
              </Link>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline-navy w-full justify-center text-xs"
                >
                  Visit Live Site <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          {/* Related Projects */}
          {related.length > 0 && (
            <div className="mt-20 border-t border-slate-200 pt-12 dark:border-slate-800">
              <h2 className="text-lg font-bold text-navy dark:text-white">Similar Projects</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {related.map((p) => (
                  <Link
                    key={p.id}
                    href={`/portfolio/${p.id}`}
                    scroll={false}
                    className="group surface-card overflow-hidden rounded-xl transition-all hover:border-teal/30"
                  >
                    <div className="relative h-40 overflow-hidden bg-slate-900">
                      <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <div className="p-4">
                      <Badge variant="blue">{p.industry}</Badge>
                      <h3 className="mt-2 text-sm font-bold text-navy dark:text-white">{p.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection title="Ready to Get Similar Results?" />
    </>
  )
}
