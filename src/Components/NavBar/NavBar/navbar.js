import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';


const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="Logo.png" alt="Logo"/>
       
      <div className="desktopMenu">
        <Link activeClass='active'to='intro'spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItem" >Home</Link>
        <Link activeClass='active'to='skills'spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItem" >About</Link>
        <Link activeClass='active'to='works'spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItem">Portfolio</Link>
        <Link activeClass='active'to='EducationPage'spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItem" >Education</Link>
      </div>
  

      <button className="desktopMenuBtn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} >
        Contact Me
      </button>
    </nav>
  );
}

export default Navbar;
