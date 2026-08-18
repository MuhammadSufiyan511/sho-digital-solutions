'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Reveal } from '@/components/animations/Motion'

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
    <section className="relative overflow-hidden bg-[#0E1A2E] py-10 text-white lg:py-14">
      {/* Scroll-Activated Fine Geometric Line Grid Overlay */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-widest text-teal-light">
            Let&apos;s build something better
          </span>
          <h2 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link href={primaryHref} className="btn-primary">
                {primaryCta} <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            {showWhatsapp && (
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="https://wa.me/923345856255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-navy border-slate-700 bg-slate-900/40 text-white hover:bg-slate-900"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </motion.div>
            )}
          </div>

          <p className="mt-6 text-xs text-slate-400">
            Usually reply within 2 business hours. No pressure, no hard sell.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
