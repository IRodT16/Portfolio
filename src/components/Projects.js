import React from 'react';
import styles from './Projects.module.css';
import img1 from '../../src/img/omni.png';
import img2 from '../../src/img/forkify.png';
import img3 from '../../src/img/vudu.png';
import img4 from '../../src/img/lmsa.png';

const Projects = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.projectheader}>Portfolio</h1>

      <div className={styles.snippitbox}>
        <div className={styles.img1}>
          <span className={styles.insert}>VuduWave</span>
        </div>
        <div className={styles.img2}>
          <span className={styles.insert}>LMSA</span>
        </div>
        <div className={styles.img3}>
          <span className={styles.insert}>OmniFood</span>
        </div>
        <div className={styles.img4}>
          <span className={styles.insert}>Forkify</span>
        </div>
        <div className={styles.img5}>
          <span className={styles.insert}>Natours</span>
        </div>
        {/* <img className={styles.snippit} src={img3} alt="Profile"></img>
        <img className={styles.snippit} src={img4} alt="Profile" />
        <img className={styles.snippit} src={img1} alt="Profile" />
        <img className={styles.snippit} src={img2} alt="Profile" />
        <img className={styles.snippit} src={img2} alt="Profile" /> */}
      </div>
    </div>
  );
};

export default Projects;
