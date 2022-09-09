import React from 'react';
import styles from './MainBody.module.css';
import Image from '../img/profile2.jpg';

const Main = () => {
  return (
    <div className={styles.main}>
      <img className={styles.profile} src={Image} alt="Profile" />
      <h1>Hi, I'm Ian</h1>
      <p>An educator and freelance full-stack web developer</p>
    </div>
  );
};

export default Main;
