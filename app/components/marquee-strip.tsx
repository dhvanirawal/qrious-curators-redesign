'use client'

const marqueeItems = [
  'Brand Identity',
  'Web Design',
  'Digital Strategy',
  '3D Design',
  'UI / UX',
  'Performance Marketing',
  'Content Creation',
  'Social Media',
]

export function MarqueeStrip() {
  const items = [...(marqueeItems ?? []), ...(marqueeItems ?? [])]
  return (
    <div
      className="relative py-6 border-y border-[#fb923c]/10 overflow-hidden bg-[#0c0c0f]"
      aria-hidden="true"
    >
      <div className="marquee-track">
        {items?.map((item: string, i: number) => (
          <span
            key={i}
            className="flex-shrink-0 px-8 font-raleway text-sm font-semibold tracking-[0.15em] uppercase text-white/30 whitespace-nowrap flex items-center gap-8"
          >
            {item ?? ''}
            <span className="w-1.5 h-1.5 rounded-full bg-[#fb923c]/40" />
          </span>
        ))}
      </div>
    </div>
  )
}
