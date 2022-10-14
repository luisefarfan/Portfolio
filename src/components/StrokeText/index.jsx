import React from 'react'
import './StrokeText.scss'

const StrokeText = ({ color, children }) => {
  return (
    <span className={`stroke-text ${color}`}>{children}</span>
  )
}

export default StrokeText
