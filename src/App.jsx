import Preloader from './components/Preloader.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Featured from './components/Featured.jsx'
import About from './components/About.jsx'
import Counter from './components/Counter.jsx'
import Services from './components/Services.jsx'
import Portfolio from './components/Portfolio.jsx'
import Education from './components/Education.jsx'
import CTA from './components/CTA.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Preloader />
      <Header />
      <Hero />
      <Featured />
      <About />
      <Counter />
      <Services />
      <Portfolio />
      <Education />
      <CTA />
      <Contact />
      <Footer />
    </>
  )
}
