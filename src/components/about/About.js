import React from 'react'
import "./About.css"
import aboutImage from "../../media/about-image.jpg"

const About = () => {

  return (

    <div className="about-container">

      <div className="about-description">
         
        <h3>Sobre mi...</h3>
        
        <p>Desarrollador con grado en ingeniería de software y con experiencia en diseño, pruebas e implementación de sistemas. 
          Actitud comprometida, disposición total para trabajar y una variedad de competencias en distintas plataformas, lenguajes 
          de programación y sistemas integrados. Busco enriquecer mis conocimientos y aprender siempre nuevas tecnologías para seguir 
          mejorando como desarrollador y obtener herramientas para la resolución de problemas y satisfacción personal.</p>

      </div>

      <div className="about-image">

        <img src = {aboutImage} alt="about" ></img>

      </div>

    </div>

  )

}

export default About
