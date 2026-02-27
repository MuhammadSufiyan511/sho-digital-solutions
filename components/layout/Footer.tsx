import Link from 'next/link'
import { Zap, Mail, Phone, MapPin, MessageCircle, Linkedin, Twitter, Facebook, Instagram, ArrowRight } from 'lucide-react'
import logo from '../../public/assets/logo.png'
import Image from 'next/image'


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
  // { label: 'Pricing', href: '/pricing' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Blog', href: '/blog' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white" style={{ backgroundColor: '#061530' }}>
      {/* CTA Strip */}
      <div className="bg-electric py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to grow your business online?</h3>
            <p className="text-blue-100 mt-1">Let&apos;s build something great together. Free consultation — no strings attached.</p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 bg-white text-electric font-bold px-8 py-3.5 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
            Book Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center">
              <Image src={logo} alt="SHO Digital Solutions Logo" className="w-12 h-12" />
              </div>
             
              <div>
                <span className="text-white font-bold text-lg leading-tight block">SHO Digital</span>
                <span className="text-electric text-[10px] font-medium tracking-widest uppercase block">Solutions</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Smart Websites. Real Growth. We build revenue-generating digital experiences that help businesses thrive online.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/sho-digital-solutions' },
                { Icon: Twitter, label: 'Twitter', href: '#' },
                { Icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61587746278057' },
                { Icon: Instagram, label: 'Instagram', href: '#' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target='_blank'
                  className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-electric hover:border-electric transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-electric text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-electric text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-electric mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@shodigital.com" className="text-gray-400 hover:text-white text-sm transition-colors">
                  hello@shodigital.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-electric mt-0.5 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-gray-400 hover:text-white text-sm transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-electric mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Islamabad, Pakistan</span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-electric mt-0.5 flex-shrink-0" />
                <a
                  href="https://wa.me/11234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/5 border border-white/10 rounded-lg">
              <p className="text-xs text-gray-400">Business Hours</p>
              <p className="text-sm text-white font-medium mt-1">Mon–Fri: 9AM – 6PM</p>
              <p className="text-xs text-gray-400 mt-0.5">Weekend: By appointment</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} SHO Digital Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
              <a key={item} href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
