import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Work from '../components/Work'

function Home() {
  return (
    <div className=''>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Work />
    </div>
  )
}

export default Home