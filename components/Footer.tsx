import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      className="bg-secondary-light dark:bg-primary-dark py-6 border-t border-gray-200 dark:border-secondary-dark"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 flex flex-col md:flex-row justify-between items-center text-center md:text-left max-w-7xl">
        <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">
          &copy; {new Date().getFullYear()} Samoko Jonathan Moreno López. Todos los derechos reservados.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://wa.me/50588108348" target="_blank" rel="noopener noreferrer" className="text-text-light-secondary dark:text-text-dark-secondary hover:text-accent-cyan transition-colors">
            <Phone size={20} />
          </a>
          <a href="mailto:samoko.moreno@gmail.com" className="text-text-light-secondary dark:text-text-dark-secondary hover:text-accent-cyan transition-colors">
            <Mail size={20} />
          </a>
          <a href="https://www.linkedin.com/in/samoko-moreno" target="_blank" rel="noopener noreferrer" className="text-text-light-secondary dark:text-text-dark-secondary hover:text-accent-cyan transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;