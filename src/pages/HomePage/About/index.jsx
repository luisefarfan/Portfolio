import React, { useContext } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import StrokeText from '../../../components/StrokeText'
import { Title } from '../../../components/Title'
import aboutContent from '../../../content/about'
import { LanguageContext } from '../../../content/context/LanguageContext'
import icon from '../../../assets/pages/About/aboutIcon.svg'
import aboutMeImage from '../../../assets/pages/About/aboutMeImage.jpg'
import './About.scss'
import { NormalImage, RoundedImage } from '../../../components/Image'
import { menuIds } from '../../../content/home'

const About = ({ passedRef }) => {
  const { lang } = useContext(LanguageContext)

  const { title1, title2, content } = aboutContent[lang]

  return (
    <section ref={passedRef} className='about-section' id={menuIds.option1}>
      <AnimationOnScroll animateIn='animate__fadeIn' animateOnce={true}>
        <div className='container'>
          <div className='grid lg:grid-cols-2 grid-cols-1'>
            <div className="p-10">
              <RoundedImage src={aboutMeImage} />
            </div>
            <div className="flex flex-col justify-center p-10">
              <div className="flex items-center">
                <Title level="h2">
                  <span className='color-blue'>{title1}</span><StrokeText color={'blue'}>{title2}</StrokeText>
                </Title>
                <NormalImage src={icon} alt={`${title1} ${title2}`} className="ml-5" width={80} />
              </div>
              <p className='mt-10'>{content}</p>
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </section>
  )
}

export default About
