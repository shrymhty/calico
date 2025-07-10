import React, { useContext } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

  const navigate = useNavigate();
  const {getCartTotal, user, logout} = useContext(StoreContext);

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
        <div className="navbar-cart">
          <div className={getCartTotal()===0?"":"dot"}></div>
          <FontAwesomeIcon icon={faCartShopping} className='cart-icon' onClick={() => navigate("/cart")}/>
        </div>
        {!user
            ? <button onClick={() => setShowLogin(true)} className='sign-in-btn'>Sign in</button>
            : <div className='navbar-profile'>
                <FontAwesomeIcon icon={faUser} className='user-icon' />
            </div>
          }
      </div>
    </div>
  )
}

export default Navbar