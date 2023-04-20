import React, { useContext, useRef } from 'react'
import { Fade } from 'react-awesome-reveal'
import Button from '../../../components/Button'
import HomeMenu from '../../../components/HomeMenu'
import LanguageSelector from '../../../components/LanguageSelector'
import StrokeText from '../../../components/StrokeText'
import { Title } from '../../../components/Title'
import { LanguageContext } from '../../../content/context/LanguageContext'
import homeContent, { menuIds } from '../../../content/home'
import './Home.scss'

const Home = ({ passedRef, handleSectionChange }) => {
  const { lang } = useContext(LanguageContext)
  const centerTitleRef = useRef()

  const { menu, cv } = homeContent[lang]

  return (
    <section ref={passedRef} className='home-section' id={menuIds.home}>
      <HomeMenu handleSectionChange={handleSectionChange} menuContent={menu} centerTitleRef={centerTitleRef} />
      <div ref={centerTitleRef} className='title-container'>
        <Fade direction='left' triggerOnce>
          <Title level="h1">
            <span className='color-blue'>Luis</span><StrokeText color="blue">Farfán</StrokeText>
          </Title>
        </Fade>
      </div>
      <div className='cv-button-container'>
        <Fade direction='up' delay={500} triggerOnce>
          {/* <Button href={`https://luis-farfan-cv.s3.amazonaws.com/cv-${lang}.pdf`} text={cv} color="blue" className='w-fit lg:mr-5 lg:mb-0 mb-5' /> */}
          {/* Temporary, while I create the spanish CV */}
          <Button href={`https://luis-farfan-cv.s3.amazonaws.com/cv-en.pdf`} text={cv} color="blue" className='w-fit lg:mr-5 lg:mb-0 mb-5' />
          <LanguageSelector />
        </Fade>
      </div>
    </section>
  )
}

export default Home
