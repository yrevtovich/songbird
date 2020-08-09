import React from 'react';
import s from './answerList.module.css';

const AnswerList = ({ data }) => {
  const listItem = data.map((item) => {
    return (
      <li className={s.answerList__item} key={item.id}>
        <div className={s.answerList__mark} />
        {item.name}
      </li>
    )
  })
  return (
    <ul className={s.answerList}>
      {listItem}
    </ul>
  )
}
  

export default AnswerList;