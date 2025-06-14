import React from "react";
import "./Toggle.css"

const Toggle = (props) => {
    return (
        <>
            <div className="teste">
                <label className="switch">
                    <input type="checkbox" 
                    checked={props.presencaBotao}
                   onChange={props.manipular}/>
                    <span className="slider round">
                    </span>
                </label>
            </div>
        </>
    )
}

export default Toggle;