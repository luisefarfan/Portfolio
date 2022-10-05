import React, { useRef } from 'react'
import HomeMenu from '../../../components/HomeMenu'
import { Title } from '../../../components/Title'
import './Home.scss'

const Home = () => {
  const centerTitleRef = useRef()

  return (
    <section className='home-section'>
      <div ref={centerTitleRef} className='title-container'>
        <Title level="h1" className='animate__animated animate__fadeInLeft'><span className='color-blue'>Luis</span><span className='stroke-text blue'>Farfan</span></Title>
      </div>
      <HomeMenu centerTitleRef={centerTitleRef} />
    </section>
  )
}

export default Home
