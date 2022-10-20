import React from 'react'
import Header from '.'

const WithHeader = ({ children, activeSection, handleSectionChange, showHeader }) => {
  return (
    <div style={{ backgroundColor: 'var(--darkest-blue-color)', position: 'relative' }}>
      <Header showHeader={showHeader} handleSectionChange={handleSectionChange} activeSection={activeSection} />
      {children}
    </div>
  )
}

export default WithHeader
