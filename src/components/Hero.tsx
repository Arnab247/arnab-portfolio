import React, { useState, useEffect } from 'react';
import { Aperture } from 'lucide-react';
import styles from './Hero.module.css';
import data from '../data/portfolio.json';

const Hero: React.FC = () => {
  const { profile } = data;
  
  // Typing animation state
  // Typing animation state
  const titles = ["UofT Engineering Student.", "Hardware & AI Developer.", "ASIC & FPGA Developer.", "Robotics Enthusiast."];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentFullText = titles[currentTitleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
        return;
      }
      
      if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        return;
      }
      
      setCurrentText(
        currentFullText.substring(0, currentText.length + (isDeleting ? -1 : 1))
      );
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTitleIndex]);

  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.overlay}></div>
      <Aperture className={styles.chakraIcon} strokeWidth={1} />
      <span className={styles.bengaliWatermark}>অর্ণব</span>
      <div className={`container ${styles.content}`}>
        <h1 className={`animate-fade-up ${styles.title}`}>
          Hi, I am <span className={styles.nameHighlight}>{profile.name}</span>
        </h1>
        
        <h2 className={`animate-fade-up delay-100 ${styles.subtitle}`}>
          I am a <span className={styles.typingText}>{currentText}</span><span className={styles.cursor}>_</span>
        </h2>
        
        <p className={`animate-fade-up delay-200 ${styles.description}`}>
          {profile.heroDescription}
        </p>
        
        <div className={`animate-fade-up delay-300 ${styles.actions}`}>
          <a href="#about" className={styles.primaryBtn}>Discover More</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>Connect on LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
