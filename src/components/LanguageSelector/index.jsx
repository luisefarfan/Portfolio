import React, { useContext } from 'react'
import { LanguageContext } from '../../content/context/LanguageContext'
import Switch from '../Switch'

const staticContent = {
  en: {
    en: 'English',
    es: 'Spanish'
  },
  es: {
    en: 'Inglés',
    es: 'Español'
  }
}

const LanguageSelector = () => {
  const { changeLang, lang } = useContext(LanguageContext)

  const handleLangChange = ({ target }) => {
    const { value } = target
    changeLang(value)
  }

  return (
    <Switch
      choices={[{ label: staticContent[lang].en, value: 'en' }, { label: staticContent[lang].es, value: 'es' }]}
      initialChoice={lang}
      onChange={handleLangChange}
    />
  )
}

export default LanguageSelector
