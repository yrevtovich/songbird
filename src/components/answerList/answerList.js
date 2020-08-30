import React from 'react';
import s from './answerList.module.css';

const AnswerList = ({ data, answer, chooseBird, chosenOptions }) => {

  const listItem = data.map(({id, name}) => {
    const isChosen = chosenOptions.find((item) => item === id);
    const isCorrect = id === answer + 1;

    let markClassName = `${s.answerList__mark}`;

    if (isChosen && isCorrect) {
      markClassName += ` ${s.answerList__mark_correct}`
    }
    
    if (isChosen && !isCorrect) {
      markClassName += ` ${s.answerList__mark_incorrect}`
    }

    return (
      <li 
        className={s.answerList__item} 
        key={id} 
        id={id}
        onClick={chooseBird}
      >
        <div className={markClassName} />
        {name}
      </li>
    )
  })
  return (
    <ul className={s.answerList} >
      {listItem}
    </ul>
  )
}
  

export default AnswerList;