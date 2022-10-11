import React from 'react'
import Header from '.'

const WithHeader = ({ children, activeSection, handleSectionChange }) => {
  return (
    <>
      <Header handleSectionChange={handleSectionChange} activeSection={activeSection} />
      {children}
    </>
  )
}

export default WithHeader
