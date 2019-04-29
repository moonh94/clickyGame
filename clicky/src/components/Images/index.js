import React from "react";
import "./style.css";

const Image = props => (
    <div className="image" onClick={() => props.clickCount(props.id)}>
    <div className="img-container" >
    <img alt={props.name} src ={props.image} />
    </div></div>
);

export default Image;