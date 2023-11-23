import React from 'react'
import "./works.css"
const works = () => {
  return (
   <section id="works"> 
   <h2 className="workstitle"> My Portfolio</h2>
   <span className="worksDesc"> I take pride in paying attention to the smallest details and making sure that my work is perfect I am excited to bring my skills and experience to help business </span>
   < div className="worksImg">
   <img src="HorizonHomes.png"  alt="Horizon Homes" className="worksImg"/>
   <img src="FlaxFarm.png"  alt="FlaxFarm" className="worksImg"/>
   <img src="FlavorFood.png"  alt="Flavor Food" className="worksImg"/>
   <img src="Computer.jpg"  alt="Computer" className="worksImg"/>
   </div>
   <button className="worksBtn"> See More </button>
   </section>
  )
}

export default works;
