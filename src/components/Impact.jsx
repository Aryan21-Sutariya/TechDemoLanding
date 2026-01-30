import React from 'react'
import useReveal from '../hooks/useReveal'
import { IMPACT } from '../data/mock'

export default function Impact() {
  const ref = useReveal()
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6" ref={ref}>
      <h2 className="section-title">Measurable impact</h2>
      <p className="section-sub">Outcomes that matter for people, planet, and producers.</p>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        {IMPACT.map((s) => (
          <div key={s.label} className="card p-6 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-brand-700">{s.value}</div>
            <div className="mt-2 text-xs sm:text-sm text-gray-600">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
