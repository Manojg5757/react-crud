import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Create from './pages/Create'
import Read from './pages/Read'
import Edit from './pages/Edit'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create' element={<Create />} />
      <Route path='/read/:id' element={<Read />} />
      <Route path='/edit/:id' element={<Edit />} />
    </Routes>
  )
}

export default App