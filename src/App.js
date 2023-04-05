import React from 'react';
import style from './style.module.css';

export default function App() {
  return (
    <>
      <div class={style.teste}>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
      </div>
      <div class={style['pseudo-Element']}>
        <p>Acessando objetos scss via module class={style['pseudo-Element']}</p>
      </div>
    </>
  );
}
