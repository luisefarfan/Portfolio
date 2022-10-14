import { createContext, useReducer } from "react";
import { langReducer } from "./langReducer";

export const LanguageContext = createContext()

const init = () => {
  const lang = sessionStorage.getItem('lang')

  return {
    lang: lang || 'en'
  }
}

const initialState = {
  lang: 'en'
}

export const LanguageProvider = ({ children }) => {
  const [langState, dispatch] = useReducer(langReducer, initialState, init)

  const changeLang = (lang) => {
    const action = {
      type: '[lang] set',
      payload: lang
    }

    dispatch(action)

    sessionStorage.setItem('lang', lang)
  }

  return (
    <LanguageContext.Provider value={{ ...langState, changeLang }}>
      {children}
    </LanguageContext.Provider>
  )
}
