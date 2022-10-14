import React, { useContext } from 'react'
import { Zoom, Fade, AttentionSeeker, Slide } from 'react-awesome-reveal'
import ExperienceItem from '../../../components/ExperienceItem'
import { NormalImage } from '../../../components/Image'
import StrokeText from '../../../components/StrokeText'
import { Title } from '../../../components/Title'
import { LanguageContext } from '../../../content/context/LanguageContext'
import experienceContent from '../../../content/experience'
import { menuIds } from '../../../content/home'
import bigIcon from '../../../assets/pages/Experience/bigIcon.svg'
import './Experience.scss'

const Experience = ({ passedRef }) => {
  const { lang } = useContext(LanguageContext)

  const { title, text, experiences } = experienceContent[lang]

  return (
    <section id={menuIds.option2} ref={passedRef} className="experience-section">
      <div className='container'>
        <Zoom triggerOnce>
          <div>
            <Title level="h2">
              <StrokeText color={'blue'}>{title}</StrokeText>
            </Title>
            {/* <p className='lg:w-8/12 w-10/12'>{text}</p> */}
          </div>
        </Zoom>
      </div>

      <div className='container mt-20'>
        <div className='grid lg:grid-cols-2 grid-cols-1'>
          <div className='flex justify-center items-center mb-16 lg:mb-0'>
            <Fade delay={500} triggerOnce>
              <NormalImage src={bigIcon} />
            </Fade>
          </div>
          <div className='flex flex-col'>
            {experiences.map((experience, index) => (
              <AttentionSeeker effect='pulse' cascade>
                <div className='mb-5' key={index}>
                  <ExperienceItem experience={experience} />
                </div>
              </AttentionSeeker>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience