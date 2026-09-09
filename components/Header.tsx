import React, { useState } from 'react';
import type { Section } from '../App';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  theme: string;
  toggleTheme: () => void;
}

const navItems: Section[] = ['Inicio', 'Experiencia', 'Habilidades', 'Educación', 'Trayectoria', 'Contacto'];

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection, theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-light/80 dark:bg-primary-dark/80 backdrop-blur-md shadow-md transition-colors duration-300">
      <nav className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-48 py-4 flex justify-between items-center max-w-7xl">
        <div className="text-xl font-bold text-accent-magenta cursor-pointer" onClick={() => setActiveSection('Inicio')}>
          S.M.
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveSection(item)}
              className={`text-sm font-medium transition-colors duration-200 hover:text-accent-cyan ${
                activeSection === item ? 'text-accent-cyan' : 'text-text-light-secondary dark:text-text-dark-secondary'
              }`}
            >
              {item}
            </button>
          ))}
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-secondary-dark">
            {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-700" />}
          </button>
        </div>
        <div className="md:hidden flex items-center">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-secondary-dark mr-2">
                {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-700" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-text-light-main dark:text-text-dark-main">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-primary-light dark:bg-primary-dark py-4 px-6">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveSection(item);
                  setIsOpen(false);
                }}
                className={`text-lg font-medium text-left transition-colors duration-200 hover:text-accent-cyan ${
                  activeSection === item ? 'text-accent-cyan' : 'text-text-light-secondary dark:text-text-dark-secondary'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;