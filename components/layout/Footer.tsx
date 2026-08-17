import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, MessageCircle, Linkedin, Instagram, Facebook } from 'lucide-react'

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
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
]

const socialLinks = [
  { Icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/sixbyte-technologies/' },
  { Icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/artb_yfari' },
  { Icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/share/19V3tqCFKm/' },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#0E1A2E] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/assets/SixByte_standalone-removebg-preview.webp"
                alt="SixByte Technologies"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <div className="leading-none">
                <span className="block text-base font-extrabold tracking-tight text-white uppercase">
                  SixByte
                </span>
                <span className="mt-0.5 block text-[10px] font-semibold tracking-widest text-teal uppercase">
                  Technologies
                </span>
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Smart websites, refined branding, and digital systems built to help real businesses grow with clarity and confidence.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded border border-slate-700/80 bg-slate-900/50 text-slate-400 transition-colors hover:border-teal hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-300 transition-colors hover:text-teal">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Company</h4>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-300 transition-colors hover:text-teal">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-teal shrink-0" />
                <a href="mailto:connectshodigital@gmail.com" className="transition-colors hover:text-white">
                  connectshodigital@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-teal shrink-0" />
                <a href="tel:03345856255" className="transition-colors hover:text-white">
                  03345856255
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-teal shrink-0" />
                <span>Islamabad, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 text-teal shrink-0" />
                <a
                  href="https://wa.me/923345856255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} SixByte Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="transition-colors hover:text-slate-400">
              Privacy Policy
            </Link>
            <Link href="/contact" className="transition-colors hover:text-slate-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
