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
      desc: 'A modern food-ordering web app designed to offer smooth user interactions and responsive UI. Built with React and optimized for performance.',
      fullDescription: 'ZaikaHub is a modern food-ordering web application that delivers a seamless and engaging user experience. Built with React, CSS, and Framer Motion, it focuses on smooth animations, intuitive navigation, and responsive design. The app is optimized for performance to ensure fast loading times and efficient interactions across all devices.',
      tech: ['React', 'CSS', 'Framer Motion'],
      liveUrl: 'https://zaikahubb.netlify.app/',
      githubUrl: 'https://github.com/24-Harshdeep/Zaikahub',
      image: image1,
      images: [image1],
      timeline: '2024',
      role: 'Frontend Developer',
      team: 'Solo Project',
      features: [
        'Smooth user interactions with Framer Motion',
        'Fully responsive UI optimized for all devices',
        'Modern design with intuitive navigation',
        'Performance-optimized for fast loading',
        'Clean and maintainable React architecture',
      ],
      challenges: 'Implemented smooth animations without compromising performance. Designed a responsive layout that adapts seamlessly across different screen sizes and devices.',
    },
    {
      title: 'Adaptive Chatbot',
      desc: 'An intelligent, adaptive chatbot built with a MERN stack that provides contextual and personalized responses using AI integration.',
      fullDescription: 'A full-stack intelligent chatbot application built with the MERN stack (MongoDB, Express, React, Node.js) integrated with OpenAI API. The chatbot provides contextual, personalized responses and adapts to user interactions. Features include conversation memory, AI-powered responses, and a modern, responsive interface.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI API'],
      liveUrl: 'https://chatbot-frontend-3f4it92se-24-harshdeeps-projects.vercel.app/',
      githubUrl: 'https://github.com/24-Harshdeep/ChatBot-FullStack-',
      image: image4,
      images: [image4],
      timeline: '2024',
      role: 'Full Stack Developer',
      team: 'Solo Project',
      features: [
        'AI-powered contextual responses with OpenAI integration',
        'Conversation history and memory management',
        'User authentication and session persistence',
        'Real-time message streaming',
        'Responsive chat interface with smooth animations',
      ],
      challenges: 'Integrated OpenAI API with efficient token management and response streaming. Built a scalable backend with MongoDB to handle conversation history and user sessions while maintaining low latency.',
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
