import React from 'react'
import {NavLink, Outlet} from "react-router-dom";
import Logo1 from '../../assets/images/Logo1.svg'
const Header = () => {
  return (
    <header>
      <img src={Logo1} alt='Logo' />
      <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='About'>About</NavLink></li>
          <li><NavLink to='Menu'>Menu</NavLink></li>
          <li><NavLink to='Reservation'>Reservation</NavLink></li>
          <li><NavLink to='OrderOnline'>Order Online</NavLink></li>
          <li><NavLink to='Login'>Login</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
