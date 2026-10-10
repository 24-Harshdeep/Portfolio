import React from 'react'

export default function About() {
  const exploringTags = ['AI Agents & LLMs', 'Machine Learning', 'Full Stack Architecture', 'DSA & Algorithms', 'System Design', 'Cloud / Azure']

  return (
    <section id="about" className="about-section">
      <div className="container">
        <span className="section-label">Identity & Context</span>
        <h2 className="section-title">About Me</h2>

        <div
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          <p
            style={{
              fontSize: '1.15rem',
              color: 'var(--text-primary)',
              lineHeight: 1.7,
              marginBottom: '1.5rem',
              fontWeight: 500,
            }}
          >
            I'm a 3rd-year BCA student (Eternal University), Full Stack Developer, and AI Engineer focused on building practical web products and intelligent AI applications. I've worked across frontend development, backend APIs, databases, AI agent workflows, and product architectures through real-world internships and open-source contributions. My recent work includes SaaS product development at Neximprove, a full-stack e-commerce architecture for Axemata Modas, GSSoC 2026 open-source contributions (Main & AI Track), and autonomous AI developer tools.
          </p>

          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
            I enjoy transforming complex requirements into clean component architectures, robust API integrations, and intuitive user experiences.
          </p>

          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
            <span className="section-label" style={{ fontSize: '0.75rem', marginBottom: '0.75rem' }}>
              CURRENTLY EXPLORING & EXPANDING
            </span>
            <div className="cs-pills">
              {exploringTags.map((tag) => (
                <span key={tag} className="tech-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
