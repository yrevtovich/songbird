import React, { Component } from 'react';
import s from './gameBlock.module.css';
import AnswerList from '../answerList/answerList';
import BirdInfo from '../birdInfo/birdInfo';
// import birdsData from '../../birdsData';


class GameBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBird: null,
    }
  }
  // state = {
  //   selectedBird: this.props.selectedBird ,
  // }

  componentWillReceiveProps() {
    console.log('props')
    this.setState({ selectedBird: null })
  }

  chooseBird = (event) => {
    const { target, target: { id } } = event;

    if (target.tagName === 'LI') {      
      console.log(id)
      this.setState({ selectedBird: id - 1 })
    }
  }

  render() {
    const { data, answer } = this.props;
    const { selectedBird } = this.state;
    console.log(selectedBird, 'selectedBird', this.props.selectedBird)

    return (
      <div className={s.gameBlock} >
        <AnswerList 
          data={data} 
          answer={answer} 
          chooseBird={this.chooseBird}
        />
        <BirdInfo data={data[selectedBird]}/>  
      </div>
    );
  }
}

export default GameBlock;