import React from 'react'
import './styles/corporate.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import GrowthJourney from './components/GrowthJourney'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="portfolio-root">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GrowthJourney />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
