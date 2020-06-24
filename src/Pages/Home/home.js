import React from 'react';
import './home.css';
import Spin from '../../Assets/Videos/spin.mp4'
import Homenav from '../../Components/Home-nav/homenav'
// import Offer from '../Home/Offer/offer'
// import Youtube from '../Home/Youtube/youtube'
// import Actionbtn from '../Home/Action-btn/action-btn'


var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 40) || 4000;
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
    var delta = 300 - Math.random() * 500;

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

        <div className='home' >
            <div className="home-intro">
                <div className="video hero">
                    <video autoPlay="autoplay" loop="loop" muted >
                        <source src={Spin} type="video/mp4" />
                        Your browser does not support the video tag.
                     </video>
                </div>

            </div>
            <div className="type">
                <h1 className="type-font">nMobile
                <span
                        className="txt-rotate type-font"
                        data-period="2000"
                        data-rotate='[ " ERP Software that helps manage your day to day.", " provides a personalized App tailored to your industry.", " renders a UI that is accessible in any device.", " gives the client the ability to change functionality.", " will handle all your businesses’ needs at a very low cost.." ]'></span>
                </h1>
            </div>
            <Homenav/>
        </div>
    );
}

export default Home;