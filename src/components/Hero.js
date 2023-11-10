import React from 'react'
import restauranfood from './../assets/images/restauranfood.jpg'
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero">
      <div className='Content'>
 <h1>Little Lemon</h1>
          <h2>Chicago</h2>

        <p className='Karla18m'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button className="Link Karla18b"><Link to='Reservation'>Reserve a tabel</Link></button>
        
      </div>
       <div>
 <img src={restauranfood} alt='restauranfood'/>
      </div>
      

  </div>
  )
}

export default Hero
