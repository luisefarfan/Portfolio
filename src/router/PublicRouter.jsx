import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

export const PublicRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}
