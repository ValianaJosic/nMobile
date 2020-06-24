import React from 'react';
import './homenav.css';
import { NavLink } from 'react-router-dom';
import phone from '../../Assets/Images/phone.png'
import Social from '../Social/social';


const Homenav = () => {
  return (

    <div className="home-info container">

    <img src={phone} alt='phone' className='phone'></img>
    <div className="row row1">
    <NavLink to="/"  onClick={() => window.location.reload()}className="home-app" style={{textDecoration: 'none'}}>
        <i className="fa fa-home home-icon"></i><br></br>home
    </NavLink>
    <NavLink to="/about" className="about-app" style={{textDecoration: 'none'}} >
        <i className="fa fa-user about-icon"></i><br></br>about
    </NavLink>
    <NavLink to="/products" className="laptop-app" style={{textDecoration: 'none'}} >
        <i className="fa fa-laptop laptop-icon"></i><br></br>product
    </NavLink>
    </div>

    <div className="row row2">
    <NavLink to="/service"className="service-app" style={{textDecoration: 'none'}} >
        <i className="fa fa-handshake-o service-icon"></i><br></br>services
    </NavLink>
    <NavLink to="/support" className="support-app" style={{textDecoration: 'none'}}>
        <i className="fa fa-cogs support-icon"></i><br></br>support
    </NavLink>
    <NavLink to="/testimonials" className="test-app" style={{textDecoration: 'none'}}>
        <i className="fa fa-users test-icon"></i><br></br>clients
    </NavLink>
    </div>

    <div className="row row3">
    <NavLink to="/contact" className="contact-app" style={{textDecoration: 'none'}}>
        <i className="fa fa-handshake-o contact-icon"></i><br></br>contact
    </NavLink>
    <NavLink to="/login" className="login-app"style={{textDecoration: 'none'}} >
        <i className="fa fa-sign-in login-icon"></i><br></br>log-in
    </NavLink>
    <NavLink to="/store" className="store-app" style={{textDecoration: 'none'}}>
        <i className="fa fa-mobile store-icon"></i><br></br>Store
    </NavLink>
    </div>
    <Social/>
</div>
  );
}

export default Homenav;
