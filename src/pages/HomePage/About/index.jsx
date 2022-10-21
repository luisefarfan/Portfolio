import React, { useContext } from 'react'
import { Fade } from 'react-awesome-reveal'
import StrokeText from '../../../components/StrokeText'
import { Title } from '../../../components/Title'
import aboutContent from '../../../content/about'
import { LanguageContext } from '../../../content/context/LanguageContext'
import icon from '../../../assets/pages/About/aboutIcon.svg'
import aboutMeImage from '../../../assets/pages/About/aboutMeImage.jpg'
import { NormalImage, RoundedImage } from '../../../components/Image'
import { menuIds } from '../../../content/home'
import './About.scss'

const About = ({ passedRef }) => {
  const { lang } = useContext(LanguageContext)

  const { title1, title2, content } = aboutContent[lang]

  return (
    <section ref={passedRef} className='about-section' id={menuIds.option1}>
      <Fade direction='left' triggerOnce>
        <div className='container'>
          <div className='grid lg:grid-cols-2 grid-cols-1 items-center xl:gap-20 lg:gap-8 gap-8'>
            <RoundedImage src={aboutMeImage} className="lg:w-full md:w-8/12 w-full" />
            <div className="flex flex-col justify-center">
              <div className="flex items-center">
                <Title level="h2">
                  <span className='color-blue'>{title1}</span><StrokeText color={'blue'}>{title2}</StrokeText>
                </Title>
                <NormalImage src={icon} alt={`${title1} ${title2}`} className="ml-5 md:w-20 w-16" />
              </div>
              <p className='mt-10'>{content}</p>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  )
}

export default About
