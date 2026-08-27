'use client'

import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

interface FaqItem {
  q: string
  a: string
}

interface FaqAccordionProps {
  faqs: FaqItem[]
  /**
   * Heading level for each question, so the page's document outline stays
   * correct (contact/pricing sit under an <h2> → use 3; the service/industry
   * detail pages sit under an <h3> section label → use 4).
   */
  headingLevel?: 2 | 3 | 4
  /** Extra classes for the list wrapper (e.g. top margin). */
  className?: string
}

/**
 * Accessible FAQ accordion — one item open at a time — with an ease-out
 * expand/collapse animation.
 *
 * The answer stays mounted in the DOM even while collapsed (we animate
 * height/opacity rather than mounting/unmounting), so the full Q&A text remains
 * crawlable and quotable by search engines and AI answer engines. That mirrors
 * the FAQPage structured data emitted server-side on each page, so the visible
 * content and the schema never diverge.
 */
export default function FaqAccordion({ faqs, headingLevel = 3, className = '' }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const baseId = useId()
  const Heading = `h${headingLevel}` as 'h2' | 'h3' | 'h4'

  return (
    <div className={`space-y-3 ${className}`.trim()}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index
        const buttonId = `${baseId}-faq-btn-${index}`
        const panelId = `${baseId}-faq-panel-${index}`

        return (
          <div key={faq.q} className="surface-card overflow-hidden rounded-xl">
            <Heading>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal/50 sm:px-6"
              >
                <span className="text-sm font-bold text-navy transition-colors group-hover:text-teal dark:text-white dark:group-hover:text-teal-light">
                  {faq.q}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className={`h-4 w-4 shrink-0 text-teal transition-transform duration-300 ease-out dark:text-teal-light ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </Heading>

            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="px-5 pb-5 text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:px-6">
                {faq.a}
              </p>
            </motion.div>
          </div>
        )
      })}
    </div>
  )
}
