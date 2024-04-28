/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <div className='menu-icons'>

      <NavLink to="/home" >
        <h2><i className="fa-solid fa-house"></i></h2>
      </NavLink>

      <NavLink to="/game" >
        <h2><i className="fa-solid fa-dice"></i></h2>       
      </NavLink>

      <NavLink to="/album" >
        <h2><i className="fa-solid fa-images"></i></h2>
      </NavLink>

      <NavLink to="/about" >
        <h2><i className="fa-solid fa-mercury"></i></h2>
      </NavLink>

      <NavLink to="/message" >
        <h2><i className="fa-solid fa-message"></i></h2>
      </NavLink>

    </div>
  )
}

export default Header
