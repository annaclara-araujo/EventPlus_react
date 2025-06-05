import "./Toggle.css"
import { useState } from "react";


const Toggle = () => {
    return(

        <> 
    <div className="wrapper"> 
    <label className="switch"> 
    <input type="checkbox" checked={props.presenca} /> 
    <span className="slider round"></span> 
    </label> 
    </div> 
    </>
    
    )
}

export default Toggle;