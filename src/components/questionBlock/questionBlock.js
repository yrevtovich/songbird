import React from 'react';
import s from './questionBlock.module.css';
import defaultBird from '../../assets/defaultBird.jpg';
import Audioplayer from '../audioplayer/audioplayer';

const QuestionBlock = ({ data: { name, image, audio }, isAnsweredCorrectly }) => {
  // console.log(data, isAnsweredCorrectly)
  
  return (
    <div className={s.questionBlock}>
      <img 
        className={s.questionBlock__image} 
        src={isAnsweredCorrectly ? image : defaultBird}
      />
      <div className={s.questionBlock__data}>
        <p className={s.questionBlock__name}>
          {isAnsweredCorrectly ? name : '******'}
        </p>
        <Audioplayer audio={audio} autoplay={true}/>
      </div>
    </div>
  )
}

export default QuestionBlock;