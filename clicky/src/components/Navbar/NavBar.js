import React from "react";
import "./style.css";


const NavBar = props => (
        <div className = "navbar" >
            <div className="gameName">Clicky Game!
                </div>
            <div className="score">
            Score: {props.score} Highscore: {props.highscore}
            </div>
        </div>

)

export default NavBar;