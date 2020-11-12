import React from "react";
import "../styles/game.css"



// const cardComponents = cardData.map(card => <Card key={card.id} url={card.url} scorePoints={props.this} />)

function Game(props) {

    return(
        <div>
            <div className="gameContainer">
                {props.children}
             </div>
        </div> 
    )
}

export default Game;