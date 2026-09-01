import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Scale, Code, CreditCard, ShieldAlert } from 'lucide-react'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions governing web development, software engineering, and digital services provided by SixByte Technologies.',
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-16 text-slate-800 dark:bg-slate-950 dark:text-slate-200 sm:pt-32 lg:pt-36 lg:pb-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal transition-colors hover:text-teal-dark"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>

        <header className="mt-6 border-b border-slate-200 pb-8 dark:border-slate-800">
          <h1 className="text-3xl font-extrabold tracking-tight text-navy dark:text-white sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            Last Updated: March 1, 2026 · SixByte Technologies
          </p>
        </header>

        <article className="prose prose-slate mt-10 max-w-none dark:prose-invert space-y-8 text-sm leading-relaxed">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="flex items-center gap-2 text-lg font-bold text-navy dark:text-white">
              <Scale className="h-5 w-5 text-teal" /> 1. Acceptance of Terms
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              By accessing our website, requesting a service proposal, or entering into a development contract with {siteConfig.name}, you agree to be bound by these Terms of Service. These terms govern all web design, custom software development, system integration, and digital consulting services we provide.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="flex items-center gap-2 text-lg font-bold text-navy dark:text-white">
              <Code className="h-5 w-5 text-teal" /> 2. Scope of Digital Services
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              SixByte Technologies provides custom digital solutions tailored to client specifications, including:
            </p>
            <ul className="mt-3 space-y-2 list-disc pl-5 text-slate-600 dark:text-slate-300">
              <li>Web Application & E-commerce Storefront Development</li>
              <li>Custom Software Architecture & Database Design</li>
              <li>Mobile App Engineering (iOS & Android)</li>
              <li>UI/UX Design Systems & Performance Optimization</li>
              <li>Ongoing Maintenance, Security, and API Support</li>
            </ul>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Detailed project milestones, deliverables, and timelines are established in individual project proposals agreed upon prior to commencement.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="flex items-center gap-2 text-lg font-bold text-navy dark:text-white">
              <Code className="h-5 w-5 text-teal" /> 3. Intellectual Property & Code Ownership
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Upon full payment of all contracted project invoices, ownership of custom codebase assets, design deliverables, and developed materials transfers to the client. SixByte Technologies retains ownership of pre-existing proprietary frameworks, internal boilerplate components, and open-source libraries used under standard licensing.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="flex items-center gap-2 text-lg font-bold text-navy dark:text-white">
              <CreditCard className="h-5 w-5 text-teal" /> 4. Payment Terms & Milestones
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Project fees are structured based on clear milestone schedules outlined in your project agreement (typically deposit, intermediate review, and final launch release). Invoices are payable upon receipt. Final project deployment or source code delivery occurs upon complete settlement of final project balances.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="flex items-center gap-2 text-lg font-bold text-navy dark:text-white">
              <ShieldAlert className="h-5 w-5 text-teal" /> 5. Limitation of Liability
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              SixByte Technologies strives to deliver robust, high-performance software. However, we are not liable for indirect, incidental, or consequential damages resulting from third-party hosting outages, domain registrar disruptions, or external service API failures beyond our reasonable control.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-lg font-bold text-navy dark:text-white">
              6. Contact & Questions
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              For questions regarding these Terms of Service or contract details, please reach out to us at:
            </p>
            <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs font-mono text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 space-y-1">
              <p>Email: {siteConfig.email}</p>
              <p>Phone: {siteConfig.phoneDisplay}</p>
              <p>Address: {siteConfig.location}</p>
            </div>
          </section>
        </article>
      </div>
    </main>
  )
}
