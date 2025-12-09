import React from 'react'
import profileImg from '../assets/imageP.jpeg'

export default function Hero() {
  return (
    <section id="hero" className="hero container">
      <div className="hero-grid">
        <div className="hero-content">
          <h1>Hi, I’m Harshdeep Kaur <span className="wave">👋</span></h1>
          <p className="lead">Frontend Developer | BCA Student</p>
          <p className="tagline">Crafting clean and responsive web experiences.</p>

          <div className="hero-actions">
            <a className="btn primary" href="#projects">View Projects</a>
          </div>
        </div>

        <div className="hero-photo">
          <img src={profileImg} alt="Harshdeep Kaur" />
        </div>
      </div>
    </section>
  )
}
