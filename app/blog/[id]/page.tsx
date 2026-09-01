import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink, Clock, User, Newspaper } from 'lucide-react'
import { fetchTechNews, getTechNewsById } from '@/lib/news'
import { pageMetadata, articleLd, breadcrumbLd } from '@/lib/seo'
import CTASection from '@/components/sections/CTASection'
import PageHero from '@/components/sections/PageHero'
import JsonLd from '@/components/JsonLd'

interface Props {
  params: { id: string }
}

export async function generateStaticParams() {
  const articles = await fetchTechNews()
  return articles.map((a) => ({ id: a.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const decodedId = decodeURIComponent(params.id)
  const post = await getTechNewsById(decodedId)
  if (!post) return { title: 'Article Not Found' }
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.id}`,
    image: post.image,
    type: 'article',
  })
}

export default async function BlogDetailPage({ params }: Props) {
  const decodedId = decodeURIComponent(params.id)
  const post = await getTechNewsById(decodedId)
  if (!post) notFound()

  const allArticles = await fetchTechNews()
  const related = allArticles.filter((p) => p.id !== post.id).slice(0, 2)

  return (
    <>
      <JsonLd
        data={[
          articleLd({
            title: post.title,
            description: post.excerpt,
            path: `/blog/${post.id}`,
            image: post.image,
            dateISO: post.dateISO,
          }),
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: `/blog/${post.id}` },
          ]),
        ]}
      />
      <PageHero
        tag="Technology Article"
        title={post.title}
        subtitle={post.excerpt}
        chips={[post.category, post.readTime, post.date]}
        panelTitle="Article Details"
        panelBody={`Published by ${post.sourceName}. Curated by SixByte Technologies.`}
        panelStats={[post.author, post.sourceName, 'Tech News']}
      />

      <section className="py-10 lg:py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition-colors hover:text-navy dark:text-slate-400 dark:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog & News
          </Link>

          {/* Hero Image */}
          <div className="relative mb-8 h-64 overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-lg sm:h-96 dark:border-slate-800">
            <Image
              src={post.image}
              alt={post.title}
              fill
              unoptimized={post.image.startsWith('http')}
              className="object-cover"
            />
          </div>

          {/* Source & Metadata */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
            <div className="flex items-center gap-3">
              <span className="inline-flex rounded-full border border-teal/30 bg-teal/10 px-3 py-1 text-[11px] font-semibold text-teal">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Newspaper className="h-3.5 w-3.5 text-teal" /> {post.sourceName}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <User className="h-3.5 w-3.5 text-teal" /> {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-teal" /> {post.readTime}
              </span>
              <span>{post.date}</span>
            </div>
          </div>

          {/* Article Text Content */}
          <div className="prose prose-slate max-w-none dark:prose-invert">
            <p className="text-base font-semibold leading-relaxed text-navy dark:text-white mb-6">
              {post.excerpt}
            </p>
            {post.content.trim().split('\n\n').map((para, idx) => {
              const trimmed = para.trim()
              if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
                return (
                  <h2 key={idx} className="mt-8 mb-3 text-lg font-bold text-navy dark:text-white">
                    {trimmed.replace(/\*\*/g, '')}
                  </h2>
                )
              }
              return (
                <p key={idx} className="mb-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {trimmed}
                </p>
              )
            })}
          </div>

          {/* Original External Source Button */}
          {post.url && post.url !== '#' && (
            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/60">
              <p className="text-xs text-slate-600 dark:text-slate-300">
                This report is sourced from <strong>{post.sourceName}</strong>. You can read the full original publication directly at the official source.
              </p>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-teal px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-teal-dark"
              >
                Read Full Story on {post.sourceName} <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          )}

          {/* Related Tech Articles */}
          {related.length > 0 && (
            <div className="mt-16 border-t border-slate-200 pt-12 dark:border-slate-800">
              <h2 className="text-lg font-bold text-navy dark:text-white mb-6">Related Technology Articles</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {related.map((p) => (
                  <Link
                    key={p.id}
                    href={`/blog/${encodeURIComponent(p.id)}`}
                    className="group surface-card flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:border-teal/40 dark:border-slate-800 dark:bg-slate-900"
                  >
                    <div className="relative h-36 overflow-hidden bg-slate-950">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        unoptimized={p.image.startsWith('http')}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-teal">
                        {p.category}
                      </span>
                      <h3 className="mt-1.5 line-clamp-2 text-sm font-bold text-navy transition-colors group-hover:text-teal dark:text-white dark:group-hover:text-teal-light">
                        {p.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Ready to Build Next-Gen Tech Solutions?"
        subtitle="Talk with our engineering team today to see how modern web, AI, and software systems can elevate your platform."
      />
    </>
  )
}
