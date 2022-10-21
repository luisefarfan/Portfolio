import React, { useState } from 'react'
import { NormalImage } from '../Image'
import phoneImg from '../../assets/components/ContactMenu/phone.svg'
import phoneHoverImg from '../../assets/components/ContactMenu/phoneHover.svg'
import emailImg from '../../assets/components/ContactMenu/email.svg'
import emailHoverImg from '../../assets/components/ContactMenu/emailHover.svg'
import linkedinImg from '../../assets/components/ContactMenu/linkedin.svg'
import linkedinHoverImg from '../../assets/components/ContactMenu/linkedinHover.svg'
import githubImg from '../../assets/components/ContactMenu/github.svg'
import githubHoverImg from '../../assets/components/ContactMenu/githubHover.svg'
import verticalPoints from '../../assets/components/ContactMenu/verticalPoints.svg'
import horizontalPoints from '../../assets/components/ContactMenu/horizontalPoints.svg'
import content from '../../content/contactMenu'
import './ContactMenu.scss'

const ContactMenu = ({ showContactMenu, fromMobile, fromContact }) => {
  const { phone, email, linkedin, github } = content
  const [hoveredContact, setHoveredContact] = useState('')

  return (
    <>
      {
        fromContact && <div className='flex justify-center mt-10'>
          <NormalImage src={horizontalPoints} className="mb-5" />
        </div>
      }
      <div className={`contact-menu ${showContactMenu && 'active'} ${fromMobile && 'mobile'} ${fromContact && 'contact'}`}>
        {!fromContact && <NormalImage src={verticalPoints} className="mb-5 xl:block hidden" />}
        <a onMouseEnter={() => setHoveredContact(phone.label)} onMouseLeave={() => setHoveredContact('')} href={`tel:${phone.value}`} className="contact-item">
          <NormalImage src={hoveredContact === phone.label ? phoneHoverImg : phoneImg} alt={`${phone.label}: ${phone.value}`} />
        </a>
        <a onMouseEnter={() => setHoveredContact(email.label)} onMouseLeave={() => setHoveredContact('')} href={`mailto:${email.value}`} className="contact-item">
          <NormalImage src={hoveredContact === email.label ? emailHoverImg : emailImg} alt={`${email.label}: ${email.value}`} />
        </a>
        <a onMouseEnter={() => setHoveredContact(linkedin.label)} onMouseLeave={() => setHoveredContact('')} href={linkedin.value} className="contact-item" target="_blank">
          <NormalImage src={hoveredContact === linkedin.label ? linkedinHoverImg : linkedinImg} alt={`${linkedin.label}: ${linkedin.value}`} />
        </a>
        <a onMouseEnter={() => setHoveredContact(github.label)} onMouseLeave={() => setHoveredContact('')} href={github.value} className="contact-item" target="_blank">
          <NormalImage src={hoveredContact === github.label ? githubHoverImg : githubImg} alt={`${github.label}: ${github.value}`} />
        </a>
      </div>
    </>
  )
}

export default ContactMenu
