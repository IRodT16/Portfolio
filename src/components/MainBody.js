import styles from './MainBody.module.css';
import Image from '../img/profile-comp.avif';

const Main = () => {
  return (
    <div className={styles.main}>
      <img className={styles.profile} src={Image} alt="Profile" />
      <h1 className={styles.mainheader}>Hi, I'm Ian</h1>
      <p className={styles.mainbody}>
        An educator and full-stack web developer
      </p>
    </div>
  );
};

export default Main;
