import React, { useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

const SkillBar = ({ name, level }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(level), 300);
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <Motion.div
      className="skill-progress"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="skill-name">
        <span>{name}</span>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="progress-bar">
        <Motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </Motion.div>
  );
};

const SkillCard = ({ title, skills }) => (
  <Motion.div
    className="skill-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -8, boxShadow: '0 12px 32px rgba(37,99,235,0.12)' }}
  >
    <h4>{title}</h4>
    {skills.map((skill) => (
      <SkillBar key={skill.name} name={skill.name} level={skill.level} />
    ))}
  </Motion.div>
);

export default function Skills() {
  const [showRadar, setShowRadar] = useState(false);

  const skillCategories = [
    {
      title: 'Languages & Frontend',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'React Router', level: 85 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Responsive Design', level: 90 },
      ],
    },
    {
      title: 'Backend & Databases',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'REST APIs', level: 90 },
        { name: 'JWT', level: 80 },
        { name: 'Python', level: 75 },
      ],
    },
    {
      title: 'Tools & Deployment',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Postman', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Vercel', level: 85 },
        { name: 'Netlify', level: 85 },
      ],
    },
  ];

  const radarData = [
    { subject: 'Frontend', value: 90 },
    { subject: 'Backend', value: 85 },
    { subject: 'Database', value: 80 },
    { subject: 'REST APIs', value: 90 },
    { subject: 'Languages', value: 85 },
    { subject: 'Tools', value: 88 },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <Motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="gradient-text">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies I work with daily</p>
        </Motion.div>

        <div className="skills-visualization-toggle">
          <button
            className={`toggle-btn ${!showRadar ? 'active' : ''}`}
            onClick={() => setShowRadar(false)}
          >
            Progress Bars
          </button>
          <button
            className={`toggle-btn ${showRadar ? 'active' : ''}`}
            onClick={() => setShowRadar(true)}
          >
            Radar Chart
          </button>
        </div>

        {!showRadar ? (
          <div className="skills-grid">
            {skillCategories.map((category, idx) => (
              <SkillCard key={idx} title={category.title} skills={category.skills} />
            ))}
          </div>
        ) : (
          <Motion.div
            className="radar-chart-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="#E5E7EB" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 14 }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#94A3B8' }} />
                <Radar
                  name="Skill Level"
                  dataKey="value"
                  stroke="#2563EB"
                  fill="#2563EB"
                  fillOpacity={0.3}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #E5E7EB',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </Motion.div>
        )}
      </div>
    </section>
  );
}
