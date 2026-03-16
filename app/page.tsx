import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import IntroStrip from '@/components/IntroStrip'
import Products from '@/components/Products'
import Pricing from '@/components/Pricing'
import WhySection from '@/components/WhySection'
import Applications from '@/components/Applications'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <IntroStrip />
      <Products />
      <Pricing />
      <WhySection />
      <Applications />
      <ContactSection />
      <Footer />
    </main>
  )
}
