import React from 'react';
import s from './gameBlock.module.css';
import AnswerList from '../answerList/answerList';
import BirdInfo from '../birdInfo/birdInfo';
import birdsData from '../../birdsData';


const GameBlock = () => {
  return (
    <div className={s.gameBlock}>
      <AnswerList data={birdsData[0].data}/>
      <BirdInfo data={birdsData[0].data[0]}/>  
    </div>
  );
}

export default GameBlock;