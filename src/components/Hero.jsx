import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiExternalLink, FiBriefcase, FiBookOpen, FiCode, FiMapPin, FiMail } from 'react-icons/fi'
import profileImg from '../assets/image.jpeg'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section id="hero" className="hero-section">
      <div className="hero-glow-bg" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          className="hero-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-left">
            <motion.div variants={itemVariants} className="hero-badge-tag">
              <span className="status-dot-pulse" />
              Open to Software Engineering, Full Stack & AI/ML Opportunities
            </motion.div>

            <motion.h1 variants={itemVariants} className="hero-title">
              HARSHDEEP KAUR
            </motion.h1>

            <motion.div variants={itemVariants} className="hero-subtitle">
              Full Stack & AI Engineer building intelligent web applications.
            </motion.div>

            <motion.p variants={itemVariants} className="hero-bio">
              I build responsive frontend interfaces, robust backend APIs, database architectures, and autonomous AI agents using React, Next.js, TypeScript, Node.js, MongoDB, Smartly Labs AI, and modern web technologies.
            </motion.p>

            <motion.div variants={itemVariants} className="hero-ctas">
              <a href="#work" className="btn btn-primary">
                View My Work <FiArrowRight size={16} />
              </a>
              <a
                href="/Harshdeep_FullStackDeveloper_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Resume <FiExternalLink size={16} />
              </a>
              <a
                href="mailto:harshdeepkaur1208@gmail.com"
                className="hero-email-quick"
              >
                <FiMail size={14} /> harshdeepkaur1208@gmail.com
              </a>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="hero-right">
            <div className="hero-photo-frame">
              <div className="photo-container">
                <img
                  src={profileImg}
                  alt="Harshdeep Kaur"
                  className="hero-photo-img"
                />
                <div className="photo-location-badge">
                  <FiMapPin size={12} style={{ color: 'var(--accent-cyan)' }} /> Assam, India
                </div>
              </div>

              <div className="status-card-header">
                <FiCode size={14} /> Core Tech Stack
              </div>

              <div className="cs-pills" style={{ marginBottom: '1.25rem' }}>
                <span className="tech-pill">React</span>
                <span className="tech-pill">Next.js</span>
                <span className="tech-pill">TypeScript</span>
                <span className="tech-pill">Node.js</span>
                <span className="tech-pill">MongoDB</span>
              </div>

              <div className="status-item">
                <FiBookOpen className="status-icon" size={18} />
                <div>
                  <div className="status-label">BCA · 3rd Year</div>
                  <div className="status-val">Eternal University (2025–2027)</div>
                </div>
              </div>

              <div className="status-item">
                <FiBriefcase className="status-icon" size={18} />
                <div>
                  <div className="status-label">Neximprove</div>
                  <div className="status-val">Frontend Developer Intern (Jan 2026 – Jul 2026)</div>
                </div>
              </div>

              <div className="status-item">
                <FiBriefcase className="status-icon" size={18} />
                <div>
                  <div className="status-label">Axemata Modas</div>
                  <div className="status-val">Web Developer / Full Stack Intern (Jul 2026 – Sep 2026)</div>
                </div>
              </div>

              <div className="status-item" style={{ borderBottom: 'none' }}>
                <span className="status-dot-pulse" style={{ marginTop: '0.3rem' }} />
                <div>
                  <div className="status-label" style={{ color: 'var(--accent-green)' }}>
                    Available for Hiring
                  </div>
                  <div className="status-val">Full-Time / Software Engineering, Full Stack & AI/ML roles</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
