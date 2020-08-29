import React from 'react';
import s from './birdInfo.module.css';

const BirdInfo = ({ data }) => {
  const { name, species, description, image, audio } = data;
  return (
    <div className={s.birdInfo}>
      <div className={s.birdInfo__main}>
        <img className={s.birdInfo__image} src={image} />
        <div className={s.birdInfo__about}>
          <h3 className={s.birdInfo__name}>{name}</h3>
          <p className={s.birdInfo__species}>{species}</p>
          <audio className={s.birdInfo__audio} src={audio}/>
        </div>
      </div>
      <p className={s.birdInfo__description} >{description}</p>
    </div>
  );
}

export default BirdInfo;