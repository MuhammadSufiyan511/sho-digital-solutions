import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { projects } from '@/lib/data'
import { Reveal, Stagger, StaggerItem } from '@/components/animations/Motion'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'

export default function PortfolioPreview() {
  const featured = projects.slice(0, 6)
  const showViewAll = projects.length > 6

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 md:mb-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              tag="Selected work"
              title="A few examples that show how a polished website can support real business goals."
              subtitle="The goal is not just to look good. Each project is built to improve clarity, trust, and action."
            />
            {showViewAll && (
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-sm font-semibold text-electric transition-colors hover:text-electric-dark"
              >
                View full portfolio <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </Reveal>

        <Stagger className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {featured.map((project) => (
            <StaggerItem
              key={project.id}
              className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100 sm:h-52 lg:h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-navy/45 opacity-0 transition-opacity group-hover:opacity-100">
                  <Link
                    href={`/portfolio/${project.id}`}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-electric hover:text-white"
                  >
                    View details <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <Badge variant="blue">{project.industry}</Badge>
                <h3 className="mt-4 text-lg font-bold text-navy">{project.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/portfolio/${project.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-electric transition-colors hover:text-electric-dark"
                  >
                    Open case study <ArrowRight className="h-4 w-4" />
                  </Link>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-navy"
                    >
                      Live site <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
