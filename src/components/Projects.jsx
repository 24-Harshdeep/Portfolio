import React from 'react'
import img1 from '../assets/image1.png'
import img2 from '../assets/image2.png'
import img4 from '../assets/image4.png'

const Project = ({ title, desc, tech, url, image }) => (
  <article className="project-card">
    <div className="project-thumb">
      {image && (
        <img src={image} alt={`${title} screenshot`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      )}
    </div>
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
      image: img1,
    },
    {
      title: 'Adaptive Chatbot',
      desc: 'Chat UI demonstrating theme support and conversational flows.',
      tech: 'React • Context',
      url: '#',
      image: img2,
    },
    {
      title: 'Todo List',
      desc: 'A minimal todo list built with vanilla HTML/CSS/JS.',
      tech: 'HTML • CSS • JS',
      url: '#',
      image: img4,
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
