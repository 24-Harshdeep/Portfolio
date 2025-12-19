import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container section-center">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="about-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p>
            I'm a passionate Full Stack Developer who thrives on crafting functional and aesthetic web solutions. 
            My journey began with curiosity about how design and logic converge in digital products.
          </p>
          <p>
            I work primarily with the MERN stack, focusing on clean architecture, reusable components, 
            and performance optimization.
          </p>

          <div className="career-goal">
            <h4>Career Goal</h4>
            <p>
              To design and develop digital products that simplify and empower user experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
