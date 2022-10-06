import React, { useContext, useEffect, useRef } from 'react'
import Button from '../../../components/Button'
import HomeMenu from '../../../components/HomeMenu'
import LanguageSelector from '../../../components/LanguageSelector'
import StrokeText from '../../../components/StrokeText'
import { Title } from '../../../components/Title'
import { LanguageContext } from '../../../language/context/LanguageContext'
import messages from '../../../language/messages'
import { clearAnimations } from '../../../utils/animations'
import './Home.scss'

const Home = () => {
  const { lang } = useContext(LanguageContext)
  const centerTitleRef = useRef()
  const buttonContainerRef = useRef()

  useEffect(() => {
    clearAnimations([buttonContainerRef])
  }, [])

  return (
    <section className='home-section' id='home'>
      <div ref={centerTitleRef} className='title-container'>
        <Title level="h1" className='animate__animated animate__fadeInLeft'><span className='color-blue'>Luis</span><StrokeText color="blue">Farfán</StrokeText></Title>
      </div>
      <HomeMenu lang={lang} centerTitleRef={centerTitleRef} />
      <div ref={buttonContainerRef} className='animate__animated animate__fadeInUp animate__delay-1s cv-button-container'>
        <Button text={messages[lang].home.cv} color="blue" className='w-fit mb-5' />
        <LanguageSelector />
      </div>
    </section>
  )
}

export default Home
