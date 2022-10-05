import React from 'react'
import { Routes, Route } from 'react-router-dom'

export const PrivateRouter = () => {
  return (
    <Routes>
      <Route path='/login' element={<h1>Login</h1>} />
    </Routes>
  )
}
