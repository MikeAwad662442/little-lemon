import React from 'react'
import Logo1 from '../../assets/images/Logo1.svg'
const Header = () => {
  return (
    <div>
      <img src={Logo1} alt='Logo' />
      <nav>
        <ul>
          <li><a href='home'>Home</a></li>
          <li><a href='About'>About</a></li>
          <li><a href='Menu'>Menu</a></li>
          <li><a href='Reservation'>Reservation</a></li>
          <li><a href='OrderOnline'>Order Online</a></li>
          <li><a href='Login'>Login</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
