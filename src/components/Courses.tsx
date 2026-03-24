import React from 'react';
import { BookOpen } from 'lucide-react';
import styles from './Courses.module.css';
import data from '../data/portfolio.json';

const Courses: React.FC = () => {
  return (
    <section id="courses" className={styles.coursesSection}>
      <div className="container">
        <div className={styles.header}>
          <div className="animate-fade-up">
            <h2 className={styles.title}>
              Technical <span className="gradient-text-accent">Coursework</span>
            </h2>
            <p className={styles.subtitle}>
              Core engineering and mathematics curriculum at the University of Toronto.
            </p>
          </div>
        </div>

        <div className={styles.tiersContainer}>
          {data.courses.map((tierGroup, tierIndex) => (
            <div key={tierIndex} className={styles.tierSection}>
              <div className={`animate-fade-up ${styles.tierHeader}`}>
                <h3 className={styles.tierTitle}>{tierGroup.tier}</h3>
              </div>
              
              <div className={styles.grid}>
                {tierGroup.list.map((course, index) => (
                  <div 
                    key={course.code} 
                    className={`animate-fade-up ${styles.courseCard}`}
                    style={{ animationDelay: `${(tierIndex * 2 + index) * 50}ms` }}
                  >
                    <div className={styles.iconWrapper}>
                      <BookOpen size={14} className={styles.icon} />
                    </div>
                    <div className={styles.content}>
                      <span className={styles.code}>{course.code}</span>
                      <span className={styles.name}>{course.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
