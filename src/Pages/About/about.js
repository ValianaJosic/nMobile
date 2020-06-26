import React from 'react';
import './about.css';
import Banner from '../../Assets/Images/banner1.jpg'


const About = () => {
  return (
    <div className="about">
        <img src={Banner} alt='banner'className='about-img'></img>
      <p className="about-intro">How will your small business succeed in this changing world?</p>
        <p className="about-info">During these difficult times small businesses are the ones affected most. As we shift more towards a digital world , the only way for your business to thirve is to adapt to the changes. nMobile is an ERP Software that helps manage your day-to-day processes virtually. Extend your business beyond your office walls with a personalized App tailored to your industry. Whether it’s retail, restaurant, warehouse, medical and more, we can help you make the transition and launch your small enterprise into the new tech world.</p>
    </div>
  );
}

export default About;