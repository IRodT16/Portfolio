import React, { useState } from 'react';
import styles from './Navigation.module.css';

const Nav = (props) => {
  const [currentPage] = useState('main');
  console.log(currentPage);

  //   const navClickHandler = (props) => {
  //     setCurrentPage(props);
  //     console.log(currentPage);
  //   };

  return (
    <nav className={styles.mainnav}>
      {/* <span className={styles.monogram}>IR</span> */}
      <h1 className={styles.logo}>
        {props.path === 'main' && <div>Ian Rodeghier</div>}
        {/* <a
          className={styles.navheader}
          href="#main"
          onClick={() => props.setPath('main')}
        >
          Ian Rodeghier
        </a> */}
        {props.path !== 'main' && (
          <span
            className={styles.monogram}
            href="#main"
            onClick={() => props.setPath('main')}
          ></span>
        )}
      </h1>
      <ul className={styles.navlist}>
        <li>
          <a
            className={styles.navlink}
            href="#about"
            onClick={() => props.setPath('about')}
          >
            About
          </a>
        </li>
        <li>
          <a
            className={styles.navlink}
            href="#projects"
            onClick={() => props.setPath('projects')}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            className={styles.navlink}
            href="#skills"
            onClick={() => props.setPath('skills')}
          >
            Skills
          </a>
        </li>

        <li>
          <a
            className={styles.navlink}
            href="#contact"
            onClick={() => props.setPath('contact')}
          >
            Contact
          </a>
        </li>

        <li className={styles.resume}>
          <a
            className={styles.navlink}
            href="#resume"
            onClick={() => props.setPath('resume')}
          >
            Resume
          </a>
          {/* <ion-icon
            className={styles.resumeIcon}
            name="download-outline"
          ></ion-icon> */}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
