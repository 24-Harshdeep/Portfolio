import React from 'react'
import { motion } from 'framer-motion'

export default function Certifications() {
  const certs = [
    { 
      name: 'Prompt Engineering', 
      platform: 'Coursera', 
      note: 'Intro to prompt design and AI interaction patterns' 
    },
    { 
      name: 'Git and GitHub', 
      platform: 'Coursera', 
      note: 'Version control workflows and collaboration' 
    },
    { 
      name: 'MongoDB Learning Path', 
      platform: 'MongoDB University', 
      note: 'Basics of document databases and NoSQL' 
    },
    { 
      name: 'React - The Complete Guide', 
      platform: 'Udemy', 
      note: 'Modern React with Hooks, Context, and Redux' 
    },
    { 
      name: 'Node.js Backend Development', 
      platform: 'Coursera', 
      note: 'Server-side JavaScript and REST APIs' 
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
