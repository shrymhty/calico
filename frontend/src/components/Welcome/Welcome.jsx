import React from 'react'
import './Welcome.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/shop");
  }

  return (
    <div className="welcome-wrapper">
      <div className="welcome">
        <div className="image-container">
          <img src={assets.hexagon} className="styled-img tilt-left" />
          <img src={assets.hero_key} className="styled-img tilt-right" />
        </div>
        <div className="text-container">
          <h1>Welcome to <span>Calico</span></h1>
          <p>
            Welcome to Calico — a creative studio rooted in craftsmanship, offering <span className='delicate'>delicately crocheted pieces</span> for your wardrobe, living spaces, and everyday moments. Each item is made with intention, blending tradition and individuality to bring you <span className='personal'>something truly personal.</span>
          </p>
          <button onClick={() => handleClick()}>Shop Now</button>
        </div>  
      </div>
    </div> 
  )
}

export default Welcome