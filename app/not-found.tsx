import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0E1A2E] px-4 py-20 text-white">
      <div className="text-center">
        <div className="text-7xl font-extrabold text-teal/40 sm:text-9xl">404</div>
        <h1 className="mt-4 text-2xl font-bold sm:text-3xl">Page Not Found</h1>
        <p className="mt-2 max-w-md text-sm text-slate-300">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-8">
          <Link href="/" className="btn-primary">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
