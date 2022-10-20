import React from 'react'
import { NormalImage } from '../Image'
import phoneImg from '../../assets/components/ContactMenu/phone.svg'
import emailImg from '../../assets/components/ContactMenu/email.svg'
import linkedinImg from '../../assets/components/ContactMenu/linkedin.svg'
import githubImg from '../../assets/components/ContactMenu/github.svg'
import verticalPoints from '../../assets/components/ContactMenu/verticalPoints.svg'
import content from '../../content/contactMenu'
import './ContactMenu.scss'

const ContactMenu = ({ showContactMenu, fromMobile }) => {
  const { phone, email, linkedin, github } = content
  return (
    <div className={`contact-menu ${showContactMenu && 'active'} ${fromMobile && 'mobile'}`}>
      <NormalImage src={verticalPoints} className="mb-5 lg:block hidden" />
      <a href={`tel:${phone}`} className="contact-item">
        <NormalImage src={phoneImg} />
      </a>
      <a href={`mailto:${email}`} className="contact-item">
        <NormalImage src={emailImg} />
      </a>
      <a href={linkedin} className="contact-item" target="_blank">
        <NormalImage src={linkedinImg} />
      </a>
      <a href={github} className="contact-item" target="_blank">
        <NormalImage src={githubImg} />
      </a>
    </div>
  )
}

export default ContactMenu
