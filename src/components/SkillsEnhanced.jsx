import React from 'react'
import { FiLayout, FiServer, FiDatabase, FiGitBranch, FiCompass } from 'react-icons/fi'

export default function SkillsEnhanced() {
  const categories = [
    {
      icon: <FiLayout size={20} />,
      title: 'Frontend',
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5 & CSS3', 'Responsive UI', 'React Router'],
    },
    {
      icon: <FiServer size={20} />,
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Server Routing', 'Python', 'Middleware Architecture'],
    },
    {
      icon: <FiDatabase size={20} />,
      title: 'Data & Cloud',
      skills: ['MongoDB', 'SQL Basics', 'Azure Services', 'Schema Design', 'MongoDB Atlas', 'Postman'],
    },
    {
      icon: <FiGitBranch size={20} />,
      title: 'Workflow & Delivery',
      skills: ['Git', 'GitHub', 'Agile/Scrum', 'UAT Testing', 'Code Reviews', 'Vercel', 'Netlify'],
    },
    {
      icon: <FiCompass size={20} />,
      title: 'Currently Exploring',
      skills: ['AI Agents', 'LLM APIs', 'System Design', 'Cloud Architecture', 'Data Structures & Algorithms (DSA)'],
    },
  ]

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <span className="section-label">Engineering Stack</span>
        <h2 className="section-title">Technical Expertise</h2>
        <p className="section-subtitle">
          Technologies, frameworks, and developer workflows I utilize daily to build production applications.
        </p>

        <div className="engineering-grid">
          {categories.map((cat, idx) => (
            <div key={idx} className="eng-card">
              <h3 className="eng-card-title">
                {cat.icon}
                {cat.title}
              </h3>
              <div className="eng-skills-list">
                {cat.skills.map((skill) => (
                  <span key={skill} className="tech-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
