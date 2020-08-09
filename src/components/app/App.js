import React from 'react';
import s from './app.module.css';
import Header from '../header/header';
import Main from '../main/main';

function App() {
  return (
    <div className={s.container}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
