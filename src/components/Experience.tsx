import React, { useState } from 'react';
import { Briefcase, GraduationCap, X, Flower2, Leaf, Award } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import styles from './Experience.module.css';
import data from '../data/portfolio.json';

const Experience: React.FC = () => {
  const university = data.education.filter(edu => !edu.degree.includes('High School') && !edu.degree.includes('Specialization'));
  const highSchool = data.education.filter(edu => edu.degree.includes('High School'));
  const certifications = data.education.filter(edu => edu.degree.includes('Specialization'));

  const expTop = data.experience.slice(0, 3);
  const expBottom = data.experience.slice(3);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalLoading, setModalLoading] = useState(false);

  const openModal = async (type: 'experience' | 'education', slug: string) => {
    setModalOpen(true);
    setModalLoading(true);
    setModalContent('');
    
    // Lock body scroll
    document.body.style.overflow = 'hidden';

    try {
      const res = await fetch(`/${type}/${slug}.md`);
      if (!res.ok) throw new Error('Markdown file not found');
      
      const text = await res.text();
      // Strip out YAML frontmatter if it exists
      const cleanText = text.replace(/^---[\s\S]+?---\n*/, '');
      setModalContent(cleanText);
    } catch (err) {
      console.error(err);
      setModalContent('Error loading documentation. The markdown file may be missing.');
    } finally {
      setModalLoading(false);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto'; // Restore scroll
  };

  return (
    <section id="experience" className={styles.experienceSection}>
      <div className="container">
        <div className={`animate-fade-up ${styles.header}`}>
          <h2 className={`${styles.title} gradient-text-theme`}>Experience & Education</h2>
        </div>
        
        <div className={styles.timeline}>
          {university.map((edu, index) => (
            <div 
              key={`edu-uni-${index}`} 
              className={`animate-fade-up delay-${(index + 1) * 100} ${styles.timelineItem}`}
              onClick={() => openModal('education', edu.slug)}
            >
              <div className={styles.timelineDot}>
                {edu.institution.includes('Canada') || edu.institution.includes('Toronto') || edu.institution.includes('Manitoba') || edu.institution.includes('Winnipeg') ? (
                  <Leaf size={16} className={`${styles.timelineSvg} ${styles.canadaIcon}`} />
                ) : (
                  <Flower2 size={16} className={styles.timelineSvg} />
                )}
              </div>
              <div className={styles.timelineContent}>
                <div className={`minimal-card ${styles.card}`}>
                  <span className={styles.period}>{edu.period}</span>
                  <h3 className={styles.role}>{edu.degree}</h3>
                  <h4 className={styles.company}>{edu.institution}</h4>
                  {edu.logo && (
                    <img 
                      src={edu.logo} 
                      alt={edu.institution} 
                      className={`${styles.timelineLogo} ${edu.institution.includes('Manitoba') ? styles.manitobaLogo : ''}`} 
                    />
                  )}
                  <p className={styles.description}>{edu.details}</p>
                </div>
              </div>
            </div>
          ))}

          {expTop.map((exp, index) => (
            <div 
              key={`exp-top-${index}`} 
              className={`animate-fade-up delay-${(university.length + index + 1) * 100} ${styles.timelineItem}`}
              onClick={() => openModal('experience', exp.slug)}
            >
              <div className={styles.timelineDot}>
                <Briefcase size={14} className={styles.timelineSvg} />
              </div>
              <div className={styles.timelineContent}>
                <div className={`minimal-card ${styles.card}`}>
                  <span className={styles.period}>{exp.period}</span>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <h4 className={styles.company}>{exp.company}</h4>
                  {exp.logo && (
                    <img 
                      src={exp.logo} 
                      alt={exp.company} 
                      className={`${styles.timelineLogo} ${exp.company.includes('Manitoba') ? styles.manitobaLogo : ''}`} 
                    />
                  )}
                  <p className={styles.description}>{exp.description}</p>
                </div>
              </div>
            </div>
          ))}

          {highSchool.map((edu, index) => (
            <div 
              key={`edu-hs-${index}`} 
              className={`animate-fade-up delay-${(university.length + expTop.length + index + 1) * 100} ${styles.timelineItem}`}
              onClick={() => openModal('education', edu.slug)}
            >
               <div className={styles.timelineDot}>
                 {edu.institution.includes('Winnipeg') || edu.institution.includes('Canada') ? (
                   <Leaf size={16} className={`${styles.timelineSvg} ${styles.canadaIcon}`} />
                 ) : (
                   <GraduationCap size={16} className={styles.timelineSvg} />
                 )}
               </div>
              <div className={styles.timelineContent}>
                <div className={`minimal-card ${styles.card}`}>
                  <span className={styles.period}>{edu.period}</span>
                  <h3 className={styles.role}>{edu.degree}</h3>
                  <h4 className={styles.company}>{edu.institution}</h4>
                  {edu.logo && <img src={edu.logo} alt={edu.institution} className={styles.timelineLogo} />}
                  <p className={styles.description}>{edu.details}</p>
                </div>
              </div>
            </div>
          ))}

          {certifications.map((edu, index) => (
            <div 
              key={`edu-cert-${index}`} 
              className={`animate-fade-up delay-${(university.length + expTop.length + highSchool.length + index + 1) * 100} ${styles.timelineItem}`}
              onClick={() => openModal('education', edu.slug)}
            >
              <div className={`${styles.timelineDot} ${styles.certDot}`}>
                <Award size={16} className={styles.timelineSvg} />
              </div>
              <div className={styles.timelineContent}>
                <div className={`minimal-card ${styles.card} ${styles.certCard}`}>
                  <span className={`${styles.period} ${styles.certPeriod}`}>{edu.period}</span>
                  <h3 className={styles.role}>{edu.degree}</h3>
                  <h4 className={styles.company}>{edu.institution}</h4>
                  <p className={styles.description}>{edu.details}</p>
                </div>
              </div>
            </div>
          ))}

          {expBottom.map((exp, index) => (
             <div 
              key={`exp-bot-${index}`} 
              className={`animate-fade-up delay-${(university.length + expTop.length + highSchool.length + certifications.length + index + 1) * 100} ${styles.timelineItem}`}
              onClick={() => openModal('experience', exp.slug)}
             >
              <div className={styles.timelineDot}>
                <Briefcase size={14} className={styles.timelineSvg} />
              </div>
              <div className={styles.timelineContent}>
                <div className={`minimal-card ${styles.card}`}>
                  <span className={styles.period}>{exp.period}</span>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <h4 className={styles.company}>{exp.company}</h4>
                  {exp.logo && (
                    <img 
                      src={exp.logo} 
                      alt={exp.company} 
                      className={`${styles.timelineLogo} ${exp.company.includes('Manitoba') ? styles.manitobaLogo : ''}`} 
                    />
                  )}
                  <p className={styles.description}>{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal} aria-label="Close modal">
              <X size={20} />
            </button>
            <div className={styles.prose}>
              {modalLoading ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', color: 'var(--text-secondary)' }}>
                  Loading documentation...
                </div>
              ) : (
                <ReactMarkdown
                  remarkPlugins={[remarkGfm, remarkMath]}
                  rehypePlugins={[rehypeKatex]}
                >
                  {modalContent}
                </ReactMarkdown>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
