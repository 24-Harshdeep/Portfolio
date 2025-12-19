import React from 'react'

export default function Certifications() {
  const certs = [
    { name: 'Prompt Engineering', platform: 'Coursera', note: 'Intro to prompt design' },
    { name: 'Git and GitHub', platform: 'Coursera', note: 'Version control workflows' },
    { name: 'MongoDB Learning Path', platform: 'MongoDB University', note: 'Basics of document DBs' },
  ]

  return (
    <section id="certifications" className="certifications container card">
      <h2>Certifications</h2>
      <div className="cert-grid">
        {certs.map((c) => (
          <div className="cert-card" key={c.name}>
            <h4>{c.name}</h4>
            <p className="platform">{c.platform}</p>
            <p className="note">{c.note}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
