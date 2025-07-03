import React from 'react'
import Header from '../../components/Header/Header'
import Category from '../../components/Category/Category'
import Welcome from '../../components/Welcome/Welcome'
import Reviews from '../../components/Reviews/Reviews'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <Category />
      <Welcome />
      <Reviews />
    </div>
  )
}

export default Home