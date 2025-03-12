import React from 'react';
import style from './Hero.module.css';

function Hero() {
  return (
    <header>
      <section className={style.logo_wrapper}>
        <img
          className={style.logo}
          // src='https://files.codingninjas.in/pl-ninja-16706.svg'
          src='https://cdn.pixabay.com/photo/2019/03/30/14/06/online-4091231_1280.jpg'
          // src='https://cdn.pixabay.com/photo/2013/07/12/19/23/refresh-154688_1280.png'
          alt='logo'
        />
      </section>
      <section className={style.content}>
        <h4>Are you ready to ?</h4>
        <h1>Learn a Skill</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching scripted
          tutorials is great, but understanding how developers think is invaluable.
        </p>
      </section>
    </header>
  );
}

export default Hero;
