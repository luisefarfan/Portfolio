import React, { useRef } from 'react'
import './Button.scss'

const Button = ({ color, text, className = '', onClick = () => { }, type = 'button', href = '' }) => {
  const ref = useRef()

  const handleAnchorClick = (e) => {
    ref.current.click()
    onClick(e)
  }

  if (href !== '') {
    return (
      <button type={type} className={`btn ${color} ${className}`} onClick={handleAnchorClick}>
        <a ref={ref} target="_blank" href={href}>{text}</a>
      </button>
    )
  }

  return (
    <button type={type} className={`btn ${color} ${className}`} onClick={onClick}>{text}</button>
  )
}

export default Button
