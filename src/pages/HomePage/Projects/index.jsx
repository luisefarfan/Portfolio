import React, { useContext } from 'react'
import StrokeText from '../../../components/StrokeText'
import { Title } from '../../../components/Title'
import { LanguageContext } from '../../../content/context/LanguageContext'
import projectsContent from '../../../content/projects'
import ArrowImage from '../../../assets/pages/Projects/scrollImage.svg'
import './Projects.scss'
import { NormalImage } from '../../../components/Image'
import Project from '../../../components/Project'
import { Fade } from 'react-awesome-reveal'

const Projects = ({ passedRef }) => {
  const { lang } = useContext(LanguageContext)

  const { title1, title2, text, projects } = projectsContent[lang]

  return (
    <section ref={passedRef} className='projects-section'>
      <div className="container">
        <Fade triggerOnce>
          <div className='flex justify-between'>
            <div>
              <Title level="h2">
                <span className='color-blue'>{title1}</span><StrokeText color={'blue'}>{title2}</StrokeText>
              </Title>
              <p>{text}</p>
            </div>
            <NormalImage src={ArrowImage} width={40} className='lg:block hidden animate-pulse' />
          </div>
        </Fade>

        <div className='flex flex-col mt-20'>
          {projects.map((project) => (
            <Fade className='mb-10' triggerOnce>
              <Project project={project} lang={lang} />
            </Fade>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
