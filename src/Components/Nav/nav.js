import React, { Component, Fragment } from 'react';
import './nav.css'
import { NavLink } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';

class Nav extends Component {

    constructor() {
        super()
        this.state = {
            open: false,
            hideOrShowHambugerDropDown: 'nav'

        }
    }

    handleClick = () => {
        this.setState({ open: !this.state.open });
    }

    displayHamburgerMenu = () => {
        return (
            <HamburgerMenu
                isOpen={this.state.open}
                menuClicked={this.handleClick.bind(this)}
                width={40}
                height={15}
                strokeWidth={4}
                rotate={0}
                color='#01b3f6'
                borderRadius={0}
                animationDuration={0.5}
            />
        )
    }

    displayNavBar = () => {
        return (
            <ul className='nav nav-name'>
                <li className='nav-link'><NavLink className='nav-name'  to='/' onClick={() => window.location.assign("/").reload()}>Home</NavLink></li>
                <li className='nav-link'><NavLink className='nav-name' to='/about'>About</NavLink></li>
                <li className='nav-link'><NavLink className='nav-name' to='/product' onClick={() => window.location.assign("/product").reload()}>Product</NavLink></li>
                <li className='nav-link'><NavLink className='nav-name' to='/service'>Service</NavLink></li>
                <li className='nav-link'><NavLink className='nav-name' to='/support'>Support</NavLink></li>
                <li className='nav-link'><NavLink className='nav-name' to='/clients'>Clients</NavLink></li>
                <li className='nav-link'><NavLink className='nav-name' to='/contact'>Contact</NavLink></li>
                <li className='nav-link'><NavLink className='nav-name'to='/login'>LogIn</NavLink></li>    
            </ul>
        )
    }

    displayMobileMenu = () => {
        return (
            <ul className='hamburgerDropDown '>
                <li className='nav-link'><NavLink className='nav-name'  to='/' onClick={() => window.location.assign("/").reload()}>Home</NavLink></li>
                <li className='nav-link'><NavLink className='nav-name' to='/about'>About</NavLink></li>
                <li className='nav-link'><NavLink className='nav-name' to='/product' onClick={() => window.location.assign("/product").reload()}>Product</NavLink></li>
                <li className='nav-link'><NavLink className='nav-name' to='/service'>Service</NavLink></li>
                <li className='nav-link'><NavLink className='nav-name' to='/support'>Support</NavLink></li>
                <li className='nav-link'><NavLink className='nav-name' to='/clients'>Clients</NavLink></li>
                <li className='nav-link'><NavLink className='nav-name' to='/contact'>Contact</NavLink></li>
                <li className='nav-link'><NavLink className='nav-name' to='/login'>LogIn</NavLink></li>
                <li className="nav-link"><a href="https://www.linkedin.com/company/nmobile-suite/about/" target="_blank" rel="noopener  noreferrer" className="nav-name">
                    <i className="fa fa-linkedin"></i> LinkedIn
                </a></li>
            </ul>
        )
    }

    render() {
        return (
            <Fragment>
                <div className='navbar'>
                    {this.state.open ? this.displayMobileMenu() : null}
                    {this.displayHamburgerMenu()}
                </div>
            </Fragment>
        );
    }
}


export default Nav