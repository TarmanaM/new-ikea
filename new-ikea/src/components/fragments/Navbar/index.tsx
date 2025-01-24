import React from 'react';
import styles from './navbar.module.css'; // Mengimpor CSS Module

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>MyBrand</div>
      <ul className={styles.navbarMenu}>
        <li className={styles.navbarItem}>
          <a href="#home" className={styles.navbarLink}>Home</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#about" className={styles.navbarLink}>About</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#contact" className={styles.navbarLink}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
