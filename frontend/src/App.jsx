import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Item from './pages/Item/Item'
import Cart from './pages/Cart/Cart'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import LoginPopup from './components/LoginPopup/LoginPopup'
import MyOrders from './pages/MyOrders/MyOrders'
import {ToastContainer} from "react-toastify"

const App = () => {
    const [showLogin, setShowLogin] = useState(false);  
  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:category' element={<Shop />} />
          <Route path='/product/:id' element={<Item />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/myorders' element={<MyOrders />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </div>
    </>
  )
}

export default App