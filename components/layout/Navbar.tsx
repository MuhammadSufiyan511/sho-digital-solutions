'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/lib/data'
import logo from '../../public/assets/logo.webp'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/85 shadow-lg shadow-slate-900/5 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy">
              <Image src={logo} alt="SHO Digital Solutions" className="h-8 w-8 object-contain" />
            </div>
            <div className="leading-tight">
              <span className="block text-sm font-extrabold tracking-[0.24em] text-navy uppercase">
                SHO Digital
              </span>
              <span className="block text-xs font-medium tracking-[0.18em] text-electric uppercase">
                Solutions
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? 'bg-electric/10 text-electric'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-navy'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/contact" className="btn-primary">
              Free Consultation
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-navy lg:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="surface-card mb-4 rounded-3xl p-4 lg:hidden">
            <nav className="space-y-1">
              {navLinks.map((link) => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block rounded-2xl px-4 py-3 text-sm font-medium ${
                      active ? 'bg-electric/10 text-electric' : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>
            <Link href="/contact" className="btn-primary mt-4 w-full justify-center">
              Free Consultation
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
