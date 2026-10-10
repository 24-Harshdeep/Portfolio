import React from 'react'
import { FiExternalLink, FiAward, FiCpu } from 'react-icons/fi'

export default function BeyondProjects() {
  const items = [
    {
      icon: <FiAward size={22} />,
      title: 'GirlScript Summer of Code (GSSoC) 2026',
      badge: 'Global Rank #1,493',
      date: 'May 2026 – Aug 2026',
      desc: 'Participated in GirlScript Summer of Code (GSSoC 2026) and successfully completed the program as an active open-source contributor.',
      bullets: [
        'Contributed frontend features, UI bug fixes, component refactoring, and multi-language UI localization across active open-source repositories.',
        'Collaborated with global open-source maintainers via GitHub PR reviews, issue discussions, and version control best practices.',
        'Achieved a Global Rank of #1,493 and earned official contributor recognition from the GirlScript Foundation.',
      ],
      links: [
        { url: 'https://gssoc.girlscript.org/profile/6cfd5893-9684-4568-869b-b2583dac461f', text: 'View GSSoC Profile' },
        { url: 'https://drive.google.com/file/d/1PX5a8u1xOJLLbQO5ICWpXVuAKQU4QzNh/view?usp=sharing', text: 'Certificate' },
      ],
      tags: ['GSSoC 2026', 'Rank #1493', 'Open Source', 'Git & GitHub', 'React', 'PR Contributions', 'Localization'],
    },
    {
      icon: <FiCpu size={22} />,
      title: 'GirlScript Summer of Code (GSSoC) 2026 – AI Track',
      badge: 'Smartly Labs AI Track',
      date: 'July 2026 – August 2026',
      desc: 'Contributed to the GSSoC 2026 AI Track hosted on Smartly Labs in collaboration with GS Labs, building AI developer tools and exploring agentic open-source workflows.',
      bullets: [
        'Built GitFix, an AI developer assistant for debugging, error analysis, and Git/GitHub troubleshooting using Smartly Labs.',
        'Developed an AI Internship Researcher and explored AI agent development through open-source projects.',
      ],
      links: [
        { url: 'https://infra.smartlylabs.ai/profile', text: 'Smartly Labs Profile' },
        { url: 'https://drive.google.com/file/d/1jkHj33mH-d1dcBB1dMoGk3-CHQRBSnZt/view?usp=sharing', text: 'Certificate' },
      ],
      tags: ['GSSoC AI Track', 'Smartly Labs', 'GitFix', 'AI Agents', 'Open Source'],
    },
  ]

  return (
    <section id="beyond" className="beyond-section">
      <div className="container">
        <span className="section-label">Open Source & Community</span>
        <h2 className="section-title">Open Source Contributions</h2>
        <p className="section-subtitle">
          Open-source program completion, global rank achievements, AI track contributions, and verified certificates.
        </p>

        <div className="projects-mini-grid">
          {items.map((item, idx) => (
            <div key={idx} className="mini-card" style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{ color: 'var(--accent-cyan)' }}>{item.icon}</div>
                  <span className="tech-pill" style={{ color: 'var(--accent-cyan)', borderColor: 'var(--border-hover)' }}>
                    {item.badge}
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  {item.title}
                </h3>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  {item.date}
                </div>

                <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                  {item.desc}
                </p>

                {item.bullets && (
                  <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.25rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    {item.bullets.map((b, i) => (
                      <li key={i} style={{ marginBottom: '0.4rem', lineHeight: 1.5 }}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div>
                <div className="cs-pills" style={{ marginBottom: item.links ? '1rem' : '0' }}>
                  {item.tags.map((t) => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>

                {item.links && (
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {item.links.map((l, i) => (
                      <a
                        key={i}
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                        style={{ fontSize: '0.8rem', padding: '0.45rem 0.75rem', flex: 1, textAlign: 'center', justifyContent: 'center' }}
                      >
                        {l.text} <FiExternalLink size={13} style={{ marginLeft: '4px' }} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


