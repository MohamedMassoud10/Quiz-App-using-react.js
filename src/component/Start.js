import React from "react";
import { Link } from "react-router-dom";
export default function Start({interval ,setIntervall }) {
    function handelClick() {
        interval();
        setIntervall(15)
    }
    return (
        <div className="start">
            <Link to="/quizpage"><button onClick={handelClick}>Start</button></Link>
        </div>
    )
    
}
