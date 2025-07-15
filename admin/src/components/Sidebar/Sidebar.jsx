import React from 'react'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBagShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar-options">
            <NavLink to='/add' className="sidebar-option">
                <FontAwesomeIcon icon={faPlus} />
                <p>Add Items</p>
            </NavLink>
            <NavLink to='/list' className="sidebar-option">
                <FontAwesomeIcon icon={faBars} />
                <p>List Items</p>
            </NavLink>
            <NavLink to='/orders' className="sidebar-option">
                <FontAwesomeIcon icon={faBagShopping} />
                <p>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar