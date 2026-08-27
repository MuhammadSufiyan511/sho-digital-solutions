import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { blogPosts } from '@/lib/data'
import { pageMetadata, articleLd, breadcrumbLd } from '@/lib/seo'
import CTASection from '@/components/sections/CTASection'
import PageHero from '@/components/sections/PageHero'
import Badge from '@/components/ui/Badge'
import JsonLd from '@/components/JsonLd'

interface Props {
  params: { id: string }
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ id: p.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.id === params.id)
  if (!post) return { title: 'Post Not Found' }
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.id}`,
    image: post.image,
    type: 'article',
  })
}

export default function BlogDetailPage({ params }: Props) {
  const post = blogPosts.find((p) => p.id === params.id)
  if (!post) notFound()

  const content =
    post.content ||
    `This article covers key insights about ${post.category.toLowerCase()} that every business owner should know.

The digital landscape is constantly evolving, and staying ahead requires understanding the fundamentals that drive online growth.

The key takeaway is that small, consistent improvements compound over time, and the businesses that invest in their digital presence today will have a significant competitive advantage tomorrow.`

  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 2)

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
        tag="Blog Article"
        title={post.title}
        subtitle={post.excerpt}
        chips={[post.category, post.readTime, post.date]}
        panelTitle="Article details"
        panelBody="Insights and practical guidance from our engineering and digital strategy practice."
        panelStats={[post.author, 'Insight', 'Practical']}
      />

      <section className="py-10 lg:py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition-colors hover:text-navy dark:text-slate-400 dark:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>

          <div className="relative mb-10 h-64 overflow-hidden rounded-xl border border-slate-200 bg-slate-900 shadow-lg sm:h-80 dark:border-slate-800">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
          </div>

          <div className="prose prose-slate max-w-none dark:prose-invert">
            <p className="text-base font-semibold leading-relaxed text-slate-700 dark:text-slate-200 mb-6">{post.excerpt}</p>
            {content.trim().split('\n\n').map((para, idx) => {
              const trimmed = para.trim()
              if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
                return <h2 key={idx} className="mt-8 mb-3 text-lg font-bold text-navy dark:text-white">{trimmed.replace(/\*\*/g, '')}</h2>
              }
              return <p key={idx} className="mb-4 text-xs leading-relaxed text-slate-600 dark:text-slate-300">{trimmed}</p>
            })}
          </div>

          {/* Related Articles */}
          {related.length > 0 && (
            <div className="mt-16 border-t border-slate-200 pt-12 dark:border-slate-800">
              <h2 className="text-lg font-bold text-navy dark:text-white mb-6">Related Articles</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {related.map((p) => (
                  <Link key={p.id} href={`/blog/${p.id}`} className="group surface-card overflow-hidden rounded-xl transition-all hover:border-teal/30">
                    <div className="relative h-36 overflow-hidden bg-slate-900">
                      <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <div className="p-4">
                      <Badge variant="blue">{p.category}</Badge>
                      <h3 className="mt-2 text-sm font-bold text-navy transition-colors group-hover:text-teal dark:text-white dark:group-hover:text-teal-light">
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
        title="Ready to Apply These Strategies?"
        subtitle="Book a free consultation and we'll show you exactly how to implement these insights for your specific business."
      />
    </>
  )
}
