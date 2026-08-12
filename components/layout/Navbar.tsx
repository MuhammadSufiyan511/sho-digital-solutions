'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { MessageCircle, Menu, Moon, Sun, X } from 'lucide-react'
import { navLinks } from '@/lib/data'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const nextTheme = savedTheme === 'dark' || (!savedTheme && prefersDark) ? 'dark' : 'light'
    setTheme(nextTheme)
    document.documentElement.classList.toggle('dark', nextTheme === 'dark')
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    window.localStorage.setItem('theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [mounted, theme])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (typeof document === 'undefined') return
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:bg-slate-950/80 dark:shadow-black/20'
          : 'bg-transparent'
      }`}
      >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 sm:py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/assets/SixByte_standalone.webp"
              alt="SixByte Technologies"
              width={44}
              height={44}
              className="h-11 w-11 object-contain sm:h-12 sm:w-12"
              priority
            />
            <div className="hidden leading-tight sm:block">
              <span className="block text-sm font-extrabold tracking-[0.24em] text-navy uppercase dark:text-white">
                SixByte
              </span>
              <span className="block text-xs font-medium tracking-[0.18em] text-electric uppercase">
                Technologies
              </span>
            </div>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-2 text-[11px] font-semibold text-electric shadow-sm transition-colors hover:border-electric hover:bg-electric/5 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 sm:hidden"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Talk
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
                      : 'text-slate-600 hover:bg-slate-100 hover:text-navy dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
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

          <div className="ml-auto mr-2 flex items-center gap-2 sm:mr-3 lg:ml-0">
            <button
              type="button"
              onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-navy transition-colors hover:border-electric hover:text-electric dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-navy transition-colors hover:border-electric hover:text-electric dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 lg:hidden"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-slate-950/45 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
      />

      <aside
        className={`fixed inset-y-0 right-0 z-50 flex w-[min(88vw,22rem)] max-w-full transform flex-col border-l border-slate-200/80 bg-white shadow-2xl shadow-slate-950/10 transition-transform duration-300 ease-out dark:border-slate-800 dark:bg-slate-950 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-4 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/SixByte_standalone.webp"
              alt="SixByte Technologies"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
            <div className="leading-tight">
              <span className="block text-[10px] font-extrabold tracking-[0.24em] text-navy uppercase dark:text-white">
                SixByte
              </span>
              <span className="block text-[10px] font-medium tracking-[0.18em] text-electric uppercase">
                Technologies
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-navy transition-colors hover:border-electric hover:text-electric dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-5">
          <nav className="space-y-2">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                    active
                      ? 'bg-electric/10 text-electric'
                      : 'text-slate-600 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className="mt-6 rounded-3xl bg-gradient-to-br from-electric/10 via-white to-slate-50 p-4 ring-1 ring-slate-200/70 dark:from-electric/15 dark:via-slate-950 dark:to-slate-900 dark:ring-slate-800">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-electric">Need help?</p>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Start with a free consultation and we&apos;ll help you figure out the cleanest next step.
            </p>
            <Link href="/contact" className="btn-primary mt-4 w-full justify-center">
              Free Consultation
            </Link>
          </div>
        </div>
      </aside>
    </header>
  )
}
