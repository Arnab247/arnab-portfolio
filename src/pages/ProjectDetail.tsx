import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Code2, Database } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import data from '../data/portfolio.json';
import styles from './ProjectDetail.module.css';

interface Project {
  title: string;
  tags: string[];
  description: string;
  image?: string;
  gallery?: string[];
  githubLink?: string;
  driveLink?: string;
  link?: string;
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string>('');

  // Scroll to top and fetch markdown on mount
  useEffect(() => {
    window.scrollTo(0, 0);

    fetch(`/projects/${slug}.md`)
      .then((res) => {
        if (!res.ok) throw new Error('Markdown file not found');
        return res.text();
      })
      .then((text) => {
        // Strip out YAML frontmatter if it exists (--- ... ---)
        const cleanText = text.replace(/^---[\s\S]+?---\n*/, '');
        setContent(cleanText);
      })
      .catch((err) => {
        console.error(err);
        setContent('Error loading project documentation.');
      });
  }, [slug]);

  const project = data.projects.find(
    (p) => p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') === slug
  ) as Project | undefined;

  if (!project) {
    return (
      <div className={`container ${styles.notFound}`}>
        <h2 className="gradient-text-theme">Project Not Found</h2>
        <Link to="/" className={styles.backBtn}><ArrowLeft size={16} /> Back to Blueprint</Link>
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={`container ${styles.contentContainer}`}>
        <Link to="/" className={styles.backBtn}>
          <ArrowLeft size={18} /> Back to Blueprint
        </Link>

        <article className={`minimal-card animate-fade-up ${styles.projectCard}`}>
          <h1 className={`${styles.title} gradient-text-theme`}>{project.title}</h1>
          <p className={styles.description}>{project.description}</p>

          <div className={styles.tags}>
            {project.tags.map((tag, i) => (
              <span key={i} className={styles.tag}>{tag}</span>
            ))}
          </div>

          <div className={styles.markdownContent}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkMath]}
              rehypePlugins={[rehypeKatex]}
            >
              {content}
            </ReactMarkdown>
          </div>

          <div className={styles.actions} style={{ gap: '1rem', flexWrap: 'wrap', marginTop: '3rem' }}>
            {project.link && project.link !== '#' && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
                <ExternalLink size={18} /> View Live Project
              </a>
            )}

            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn} style={{ background: 'var(--text-primary)' }}>
                <Code2 size={18} /> GitHub Repository
              </a>
            )}

            {project.driveLink && (
              <a href={project.driveLink} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn} style={{ background: 'var(--accent-green)', boxShadow: '0 8px 25px rgba(19,136,8,0.3)' }}>
                <Database size={18} /> Project Drive Folder
              </a>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
