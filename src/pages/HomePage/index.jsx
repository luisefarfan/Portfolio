import React, { useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import WithHeader from '../../components/Header/WithHeader'
import About from './About'
import Experience from './Experience'
import Home from './Home'
import './HomePage.scss'

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('')
  const aboutRef = useRef()
  const experienceRef = useRef()

  const [homeRef, inView, entry] = useInView({
    threshold: 0.5
  })

  const handleSectionChange = (section) => {
    const refById = {
      home: homeRef,
      about: aboutRef,
      experience: experienceRef
    }

    setActiveSection(section)
    refById[section].current.scrollIntoView()
  }

  return (
    <main className='homepage'>
      <Home passedRef={homeRef} handleSectionChange={handleSectionChange} />
      <WithHeader showHeader={!inView} handleSectionChange={handleSectionChange} activeSection={activeSection}>
        <About passedRef={aboutRef} />
        <Experience passedRef={experienceRef} />
      </WithHeader>
    </main>
  )
}

export default HomePage
