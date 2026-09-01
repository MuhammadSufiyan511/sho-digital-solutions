/**
 * Rich pillar-page content for each industry, keyed by the industry `id` in
 * lib/data.ts (which doubles as the URL slug: /industries/<id>).
 *
 * Adds depth (overview, the challenges that industry faces online, outcomes we
 * aim for, FAQs, and internal-link targets) on top of the short copy in
 * lib/data.ts. Grounded in how SixByte actually helps these businesses — no
 * invented statistics or client claims.
 */

export interface IndustryContent {
  slug: string
  metaTitle: string
  metaDescription: string
  heroTitle: string
  heroSubtitle: string
  summary: string
  overview: string[]
  challenges: string[]
  outcomes: string[]
  faqs: { q: string; a: string }[]
  /** service ids (lib/data.ts) most relevant to this industry */
  relatedServices: string[]
  keywords: string[]
}

export const industryContent: Record<string, IndustryContent> = {
  restaurant: {
    slug: 'restaurant',
    metaTitle: 'Websites for Restaurants & Hospitality',
    metaDescription:
      'Websites and booking systems for restaurants, cafés, and hospitality — online reservations, digital menus, and mobile-first design that helps guests book with confidence.',
    heroTitle: 'Websites that fill tables, not just look good',
    heroSubtitle:
      'For restaurants and hospitality, we build sites that make it easy to view the menu, trust the place, and book a table — especially on a phone.',
    summary:
      'For restaurants and hospitality, we build mobile-first websites with online reservations and digital menus that turn hungry searchers into booked guests.',
    overview: [
      'Most people decide where to eat on their phone, often minutes before they want a table. If your menu is a slow PDF, your hours are unclear, or booking means calling during a busy service, you lose guests to the restaurant next door with a smoother site.',
      'We build restaurant and hospitality sites around that reality: fast pages, an appetising and up-to-date menu, clear hours and location, and reservations that can be made in a few taps. The result feels effortless for the guest and reduces friction for your staff.',
    ],
    challenges: [
      'Menus trapped in slow, hard-to-read PDFs',
      'Phone-only booking that fails during busy hours',
      'Weak visibility in "near me" and local searches',
      'Photos and hours that are outdated or missing',
    ],
    outcomes: [
      'Guests can view the menu and book in a few taps',
      'Fewer missed bookings from phone-only reservations',
      'A stronger presence in local and map searches',
      'A site that looks as good as the food',
    ],
    faqs: [
      {
        q: 'Can guests book a table directly on the site?',
        a: 'Yes. We can add an online reservation flow so guests book in a few taps, which reduces the pressure of phone-only booking during service.',
      },
      {
        q: 'Can the menu be updated easily?',
        a: 'Yes. We set up the menu so it can be updated for seasonal changes or price adjustments without needing a developer each time.',
      },
      {
        q: 'Will the site help us show up in local searches?',
        a: 'A well-structured local site plus Google Business Profile support improves how you appear in "near me" and map searches. See our SEO service for the ongoing side of this.',
      },
    ],
    relatedServices: ['web-dev', 'industry-systems', 'lead-integration', 'seo'],
    keywords: [
      'restaurant website design',
      'online reservation system',
      'digital menu',
      'hospitality website',
      'restaurant booking website',
    ],
  },

  healthcare: {
    slug: 'healthcare',
    metaTitle: 'Websites for Healthcare & Clinics',
    metaDescription:
      'Patient focused websites and portals for clinics and healthcare providers — online appointment scheduling, intake forms, and dependable, easy to navigate design.',
    heroTitle: 'Patient-friendly websites that build trust and save time',
    heroSubtitle:
      'For clinics and healthcare providers, we build clear, dependable sites that make it simple for patients to find information and book appointments.',
    summary:
      'For healthcare and clinics, we build patient-focused websites with online scheduling and intake forms that reduce admin load and build patient trust.',
    overview: [
      'When someone is choosing a clinic, they are really deciding whether to trust it. A clear, calm, professional website signals that the practice is dependable — while a confusing or dated one raises doubt at exactly the wrong moment.',
      'We build patient focused sites and portals that make access easy: online appointment scheduling, digital intake forms, clear service and clinician information, and a structure that respects how people actually look for care. The aim is to reduce phone and paperwork load for staff while making patients feel looked after from the first click.',
    ],
    challenges: [
      'Appointment booking handled entirely by phone',
      'Paper intake forms that create admin overhead',
      'Information scattered or hard to find under stress',
      'Trust signals that do not match the quality of care',
    ],
    outcomes: [
      'Patients can request or book appointments online',
      'Less phone and paperwork load for front-desk staff',
      'Clear, reassuring information about services and clinicians',
      'A more dependable, professional first impression',
    ],
    faqs: [
      {
        q: 'Can patients book appointments online?',
        a: 'Yes. We can add appointment scheduling or request flows so patients can book without calling, which eases pressure on reception.',
      },
      {
        q: 'What about privacy and sensitive data?',
        a: 'We design intake and portal flows with privacy in mind and use trusted, established tools for sensitive data. Specific compliance requirements should be confirmed for your region and practice during scoping.',
      },
      {
        q: 'Can it integrate with our existing systems?',
        a: 'Where your practice-management or scheduling tools support integration, we can connect them so information does not have to be re-entered.',
      },
    ],
    relatedServices: ['industry-systems', 'web-dev', 'maintenance', 'lead-integration'],
    keywords: [
      'healthcare website design',
      'clinic website',
      'patient portal',
      'appointment scheduling',
      'medical website development',
    ],
  },

  'real-estate': {
    slug: 'real-estate',
    metaTitle: 'Websites for Real Estate',
    metaDescription:
      'Real estate websites and listing platforms — property search, virtual tours, mortgage calculators, and lead capture that generate better-quality enquiries.',
    heroTitle: 'Property websites that generate better leads',
    heroSubtitle:
      'For agents and brokerages, we build listing platforms and sites that make properties easy to explore and easy to enquire about.',
    summary:
      'For real estate, we build property websites and listing platforms with search, virtual tours, and lead capture that produce better-quality enquiries.',
    overview: [
      'Property buyers do a lot of research before they ever call. If your listings are hard to browse, slow to load, or missing detail, serious buyers move on — often to a portal where you compete on price and pay for the privilege.',
      'We build real estate sites and listing platforms that put your properties front and centre: fast search and filtering, room for rich photography and virtual tours, useful tools like mortgage calculators, and clear lead-capture so enquiries reach the right agent. Owning your own platform also means owning the relationship, instead of renting it from a third-party portal.',
    ],
    challenges: [
      'Dependence on third-party portals and their fees',
      'Listings that are slow or awkward to browse on mobile',
      'Low-quality enquiries with little buyer context',
      'No easy way to showcase tours or property detail',
    ],
    outcomes: [
      'A branded platform you own end to end',
      'Faster, richer property browsing on any device',
      'Better-qualified enquiries routed to the right agent',
      'Room for virtual tours, maps, and calculators',
    ],
    faqs: [
      {
        q: 'Can the site pull in or manage property listings?',
        a: 'Yes. We can build a listing platform with search and filtering, and where a feed or MLS/IDX-style integration is available, connect to it so listings stay current.',
      },
      {
        q: 'Can we add virtual tours and maps?',
        a: 'Yes. Property pages can embed virtual tours, galleries, and maps so buyers get a strong sense of a property before enquiring.',
      },
      {
        q: 'How do enquiries reach our agents?',
        a: 'We set up lead capture that routes enquiries to the right person, and can connect it to your CRM so nothing gets lost.',
      },
    ],
    relatedServices: ['industry-systems', 'web-dev', 'lead-integration', 'seo'],
    keywords: [
      'real estate website',
      'property listing platform',
      'real estate lead generation',
      'IDX website',
      'realtor website design',
    ],
  },

  legal: {
    slug: 'legal',
    metaTitle: 'Websites for Legal Services',
    metaDescription:
      'Authority-building websites for law firms and legal practices — clear practice-area pages, consultation forms, and a credible, easy-to-navigate presence.',
    heroTitle: 'A website that makes your firm the credible choice',
    heroSubtitle:
      'For law firms, we build authoritative, clearly-structured sites that make the practice easy to trust and easy to contact.',
    summary:
      'For legal services, we build authority-focused websites with clear practice-area pages and consultation forms that turn research into consultations.',
    overview: [
      'People choosing a lawyer are often anxious and comparing options carefully. They judge credibility fast, largely on how clear and professional the website feels. A confusing or dated site quietly undermines an otherwise excellent firm.',
      'We build legal websites that establish authority and make the next step obvious: well-organised practice-area pages, clear attorney profiles, genuine trust signals, and consultation forms that are easy to complete. The tone stays measured and professional, because that is what reassures a prospective client.',
    ],
    challenges: [
      'Dense, hard-to-navigate practice information',
      'A dated look that undercuts the firm’s credibility',
      'No clear or low-friction path to request a consultation',
      'Weak visibility for specific practice-area searches',
    ],
    outcomes: [
      'A credible, authoritative first impression',
      'Clear practice-area pages that match how people search',
      'Simple, reassuring consultation requests',
      'Content that supports visibility for key practice areas',
    ],
    faqs: [
      {
        q: 'Can you structure the site around our practice areas?',
        a: 'Yes. Dedicated practice-area pages help both prospective clients and search engines understand exactly what you handle, which tends to attract more relevant enquiries.',
      },
      {
        q: 'How do consultation requests work?',
        a: 'We add clear, low-friction consultation forms that ask for just enough to triage the enquiry, and route them to the right person in the firm.',
      },
      {
        q: 'Can you help us publish articles and resources?',
        a: 'Yes. A CMS lets you publish articles and resources that build authority over time and support your visibility for key topics.',
      },
    ],
    relatedServices: ['web-dev', 'seo', 'lead-integration', 'maintenance'],
    keywords: [
      'law firm website design',
      'legal website',
      'attorney website',
      'practice area pages',
      'legal services marketing',
    ],
  },

  fitness: {
    slug: 'fitness',
    metaTitle: 'Websites for Health & Fitness',
    metaDescription:
      'Websites for gyms, studios, and trainers — class scheduling, membership management, trainer profiles, and a clear presence that helps grow membership.',
    heroTitle: 'A digital presence that grows your membership',
    heroSubtitle:
      'For studios, gyms, and trainers, we build sites that make it easy to view classes, join, and stay engaged.',
    summary:
      'For health and fitness, we build websites with class scheduling and membership tools that make it easy to join and help grow membership.',
    overview: [
      'Fitness is a decision people make on impulse and momentum. If a prospective member cannot quickly see your classes, understand membership, and sign up, that momentum fades before they ever walk in.',
      'We build sites for studios, gyms, and trainers that turn interest into action: clear class schedules, straightforward membership and booking, trainer profiles that build connection, and space for content that keeps members engaged. The experience should feel as motivating as the training itself.',
    ],
    challenges: [
      'Class schedules that are hard to find or out of date',
      'Sign-up and booking friction that loses new members',
      'No easy way to showcase trainers and community',
      'Little to keep existing members engaged online',
    ],
    outcomes: [
      'Prospective members can view classes and join easily',
      'Less friction from interest to booked session',
      'Trainer profiles that build trust and connection',
      'Room for content that supports retention',
    ],
    faqs: [
      {
        q: 'Can members book classes online?',
        a: 'Yes. We can add class scheduling and booking so members reserve a spot online, and connect it to the tools you use to manage capacity.',
      },
      {
        q: 'Can you handle memberships and recurring billing?',
        a: 'We can integrate membership and payment tools that support recurring billing; the right tool depends on your region and how you currently operate.',
      },
      {
        q: 'Can we feature our trainers?',
        a: 'Yes. Trainer profiles help prospective members feel a connection before they arrive, which supports sign-ups.',
      },
    ],
    relatedServices: ['industry-systems', 'web-dev', 'lead-integration', 'ecommerce'],
    keywords: [
      'gym website design',
      'fitness studio website',
      'class scheduling system',
      'membership website',
      'personal trainer website',
    ],
  },

  ecommerce: {
    slug: 'ecommerce',
    metaTitle: 'Websites for Retail & E-commerce',
    metaDescription:
      'Retail and e-commerce websites — product catalogs, optimised checkout, inventory management, and mobile-first storefronts designed to increase online sales.',
    heroTitle: 'Storefronts designed to turn browsing into buying',
    heroSubtitle:
      'For retailers, we build fast, trustworthy online stores where products are easy to find and checkout feels effortless.',
    summary:
      'For retail and e-commerce, we build fast, mobile-first storefronts with optimised checkout and product discovery designed to increase online sales.',
    overview: [
      'Online retail is won and lost in small moments: how fast a product page loads, how easy it is to find the right item, and how simple the checkout feels. Small amounts of friction add up to abandoned carts and lost revenue.',
      'We build retail and e-commerce stores focused on removing that friction — clear product discovery, trustworthy product pages, sensible upsell and cross-sell, and a checkout that feels quick and safe. Whether on Shopify, WooCommerce, or a custom build, the goal is a store that is easy to run and built to convert.',
    ],
    challenges: [
      'High cart abandonment from a clunky checkout',
      'Product discovery that makes the right item hard to find',
      'Slow pages that lose impatient mobile shoppers',
      'Manual inventory and order handling that does not scale',
    ],
    outcomes: [
      'A smoother path from product page to completed order',
      'Faster, mobile-first product discovery',
      'Sensible upsell and cross-sell where it helps',
      'Inventory and order handling that scales with you',
    ],
    faqs: [
      {
        q: 'Which platform should my store use?',
        a: 'It depends on your catalog, budget, and how much control you want. Shopify is quick to launch, WooCommerce offers WordPress flexibility, and a custom build suits unusual needs. Our E-commerce service explains the trade-offs.',
      },
      {
        q: 'Can you reduce cart abandonment?',
        a: 'We focus on the common causes — slow pages, unclear pricing, and a long checkout — and streamline them, since checkout friction is one of the biggest drivers of abandoned carts.',
      },
      {
        q: 'Can the store manage inventory and orders?',
        a: 'Yes. We set up inventory management and order notifications, and can integrate shipping and fulfilment tools appropriate to your business.',
      },
    ],
    relatedServices: ['ecommerce', 'web-dev', 'lead-integration', 'seo'],
    keywords: [
      'e-commerce website',
      'online retail website',
      'online store design',
      'checkout optimization',
      'retail website development',
    ],
  },
}
