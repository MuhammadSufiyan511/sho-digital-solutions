import { NextResponse } from 'next/server'

interface ContactPayload {
  name: string
  email: string
  phone: string
  businessType: string
  message: string
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(payload: Partial<ContactPayload>) {
  if (!payload.name?.trim()) return 'Name is required.'
  if (!payload.email?.trim() || !emailRegex.test(payload.email)) return 'A valid email is required.'
  if (!payload.phone?.trim()) return 'Phone number is required.'
  if (!payload.businessType?.trim()) return 'Business type is required.'
  if (!payload.message?.trim() || payload.message.trim().length < 20) return 'Message must be at least 20 characters.'
  if (payload.message.length > 2000) return 'Message is too long.'
  return null
}

export async function POST(req: Request) {
  try {
    const payload = (await req.json()) as Partial<ContactPayload>
    const validationError = validate(payload)

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 })
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_TO_EMAIL
    const fromEmail = process.env.CONTACT_FROM_EMAIL

    if (!resendApiKey || !toEmail || !fromEmail) {
      return NextResponse.json(
        { error: 'Server email configuration is missing. Please set CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL, and RESEND_API_KEY.' },
        { status: 500 }
      )
    }

    const submittedAt = new Date().toISOString()

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: payload.email,
        subject: `New Contact Form Lead: ${payload.name}`,
        text: [
          'New lead submitted from contact form.',
          '',
          `Name: ${payload.name}`,
          `Email: ${payload.email}`,
          `Phone: ${payload.phone}`,
          `Business Type: ${payload.businessType}`,
          `Submitted At (UTC): ${submittedAt}`,
          '',
          'Message:',
          payload.message,
        ].join('\n'),
      }),
    })

    if (!resendResponse.ok) {
      const resendError = await resendResponse.text()
      return NextResponse.json(
        { error: 'Email provider rejected the request.', detail: resendError },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Failed to process request.' }, { status: 500 })
  }
}
