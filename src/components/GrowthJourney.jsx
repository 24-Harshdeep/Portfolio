import React, { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function GrowthJourney() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 50%'],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const timelineEvents = [
    {
      year: '2024',
      title: 'BCA & Development Journey Began',
      desc: 'Enrolled in Bachelor of Computer Applications (Eternal University). Built foundational projects including ZaikaHub (React recipe platform) and Adaptive Chatbot (Node/Express/MongoDB session management).',
    },
    {
      year: '2025',
      title: 'Full-Stack Expansion & Advanced MERN',
      desc: 'Mastered REST API architecture, database schema design, state management in React, and modern TypeScript workflows.',
    },
    {
      year: '2026',
      title: 'Neximprove — Frontend Developer Intern',
      desc: 'Joined Neximprove as a Frontend Developer Intern (Jan 2026 – Jul 2026). Worked inside SaaS codebase across Sales UI, Broker Portal, Pricing Pages, Onboarding, Learning Portal, and Customer 360.',
    },
    {
      year: '2026',
      title: 'Axemata Modas — Web Developer / Full Stack Intern',
      desc: 'Engineered full-stack e-commerce architecture integrating customer storefront, Express/Node REST APIs, MongoDB models, and admin workflow control panels.',
    },
    {
      year: '2026',
      title: 'GSSoC 2026 (Global Rank #1,493) & Open Source',
      desc: 'Completed GirlScript Summer of Code (GSSoC 2026) achieving Global Rank #1,493 as an active open-source contributor to CommitPulse (frontend localization and UI refactoring).',
    },
    {
      year: 'NOW',
      title: 'Building & Seeking Full Stack, AI/ML & Software Engineer Roles',
      desc: 'Actively exploring Full Stack, Software Engineering, and AI/ML Developer roles while building autonomous AI Agents, LLM tools, and web applications.',
    },
  ]

  return (
    <section id="journey" className="journey-section">
      <div className="container">
        <span className="section-label">Growth & Milestones</span>
        <h2 className="section-title">Development Journey</h2>
        <p className="section-subtitle">
          A continuous timeline of software engineering progression, real product internships, and open-source contributions.
        </p>

        <div className="timeline-container" ref={containerRef}>
          {/* Static high-contrast background guide line */}
          <div className="timeline-guide-line" />

          {/* Glowing active progress line animated with scroll */}
          <motion.div
            className="timeline-progress-line"
            style={{ scaleY, originY: 0 }}
          />

          {timelineEvents.map((item, idx) => (
            <motion.div
              key={idx}
              className="timeline-item"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className="timeline-dot" />
              <div className="timeline-year">{item.year}</div>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
