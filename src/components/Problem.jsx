import React from 'react'
import useReveal from '../hooks/useReveal'
import { PROBLEMS } from '../data/mock'

const icons = [
  (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 7h18M3 12h12M3 17h6"/></svg>
  ),
  (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="8"/><path d="M8 12h8"/></svg>
  ),
  (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12Zm-8 9c0-3.3 3.6-6 8-6s8 2.7 8 6"/></svg>
  ),
  (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 12s3-5 9-5 9 5 9 5-3 5-9 5-9-5-9-5Z"/><circle cx="12" cy="12" r="2"/></svg>
  ),
]

export default function Problem() {
  const ref = useReveal()
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6" ref={ref}>
      <h2 className="section-title">The problem we solve</h2>
      <p className="section-sub">A broken value chain prevents India from unlocking the true potential of recyclables.</p>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROBLEMS.map((p, i) => {
          const Icon = icons[i % icons.length]
          return (
            <div key={p.title} className="card p-5 hover:-translate-y-0.5 transition-transform">
              <div className="h-10 w-10 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
