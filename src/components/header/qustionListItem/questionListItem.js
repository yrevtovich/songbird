import React from 'react';
import s from './questionListItem.module.css'

const QuestionListItem = ({text, played = null}) => {
  return (
    <li className={s.questionList__item}>
      {text}
    </li>
  )
}

export default QuestionListItem;