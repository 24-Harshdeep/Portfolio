import React from 'react'
import { motion } from 'framer-motion'
import image1 from '../assets/image1.png'
import image4 from '../assets/image4.png'

const ProjectCard = ({ title, desc, tech, liveUrl, githubUrl, image }) => (
  <motion.article 
    className="project-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="project-thumb">
      {image && <img src={image} alt={title} />}
    </div>
    <div className="project-body">
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="tech-tags">
        {tech.map((t) => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>
      <div className="project-actions">
        {liveUrl && (
          <a className="btn btn-primary" href={liveUrl} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        )}
        {githubUrl && (
          <a className="btn btn-outline" href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
      </div>
    </div>
  </motion.article>
)

export default function Projects() {
  const projects = [
    {
      title: 'ZaikaHub',
      desc: 'A full-stack recipe exploration platform built with React and Node.js. Features include recipe search, filtering, and user authentication.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: '#',
      githubUrl: '#',
      image: image1,
    },
    {
      title: 'Adaptive Chatbot',
      desc: 'An intelligent chatbot UI demonstrating theme support, conversational flows, and state management with React Context.',
      tech: ['React', 'Context API', 'CSS'],
      liveUrl: '#',
      githubUrl: '#',
      image: image4,
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="container section-center">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <p className="section-subtitle">
          Building meaningful applications that solve real-world problems
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
