import React from "react";
import { Link } from "react-router-dom";
export default function Finally({ interval,setIntervall }) {
        function handelClick() {
            interval();
            setIntervall(15)
    }
    return (
        <div className="finally">
            <div className="content">
                <i class="fa-solid fa-crown"></i>
                <div className="text">You've completed the Quiz ! and congarts !</div>
                <footer>
                <Link to="/" className="quit-btn">Quit Quiz</Link>
                <Link to="/quizpage" className="quit-btn" onClick={handelClick}>Replay Quiz</Link>
                </footer>
            </div>
        </div>
    )
}
