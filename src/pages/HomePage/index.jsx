import React, { useRef, useState } from 'react'
import WithHeader from '../../components/Header/WithHeader'
import About from './About'
import Home from './Home'
import './HomePage.scss'

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('')
  const homeRef = useRef()
  const aboutRef = useRef()

  const handleSectionChange = (section) => {
    const refById = {
      home: homeRef,
      about: aboutRef
    }

    setActiveSection(section)
    refById[section].current.scrollIntoView()
  }

  return (
    <main className='homepage'>
      <Home homeRef={homeRef} handleSectionChange={handleSectionChange} />
      <WithHeader handleSectionChange={handleSectionChange} activeSection={activeSection}>
        <About aboutRef={aboutRef} />
      </WithHeader>
    </main>
  )
}

export default HomePage
