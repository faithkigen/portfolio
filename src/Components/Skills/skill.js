import React from 'react';
import './skill.css';

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle"> What I do <br/></span>
        <span className="skillDesc"> I am a skilled and deicted wen designer with experience in creating a user friendly website that is resposnsive and easy to navigate through it.I am proficient in HTML,CSS,React and Ruby On Rails <br/> A passionate Digital Marketer, with expertise in Content creation,social media strategy,CopyWriting and S.E.O</span>
        <div className="skillsBars">
            <div className="skillBar">
               <img src="WebDesign.png" alt="Web Designer" className="skillBarImg"/>
               <div className="skillBarText">
                <h2> Web Designer</h2>
                <p> A dedicated and skilled wen designer with years of experience</p>
               </div>
            </div>
            <div className="skillBar">
               <img src="DigitalMarketing.png" alt="Digital Marketing" className="skillBarImg"/>
               <div className="skillBarText">
                <h2> Digital Marketer</h2>
                <p> A creative and a passionate digital Marketer</p>
               </div>
            </div>


        </div>
        

    </section>
  )
}

export default Skills;
