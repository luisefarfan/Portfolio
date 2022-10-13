import React, { useContext } from 'react'
import { AttentionSeeker, Bounce, Zoom } from 'react-awesome-reveal'
import Carousel from '../../../components/Carousel'
import CarouselItem from '../../../components/Carousel/CarouselItem'
import StrokeText from '../../../components/StrokeText'
import { Title } from '../../../components/Title'
import { LanguageContext } from '../../../content/context/LanguageContext'
import skillsContent from '../../../content/skills'
import './Skills.scss'

const Skills = ({ passedRef }) => {
  const { lang } = useContext(LanguageContext)
  const { title1, title2, text, techSkills, softSkills, techTitle, softTitle } = skillsContent[lang]

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

        {/* <div className='mt-20 text-center'> */}
        <div className='mt-20'>
          {/* <Carousel items={techSkills} /> */}

          <Title level={'h3'} className="mb-8">{techTitle}</Title>
          <div className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4'>
            <AttentionSeeker effect='pulse' cascade damping={0.25}>
              {techSkills.map((skill) => <CarouselItem key={skill.title} item={skill} />)}
            </AttentionSeeker>
          </div>

          <Title level={'h3'} className="mb-8 mt-20">{softTitle}</Title>
          <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
            <AttentionSeeker effect='pulse' cascade damping={0.25}>
              {softSkills.map((skill) => <CarouselItem key={skill.title} item={skill} />)}
            </AttentionSeeker>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
