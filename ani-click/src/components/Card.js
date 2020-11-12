import React from "react";
import "../styles/imageCard.css";

function Card(props){

    return (
        <div className="cardContainer">
            <img src={props.url} onClick={() => props.scorePoints(props.id)}/>
        </div>
    )
}

export default Card;