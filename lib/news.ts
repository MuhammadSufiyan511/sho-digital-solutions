import { blogPosts } from './data'

export interface TechNewsArticle {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  dateISO: string
  author: string
  sourceName: string
  category: string
  image: string
  readTime: string
  url: string
}

const NEWS_API_KEY = process.env.NEWS_API_KEY

// Fallback high quality technology images for articles without images
const FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&auto=format&fit=crop',
]

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/[\s_-]+/g, '-')
    .substring(0, 80)
}

function calculateReadTime(text: string): string {
  const words = text.split(/\s+/).length
  const minutes = Math.max(2, Math.ceil(words / 150))
  return `${minutes} min read`
}

function formatDate(dateStr?: string): { formatted: string; iso: string } {
  if (!dateStr) {
    const now = new Date()
    return { formatted: now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }), iso: now.toISOString() }
  }
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) {
    const now = new Date()
    return { formatted: now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }), iso: now.toISOString() }
  }
  return {
    formatted: d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    iso: d.toISOString(),
  }
}

function assignCategory(title: string, desc: string): string {
  const text = `${title} ${desc}`.toLowerCase()
  if (text.includes('ai') || text.includes('gpt') || text.includes('model') || text.includes('llm') || text.includes('intelligence')) {
    return 'AI & ML'
  }
  if (text.includes('apple') || text.includes('google') || text.includes('microsoft') || text.includes('chip') || text.includes('device')) {
    return 'Hardware & Devices'
  }
  if (text.includes('security') || text.includes('cyber') || text.includes('data') || text.includes('privacy') || text.includes('hack')) {
    return 'Security & Cloud'
  }
  if (text.includes('web') || text.includes('app') || text.includes('software') || text.includes('code') || text.includes('dev')) {
    return 'Web & Apps'
  }
  return 'Technology'
}

export async function fetchTechNews(): Promise<TechNewsArticle[]> {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?category=technology&language=en&pageSize=40&apiKey=${NEWS_API_KEY}`,
      { next: { revalidate: 1800 } } // ISR: refresh every 30 mins
    )

    if (!res.ok) {
      console.warn('NewsAPI responded with non-200 status, using fallback posts:', res.status)
      return getFallbackArticles()
    }

    const data = await res.json()

    if (data.status !== 'ok' || !Array.isArray(data.articles) || data.articles.length === 0) {
      return getFallbackArticles()
    }

    // Filter out articles with removed titles or missing/invalid image URLs
    const validArticles = data.articles.filter((art: any) => {
      if (!art.title || art.title === '[Removed]') return false
      if (!art.urlToImage || typeof art.urlToImage !== 'string' || !art.urlToImage.startsWith('http')) return false
      return true
    })

    // Sort by publish date descending (newest updates first)
    validArticles.sort((a: any, b: any) => {
      const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0
      const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0
      return dateB - dateA
    })

    const parsed: TechNewsArticle[] = validArticles.map((art: any, index: number) => {
      const slug = slugify(art.title) || `tech-news-${index + 1}`
      const { formatted, iso } = formatDate(art.publishedAt)
      const fullContent = art.content || art.description || art.title

      return {
        id: `${slug}-${index}`,
        title: art.title.replace(/\s*-\s*[^-]+$/, ''), // remove source suffix from title if present
        excerpt: art.description || art.title,
        content: fullContent,
        date: formatted,
        dateISO: iso,
        author: art.author || art.source?.name || 'Tech Reporter',
        sourceName: art.source?.name || 'Tech News',
        category: assignCategory(art.title, art.description || ''),
        image: art.urlToImage,
        readTime: calculateReadTime(fullContent),
        url: art.url || 'https://news.google.com',
      }
    })

    return parsed.length > 0 ? parsed : getFallbackArticles()
  } catch (error) {
    console.error('Error fetching Tech News from NewsAPI:', error)
    return getFallbackArticles()
  }
}

export async function getTechNewsById(id: string): Promise<TechNewsArticle | null> {
  const articles = await fetchTechNews()
  const found = articles.find((a) => a.id === id || a.id.startsWith(id))
  if (found) return found

  // Check fallback static posts
  const staticPost = blogPosts.find((p) => p.id === id)
  if (staticPost) {
    return {
      id: staticPost.id,
      title: staticPost.title,
      excerpt: staticPost.excerpt,
      content: staticPost.content || staticPost.excerpt,
      date: staticPost.date,
      dateISO: staticPost.dateISO || new Date().toISOString(),
      author: staticPost.author,
      sourceName: 'SixByte Insights',
      category: staticPost.category,
      image: staticPost.image,
      readTime: staticPost.readTime,
      url: '#',
    }
  }

  return articles[0] || null
}

function getFallbackArticles(): TechNewsArticle[] {
  return blogPosts.map((post) => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content || post.excerpt,
    date: post.date,
    dateISO: post.dateISO || new Date().toISOString(),
    author: post.author,
    sourceName: 'SixByte Tech',
    category: post.category,
    image: post.image,
    readTime: post.readTime,
    url: '#',
  }))
}
