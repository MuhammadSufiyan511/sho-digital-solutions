import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Mail, Phone, MapPin, MessageCircle, Linkedin, Instagram, Facebook } from 'lucide-react'

const serviceLinks = [
  { label: 'Website Development', href: '/services#web-dev' },
  { label: 'E-commerce Solutions', href: '/services#ecommerce' },
  { label: 'Industry Systems', href: '/services#industry-systems' },
  { label: 'Maintenance & Support', href: '/services#maintenance' },
  { label: 'WhatsApp Integration', href: '/services#lead-integration' },
  { label: 'SEO & Marketing', href: '/services#seo' },
]

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Industries', href: '/industries' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Blog', href: '/blog' },
]

const socialLinks = [
  { Icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/sho-digital-solutions' },
  { Icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/artb_yfari' },
  { Icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61587746278057' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="border-b border-white/10 bg-electric/95">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">Start a conversation</p>
            <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
              Ready for a website that feels credible from the first click?
            </h3>
            <p className="mt-2 text-sm leading-6 text-white/80">
              We&apos;ll help you shape a clear, professional online presence that makes it easier for customers to trust
              you and take the next step.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-electric transition-colors hover:bg-slate-100"
          >
            Book a free consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <Image
                  src="/assets/SixByte_standalone.webp"
                  alt="SixByte Technologies"
                  width={44}
                  height={44}
                  className="h-9 w-9 object-contain"
                />
              </div>
              <div>
                <span className="block text-sm font-extrabold tracking-[0.24em] uppercase">SixByte</span>
                <span className="block text-xs font-medium tracking-[0.18em] text-white/70 uppercase">Technologies</span>
              </div>
            </Link>
            <p className="mt-5 text-sm leading-7 text-white/70">
              Smart websites, refined branding, and digital systems built to help real businesses grow with confidence.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-white/20 hover:bg-white/10"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">Services</h4>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">Company</h4>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">Contact</h4>
            <ul className="mt-5 space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-electric-light" />
                <a href="mailto:connectshodigital@gmail.com" className="transition-colors hover:text-white">
                  connectshodigital@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-electric-light" />
                <a href="tel:03345856255" className="transition-colors hover:text-white">
                  03345856255
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-electric-light" />
                <span>Islamabad, Pakistan</span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-4 w-4 text-electric-light" />
                <a
                  href="https://wa.me/923345856255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  WhatsApp us
                </a>
              </li>
            </ul>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Business Hours</p>
              <p className="mt-2 text-sm text-white">Monday to Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-xs text-white/50">Weekend calls by appointment</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-center text-sm text-white/50 md:flex-row md:items-center md:justify-between md:text-left">
          <p>© {new Date().getFullYear()} SixByte Technologies. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 md:justify-end md:gap-6">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
