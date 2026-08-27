import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/site'

/**
 * robots.txt
 *
 * Philosophy: this is a lead-generating agency site, so we WANT to be
 * discovered and cited — by classic search engines AND by AI answer engines
 * (which increasingly drive referrals). We therefore explicitly welcome the
 * major search + AI answer/search crawlers and only fence off routes with no
 * standalone value (the API).
 *
 * AI TRAINING crawlers (GPTBot, ClaudeBot, CCBot, Google-Extended, ...) are
 * currently ALLOWED to maximise visibility and citation. If the owner later
 * prefers their content not be used for model *training* while still being
 * cited in answers, flip those specific agents to `disallow: '/'` — the
 * answer/search bots (OAI-SearchBot, ChatGPT-User, PerplexityBot, Bingbot,
 * Googlebot) should stay allowed regardless.
 */
export default function robots(): MetadataRoute.Robots {
  const disallow = ['/api/']

  const answerAndSearchBots = [
    'Googlebot',
    'Bingbot',
    'DuckDuckBot',
    'OAI-SearchBot', // ChatGPT Search index
    'ChatGPT-User', // ChatGPT live browsing on behalf of a user
    'PerplexityBot',
    'Perplexity-User',
    'Google-Extended', // Gemini / AI Overviews grounding
    'Applebot',
    'Applebot-Extended',
  ]

  const trainingBots = ['GPTBot', 'ClaudeBot', 'anthropic-ai', 'CCBot', 'Bytespider', 'Amazonbot']

  return {
    rules: [
      { userAgent: '*', allow: '/', disallow },
      ...answerAndSearchBots.map((userAgent) => ({ userAgent, allow: '/', disallow })),
      // Allowed for now (see note above). Change `allow` to `disallow: '/'` to opt out of training.
      ...trainingBots.map((userAgent) => ({ userAgent, allow: '/', disallow })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
