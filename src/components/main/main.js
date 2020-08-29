import React, { Component } from 'react';
import s from './main.module.css';
import QuestionBlock from '../questionBlock/questionBlock';
import GameBlock from '../gameBLock/gameBlock';
import birdData from '../../birdsData';
// import Button from '../button/button';

class Main extends Component {
  constructor(props) {
    super(props);    
    this.answer = this.getRandomNumber(6);
    this.isAnsweredCorrectly = true;
  }

  getRandomNumber = (length) => {
    console.log('here')
    return Math.round(Math.random() * (length - 1));
  }
  
  changeQuestion = () => {
    this.answer = this.getRandomNumber(6);
    // this.setState({selectedBird: null});
    this.props.changeLevel(birdData);
  }

  render() {
    const { level, changeLevel,  } = this.props;
    const { answer, changeQuestion, isAnsweredCorrectly, selectedBird } = this;
    const currentRoundData = birdData[level].data;
    
    console.log(selectedBird, 'next')

    return (
      <main>
        <QuestionBlock 
          // level={level}
          data={currentRoundData[answer]}
          isAnsweredCorrectly={isAnsweredCorrectly}
        />
        <GameBlock 
          // level={level} 
          answer={answer}       
          data={currentRoundData}
        />
        <button 
          className={s.nextBtn} 
          onClick={changeQuestion} 
        >Next level</button>
      </main>
    )
  }
}

export default Main;