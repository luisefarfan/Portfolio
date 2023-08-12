import React, { useRef, useState } from 'react'
import { InView, useInView } from 'react-intersection-observer'
import WithHeader from '../../components/Header/WithHeader'
import ContactMenu from '../../components/ContactMenu'
import { menuIds } from '../../content/home'
import About from './About'
import Experience from './Experience'
import Home from './Home'
import Projects from './Projects'
import Skills from './Skills'
import './HomePage.scss'
import Contact from './Contact'

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('')

  const aboutRef = useRef()
  const experienceRef = useRef()
  const skillsRef = useRef()
  const projectsRef = useRef()
  const contactRef = useRef()

  const [homeRef, inView, entry] = useInView({
    threshold: 0.75,
    initialInView: true
  })

  const handleSectionChange = (section) => {
    const refById = {
      [menuIds.home]: homeRef,
      [menuIds.option1]: aboutRef,
      [menuIds.option2]: experienceRef,
      [menuIds.option3]: projectsRef,
      [menuIds.option4]: skillsRef,
      [menuIds.option5]: contactRef
    }

    refById[section].current.scrollIntoView()
  }

  return (
    <main className='homepage'>
      <Home passedRef={homeRef} handleSectionChange={handleSectionChange} />
      <ContactMenu showContactMenu={!inView} />
      <WithHeader showHeader={!inView} handleSectionChange={handleSectionChange} activeSection={activeSection}>
        <InView threshold={0.25} onChange={(inView) => inView && setActiveSection(menuIds.option1)}>
          <About passedRef={aboutRef} />
        </InView>
        <InView threshold={0.25} onChange={(inView) => inView && setActiveSection(menuIds.option2)}>
          <Experience passedRef={experienceRef} />
        </InView>
        <InView threshold={0.1} onChange={(inView) => inView && setActiveSection(menuIds.option3)}>
          <Projects passedRef={projectsRef} />
        </InView>
        <InView threshold={0.1} onChange={(inView) => inView && setActiveSection(menuIds.option4)}>
          <Skills passedRef={skillsRef} />
        </InView>
        <InView threshold={0.1} onChange={(inView) => inView && setActiveSection(menuIds.option5)}>
          <Contact passedRef={contactRef} />
        </InView>
      </WithHeader>
    </main>
  )
}

export default HomePage
