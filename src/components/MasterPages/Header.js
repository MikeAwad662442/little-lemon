import React from 'react'
import Logo1 from '../../assets/images/Logo1.svg'
const Header = () => {
  return (
    <header>
      <img src={Logo1} alt='Logo' />
      <nav>
        <ul>
          <li><a href='Home'>Home</a></li>
          <li><a href='About'>About</a></li>
          <li><a href='Menu'>Menu</a></li>
          <li><a href='Reservation'>Reservation</a></li>
          <li><a href='OrderOnline'>Order Online</a></li>
          <li><a href='Login'>Login</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
