import React from 'react';
import './home.css';
import { NavLink } from 'react-router-dom';
import Spin from '../../Assets/Videos/spin.mp4'
import phone from '../../Assets/Images/phone.png'
// import Offer from '../Home/Offer/offer'
// import Youtube from '../Home/Youtube/youtube'
// import Actionbtn from '../Home/Action-btn/action-btn'


var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
};


function Home() {

    return (

        <div className='home'>
            <div className="home-intro">
                <div className="video hero">
                    <video autoPlay="autoplay" loop="loop" muted >
                        <source src={Spin} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
                </div>
                <div className="home-info">
                    <img src={phone} alt='phone' className='phone'></img>
                    <NavLink to="/">
                        <div className="home-app" ><i class="fa fa-home home-icon"></i><br></br>home</div>
                    </NavLink>
                    <NavLink to="/about">
                        <div className="about-app" ><i class="fa fa-user about-icon"></i><br></br>about</div>
                    </NavLink>
                    <NavLink to="/products">
                        <div className="laptop-app" ><i class="fa fa-laptop laptop-icon"></i><br></br>product</div>
                    </NavLink>
                    <NavLink to="/service">
                        <div className="service-app" ><i class="fa fa-handshake-o service-icon"></i><br></br>services</div>
                    </NavLink>
                    <NavLink to="/suppport">
                        <div className="support-app" ><i class="fa fa-cogs support-icon"></i><br></br>support</div>
                    </NavLink>
                    <NavLink to="/testimonials">
                        <div className="test-app" ><i class="fa fa-users test-icon"></i><br></br>clients</div>
                    </NavLink>
                    <NavLink to="/contact">
                        <div className="contact-app" ><i class="fa fa-handshake-o contact-icon"></i><br></br>contact</div>
                    </NavLink>
                    <NavLink to="/login">
                        <div className="login-app" ><i class="fa fa-sign-in login-icon"></i><br></br>log-in</div>
                    </NavLink>
                    <NavLink to="/store">
                        <div className="store-app" ><i class="fa fa-mobile store-icon"></i><br></br>Store</div>
                    </NavLink>
                </div>
            </div>
            <div  className="type">
            <h1>ERP Software
                <span
                    class="txt-rotate"
                    data-period="2000"
                    data-rotate='[ " helps manage your day to day.", " with a personalized App tailored to your industry.", "pure JS.", "pretty.", "fun!" ]'></span>
            </h1>
            </div>
        </div>
    );
}

export default Home;