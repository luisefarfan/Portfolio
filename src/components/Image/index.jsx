import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import './Image.scss'

const Image = ({ src, alt, width, height }) => {
  return (
    <LazyLoadImage src={src} alt={alt} style={{ objectFit: 'cover' }} width={width} height={height} />
  )
}

export const NormalImage = (props) => {
  return (
    <div className={props.className} style={props.style}>
      <Image {...props} />
    </div>
  )
}

export const RoundedImage = (props) => {
  return (
    <div className={`rounded-image ${props.className}`}>
      <Image {...props} />
    </div>
  )
}

