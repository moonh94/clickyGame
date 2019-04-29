import React, {Component} from 'react';
import './App.css';
import Image from "./components/Images/index.js"
import images from "./image.json";
import NavBar from "./components/Navbar/NavBar";
import Wrapper from "./components/Wrapper";
// import React from "react";
// import "./style.css";

// class Game extends React.Component {
//     state = {
//         count: 0
//     };
//  handleIncrement = () => {
//     this.setState({ count: this.state.count +1})
//     }

//     render () {
//         return (
//         <ShowImage />
// }

// export default Game;

class App extends Component {
  state={
    images,
    score: 0,
    highscore: 0
  };
      
  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.images.forEach(image => {
      image.count = 0;
    });
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.images.find((o, i) => {
      if (o.id === id) {
        if(images[i].count === 0){
          images[i].count = images[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.images.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }
  // Map over this.state.cards and render a cardCard component for each card object
  render() {
    return (
      <Wrapper>
        <NavBar score={this.state.score} highscore={this.state.highscore}>Clicky Game</NavBar>
        <div className="row">
        {this.state.images.map(images => (
          <Image
            clickCount={this.clickCount}
            id={images.id}
            key={images.id}
            image={images.image}
          />
        ))}
        
          </div>
      </Wrapper>
    );
  }
}

export default App