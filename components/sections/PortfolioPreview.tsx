import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { projects } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'

export default function PortfolioPreview() {
  const featured = projects.slice(0, 6)
  const showViewAll = projects.length > 6

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <SectionHeader
            tag="Our Work"
            title="Websites That Actually<br/><span style='color:#2563EB'>Perform</span>"
            subtitle="A selection of projects that drove measurable results for our clients."
          />
          {showViewAll && (
            <Link
              href="/portfolio"
              className="flex-shrink-0 flex items-center gap-2 text-electric font-semibold text-sm hover:gap-3 transition-all"
            >
              View Full Portfolio <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Link
                    href={`/portfolio/${project.id}`}
                    className="bg-white text-navy text-sm font-bold px-5 py-2.5 rounded-lg flex items-center gap-2 hover:bg-electric hover:text-white transition-colors"
                  >
                    View Details <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <Badge variant="blue">{project.industry}</Badge>
                <h3 className="text-navy font-bold text-lg mt-3 mb-2">{project.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
