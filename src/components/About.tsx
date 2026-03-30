import React from 'react';
import { Zap, Microchip, Binary, Network, Leaf } from 'lucide-react';
import styles from './About.module.css';
import data from '../data/portfolio.json';

const About: React.FC = () => {
  const { profile } = data;

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`container ${styles.aboutContainer}`}>
        <div className={`animate-fade-up ${styles.textContent}`}>
          <h2 className={`${styles.title} gradient-text-theme`}>About Me</h2>
          <div className={styles.skillsList}>
            <span className={styles.skillBadge}><Zap size={14} strokeWidth={2} /> Motivated</span>
            <span className={styles.skillBadge}><Microchip size={14} strokeWidth={2} /> Creative</span>
            <span className={styles.skillBadge}><Binary size={14} strokeWidth={2} /> Team Player</span>
            <span className={styles.skillBadge}><Network size={14} strokeWidth={2} /> Leader</span>
          </div>
          <p className={styles.bio}>
            {profile.subTitle}
          </p>
          <p className={styles.bio}>
            {profile.connectText}
          </p>
          <div className={styles.contactInfo}>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Location:</strong> <span className={styles.locationIcon}><Leaf size={14} /></span> {profile.location}</p>
          </div>
          <a href="#projects" className={styles.primaryBtn}>See My Work</a>
          <span className={styles.bengaliGreeting}>— নমস্কার</span><p> (Welcome)</p>
        </div>

        <div className={`animate-fade-up delay-200 ${styles.imageContent}`}>
          {/* We use the same hero background image as a placeholder for a personal profile shot */}
          <div className={styles.imageWrapper}>
            <img src="/ArnabNYC.jpeg" alt="Arnab Mandal" className={styles.profileImage} />
            <div className={styles.imageBackdrop}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
