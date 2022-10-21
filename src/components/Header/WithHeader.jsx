import React from 'react'
import Header from '.'

const WithHeader = ({ children, activeSection, handleSectionChange, showHeader }) => {
  return (
    <div className='full-container'>
      <Header showHeader={showHeader} handleSectionChange={handleSectionChange} activeSection={activeSection} />
      {children}
    </div>
  )
}

export default WithHeader
