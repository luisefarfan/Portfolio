import React, { useRef, useState } from 'react'
import { InView, useInView } from 'react-intersection-observer'
import WithHeader from '../../components/Header/WithHeader'
import LateralContact from '../../components/LateralContact'
import { menuIds } from '../../content/home'
import About from './About'
import Experience from './Experience'
import Home from './Home'
import Projects from './Projects'
import Skills from './Skills'
import './HomePage.scss'

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('')

  const aboutRef = useRef()
  const experienceRef = useRef()
  const skillsRef = useRef()
  const projectsRef = useRef()

  const [homeRef, inView, entry] = useInView({
    threshold: 0.5,
    initialInView: true
  })

  const handleSectionChange = (section) => {
    const refById = {
      [menuIds.home]: homeRef,
      [menuIds.option1]: aboutRef,
      [menuIds.option2]: experienceRef,
      [menuIds.option3]: skillsRef,
      [menuIds.option4]: projectsRef
    }

    refById[section].current.scrollIntoView()
  }

  return (
    <main className='homepage'>
      <Home passedRef={homeRef} handleSectionChange={handleSectionChange} />
      <LateralContact showLateralContact={!inView} />
      <WithHeader showHeader={!inView} handleSectionChange={handleSectionChange} activeSection={activeSection}>
        <InView threshold={0.25} onChange={(inView) => inView && setActiveSection(menuIds.option1)}>
          <About passedRef={aboutRef} />
        </InView>
        <InView threshold={0.25} onChange={(inView) => inView && setActiveSection(menuIds.option2)}>
          <Experience passedRef={experienceRef} />
        </InView>
        <InView threshold={0.1} onChange={(inView) => inView && setActiveSection(menuIds.option3)}>
          <Skills passedRef={skillsRef} />
        </InView>
        <InView threshold={0.1} onChange={(inView) => inView && setActiveSection(menuIds.option4)}>
          <Projects passedRef={projectsRef} />
        </InView>
      </WithHeader>
    </main>
  )
}

export default HomePage
