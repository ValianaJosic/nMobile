import React from 'react';
import './product.css';
import Server from '../../Assets/Images/server.jpg'
import Apps from '../../Assets/Images/apps.jpg'
import Connect from '../../Assets/Images/connect.jpg'


const Product = () => {
  return (
   <div className="product-wrapper">  
    <div className="product-div">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={Server} alt="First slide"></img>
      <p>N-Mobile App Server</p>
        <p>Our APP server gives you the ability to synchronize data between your ERP database and the database in your mobile device.</p>
       <p> • You can map any table and any field.</p>
       <p>• You can have your own images displayed on your mobile App.</p>
       <p> • You can create unlimited Categories and pages within categories.</p>
       <p>• Easy to install, easy to use.</p>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={Apps} alt="Second slide"></img>
      <p>N-Mobile Client Apps</p>
        <p>N-Mobile is available for iPhone, Android and Windows Phone. Your employees, your customers, your providers, any person with a smartphone can download the App directly from App Store, Google Play and Windows Phone store. Just install, setup your App to your server(s) and securely login into your business apps…Just a few easy steps to bring your business into the mobile world..</p>
       <p>With you client Apps you can:</p>
       <p>•    View, modify and create Sales Orders, Service Orders, Purchase Orders, Quotes, etc.</p>
       <p>•    Review status: shipping, availability, delivery, etc.</p>
       <p>•    Business Snap shot: view ONE page daily report of your business(s) activity and performance.</p>
       <p>•    Product Show Case: promote your product and services directly to your customer’s smartphone. Keep in touch with news, improvements, promotions, etc.</p>
       <p>•    View and maintain your Contacts and Customers.</p>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={Connect} alt="Third slide"></img>
      <p>N-Mobile Connect</p>
        <p>No matter what your backend database is, we have special connectors for it:</p>
       <p>• SQL Server (any version).</p>
       <p>• Microsoft Dynamics NAV.</p>
       <p>• Microsoft Dynamics AX.</p>
       <p>• Microsoft Dynamics GP.</p>
       <p>• SAP.</p>
       <p>• Oracle.</p>
       <p>You name it…If we don’t have it, we’ll build it for you.</p>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </div>
    </div> 
  );
}

export default Product;