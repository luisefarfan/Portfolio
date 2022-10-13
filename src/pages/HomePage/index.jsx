import React, { useRef, useState } from 'react'
import { InView, useInView } from 'react-intersection-observer'
import WithHeader from '../../components/Header/WithHeader'
import { menuIds } from '../../content/home'
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

    refById[section].current.scrollIntoView()
  }

  return (
    <main className='homepage'>
      <Home passedRef={homeRef} handleSectionChange={handleSectionChange} />
      <WithHeader showHeader={!inView} handleSectionChange={handleSectionChange} activeSection={activeSection}>
        <InView threshold={0.5} onChange={(inView) => inView && setActiveSection(menuIds.option1)}>
          <About passedRef={aboutRef} />
        </InView>
        <InView threshold={0.5} onChange={(inView) => inView && setActiveSection(menuIds.option2)}>
          <Experience passedRef={experienceRef} />
        </InView>
      </WithHeader>
    </main>
  )
}

export default HomePage
