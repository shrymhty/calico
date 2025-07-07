import React from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/"><img src={assets.logo} alt="" className='logo'/></Link>
        <p>CALICO</p>        
      </div>
      <div className="navbar-center">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for products..."
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
      </div>
      <div className="navbar-right">
        <FontAwesomeIcon icon={faCartShopping} className='cart-icon' onClick={() => navigate("/cart")}/>
        <FontAwesomeIcon icon={faUser} className='user-icon' />
      </div>
    </div>
  )
}

export default Navbar