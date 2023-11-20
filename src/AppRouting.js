import React from 'react'
import Logo1 from './assets/images/Logo1.svg'
import { NavLink, Outlet } from "react-router-dom";
// import Header from '../components/MasterPages/Header'

import Footer from "./components/MasterPages/Footer";
const AppRouting = () => {
  return (
    <div className="root-pages">
      <header>
        <img src={Logo1} alt='Logo' />
        <nav>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='About'>About</NavLink></li>
            <li><NavLink to='Menu'>Menu</NavLink></li>
            <li><NavLink to='BookingPage'>Reservation</NavLink></li>
            <li><NavLink to='OrderOnline'>Order Online</NavLink></li>
            <li><NavLink to='Login'>Login</NavLink></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default AppRouting
