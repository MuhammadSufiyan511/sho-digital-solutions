'use client'

import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import type { ContactForm } from '@/types'
import PageHero from '@/components/sections/PageHero'

const businessTypes = [
  'Restaurant / Food & Beverage',
  'Healthcare / Clinic',
  'Real Estate',
  'E-commerce / Retail',
  'Legal Services',
  'Health & Fitness',
  'Professional Services',
  'Technology / SaaS',
  'Education',
  'Other',
]

const initialForm: ContactForm = {
  name: '',
  email: '',
  phone: '',
  businessType: '',
  message: '',
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>(initialForm)
  const [errors, setErrors] = useState<Partial<ContactForm>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const validate = (): boolean => {
    const nextErrors: Partial<ContactForm> = {}
    if (!form.name.trim()) nextErrors.name = 'Name is required'
    if (!form.email.trim()) nextErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Enter a valid email'
    if (!form.phone.trim()) nextErrors.phone = 'Phone is required'
    if (!form.businessType) nextErrors.businessType = 'Please select your business type'
    if (!form.message.trim()) nextErrors.message = 'Message is required'
    else if (form.message.trim().length < 20) nextErrors.message = 'Please add a little more detail'

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (!validate()) return

    setSubmitError('')
    setLoading(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        throw new Error(data?.error || 'Something went wrong. Please try again.')
      }

      setSubmitted(true)
      setForm(initialForm)
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Unable to send your message right now.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    if (errors[name as keyof ContactForm]) {
      setErrors((current) => ({ ...current, [name]: '' }))
    }
  }

  return (
    <>
      <PageHero
        tag="Contact"
        title="Let&apos;s talk about how to make your website feel more credible and more effective."
        subtitle="Share a little about your business and we&apos;ll help you figure out the next step with clarity and honesty."
        chips={['Consultation', 'Support', 'WhatsApp']}
        panelTitle="What to expect"
        panelBody="A short, helpful conversation about goals, scope, and the most practical next step for your business."
        panelStats={['Reply fast', 'No pressure', 'Clear next step']}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-navy">Reach out directly</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                If you prefer to speak first, use email or WhatsApp. We keep responses clear and timely during business
                hours.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'connectshodigital@gmail.com', href: 'mailto:connectshodigital@gmail.com' },
                { icon: Phone, label: 'Phone', value: '03345856255', href: 'tel:03345856255' },
                { icon: MapPin, label: 'Location', value: 'Islamabad, Pakistan', href: '#' },
              ].map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} className="surface-card flex items-start gap-4 rounded-[1.25rem] p-4 transition-all hover:-translate-y-0.5 sm:rounded-[1.5rem] sm:p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-electric/10 text-electric">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{label}</div>
                    <div className="mt-1 text-sm font-medium text-navy">{value}</div>
                  </div>
                </a>
              ))}
            </div>

            <a
              href="https://wa.me/923345856255"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>

            <div className="surface-card rounded-[1.25rem] p-5 sm:rounded-[1.75rem] sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">What to expect</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {[
                  'A quick review of your goals and priorities',
                  'A simple recommendation for the right next step',
                  'A clear sense of timeline and scope',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-electric" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="surface-card rounded-[1.5rem] p-6 text-center sm:rounded-[2rem] sm:p-10">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h2 className="mt-6 text-2xl font-bold text-navy">Message sent</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Thank you for reaching out. We&apos;ll review your message and get back to you within 2 business hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-primary mt-8">
                  Send another message
                </button>
              </div>
            ) : (
              <div className="surface-card rounded-[1.5rem] p-6 sm:rounded-[2rem] sm:p-10">
                <h2 className="text-2xl font-bold text-navy">Book a free consultation</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Tell us a bit about the business, and we&apos;ll take it from there.
                </p>

                <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-navy">
                        Full name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className={`w-full rounded-2xl border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-electric focus:ring-2 focus:ring-electric/10 ${
                          errors.name ? 'border-red-400' : 'border-slate-200'
                        }`}
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-navy">
                        Email address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@business.com"
                        className={`w-full rounded-2xl border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-electric focus:ring-2 focus:ring-electric/10 ${
                          errors.email ? 'border-red-400' : 'border-slate-200'
                        }`}
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-navy">
                        Phone number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className={`w-full rounded-2xl border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-electric focus:ring-2 focus:ring-electric/10 ${
                          errors.phone ? 'border-red-400' : 'border-slate-200'
                        }`}
                      />
                      {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-navy">
                        Business type <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="businessType"
                        value={form.businessType}
                        onChange={handleChange}
                        className={`w-full rounded-2xl border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-electric focus:ring-2 focus:ring-electric/10 ${
                          errors.businessType ? 'border-red-400' : 'border-slate-200'
                        }`}
                      >
                        <option value="">Select your industry</option>
                        {businessTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.businessType && <p className="mt-1 text-xs text-red-500">{errors.businessType}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-navy">
                      Tell us about your project <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Describe your business, your goals, and what you would like the website to do."
                      className={`w-full resize-none rounded-2xl border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-electric focus:ring-2 focus:ring-electric/10 ${
                        errors.message ? 'border-red-400' : 'border-slate-200'
                      }`}
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                  </div>

                  <button type="submit" disabled={loading} className="btn-primary w-full justify-center">
                    {loading ? 'Sending...' : 'Send message and book consultation'}
                    {!loading && <Send className="h-4 w-4" />}
                  </button>

                  {submitError && <p className="text-center text-sm text-red-500">{submitError}</p>}
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
