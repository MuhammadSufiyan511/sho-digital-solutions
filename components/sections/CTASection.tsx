import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'

interface CTASectionProps {
  title?: string
  subtitle?: string
  primaryCta?: string
  primaryHref?: string
  showWhatsapp?: boolean
}

export default function CTASection({
  title = "Ready to Build a Website That Actually Makes You Money?",
  subtitle = "Let's talk. Our free consultation takes 30 minutes and gives you a clear roadmap for your digital growth — no obligation, no pressure.",
  primaryCta = "Book Free Consultation",
  primaryHref = "/contact",
  showWhatsapp = true,
}: CTASectionProps) {
  return (
    <section className="py-20 bg-electric relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 animate-float-soft" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4 animate-float-soft" />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">{title}</h2>
        <p className="text-blue-100 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">{subtitle}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className="inline-flex items-center gap-2 bg-white text-electric font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
          >
            {primaryCta} <ArrowRight className="w-4 h-4" />
          </Link>
          {showWhatsapp && (
            <a
              href="https://wa.me/923345856255"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-electric transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          )}
        </div>

        <p className="text-blue-200 text-sm mt-6">
          Typically respond within 2 hours · No credit card required
        </p>
      </div>
    </section>
  )
}
