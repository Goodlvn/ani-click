import React from "react";
import "../styles/navbar.css"

function NavBar(props) {

    return (
        <nav>
            <ul>
                <li className="item1">ANIME CLICKY GAME</li>
                <li className="item2 banner">{props.banner}</li>
                <li className="item3">Score: {props.score} | Top Score: {props.topScore} </li>
            </ul>
            
        </nav>
    )
   
}

export default NavBar;