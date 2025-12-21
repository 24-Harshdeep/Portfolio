import React from 'react'
import { motion } from 'framer-motion'

export default function Certifications() {
  const certs = [
    { 
      name: 'Prompt Engineering for ChatGPT', 
      platform: 'Coursera', 
      url: 'https://www.coursera.org/account/accomplishments/records/XBMTKTPY0OW6',
      note: 'Effective prompts for AI models like ChatGPT' 
    },
    { 
      name: 'Introduction to Git and GitHub', 
      platform: 'Coursera', 
      url: 'https://www.coursera.org/account/accomplishments/records/D9E238813HKD',
      note: 'Certified in foundational Git skills, including version control management and collaboration' 
    },
    { 
      name: 'Version Control', 
      platform: 'Coursera', 
      url: 'https://www.coursera.org/account/accomplishments/records/TW70H2NAMY2I',
      note: 'Version control best practices and collaborative workflows' 
    },
    { 
      name: 'Connecting to a MongoDB Database', 
      platform: 'MongoDB Learning', 
      url: 'https://learn.mongodb.com/c/_VQTpjFKRNSGqsOqvSOX3g',
      note: 'MongoDB database connection fundamentals' 
    },
    { 
      name: 'CRUD Operations: Insert and Find Documents', 
      platform: 'MongoDB Learning', 
      url: 'https://learn.mongodb.com/c/uyYeQapKTumGzcozYK7lGQ',
      note: 'MongoDB document operations and queries' 
    },
    { 
      name: 'Getting Started with MongoDB Atlas', 
      platform: 'MongoDB Learning', 
      url: 'https://learn.mongodb.com/c/oiMdaLxcTwGHll-piWyAhA',
      note: 'Cloud database deployment and management' 
    },
  ]

  return (
    <section id="certifications" className="certifications">
      <div className="container section-center">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h2>
        <p className="section-subtitle">
          Continuous professional development and learning
        </p>

        <div className="cert-grid">
          {certs.map((cert, index) => (
            <motion.div 
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
