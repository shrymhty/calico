import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import {Routes, Route} from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import { url } from './assets/assets'
import './App.css'


const App = () => {
  return (
    <div className='admin-div'>
      <h1>Admin Dashboard</h1>
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path='/add' element={<Add url={url} />} />
          <Route path='/list' element={<List url={url} />} />
          <Route path='/orders' element={<Orders url={url} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App