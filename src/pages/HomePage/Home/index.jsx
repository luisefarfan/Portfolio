import React, { useContext, useEffect, useRef } from 'react'
import Button from '../../../components/Button'
import HomeMenu from '../../../components/HomeMenu'
import LanguageSelector from '../../../components/LanguageSelector'
import StrokeText from '../../../components/StrokeText'
import { Title } from '../../../components/Title'
import { LanguageContext } from '../../../content/context/LanguageContext'
import homeContent from '../../../content/home'
import { clearAnimations } from '../../../utils/animations'
import './Home.scss'

const Home = () => {
  const { lang } = useContext(LanguageContext)
  const centerTitleRef = useRef()
  const buttonContainerRef = useRef()

  const { menu, cv } = homeContent[lang]

  useEffect(() => {
    clearAnimations([buttonContainerRef])
  }, [])

  return (
    <section className='home-section' id='home'>
      <div ref={centerTitleRef} className='title-container'>
        <Title level="h1" className='animate__animated animate__fadeInLeft'>
          <span className='color-blue'>Luis</span><StrokeText color="blue">Farfán</StrokeText>
        </Title>
      </div>
      <HomeMenu menuContent={menu} centerTitleRef={centerTitleRef} />
      <div ref={buttonContainerRef} className='animate__animated animate__fadeInUp animate__delay-1s cv-button-container'>
        <Button text={cv} color="blue" className='w-fit md:mr-5 mb-5 md:mb-0' />
        <LanguageSelector />
      </div>
    </section>
  )
}

export default Home
