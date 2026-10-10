import React from 'react'
import { useStore } from '../store/useStore'
import { FiArrowRight, FiExternalLink, FiGithub, FiLayers, FiGlobe, FiShield, FiServer, FiDatabase, FiArrowDown } from 'react-icons/fi'
import image1 from '../assets/image1.png'
import image4 from '../assets/image4.png'

export default function Projects() {
  const { setSelectedProject } = useStore()

  const majorProjects = [
    {
      num: '01',
      title: 'Neximprove',
      category: 'Product Engineering Internship',
      tagline: 'SaaS Platform Development — Sales UI, Broker Portal & Customer 360',
      role: 'Frontend Developer Intern (Jan 2026 – Jul 2026)',
      timeline: 'Jan 2026 – Jul 2026',
      desc: 'Engineered frontend modules and application features inside an active SaaS product codebase. Developed reusable React and TypeScript component suites integrated with backend REST APIs across key application portals.',
      problem: 'Building scalable, enterprise-ready frontend interfaces and core security flows across complex SaaS modules while adhering to continuous deployment schedules and Agile team workflows.',
      workspaces: [
        { title: 'Sales UI & Broker Portal', desc: 'Responsive frontend development, UI refinement, reusable components, and portal functionality.' },
        { title: 'Pricing Pages & Onboarding', desc: 'Page implementation, responsive UI debugging, and SEO improvements.' },
        { title: 'Learning Portal & Course Management', desc: 'Course creation, course wizard tools, rich-text editing, Markdown support, feedback styling, and admin controls.' },
        { title: 'Authentication & 2FA', desc: 'Two-factor authentication implementation, OTP handling, refresh-related behavior, and debugging authentication issues.' },
        { title: 'Customer 360 / COP Portal', desc: 'Documentation, implementation tasks, responsive layouts, and code contributions.' },
        { title: 'Gateway Portal QA', desc: 'Sandbox and staging environment testing, page validation, issue identification, and QA reporting.' },
        { title: 'Azure & Data Integration', desc: 'Database-related functionality and application data access.' },
        { title: 'Development Workflow & UAT', desc: 'Git pull requests, sprint planning, bug fixing, user acceptance testing, and cross-functional collaboration.' },
        { title: 'Product Demos & Documentation', desc: 'Prepared demo scripts, voiceovers, and product videos to communicate product functionality.' },
      ],
      contributions: [
        { label: 'Sales UI & Broker Portal', desc: 'Developed responsive interfaces and reusable components using React, TypeScript & Tailwind CSS.' },
        { label: 'Pricing Pages & Onboarding', desc: 'Implemented page layouts, responsive UI debugging, and SEO optimizations across public onboarding flows.' },
        { label: 'Learning Portal & Courses', desc: 'Contributed to course creation workflows, rich-text editing, Markdown support, and admin controls.' },
        { label: 'Authentication & 2FA', desc: 'Implemented two-factor authentication (2FA), OTP generation, state persistence, and auth debugging.' },
        { label: 'Customer 360 & Gateway QA', desc: 'Implemented Customer 360 UI components and performed QA across sandbox & staging environments.' },
        { label: 'Database & Azure Integration', desc: 'Worked with Azure database functionality, application data retrieval, Git PRs, and UAT testing.' },
      ],
      features: [
        'Sales UI & Broker Portal: Developed and refined responsive interfaces, reusable UI components, and portal functionality using React, TypeScript, and Tailwind CSS.',
        'Pricing Pages & Onboarding: Worked on UI implementation, responsive layouts, SEO improvements, and debugging.',
        'Learning Portal & Course Management: Contributed to backend-related tasks, course management, course creation workflows, rich-text editor functionality, Markdown support, feedback styling, and admin-side controls.',
        'Authentication & Security (2FA): Worked on two-factor authentication (2FA), OTP generation, authentication issues, and fixing page reload behavior after refresh.',
        'Customer 360 / COP Portal: Contributed to documentation, UI implementation, responsive behavior, and pull requests.',
        'Gateway Portal QA: Performed QA across sandbox and staging environments, checked portal pages, identified issues, and prepared QA reports.',
        'Database & Azure Integration: Worked with Azure database-related functionality and application data retrieval.',
        'Quality & Collaboration: Participated in UAT, debugging, issue discussions, Git/GitHub pull requests, sprint tasks, and collaboration with team members.',
      ],
      decisions: 'Adopted TypeScript interfaces for strict API contract validation, reusable modular component architecture to eliminate duplication, and standardized state handling for complex 2FA / OTP auth workflows.',
      challenges: 'Managing multi-portal state synchronization, persistent auth states across page refreshes, and staging environment validation for enterprise API integrations.',
      tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Agile/Scrum', 'Git', 'UAT', 'Azure', '2FA'],
      certificateUrl: 'https://drive.google.com/file/d/1573CNFDEyrAhnZKRcAMIuUUnu0Fe5pDC/view?usp=sharing',
      isFeatured: true,
    },
    {
      num: '02',
      title: 'Axemata Modas',
      category: 'Full Stack E-commerce (Internship)',
      tagline: 'End-to-End E-commerce Architecture with Storefront & Admin Portal',
      role: 'Web Developer / Full Stack Intern (Jul 2026 – Sep 2026)',
      timeline: 'Jul 2026 – Sep 2026',
      desc: 'A full-stack e-commerce system featuring customer-facing storefront interfaces, backend API services, MongoDB database models, and an administrative control panel.',
      problem: 'Decoupling customer shopping workflows from internal product management, order processing, and administrative controls through clean RESTful APIs.',
      contributions: [
        { label: 'Storefront & Admin UI', desc: 'Built responsive Next.js/React interfaces for customer browsing and admin control.' },
        { label: 'REST API Integration', desc: 'Connected frontend views to Express API endpoints for asynchronous data updates.' },
        { label: 'Authentication & Security', desc: 'Implemented JWT-based authentication and role-based access control.' },
        { label: 'Product Management', desc: 'Developed workflows for catalog updates, inventory state tracking, and orders.' },
        { label: 'MongoDB Data Handling', desc: 'Structured document schemas, indexing strategies, and database query optimizations.' },
      ],
      architectureFlow: true,
      scopeItems: [
        { title: 'Storefront', desc: 'Customer-facing product browsing and shopping experience.' },
        { title: 'Admin Portal', desc: 'Product management and administrative workflows.' },
        { title: 'Backend & Database', desc: 'API services, authentication, and database operations.' },
      ],
      archHighlights: [
        'JWT Auth & Role-Based Access (RBAC)',
        'Modular Node.js / Express REST API',
        'MongoDB Atlas Document Indexing',
        'Decoupled Storefront & Admin Views',
      ],
      features: [
        'Built responsive customer storefront with product search, filtering, cart management, and checkout flows using Next.js & React.',
        'Designed administrative control dashboard for inventory management, order state updates, and content publishing.',
        'Architected REST API backend using Node.js, Express, and MongoDB Atlas with custom schema validation.',
        'Implemented secure JWT-based authentication for customer profiles and admin access roles.',
        'Structured MongoDB document schemas, indexing strategies, and database operations.',
      ],
      decisions: 'Selected MongoDB for schema flexibility in product attributes and Next.js for server-side rendering performance on public storefront pages.',
      challenges: 'Handling atomic order status updates and ensuring admin workflows operate seamlessly without blocking customer API requests.',
      tech: ['Next.js', 'React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'TypeScript', 'JWT'],
      certificateUrl: 'https://drive.google.com/file/d/1IpNHrhQm-cHrD1kcxBwhyVuk2jRDoYPz/view',
      lorUrl: 'https://drive.google.com/file/d/1F40hMleezsCwpPg2zc0Ae49j_nJuwvFE/view',
      isFeatured: true,
    },
  ]

  const secondaryProjects = [
    {
      title: 'GitFix',
      category: 'AI / Developer Tool',
      desc: 'Smartly Labs AI Agent designed to help developers diagnose Git and GitHub errors. Analyzes error logs, identifies root causes in beginner-friendly language, and provides safe step-by-step solutions.',
      tech: ['Smartly Labs', 'AI Agents', 'Developer Tools', 'Debugging'],
      liveUrl: 'https://infra.smartlylabs.ai/agents/cmt7498fv00030ai20hy3qwzg/chat',
      timeline: '2026',
      role: 'Creator & Developer',
      problem: 'Helping developers diagnose Git/GitHub errors, understand root causes, and execute safe step-by-step troubleshooting solutions.',
      features: ['Diagnoses Git & GitHub errors in beginner-friendly language', 'Provides safest step-by-step solutions with command explanations', 'Warns clearly before potentially destructive Git commands'],
    },
    {
      title: 'Internship Researcher',
      category: 'AI / Web Research',
      desc: 'Smartly Labs AI Agent engineered to discover and verify internship opportunities. Scours official web portals based on field, location, and role preferences.',
      tech: ['Smartly Labs', 'AI Agents', 'Automation', 'Web Research'],
      liveUrl: 'https://infra.smartlylabs.ai/agents/cmsn2q2je000z04lhwzl2q7ai/chat',
      timeline: '2026',
      role: 'Creator & Developer',
      problem: 'Automating career search workflows and compiling verified internship details including eligibility, stipend, deadline, and application links.',
      features: ['Finds & verifies internships across field, location & work mode', 'Extracts eligibility, required skills, compensation & deadlines', 'Provides direct application links to official company portals'],
    },
    {
      title: 'ZaikaHub',
      category: 'Recipe Discovery Web App',
      desc: 'Built a React-based recipe discovery platform with REST API integration and responsive Tailwind CSS user interface.',
      tech: ['React', 'React Router', 'REST API', 'Tailwind CSS', 'Netlify'],
      liveUrl: 'https://zaikahubb.netlify.app/',
      githubUrl: 'https://github.com/24-Harshdeep/Zaikahub',
      image: image1,
      timeline: '2024',
      role: 'Frontend Developer',
      features: ['Recipe discovery search & filtering', 'REST API integration', 'Responsive Tailwind UI'],
    },
    {
      title: 'Adaptive Chatbot',
      category: 'Full Stack Conversational AI',
      desc: 'AI-powered chatbot using React, Node.js, and Express.js with session management and MongoDB conversation persistence.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
      liveUrl: 'https://chatbot-frontend-3f4it92se-24-harshdeeps-projects.vercel.app/',
      githubUrl: 'https://github.com/24-Harshdeep/ChatBot-FullStack-',
      image: image4,
      timeline: '2024',
      role: 'Full Stack Developer',
      features: ['Intelligent conversational responses', 'MongoDB chat session persistence', 'Express API backend'],
    },
    {
      title: 'Resume Analyzer',
      category: 'AI Resume Feedback Tool',
      desc: 'AI-powered resume evaluation engine that analyzes resume content and provides ATS-focused improvement recommendations.',
      tech: ['React', 'Tailwind CSS', 'REST API'],
      liveUrl: 'https://ai-career-platform-delta.vercel.app/',
      githubUrl: 'https://github.com/24-Harshdeep/ai-career-platform',
      image: '/careeros.png',
      timeline: '2026',
      role: 'Full Stack Developer',
      features: ['Evaluates resume text content', 'ATS formatting feedback', 'Real-time dashboard preview'],
    },
  ]

  return (
    <section id="work" className="work-section">
      <div id="experience" style={{ position: 'absolute', top: '-80px' }} />
      <div className="container">
        <span className="section-label">INDUSTRY & PRODUCT EXPERIENCE</span>
        <h2 className="section-title">Industry & Engineering Work</h2>
        <p className="section-subtitle">
          In-depth engineering case studies of product developments, SaaS module architectures, and full-stack software.
        </p>

        {/* Featured Major Case Studies */}
        <div className="work-grid">
          {majorProjects.map((p) => (
            <div key={p.title} className="case-study-card featured">
              <div>
                <span className="cs-number">{p.num} — {p.category.toUpperCase()}</span>
                <h3 className="cs-title">{p.title}</h3>
                <div className="cs-tagline">{p.tagline}</div>
                <p className="cs-desc">{p.desc}</p>

                <div className="cs-pills">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>

                {p.contributions && (
                  <div className="contributions-box">
                    <span className="section-label" style={{ fontSize: '0.7rem', marginBottom: '0.35rem' }}>
                      KEY CONTRIBUTIONS
                    </span>
                    <ul className="contributions-list">
                      {p.contributions.map((c, idx) => (
                        <li key={idx}>
                          <strong>{c.label}:</strong> {c.desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                  <button
                    className="btn btn-primary"
                    onClick={() => setSelectedProject(p)}
                  >
                    View Engineering Case Study <FiArrowRight size={16} />
                  </button>

                  {p.certificateUrl && (
                    <a
                      href={p.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      Certificate <FiExternalLink size={14} />
                    </a>
                  )}

                  {p.lorUrl && (
                    <a
                      href={p.lorUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      LOR <FiExternalLink size={14} />
                    </a>
                  )}

                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      GitHub Code <FiGithub size={14} />
                    </a>
                  )}
                </div>
              </div>

              <div className="cs-visual-box">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span className="section-label" style={{ fontSize: '0.7rem', margin: 0 }}>
                    ARCHITECTURE & SCOPE
                  </span>
                  {p.workspaces ? (
                    <span className="tech-pill" style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem' }}>
                      {p.workspaces.length} Key Workspaces
                    </span>
                  ) : p.architectureFlow ? (
                    <span className="tech-pill" style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem' }}>
                      System Flow
                    </span>
                  ) : null}
                </div>

                {p.workspaces ? (
                  <div className="workspace-list-scroll">
                    {p.workspaces.map((ws, idx) => (
                      <div key={idx} className="workspace-mini-item">
                        <div className="workspace-item-title">
                          <span className="workspace-num">{idx + 1}.</span> {ws.title}
                        </div>
                        <div className="workspace-item-desc">{ws.desc}</div>
                      </div>
                    ))}
                  </div>
                ) : p.architectureFlow ? (
                  <div className="architecture-panel-inner">
                    <div className="architecture-flow-container">
                      <div className="arch-flow-row">
                        <div className="arch-node storefront-node">
                          <div className="arch-node-header">
                            <FiGlobe size={13} className="arch-icon" />
                            <span className="arch-node-title">Storefront</span>
                          </div>
                          <span className="arch-node-tech">Next.js / React</span>
                        </div>

                        <div className="arch-node admin-node">
                          <div className="arch-node-header">
                            <FiShield size={13} className="arch-icon" />
                            <span className="arch-node-title">Admin Dashboard</span>
                          </div>
                          <span className="arch-node-tech">Next.js / React</span>
                        </div>
                      </div>

                      <div className="arch-flow-arrows">
                        <div className="arch-arrow-line"><FiArrowDown size={12} /></div>
                        <div className="arch-arrow-line"><FiArrowDown size={12} /></div>
                      </div>

                      <div className="arch-node api-node">
                        <div className="arch-node-header">
                          <FiServer size={13} className="arch-icon" />
                          <span className="arch-node-title">REST API Layer</span>
                          <span className="arch-badge">Node / Express</span>
                        </div>
                        <div className="arch-node-sub">JWT Auth · Route Controllers · Order Middleware</div>
                      </div>

                      <div className="arch-flow-single-arrow">
                        <FiArrowDown size={12} />
                      </div>

                      <div className="arch-node db-node">
                        <div className="arch-node-header">
                          <FiDatabase size={13} className="arch-icon" />
                          <span className="arch-node-title">MongoDB Atlas</span>
                          <span className="arch-badge">Cloud DB</span>
                        </div>
                        <div className="arch-node-sub">Products · Users · Orders Schemas</div>
                      </div>
                    </div>

                    {p.scopeItems && (
                      <div className="arch-scope-grid">
                        {p.scopeItems.map((item, idx) => (
                          <div key={idx} className="arch-scope-item">
                            <div className="arch-scope-title">{item.title}</div>
                            <div className="arch-scope-desc">{item.desc}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {p.archHighlights && (
                      <div className="arch-highlights-box">
                        <div className="arch-highlights-header">
                          <span className="section-label" style={{ fontSize: '0.68rem', margin: 0 }}>
                            SYSTEM HIGHLIGHTS & SPECS
                          </span>
                        </div>
                        <div className="arch-highlights-grid">
                          {p.archHighlights.map((h, idx) => (
                            <div key={idx} className="arch-highlight-item">
                              <span className="highlight-dot" /> {h}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : p.architecture ? (
                  <div className="architecture-diagram">{p.architecture}</div>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Software & Web Projects */}
        <h3 className="section-title" style={{ fontSize: '1.5rem', marginTop: '4rem', marginBottom: '1.5rem' }}>
          Additional Projects & Software
        </h3>

        <div className="projects-mini-grid">
          {secondaryProjects.map((p) => (
            <div key={p.title} className="mini-card">
              <div>
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="cs-thumb-img"
                  />
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span className="section-label" style={{ fontSize: '0.72rem', margin: 0 }}>
                    {p.category.toUpperCase()}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    {p.timeline}
                  </span>
                </div>

                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  {p.title}
                </h4>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  {p.desc}
                </p>
              </div>

              <div>
                <div className="cs-pills" style={{ marginBottom: '1.25rem' }}>
                  {p.tech.map((t) => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button
                    className="btn btn-outline"
                    style={{ fontSize: '0.825rem', padding: '0.4rem 0.85rem' }}
                    onClick={() => setSelectedProject(p)}
                  >
                    Details
                  </button>

                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ fontSize: '0.825rem', padding: '0.4rem 0.85rem' }}
                    >
                      Live <FiExternalLink size={12} />
                    </a>
                  )}

                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                      style={{ fontSize: '0.825rem', padding: '0.4rem 0.85rem' }}
                    >
                      GitHub <FiGithub size={12} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
