import React from 'react'
import './Button.scss'

const Button = ({ color, text, className = '', onClick, type = 'button' }) => {
  return (
    <button type={type} className={`btn ${color} ${className}`} onClick={onClick}>{text}</button>
  )
}

export default Button
