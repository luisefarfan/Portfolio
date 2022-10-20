import React, { useEffect } from 'react'
import { NormalImage } from '../Image'
import phoneImg from '../../assets/components/LateralContact/phone.svg'
import emailImg from '../../assets/components/LateralContact/email.svg'
import linkedinImg from '../../assets/components/LateralContact/linkedin.svg'
import githubImg from '../../assets/components/LateralContact/github.svg'
import verticalPoints from '../../assets/components/LateralContact/verticalPoints.svg'
import './LateralContact.scss'
import content from '../../content/lateralContact'

const LateralContact = ({ showLateralContact }) => {
  const { phone, email, linkedin, github } = content
  return (
    <div className={`lateral-contact ${showLateralContact && 'active'}`}>
      <NormalImage src={verticalPoints} className="mb-5" />
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

export default LateralContact
