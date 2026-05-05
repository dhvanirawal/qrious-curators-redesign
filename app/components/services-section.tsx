'use client'

import { useState } from 'react'
import { Palette, Globe, Megaphone, Code, Camera, BarChart3 } from 'lucide-react'

const services = [
  {
    num: '01',
    title: 'Creative Direction',
    subtitle: 'Vision & Identity',
    description: 'Our creative team brings fresh perspectives to make your brand stand out. From visual concepts to innovative strategies, we bring your vision to life with precision and purpose.',
    icon: Palette,
    tags: ['Brand Systems', 'Art Direction', 'Visual Language'],
    color: '#fb923c',
  },
  {
    num: '02',
    title: 'Brand Strategy',
    subtitle: 'Research & Positioning',
    description: 'We build brands that are timeless. Through extensive market research, we craft strategies that ensure your brand resonates deeply with your audience and drives lasting impact.',
    icon: BarChart3,
    tags: ['Market Research', 'Brand Architecture', 'Positioning'],
    color: '#38bdf8',
  },
  {
    num: '03',
    title: 'Digital Execution',
    subtitle: 'Campaigns & Growth',
    description: 'We take your ideas to the digital world. From website development to campaigns, we ensure your digital presence is optimized, engaging, and delivering measurable results.',
    icon: Globe,
    tags: ['Digital Campaigns', 'SEO & SEM', 'Analytics'],
    color: '#fb923c',
  },
  {
    num: '04',
    title: 'Web Development',
    subtitle: 'Design & Engineering',
    description: 'We build dynamic, responsive websites that are visually stunning and user-friendly. From landing pages to complex e-commerce platforms — built for performance every time.',
    icon: Code,
    tags: ['React / Next.js', 'E-commerce', 'CMS Solutions'],
    color: '#38bdf8',
  },
  {
    num: '05',
    title: 'Social Marketing',
    subtitle: 'Engagement & Reach',
    description: "Maximize your brand's reach with data-driven social media strategies. From content creation to paid ads — we connect you with your audience where they live and engage.",
    icon: Megaphone,
    tags: ['Content Strategy', 'Paid Social', 'Community'],
    color: '#fb923c',
  },
  {
    num: '06',
    title: 'Content Creation',
    subtitle: 'Stories & Visuals',
    description: "Content is king. Our team produces visually compelling content — videos, blogs, graphics and more — all tailored perfectly to your brand's voice and audience preferences.",
    icon: Camera,
    tags: ['Video Production', 'Copywriting', 'Photography'],
    color: '#38bdf8',
  },
]

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="services" className="relative py-24 md:py-36 bg-[#060608]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div>
            <div className="reveal-up flex items-center gap-3 mb-5">
              <div className="w-8 h-[1px] bg-[#fb923c]" />
              <span className="font-raleway text-xs font-semibold tracking-[0.25em] uppercase text-[#fb923c]">
                What We Do
              </span>
            </div>
            <h2 className="reveal-up delay-1 font-raleway text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Services that<br />
              <em className="font-lato font-light text-[#fb923c] not-italic">drive growth</em>
            </h2>
          </div>
          <p className="reveal-up delay-2 max-w-md text-white/50 text-base leading-relaxed">
            We don&apos;t just &ldquo;do marketing.&rdquo; We build brands that people
            remember, relate to, and talk about.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services?.map((service: any, index: number) => {
            const IconComp = service?.icon
            const isActive = activeIndex === index

            return (
              <div
                key={service?.num ?? index}
                className={`reveal-up delay-${Math.min(index + 1, 6)} service-card-glow group relative rounded-2xl bg-[#111115] border border-white/[0.06] p-7 md:p-8 cursor-pointer transition-all duration-500 ${
                  isActive
                    ? 'bg-[#18181e] border-[#fb923c]/20 shadow-[0_0_40px_rgba(251,146,60,0.08)]'
                    : 'hover:bg-[#14141a] hover:border-white/[0.1]'
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Number + Icon Row */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-white/20 tracking-wider">
                    {service?.num ?? ''}
                  </span>
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-500 ${
                      isActive
                        ? 'bg-[#fb923c]/15 rotate-0'
                        : 'bg-white/[0.04] -rotate-6'
                    }`}
                  >
                    {IconComp ? (
                      <IconComp
                        className={`w-5 h-5 transition-colors duration-500 ${
                          isActive ? 'text-[#fb923c]' : 'text-white/40'
                        }`}
                      />
                    ) : null}
                  </div>
                </div>

                {/* Subtitle */}
                <span className="block font-raleway text-[10px] font-semibold tracking-[0.2em] uppercase text-[#fb923c]/60 mb-2">
                  {service?.subtitle ?? ''}
                </span>

                {/* Title */}
                <h3 className="font-raleway text-xl font-bold text-white mb-3 tracking-tight">
                  {service?.title ?? ''}
                </h3>

                {/* Description */}
                <p className="text-white/40 text-sm leading-relaxed mb-6">
                  {service?.description ?? ''}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service?.tags?.map?.((tag: string, ti: number) => (
                    <span
                      key={ti}
                      className="font-mono text-[10px] tracking-wider text-white/25 bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1"
                    >
                      {tag ?? ''}
                    </span>
                  )) ?? null}
                </div>

                {/* Hover Arrow */}
                <div
                  className={`absolute bottom-7 right-7 w-8 h-8 rounded-full bg-[#fb923c] flex items-center justify-center transition-all duration-500 ${
                    isActive
                      ? 'opacity-100 translate-x-0 translate-y-0'
                      : 'opacity-0 translate-x-2 translate-y-2'
                  }`}
                >
                  <span className="text-[#060608] text-sm font-bold">↗</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
