import React, { useEffect, Suspense } from 'react'
import './styles/corporate.css'
import './styles/enhanced.css'
import { useStore } from './store/useStore'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
const SkillsEnhanced = React.lazy(() => import('./components/SkillsEnhanced'))
const Projects = React.lazy(() => import('./components/Projects'))
const GrowthJourney = React.lazy(() => import('./components/GrowthJourney'))
const Certifications = React.lazy(() => import('./components/Certifications'))
const Contact = React.lazy(() => import('./components/Contact'))
const Footer = React.lazy(() => import('./components/Footer'))
import CommandPalette from './components/CommandPalette'
import ProjectModal from './components/ProjectModal'
import GitHubStats from './components/GitHubStats'
const GitHubActivity = React.lazy(() => import('./components/GitHubActivity'))
import PersonalityRhythm from './components/PersonalityRhythm'

function App() {
  const { darkMode } = useStore()

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-mode')
    } else {
      document.documentElement.classList.remove('dark-mode')
    }
  }, [darkMode])

  return (
    <div className="portfolio-root">
      <CommandPalette />
      <ProjectModal />
      <Header />
      <main>
        <Hero />
        <PersonalityRhythm />
        <About />
        <GitHubStats />
        <Suspense fallback={<div className="skeleton">Loading activity...</div>}>
          <GitHubActivity />
        </Suspense>
        <Suspense fallback={<div className="skeleton">Loading skills...</div>}>
          <SkillsEnhanced />
        </Suspense>
        <Suspense fallback={<div className="skeleton">Loading projects...</div>}>
          <Projects />
        </Suspense>
        <Suspense fallback={<div className="skeleton">Loading journey...</div>}>
          <GrowthJourney />
        </Suspense>
        <Suspense fallback={<div className="skeleton">Loading certifications...</div>}>
          <Certifications />
        </Suspense>
        <Suspense fallback={<div className="skeleton">Loading contact...</div>}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<footer className="footer">Loading footer...</footer>}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
