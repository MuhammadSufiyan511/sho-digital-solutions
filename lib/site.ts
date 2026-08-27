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
  location: 'I-8, Islamabad, Pakistan',

  // Structured location — single source of truth for the address shown on the
  // site, the Google Maps embed, and Organization/LocalBusiness structured data.
  // SixByte is based in Islamabad's I-8 sector and works with clients across
  // Pakistan and worldwide (remote). Detail is intentionally sector-level; set an
  // exact street address, building/pin, and postalCode here once a public office
  // address is confirmed.
  address: {
    sector: 'I-8',
    locality: 'Islamabad',
    region: 'Islamabad Capital Territory',
    country: 'Pakistan',
    countryCode: 'PK',
  },
  // Approximate centre of sector I-8, Islamabad. Used for map framing and the
  // GeoCoordinates schema — refine to the exact office pin when available.
  geo: { latitude: 33.6693, longitude: 73.0751 },
  // Keyless Google Maps embed (no API key needed) + a link that opens the full map.
  mapEmbedUrl: 'https://maps.google.com/maps?q=I-8%2C%20Islamabad%2C%20Pakistan&z=14&hl=en&output=embed',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=I-8%2C+Islamabad%2C+Pakistan',

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
