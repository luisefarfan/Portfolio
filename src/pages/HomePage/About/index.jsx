import React, { useContext } from 'react'
import { FadeAnimation as Fade } from '../../../components/Animation'
import StrokeText from '../../../components/StrokeText'
import { Title } from '../../../components/Title'
import aboutContent from '../../../content/about'
import { LanguageContext } from '../../../content/context/LanguageContext'
import icon from '../../../assets/pages/About/aboutIcon.svg'
import aboutMeImage from '../../../assets/pages/About/aboutMeImage.jpg'
import aboutMeImageCompressed from '../../../assets/pages/About/aboutMeImageCompressed.jpg'
import { NormalImage, RoundedImage } from '../../../components/Image'
import { menuIds } from '../../../content/home'
import './About.scss'

const About = ({ passedRef }) => {
  const { lang } = useContext(LanguageContext)

  const { title1, title2, content } = aboutContent[lang]

  return (
    <section ref={passedRef} className='about-section' id={menuIds.option1}>
      <Fade triggerOnce>
        <div className='container'>
          <div className='grid lg:grid-cols-2 grid-cols-1 items-center xl:gap-20 lg:gap-8 gap-8'>
            <RoundedImage lazyLoad compressedSrc={aboutMeImageCompressed} src={aboutMeImage} className="lg:w-full md:w-8/12 w-full" />
            <div className="flex flex-col justify-center">
              <div className="flex flex-wrap items-center">
                <Title level="h2" className="flex flex-wrap">
                  <span className='color-blue'>{title1}</span><StrokeText color={'blue'}>{title2}</StrokeText>
                </Title>
                <NormalImage src={icon} alt={`${title1} ${title2}`} className="md:ml-5 ml-4 md:w-20 w-12" />
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
