import React from 'react'
import { motion as Motion } from 'framer-motion'

export default function Certifications() {
  const certs = [
    { 
      name: 'Prompt Engineering', 
      platform: 'Vanderbilt University', 
      url: 'https://www.coursera.org/account/accomplishments/records/XBMTKTPY0OW6',
      note: 'Mastered prompt engineering techniques and optimal AI model interaction strategies.' 
    },
    { 
      name: 'Git & GitHub', 
      platform: 'Google', 
      url: 'https://www.coursera.org/account/accomplishments/records/D9E238813HKD',
      note: 'Certified in foundational Git skills, version control management, and open-source collaboration.' 
    },
    { 
      name: 'Version Control', 
      platform: 'Meta', 
      url: 'https://www.coursera.org/account/accomplishments/records/TW70H2NAMY2I',
      note: 'Version control best practices, branching strategies, and collaborative developer workflows.' 
    },
    { 
      name: 'MongoDB Developer Certification', 
      platform: 'MongoDB University', 
      url: 'https://learn.mongodb.com/',
      note: 'MongoDB database fundamentals, CRUD operations, aggregation, and Atlas cloud deployment.' 
    },
  ]

  return (
    <section id="certifications" className="certifications">
      <div className="container section-center">
        <Motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </Motion.h2>
        <p className="section-subtitle">
          Continuous professional development and learning
        </p>

        <div className="cert-grid">
          {certs.map((cert, index) => (
            <Motion.div 
              key={cert.name} 
              className="cert-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h4>{cert.name}</h4>
              <p className="cert-platform">{cert.platform}</p>
              <p className="cert-note">{cert.note}</p>
              {cert.url && (
                <a 
                  href={cert.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cert-link"
                >
                  View Certificate →
                </a>
              )}
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
