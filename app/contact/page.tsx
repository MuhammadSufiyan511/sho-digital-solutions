'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react'
import type { ContactForm } from '@/types'

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
    const newErrors: Partial<ContactForm> = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email'
    if (!form.phone.trim()) newErrors.phone = 'Phone is required'
    if (!form.businessType) newErrors.businessType = 'Please select your business type'
    if (!form.message.trim()) newErrors.message = 'Message is required'
    else if (form.message.trim().length < 20) newErrors.message = 'Please provide more details (min 20 characters)'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
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
      setSubmitError(error instanceof Error ? error.message : 'Unable to send message right now.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof ContactForm]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <>
      <section className="pt-32 pb-16 bg-navy relative overflow-hidden" style={{ backgroundColor: '#0A1F44' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] opacity-20" style={{ background: 'radial-gradient(circle, #2563EB, transparent)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-electric/20 text-blue-200 px-3 py-1 rounded-full mb-6">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Let&apos;s Start Building<br/>
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #60A5FA, #2563EB)' }}>
              Your Digital Future
            </span>
          </h1>
          <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto">
            Book your free consultation today. We&apos;ll listen, advise, and give you a clear plan — no commitment required.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" className="w-full">
            <path d="M0 40L1440 40L1440 10C1200 35 960 0 720 15C480 30 240 0 0 10L0 40Z" fill="white" />
          </svg>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-navy mb-2">Reach Out Directly</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Prefer a quick message? Use the form, email us, or jump on WhatsApp. We respond within 2 hours during business hours.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  { icon: Mail, label: 'Email', value: 'hello@shodigital.com', href: 'mailto:hello@shodigital.com' },
                  { icon: Phone, label: 'Phone', value: '+1 (123) 456-7890', href: 'tel:+11234567890' },
                  { icon: MapPin, label: 'Address', value: 'Islamabad, Pakistan', href: '#' },
                  // { icon: Clock, label: 'Business Hours', value: 'Mon–Fri: 9AM – 6PM EST', href: '#' },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a key={label} href={href} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-electric/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-electric transition-colors">
                      <Icon className="w-5 h-5 text-electric group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-0.5">{label}</div>
                      <div className="text-navy font-medium text-sm">{value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/11234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500 text-white px-6 py-4 rounded-xl font-semibold hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp Now
                <span className="ml-auto text-xs opacity-70">Usually replies in &lt;1hr</span>
              </a>

              {/* Map placeholder */}
              <div className="bg-gray-100 rounded-xl h-56 flex items-center justify-center border border-gray-200">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Google Maps</p>
                  <p className="text-gray-300 text-xs">Islamabad</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-3">Message Sent!</h3>
                  <p className="text-gray-500 leading-relaxed mb-6">
                    Thank you for reaching out. Our team will review your message and respond within 2 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 bg-electric text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-electric-dark transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8">
                  <h2 className="text-xl font-bold text-navy mb-6">Book Free Consultation</h2>
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-navy mb-1.5">Full Name <span className="text-red-400">*</span></label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className={`w-full px-4 py-3 rounded-lg border text-sm bg-white transition-colors outline-none focus:border-electric focus:ring-2 focus:ring-electric/10 ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
                        />
                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy mb-1.5">Email Address <span className="text-red-400">*</span></label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@business.com"
                          className={`w-full px-4 py-3 rounded-lg border text-sm bg-white transition-colors outline-none focus:border-electric focus:ring-2 focus:ring-electric/10 ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
                        />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-navy mb-1.5">Phone Number <span className="text-red-400">*</span></label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className={`w-full px-4 py-3 rounded-lg border text-sm bg-white transition-colors outline-none focus:border-electric focus:ring-2 focus:ring-electric/10 ${errors.phone ? 'border-red-400' : 'border-gray-200'}`}
                        />
                        {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy mb-1.5">Business Type <span className="text-red-400">*</span></label>
                        <select
                          name="businessType"
                          value={form.businessType}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border text-sm bg-white transition-colors outline-none focus:border-electric focus:ring-2 focus:ring-electric/10 ${errors.businessType ? 'border-red-400' : 'border-gray-200'}`}
                        >
                          <option value="">Select your industry</option>
                          {businessTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                        {errors.businessType && <p className="text-red-400 text-xs mt-1">{errors.businessType}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">
                        Tell Us About Your Project <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Describe your business, your goals, and what you're looking to achieve..."
                        className={`w-full px-4 py-3 rounded-lg border text-sm bg-white transition-colors outline-none focus:border-electric focus:ring-2 focus:ring-electric/10 resize-none ${errors.message ? 'border-red-400' : 'border-gray-200'}`}
                      />
                      {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                      <p className="text-gray-400 text-xs mt-1">{form.message.length}/500 characters</p>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 bg-electric text-white py-4 rounded-lg font-bold hover:bg-electric-dark transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message & Book Consultation
                        </>
                      )}
                    </button>
                    {submitError && (
                      <p className="text-red-500 text-xs text-center">{submitError}</p>
                    )}

                    <p className="text-gray-400 text-xs text-center">
                      By submitting, you agree to our Privacy Policy. We never spam.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
