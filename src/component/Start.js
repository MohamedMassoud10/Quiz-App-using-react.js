import React from "react";
import Data from "./Data";
import { Link } from "react-router-dom";
export default function Start({interval }) {
    function handelClick() {
        interval();
    }
    return (
        <div className="start">
            <Link to="/quizpage"><button onClick={handelClick}>Start</button></Link>
        </div>
    )
    
}