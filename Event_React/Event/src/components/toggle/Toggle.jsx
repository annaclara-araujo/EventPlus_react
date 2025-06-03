import "./Toggle.css"
import { useState } from "react";


const Toggle = () => {
    return(

        <> 
    <div className="wrapper"> 
    <label className="switch"> 
    <input type="checkbox" /> 
    <span className="slider round"></span> 
    </label> 
    </div> 
    </>
    
    )
}

export default Toggle;