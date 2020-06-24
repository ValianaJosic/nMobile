import React from 'react';
import './logo.css';
import Logo from '../../Assets/Images/logo.png';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
  return (
    <div className="nav nav-div">
      <NavLink to="/"  onClick={() => window.location.assign("/").reload()} className="nav-page logo-link"> <img src={Logo} alt="logo" className="logo" /></NavLink>
    </div>
  );
}

export default Navigation;