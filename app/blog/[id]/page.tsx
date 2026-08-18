import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock, User } from 'lucide-react'
import { blogPosts } from '@/lib/data'
import CTASection from '@/components/sections/CTASection'
import PageHero from '@/components/sections/PageHero'
import Badge from '@/components/ui/Badge'

interface Props {
  params: { id: string }
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ id: p.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.id === params.id)
  if (!post) return { title: 'Post Not Found' }
  return { title: post.title, description: post.excerpt }
}

const articleContent: Record<string, string> = {
  'why-website-speed-matters': `
    In today's digital landscape, your website's loading speed isn't just a technical metric — it's a direct driver of revenue.

    Every second of delay in page load time can reduce conversions by up to 7%, according to multiple industry studies. For a website generating $10,000 per month, that's $700 in lost revenue per second of slowness.

    **Why Speed Matters So Much**

    When visitors land on your site, they make split-second decisions about whether to stay or leave. If your page takes more than 3 seconds to load, over half of your visitors will abandon it — regardless of how good your product or service is.

    Search engines like Google have made page speed a ranking factor, meaning slow sites don't just lose visitors — they lose visibility in search results too.

    **Core Web Vitals: The New Standard**

    Google's Core Web Vitals framework measures three key performance indicators: Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS). Sites that score well on these metrics rank higher and convert better.

    **How to Improve Your Site Speed**

    The good news is that most speed issues are fixable. Start by optimizing your images (using WebP format, proper sizing, and lazy loading), minifying CSS and JavaScript files, enabling browser caching, and using a Content Delivery Network (CDN).

    For businesses serious about growth, moving to a modern tech stack like Next.js with server-side rendering can dramatically improve performance scores and, more importantly, your bottom line.
  `,
}

export default function BlogDetailPage({ params }: Props) {
  const post = blogPosts.find((p) => p.id === params.id)
  if (!post) notFound()

  const content = articleContent[post.id] || `
    This article covers key insights about ${post.category.toLowerCase()} that every business owner should know.

    The digital landscape is constantly evolving, and staying ahead requires understanding the fundamentals that drive online growth.

    In this comprehensive guide, we'll walk through the strategies that our most successful clients have used to dramatically improve their online performance and generate more leads through their websites.

    The key takeaway is that small, consistent improvements compound over time — and the businesses that invest in their digital presence today will have a significant competitive advantage tomorrow.
  `

  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 2)

  return (
    <>
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
              if (para.startsWith('**') && para.endsWith('**')) {
                return <h2 key={idx} className="mt-8 mb-3 text-lg font-bold text-navy dark:text-white">{para.replace(/\*\*/g, '')}</h2>
              }
              return <p key={idx} className="mb-4 text-xs leading-relaxed text-slate-600 dark:text-slate-300">{para.trim()}</p>
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
