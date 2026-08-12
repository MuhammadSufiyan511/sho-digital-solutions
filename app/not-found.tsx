import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-20" style={{ backgroundColor: '#0A1F44' }}>
      <div className="text-center">
        <div className="mb-4 text-6xl font-black text-electric/30 sm:text-8xl">404</div>
        <h1 className="mb-4 text-2xl font-bold text-white sm:text-3xl">Page Not Found</h1>
        <p className="mb-8 max-w-md text-sm text-blue-200 sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-electric text-white px-6 py-3 rounded-lg font-semibold hover:bg-electric-dark transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    </div>
  )
}
