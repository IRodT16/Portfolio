import styles from './Skills.module.css';

const Skills = () => {
  return (
    <section className={styles.body}>
      <h1 className={styles.aboutheader}>Skills</h1>
      <div className={styles.skillsBox}>
        <div className={styles.skill}>
          <ion-icon name="desktop-outline"></ion-icon>
          <div className={styles.skillRow}>
            <h1 className={styles.skillHeader}>Frontend</h1>
            <p className={styles.skillList}>React / JavaScript / HTML / CSS</p>
          </div>
        </div>

        <div className={styles.skill}>
          <ion-icon name="terminal-outline"></ion-icon>
          {/* <ion-icon name="cube-outline"></ion-icon> */}
          <div className={styles.skillRow}>
            <h1 className={styles.skillHeader}>Backend</h1>
            <p className={styles.skillList}>
              Node.js / Express / Mongoose / MongoDB / SQL / MySQL / REST APIs
            </p>
          </div>
        </div>

        <div className={styles.skill}>
          <ion-icon name="construct-outline"></ion-icon>
          <div className={styles.skillRow}>
            <h1 className={styles.skillHeader}>Tools</h1>
            <p className={styles.skillList}>Git / Postman / Compass / Heroku</p>
          </div>
        </div>

        <div className={styles.skill}>
          <ion-icon name="sparkles-outline"></ion-icon>
          <div className={styles.skillRow}>
            <h1 className={styles.skillHeader}>Other</h1>
            <p className={styles.skillList}>
              Instructional Design / Curriculum Writing / Teaching / Technical
              Writing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
