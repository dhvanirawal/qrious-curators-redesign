'use client'

export function FooterSection() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#060608]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#fb923c] animate-pulse" />
              <span className="font-raleway text-sm font-bold tracking-[0.15em] uppercase text-white">
                Qrious Curators
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              We build brands, websites, and digital experiences that feel
              refined, relevant, and made to grow.
            </p>
            <div className="flex gap-3 mt-6">
              {['in', 'ig', 'fb']?.map((social: string) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/40 text-xs font-bold hover:bg-[#fb923c]/10 hover:border-[#fb923c]/30 hover:text-[#fb923c] transition-all duration-300"
                >
                  {social ?? ''}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-raleway text-xs font-bold tracking-[0.2em] uppercase text-white/60 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {['Web Design', 'Development', 'Brand Identity', 'Social Media', 'Content Creation']?.map((item: string) => (
                <li key={item}>
                  <a href="#" className="text-white/35 text-sm hover:text-[#fb923c] transition-colors duration-300">
                    {item ?? ''}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-raleway text-xs font-bold tracking-[0.2em] uppercase text-white/60 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {['About Us', 'Our Work', 'Careers', 'Blog', 'Contact']?.map((item: string) => (
                <li key={item}>
                  <a href="#" className="text-white/35 text-sm hover:text-[#fb923c] transition-colors duration-300">
                    {item ?? ''}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs">
            © 2026 Qrious Curators. All rights reserved.
          </p>
          <p className="text-white/25 text-xs">
            Redesigned with <span className="text-[#fb923c]">♥</span> as a creative exercise
          </p>
        </div>
      </div>
    </footer>
  )
}
