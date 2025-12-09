import React from 'react'

const SkillCard = ({ title, items }) => (
  <div className="skill-card">
    <h4>{title}</h4>
    <ul>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  </div>
)

export default function Skills() {
  return (
    <section id="skills" className="skills container card">
      <h2>Skills</h2>
      <div className="skills-grid">
        <SkillCard title="Frontend" items={["HTML", "CSS", "JavaScript", "React"]} />
        <SkillCard title="Tools" items={["Git", "GitHub", "VS Code", "Vite"]} />
        <SkillCard title="Soft Skills" items={["Teamwork", "Communication", "Problem Solving", "Time Management"]} />
      </div>
    </section>
  )
}
