import React, { useEffect, useRef } from 'react'
import Button from '../../../components/Button'
import HomeMenu from '../../../components/HomeMenu'
import StrokeText from '../../../components/StrokeText'
import { Title } from '../../../components/Title'
import { clearAnimations } from '../../../utils/animations'
import './Home.scss'

const Home = () => {
  const centerTitleRef = useRef()
  const buttonContainerRef = useRef()

  useEffect(() => {
    clearAnimations([buttonContainerRef])
  }, [])

  return (
    <section className='home-section' id='home'>
      <div ref={centerTitleRef} className='title-container'>
        <Title level="h1" className='animate__animated animate__fadeInLeft'><span className='color-blue'>Luis</span><StrokeText color="blue">Farfan</StrokeText></Title>
      </div>
      <HomeMenu centerTitleRef={centerTitleRef} />
      <div ref={buttonContainerRef} className='animate__animated animate__fadeInUp animate__delay-1s cv-button-container'>
        <Button text="Ver Curriculum" color="blue" className='w-fit mb-5' />
        {/* <input type="radio" /> */}
      </div>
    </section>
  )
}

export default Home
