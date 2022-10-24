import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import carolinaCompressed from '../../assets/pages/Projects/carolinaCompress.jpg'
import './Image.scss'

const Image = ({ src, compressedSrc, alt, width, height, lazyLoad }) => {
  if (lazyLoad) return (
    <LazyLoadImage src={src} alt={alt} style={{ objectFit: 'cover' }} placeholderSrc={compressedSrc} effect="blur" width={width} height={height} />
  )

  return (
    <img src={src} alt={alt} style={{ objectFit: 'cover' }} width={width} height={height} />
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

