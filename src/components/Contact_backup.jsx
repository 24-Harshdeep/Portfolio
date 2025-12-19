import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="contact container card">
      <h2>Get in Touch</h2>
      <p>Have a project idea or collaboration? I’d love to hear from you!</p>

      <form
        className="contact-form"
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
      >
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required />
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="_replyto" type="email" required />
        </div>

        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required />
        </div>

        <button className="btn primary" type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <p>📧 harshdeepkaur@gmail.com</p>
        <p>📞 6003280603</p>
        <p>📍 Himachal Pradesh, India</p>
        <div className="socials">
          <a href="#" aria-label="GitHub">GitHub</a>
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" aria-label="Discord">Discord</a>
        </div>
      </div>

      {/*
        Optional EmailJS usage (if you prefer JS-based sending):
        import emailjs from 'emailjs-com'
        function sendEmail(e) { e.preventDefault(); emailjs.sendForm('SERVICE_ID','TEMPLATE_ID', e.target, 'USER_ID')... }
      */}
    </section>
  )
}
