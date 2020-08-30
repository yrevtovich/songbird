import React, { Component } from 'react';
import s from './gameBlock.module.css';
import AnswerList from '../answerList/answerList';
import BirdInfo from '../birdInfo/birdInfo';
// import birdsData from '../../birdsData';


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
  // state = {
  //   selectedBird: this.props.selectedBird ,
  // }
  // component

  componentDidUpdate() {
    const { isRoundCompleted, resetRound } = this.props;
    console.log(isRoundCompleted, 'is')
    if (isRoundCompleted) {      
      this.chosenOptions = [];
      resetRound();
      this.setState({ selectedBird: null, });
    }
  }

  // componentWillReceiveProps() {
  //   console.log('props')
  //   const { isAnsweredCorrectly } = this.props;
  //   console.log(isAnsweredCorrectly, 'is')
  //   if (isAnsweredCorrectly) {      
  //     this.chosenOptions = [];
  //     this.setState({ selectedBird: null, })
  //   }
  // }

  chooseBird = (event) => {
    const { target, target: { id } } = event;
    const { checkAnswer, updateScore, isAnsweredCorrectly, answer } = this.props;
    console.log(this.chosenOptions, 'this.chosenOptions', this.answer, answer, 'answ')

    if (target.tagName !== 'LI' ) {      
     return;
    }
    this.setState({ selectedBird: id - 1 });

    const isCorrect = +id === answer + 1 ? true : false;
    const isSelected = this.chosenOptions.find((item) => item === +id);
    // (isSelected, this.chosenOptions)
    
    if (isSelected || isAnsweredCorrectly) {
      return;
    }

    console.log(isSelected, isAnsweredCorrectly, '11')

    this.chosenOptions.push(+id);

    if (isCorrect && !isSelected) {      
      console.log('here')
      updateScore(this.data.length - this.chosenOptions.length);
      checkAnswer(isCorrect);
      // this.answerSounds = false;
    } 
   
  }

  render() {
    const { data, answer } = this.props;
    const { selectedBird } = this.state;
    // (selectedBird, 'selectedBird', this.props.selectedBird)

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