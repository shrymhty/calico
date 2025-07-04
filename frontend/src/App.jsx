import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:category' element={<Shop />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App