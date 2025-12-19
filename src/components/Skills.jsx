import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const SkillBar = ({ name, level }) => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setWidth(level), 300)
    return () => clearTimeout(timer)
  }, [level])

  return (
    <div className="skill-progress">
      <div className="skill-name">
        <span>{name}</span>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  )
}

const SkillCard = ({ title, skills }) => (
  <motion.div 
    className="skill-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <h4>{title}</h4>
    {skills.map((skill) => (
      <SkillBar key={skill.name} name={skill.name} level={skill.level} />
    ))}
  </motion.div>
)

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express', level: 75 },
        { name: 'REST APIs', level: 85 },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', level: 75 },
        { name: 'Firebase', level: 70 },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 80 },
      ],
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container section-center">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Tech Stack & Skills
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <SkillCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  )
}
