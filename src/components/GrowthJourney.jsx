import { motion as Motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiExternalLink } from 'react-icons/fi'

function AnimatedCounter({ end, duration = 2 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime
    let animationFrame

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount)
      }
    }

    animationFrame = requestAnimationFrame(updateCount)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <span>{count}</span>
}

export default function GrowthJourney() {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Axemata Modas',
      period: 'July 2026 – Present',
      type: 'Full-Time',
      bullets: [
        'Built scalable full-stack web applications using MERN stack & modern cloud architecture.',
        'Engineered responsive UIs, optimized API endpoints, and integrated database schema designs.',
      ],
    },
    {
      title: 'Frontend Developer Intern',
      company: 'Neximprove',
      period: 'January 2026 – July 2026',
      type: 'Professional Experience',
      certificateUrl: 'https://drive.google.com/file/d/1573CNFDEyrAhnZKRcAMIuUUnu0Fe5pDC/view?usp=sharing',
      bullets: [
        'Built reusable React.js, TypeScript, and Tailwind CSS components with REST API integration.',
        'Refactored components, fixed cross-browser issues, and collaborated in an Agile team.',
      ],
    },
    {
      title: 'Open Source Contributor',
      company: 'GirlScript Summer of Code (GSSoC) 2026',
      period: 'May 2026 – 15 August 2026',
      type: 'Open Source Experience',
      link: 'https://gssoc-tracker.vercel.app/pr-tracker/24-Harshdeep',
      bullets: [
        'Contributed to the CommitPulse project, focusing on frontend improvements.',
        'Implemented frontend localization for multilingual support.',
      ],
    },
  ]

  const stats = [
    { icon: '💻', number: 3, label: 'Featured Projects' },
    { icon: '🧩', number: 407, label: 'Year Contributions', suffix: '+' },
    { icon: '🚀', number: 10, label: 'Technologies Mastered' },
    { icon: '📈', number: 6, label: 'Months Experience', suffix: '+' },
    { icon: '📚', number: 4, label: 'Certifications' },
  ]

  return (
    <section id="journey" className="growth-journey">
      <div className="container section-center">
        <Motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience & Growth
        </Motion.h2>
        <p className="section-subtitle">
          My career journey, open source contributions, and key achievements
        </p>

        <div className="experience-cards" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '900px', margin: '2.5rem auto' }}>
          {experiences.map((exp, index) => (
            <Motion.div
              key={exp.company}
              className="cert-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              style={{ textAlign: 'left', borderTop: '4px solid var(--blue-primary)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--text-primary)' }}>{exp.title}</h3>
                  <p style={{ margin: '0.25rem 0 0', fontWeight: 600, color: 'var(--blue-primary)' }}>{exp.company}</p>
                </div>
                <span className="tech-tag" style={{ fontSize: '0.85rem' }}>{exp.period}</span>
              </div>
              <ul style={{ margin: '0.75rem 0 0 1.25rem', padding: 0, color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} style={{ marginBottom: '0.35rem' }}>{bullet}</li>
                ))}
              </ul>
              {exp.certificateUrl && (
                <div style={{ marginTop: '1rem' }}>
                  <a
                    href={exp.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', padding: '0.4rem 0.9rem' }}
                  >
                    View Internship Certificate <FiExternalLink size={14} />
                  </a>
                </div>
              )}
              {exp.link && (
                <div style={{ marginTop: '1rem' }}>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', padding: '0.4rem 0.9rem' }}
                  >
                    View GSSoC PR Tracker <FiExternalLink size={14} />
                  </a>
                </div>
              )}
            </Motion.div>
          ))}
        </div>

        <div className="journey-stats">
          {stats.map((stat, index) => (
            <Motion.div 
              key={stat.label} 
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">
                <AnimatedCounter end={stat.number} />
                {stat.suffix || ''}
              </div>
              <div className="stat-label">{stat.label}</div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
