import React from 'react';
import './education.css';

const Education = () => {
  return (
    <section id="EducationPage">
      <div id="Education">
        <h1 className="EducationPageTitle">Education Background</h1>
        <p className="EducationDesc">
          I have an education background in Business Information Technology and certifications in Software Engineering and Digital Marketing
        </p>
        <div className="EducationItem">
          <div className="EducationImg">
            <img src="Smc.png" alt="Social Media College" className="educationImg" />
            <div className="Certificate in Digital Marketing Intensive">
              <h2>Social Media College</h2>
              <p>Year: 2023</p>
              <p>Location: Melbourne, Australia</p>
            </div>
          </div>
          <div className="EducationImg">
            <img src="Moringa.png" alt="Moringa School" className="educationImg" />
            <div className="EducationDetails">
              <h2>Moringa School</h2>
              <p>Year: 2022-2023</p>
              <p>Location: Nairobi, Kenya</p>
            </div>
          </div>
          <div className="EducationImg">
            <img src="CUK.jpeg" alt="Cooperative University" className="educationImg" />
            <div className="EducationDetails">
              <h2>Cooperative University</h2>
              <p>Year: 2020-2022</p>
              <p>Grade Attained: Credit</p>
            </div>
          </div>
        </div>
      </div>
      <div id="contact"></div>
      <h1 className="ContactPageTitle"> Contact Me</h1>
      <span className="ContactDesc"> Please fill the form below to discuss any work oportunities. </span>
      <form className="contactForm">
        <input type="text" className="name" placeholder="Your Name"/>
        <input type="email" className="email" placeholder="Your Email"/>
        <textarea className="msg" name="message" rows="5" placeholder="You Message"></textarea>
        <button type="submit" value="send" className="submitBtn"> Submit</button>
        <div className="Links"></div>
        <img src="InstagramIcon.png" alt="Instagram" className="link"/>
        <img src="LinkedInIcon.png" alt="LinkedIn" className="link"/>
        <img src="FacebookIcon.png" alt="Facebook" className="link"/>
        <img src="TwitterIcon.png" alt="X" className="link"/>
        
      </form>
    </section>
  );
};

export default Education;
