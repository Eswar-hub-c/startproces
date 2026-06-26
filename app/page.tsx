import FloatingActions from '@/components/FloatingActions'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Trust from '@/components/Trust'
import Customers from '@/components/Customers'
import Services from '@/components/Services'
import TechStack from '@/components/TechStack'
import GrowthCreative from '@/components/GrowthCreative'
import Journey from '@/components/Journey'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <FloatingActions />
      <Navbar />
      <main>
        <Hero />
        <Trust />
        {/* <Customers /> */}
        <Services />
        <TechStack />
        {/* <GrowthCreative /> */}
        <Journey />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
