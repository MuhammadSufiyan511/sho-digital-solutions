import type { Service, Project, Testimonial, PricingPlan, BlogPost, Industry, NavLink } from '@/types'

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Industries', href: '/industries' },
  // { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export const services: Service[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    description:
      'Custom, high-performance websites built to convert visitors into customers. Every pixel crafted with purpose and every line of code optimized for speed.',
    icon: '💻',
    features: [
      'Custom design & development',
      'Mobile-first responsive layout',
      'SEO-optimized structure',
      'Fast loading (Core Web Vitals)',
      'CMS integration (WordPress/Headless)',
      'Analytics & tracking setup',
    ],
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    description:
      'Full-featured online stores that drive sales 24/7. From product listings to checkout, we build seamless shopping experiences your customers love.',
    icon: '🛒',
    features: [
      'Shopify / WooCommerce / Custom',
      'Secure payment gateway integration',
      'Inventory management system',
      'Product catalog & search',
      'Order tracking & notifications',
      'Multi-currency support',
    ],
  },
  {
    id: 'industry-systems',
    title: 'Industry-Specific Systems',
    description:
      'Tailored digital solutions for your specific industry. We understand that restaurants, clinics, and real estate firms have different needs — and we build for each.',
    icon: '🏗️',
    features: [
      'Booking & reservation systems',
      'Patient management portals',
      'Property listing platforms',
      'Menu & ordering systems',
      'Appointment schedulers',
      'Custom dashboards',
    ],
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    description:
      'Your website is a living asset. We keep it secure, up-to-date, and performing at its best with ongoing maintenance and priority support.',
    icon: '🔧',
    features: [
      'Regular security updates',
      'Performance monitoring',
      'Content updates',
      'Bug fixes & troubleshooting',
      'Monthly reports',
      'Priority email & WhatsApp support',
    ],
  },
  {
    id: 'lead-integration',
    title: 'WhatsApp & Lead Integration',
    description:
      'Turn your website into a lead-generation machine. Integrate WhatsApp Business, contact forms, and CRM tools to capture and nurture every potential client.',
    icon: '📲',
    features: [
      'WhatsApp Business button & chat',
      'Lead capture forms',
      'CRM integration (HubSpot, Zoho)',
      'Email automation setup',
      'Live chat tools',
      'Conversion rate optimization',
    ],
  },
  {
    id: 'seo',
    title: 'SEO & Digital Marketing',
    description:
      'Get found online by the right people at the right time. Our SEO strategies are data-driven, results-focused, and tailored to your local and national market.',
    icon: '📈',
    features: [
      'On-page & technical SEO',
      'Google Business Profile optimization',
      'Keyword research & strategy',
      'Content marketing',
      'Link building',
      'Monthly performance reports',
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'connect-circle',
    title: 'ConnectCircle - Social Communication Platform',
    description:
      'Built a secure, real-time communication platform enabling users to connect with friends, join group conversations, and grow digital communities with a seamless cross-device experience.',
    industry: 'Social Platform',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop',
    tags: ['Vue.js', 'Firebase', 'Realtime Chat'],
    link: 'https://connectcircle-dff2b.web.app/',
  },
  {
    id: 'boski-and-mens',
    title: "Boski and Men's - Pakistani Wear Storefront",
    description:
      "Designed and deployed a premium ethnic menswear storefront for Pakistani fashion, highlighting seasonal collections, product discovery, and a frictionless shopping journey from browse to order.",
    industry: 'Fashion & Apparel',
    image: 'https://images.unsplash.com/photo-1720621292141-37dbc7852a3d?w=800&auto=format&fit=crop',
    tags: ['Fashion', 'E-commerce', 'Brand UI'],
    link: 'https://boskiandmens.com/',
  },
  {
    id: 'medico-pharmacy',
    title: 'Medico Pharmacy - Healthcare E-commerce',
    description:
      'Developed a conversion-focused pharmacy storefront with searchable medicine catalog, category browsing, cart and checkout flow, and trust-building healthcare messaging for everyday buyers.',
    industry: 'Pharmacy & Healthcare',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&auto=format&fit=crop',
    tags: ['React', 'E-commerce', 'Healthcare'],
    link: 'https://www.demo.wentechno.com/pharmacy',
  },
  {
    id: 'designlab-grocery',
    title: 'Design Lab Grocery - Online Supermarket',
    description:
      'Built a modern online grocery experience showcasing fresh and organic products, rapid product discovery, and a smooth ordering journey optimized for repeat purchases.',
    industry: 'Grocery & Supermarket',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop',
    tags: ['React', 'Retail', 'Delivery'],
    link: 'https://www.demo.wentechno.com/grocery',
  },
  {
    id: 'resto-booking',
    title: 'Saveur Restaurant & Booking',
    description:
      'Complete digital presence for a high-end restaurant including an online reservation system, dynamic menu, and integrated Google reviews.',
    industry: 'Restaurant & Hospitality',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop',
    tags: ['Next.js', 'Booking System', 'SEO'],
  },
  {
    id: 'clinic-portal',
    title: 'MedCare Patient Portal',
    description:
      'A HIPAA-compliant patient management portal with appointment scheduling, medical records access, and telehealth capabilities.',
    industry: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop',
    tags: ['React', 'Patient Portal', 'Appointments'],
  },
  {
    id: 'realestate-platform',
    title: 'PrimeHomes Property Listings',
    description:
      'Full-featured real estate platform with property search, virtual tours, agent profiles, and mortgage calculator.',
    industry: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop',
    tags: ['Next.js', 'Property Listings', 'Search'],
  },
  {
    id: 'ecommerce-fashion',
    title: 'Luxe Fashion E-commerce',
    description:
      'High-converting Shopify store for a premium fashion brand with personalized recommendations and seamless checkout.',
    industry: 'Fashion & Retail',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop',
    tags: ['Shopify', 'E-commerce', 'CRO'],
  },
  {
    id: 'law-firm',
    title: 'Sterling Law Associates',
    description:
      'Professional law firm website with case consultation forms, attorney profiles, practice area pages, and client portal.',
    industry: 'Legal Services',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop',
    tags: ['WordPress', 'Lead Gen', 'CMS'],
  },
  {
    id: 'fitness-studio',
    title: 'CoreFit Studio Platform',
    description:
      'Fitness studio website with class scheduling, membership management, trainer profiles, and on-demand video library.',
    industry: 'Health & Fitness',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop',
    tags: ['React', 'Scheduling', 'Memberships'],
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Al-Rashidi',
    role: 'Owner',
    company: 'Saveur Restaurant',
    content:
      'SHO Digital completely transformed our online presence. Our reservations increased by 140% in just three months. The booking system they built is incredibly smooth — our customers love it.',
    rating: 5,
    avatar: 'SR',
  },
  {
    id: 't2',
    name: 'Dr. Khalid Mansour',
    role: 'Clinic Director',
    company: 'MedCare Health Center',
    content:
      "Working with SHO Digital was a seamless experience from day one. They understood our unique compliance requirements and delivered a patient portal that our staff and patients genuinely enjoy using. Highly professional team.",
    rating: 5,
    avatar: 'KM',
  },
  {
    id: 't3',
    name: 'Lina Tawfiq',
    role: 'CEO',
    company: 'PrimeHomes Realty',
    content:
      "Our old website was losing us clients — we just didn't know it. SHO rebuilt everything from scratch and the results were immediate. Leads tripled and our bounce rate dropped dramatically. Worth every penny.",
    rating: 5,
    avatar: 'LT',
  },
  {
    id: 't4',
    name: 'Omar Nasser',
    role: 'Marketing Director',
    company: 'Luxe Fashion Co.',
    content:
      'The e-commerce store SHO built for us is exceptional. Beautiful design, lightning fast, and our conversion rate jumped from 1.2% to 3.8%. The team is responsive and truly cares about our success.',
    rating: 5,
    avatar: 'ON',
  },
  {
    id: 't5',
    name: 'Fatima Al-Hassan',
    role: 'Founder',
    company: 'CoreFit Studio',
    content:
      'From the initial consultation to the final launch, the SHO team was professional, creative, and committed. Our class bookings are now 100% online and the membership system runs itself.',
    rating: 5,
    avatar: 'FA',
  },
  {
    id: 't6',
    name: 'James Wellington',
    role: 'Senior Partner',
    company: 'Sterling Law Associates',
    content:
      'We were skeptical about redesigning our site, but SHO made the process painless. The result is a website that commands authority and actually generates consultation requests week after week.',
    rating: 5,
    avatar: 'JW',
  },
]

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$999',
    period: 'one-time',
    description: 'Perfect for small businesses and startups getting their digital presence off the ground.',
    features: [
      'Up to 5 pages',
      'Mobile-responsive design',
      'Contact form integration',
      'Basic SEO setup',
      'Google Analytics',
      'WhatsApp button',
      '30 days post-launch support',
    ],
    highlighted: false,
    cta: 'Get Started',
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '$2,499',
    period: 'one-time',
    description: 'For established businesses ready to grow their online revenue and generate consistent leads.',
    features: [
      'Up to 15 pages',
      'Custom UI/UX design',
      'CMS integration',
      'Lead capture system',
      'Advanced SEO optimization',
      'WhatsApp & CRM integration',
      'Speed & performance optimization',
      '90 days post-launch support',
      'Monthly analytics report',
    ],
    highlighted: true,
    cta: 'Most Popular — Get Started',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: 'project-based',
    description: 'Full-scale digital solutions for larger organizations with complex requirements.',
    features: [
      'Unlimited pages',
      'Custom web application',
      'E-commerce / booking systems',
      'API & third-party integrations',
      'Multi-language support',
      'Advanced security & compliance',
      'Dedicated project manager',
      '12 months priority support',
      'Quarterly strategy reviews',
    ],
    highlighted: false,
    cta: 'Contact Us',
  },
]

