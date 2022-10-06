import React, { useContext } from 'react'
import { LanguageContext } from '../../language/context/LanguageContext'
import Switch from '../Switch'

const LanguageSelector = () => {
  const { changeLang, lang } = useContext(LanguageContext)

  const handleLangChange = ({ target }) => {
    const { value } = target
    changeLang(value)
  }

  return (
    <Switch
      choices={[{ label: 'English', value: 'en' }, { label: 'Spanish', value: 'es' }]}
      initialChoice={lang}
      onChange={handleLangChange}
    />
  )
}

export default LanguageSelector
