import React, { Component } from 'react';
import s from './gameBlock.module.css';
import AnswerList from '../answerList/answerList';
import BirdInfo from '../birdInfo/birdInfo';
import correctSound from '../../assets/correct.mp3';
import incorrectSound from '../../assets/incorrect.mp3';

class GameBlock extends Component {
  constructor(props) {
    super(props);
    this.answer = this.props.answer;
    this.data = this.props.data;
    this.answerSounds = true;
    this.chosenOptions = [];
    this.state = {
      selectedBird: null,
    }
  }

  componentDidUpdate() {
    const { isRoundCompleted, resetRound } = this.props;
    if (isRoundCompleted) {      
      this.chosenOptions = [];
      resetRound();
      this.setState({ selectedBird: null, });
    }
  }

  playSound = (sound) => {   
    const audio = new Audio(sound);
    audio.play();
  } 

  chooseBird = (event) => {
    const { target, target: { id } } = event;
    const { checkAnswer, updateScore, isAnsweredCorrectly, answer } = this.props;

    if (target.tagName !== 'LI' ) {      
     return;
    }
    this.setState({ selectedBird: id - 1 });

    const isCorrect = +id === answer + 1 ? true : false;
    const isSelected = this.chosenOptions.find((item) => item === +id);
    
    if (isSelected || isAnsweredCorrectly) {
      return;
    }

    this.chosenOptions.push(+id);

    if (isCorrect && !isSelected) {      
      updateScore(this.data.length - this.chosenOptions.length);
      checkAnswer(isCorrect);
      this.playSound(correctSound);
    } 

    if (!isCorrect && !isSelected) {
      this.playSound(incorrectSound);
    }
   
  }

  render() {
    const { data, answer } = this.props;
    const { selectedBird } = this.state;

    return (
      <div className={s.gameBlock} >
        <AnswerList 
          data={data} 
          answer={answer} 
          chooseBird={this.chooseBird}
          chosenOptions={this.chosenOptions}
        />
        <BirdInfo data={data[selectedBird]}/>  
      </div>
    );
  }
}

export default GameBlock;