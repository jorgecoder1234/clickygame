import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import IconCard from './components/IconCard';
import Icons from './icons.json';
//
import "./components/IconCard.css";



//the shuffle Array ramdonly move the elements in the array
const shuffleArray = (array) => {
  let counter = array.length;
 
  while (counter > 0) {
      let index = Math.floor(Math.random() * counter);
      counter--;
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
  }
  return array;
};

//Here starts the App Component


class App extends Component {

  state = {
    currentScore: 0,
    topScore: 0,
    result: "",
    clicked: [],
    Icons,      //Contains the Icon Json
    gameOver: false
  };

  // When the page loads and the component mounts,
  // display starting message
  componentDidMount() {
    this.setState({result: "Click a player to get started"})
  }


  //When the image is clicked, the clcked array is verified and if the id does not incluede the pints increase and the process continues
  clickedPlayer = (id) => {
    console.log(`Picture clicked with id: ${id}`);
    if(!this.state.clicked.includes(id)){
      this.pointIncrease();
      this.state.clicked.push(id);
      this.setState({
        gameOver: false
      });
    } else {
      this.resetGame();
    }
  }

  
  pointIncrease = () => {
    let score = this.state.currentScore + 1;
    console.log(`the score is ${score}`);
    if (score === this.state.Icons.length) {
      this.setState({
        result: "Congratulations you win! ",
        topScore: score,
        currentScore: 0,
        clicked: [],
        Icons,
        gameOver: false
      });
    } else if (score > this.state.topScore) {
      this.setState({
        topScore: score,
        currentScore: score,
        result: "Correct! You are the new high score",
      });
    } else {
      this.setState({
        currentScore: score,
        result: "You Guess!"
      });
    }
    this.resetIconArray();
  }

  // reset the game when the user chooses a duplicate
  resetGame = () => {
    this.setState({
      points: 0,
      currentScore:0,
      topScore: this.state.topScore,
      result: "You Loss!",
      clicked: [],
      Icons,
      gameOver: true
    });
    console.log('Game over? ', this.state.gameOver);
    this.resetIconArray();
  }

  // Run the function to re-oreder the array again
  resetIconArray = () => {
    let newScramble = shuffleArray(Icons);
    this.setState({Icons: newScramble})
  }

  render() {
    return (
      <div className='container'>
        <NavBar topScore={this.state.topScore} currentScore={this.state.currentScore} status={this.state.result}/>
        <Banner />
        <div className='mainStyle'>
        {this.state.Icons.map(icon => (
        <IconCard
          id={icon.id}
          image={icon.image}
          clickedPlayer={this.clickedPlayer}
        />
        ))}
        </div>
      </div>
    );
  }
}

export default App;