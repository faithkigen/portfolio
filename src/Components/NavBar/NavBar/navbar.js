import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';


const Navbar = () => {
  return (
    <nav className="navbar">
       
      <div className="desktopMenu">
        <Link to="home" className="desktopMenuItem" smooth={true} duration={500}>Home</Link>
        <Link to="clients" className="desktopMenuItem" smooth={true} duration={500}>Clients</Link>
        <Link to="about" className="desktopMenuItem" smooth={true} duration={500}>About</Link>
        <Link to="portfolio" className="desktopMenuItem" smooth={true} duration={500}>Portfolio</Link>
      </div>
      <button className="desktopMenuBtn">
        <img src="ContactMe.png" alt="Contact Me" className="desktopMenuImg" />Contact Me</button>
    </nav>
  );
}

export default Navbar;
