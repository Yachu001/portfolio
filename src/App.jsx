import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element= {<Home />}></Route>
      </Routes>
      <Footer />

    </div>
  )
}

export default App