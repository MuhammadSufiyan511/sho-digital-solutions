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
  title = 'Ready to give your business a more credible online presence?',
  subtitle = 'Let us help you turn a good-looking website into a thoughtful digital front door that builds trust and encourages action.',
  primaryCta = 'Book a free consultation',
  primaryHref = '/contact',
  showWhatsapp = true,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-navy" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%)]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="surface-card rounded-[2rem] px-6 py-14 text-center sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-electric">Let&apos;s build something better</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-tight text-navy text-balance md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
            {subtitle}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href={primaryHref} className="btn-primary">
              {primaryCta} <ArrowRight className="h-4 w-4" />
            </Link>
            {showWhatsapp && (
              <a
                href="https://wa.me/923345856255"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-navy"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            )}
          </div>

          <p className="mt-6 text-sm text-slate-500">Usually reply within 2 business hours. No pressure, no hard sell.</p>
        </div>
      </div>
    </section>
  )
}
