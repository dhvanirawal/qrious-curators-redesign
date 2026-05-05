'use client'

import { useState } from 'react'
import { ArrowUpRight, ExternalLink } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Luxe Brand Identity',
    category: 'Branding',
    description: 'Complete brand identity system for a premium lifestyle brand — from logo design to packaging.',
    image: 'https://cdn.abacus.ai/images/b92db4eb-17bd-463e-b7a8-61112292ea4c.png',
    tags: ['Brand Identity', 'Packaging', 'Art Direction'],
    size: 'large',
  },
  {
    id: 2,
    title: 'E-Commerce Reimagined',
    category: 'Web Design',
    description: 'Modern e-commerce platform redesign that increased conversions by 67%.',
    image: 'https://cdn.abacus.ai/images/fbd22930-a41e-42f7-a877-e90eccf9e4d0.png',
    tags: ['UI/UX', 'Development', 'E-commerce'],
    size: 'small',
  },
  {
    id: 3,
    title: 'Social Campaign Spread',
    category: 'Marketing',
    description: 'Multi-platform social media campaign that drove 3.2× revenue lift.',
    image: 'https://cdn.abacus.ai/images/1faadaa1-eac1-4be1-9700-47cc4c33aa5a.png',
    tags: ['Social Media', 'Content', 'Strategy'],
    size: 'small',
  },
  {
    id: 4,
    title: 'Digital Experience Platform',
    category: 'Development',
    description: 'Full-stack web application with real-time analytics and CMS integration.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format',
    tags: ['React', 'Node.js', 'Analytics'],
    size: 'large',
  },
]

const filters = ['All', 'Branding', 'Web Design', 'Marketing', 'Development']

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const filtered = activeFilter === 'All'
    ? projects
    : projects?.filter((p: any) => p?.category === activeFilter) ?? []

  return (
    <section id="portfolio" className="relative py-24 md:py-36 bg-[#0c0c0f]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="reveal-up flex items-center gap-3 mb-5">
              <div className="w-8 h-[1px] bg-[#fb923c]" />
              <span className="font-raleway text-xs font-semibold tracking-[0.25em] uppercase text-[#fb923c]">
                Selected Work
              </span>
            </div>
            <h2 className="reveal-up delay-1 font-raleway text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Projects that<br />
              <em className="font-lato font-light text-[#fb923c] not-italic">speak volumes</em>
            </h2>
          </div>
          <p className="reveal-up delay-2 max-w-md text-white/50 text-base leading-relaxed">
            Each project is a collaboration — a partnership built on trust, creativity,
            and a shared vision for extraordinary results.
          </p>
        </div>

        {/* Filters */}
        <div className="reveal-up delay-3 flex flex-wrap gap-2 mb-12">
          {filters?.map((f: string) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`font-raleway text-xs font-semibold tracking-[0.1em] uppercase px-5 py-2.5 rounded-full border transition-all duration-300 ${
                activeFilter === f
                  ? 'bg-[#fb923c] text-[#060608] border-[#fb923c]'
                  : 'bg-transparent text-white/50 border-white/10 hover:border-white/25 hover:text-white/80'
              }`}
            >
              {f ?? ''}
            </button>
          ))}
        </div>

        {/* Portfolio Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered?.map((project: any, index: number) => {
            const isLarge = project?.size === 'large'
            const isHovered = hoveredId === project?.id

            return (
              <div
                key={project?.id ?? index}
                className={`reveal-scale delay-${Math.min(index + 1, 4)} portfolio-item group cursor-pointer ${
                  isLarge ? 'md:row-span-2' : ''
                }`}
                onMouseEnter={() => setHoveredId(project?.id ?? null)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className={`relative overflow-hidden rounded-2xl bg-[#111115] border border-white/[0.06] ${
                    isLarge ? 'aspect-[3/4]' : 'aspect-[4/3]'
                  }`}
                >
                  {/* Image */}
                  <img
                    src={project?.image ?? ''}
                    alt={project?.title ?? 'Portfolio project'}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div className="portfolio-overlay">
                    {/* Category Tag */}
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#fb923c] mb-3">
                      {project?.category ?? ''}
                    </span>

                    {/* Title */}
                    <h3 className="font-raleway text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                      {project?.title ?? ''}
                    </h3>

                    {/* Description */}
                    <p className="text-white/60 text-sm leading-relaxed mb-4 max-w-sm">
                      {project?.description ?? ''}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project?.tags?.map?.((tag: string, ti: number) => (
                        <span
                          key={ti}
                          className="font-mono text-[10px] tracking-wider text-white/40 bg-white/[0.08] rounded-full px-3 py-1"
                        >
                          {tag ?? ''}
                        </span>
                      )) ?? null}
                    </div>

                    {/* CTA */}
                    <a
                      href="https://qriouscurators.com/#showcase"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-raleway text-xs font-bold tracking-[0.1em] uppercase text-[#fb923c] hover:text-white transition-colors duration-300"
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Corner Badge */}
                  <div
                    className={`absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center transition-all duration-500 ${
                      isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                    }`}
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* View All Button */}
        <div className="reveal-up delay-3 flex justify-center mt-14">
          <a
            href="https://qriouscurators.com/#showcase"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 font-raleway text-xs font-bold tracking-[0.15em] uppercase text-white/60 border border-white/15 px-8 py-4 rounded-full hover:border-[#fb923c]/40 hover:text-[#fb923c] hover:bg-[#fb923c]/[0.04] transition-all duration-300"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