export const blogPosts: BlogPost[] = [
  {
    id: 'why-website-speed-matters',
    title: 'Why Website Speed Is Your Best Sales Tool in 2024',
    excerpt:
      'Studies show that a 1-second delay in page load time can reduce conversions by 7%. Here\'s how to make speed your competitive advantage.',
    date: 'December 12, 2024',
    author: 'SHO Digital Team',
    category: 'Performance',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
    readTime: '5 min read',
  },
  {
    id: 'local-seo-guide',
    title: 'The Local Business SEO Guide: Get Found Before Your Competitors',
    excerpt:
      'Local SEO is the most underutilized growth tool for small businesses. This step-by-step guide shows you how to dominate local search.',
    date: 'November 28, 2024',
    author: 'SHO Digital Team',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop',
    readTime: '8 min read',
  },
  {
    id: 'whatsapp-business-website',
    title: 'How to Turn Your Website Into a WhatsApp Lead Machine',
    excerpt:
      'WhatsApp has over 2 billion users. Integrating it properly into your website can dramatically increase your lead conversion rate.',
    date: 'November 10, 2024',
    author: 'SHO Digital Team',
    category: 'Lead Generation',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop',
    readTime: '6 min read',
  },
]

export const industries: Industry[] = [
  {
    id: 'restaurant',
    name: 'Restaurant & Hospitality',
    description: 'Digital solutions that fill tables and keep guests coming back.',
    icon: '🍽️',
    solutions: ['Online reservation systems', 'Digital menus with QR codes', 'Food ordering integration', 'Review management', 'Event booking pages'],
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Clinics',
    description: 'Patient-focused platforms that streamline care and build trust.',
    icon: '🏥',
    solutions: ['Appointment scheduling portals', 'Patient intake forms', 'Telehealth integrations', 'HIPAA-compliant design', 'Doctor & service profiles'],
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    description: 'Property platforms that showcase listings and generate qualified leads.',
    icon: '🏠',
    solutions: ['MLS/IDX integration', 'Virtual tour embedding', 'Mortgage calculators', 'Lead capture forms', 'Agent profile pages'],
  },
  {
    id: 'legal',
    name: 'Legal Services',
    description: 'Authority-building websites that convert visitors into consultation requests.',
    icon: '⚖️',
    solutions: ['Practice area pages', 'Case consultation forms', 'Attorney profiles', 'Client testimonials', 'Legal blog & resources'],
  },
  {
    id: 'fitness',
    name: 'Health & Fitness',
    description: 'Platforms that automate bookings and grow your membership base.',
    icon: '💪',
    solutions: ['Class scheduling systems', 'Membership management', 'Trainer profiles', 'On-demand video library', 'Progress tracking portals'],
  },
  {
    id: 'ecommerce',
    name: 'Retail & E-commerce',
    description: 'Revenue-generating online stores built for conversion.',
    icon: '🛍️',
    solutions: ['Product catalog systems', 'Checkout optimization', 'Inventory management', 'Upsell & cross-sell tools', 'Loyalty program integration'],
  },
]
