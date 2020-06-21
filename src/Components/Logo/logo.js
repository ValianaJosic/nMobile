import React from 'react';
import './logo.css';
import Logo from '../../Assets/Images/logo.png';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
  return (
    <div className="nav nav-div">
      <NavLink to="/" className="nav-page logo-link"> <img src={Logo} alt="logo" className="logo" /></NavLink>
      {/* <div className="link-div">
        <NavLink to="/spinning" className="nav-page nav-link property-link"><span className="span-btn">Spinning</span></NavLink>
        <NavLink to="/coach" className="nav-page nav-link"><span  className="span-btn">Coach</span></NavLink>
        <NavLink to="/contact" className="nav-page nav-link"><span  className="span-btn">Contact</span></NavLink>
      </div>
      <div className="icon-bar">
        <a href="https://www.facebook.com/maggie.mijares.1" target="_blank" rel="noopener  noreferrer" className="facebook"><i className="fa fa-facebook"></i></a>
        <a href="https://www.instagram.com/magimi64/?hl=en" target="_blank" rel="noopener  noreferrer" className="instagram"><i className="fa fa-instagram"></i></a>
      </div> */}
    </div>
  );
}

export default Navigation;