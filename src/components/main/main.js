import React from 'react';
import s from './main.module.css';
import QuestionBlock from '../questionBlock/questionBlock';
import GameBlock from '../gameBLock/gameBlock';
// import Button from '../button/button';

const Main = () => {
  return (
    <main>
      <QuestionBlock />
      <GameBlock />
      <button className={s.nextBtn}>Next level</button>
    </main>
  )
}

export default Main;