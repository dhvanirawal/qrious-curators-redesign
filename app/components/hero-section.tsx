'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowDown, Play } from 'lucide-react'

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const [parallaxY, setParallaxY] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window?.scrollY ?? 0
      setParallaxY(scrollY * 0.4)
    }
    window?.addEventListener('scroll', handleScroll, { passive: true })
    return () => window?.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{ transform: `translateY(${parallaxY}px)` }}
      >
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&auto=format"
          alt="Creative agency workspace with moody lighting"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060608]/70 via-[#060608]/50 to-[#060608]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#060608]/60 via-transparent to-[#060608]/60" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 pt-32 pb-20">
        {/* Eyebrow */}
        <div
          className={`flex items-center gap-3 mb-8 transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '0.4s' }}
        >
          <div className="w-2 h-2 rounded-full bg-[#fb923c] animate-pulse" />
          <span className="font-raleway text-xs font-semibold tracking-[0.25em] uppercase text-[#fb923c]">
            Qrious Curators — Creative Studio
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="mb-8">
          {[
            { text: 'We craft', italic: false, outline: false, delay: '0.5s' },
            { text: 'digital', italic: true, outline: false, delay: '0.65s' },
            { text: 'worlds', italic: false, outline: false, delay: '0.7s' },
            { text: 'that endure.', italic: false, outline: true, delay: '0.85s' },
          ]?.map((item: { text: string; italic: boolean; outline: boolean; delay: string }, i: number) => (
            <span
              key={i}
              className={`block overflow-hidden ${
                i === 1 ? 'inline' : i === 2 ? 'inline' : ''
              }`}
            >
              <span
                className={`inline-block transition-all duration-1000 ${
                  loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[100%]'
                } ${
                  item?.italic
                    ? 'font-lato italic font-light text-[clamp(3rem,8vw,7rem)] leading-[1.05] text-[#fb923c]'
                    : item?.outline
                    ? 'font-raleway font-bold text-[clamp(3rem,8vw,7rem)] leading-[1.05] text-transparent [-webkit-text-stroke:1.5px_rgba(242,242,245,0.4)]'
                    : 'font-raleway font-bold text-[clamp(3rem,8vw,7rem)] leading-[1.05] text-white'
                }`}
                style={{ transitionDelay: item?.delay ?? '0s' }}
              >
                {item?.text ?? ''}
                {i === 1 ? '\u00A0' : ''}
              </span>
            </span>
          ))}
        </h1>

        {/* Bottom Row: Description + CTAs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-12">
          <p
            className={`max-w-md text-white/60 text-base md:text-lg leading-relaxed font-sans transition-all duration-1000 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1s' }}
          >
            A full-spectrum creative agency building brand systems, digital experiences,
            and stories that stand apart in a crowded world.
          </p>

          <div
            className={`flex items-center gap-4 transition-all duration-1000 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1.15s' }}
          >
            <a
              href="#portfolio"
              className="inline-flex items-center gap-3 font-raleway text-xs font-bold tracking-[0.1em] uppercase bg-[#fb923c] text-[#060608] px-7 py-4 rounded-full hover:bg-[#ffa255] hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(251,146,60,0.3)] transition-all duration-300"
            >
              <span>View Work</span>
              <span className="text-sm">↗</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 font-raleway text-xs font-bold tracking-[0.1em] uppercase text-white/80 border border-white/20 px-7 py-4 rounded-full hover:border-[#fb923c]/50 hover:text-white hover:bg-white/[0.04] transition-all duration-300"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-1000 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1.5s' }}
      >
        <div className="scroll-indicator" />
        <span className="font-raleway text-[10px] tracking-[0.3em] uppercase text-white/40">
          Scroll
        </span>
      </div>
    </section>
  )
}
