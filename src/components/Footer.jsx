import React from 'react'

export default function Footer() {
  return (
    <footer className="footer-minimal">
      <div className="container footer-flex">
        <div>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--text-primary)', fontSize: '1rem' }}>
            HARSHDEEP KAUR
          </div>
          <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
            Full Stack Developer
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.85rem' }}>
          <a href="https://github.com/24-Harshdeep" target="_blank" rel="noreferrer" className="nav-link">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/harshdeep-kaur-58b5a4320/" target="_blank" rel="noreferrer" className="nav-link">
            LinkedIn
          </a>
          <a href="mailto:harshdeepkaur1208@gmail.com" className="nav-link">
            Email
          </a>
        </div>

        <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
          © 2026 Harshdeep Kaur
        </div>
      </div>
    </footer>
  )
}
