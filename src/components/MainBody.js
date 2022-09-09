import React from 'react';
import styles from './MainBody.module.css';
import Image from '../img/profile2.jpg';

const Main = () => {
  return (
    <div className={styles.main}>
      <img className={styles.profile} src={Image} alt="Profile" />
      <h1 className={styles.mainheader}>Hi, I'm Ian</h1>
      <p className={styles.mainbody}>
        An educator and freelance full-stack web developer
      </p>
    </div>
  );
};

export default Main;
