import React from 'react'
import { motion as Motion } from 'framer-motion'
import { FiTarget, FiCode } from 'react-icons/fi'

export default function About() {
  const highlights = [
    'React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'TypeScript', 'Tailwind CSS'
  ]

  return (
    <section id="about" className="about">
      <div className="container section-center">
        <Motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </Motion.h2>
        <p className="section-subtitle">
          Passionate Full-Stack Developer creating modern, scalable web applications
        </p>
        
        <Motion.div 
          className="about-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="about-text-content">
            <p className="about-lead">
              Full-stack developer with <strong>6 months of frontend internship experience</strong> and active <strong>GSSoC 2026</strong> open-source contributions. Skilled in React, Node.js, Express.js, MongoDB, and REST APIs with experience building scalable web applications.
            </p>
            
            <p className="about-subtext">
              I focus on clean component architecture, seamless frontend/backend integration, performance optimization, and delivering high-quality user experiences.
            </p>

            <div className="about-highlights">
              <span className="highlights-label">
                <FiCode size={16} /> Core Tech Stack:
              </span>
              <div className="tech-tags" style={{ marginBottom: 0 }}>
                {highlights.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="career-goal">
              <div className="career-goal-header">
                <FiTarget style={{ color: 'var(--blue-primary)' }} size={20} />
                <h4>Career Goal</h4>
              </div>
              <p>
                To design and develop digital products that simplify and empower user experiences through clean code, innovative UI/UX, and robust full-stack architecture.
              </p>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  )
}
