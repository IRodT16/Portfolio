import React from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.projectheader}>Portfolio</h1>

      <div className={styles.snippitbox}>
        <div className={styles.imgwrapper}>
          <div className={styles.img1}>
            <div className={styles.insert}>
              <span className={styles.label}>VuduWave</span>
              <div className={styles.hiddenEl}>
                <a
                  href="https://vuduwave.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.hiddenLabel}
                >
                  Live
                </a>
                <a
                  href="https://github.com/IRodT16/VuduWave-React-UI"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.hiddenLabel}
                >
                  Repo
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.imgwrapper}>
          <div className={styles.img2}>
            <div className={styles.insert}>
              <span className={styles.label}>LMSA</span>
              <div className={styles.hiddenEl}>
                <a
                  href="https:runwayjack.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.hiddenLabel}
                >
                  Live
                </a>
                <a
                  href="https://github.com/IRodT16/LMSA"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.hiddenLabel}
                >
                  Repo
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.imgwrapper}>
          <div className={styles.img3}>
            <div className={styles.insert}>
              <span className={styles.label}>OmniFood</span>
              <div className={styles.hiddenEl}>
                <a
                  href="https:omnifood-sample-project.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.hiddenLabel}
                >
                  Live
                </a>
                <a
                  href="https://github.com/IRodT16/VuduWave-React-UI"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.hiddenLabel}
                >
                  Repo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.imgwrapper}>
          <div className={styles.img4}>
            <div className={styles.insert}>
              <span className={styles.label}>Forkify</span>
              <div className={styles.hiddenEl}>
                <a
                  href="https://forkify-irod.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.hiddenLabel}
                >
                  Live
                </a>
                <a
                  href="https://github.com/IRodT16/forkify-udemy-course-project"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.hiddenLabel}
                >
                  Repo
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.imgwrapper}>
          <div className={styles.img5}>
            <div className={styles.insert}>
              <span className={styles.label}>Natours</span>
              <div className={styles.hiddenEl}>
                <a
                  href="https:runwayjack.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.hiddenLabel}
                >
                  Live
                </a>
                <a
                  href="https://github.com/IRodT16/ExpressModule-NodeJS-Bootcamp"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.hiddenLabel}
                >
                  Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
