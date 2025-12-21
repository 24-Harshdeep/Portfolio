import React, { useState } from 'react'
import { motion } from 'framer-motion'
import DarkModeToggle from './DarkModeToggle'
import logoImg from '../assets/image.jpeg'
import { useStore } from '../store/useStore'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { setCommandPaletteOpen } = useStore()

  return (
    <motion.header 
      className="site-header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-inner">
        <motion.div 
          className="brand"
          whileHover={{ scale: 1.05 }}
        >
          <img src={logoImg} alt="Harshdeep" className="brand-logo" />
          <span className="brand-name">Harshdeep</span>
        </motion.div>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span className={`burger ${open ? 'open' : ''}`} />
        </button>

        <nav className={`site-nav ${open ? 'open' : ''}`}>
          <a href="#hero" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#certifications" onClick={() => setOpen(false)}>Certifications</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          
          <div className="header-actions">
            <button 
              className="cmd-palette-trigger"
              onClick={() => setCommandPaletteOpen(true)}
              title="Command Palette (Ctrl+K)"
            >
              <span className="cmd-icon">⌘K</span>
            </button>
            <DarkModeToggle />
          </div>
        </nav>
      </div>
    </motion.header>
  )
}
