import React from 'react';
import s from './gameEndBlock.module.css';

const GameEndBlock = ({score, maxScore, onClickHandler }) => {

  return (
    <div className={s.wrapper}>
      <div className={s.scoreBlock}>
        <h2 className={s.scoreBlock__header}>Поздравляем!</h2>
        <p className={s.scoreBlock__result}>{`Вы прошли викторину и набрали ${score} из ${maxScore} возможных баллов`}</p>
      </div>
      {score === maxScore ? 
      <div>
        <p className={s.notification__header}>
          Вы набрали максимальное количество очков! 
        </p>
        <p className={s.notification__content}>
          Еще немного полезной информации о птицах вы можете найти:  
          <a className={s.link} href='https://www.mybirds.ru/'>  https://www.mybirds.ru/</a>
        </p>
      </div> : 
      <button 
        className={s.btnRepeat}
        onClick={onClickHandler}
      >Попробовать еще раз</button>}
    </div>    
  )
}

export default GameEndBlock;