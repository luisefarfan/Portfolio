import React, { useContext } from 'react'
import { LanguageContext } from '../../content/context/LanguageContext'
import homeContent, { menuIds } from '../../content/home'
import Button from '../Button'
import LanguageSelector from '../LanguageSelector'
import StrokeText from '../StrokeText'
import './Header.scss'

const Header = ({ activeSection, handleSectionChange }) => {
  const { lang } = useContext(LanguageContext)
  const { menu, cv } = homeContent[lang]

  return (
    <header className='header'>
      <div className='text-4xl'>
        <span>Luis</span><StrokeText color={'white'}>Farfán</StrokeText>
      </div>
      <div className='header-menu'>
        <ul>
          <li onClick={() => handleSectionChange(menuIds.home)} className={activeSection === menuIds.home && 'active'}>{menu.home}</li>
          <li onClick={() => handleSectionChange(menuIds.option1)} className={activeSection === menuIds.option1 && 'active'}>{menu.option1}</li>
          <li onClick={() => handleSectionChange(menuIds.option2)} className={activeSection === menuIds.option2 && 'active'}>{menu.option2}</li>
          <li onClick={() => handleSectionChange(menuIds.option3)} className={activeSection === menuIds.option3 && 'active'}>{menu.option3}</li>
          <li onClick={() => handleSectionChange(menuIds.option4)} className={activeSection === menuIds.option4 && 'active'}>{menu.option4}</li>
        </ul>
      </div>
      <div className='lang-cv-container'>
        <Button text={cv} color="blue" className='w-fit md:mr-5 mb-5 md:mb-0' />
        <LanguageSelector />
      </div>
    </header>
  )
}

export default Header
