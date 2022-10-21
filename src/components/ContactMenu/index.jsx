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
import content from '../../content/contactMenu'
import './ContactMenu.scss'

const ContactMenu = ({ showContactMenu, fromMobile }) => {
  const { phone, email, linkedin, github } = content
  const [hoveredContact, setHoveredContact] = useState('')

  return (
    <div className={`contact-menu ${showContactMenu && 'active'} ${fromMobile && 'mobile'}`}>
      <NormalImage src={verticalPoints} className="mb-5 xl:block hidden" />
      <a onMouseEnter={() => setHoveredContact('phone')} onMouseLeave={() => setHoveredContact('')} href={`tel:${phone}`} className="contact-item">
        <NormalImage src={hoveredContact === 'phone' ? phoneHoverImg : phoneImg} />
      </a>
      <a onMouseEnter={() => setHoveredContact('email')} onMouseLeave={() => setHoveredContact('')} href={`mailto:${email}`} className="contact-item">
        <NormalImage src={hoveredContact === 'email' ? emailHoverImg : emailImg} />
      </a>
      <a onMouseEnter={() => setHoveredContact('linkedin')} onMouseLeave={() => setHoveredContact('')} href={linkedin} className="contact-item" target="_blank">
        <NormalImage src={hoveredContact === 'linkedin' ? linkedinHoverImg : linkedinImg} />
      </a>
      <a onMouseEnter={() => setHoveredContact('github')} onMouseLeave={() => setHoveredContact('')} href={github} className="contact-item" target="_blank">
        <NormalImage src={hoveredContact === 'github' ? githubHoverImg : githubImg} />
      </a>
    </div>
  )
}

export default ContactMenu
