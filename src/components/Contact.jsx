import React, { useState } from 'react'
import { motion as Motion } from 'framer-motion'

export default function Contact() {
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    const endpoint = 'https://formspree.io/f/xqezbwao'

    try {
      const form = e.currentTarget

      const gotcha = form.querySelector('input[name="_gotcha"]')
      if (gotcha && gotcha.value) {
        setLoading(false)
        return
      }

      const formData = new FormData(form)

      const res = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (res.ok) {
        setSuccess(true)
        form.reset()
      } else {
        const data = await res.json().catch(() => null)
        setError((data && data.error) || 'Failed to send message')
      }
    } catch (err) {
      console.error('Contact form error', err)
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <Motion.div 
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
        </Motion.div>

        <Motion.form
          className="contact-form"
          action="https://formspree.io/f/xqezbwao"
          method="POST"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <input type="text" name="_gotcha" tabIndex="-1" style={{ display: 'none' }} />
          <input type="hidden" name="_subject" value="New contact message from portfolio" />

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

          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? 'Sending…' : 'Send Message'}
          </button>

          {success && (
            <p className="form-success">
              ✅ Message sent! I'll get back to you soon.
            </p>
          )}

          {error && (
            <p className="form-error">
              ❌ {error}
            </p>
          )}
        </Motion.form>

        <Motion.div 
          className="contact-info"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p>📧 harshdeepkaur1208@gmail.com</p>
          <p>📞 +91 6003280603</p>
          <p>📍 Assam, India</p>
          <div className="socials">
            <a href="https://github.com/24-Harshdeep" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/harshdeep-kaur-58b5a4320/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://discord.com/users/1274218545064185969" target="_blank" rel="noreferrer">Discord</a>
            <a href="/Harshdeep Resume.pdf" download="Harshdeep Resume.pdf" className="btn btn-outline btn-download">
              📥 Download Resume
            </a>
          </div>
        </Motion.div>
      </div>
    </section>
  )
}
