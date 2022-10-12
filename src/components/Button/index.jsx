import React from 'react'
import './Button.scss'

const Button = ({ color, text, className = '', onClick, type = 'button', href = '' }) => {
  if (href !== '') return <a target="_blank" href={href} className={`btn ${color} ${className}`} onClick={onClick}>{text}</a>

  return (
    <button type={type} className={`btn ${color} ${className}`} onClick={onClick}>{text}</button>
  )
}

export default Button
