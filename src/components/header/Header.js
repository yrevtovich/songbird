import React from 'react';
import s from './header.module.css';
import birdsData from '../../birdsData';
import QuestionListItem from './qustionListItem/questionListItem';
import logo from '../../assets/logo.svg'

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
        <h1>
          <img className={s.header__logo} src={logo}/>
        </h1>
        <p className={s.header__scoreBlock}>Score: {score}</p>
      </div>
      <ul className={s.questionList}>
        {questionList}
      </ul>
    </header>
  )
}

export default Header;