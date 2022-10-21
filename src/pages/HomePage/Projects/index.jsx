import React, { useContext } from 'react'
import StrokeText from '../../../components/StrokeText'
import { Title } from '../../../components/Title'
import { LanguageContext } from '../../../content/context/LanguageContext'
import projectsContent from '../../../content/projects'
import ArrowImage from '../../../assets/pages/Projects/scrollImage.svg'
import CodingImage from '../../../assets/pages/Projects/coding.svg'
import { NormalImage } from '../../../components/Image'
import Project from '../../../components/Project'
import { Fade } from 'react-awesome-reveal'
import './Projects.scss'

const Projects = ({ passedRef }) => {
  const { lang } = useContext(LanguageContext)

  const { title1, title2, text, projects } = projectsContent[lang]

  return (
    <section ref={passedRef} className='projects-section'>
      <div className="container">
        <Fade triggerOnce>
          <div className='flex justify-between'>
            <div>
              <div className='flex items-center mb-8'>
                <Title level="h2">
                  <span className='color-blue'>{title1}</span><StrokeText color={'blue'}>{title2}</StrokeText>
                </Title>
                <NormalImage src={CodingImage} className="ml-6 lg:w-20 w-16" />
              </div>
              <p>{text}</p>
            </div>
            <NormalImage src={ArrowImage} width={40} className='lg:block hidden animate-pulse' />
          </div>
        </Fade>

        <div className='flex flex-col mt-20'>
          {projects.map((project) => (
            <Fade direction='left' className='mb-10' triggerOnce key={project.title}>
              <Project project={project} lang={lang} />
            </Fade>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
