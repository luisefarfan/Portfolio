import React, { useContext } from 'react'
import { Fade } from 'react-awesome-reveal'
import ContactMenu from '../../../components/ContactMenu'
import StrokeText from '../../../components/StrokeText'
import { Title } from '../../../components/Title'
import contactContent from '../../../content/contact'
import { LanguageContext } from '../../../content/context/LanguageContext'
import './Contact.scss'

const Contact = ({ passedRef }) => {
  const { lang } = useContext(LanguageContext)
  const { title1, title2 } = contactContent[lang]

  return (
    <section ref={passedRef} className="contact-section">
      <div className='container'>
        <Fade triggerOnce>
          <div className='text-center flex justify-center'>
            <Title level="h2" className='two-line-title'>
              <span className='color-blue'>{title1}</span><br />
              <StrokeText color={'blue'}>{title2}</StrokeText>
            </Title>
          </div>
        </Fade>
        <Fade triggerOnce>
          <ContactMenu fromContact />
        </Fade>
      </div>
    </section>
  )
}

export default Contact
