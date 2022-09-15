import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contactBody}>
      <h1 className={styles.aboutheader}>Contact</h1>
      <h2 className={styles.subHeader}>Reach out!</h2>
      <p className={styles.about}>
        Thank you for taking the time to review my portfolio. I hope you were
        able to learn more about me and how committed I am to learning new
        technologies and meeting the next challenge.
      </p>
      <p className={styles.aboutsub}>
        If you would like to get in touch, email me at{' '}
        <a className={styles.number} href="mailto:rodeghier.ian@gmail.com">
          rodeghier.ian@gmail.com
        </a>
        &nbsp; or you can call or text at &nbsp;
        <a className={styles.number} href="tel:+(407) 810 7183">
          (407) 810 7183
        </a>
        .
      </p>
      <div className={styles.icons}>
        <a className={styles.iconLink} href="tel:+(407) 810 7183">
          <ion-icon name="call-outline"></ion-icon>
        </a>
        <a className={styles.iconLink} href="mailto:rodeghier.ian@gmail.com">
          <ion-icon name="mail-outline"></ion-icon>
        </a>
        <a
          href="https://www.linkedin.com/in/ian-rodeghier/"
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
