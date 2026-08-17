import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, User } from 'lucide-react'
import { blogPosts } from '@/lib/data'
import CTASection from '@/components/sections/CTASection'
import PageHero from '@/components/sections/PageHero'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Blog | Digital Marketing & Tech Insights',
  description: 'Digital marketing, web development, and growth tips from the SixByte Technologies team.',
}

const categories = ['All', 'Performance', 'SEO', 'Lead Generation', 'E-commerce', 'Strategy']

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <>
      <PageHero
        tag="Insights & resources"
        title="Digital growth tips and strategies."
        subtitle="Actionable advice, industry insights, and practical ideas to help your business win online."
        chips={['Performance', 'SEO', 'Strategy']}
        panelTitle="Latest thinking"
        panelBody="Useful notes on how to improve site speed, clarity, and lead generation without overcomplicating the work."
        panelStats={['Useful', 'Practical', 'Clear']}
      />

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap gap-2 sm:justify-center">
            {categories.map((cat) => (
              <span
                key={cat}
                className="rounded border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Featured Post */}
          {featured && (
            <Link href={`/blog/${featured.id}`} className="group block mb-12">
              <div className="surface-card grid overflow-hidden rounded-xl border transition-all duration-300 hover:border-teal/30 hover:shadow-lg lg:grid-cols-12 lg:items-center">
                <div className="relative h-64 overflow-hidden bg-slate-900 lg:col-span-6 lg:h-96">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 sm:p-8 lg:col-span-6 lg:p-10">
                  <div className="mb-3 flex items-center gap-3">
                    <Badge variant="blue">{featured.category}</Badge>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Featured Article</span>
                  </div>
                  <h2 className="text-2xl font-bold text-navy transition-colors group-hover:text-teal dark:text-white dark:group-hover:text-teal-light">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {featured.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1"><User className="h-3.5 w-3.5" />{featured.author}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{featured.readTime}</span>
                    <span>{featured.date}</span>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-teal transition-all group-hover:gap-3 dark:text-teal-light">
                    Read Article <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Grid Posts */}
          <div className="grid gap-8 sm:grid-cols-2">
            {rest.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group surface-card overflow-hidden rounded-xl transition-all duration-300 hover:border-teal/30 hover:shadow-lg">
                <div className="relative h-52 overflow-hidden bg-slate-900">
                  <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Badge variant="blue">{post.category}</Badge>
                    <span className="flex items-center gap-1 text-xs text-slate-400"><Clock className="h-3 w-3" />{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy transition-colors group-hover:text-teal dark:text-white dark:group-hover:text-teal-light">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-400 dark:border-slate-800">
                    <span>{post.date}</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-teal dark:text-teal-light">
                      Read more <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-slate-50/80 py-16 dark:bg-slate-950/60 lg:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-navy dark:text-white">Get Growth Tips in Your Inbox</h2>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
            Weekly insights on web development, SEO, and digital strategy — no fluff.
          </p>
          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded border border-slate-200 bg-white px-4 py-2.5 text-xs outline-none focus:border-teal dark:border-slate-800 dark:bg-slate-900 dark:text-white"
            />
            <button className="btn-primary shrink-0 text-xs">
              Subscribe
            </button>
          </div>
          <p className="mt-2 text-[11px] text-slate-400">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      <CTASection title="Ready to Put These Strategies to Work?" />
    </>
  )
}
