import React from 'react'
import './Image.scss'

const Image = ({ src, alt, width, height, lazyLoad }) => {
  const props = {
    src,
    alt,
    style: { objectFit: 'cover' },
    width,
    height
  }
  if (lazyLoad) return (
    <img loading="lazy" {...props} />
  )

  return (
    <img {...props} />
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

