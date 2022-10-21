import React from 'react'
import { menuIds } from '../../content/home'
import Button from '../Button'
import ContactMenu from '../ContactMenu'
import LanguageSelector from '../LanguageSelector'
import './Header.scss'

const MobileMenu = ({ openMenu, activeSection, changeSection, menu, cv, lang }) => {
  return (
    <div className={`sm-header-menu ${openMenu && 'open'}`}>
      <ul className='mb-10'>
        <li onClick={() => changeSection(menuIds.option1)} className={activeSection === menuIds.option1 ? 'active' : ''}>{menu.option1}</li>
        <li onClick={() => changeSection(menuIds.option2)} className={activeSection === menuIds.option2 ? 'active' : ''}>{menu.option2}</li>
        <li onClick={() => changeSection(menuIds.option3)} className={activeSection === menuIds.option3 ? 'active' : ''}>{menu.option3}</li>
        <li onClick={() => changeSection(menuIds.option4)} className={activeSection === menuIds.option4 ? 'active' : ''}>{menu.option4}</li>
        <li onClick={() => changeSection(menuIds.option5)} className={activeSection === menuIds.option5 ? 'active' : ''}>{menu.option5}</li>
      </ul>
      <div className='flex flex-col justify-around items-center mb-5'>
        <Button href={`https://luis-farfan-cv.s3.amazonaws.com/cv-${lang}.pdf`} text={cv} color="blue" className='w-fit mb-3' />
        <LanguageSelector />
      </div>
      <ContactMenu fromMobile />
    </div>
  )
}

export default MobileMenu
