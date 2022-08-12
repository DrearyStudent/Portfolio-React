import React from 'react'
import "./Slider.css"

const slidesInfo = [
    
    {
        src:"https://cdn.pixabay.com/photo/2016/11/30/20/44/computer-1873831_1280.png",
        alt: "Slider 1",
        desc: "GitHub",
        href: "https://github.com/DrearyStudent"

    },

    {
        
        src:"https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg ",
        alt: "Slider 2",
        desc: "Colaboración en proyectos",
        href: "https://solo.to/drearystudent"

    },

    {
        
        src:"https://cdn.pixabay.com/photo/2017/12/31/12/38/adult-3052244_1280.jpg",
        alt: "Slider 3",
        desc: "Página web de documentación de proyecto y diseño de software",
        href: "https://phalord.github.io/PracticasProfesionales/"

    }

]

const slides =slidesInfo.map( slide => (

    <div className="slide-container">

        <a href={slide.href} target="_blank">
            <img src={slide.src} alt={slide.alt} ></img>
        </a>
        

        <div className="slide-description">

            <span>{slide.desc}</span>

        </div>

    </div>

) )

export default slides