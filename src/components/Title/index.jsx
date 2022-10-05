import React from 'react'
import './Title.scss'

export const Title = ({ level, className, children }) => {
  const headings = {
    h1: <h1 className={`h1 ${className}`}>{children}</h1>,
    h2: <h2 className={`h2 ${className}`}>{children}</h2>,
    h3: <h3 className={`h3 ${className}`}>{children}</h3>,
    h4: <h4 className={`h4 ${className}`}>{children}</h4>,
    h5: <h5 className={`h5 ${className}`}>{children}</h5>,
    h6: <h6 className={`h6 ${className}`}>{children}</h6>
  }

  return headings[level]
}
