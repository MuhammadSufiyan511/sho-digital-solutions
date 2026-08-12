import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { projects } from '@/lib/data'
import CTASection from '@/components/sections/CTASection'
import PageHero from '@/components/sections/PageHero'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Explore selected projects that show how we help businesses present themselves online with more clarity.',
}

const industries = ['All', ...Array.from(new Set(projects.map((project) => project.industry)))]
const itemsPerPage = 6

function isVercelProject(link?: string) {
  if (!link) return false
  try {
    return new URL(link).hostname.includes('vercel.app')
  } catch {
    return false
  }
}

function getOrderedProjects() {
  return [...projects]
    .map((project, index) => ({ project, index }))
    .sort((a, b) => {
      const aVercel = isVercelProject(a.project.link)
      const bVercel = isVercelProject(b.project.link)

      if (aVercel !== bVercel) return aVercel ? 1 : -1
      return a.index - b.index
    })
    .map(({ project }) => project)
}

interface PortfolioPageProps {
  searchParams?: {
    page?: string
  }
}

export default function PortfolioPage({ searchParams }: PortfolioPageProps) {
  const orderedProjects = getOrderedProjects()
  const totalPages = Math.max(1, Math.ceil(orderedProjects.length / itemsPerPage))
  const requestedPage = Number(searchParams?.page ?? '1')
  const currentPage = Number.isFinite(requestedPage)
    ? Math.min(Math.max(1, Math.floor(requestedPage)), totalPages)
    : 1
  const start = (currentPage - 1) * itemsPerPage
  const visibleProjects = orderedProjects.slice(start, start + itemsPerPage)
  const buildPageHref = (page: number) => (page <= 1 ? '/portfolio' : `/portfolio?page=${page}`)

  return (
    <>
      <PageHero
        tag="Portfolio"
        title="Projects that show how a strong digital presence can feel more composed and more persuasive."
        subtitle="Each project here was built with clarity in mind. The goal is always to make the business easier to understand and easier to trust."
        chips={['Case studies', 'UI polish', 'Conversion']}
        panelTitle="Selected work"
        panelBody="A handful of examples that show how we combine structure, tone, and presentation to support real outcomes."
        panelStats={['Trust', 'Speed', 'Conversion']}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap justify-start gap-3 overflow-x-auto pb-2 sm:mb-12 sm:justify-center sm:pb-0">
            {industries.map((industry) => (
              <span
                key={industry}
                className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600"
              >
                {industry}
              </span>
            ))}
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {visibleProjects.map((project) => (
              <article
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
                  <div className="absolute inset-0 flex items-center justify-center bg-navy/50 opacity-0 transition-opacity group-hover:opacity-100">
                    <Link
                      href={`/portfolio/${project.id}`}
                      className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-electric hover:text-white"
                    >
                      View details
                    </Link>
                  </div>
                </div>

                <div className="p-6">
                  <Badge variant="blue">{project.industry}</Badge>
                  <h2 className="mt-4 text-lg font-bold text-navy">{project.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{project.description}</p>
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
              </article>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-10 flex flex-col items-center gap-4 sm:mt-12">
              <div className="text-sm text-slate-500">
                Showing {start + 1}-{Math.min(start + itemsPerPage, orderedProjects.length)} of {orderedProjects.length} projects
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <Link
                  href={buildPageHref(Math.max(1, currentPage - 1))}
                  aria-disabled={currentPage === 1}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    currentPage === 1
                      ? 'pointer-events-none border-slate-200 bg-slate-50 text-slate-300'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-electric hover:text-electric'
                  }`}
                >
                  Prev
                </Link>

                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                  <Link
                    key={page}
                    href={buildPageHref(page)}
                    className={`min-w-10 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                      page === currentPage
                        ? 'border-navy bg-navy text-white'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-electric hover:text-electric'
                    }`}
                  >
                    {page}
                  </Link>
                ))}

                <Link
                  href={buildPageHref(Math.min(totalPages, currentPage + 1))}
                  aria-disabled={currentPage === totalPages}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    currentPage === totalPages
                      ? 'pointer-events-none border-slate-200 bg-slate-50 text-slate-300'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-electric hover:text-electric'
                  }`}
                >
                  Next
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Like what you see? Let&apos;s build something similar for your business."
        subtitle="We can help translate your goals into a cleaner, more effective web presence."
      />
    </>
  )
}
