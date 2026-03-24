import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import GeometricGrid from './components/GeometricGrid';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import data from './data/portfolio.json';

const LinkedInRedirect = () => {
  useEffect(() => {
    window.location.replace(data.profile.linkedin);
  }, []);
  return (
    <div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>
      <h2 className="gradient-text-theme">Redirecting to LinkedIn...</h2>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <GeometricGrid />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="/linkedin" element={<LinkedInRedirect />} />
      </Routes>

      <footer style={{ padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.7)', borderBottom: '6px solid var(--accent-green)', marginTop: '4rem', background: 'linear-gradient(135deg, rgba(255,255,255,0.85), rgba(255,255,255,0.4))', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>
            © {new Date().getFullYear()} Arnab Mandal. <span style={{ opacity: 0.6, fontSize: '0.75rem', marginLeft: '0.5rem' }}>Based in Toronto, ON 🇨🇦</span>
          </p>
          <div style={{ display: 'flex', gap: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>
            <a href="https://github.com/Arnab247" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease', fontWeight: 500 }} onMouseOver={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>GitHub</a>
            <a href="https://www.linkedin.com/in/arnab-mandal-35b7131ba/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease', fontWeight: 500 }} onMouseOver={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>LinkedIn</a>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
