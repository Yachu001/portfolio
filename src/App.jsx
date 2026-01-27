import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element= {<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App