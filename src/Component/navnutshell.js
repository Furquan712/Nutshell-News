import React from 'react'
import "./navnutshell.css";
import Hamburgerdrawer from "./Hamburgerdrawer";

const navnutshell = () => {
    return (
        <div className='nav'>
            <div className="icon" >
            <Hamburgerdrawer />
            </div>

            <img
            style={{cursor:"pointer"}}
            src='https://logovectorseek.com/wp-content/uploads/2020/11/nutshell-logo-vector.png'
            height="80%"
            alt='logo'>
                
            </img>
        </div>
    )
}

export default navnutshell
