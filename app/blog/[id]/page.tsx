import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react'
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
        tag="Blog"
        title={post.title}
        subtitle={post.excerpt}
        chips={[post.category, post.readTime, post.date]}
        panelTitle="Article preview"
        panelBody="A clean, readable feature header that gives the article room to breathe before the main content begins."
        panelStats={[post.author, 'Insight', 'Practical']}
      />

      <section className="py-16 bg-white sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="relative mb-10 h-56 overflow-hidden rounded-2xl shadow-xl sm:h-72 md:mb-12 md:h-96">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed font-medium mb-8">{post.excerpt}</p>
            {content.trim().split('\n\n').map((para, i) => {
              if (para.startsWith('**') && para.endsWith('**')) {
                return <h2 key={i} className="text-xl font-bold text-navy mt-8 mb-4">{para.replace(/\*\*/g, '')}</h2>
              }
              return <p key={i} className="text-gray-600 leading-relaxed mb-5">{para.trim()}</p>
            })}
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-16 pt-12 border-t border-gray-100">
              <h2 className="text-xl font-bold text-navy mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {related.map((p) => (
                  <Link key={p.id} href={`/blog/${p.id}`} className="group block">
                    <div className="relative h-40 rounded-xl overflow-hidden mb-3">
                      <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <Badge variant="blue">{p.category}</Badge>
                    <h3 className="text-navy font-semibold text-sm mt-2 group-hover:text-electric transition-colors">{p.title}</h3>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection title="Ready to Apply These Strategies?" subtitle="Book a free consultation and we'll show you exactly how to implement these insights for your specific business." />
    </>
  )
}
