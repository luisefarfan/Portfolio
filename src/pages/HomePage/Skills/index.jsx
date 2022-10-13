import React, { useContext } from 'react'
import { Zoom } from 'react-awesome-reveal'
import Carousel from '../../../components/Carousel'
import StrokeText from '../../../components/StrokeText'
import { Title } from '../../../components/Title'
import { LanguageContext } from '../../../content/context/LanguageContext'
import skillsContent from '../../../content/skills'
import './Skills.scss'

const Skills = ({ passedRef }) => {
  const { lang } = useContext(LanguageContext)
  const { title1, title2, text, techSkills, softSkills } = skillsContent[lang]

  return (
    <section ref={passedRef} className="skills-section">
      <div className='container'>
        <Zoom triggerOnce>
          <div className='text-center flex flex-col items-center'>
            <Title level="h2" className='two-line-title'>
              <span className='color-blue'>{title1}</span><br />
              <StrokeText color={'blue'}>{title2}</StrokeText>
            </Title>
            <p className='mt-10 lg:w-3/4'>{text}</p>
          </div>
        </Zoom>

        <div className='mt-20 text-center'>
          <Carousel items={techSkills} />
        </div>
      </div>
    </section>
  )
}

export default Skills
