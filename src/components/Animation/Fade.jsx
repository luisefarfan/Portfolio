import React from 'react'
import { Fade } from 'react-awesome-reveal'

export const FadeAnimation = ({ children, ...props }) => {
  return (
    <Fade duration={500} {...props}>
      {children}
    </Fade>
  )
}
