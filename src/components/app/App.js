import React, { Component } from 'react';
import s from './app.module.css';
import Header from '../header/header';
import Main from '../main/main';
// import birdData from '../../birdsData';

class App extends Component {
  state = {
    score: 0,
    level: 0,
  }

  // getRandomNumber = (length) => {
  //   return Math.round(Math.random() * (length - 1));
  // }

  changeLevel = (data) => {
    const { level } = this.state;

    if (level < data.length - 1) {      
      this.setState({ level: level + 1 });
    }
  }

  updateScore = (points) => {
    const { score } = this.state;
    this.setState({ score: score + points });
  }
  
  render () { 
    const { score, level } = this.state;

    return (
      <div className={s.container}>
        <Header 
          score={score} 
          level={level} 
        />
        <Main 
          changeLevel={this.changeLevel} 
          level={level}
          updateScore={this.updateScore}
        />
      </div>
    );
  }
}

export default App;
