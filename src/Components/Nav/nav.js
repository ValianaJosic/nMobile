import React from 'react';
import './nav.css';
import Logo from '../../Assets/Images/logo.png';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="navbar-div">
      <NavLink to="/"  onClick={() => window.location.assign("/").reload()} className="nav-page logo-link"> <img src={Logo} alt="logo" className="logo" /></NavLink>
    </div>
  );
}

export default Navbar;