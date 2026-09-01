import React from 'react'
import { motion as Motion } from 'framer-motion'
import { useStore } from '../store/useStore'
import image1 from '../assets/image1.png'
import image4 from '../assets/image4.png'
import resumeAnalyzerImg from '../assets/resume_analyzer.png'

const ProjectCard = ({ title, desc, tech, liveUrl, githubUrl, image, project }) => {
  const { setSelectedProject } = useStore()
  
  return (
    <Motion.article 
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, boxShadow: '0 12px 32px rgba(37,99,235,0.15)' }}
    >
      <Motion.div 
        className="project-thumb"
        onClick={() => setSelectedProject(project)}
        whileHover={{ scale: 1.05 }}
        style={{ cursor: 'pointer' }}
      >
        {image && <img src={image} alt={title} />}
        <div className="project-overlay">
          <span>View Details →</span>
        </div>
      </Motion.div>
      <div className="project-body">
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="tech-tags">
          {tech.map((t) => (
            <Motion.span 
              key={t} 
              className="tech-tag"
              whileHover={{ scale: 1.1, backgroundColor: '#2563EB', color: '#fff' }}
            >
              {t}
            </Motion.span>
          ))}
        </div>
        <div className="project-actions">
          {liveUrl && (
            <Motion.a 
              className="btn btn-primary" 
              href={liveUrl} 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Live Demo
            </Motion.a>
          )}
          {githubUrl && (
            <Motion.a 
              className="btn btn-outline" 
              href={githubUrl} 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </Motion.a>
          )}
        </div>
      </div>
    </Motion.article>
  )
}

export default function Projects() {
  const projects = [
    {
      title: 'ZaikaHub',
      desc: 'Built a React-based recipe discovery platform with REST API integration and responsive Tailwind UI. Implemented React Router for seamless navigation.',
      fullDescription: 'ZaikaHub is a React-based recipe discovery platform built with REST API integration and a responsive Tailwind CSS UI. It features React Router for seamless single-page navigation and smooth component interactions.',
      tech: ['React', 'React Router', 'REST API', 'Tailwind CSS', 'Netlify'],
      liveUrl: 'https://zaikahubb.netlify.app/',
      githubUrl: 'https://github.com/24-Harshdeep/Zaikahub',
      image: image1,
      images: [image1],
      timeline: '2024',
      role: 'Frontend Developer',
      team: 'Solo Project',
      features: [
        'Built a React-based recipe discovery platform with REST API integration',
        'Responsive Tailwind CSS user interface',
        'Implemented React Router for seamless navigation',
        'Clean component structure and responsive layout',
      ],
      challenges: 'Integrated external recipe REST APIs seamlessly and optimized component re-renders for fast browsing.',
    },
    {
      title: 'Adaptive Chatbot',
      desc: 'Developed an AI-powered chatbot using React, Node.js, and Express.js with API integration for intelligent conversational responses. Built backend APIs to manage chat sessions and stored conversation data in MongoDB.',
      fullDescription: 'Developed an AI-powered chatbot using React, Node.js, and Express.js with API integration for intelligent conversational responses. Built backend APIs to manage chat sessions and stored conversation data in MongoDB for persistent user interactions.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      liveUrl: 'https://chat-bot-full-stack.vercel.app',
      githubUrl: 'https://github.com/24-Harshdeep/ChatBot-FullStack-',
      image: image4,
      images: [image4],
      timeline: '2024',
      role: 'Full Stack Developer',
      team: 'Solo Project',
      features: [
        'AI-powered intelligent conversational responses',
        'Backend APIs to manage chat sessions in Express.js',
        'MongoDB database storage for persistent user interactions',
        'Responsive React chat dashboard UI',
      ],
      challenges: 'Designed session management logic and MongoDB models for scalable conversation persistence.',
    },
    {
      title: 'Resume Analyzer',
      desc: 'Built an AI-powered resume analyzer that evaluates resume content and provides ATS-focused improvement suggestions. Developed an interactive dashboard with real-time feedback and a responsive interface.',
      fullDescription: 'Built an AI-powered resume analyzer that evaluates resume content and provides ATS-focused improvement suggestions. Developed an interactive dashboard with real-time feedback and a responsive interface for an improved user experience.',
      tech: ['React', 'Tailwind CSS', 'REST API'],
      liveUrl: 'https://github.com/24-Harshdeep',
      githubUrl: 'https://github.com/24-Harshdeep',
      image: resumeAnalyzerImg,
      images: [resumeAnalyzerImg],
      timeline: '2026',
      role: 'Full Stack Developer',
      team: 'Solo Project',
      features: [
        'Evaluates resume content and provides ATS-focused improvement suggestions',
        'Interactive dashboard with real-time feedback',
        'Responsive Tailwind CSS user interface',
        'REST API integration for analysis and suggestions',
      ],
      challenges: 'Crafted real-time evaluation response parsing and feedback cards layout for high readability.',
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="container section-center">
        <Motion.h2 
          className="section-title gradient-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Selected Projects
        </Motion.h2>
        <p className="section-subtitle">
          Building scalable, user-focused web applications
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
