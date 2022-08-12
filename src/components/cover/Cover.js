import React from 'react'
import "./Cover.css"
import coverVideoHD from "../../media/coverVideoHD.mp4"

const cover = () => {

  return (
    
    <div className = "cover-container">

      <video 

        className = "video" 

        src = {coverVideoHD} 

        autoPlay 

        loop 

        muted
        
      />

      <h1>Abner Jeffrey Tapia Cruz</h1>

      <p>Desarrollador | Ingeniero de software | Emprendedor</p> 
      
    </div>

  )
  
}

export default cover
