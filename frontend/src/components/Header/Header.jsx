import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Header.css'

const Header = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/shop");
  }

  return (
    <div  className='header'>
        <div className="header-content">
          <div className="text">
            <h2>Crafted Crochet for Every Corner of Life</h2>
            <p>
                Discover beautifully crafted crochet pieces that feel like home, made with care and creativity in every stitch.
            </p>
          </div>
          <button onClick={() => handleClick()}>Shop the Collection</button>
        </div>
    </div>
  )
}

export default Header