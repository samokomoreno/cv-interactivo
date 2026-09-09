import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import DataViz from './components/DataViz';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

export type Section = 'Inicio' | 'Experiencia' | 'Habilidades' | 'Educación' | 'Trayectoria' | 'Contacto';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('Inicio');
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme');
      return storedTheme || 'dark'; // Default to dark theme if no preference is stored
    }
    return 'dark'; // Default for server-side rendering
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'Inicio':
        return <Home setActiveSection={setActiveSection} />;
      case 'Experiencia':
        return <Experience />;
      case 'Habilidades':
        return <Skills />;
      case 'Educación':
        return <Education />;
      case 'Trayectoria':
        return <DataViz />;
      case 'Contacto':
        return <Contact />;
      default:
        return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen text-text-light-main dark:text-text-dark-main font-sans transition-colors duration-300 relative">
      <ParticleBackground theme={theme} />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
          theme={theme}
          toggleTheme={toggleTheme}
        />
        <main className="flex-grow px-6 md:px-12 lg:px-24 xl:px-48 py-20 max-w-7xl w-full mx-auto">
          {renderSection()}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;