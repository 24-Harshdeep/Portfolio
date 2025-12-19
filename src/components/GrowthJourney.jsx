import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    const increment = end / (duration / 16)
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [hasStarted, end, duration])

  return <span ref={ref}>{count}</span>
}

export default function GrowthJourney() {
  const milestones = [
    { year: '2022', label: 'Started coding basics' },
    { year: '2023', label: 'Built first React app' },
    { year: '2024', label: 'Full-stack project launch' },
    { year: '2025', label: 'Internship + advanced learning' },
  ]

  const stats = [
    { icon: '💻', number: 5, label: 'Projects Completed' },
    { icon: '🧩', number: 350, label: 'GitHub Commits', suffix: '+' },
    { icon: '🚀', number: 10, label: 'Technologies Learned' },
    { icon: '📈', number: 3, label: 'Years of Learning' },
    { icon: '📚', number: 5, label: 'Certifications' },
  ]

  return (
    <section id="journey" className="growth-journey">
      <div className="container section-center">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Growth Journey
        </motion.h2>
        <p className="section-subtitle">
          Continuous learning and skill development over the years
        </p>

        <motion.div 
          className="journey-timeline"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="timeline-path">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={milestone.year} 
                className="milestone"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="milestone-dot" />
                <div className="milestone-year">{milestone.year}</div>
                <div className="milestone-label">{milestone.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="journey-stats">
          {stats.map((stat, index) => (
            <motion.div 
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
