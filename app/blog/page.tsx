import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, User } from 'lucide-react'
import { blogPosts } from '@/lib/data'
import CTASection from '@/components/sections/CTASection'
import PageHero from '@/components/sections/PageHero'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Digital marketing, web development, and growth tips from the SHO Digital Solutions team.',
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

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((cat) => (
              <span key={cat} className="px-4 py-1.5 text-sm rounded-full border border-gray-200 text-gray-600 hover:bg-electric hover:text-white hover:border-electric transition-colors cursor-pointer">
                {cat}
              </span>
            ))}
          </div>

          {/* Featured Post */}
          {featured && (
            <Link href={`/blog/${featured.id}`} className="group block mb-16">
              <div className="grid lg:grid-cols-2 gap-8 bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <Image src={featured.image} alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="blue">{featured.category}</Badge>
                    <span className="text-xs text-gray-400">Featured</span>
                  </div>
                  <h2 className="text-2xl font-bold text-navy mb-3 group-hover:text-electric transition-colors">{featured.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
                    <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" />{featured.author}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                    <span>{featured.date}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 text-electric font-semibold text-sm group-hover:gap-3 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Other Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rest.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300">
                <div className="relative h-52 overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="blue">{post.category}</Badge>
                    <span className="text-xs text-gray-400 flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                  <h3 className="text-navy font-bold text-lg mb-2 group-hover:text-electric transition-colors">{post.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{post.date}</span>
                    <span className="text-electric font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                      Read more <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-navy mb-3">Get Growth Tips in Your Inbox</h2>
          <p className="text-gray-500 text-sm mb-6">Weekly insights on web development, SEO, and digital strategy — no fluff.</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-electric focus:ring-2 focus:ring-electric/10"
            />
            <button className="bg-electric text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-electric-dark transition-colors flex-shrink-0">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      <CTASection title="Ready to Put These Strategies to Work?" />
    </>
  )
}
