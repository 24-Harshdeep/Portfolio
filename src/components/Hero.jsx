import { motion as Motion } from 'framer-motion'
import { useState } from 'react'
import profileImg from '../assets/image.jpeg'

export default function Hero() {
  const [downloading, setDownloading] = useState(false)

  const handleResumeDownload = () => {
    setDownloading(true)
    setTimeout(() => {
      setDownloading(false)
    }, 2000)
  }

  return (
    <section id="home" className="hero">
      <div className="ambient-gradient" />
      <div className="hero-grid container">
        <Motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            Hi, I'm <span className="highlight gradient-text-animated">Harshdeep</span>
            <br />
            a Full Stack Developer.
          </h1>

          <p className="lead">
            I specialize in building scalable, user-focused web applications using the MERN stack.
          </p>

          <p className="tagline">
            Turning clean code into impactful products that empower users and drive results.
          </p>

          <Motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Motion.a 
              className="btn btn-primary" 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </Motion.a>
            <Motion.a 
              className="btn btn-outline" 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </Motion.a>
            <Motion.a
              className="btn btn-secondary"
              href="/Harshdeep Resume.pdf"
              download="Harshdeep Resume.pdf"
              onClick={handleResumeDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Download Resume"
            >
              {downloading ? '⏳ Downloading...' : '📄 Download Resume'}
            </Motion.a>
          </Motion.div>
        </Motion.div>

        <Motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="hero-photo">
            <img 
              src={profileImg} 
              alt="Harshdeep Kaur" 
            />
          </div>
        </Motion.div>
      </div>

      <div id="resume-content" style={{ display: 'none' }}>
        <h1>Harshdeep Kaur</h1>
        <p><strong>Full Stack Developer</strong> | +91 6003280603 | harshdeepkaur1208@gmail.com | Assam, India</p>
        <h3>Summary</h3>
        <p>Full-stack developer with 6 months of frontend internship experience and active GSSoC 2026 contributions. Skilled in React, Node.js, Express.js, MongoDB, and REST APIs, with experience building scalable web applications.</p>
        <h3>Experience</h3>
        <ul>
          <li><strong>Full Stack Developer — Axemata Modas</strong> (Jul 2026 – Present): Developing MERN stack applications using React, Node.js, Express.js, MongoDB, and TypeScript. Building REST APIs and integrating frontend/backend.</li>
          <li><strong>Frontend Developer Intern — <a href="https://drive.google.com/file/d/1573CNFDEyrAhnZKRcAMIuUUnu0Fe5pDC/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Neximprove</a></strong> (Jan 2026 – Jul 2026): Built reusable React.js, TypeScript, and Tailwind CSS components with REST API integration. (<a href="https://drive.google.com/file/d/1573CNFDEyrAhnZKRcAMIuUUnu0Fe5pDC/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>View Internship Certificate</a>)</li>
          <li><strong>Open Source Contributor — <a href="https://gssoc-tracker.vercel.app/pr-tracker/24-Harshdeep" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>GirlScript Summer of Code (GSSoC) 2026</a></strong> (May 2026 – 15 August 2026): Contributed to CommitPulse project focusing on frontend improvements and localization.</li>
        </ul>
        <h3>Education</h3>
        <p>Bachelor of Computer Applications | Eternal University | 2025 – 2027</p>
        <h3>Skills</h3>
        <p>React.js, Node.js, Express.js, MongoDB, REST APIs, JavaScript, TypeScript, Tailwind CSS, Python, Git, GitHub</p>
      </div>
    </section>
  )
}
