import React, { Component } from 'react';
import s from './app.module.css';
import Header from '../header/header';
import Main from '../main/main';
import GameEndBlock from '../gameEndBlock/gameEndBlock';

class App extends Component {
  maxScore = 30;

  state = {
    score: 0,
    level: 0,
    isGameCompleted: false,
  }

  changeLevel = (data) => {
    const { level } = this.state;

    if (level < data.length - 1) {      
      this.setState({ level: level + 1 });
    } else {
      this.setState({ isGameCompleted: true })
    }
  }

  updateScore = (points) => {
    const { score } = this.state;
    this.setState({ score: score + points });
  }

  repeatGame = () => {
    this.setState({ isGameCompleted: false })
  }
  
  render () { 
    const { score, level, isGameCompleted } = this.state;

    return (
      <div className={s.container}>
        <Header 
          score={score} 
          level={level} 
        />
        {!isGameCompleted ? 
        <Main 
          changeLevel={this.changeLevel} 
          level={level}
          updateScore={this.updateScore}
        /> : 
        <GameEndBlock 
          score={score} 
          maxScore={this.maxScore} 
          onClickHandler={this.repeatGame}
        />}
      </div> 
    );
  }
}

export default App;
