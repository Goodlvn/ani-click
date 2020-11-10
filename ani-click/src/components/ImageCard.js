import React from "react";
import "../styles/imageCard.css";

function ImageCard(props){

    console.log(props);

    return (
        <div className="cardContainer">
            <img src={props.url}/>
        </div>
    )
}

export default ImageCard;