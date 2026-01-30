import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Problem from './components/Problem.jsx'
import Solution from './components/Solution.jsx'
import Features from './components/Features.jsx'
import Impact from './components/Impact.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <main>
        <section id="hero"><Hero /></section>
        <section id="problem" className="section"><Problem /></section>
        <section id="solution" className="section bg-brand-50/40"><Solution /></section>
        <section id="features" className="section"><Features /></section>
        <section id="impact" className="section bg-gray-50"><Impact /></section>
        <section id="how-it-works" className="section"><HowItWorks /></section>
      </main>
      <footer id="footer"><Footer /></footer>
    </div>
  )
}
