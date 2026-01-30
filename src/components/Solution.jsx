import React from 'react'
import useReveal from '../hooks/useReveal'

function Arrow() {
  return (
    <svg className="hidden sm:block h-6 w-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
  )
}

export default function Solution() {
  const ref = useReveal()
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6" ref={ref}>
      <h2 className="section-title">Our marketplace solution</h2>
      <p className="section-sub">List recyclables with quality, location and transparent pricing. Get matched with verified buyers and close auditable transactions.</p>

      <div className="mt-10 rounded-2xl border border-brand-100 bg-white p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Step icon="🏭" title="Waste Generator" subtitle="Material + quality + location" />
          <Arrow />
          <Step icon="🤖" title="Smart Matching" subtitle="Best price · SLA · logistics" />
          <Arrow />
          <Step icon="🏭" title="Buyer" subtitle="Recycler / Manufacturer" />
          <Arrow />
          <Step icon="🔎" title="Transparent Transaction" subtitle="Traceable and verified" />
        </div>
      </div>
    </div>
  )
}

function Step({ icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-12 w-12 shrink-0 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center text-xl">{icon}</div>
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
    </div>
  )
}
