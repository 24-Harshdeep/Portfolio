import React from 'react'

export default function ProofStrip() {
  const proofs = [
    {
      label: 'REAL PRODUCT EXPERIENCE',
      value: 'Neximprove Internship',
    },
    {
      label: 'FULL-STACK PROJECT',
      value: 'Axemata Modas Internship',
    },
    {
      label: 'OPEN SOURCE',
      value: 'GSSoC 2026 Contributor',
    },
    {
      label: 'AI / DEVELOPER TOOLS',
      value: 'GitFix & Researcher',
    },
  ]

  return (
    <div className="proof-strip">
      <div className="container">
        <div className="proof-grid">
          {proofs.map((item, idx) => (
            <div key={idx} className="proof-item">
              <span className="proof-tag">{item.label}</span>
              <div className="proof-val">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
