/**
 * Central site configuration — single source of truth for brand, contact, and SEO.
 *
 * ⚠️ PLACEHOLDER DOMAIN — there is no production domain yet.
 * `siteUrl` below uses the RFC-2606 reserved `.example.com` space so it is
 * unmistakably a placeholder. When the real domain goes live, change this ONE
 * value (e.g. 'https://www.sixbyte.tech') and canonical URLs, Open Graph tags,
 * Twitter cards, sitemap, and JSON-LD structured data update site-wide.
 */
export const siteUrl = 'https://sixbyte.example.com'

export const siteConfig = {
  name: 'SixByte Technologies',
  shortName: 'SixByte',
  url: siteUrl,
  tagline: 'Smart Websites for Growing Businesses',
  description:
    'SixByte Technologies designs and builds polished, high-converting websites and digital systems that help businesses look credible and grow with confidence.',

  // Contact details (used across footer, contact page, CTAs, and structured data)
  email: 'contact.sixbyte@gmail.com',
  phoneDisplay: '0329 5147621',
  phoneTel: '+923295147621',
  whatsappNumber: '923295147621',
  whatsappUrl: 'https://wa.me/923295147621',
  location: 'Islamabad, Pakistan',

  // Assets
  logo: '/assets/SixByte_standalone-removebg-preview.webp',
  ogImage: '/assets/hero_ecosystem.png',

  // Social profiles
  social: {
    linkedin: 'https://www.linkedin.com/company/sixbyte-technologies/',
    instagram: 'https://www.instagram.com/artb_yfari',
    facebook: 'https://www.facebook.com/share/19V3tqCFKm/',
  },

  keywords: [
    'web development',
    'website design',
    'digital agency',
    'software house',
    'e-commerce development',
    'business websites',
    'SEO',
    'Next.js development',
    'SixByte Technologies',
    'Islamabad web design',
  ],
} as const

export type SiteConfig = typeof siteConfig
