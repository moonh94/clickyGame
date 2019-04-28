import React from "react";
import "./style.css"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="collapse navbar-collapse" id="navbarNav">
            <div className="row">
                    <ul className="navbar-nav">
                    <div className="col-md-4">
                        <li className="nav-link">
                            Clicky Game
                        </li>
                    </div>
                    <div className="col-md-4">
                        <li className="nav-link">
                            Guess:
                        </li>
                    </div>
                    <div className="col-md-4">
                        <li className="nav-link">
                            Score:
                        </li>
                    </div>
                    </ul>

            </div> 
            </div>
        </nav>

    )
}

export default NavBar;