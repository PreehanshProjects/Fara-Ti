import Nav from './components/Nav'
import Marquee from './components/Marquee'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import HowToOrder from './components/HowToOrder'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Confetti from './components/Confetti'

export default function App() {
  return (
    <>
      <Confetti />
      <Nav />
      <Marquee />
      <Hero />
      <StatsBar />
      <About />
      <Menu />
      <Gallery />
      <HowToOrder />
      <CTA />
      <Footer />
    </>
  )
}
