import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import profileImage from '../assets/imageP.jpeg'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section id="hero" className="hero">
      {/* Ambient gradient background */}
      <div className="ambient-gradient"></div>
      
      <motion.div className="hero-grid" style={{ y, opacity }}>
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm <span className="highlight gradient-text-animated">Harshdeep</span><br />
            a Full Stack Developer.
          </motion.h1>
          <motion.p 
            className="lead"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            I specialize in building scalable, user-focused web applications using the MERN stack.
          </motion.p>
          <motion.p 
            className="tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Turning clean code into impactful products that empower users and drive results.
          </motion.p>

          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.a 
              className="btn btn-primary" 
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(37,99,235,0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a 
              className="btn btn-outline" 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.button
              className="btn btn-secondary"
              onClick={async () => {
                // Generate a PDF from hidden resume content
                const el = document.getElementById('resume-content');
                if (!el) return;
                // html2canvas is loaded via CDN in index.html
                // jspdf is available at window.jspdf after loading
                try {
                  const canvas = await window.html2canvas(el, { scale: 2 });
                  const imgData = canvas.toDataURL('image/png');
                  const { jsPDF } = window.jspdf;
                  const pdf = new jsPDF({ unit: 'px', format: [canvas.width, canvas.height] });
                  pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
                  pdf.save('Harshdeep_Kaur_Resume.pdf');
                } catch (e) {
                  console.error('PDF generation failed', e);
                  // fallback: navigate to static file if present
                  const fallbackHref = '/assets/Harshdeep_Kaur_Resume.pdf';
                  const a = document.createElement('a');
                  a.href = fallbackHref;
                  a.download = 'Harshdeep_Kaur_Resume.pdf';
                  document.body.appendChild(a);
                  a.click();
                  a.remove();
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Download Resume"
            >
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="hero-photo">
            <motion.img 
              src={profileImage} 
              alt="Harshdeep Kaur"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </motion.div>
      {/* Hidden resume content used to render the on-the-fly PDF */}
      <div id="resume-content" style={{ position: 'absolute', left: -9999, top: 0, width: '800px', padding: '24px', background: '#fff', color: '#111', fontFamily: 'Poppins, Inter, sans-serif' }}>
        <h1>Harshdeep Kaur</h1>
        <p><strong>Full Stack Developer</strong> — MERN stack</p>
        <h3>Summary</h3>
        <p>Building scalable, user-focused web applications. Experience in React, Node, Express, MongoDB.</p>
        <h3>Experience</h3>
        <ul>
          <li>Built multiple production web apps with React and Node.js</li>
          <li>Improved performance and UX for customer-facing dashboards</li>
        </ul>
        <h3>Skills</h3>
        <p>React, Node.js, Express, MongoDB, TypeScript, CSS</p>
      </div>
    </section>
  )
}
