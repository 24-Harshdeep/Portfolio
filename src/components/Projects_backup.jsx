import React from 'react'

const Project = ({ title, desc, tech, url }) => (
  <article className="project-card">
    <div className="project-thumb" />
    <div className="project-body">
      <h3>{title}</h3>
      <p>{desc}</p>
      <p className="tech">{tech}</p>
      <div className="project-actions">
        {url && (
          <a className="btn" href={url} target="_blank" rel="noreferrer">
            Live
          </a>
        )}
      </div>
    </div>
  </article>
)

export default function Projects() {
  const items = [
    {
      title: 'ZaikaHub',
      desc: 'Recipe and food exploration app built with React and external APIs.',
      tech: 'React • API • Netlify',
      url: '#',
    },
    {
      title: 'Adaptive Chatbot',
      desc: 'Chat UI demonstrating theme support and conversational flows.',
      tech: 'React • Context',
      url: '#',
    },
    {
      title: 'Todo List',
      desc: 'A minimal todo list built with vanilla HTML/CSS/JS.',
      tech: 'HTML • CSS • JS',
      url: '#',
    },
  ]

  return (
    <section id="projects" className="projects container card">
      <h2>Projects</h2>
      <div className="projects-grid">
        {items.map((p) => (
          <Project key={p.title} {...p} />
        ))}
      </div>
    </section>
  )
}
