import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EDUCATION_DATA, COURSES_DATA } from '../constants';
import type { CourseItem } from '../types';

const courseCategories: CourseItem['category'][] = ['Bases de datos', 'Web', 'Gestión', 'Infraestructura'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Education: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CourseItem['category'] | 'Todos'>('Todos');

  const filteredCourses = activeCategory === 'Todos'
    ? COURSES_DATA
    : COURSES_DATA.filter(course => course.category === activeCategory);

  return (
    <motion.section 
      id="educacion" 
      className="py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <h2 className="text-3xl font-bold text-center mb-12">Educación y Formación</h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12"
        variants={containerVariants}
      >
        {EDUCATION_DATA.map((edu, index) => (
          <motion.div 
            key={index} 
            className="flex items-center p-6 bg-secondary-light dark:bg-primary-dark rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:shadow-glow-magenta"
            variants={itemVariants}
          >
            <div className="mr-5 text-accent-magenta">
              <edu.icon size={40} />
            </div>
            <div>
              <h3 className="text-xl font-bold">{edu.degree}</h3>
              <p className="text-text-light-secondary dark:text-text-dark-secondary">{edu.institution}</p>
              <p className="text-sm text-accent-cyan font-mono">{edu.period}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center mb-8">Cursos y Certificaciones Relevantes</h3>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveCategory('Todos')}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 transform hover:scale-105 ${activeCategory === 'Todos' ? 'bg-accent-magenta text-white shadow-md' : 'bg-secondary-light dark:bg-secondary-dark hover:bg-accent-magenta/20'}`}
          >
            Todos
          </button>
          {courseCategories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 transform hover:scale-105 ${activeCategory === category ? 'bg-accent-magenta text-white shadow-md' : 'bg-secondary-light dark:bg-secondary-dark hover:bg-accent-magenta/20'}`}
            >
              {category}
            </button>
          ))}
        </div>
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          variants={containerVariants}
        >
          {filteredCourses.map((course, index) => (
            <motion.div 
              key={index} 
              className="p-4 text-center bg-secondary-light dark:bg-primary-dark rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              variants={itemVariants}
            >
              <p className="font-medium text-sm font-mono">{course.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;