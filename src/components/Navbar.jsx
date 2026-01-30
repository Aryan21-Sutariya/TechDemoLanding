import React, { useEffect, useState } from 'react'

const links = [
  { href: '#problem', label: 'Problem' },
  { href: '#solution', label: 'Solution' },
  { href: '#features', label: 'Features' },
  { href: '#impact', label: 'Impact' },
  { href: '#how-it-works', label: 'How it works' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-shadow ${scrolled ? 'shadow-md bg-white/90' : 'bg-white/70'} backdrop-blur`}> 
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="group inline-flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand-100 text-brand-600 ring-1 ring-brand-200">♻️</span>
            <span className="text-sm sm:text-base font-extrabold tracking-tight">Circular Economy Marketplace</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-gray-700 hover:text-brand-600">{l.label}</a>
            ))}
            <a href="#hero" className="inline-flex items-center rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 focus:outline-none focus-visible:shadow-glow">Get Started</a>
          </nav>
          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white/95">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 flex flex-col gap-2">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-sm font-medium text-gray-700 hover:text-brand-600">{l.label}</a>
            ))}
            <a href="#hero" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700">Get Started</a>
          </div>
        </div>
      )}
    </header>
  )
}
