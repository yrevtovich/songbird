import React from 'react';
import s from './birdInfo.module.css';
import Audioplayer from '../audioplayer/audioplayer';

const BirdInfo = ({ data }) => {
  if (!data) {
    return (<div className={s.birdInfo}>choose bird</div>)
  }
  const { name, species, description, image, audio } = data;
  return (
    <div className={s.birdInfo}>
      <div className={s.birdInfo__main}>
        <img className={s.birdInfo__image} src={image} alt='Bird illustration' />
        <div className={s.birdInfo__about}>
          <h3 className={s.birdInfo__name}>{name}</h3>
          <p className={s.birdInfo__species}>{species}</p>
          <Audioplayer audio={audio} autoplay={false}  layoutDirection={true} />
        </div>
      </div>
      <p className={s.birdInfo__description} >{description}</p>
    </div>
  );
}

export default BirdInfo;