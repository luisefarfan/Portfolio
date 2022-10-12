import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import StrokeText from '../StrokeText'
import { Title } from '../Title'
import './ExperienceItem.scss'

const ExperienceItem = ({ experience }) => {
  const { company, description, img, link } = experience

  return (
    <AnimationOnScroll animateIn='animate__bounceInLeft' animateOnce={true}>
      <div className='experience-item-container'>
        <Title level={'h4'} className="color-blue">{company}</Title>
        <p>{description}</p>
      </div>
    </AnimationOnScroll>
  )
}

export default ExperienceItem
