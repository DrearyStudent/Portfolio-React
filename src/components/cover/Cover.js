import React from 'react'
import "./Cover.css"
import coverVideoHD from "../../media/coverVideoHD.mp4"
import posterVideo from "../../media/poster.png"

const cover = () => {

  return (
    
    <div className = "cover-container">

      <video 

        className = "video" 

        src = {coverVideoHD} 

        type="video/mp4"

        autoPlay 

        loop 

        muted

        poster= {posterVideo}
        
      />

      <h1>Abner Jeffrey Tapia Cruz</h1>

      <p>Desarrollador | Ingeniero de software | Emprendedor</p> 
      
    </div>

  )
  
}

export default cover
