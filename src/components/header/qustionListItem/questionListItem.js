import React from 'react';
import s from './questionListItem.module.css'

const QuestionListItem = ({text, active}) => {
  return (
    <li className={active ? s.questionList__item_active : s.questionList__item}>
      {text}
    </li>
  )
}

export default QuestionListItem;