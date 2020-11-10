import React from "react";
import ImageCard from "./ImageCard"
import "../styles/game.css"

function Game() {
    return(
        <div>
            <div className="gameContainer">
            <ImageCard url="./images/mob.jpg" />
            <ImageCard url="./images/mob.jpg" />
            <ImageCard url="./images/mob.jpg" />
            <ImageCard url="./images/mob.jpg" />
            <ImageCard url="./images/mob.jpg" />
            <ImageCard url="./images/mob.jpg" />
            <ImageCard url="./images/mob.jpg" />
            <ImageCard url="./images/mob.jpg" />
            <ImageCard url="./images/mob.jpg" />
            <ImageCard url="./images/mob.jpg" />
            <ImageCard url="./images/mob.jpg" />
            <ImageCard url="./images/mob.jpg" />
             </div>
        </div> 
    )
}

export default Game;