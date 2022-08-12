import React from 'react'
import "./Slider.css"

const slidesInfo = [
    
    {
        src:"https://cdn.pixabay.com/photo/2016/11/30/20/44/computer-1873831_1280.png",
        alt: "Slider 1",
        desc: "GitHub"

    },

    {
        
        src:"https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg",
        alt: "Slider 2",
        desc: "Colaboración en proyectos"

    },

    {
        
        src:"https://cdn.pixabay.com/photo/2017/12/31/12/38/adult-3052244_1280.jpg",
        alt: "Slider 3",
        desc: "Página web de documentación de proyecto y diseño de software"

    }

]

const slides =slidesInfo.map( slide => (

    <div className="slide-container">

        <img src={slide.src} alt={slide.alt} ></img>

        <div className="slide-description">

            <span>{slide.desc}</span>

        </div>

    </div>

) )

export default slides