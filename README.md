## Anime Cicky Game

[![Generic badge](https://img.shields.io/badge/made_with-react-blue.svg)](https://shields.io/)

## Description

Do you like anime?! Well I do :) 

Test your memory while you play this clicky game. Try an get through all of the cards without clicking on any of the images twice! 

## Table of Contents

* [Installation](#installation)

* [Preview](#installation)

* [Code Snipet](#code-snipet)

* [Contributing](#contributing)

* [Questions](#questions)

## Installation

```
npm install
```

## Preview

![demo](./ani-click/public/images/demo.gif)

## Code Snipet

The code snipet below shows the startof the react class component and what we chose to keep track in for this app. We kept track of the state of the top score, score, the cards themselves and the banner used to communicate to the users. After declaring our state you can see the code used to update the information for keeping score, updating top score and communicating with the user.

```
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
```

## Contributing

[Jonathan-David Lopez Martinez](http://www.jds.world/)

## Questions 

If you have any questions about the repo, want to open an issue or contact me directly please reach out to focus4ursoul@gmail.com. Check out more of my work at [Goodlvn](https://github.com/Goodlvn).

<img src="https://avatars3.githubusercontent.com/u/37821521?v=4=50x50" alt="drawing" width="200"/>
