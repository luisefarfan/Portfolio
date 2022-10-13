import React from 'react'
import { Slide } from 'react-awesome-reveal'
import { Title } from '../Title'
import './ExperienceItem.scss'

const ExperienceItem = ({ experience }) => {
  const { company, description, img, link } = experience

  return (
    <Slide direction='right' triggerOnce>
      <div className='experience-item-container'>
        <Title level={'h4'} className="color-blue">{company}</Title>
        <p>{description}</p>
      </div>
    </Slide>
  )
}

export default ExperienceItem
