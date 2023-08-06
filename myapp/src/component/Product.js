import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import App from '../App';
import Rating from './Rating'

export default function Product() {
  return (
    <div class="card" style={{width: "18rem"}}>
      <img src="image/download.jpeg" class="card-img-top" alt="logo" />
      <div class="card-body">
      <h4 class="card-title" >Asus Rog</h4>
      <h5 class="card-title">Rs. 125000</h5>
      <p>Best Gaming Laptop</p>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span>

<Rating rating="3"/>
    </div>
    </div>
  )
}
