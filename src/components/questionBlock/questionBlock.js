import React from 'react';
import s from './questionBlock.module.css';
import defaultBird from '../../assets/defaultBird.jpg';

const QuestionBlock = (data) => {
  return (
    <div className={s.questionBlock}>
      <img className={s.questionBlock__image} src={defaultBird}/>
      <div className={s.questionBlock__data}>
        <p className={s.questionBlock__name}>******</p>
        <audio className={s.questionBlock__audio}></audio>
      </div>
    </div>
  )
}

export default QuestionBlock;