import React from 'react'
import { FEATURES } from '../data/mock'
import useReveal from '../hooks/useReveal'

export default function Features() {
  const ref = useReveal()
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6" ref={ref}>
      <h2 className="section-title">Features built for circularity</h2>
      <p className="section-sub">A product-first approach to transparency, inclusion, and scale.</p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map((f) => (
          <article key={f.title} className="card p-6 group hover:-translate-y-0.5 transition-transform">
            <div className="h-10 w-10 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center group-hover:scale-110 transition-transform">⚡️</div>
            <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            <div className="mt-4 inline-flex items-center text-sm text-brand-700">Learn more →</div>
          </article>
        ))}
      </div>
    </div>
  )
}
