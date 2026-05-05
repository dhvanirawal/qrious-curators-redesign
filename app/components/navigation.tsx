'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window?.scrollY > 50)
    }
    window?.addEventListener('scroll', handleScroll)
    return () => window?.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
          scrolled
            ? 'bg-[#060608]/90 backdrop-blur-xl border-b border-[#fb923c]/10'
            : 'bg-transparent'
        }`}
      >
        <nav className="flex items-center justify-between px-6 md:px-12 py-5 max-w-[1400px] mx-auto">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-2 h-2 rounded-full bg-[#fb923c] animate-pulse" />
            <span className="font-raleway text-sm font-bold tracking-[0.2em] uppercase text-white">
              Qrious Curators
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-1 bg-white/[0.04] border border-[#fb923c]/10 rounded-full px-2 py-1.5 backdrop-blur-xl">
            {navLinks?.map((link: { label: string; href: string }) => (
              <li key={link?.href}>
                <a
                  href={link?.href ?? '#'}
                  className="font-raleway text-xs font-semibold tracking-[0.1em] uppercase text-white/60 hover:text-white hover:bg-white/[0.08] px-5 py-2 rounded-full transition-all duration-300"
                >
                  {link?.label ?? ''}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 font-raleway text-xs font-bold tracking-[0.1em] uppercase bg-[#fb923c] text-[#060608] px-6 py-3 rounded-full hover:bg-[#ffa255] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(255,161,85,0.3)] transition-all duration-300"
          >
            <span>Let&apos;s Talk</span>
            <span>↗</span>
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full bg-white/[0.06] border border-[#fb923c]/10"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[9999] bg-[#060608]/97 backdrop-blur-3xl flex flex-col items-center justify-center gap-3 transition-all duration-500 ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/[0.06] border border-[#fb923c]/10 flex items-center justify-center"
          aria-label="Close menu"
        >
          <X className="w-5 h-5 text-white" />
        </button>
        {navLinks?.map((link: { label: string; href: string }) => (
          <a
            key={link?.href}
            href={link?.href ?? '#'}
            onClick={() => setMobileOpen(false)}
            className="font-lato text-4xl md:text-5xl font-light text-white/70 hover:text-[#fb923c] transition-colors duration-300 py-2"
          >
            {link?.label ?? ''}
          </a>
        ))}
      </div>
    </>
  )
}
