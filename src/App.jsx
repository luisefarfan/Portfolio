import React from 'react'
import { LanguageProvider } from './content/context/LanguageContext'
import { AppRouter } from './router/AppRouter'

export const App = () => {
  return (
    <LanguageProvider>
      <AppRouter />
    </LanguageProvider>
  )
}
