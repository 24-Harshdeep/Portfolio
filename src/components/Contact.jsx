import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="contact container card">
      <h2>Get in Touch</h2>
      <p>Have a project idea or collaboration? I’d love to hear from you!</p>

      <div className="contact-certificates">
        <h3>Certificates</h3>
        <p>Here are some of my recent certificates — open any to verify:</p>

        <div className="cert-grid">
          <a className="cert-card" href="https://coursera.org/share/3c677bc52e01e09b96234b315aa78eae" target="_blank" rel="noreferrer">
            <div className="cert-card-body">
              <h4>Version Control (Certificate)</h4>
              <p className="platform">Coursera</p>
            </div>
            <div className="cert-card-cta">View</div>
          </a>

          <a className="cert-card" href="https://www.coursera.org/account/accomplishments/verify/D9E238813HKD?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" target="_blank" rel="noreferrer">
            <div className="cert-card-body">
              <h4>Introduction to Git and GitHub</h4>
              <p className="platform">Coursera</p>
            </div>
            <div className="cert-card-cta">View</div>
          </a>

          <a className="cert-card" href="https://coursera.org/share/4dd67b0740f5f9ade5f7f7466c470979" target="_blank" rel="noreferrer">
            <div className="cert-card-body">
              <h4>Prompt Engineering for ChatGPT</h4>
              <p className="platform">Coursera</p>
            </div>
            <div className="cert-card-cta">View</div>
          </a>
        </div>
      </div>

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
