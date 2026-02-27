export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  price?: string
}

export interface Project {
  id: string
  title: string
  description: string
  industry: string
  image: string
  tags: string[]
  link?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

export interface PricingPlan {
  id: string
  name: string
  price: string
  period: string
  description: string
  features: string[]
  highlighted: boolean
  cta: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  image: string
  readTime: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
}

export interface Industry {
  id: string
  name: string
  description: string
  icon: string
  solutions: string[]
}

export interface NavLink {
  label: string
  href: string
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  businessType: string
  message: string
}
