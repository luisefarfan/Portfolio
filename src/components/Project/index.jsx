import React from 'react'
import projectsContent from '../../content/projects'
import Button from '../Button'
import { NormalImage } from '../Image'
import { Title } from '../Title'
import './Project.scss'

const Project = ({ project, lang }) => {
  const { title, subtitle, description, url, img } = project
  const { seeMore } = projectsContent[lang]

  return (
    <div className='grid lg:items-center lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-8'>
      <NormalImage lazyLoad src={img} alt={title} className="lg:block hidden" />
      <div className='project-info'>
        <Title level='h3' className='color-blue'>{title}</Title>
        <Title level='h5' className='color-white'>{subtitle}</Title>
        <p>{description}</p>

        {url && <Button href={url} text={seeMore} color="blue" className='w-fit mt-5' />}
      </div>
      <NormalImage lazyLoad src={img} alt={title} className="block lg:hidden" />
    </div>
  )
}

export default Project
