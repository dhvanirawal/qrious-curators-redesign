import { HeroSection } from './components/hero-section'
import { MarqueeStrip } from './components/marquee-strip'
import { ServicesSection } from './components/services-section'
import { PortfolioSection } from './components/portfolio-section'
import { ContactCTA } from './components/contact-cta'
import { Navigation } from './components/navigation'
import { GrainOverlay } from './components/grain-overlay'
import { ScrollRevealProvider } from './components/scroll-reveal-provider'
import { FooterSection } from './components/footer-section'

export default function Home() {
  return (
    <ScrollRevealProvider>
      <GrainOverlay />
      <Navigation />
      <main>
        <HeroSection />
        <MarqueeStrip />
        <ServicesSection />
        <PortfolioSection />
        <ContactCTA />
      </main>
      <FooterSection />
    </ScrollRevealProvider>
  )
}
