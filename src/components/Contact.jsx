import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    // Formspree will handle the actual submission
    // Show success message after form submission
    setTimeout(() => {
      setSuccess(true)
    }, 500)
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div 
          className="contact-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Let's Connect</h2>
          <p>
            I'm open to new opportunities, collaborations, or simply a good tech conversation. 
            Feel free to reach out through the form below.
          </p>
        </motion.div>

        <motion.form
          className="contact-form"
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="form-group">
            <input type="text" name="name" placeholder=" " required />
            <label>Your Name</label>
          </div>

          <div className="form-group">
            <input type="email" name="email" placeholder=" " required />
            <label>Your Email</label>
          </div>

          <div className="form-group">
            <textarea name="message" rows="5" placeholder=" " required />
            <label>Your Message</label>
          </div>

          <button className="btn btn-primary" type="submit">Send Message</button>

          {success && (
            <p className="form-success">
              ✅ Message sent! I'll get back to you soon.
            </p>
          )}
        </motion.form>

        <motion.div 
          className="contact-info"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p>📧 harshdeepkaur@gmail.com</p>
          <p>📞 6003280603</p>
          <p>📍 Himachal Pradesh, India</p>
          <div className="socials">
            <a href="https://github.com/24-Harshdeep" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/harshdeep" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="#" target="_blank" rel="noreferrer">Discord</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
