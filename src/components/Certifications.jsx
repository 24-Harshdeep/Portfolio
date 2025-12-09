import React from 'react'

export default function Certifications() {
  const certs = [
    {
      name: 'Version Control (Certificate)',
      platform: 'Coursera',
      url: 'https://coursera.org/share/3c677bc52e01e09b96234b315aa78eae',
    },
    {
      name: 'Introduction to Git and GitHub',
      platform: 'Coursera',
      url: 'https://www.coursera.org/account/accomplishments/verify/D9E238813HKD?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
    },
    {
      name: 'Prompt Engineering for ChatGPT',
      platform: 'Coursera',
      url: 'https://coursera.org/share/4dd67b0740f5f9ade5f7f7466c470979',
    },
  ]

  return (
    <section id="certifications" className="certifications container card">
      <h2>Certifications</h2>
      <div className="cert-grid">
        {certs.map((c) => (
          <a className="cert-card" key={c.name} href={c.url} target="_blank" rel="noreferrer">
            <h4>{c.name}</h4>
            <p className="platform">{c.platform}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
