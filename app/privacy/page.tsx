import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ShieldCheck, Lock, Eye, FileText } from 'lucide-react'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how SixByte Technologies collects, uses, and protects your personal information and project data.',
}

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            Last Updated: March 1, 2026 · SixByte Technologies
          </p>
        </header>

        <article className="prose prose-slate mt-10 max-w-none dark:prose-invert space-y-8 text-sm leading-relaxed">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="flex items-center gap-2 text-lg font-bold text-navy dark:text-white">
              <Eye className="h-5 w-5 text-teal" /> 1. Commitment to Privacy
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              At {siteConfig.name}, we value your trust and are committed to safeguarding the privacy of our clients, website visitors, and partners. This Privacy Policy outlines how we collect, handle, and protect your information when you interact with our website, request project quotes, or utilize our digital development services.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="flex items-center gap-2 text-lg font-bold text-navy dark:text-white">
              <FileText className="h-5 w-5 text-teal" /> 2. Information We Collect
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              We only collect information necessary to provide clear communication, accurate project estimates, and dependable software solutions. This includes:
            </p>
            <ul className="mt-3 space-y-2 list-disc pl-5 text-slate-600 dark:text-slate-300">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and business details provided via inquiry forms or direct communications.</li>
              <li><strong>Project Specifications:</strong> Information about your business requirements, design preferences, budget estimates, and technical specifications.</li>
              <li><strong>Technical Usage Data:</strong> Anonymous analytical data such as IP address, browser type, and page interaction duration to help us optimize site performance.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="flex items-center gap-2 text-lg font-bold text-navy dark:text-white">
              <Lock className="h-5 w-5 text-teal" /> 3. How We Use Your Information
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Your information is strictly used to deliver high-quality digital services. Specifically, we use collected data to:
            </p>
            <ul className="mt-3 space-y-2 list-disc pl-5 text-slate-600 dark:text-slate-300">
              <li>Respond promptly to project inquiries and provide tailored consultations.</li>
              <li>Architect, build, and deploy custom web and software solutions.</li>
              <li>Send critical project updates, maintenance notices, and invoice statements.</li>
              <li>Maintain and enhance our website performance and security standards.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-lg font-bold text-navy dark:text-white">
              4. Data Protection & Confidentiality
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              We employ strict industry-standard security measures to safeguard all proprietary business data, codebases, and credentials. We do not sell, rent, or trade client information to third parties. Access to client project materials is restricted solely to authorized engineering staff.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-lg font-bold text-navy dark:text-white">
              5. Third-Party Services
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Where necessary to provide our services (e.g. transactional email delivery via Resend, cloud hosting via Vercel or AWS), we utilize trusted third-party providers who adhere to strict data privacy and encryption compliance.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-lg font-bold text-navy dark:text-white">
              6. Contact Us
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              If you have any questions or requests regarding this Privacy Policy or your data protection rights, please contact us at:
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
