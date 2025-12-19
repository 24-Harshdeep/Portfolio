import React, { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">Harshdeep</div>

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
        </nav>
      </div>
    </header>
  )
}
