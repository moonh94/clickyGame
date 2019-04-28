import React from "react";
import "./style.css";

function ShowImage(props) {
    return (
        <div className="image">
            <div className="img-container">
                <img alt={props.name} src = {props.image} />
            </div>
        </div>
    )
}

export default ShowImage;