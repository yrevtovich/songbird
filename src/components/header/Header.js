import React from 'react';
import s from './header.module.css';
import birdsData from '../../birdsData';
import QuestionListItem from './qustionListItem/questionListItem';

const Header = ({ score, level }) => {
  const questionList = birdsData.map(({ title, round }, index) => (
    <QuestionListItem 
      text={title} 
      key={round} 
      active={level === index ? true : false} 
    />
  ));

  return (
    <header className={s.header}>
      <div className={s.header__info}>
        <h1 className={s.header__logo}>Songbird</h1>
        <p className={s.header__scoreBlock}>Score: {score}</p>
      </div>
      <ul className={s.questionList}>
        {questionList}
      </ul>
    </header>
  )
}

export default Header;