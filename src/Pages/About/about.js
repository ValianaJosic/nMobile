import React from 'react';
import './about.css';
import Banner from '../../Assets/Images/banner1.jpg'
import Nav from '../../Components/Nav/nav'


const About = () => {
  return (
    <div className="about">
      <Nav/>
      <h1 className="about-title"><span className="abt-title">About </span>nMobile</h1>
      <div className='about-img-div'><img src={Banner} alt='banner' className='about-img'></img></div>
      <p className="about-intro">How will your small business succeed in this changing world?</p>
      <div className="intro-div">

        <p className="about-info">During these difficult times small businesses are the ones affected most. As we shift more towards a digital world , the only way for your business to thirve is to adapt to the changes. nMobile is an ERP Software that helps manage your day-to-day processes virtually.</p>

        <p className="about-info">Extend your business beyond your office walls with a personalized App tailored to your industry.</p>
        <p className='about-intro'>Whether it’s retail, restaurant, warehouse, medical and more, we can help you make the transition and launch your small enterprise into the new tech world.</p>

      </div>
      <div className="about-intro-div">
        <p className="about-intro">What features does the App have?</p>
      </div>

      <div className="intro-div">

        <p className="about-info">This business App gives the client the ability to add/change functionality to the ERP in the background and provides a UI that is accessible in any device, online, offline, etc. without the need of hiring a programmer. For example:
        </p>

        <p className="about-info">• Warehouse paperless scanning can be added to your ERP software without modifying your base software</p>
        <p className="about-info">• CRM integration for Social Media Marketing</p>
        <p className="about-info">• Logistics and map navigation for Services</p>
        <p className="about-info">• Video Call Customer service (ex: our doctor app), all of this and much more</p>
        <p className="about-info"> All in the same App!</p>
        <p className="about-info">Each user will have a personalized experience and view depending on their login profile. All data will be stored in the ERP software. We support Microsoft Dynamics NAV and in the future will expand supporting SAP, D365 or any other platform as the business grows. We are able to extend the functionality and any services that your current ERP is lacking using nMobile.
        Currently ERP software is very expensive and making changes add on to the expenses.</p> 
        <p className='about-intro'>N Mobile reduces up to 80% of the cost of ERP implementation.</p>
      </div>
      <div className="about-intro-div">
        <p className="about-intro">How does it work?</p>
      </div>
      <div className="intro-div">
      <p className="about-info">We install a nMobile server that connects to your ERP software efficiently and without modifying the base code. We have an ample amount of existing functionality and provide a way to manage the software via web tools. You can create additional UIs, change captions, add/remove columns, add a function triggered by unlimited action buttons, change properties, all without coding. Action buttons allow you to add unlimited functionality.
        </p>
        <p className="about-info">• Warehouse solutions are scanning millions of records from multiple countries without affecting ERP performance.</p>
        <p className="about-info">• Restaurant solutions that do not require a POS system, tablets or computers in the Restaurant. Control Inventory, Purchases, Sales, Events, Catering, Deliveries with no human interaction (how cool is that for our new remote world!).</p>
        <p className="about-info">• Social Media marketing tools that allow you to post your campaigns automatically and check results directly in your ERP.</p>
        <p className="about-info">• Service orders where drivers/technicians receive their orders on a tablet or phone. The App guides them to each of the clients. The Technician can check Inventory or even place an order for a part. The client can download the same App and check service repair status, pay, and make appointments.</p>
        
          <p className='about-intro'>Everything in one place so you don’t need to search for programmers, project managers or create a large technological infrastructure that can be difficult for a small business. nMobile will handle all your businesses’ needs at a very low cost.</p>
        
      </div>  
    </div>

  );
}

export default About;