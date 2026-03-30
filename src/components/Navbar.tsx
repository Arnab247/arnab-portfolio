import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // If not on the homepage, force the "scrolled" style so the white text isn't invisible against the light blueprint background
  const applyScrolledStyle = scrolled || !isHomePage;

  return (
    <nav className={`${styles.navbar} ${applyScrolledStyle ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <a href="/#home" className={styles.logo}>
          <span className={styles.logoEnglish}>Arnab<span className="gradient-text-accent">.</span></span>
          <span className={styles.logoBengali}>অর্ণব<span className="gradient-text-accent">.</span></span>
        </a>
        <div className={styles.links}>
          <a href="/#about" className={styles.navLink}>About</a>
          <a href="/#projects" className={styles.navLink}>Work</a>
          <a href="/#experience" className={styles.navLink}>Timeline</a>
          <a href="/#courses" className={styles.navLink}>Courses</a>
          <a
            href="https://drive.google.com/file/d/1bh1elZhYGwMsilXYQ1zol9vh0wPR_6R3/view?usp=sharing"
            className={styles.navLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
