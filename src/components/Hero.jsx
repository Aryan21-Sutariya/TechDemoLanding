import React from 'react'
import useReveal from '../hooks/useReveal'

export default function Hero() {
  const ref = useReveal()
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      <div className="pt-28 pb-16 sm:pt-32 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
                Turning Waste into <span className="text-brand-600">Verified Value</span>
              </h1>
              <p className="mt-5 text-lg text-gray-700 max-w-xl">
                India generates over 62 million tons of waste annually. We connect waste generators, aggregators, certified recyclers, and manufacturers through a transparent marketplace.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#how-it-works" className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-700 focus-visible:shadow-glow">List Your Waste</a>
                <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 hover:border-brand-300 hover:text-brand-700">Find Buyers</a>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-brand-500 animate-pulse"></span> Live marketplace</div>
                <div className="flex items-center gap-2"><svg className="h-4 w-4 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M5 12a7 7 0 0114 0M5 12a7 7 0 0014 0"/></svg> Verified partners</div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 h-72 w-72 rounded-full bg-brand-200 blur-3xl opacity-40"></div>
              <div className="relative mx-auto max-w-md">
                <div className="card p-5">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center">🏭</div>
                    <div>
                      <p className="text-sm font-semibold">Waste Generator</p>
                      <p className="text-xs text-gray-500">HDPE, PET, Paper · Mumbai</p>
                    </div>
                  </div>
                  <div className="my-5 flex items-center justify-between text-xs text-gray-500">
                    <span className="flex-1 h-px bg-gray-200"></span>
                    <span className="mx-2">Smart Matching</span>
                    <span className="flex-1 h-px bg-gray-200"></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">🏭</div>
                    <div>
                      <p className="text-sm font-semibold">Buyer · Recycler</p>
                      <p className="text-xs text-gray-500">Best price, transparent deal</p>
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                    <div className="rounded-lg bg-gray-50 p-3">
                      <p className="text-xs text-gray-500">Volume</p>
                      <p className="text-sm font-semibold">2.5T</p>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-3">
                      <p className="text-xs text-gray-500">Price</p>
                      <p className="text-sm font-semibold">₹22/kg</p>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-3">
                      <p className="text-xs text-gray-500">Pickup</p>
                      <p className="text-sm font-semibold">24h</p>
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute -right-6 -bottom-6 w-40 rotate-6 select-none rounded-xl border border-gray-200 bg-white p-3 shadow-md">
                  <p className="text-[10px] uppercase tracking-wide text-gray-500">Traceability</p>
                  <p className="text-xs font-semibold">Transaction #A91XT</p>
                  <p className="text-xs text-gray-500">GPS logged · E-invoice · Proof of recycling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
