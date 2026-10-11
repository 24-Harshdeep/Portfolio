import React from 'react'
import { FiExternalLink } from 'react-icons/fi'

export default function Certifications() {
  const certs = [
    {
      name: 'English Coordinator & Coach',
      platform: 'NavGurukul',
      url: '/image copy.png',
      note: 'Awarded Certificate of Appreciation for leadership in fostering language proficiency, dedication to peer learning, and coordinating communication activities.',
    },
    {
      name: 'Prompt Engineering',
      platform: 'Vanderbilt University',
      url: 'https://www.coursera.org/account/accomplishments/records/XBMTKTPY0OW6',
      note: 'Mastered prompt engineering techniques and optimal AI model interaction strategies.',
    },
    {
      name: 'Git & GitHub',
      platform: 'Google',
      url: 'https://www.coursera.org/account/accomplishments/records/D9E238813HKD',
      note: 'Certified in foundational Git skills, version control management, and open-source collaboration.',
    },
    {
      name: 'Version Control',
      platform: 'Meta',
      url: 'https://www.coursera.org/account/accomplishments/records/TW70H2NAMY2I',
      note: 'Version control best practices, branching strategies, and collaborative developer workflows.',
    },
    {
      name: 'MongoDB Developer Certification',
      platform: 'MongoDB University',
      url: 'https://learn.mongodb.com/c/0XYPSLsfTb6JKQalEoNHEg',
      note: 'MongoDB database fundamentals, CRUD operations, aggregation, and Atlas cloud deployment.',
    },
  ]

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <span className="section-label">Verified Learning</span>
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          Verified academic and professional course credentials across software engineering, Git, databases, and AI.
        </p>

        <div className="projects-mini-grid">
          {certs.map((cert) => (
            <div key={cert.name} className="mini-card">
              <div>
                <span className="section-label" style={{ fontSize: '0.72rem', marginBottom: '0.25rem' }}>
                  {cert.platform.toUpperCase()}
                </span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  {cert.name}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  {cert.note}
                </p>
              </div>

              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ fontSize: '0.825rem', padding: '0.4rem 0.85rem', width: 'fit-content' }}
                >
                  View Certificate <FiExternalLink size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
