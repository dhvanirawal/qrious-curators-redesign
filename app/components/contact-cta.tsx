'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react'

export function ContactCTA() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef?.current
    if (!section) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section?.getBoundingClientRect()
      if (!rect) return
      const x = ((e?.clientX - rect?.left) / rect?.width) * 100
      const y = ((e?.clientY - rect?.top) / rect?.height) * 100
      setMousePos({ x, y })
    }

    section?.addEventListener('mousemove', handleMouseMove)
    return () => section?.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 md:py-44 overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          transition: 'all 2s ease',
          background: `radial-gradient(ellipse 60% 60% at ${mousePos?.x ?? 50}% ${mousePos?.y ?? 50}%, rgba(251,146,60,0.08) 0%, transparent 70%)`,
        }}
      />
      <div className="absolute inset-0 bg-[#060608]" style={{ opacity: 0.92 }} />

      {/* Decorative Lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent via-[#fb923c]/30 to-transparent" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 text-center">
        {/* Eyebrow */}
        <div className="reveal-up flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#fb923c]/50" />
          <span className="font-raleway text-xs font-semibold tracking-[0.3em] uppercase text-[#fb923c]/70">
            Let&apos;s Build Together
          </span>
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#fb923c]/50" />
        </div>

        {/* Main Heading */}
        <h2 className="reveal-up delay-1 font-raleway text-5xl md:text-6xl lg:text-[5.5rem] font-bold text-white leading-[1.05] tracking-tight mb-6">
          Have a project<br />
          <em className="font-lato font-light text-[#fb923c] not-italic">in mind?</em>
        </h2>

        {/* Subtitle */}
        <p className="reveal-up delay-2 max-w-lg mx-auto text-white/45 text-lg leading-relaxed mb-12">
          Tell us about your vision. We respond within 24 hours with a tailored
          proposal and a clear path forward.
        </p>

        {/* CTA Buttons */}
        <div className="reveal-up delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="mailto:hello@qriouscurators.com"
            className="cta-glow inline-flex items-center gap-3 font-raleway text-sm font-bold tracking-[0.1em] uppercase bg-[#fb923c] text-[#060608] px-10 py-5 rounded-full hover:bg-[#ffa255] hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(251,146,60,0.35)] transition-all duration-300"
          >
            <span>Send a Brief</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 font-raleway text-sm font-bold tracking-[0.1em] uppercase text-white/70 border border-white/15 px-10 py-5 rounded-full hover:border-[#fb923c]/40 hover:text-white hover:bg-white/[0.03] transition-all duration-300"
          >
            Schedule a Call
          </a>
        </div>

        {/* Contact Info Row */}
        <div className="reveal-up delay-4 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/30">
          <a
            href="mailto:hello@qriouscurators.com"
            className="flex items-center gap-2 hover:text-[#fb923c] transition-colors duration-300 text-sm"
          >
            <Mail className="w-4 h-4" />
            <span>hello@qriouscurators.com</span>
          </a>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
          <span className="flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4" />
            <span>Jaipur, India &middot; Global Reach</span>
          </span>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-t from-transparent via-[#fb923c]/20 to-transparent" />
    </section>
  )
}
