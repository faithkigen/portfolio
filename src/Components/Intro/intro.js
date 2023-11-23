import React from 'react';
import './intro.css';
import { Link as ScrollLink } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent"> 
        <span className="hello">Hello,<br/></span>
        <span className="introText">
          I'm <span className="IntroName">Faith Kigen</span> <br/>
          Website Designer and Digital Marketer
        </span>
        <p className="IntroPara">I am a passionate digital Marketer with expertise in Content creation, Social Media Strategy, Email Marketing, and Copywriting. I leverage tools such as Canva to create content that resonates with the audience to take the next action. <br/>Skilled web Designer in creating visually appealing websites that are user-friendly and easy to navigate  </p>
        <ScrollLink to="hireMe" smooth={true} duration={500}>
          <button className="btn">Hire Me</button>
        </ScrollLink>
      </div>
      <img src="FaithKigen.jpg" alt="About" className="bg" />
    </section>
  );
}

export default Intro;
