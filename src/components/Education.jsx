import React from 'react'

export default function Education() {
  return (
    <section id="education" className="education container card">
      <h2>Education</h2>
      <div className="edu-list">
        <div className="edu-item">
          <h3>Bachelor of Computer Applications</h3>
          <p style={{ fontWeight: 600, color: 'var(--blue-primary)', margin: '0.25rem 0' }}>Eternal University | 2025 – 2027</p>
          <p>
            Pursuing Computer Applications focusing on software engineering principles, full-stack web development, and database architecture.
          </p>
        </div>
      </div>
    </section>
  )
}
