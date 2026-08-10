import type { Service, Project, Testimonial, PricingPlan, BlogPost, Industry, NavLink } from '@/types'

export const navLinks: NavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Industries', href: '/industries' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export const services: Service[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    description:
      'Custom websites built to feel credible, load quickly, and guide visitors toward taking action.',
    icon: 'website',
    features: [
      'Custom design and development',
      'Mobile-first responsive layouts',
      'SEO-friendly structure',
      'Performance optimization',
      'CMS integration',
      'Analytics setup',
    ],
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    description:
      'Online stores designed to make browsing feel easy and purchasing feel confident.',
    icon: 'store',
    features: [
      'Shopify, WooCommerce, or custom builds',
      'Secure payment integration',
      'Product catalog and search',
      'Order notifications',
      'Inventory management',
      'Multi-currency support',
    ],
  },
  {
    id: 'industry-systems',
    title: 'Industry-Specific Systems',
    description:
      'Tailored systems for businesses that need more than a brochure website.',
    icon: 'systems',
    features: [
      'Booking and reservation tools',
      'Patient or client portals',
      'Property listing platforms',
      'Order and menu systems',
      'Appointment scheduling',
      'Custom dashboards',
    ],
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    description:
      'Ongoing support that keeps your site secure, updated, and running smoothly.',
    icon: 'support',
    features: [
      'Security updates',
      'Performance monitoring',
      'Content updates',
      'Bug fixes and troubleshooting',
      'Monthly reports',
      'Priority support',
    ],
  },
  {
    id: 'lead-integration',
    title: 'WhatsApp & Lead Integration',
    description:
      'Simple lead capture systems that make it easier for people to get in touch.',
    icon: 'leads',
    features: [
      'WhatsApp Business integration',
      'Lead capture forms',
      'CRM connections',
      'Email automation',
      'Live chat tools',
      'Conversion tracking',
    ],
  },
  {
    id: 'seo',
    title: 'SEO & Digital Marketing',
    description:
      'Practical search and content improvements that help the right people find you.',
    icon: 'seo',
    features: [
      'On-page and technical SEO',
      'Google Business Profile support',
      'Keyword research',
      'Content planning',
      'Link building',
      'Performance reporting',
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'e-passtransfer',
    title: 'E Pass Transfer',
    description:
      'A business transfer platform presented as a polished client project with a streamlined interface and a more credible online presence.',
    industry: 'Logistics & Transfers',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop',
    tags: ['Client Work', 'Web App', 'Production'],
    link: 'https://www.e-passtransfer.de/',
  },
  {
    id: 'mira-ee',
    title: 'Mira EE',
    description:
      'A refined company website concept focused on trust, service clarity, and a cleaner presentation for prospective clients.',
    industry: 'Corporate Services',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&auto=format&fit=crop',
    tags: ['Client Work', 'Corporate Site', 'UI/UX'],
    link: 'https://mira-ee.de/',
  },
  {
    id: 'iwizsols',
    title: 'IWIZSOLS',
    description:
      'A modern technology services website designed to feel sharper, more structured, and easier to trust at a glance.',
    industry: 'Technology Services',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop',
    tags: ['Client Work', 'Next.js', 'Brand Presence'],
    link: 'https://www.iwizsols.com/',
  },
  {
    id: 'al-planner',
    title: 'AL Planner',
    description:
      'A structured planning platform presented as a client project with a more organized layout and a clearer workflow.',
    industry: 'Planning & Productivity',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop',
    tags: ['Client Work', 'Planning', 'Web App'],
    link: 'https://al-planner.vercel.app',
  },
  {
    id: 'ai-powered-docs-analyst',
    title: 'AI Powered Docs Analyst',
    description:
      'An AI document analysis product designed to feel sharper, more useful, and easier to trust for business workflows.',
    industry: 'AI & Automation',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop',
    tags: ['Client Work', 'AI', 'Product UI'],
    link: 'https://ai-powered-docs-analyst.vercel.app/',
  },
  {
    id: 'sova',
    title: 'Sova',
    description:
      'A modern digital brand presence that focuses on clean hierarchy, stronger messaging, and a premium first impression.',
    industry: 'Corporate Services',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&auto=format&fit=crop',
    tags: ['Client Work', 'Corporate', 'Brand Site'],
    link: 'https://sova.my/',
  },
  {
    id: 'preppro-academy',
    title: 'PrepPro Academy',
    description:
      'An education-focused web experience designed to present courses, trust signals, and sign-up paths more clearly.',
    industry: 'Education',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop',
    tags: ['Client Work', 'Academy', 'Lead Gen'],
    link: 'https://preppro.academy/',
  },
  {
    id: 'mustafa-ss',
    title: 'Mustafa SS Shop',
    description:
      'An e-commerce login and storefront experience shaped to feel more dependable, organized, and production-ready.',
    industry: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop',
    tags: ['Client Work', 'Commerce', 'Auth Flow'],
    link: 'https://www.mustafa-ss.shop/login',
  },
  {
    id: 'connect-circle',
    title: 'ConnectCircle - Social Communication Platform',
    description:
      'A secure real-time communication platform for private messages, group discussions, and cross-device collaboration.',
    industry: 'Social Platform',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop',
    tags: ['Vue.js', 'Firebase', 'Realtime Chat'],
    link: 'https://connectcircle-dff2b.web.app/',
  },
  {
    id: 'boski-and-mens',
    title: "Boski and Men's - Pakistani Wear Storefront",
    description:
      'A premium menswear storefront that supports product discovery, collection browsing, and a smoother path to purchase.',
    industry: 'Fashion & Apparel',
    image: 'https://images.unsplash.com/photo-1720621292141-37dbc7852a3d?w=800&auto=format&fit=crop',
    tags: ['Fashion', 'E-commerce', 'Brand UI'],
    link: 'https://boskiandmens.com/',
  },
  {
    id: 'resto-booking',
    title: 'Saveur Restaurant & Booking',
    description:
      'A polished restaurant presence with an online reservation system, digital menu, and integrated reviews.',
    industry: 'Restaurant & Hospitality',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop',
    tags: ['Next.js', 'Booking System', 'SEO'],
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Al-Rashidi',
    role: 'Owner',
    company: 'Saveur Restaurant',
    content:
      'SHO Digital helped us present our restaurant more professionally online. Reservations improved quickly, and the booking experience feels much smoother for our guests.',
    rating: 5,
    avatar: 'SR',
  },
  {
    id: 't2',
    name: 'Dr. Khalid Mansour',
    role: 'Clinic Director',
    company: 'MedCare Health Center',
    content:
      'The team understood our requirements, kept communication clear, and delivered a patient portal that both staff and patients actually enjoy using.',
    rating: 5,
    avatar: 'KM',
  },
  {
    id: 't3',
    name: 'Lina Tawfiq',
    role: 'CEO',
    company: 'PrimeHomes Realty',
    content:
      'Our old website was holding us back. SHO rebuilt it with a much stronger structure and the difference in leads was immediate.',
    rating: 5,
    avatar: 'LT',
  },
  {
    id: 't4',
    name: 'Omar Nasser',
    role: 'Marketing Director',
    company: 'Luxe Fashion Co.',
    content:
      'The store looks premium, loads fast, and the checkout flow feels much easier. We saw a real improvement in conversion rate.',
    rating: 5,
    avatar: 'ON',
  },
  {
    id: 't5',
    name: 'Fatima Al-Hassan',
    role: 'Studio Lead',
    company: 'CoreFit Studio',
    content:
      'The project felt well organized from the start. Our bookings are now fully online and the site finally reflects the quality of the studio.',
    rating: 5,
    avatar: 'FA',
  },
  {
    id: 't6',
    name: 'James Wellington',
    role: 'Senior Partner',
    company: 'Sterling Law Associates',
    content:
      'The new site feels authoritative and easy to navigate. It is already generating better consultation requests than the old one.',
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
    description: 'A strong foundation for small businesses getting serious about their online presence.',
    features: [
      'Up to 5 pages',
      'Responsive design',
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
    description: 'For businesses ready to turn the website into a more reliable lead and sales engine.',
    features: [
      'Up to 15 pages',
      'Custom UI and UX design',
      'CMS integration',
      'Lead capture system',
      'Advanced SEO optimization',
      'WhatsApp and CRM integration',
      'Speed optimization',
      '90 days post-launch support',
      'Monthly analytics report',
    ],
    highlighted: true,
    cta: 'Most Popular - Get Started',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: 'project-based',
    description: 'For larger organizations with more complex requirements and integration needs.',
    features: [
      'Unlimited pages',
      'Custom web application',
      'E-commerce or booking systems',
      'API and third-party integrations',
      'Multi-language support',
      'Advanced security and compliance',
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
    title: 'Why Website Speed Is Still a Sales Advantage',
    excerpt:
      'A faster site does more than improve metrics. It changes how trustworthy and usable your brand feels.',
    date: 'December 12, 2024',
    author: 'SHO Digital Team',
    category: 'Performance',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
    readTime: '5 min read',
  },
  {
    id: 'local-seo-guide',
    title: 'A Local SEO Guide for Businesses That Want More Visibility',
    excerpt:
      'A practical look at how local search can bring the right people to your business before they find a competitor.',
    date: 'November 28, 2024',
    author: 'SHO Digital Team',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop',
    readTime: '8 min read',
  },
  {
    id: 'whatsapp-business-website',
    title: 'How to Turn Your Website Into a Better WhatsApp Lead Channel',
    excerpt:
      'WhatsApp can be a strong contact point when it is integrated with a clear message and simple flow.',
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
    description: 'Digital experiences that help guests browse, trust, and book more easily.',
    icon: 'restaurant',
    solutions: [
      'Online reservation systems',
      'Digital menus with QR codes',
      'Food ordering integration',
      'Review management',
      'Event booking pages',
    ],
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Clinics',
    description: 'Patient-focused platforms that simplify access and make the practice feel dependable.',
    icon: 'healthcare',
    solutions: [
      'Appointment scheduling portals',
      'Patient intake forms',
      'Telehealth integrations',
      'Compliance-friendly design',
      'Doctor and service profiles',
    ],
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    description: 'Property platforms that create stronger trust and better lead quality.',
    icon: 'real-estate',
    solutions: ['MLS/IDX integration', 'Virtual tour embedding', 'Mortgage calculators', 'Lead capture forms', 'Agent profiles'],
  },
  {
    id: 'legal',
    name: 'Legal Services',
    description: 'Authority-building websites that make the firm feel credible and easy to contact.',
    icon: 'legal',
    solutions: ['Practice area pages', 'Consultation forms', 'Attorney profiles', 'Client testimonials', 'Resources and blog content'],
  },
  {
    id: 'fitness',
    name: 'Health & Fitness',
    description: 'A clearer digital presence for studios and trainers that want to grow membership.',
    icon: 'fitness',
    solutions: ['Class scheduling systems', 'Membership management', 'Trainer profiles', 'On-demand video library', 'Progress tracking portals'],
  },
  {
    id: 'ecommerce',
    name: 'Retail & E-commerce',
    description: 'Revenue-focused storefronts designed to make shopping feel seamless.',
    icon: 'ecommerce',
    solutions: ['Product catalog systems', 'Checkout optimization', 'Inventory management', 'Upsell and cross-sell tools', 'Loyalty integrations'],
  },
]
