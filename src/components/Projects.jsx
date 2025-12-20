import React from 'react'
import { motion } from 'framer-motion'
import { useStore } from '../store/useStore'
import image1 from '../assets/image1.png'
import image4 from '../assets/image4.png'

const ProjectCard = ({ title, desc, tech, liveUrl, githubUrl, image, project }) => {
  const { setSelectedProject } = useStore()
  
  return (
    <motion.article 
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, boxShadow: '0 12px 32px rgba(37,99,235,0.15)' }}
    >
      <motion.div 
        className="project-thumb"
        onClick={() => setSelectedProject(project)}
        whileHover={{ scale: 1.05 }}
        style={{ cursor: 'pointer' }}
      >
        {image && <img src={image} alt={title} />}
        <div className="project-overlay">
          <span>View Case Study →</span>
        </div>
      </motion.div>
      <div className="project-body">
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="tech-tags">
          {tech.map((t) => (
            <motion.span 
              key={t} 
              className="tech-tag"
              whileHover={{ scale: 1.1, backgroundColor: '#2563EB', color: '#fff' }}
            >
              {t}
            </motion.span>
          ))}
        </div>
        <div className="project-actions">
          {liveUrl && (
            <motion.a 
              className="btn btn-primary" 
              href={liveUrl} 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Live Demo
            </motion.a>
          )}
          {githubUrl && (
            <motion.a 
              className="btn btn-outline" 
              href={githubUrl} 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const projects = [
    {
      title: 'ZaikaHub',
      desc: 'A full-stack recipe exploration platform built with React and Node.js. Features include recipe search, filtering, and user authentication.',
      fullDescription: 'ZaikaHub is a comprehensive recipe platform that allows users to discover, save, and share their favorite recipes. Built with modern web technologies, it features real-time search, advanced filtering, user authentication, and a responsive design that works seamlessly across all devices.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: '#',
      githubUrl: '#',
      image: image1,
      images: [image1],
      timeline: '3 months (2024)',
      role: 'Full Stack Developer',
      team: 'Solo Project',
      features: [
        'Real-time recipe search with debouncing',
        'Advanced filtering by cuisine, dietary preferences',
        'User authentication with JWT',
        'Save and organize favorite recipes',
        'Responsive design for mobile and desktop',
      ],
      challenges: 'Implemented efficient caching strategies to reduce API calls and improve performance. Designed a scalable MongoDB schema to handle complex recipe relationships.',
    },
    {
      title: 'Adaptive Chatbot',
      desc: 'An intelligent chatbot UI demonstrating theme support, conversational flows, and state management with React Context.',
      fullDescription: 'An adaptive chatbot interface showcasing advanced UI patterns, theme switching capabilities, and sophisticated state management. Features include conversational memory, typing indicators, and smooth animations.',
      tech: ['React', 'Context API', 'CSS', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
      image: image4,
      images: [image4],
      timeline: '1 month (2024)',
      role: 'Frontend Developer',
      team: 'Solo Project',
      features: [
        'Dynamic theme switching (light/dark)',
        'Conversational memory and context',
        'Typing indicators and smooth animations',
        'Customizable chatbot personality',
        'Export conversation history',
      ],
      challenges: 'Created a flexible state management system using Context API that handles complex conversation flows while maintaining performance.',
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="container section-center">
        <motion.h2 
          className="section-title gradient-text"
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
            <ProjectCard key={project.title} {...project} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
