import React from 'react'
import { LanguageProvider } from './language/context/LanguageContext'
import { AppRouter } from './router/AppRouter'

export const App = () => {
  return (
    <LanguageProvider>
      <AppRouter />
    </LanguageProvider>
  )
}
