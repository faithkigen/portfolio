import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <img src="Logo.png" alt="Logo" />

      <div className="desktopMenu">
        <Link  activeClass="active" to="intro" spy={true}smooth={true} offset={-100} duration={500}className="desktopMenuItem"  > Home </Link>
        <Link activeClass="active" to="skills"  spy={true} smooth={true}offset={-100} duration={500} className="desktopMenuItem" > About </Link>
        <Link activeClass="active" to="works"spy={true} smooth={true} offset={-100}  duration={500}className="desktopMenuItem" >Portfolio </Link>
        <Link activeClass="active" to="EducationPage" spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuItem" >  Education </Link>
      </div>

      <button
        className="desktopMenuBtn"
        onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })} >Contact Me </button>

      <img src="Menu.png" alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />

      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link  activeClass="active"to="intro"  spy={true}  smooth={true}  offset={-100}duration={500}className="listMenuItem"onClick={() => setShowMenu(false)} > Home</Link>
        <Link activeClass="active"  to="skills" spy={true} smooth={true} offset={-100}  duration={500} className="listMenuItem"  onClick={() => setShowMenu(false)} > About </Link>
        <Link  activeClass="active"to="works" spy={true} smooth={true} offset={-100}  duration={500} className="listMenuItem" onClick={() => setShowMenu(false)} >Portfolio </Link>
        <Link  activeClass="active" to="EducationPage"   spy={true} smooth={true} offset={-100} duration={500} className="listMenuItem" onClick={() => setShowMenu(false)}  >  Education </Link>
        <Link activeClass="active" to="Contact" spy={true}smooth={true}offset={-100} duration={500} className="listMenuItem"onClick={() => setShowMenu(false)}  >Contact </Link>
      </div>
    </nav>
  );
};

export default Navbar;
