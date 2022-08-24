import React from "react";
import { Link } from "react-router-dom";
export default function Finally({ interval }) {
        function handelClick() {
        interval();
    }
    return (
        <div className="finally">
            <div className="content">
                <i class="fa-solid fa-crown"></i>
                <div className="text">You've completed the Quiz ! and congarts !</div>
                <footer>
                <Link to="/"><button className="quit-btn">Quit Quiz</button></Link>
                <Link to="/quizpage"><button className="replay-btn" onClick={handelClick}>Replay Quiz</button></Link>
                </footer>
            </div>
        </div>
    )
}