import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.body}>
      <h1 className={styles.aboutheader}>About Me</h1>
      <p className={styles.about}>
        I'm a freelance web developer and an educator with a passion for
        designing and creating effective, quality applications. I love to learn
        and am always ready to take on a challenge, which is why I've branched
        from education into web development. From the moment I learned to write
        my first JavaScript function, I've been hooked!
      </p>
      <p className={styles.about}>
        In my spare time, I enjoy competitive sailing, which is why my most
        recent application build is a scoring app for sailing regattas. I teamed
        up with a software engineer specializing in backend python development,
        designed and built the frontend for our app, VuduWave, using ReactJS.
        Currently, the app is in use by several sailing clubs throughout Central
        Florida.
      </p>
      <p className={styles.about}>
        I've spent the past 9 years as a secondary math teacher. In that time, I
        have also served on district wide teams to help design curriculum for
        students, as well as, lead professional development training for fellow
        educators. In this position, I learned to methodically solve many unique
        and complex problems, as well as, effectively teach and communicate
        intricate concepts to both students and peers.
      </p>
    </section>
  );
};

export default About;
