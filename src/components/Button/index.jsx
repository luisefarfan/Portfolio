import React from 'react'
import './Button.scss'

const Button = ({ color, text, className = '', onClick, type = 'button', href = '' }) => {
  if (href !== '') {
    return (
      <button className={`btn ${color} ${className}`} onClick={onClick}>
        <a target="_blank" href={href}>{text}</a>
      </button>
    )
  }

  return (
    <button type={type} className={`btn ${color} ${className}`} onClick={onClick}>{text}</button>
  )
}

export default Button
