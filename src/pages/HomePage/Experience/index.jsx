import React, { useContext } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import ExperienceItem from '../../../components/ExperienceItem'
import { NormalImage } from '../../../components/Image'
import StrokeText from '../../../components/StrokeText'
import { Title } from '../../../components/Title'
import { LanguageContext } from '../../../content/context/LanguageContext'
import experienceContent from '../../../content/experience'
import { menuIds } from '../../../content/home'
import scrollImage from '../../../assets/pages/Experience/scrollImage.svg'
import bigIcon from '../../../assets/pages/Experience/bigIcon.svg'
import './Experience.scss'

const Experience = ({ passedRef }) => {
  const { lang } = useContext(LanguageContext)

  const { title, text, experiences } = experienceContent[lang]
  debugger

  return (
    <section id={menuIds.option2} ref={passedRef} className="experience-section">
      <div className='container'>
        <div className="flex items-center">
          <AnimationOnScroll animateIn='animate__bounceInLeft' animateOnce={true}>
            <div>
              <Title level="h2">
                <StrokeText color={'blue'}>{title}</StrokeText>
              </Title>
              <p className='w-6/12'>{text}</p>
            </div>
          </AnimationOnScroll>
          <NormalImage src={scrollImage} alt="scroll" className="animate-pulse" width="40" />
        </div>
      </div>

      <div className='container mt-20'>
        <div className='grid lg:grid-cols-2 grid-cols-1'>
          <div className='flex justify-center items-center'>
            <NormalImage src={bigIcon} />
          </div>
          <div className='flex flex-col'>
            {experiences.map((experience, index) => (
              <div className='mb-5' key={index}>
                <ExperienceItem experience={experience} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
