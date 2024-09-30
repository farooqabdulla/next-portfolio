import React from 'react'
import Hero from '../components/Hero'
import AboutMe from '../components/Aboutme'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
function page() {
  return (
    <div>
      <Hero/>
      <AboutMe/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default page