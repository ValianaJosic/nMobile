import React from 'react';
import './about.css';
import Banner from '../../Assets/Images/banner1.jpg'


const About = () => {
  return (
    <div className="about">
      <div className='about-img-div'><img src={Banner} alt='banner' className='about-img'></img></div>
      <p className="about-intro">How will your small business succeed in this changing world?</p>
      <div className="intro-div">
        
        <p className="about-info">During these difficult times small businesses are the ones affected most. As we shift more towards a digital world , the only way for your business to thirve is to adapt to the changes. nMobile is an ERP Software that helps manage your day-to-day processes virtually.</p>
      
         <p>Extend your business beyond your office walls with a personalized App tailored to your industry. Whether it’s retail, restaurant, warehouse, medical and more, we can help you make the transition and launch your small enterprise into the new tech world.</p>

      </div>
      <div><p className="about-intro">What features does the App have?</p></div>
      <div className="intro-div">
        
        <p className="about-info">This business App gives the client the ability to add/change functionality to the ERP in the background and provides a UI that is accessible in any device, online, offline, etc. without the need of hiring a programmer. For example:
        </p>

        <p>• Warehouse paperless scanning can be added to your ERP software without modifying your base software</p>
        <p>• CRM integration for Social Media Marketing</p>
        <p>• Logistics and map navigation for Services</p>
        <p>• Video Call Customer service (ex: our doctor app), all of this and much more</p>
        <p> All in the same App!</p>
        <p>Each user will have a personalized experience and view depending on their login profile. All data will be stored in the ERP software. We support Microsoft Dynamics NAV and in the future will expand supporting SAP, D365 or any other platform as the business grows. We are able to extend the functionality and any services that your current ERP is lacking using nMobile.
        Currently ERP software is very expensive and making changes add on to the expenses. <span className='about-intro'>N Mobile reduces up to 80% of the cost of ERP implementation.</span></p>
      </div>
    </div>

  );
}

export default About;