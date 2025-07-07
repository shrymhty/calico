import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Item from './pages/Item/Item'

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:category' element={<Shop />} />
          <Route path='/product/:id' element={<Item />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App