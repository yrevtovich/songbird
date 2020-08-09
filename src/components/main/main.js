import React from 'react';
import s from './main.module.css';
import QuestionBlock from '../questionBlock/questionBlock';
import GameBlock from '../gameBLock/gameBlock';

const Main = () => {
  return (
    <main>
      <QuestionBlock />
      <GameBlock />
    </main>
  )
}

export default Main;