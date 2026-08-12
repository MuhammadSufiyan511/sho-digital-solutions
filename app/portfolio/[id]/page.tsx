import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, CheckCircle, ExternalLink } from 'lucide-react'
import { projects } from '@/lib/data'
import CTASection from '@/components/sections/CTASection'
import PageHero from '@/components/sections/PageHero'
import Badge from '@/components/ui/Badge'

interface Props {
  params: { id: string }
}

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.id)
  if (!project) return { title: 'Project Not Found' }
  return {
    title: project.title,
    description: project.description,
  }
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
  'medico-pharmacy': {
    challenge: 'The client needed a reliable online pharmacy presence that made medicine discovery and ordering straightforward while still communicating trust, safety, and responsive customer support.',
    solution: 'We delivered a clean healthcare-focused e-commerce experience with product search, category-driven navigation, cart and checkout flows, promotional offer sections, and clear support touchpoints for order and delivery inquiries.',
    results: ['Faster product discovery through search + category flows', 'Improved checkout readiness with clear cart and order summary UX', 'Stronger trust signals via healthcare-focused content and messaging', 'Better support accessibility through prominent contact and inquiry sections'],
    deliverables: ['Pharmacy storefront and brand-focused homepage', 'Searchable products and category architecture', 'Cart, order, and checkout experience', 'Promotions and offer-driven conversion sections', 'Order and delivery inquiry contact flows', 'Content blocks for health guidance and customer trust'],
  },
  'designlab-grocery': {
    challenge: 'The grocery brand needed an online channel that could showcase freshness and product variety while reducing friction in everyday ordering and repeat purchases.',
    solution: 'We built a modern grocery storefront centered on fresh and organic product presentation, intuitive product browsing, lightweight cart interactions, and a clear delivery-focused buying journey.',
    results: ['More intuitive browsing across grocery categories', 'Higher purchase intent through fresh/organic-first positioning', 'Reduced friction from product search to cart action', 'Improved customer confidence with transparent delivery/support messaging'],
    deliverables: ['Grocery e-commerce homepage and product catalog UX', 'Fresh and organic category presentation', 'Cart and order journey for daily essentials', 'Delivery-focused service and support sections', 'Brand storytelling for local sourcing and quality', 'Mobile-friendly, responsive shopping interface'],
  },
  'resto-booking': {
    challenge: 'Saveur Restaurant had no online presence and was losing potential customers to competitors with better digital experiences. Reservations were entirely phone-based, causing lost bookings and no-shows.',
    solution: 'We designed and developed a custom website with integrated online reservation system, dynamic menu display, photo gallery, and Google Reviews integration. The site was built with local SEO in mind to capture nearby search intent.',
    results: ['+140% online reservations in 3 months', '65% reduction in phone call volume', '#1 ranking for "restaurant near me" in target area', '4.8/5 average review score displayed prominently'],
    deliverables: ['Custom Next.js website', 'Real-time booking system', 'Digital menu with seasonal updates', 'Google Business integration', 'Mobile-first responsive design', 'Local SEO optimization'],
  },
  'clinic-portal': {
    challenge: 'MedCare was managing patient appointments via phone and paper, leading to inefficiencies and patient frustration. They needed a compliant, secure digital solution.',
    solution: 'We built a full patient management portal with online appointment scheduling, secure medical records access, and telehealth video consultation capabilities — all while maintaining HIPAA compliance.',
    results: ['80% of appointments now booked online', '40% reduction in administrative workload', 'Patient satisfaction score improved to 4.9/5', '200+ telehealth consultations in first month'],
    deliverables: ['Patient portal application', 'Appointment scheduling system', 'Telehealth integration', 'Secure records access', 'HIPAA-compliant infrastructure', 'Staff admin dashboard'],
  },
  'realestate-platform': {
    challenge: 'PrimeHomes was relying on third-party listing platforms and losing commission revenue while having no control over their brand experience.',
    solution: 'We built a full-featured property listing platform with advanced search, virtual tour embedding, mortgage calculator, and agent profiles — fully owned by the client.',
    results: ['300% increase in direct lead inquiries', '3x more time spent on property listings', 'Eliminated third-party platform fees', '25 properties sold through site in year one'],
    deliverables: ['Property listing platform', 'Advanced search & filtering', 'Virtual tour embedding', 'Mortgage calculator', 'Agent profile pages', 'Lead capture system'],
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
      <PageHero
        tag="Portfolio"
        title={project.title}
        subtitle={project.description}
        chips={[project.industry, ...project.tags]}
        panelTitle="Case study"
        panelBody="A clearer top section gives the project room to feel polished before the details and results are introduced."
        panelStats={['Strategy', 'Build', 'Outcome']}
      />

      <section className="py-16 bg-white sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
          {/* Featured Image */}
          <div className="relative mb-12 h-64 overflow-hidden rounded-2xl shadow-2xl sm:h-80 md:mb-16 md:h-[480px]">
            <Image src={project.image} alt={project.title} fill className="object-cover" />
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            <div className="space-y-10 lg:col-span-2">
              <div>
                <h2 className="text-navy font-bold text-2xl mb-4">The Challenge</h2>
                <p className="text-gray-500 leading-relaxed">{details.challenge}</p>
              </div>
              <div>
                <h2 className="text-navy font-bold text-2xl mb-4">Our Solution</h2>
                <p className="text-gray-500 leading-relaxed">{details.solution}</p>
              </div>
              <div>
                <h2 className="text-navy font-bold text-2xl mb-4">Results Achieved</h2>
                <ul className="space-y-3">
                  {details.results.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-navy font-bold mb-4">What We Delivered</h3>
                <ul className="space-y-2">
                  {details.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-electric rounded-full flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-electric text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-electric-dark transition-colors"
              >
                Start a Similar Project <ExternalLink className="w-4 h-4" />
              </Link>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-electric hover:text-electric"
                >
                  Visit Live Site <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-16 border-t border-gray-100 pt-12 sm:mt-20 sm:pt-16">
              <h2 className="text-navy font-bold text-2xl mb-8">Similar Projects</h2>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {related.map((p) => (
                  <Link key={p.id} href={`/portfolio/${p.id}`} className="group bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
                    <div className="relative h-40 overflow-hidden">
                      <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-4">
                      <Badge variant="blue">{p.industry}</Badge>
                      <h3 className="text-navy font-semibold mt-2 text-sm">{p.title}</h3>
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
