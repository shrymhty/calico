import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div  className='header'>
        <div className="header-content">
          <div className="text">
            <h2>Crafted Crochet for Every Corner of Life</h2>
            <p>
                Discover beautifully crafted crochet pieces that feel like home, made with care and creativity in every stitch.
            </p>
          </div>
          <button>Shop the Collection</button>
        </div>
    </div>
  )
}

export default Header