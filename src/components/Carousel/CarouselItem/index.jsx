import React from 'react'
import { NormalImage } from '../../Image'
import './CarouselItem.scss'

const CarouselItem = ({ item, i }) => {
  const { title, img, description } = item

  return (
    <div className={`carousel-item ${i === 1 && 'active'}`} style={{ marginRight: i === 0 ? '-50px' : '0', marginLeft: i === 2 ? '-50px' : '0' }}>
      <div>
        <NormalImage src={img} alt={title} />
        <span className='color-blue title'>{title}</span>
        <p className='description'>{description}</p>
      </div>
    </div>
  )
}

export default CarouselItem
