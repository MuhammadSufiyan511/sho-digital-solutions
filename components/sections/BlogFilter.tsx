'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight, Clock, ExternalLink, Newspaper, User } from 'lucide-react'
import type { TechNewsArticle } from '@/lib/news'

interface BlogFilterProps {
  articles: TechNewsArticle[]
}

const categories = ['All', 'AI & ML', 'Web & Apps', 'Security & Cloud', 'Hardware & Devices', 'Technology']

// Page 1: 1 featured hero + 6 grid cards = 7 total
// All other pages: 6 grid cards each
const PAGE_ONE_GRID = 6    // grid cards on page 1 (1 featured + 6 grid = 7 visible)
const REST_PER_PAGE = 6    // cards per page on pages 2+

// Compute page boundaries so we know how many articles to slice per page
function getPageSlice(pageIndex: number): { start: number; end: number } {
  if (pageIndex === 0) {
    // page 1 takes 7 articles (1 featured + 6 grid)
    return { start: 0, end: 7 }
  }
  // pages 2+ take REST_PER_PAGE each, starting after the first 7
  const start = 7 + (pageIndex - 1) * REST_PER_PAGE
  return { start, end: start + REST_PER_PAGE }
}

function computeTotalPages(count: number): number {
  if (count <= 0) return 1
  if (count <= 7) return 1
  return 1 + Math.ceil((count - 7) / REST_PER_PAGE)
}

export default function BlogFilter({ articles }: BlogFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({})

  // Filter articles by category
  const filtered = useMemo(() => {
    if (selectedCategory === 'All') return articles
    return articles.filter(
      (a) =>
        a.category === selectedCategory ||
        (selectedCategory === 'Technology' &&
          !['AI & ML', 'Web & Apps', 'Security & Cloud', 'Hardware & Devices'].includes(a.category))
    )
  }, [articles, selectedCategory])

  // Filter out any articles that failed to load their images
  const validArticles = useMemo(() => {
    return filtered.filter((a) => !failedImages[a.id])
  }, [filtered, failedImages])

  const totalPages = computeTotalPages(validArticles.length)
  const safePage = Math.min(currentPage, totalPages)
  const pageIndex = safePage - 1

  // Slice articles for the current page
  const { start, end } = getPageSlice(pageIndex)
  const pageArticles = validArticles.slice(start, end)

  // Page 1: first article is featured hero, rest go to 3-col grid
  // Other pages: all articles go directly into the 3-col grid
  const isFirstPage = safePage === 1
  const featured = isFirstPage ? pageArticles[0] : null
  const gridArticles = isFirstPage ? pageArticles.slice(1) : pageArticles

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat)
    setCurrentPage(1)
  }

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage)
      if (typeof window !== 'undefined') {
        const el = document.getElementById('blog-grid-top')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }))
  }

  return (
    <div id="blog-grid-top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Category Filter Pills */}
      <div className="mb-10 flex flex-wrap gap-2 sm:justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => handleCategoryChange(cat)}
            className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-all ${
              selectedCategory === cat
                ? 'border-teal bg-teal text-white shadow-sm'
                : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Article — page 1 only */}
      {featured && (
        <div className="mb-12">
          <div className="group surface-card grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-teal/40 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 lg:grid-cols-12 lg:items-center">
            <div className="relative h-64 overflow-hidden bg-slate-950 lg:col-span-6 lg:h-[400px]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized={featured.image.startsWith('http')}
                onError={() => handleImageError(featured.id)}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:hidden" />
            </div>

            <div className="p-6 sm:p-8 lg:col-span-6 lg:p-10">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="inline-flex rounded-full border border-teal/30 bg-teal/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-teal">
                  {featured.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-amber-500">
                  <Newspaper className="h-3.5 w-3.5" /> {featured.sourceName}
                </span>
              </div>

              <h2 className="text-2xl font-extrabold tracking-tight text-navy transition-colors group-hover:text-teal dark:text-white dark:group-hover:text-teal-light sm:text-3xl">
                {featured.title}
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {featured.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5 font-medium">
                  <User className="h-3.5 w-3.5 text-teal" /> {featured.author}
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="h-3.5 w-3.5 text-teal" /> {featured.readTime}
                </span>
                <span>{featured.date}</span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href={`/blog/${encodeURIComponent(featured.id)}`} className="btn-primary text-xs">
                  Read Full Article <ArrowRight className="h-4 w-4" />
                </Link>
                {featured.url && featured.url !== '#' && (
                  <a
                    href={featured.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-navy dark:text-slate-400 dark:hover:text-white"
                  >
                    Original Source <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grid — 6 cards (page 1 below featured, or all 6 on subsequent pages) */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {gridArticles.map((article) => (
          <div
            key={article.id}
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="relative h-48 w-full overflow-hidden bg-slate-950">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized={article.image.startsWith('http')}
                onError={() => handleImageError(article.id)}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3">
                <span className="rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-teal border border-teal/20">
                  {article.category}
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <div className="mb-2 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-semibold text-slate-500 dark:text-slate-400">{article.sourceName}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{article.readTime}</span>
                </div>
                <h3 className="line-clamp-2 text-base font-bold text-navy transition-colors group-hover:text-teal dark:text-white dark:group-hover:text-teal-light">
                  {article.title}
                </h3>
                <p className="mt-2.5 line-clamp-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs dark:border-slate-800/80">
                <span className="text-[11px] text-slate-400">{article.date}</span>
                <Link
                  href={`/blog/${encodeURIComponent(article.id)}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-teal transition-all group-hover:gap-2 dark:text-teal-light"
                >
                  Read Story <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls — single row on mobile, no wrapping */}
      {totalPages > 1 && (
        <div className="mt-12 border-t border-slate-200 pt-8 dark:border-slate-800">
          <div className="flex items-center justify-center gap-1.5 overflow-x-auto pb-1">
            {/* Previous */}
            <button
              type="button"
              onClick={() => handlePageChange(safePage - 1)}
              disabled={safePage === 1}
              className="flex-shrink-0 inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-2.5 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-slate-300 disabled:opacity-40 disabled:cursor-not-allowed dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Prev</span>
            </button>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => handlePageChange(page)}
                className={`flex-shrink-0 h-8 w-8 rounded-xl border text-xs font-semibold transition-colors ${
                  safePage === page
                    ? 'border-teal bg-teal text-white shadow-sm'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300'
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next */}
            <button
              type="button"
              onClick={() => handlePageChange(safePage + 1)}
              disabled={safePage === totalPages}
              className="flex-shrink-0 inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-2.5 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-slate-300 disabled:opacity-40 disabled:cursor-not-allowed dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
