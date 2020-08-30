import React, { Component } from 'react';
import s from './main.module.css';
import QuestionBlock from '../questionBlock/questionBlock';
import GameBlock from '../gameBLock/gameBlock';
import birdData from '../../birdsData';
// import Button from '../button/button';

class Main extends Component {
  constructor(props) {
    super(props);    
    this.answer = this.getRandomAnswer(props.level);  
    this.state = {
      isAnsweredCorrectly: false,       
      isRoundCompleted: false,
    };
  }

  getRandomAnswer = (level) => {
    const round = birdData[level].data.length;
    return Math.round(Math.random() * (round - 1));
  }
  
  changeQuestion = () => {
    if (!this.state.isAnsweredCorrectly) {
      return;
    }

    const { level, changeLevel } = this.props;
    this.answer = this.getRandomAnswer(level);
    changeLevel(birdData);
    this.setState({ isAnsweredCorrectly: false, isRoundCompleted: true });
  }

  checkAnswer = (isCorrect) => {
    console.log(isCorrect, 'isCor')
    if (isCorrect) {
      this.setState({ isAnsweredCorrectly: isCorrect });
    }
  }

  resetRound = () => {
    this.setState({ isRoundCompleted: false });
  }

  render() {
    const { level, updateScore } = this.props;
    const { answer, changeQuestion, checkAnswer, resetRound } = this;
    const { isAnsweredCorrectly, isRoundCompleted } = this.state;
    const currentRoundData = birdData[level].data;
    
    console.log( isAnsweredCorrectly,'next', isRoundCompleted)

    return (
      <main>
        <QuestionBlock 
          data={currentRoundData[answer]}
          isAnsweredCorrectly={isAnsweredCorrectly}
        />
        <GameBlock 
          answer={answer}       
          data={currentRoundData}
          checkAnswer={checkAnswer}
          updateScore={updateScore}
          isAnsweredCorrectly={isAnsweredCorrectly}
          isRoundCompleted={isRoundCompleted}
          resetRound={resetRound}
        />
        <button 
          className={isAnsweredCorrectly ? s.nextBtn_active : s.nextBtn} 
          onClick={changeQuestion} 
        >Next level</button>
      </main>
    )
  }
}

export default Main;