import React from 'react'
import { Title } from '../Title'
import './ExperienceItem.scss'

const ExperienceItem = ({ experience }) => {
  const { company, description, img, link } = experience

  return (
    <div className='experience-item-container'>
      <Title level={'h4'} className="color-blue">{company}</Title>
      <p>{description}</p>
    </div>
  )
}

export default ExperienceItem
