import type { Metadata } from 'next'
import { Clock, Globe, MapPin, Navigation } from 'lucide-react'
import { siteConfig } from '@/lib/site'
import { pageMetadata, breadcrumbLd, faqLd } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'
import SectionHeader from '@/components/ui/SectionHeader'
import FaqAccordion from '@/components/ui/FaqAccordion'
import ContactClient from './ContactClient'

export const metadata: Metadata = pageMetadata({
  title: 'Contact Us | Web Design Studio in I-8, Islamabad',
  description:
    'Get in touch with SixByte Technologies, a web design and development studio based in I-8, Islamabad, Pakistan. Book a free consultation by form, phone, email, or WhatsApp — we work with clients across Pakistan and worldwide.',
  path: '/contact',
})

/**
 * Contact-focused FAQs. Every answer is grounded in facts already stated across
 * the site (Islamabad/I-8 base, remote delivery, English & Urdu, free
 * consultation, ~2 business-hour response) and is written to be self-contained
 * so search engines and AI answer engines can quote a single answer cleanly.
 * The same array powers the visible section and the FAQPage structured data.
 */
const contactFaqs = [
  {
    q: 'Where is SixByte Technologies located?',
    a: 'SixByte Technologies is based in the I-8 sector of Islamabad, Pakistan. We work with businesses across Islamabad and the rest of Pakistan, and with international clients remotely — most projects run over email, phone, video call, and WhatsApp.',
  },
  {
    q: 'Do you work with clients outside Islamabad or internationally?',
    a: "Yes. Although we're based in Islamabad, we work remotely with businesses throughout Pakistan and in several other countries. Our process is built to run smoothly online, from the first consultation through to launch and support.",
  },
  {
    q: 'Can we meet in person, or is everything online?',
    a: "Both. If you're in or near Islamabad, we can arrange an in-person meeting by appointment. Otherwise, the consultation, updates, and reviews can all happen over video call, phone, or WhatsApp — whichever is easiest for you.",
  },
  {
    q: 'How quickly will you respond after I get in touch?',
    a: 'We aim to reply to new enquiries within about two business hours. If you message us on WhatsApp during business hours, you will usually hear back even sooner.',
  },
  {
    q: 'What languages do you work in?',
    a: "We work in English and Urdu, so you can share your project details in whichever you're more comfortable with.",
  },
  {
    q: 'Is the first consultation really free?',
    a: 'Yes. The initial consultation is a free, no-pressure conversation about your goals, your current website if you have one, and the most practical next step. There is no obligation to proceed.',
  },
]

const locationHighlights = [
  {
    icon: MapPin,
    label: 'Our base',
    value: `${siteConfig.address.sector}, ${siteConfig.address.locality}`,
    detail: `${siteConfig.address.region}, ${siteConfig.address.country}`,
  },
  {
    icon: Globe,
    label: 'How we work',
    value: 'Remote-first',
    detail: 'Serving clients across Pakistan and worldwide',
  },
  {
    icon: Clock,
    label: 'Response time',
    value: 'Within ~2 business hours',
    detail: 'Even faster on WhatsApp during business hours',
  },
]

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact' },
          ]),
          faqLd(contactFaqs),
        ]}
      />

      <ContactClient />

      {/* Location + Google Map */}
      <section className="border-t border-slate-200 py-10 dark:border-slate-800 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Address + context */}
            <div className="lg:col-span-5">
              <SectionHeader
                tag="Our location"
                title="Based in I-8, Islamabad — building for clients everywhere."
                subtitle="Come say hello in Islamabad, or work with us remotely from anywhere. Either way, you get the same clear, hands-on process from first call to launch."
              />

              <address className="not-italic space-y-3">
                {locationHighlights.map(({ icon: Icon, label, value, detail }) => (
                  <div key={label} className="surface-card flex items-start gap-4 rounded-xl p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-teal/10 text-teal dark:bg-teal/20 dark:text-teal-light">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{label}</div>
                      <div className="mt-0.5 text-sm font-bold text-navy dark:text-white">{value}</div>
                      <div className="mt-0.5 text-xs text-slate-600 dark:text-slate-400">{detail}</div>
                    </div>
                  </div>
                ))}
              </address>

              <a
                href={siteConfig.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-navy mt-6"
              >
                Open in Google Maps <Navigation className="h-4 w-4" />
              </a>
            </div>

            {/* Interactive map */}
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-xl border border-slate-200 shadow-lg dark:border-slate-800">
                <iframe
                  title="Google Map showing SixByte Technologies' location in I-8, Islamabad, Pakistan"
                  src={siteConfig.mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="h-[320px] w-full sm:h-[420px]"
                  style={{ border: 0 }}
                />
              </div>
              <p className="mt-3 text-center text-[11px] text-slate-500 dark:text-slate-400">
                SixByte Technologies is located in Sector I-8, Islamabad, Islamabad Capital Territory, Pakistan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50/80 py-10 dark:bg-slate-950/60 lg:py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeader tag="FAQ" title="Questions before you reach out" center />
          <FaqAccordion faqs={contactFaqs} className="mt-8" />
        </div>
      </section>
    </>
  )
}
