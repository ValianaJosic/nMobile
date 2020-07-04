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
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={Apps} alt="Second slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={Connect} alt="Third slide"></img>
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