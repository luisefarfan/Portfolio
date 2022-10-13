import React from 'react'
import CarouselItem from './CarouselItem'
import { NormalImage } from '../Image'
import buttonRight from '../../assets/components/Carousel/buttonRight.svg'
import buttonLeft from '../../assets/components/Carousel/buttonLeft.svg'
import './Carousel.scss'

const Carousel = ({ items }) => {
  return (
    <div className='carousel'>
      <div className='carousel-items-container'>
        {items.map((item, i) => <CarouselItem i={i} item={item} />)}
      </div>
      <div className='control-container'>
        <button type='button'>
          <NormalImage src={buttonLeft} />
        </button>
        <button type='button'>
          <NormalImage src={buttonRight} />
        </button>
      </div>
    </div>
  )
}

export default Carousel
