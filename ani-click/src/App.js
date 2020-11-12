import React, { Component } from "react";
import NavBar from "./components/NavBar"
import Jumbotron from "./components/Jumbotron"
import Game from "./components/Game"
import cardData from "./util/CardData";
import Card from "./components/Card"
import "./styles/set.css"



class App extends Component {

  state = {
    topScore: 0,
    score: 0,
    cards: cardData,
    banner: "click on an image to begin"
  }

  scorePoints = id => {

    let stateCards = this.state.cards;
    let score = this.state.score;
    let topScore = this.state.topScore;

    stateCards.forEach(card => {
      if (card.id === id) {

        if(card.clicked === true){
          this.setState({banner: "breuh.."});
          this.wrongEffect();
          this.setState({ score: 0 });
          stateCards.forEach(card => card.clicked = false);
        } else if(score === 11) {

          this.setState({ score: this.state.score + 1 });
          this.setState({banner: "WINNER WINNER CHICKEN DINNER"});
          this.setState({ score: 0 });
          this.setState({ topScore: 12 });
          stateCards.forEach(card => card.clicked = false);
        } else {
          this.setState({banner: "Sweet!"});
          card.clicked = true;
          this.setState({ score: this.state.score + 1 });
          this.correctEffect();
          if(topScore <= score){
            this.setState({ topScore: this.state.topScore + 1 });
          };
        };
      }; 
    });

  }

  correctEffect = () => {
    document.querySelector(".banner").classList.add("correct");

    setInterval(function(){document.querySelector(".banner").classList.remove("correct");}, 1000);
  }

  wrongEffect = () => {
    document.querySelector(".banner").classList.add("wrong");

    setInterval(function(){document.querySelector(".banner").classList.remove("wrong");}, 1000);
  }

  shuffleCards = (cardArray) => {

    let arrayLength = cardArray.length;

    for (let i = arrayLength - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = cardArray[i];
      cardArray[i] = cardArray[j];
      cardArray[j] = temp;
    }

    return cardArray
  }
  

  render() {

    const cardComponents = cardData.map(card => <Card key={card.id} id={card.id} url={card.url} scorePoints={this.scorePoints} clicked={card.clicked} />)


    return (
      <>
        <NavBar score={this.state.score} topScore={this.state.topScore} banner={this.state.banner} />
        <Jumbotron />
        <Game>
          {this.shuffleCards(cardComponents)}
        </Game>

      </>
    );
  }
}

export default App;
