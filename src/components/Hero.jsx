import React from 'react'
import { motion } from 'framer-motion'
import profileImage from '../assets/imageP.jpeg'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-grid">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>
            Hi, I'm <span className="highlight">Harshdeep</span><br />
            a Full Stack Developer.
          </h1>
          <p className="lead">
            I specialize in building scalable, user-focused web applications using the MERN stack.
          </p>
          <p className="tagline">
            Turning clean code into impactful products that empower users and drive results.
          </p>

          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <a className="btn btn-primary" href="#projects">View Projects</a>
            <a className="btn btn-outline" href="#contact">Contact Me</a>
          </motion.div>
        </motion.div>

        <div className="hero-photo">
          <img src={profileImage} alt="Harshdeep Kaur" />
        </div>
      </div>
    </section>
  )
}
