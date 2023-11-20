import React from 'react'
import { Link } from "react-router-dom";
import Logo1 from './../../assets/images/Logo1.svg'
function Footer() {
  return (
    <footer>
      <menu>
        <section className="img-footer">
          <img src={Logo1} alt='Logo' />
        </section>
        <section className="contact">
          <h2 className="footer-header">Navigation</h2>
          <ul className="footer-links">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='About'>About</Link></li>
            <li><Link to='Menu'>Menu</Link></li>
            <li><Link to='BookingPage'>Reservation</Link></li>
            <li><Link to='OrderOnline'>Order Online</Link></li>
            <li><Link to='Login'>Login</Link></li>
          </ul>
        </section>

        <section>
          <h2 className="footer-header">Contact</h2>
          <ul className="footer-links">
            <li>2395 Maldove Way,</li>
            <li>Chicago Illinois</li>
            <li>(629)-243-6827</li>
           <li> <a
              href="mailto: info@littlelemon.com"
              target="_blank"
              rel="noreferrer"
            >
              info@littlelemon.com
            </a>
              </li>
          </ul>
        </section>
        <section>
          <h2 className="footer-header">Connect</h2>
          <ul className="footer-links">
            <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
              </a>
              </li>
            <li><a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
              </li>
            <li><a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
            >
              Join us!
            </a>
              </li>
          </ul>
          </section>
          </menu>
    </footer>
  );
}

export default Footer