import React from 'react'
import useReveal from '../hooks/useReveal'

const steps = [
  { title: 'List recyclable material', desc: 'Specify type, quality (e.g., PET Flakes A/B), quantity and location.' },
  { title: 'Get matched with best buyer', desc: 'We consider price, proximity, capacity, and SLAs.' },
  { title: 'Transparent deal + payment', desc: 'Fair pricing, digital contracts, and wallet payouts.' },
  { title: 'Pickup and recycling', desc: 'Verified pickup, GPS logs and recycling proof.' },
]

export default function HowItWorks() {
  const ref = useReveal()
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6" ref={ref}>
      <h2 className="section-title">How it works</h2>
      <p className="section-sub">From listing to verified recycling in four simple steps.</p>

      <ol className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <li key={s.title} className="card p-6 relative">
            <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-brand-600 text-white text-sm font-bold flex items-center justify-center shadow">{i + 1}</div>
            <h3 className="mt-3 text-base font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
