import React from 'react';
import s from './answerList.module.css';

const AnswerList = ({ data, answer, chooseBird }) => {
  const listItem = data.map(({id, name}) => {
    return (
      <li 
        className={s.answerList__item} 
        key={id} 
        id={id}
        onClick={chooseBird}
      >
        <div className={s.answerList__mark} />
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