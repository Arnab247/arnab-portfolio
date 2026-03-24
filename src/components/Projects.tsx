import React from 'react';
import { Link } from 'react-router-dom';
import { RadioTower, Cpu, Gamepad2, Bot } from 'lucide-react';
import styles from './Projects.module.css';
import data from '../data/portfolio.json';

const Projects: React.FC = () => {
  const ProjectIcons = [RadioTower, Cpu, Gamepad2, Bot];

  const generateSlug = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        <div className={`animate-fade-up ${styles.header}`}>
          <h2 className={`${styles.title} gradient-text-theme`}>Featured Work</h2>
          <p className={styles.subtitle}>A selection of my recent engineering and research projects.</p>
        </div>
        
        <div className={styles.grid}>
          {data.projects.map((project, index) => (
            <Link 
              key={index} 
              to={`/project/${generateSlug(project.title)}`}
              className={`minimal-card animate-fade-up delay-${(index % 4 + 1) * 100} ${styles.card}`}
              style={{ textDecoration: 'none' }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  {React.createElement(ProjectIcons[index % ProjectIcons.length], { size: 24, strokeWidth: 1.5 })}
                </div>
                <div className={styles.cardArrow}>↗</div>
              </div>
              
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDescription}>{project.description}</p>
              
              <div className={styles.tags}>
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
