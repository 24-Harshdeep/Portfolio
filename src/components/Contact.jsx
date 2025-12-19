import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="contact container card">
      <div className="contact-info centered">
        <p>📧 <a href="mailto:harshdeepkaur@gmail.com">harshdeepkaur@gmail.com</a></p>
        <p>📞 <a href="tel:+916003280603">6003280603</a></p>
        <p>📍 Himachal Pradesh, India</p>
        <div className="socials">
          <a href="https://github.com/24-Harshdeep" target="_blank" rel="noreferrer" aria-label="GitHub">GitHub</a>
          <a href="#" target="_blank" rel="noreferrer" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" target="_blank" rel="noreferrer" aria-label="Discord">Discord</a>
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
