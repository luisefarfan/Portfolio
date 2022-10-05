import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/admin/*' element={<PrivateRouter />} />
      <Route path='/*' element={<PublicRouter />} />
    </Routes>
  )
}
