import React from 'react'
import { FiExternalLink, FiBriefcase } from 'react-icons/fi'

export default function Experience() {
  const experiences = [
    {
      company: 'Neximprove',
      role: 'Frontend Developer Intern',
      period: 'Jan 2026 – Jul 2026',
      type: 'Product Engineering Internship',
      certificateUrl: 'https://drive.google.com/file/d/1573CNFDEyrAhnZKRcAMIuUUnu0Fe5pDC/view?usp=sharing',
      description: 'Worked inside an existing software product codebase collaborating with engineering teams on SaaS user interfaces and REST API integrations.',
      bullets: [
        'Sales UI & Broker Portal: Developed and refined responsive interfaces, reusable UI components, and portal functionality using React, TypeScript, and Tailwind CSS.',
        'Pricing Pages & Onboarding: Implemented responsive page layouts, UI debugging, and SEO optimizations across public onboarding flows.',
        'Learning Portal & Course Management: Contributed to course creation workflows, rich-text editing, Markdown support, feedback styling, and admin controls.',
        'Authentication & Security: Worked on two-factor authentication (2FA), OTP generation, authentication issues, and fixing page reload behavior after refresh.',
        'Customer 360 & Gateway QA: Assisted with Customer 360 UI implementation, documentation, and performed QA across sandbox/staging environments.',
        'Database & Integration: Worked with Azure database functionality, data retrieval, Git pull requests, sprint tasks, UAT testing, and product demo materials.',
      ],
      tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Agile/Scrum', 'Git', 'UAT', 'Azure', '2FA'],
    },
    {
      company: 'Axemata Modas',
      role: 'Web Developer / Full Stack Intern',
      period: 'Jul 2026 – Sep 2026',
      type: 'Full-Stack Internship',
      certificateUrl: 'https://drive.google.com/file/d/1IpNHrhQm-cHrD1kcxBwhyVuk2jRDoYPz/view',
      lorUrl: 'https://drive.google.com/file/d/1F40hMleezsCwpPg2zc0Ae49j_nJuwvFE/view',
      description: 'Engineering a full-stack e-commerce platform and administrative management workflow.',
      bullets: [
        'Architected MERN/Next.js stack application with separated storefront and admin workflow APIs.',
        'Designed MongoDB document schemas, indexing strategies, and secure RESTful endpoints in Node.js & Express.',
        'Implemented authentication flow, product inventory management, order processing, and media management.',
      ],
      tags: ['Next.js', 'React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'TypeScript'],
    },
    {
      company: 'NavGurukul',
      role: 'English Language Teacher & IT Facilitator',
      period: 'Nov 2024 – Aug 2025 (10 mos)',
      location: 'Eternal University · On-site',
      type: 'Education & IT Facilitation Internship',
      certificateUrl: '/image copy.png',
      description: 'Served as an English Language Teacher and IT Facilitator at Eternal University, leading interactive communication workshops, technical support ticket resolution, and project coordination.',
      bullets: [
        'English Language Teacher (Mar 2025 – Aug 2025 · 6 mos): Led interactive sessions, hackathons, and collaboration activities to enhance participants’ English proficiency, public speaking confidence, and soft skills.',
        'IT Facilitator (Nov 2024 – Feb 2025 · 4 mos): Handled issue resolution, support ticket management, and data analysis efficiently while ensuring organized project documentation, problem solving, and task management.',
      ],
      tags: ['Communication', 'Activity Planning', 'Problem Solving', 'Time Management', 'IT Support', 'Task Management'],
    },
  ]

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <span className="section-label">Professional Background</span>
        <h2 className="section-title">Industry & Engineering Experience</h2>
        <p className="section-subtitle">
          Hands-on development experience inside real product codebases and full-stack software architectures.
        </p>

        <div className="experience-list">
          {experiences.map((exp, idx) => (
            <div key={idx} className="exp-card">
              <div className="exp-header">
                <div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <div className="exp-company">{exp.company}</div>
                </div>
                <span className="exp-period">{exp.period}</span>
              </div>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                {exp.description}
              </p>

              <ul className="exp-bullets">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <div className="cs-pills" style={{ marginTop: '1.25rem', marginBottom: (exp.certificateUrl || exp.lorUrl) ? '1.25rem' : '0' }}>
                {exp.tags.map((t) => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {exp.certificateUrl && (
                  <a
                    href={exp.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ fontSize: '0.85rem', padding: '0.45rem 0.95rem' }}
                  >
                    View Certificate <FiExternalLink size={14} />
                  </a>
                )}
                {exp.lorUrl && (
                  <a
                    href={exp.lorUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ fontSize: '0.85rem', padding: '0.45rem 0.95rem' }}
                  >
                    View LOR <FiExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
