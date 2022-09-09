import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contactBody}>
      <h1 className={styles.aboutheader}>Contact</h1>
      <h2 className={styles.subHeader}>Reach out!</h2>
      <p className={styles.about}>
        Thank you for taking the time to review my portfolio. I hope you saw
        something that you liked and hire me for tons of money. All hail the
        Moose!
      </p>
      <p className={styles.about}>stuff stuff stuff</p>
      <div className={styles.icons}>
        <ion-icon name="call-outline"></ion-icon>
        <ion-icon name="mail-outline"></ion-icon>
        <a
          href="https://www.linkedin.com/in/ian-rodeghier-5167b9199/"
          target="_blank"
          rel="noreferrer"
          className={styles.iconLink}
        >
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <a
          href="https://github.com/IRodT16"
          target="_blank"
          rel="noreferrer"
          className={styles.iconLink}
        >
          <ion-icon name="logo-github"></ion-icon>
        </a>
      </div>
    </section>
  );
};

export default Contact;
