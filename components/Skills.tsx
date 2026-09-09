import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const Skills: React.FC = () => {
  return (
    <motion.section 
      id="habilidades" 
      className="py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <h2 className="text-3xl font-bold text-center mb-12">Habilidades Técnicas y Profesionales</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {SKILLS_DATA.map((category) => (
          <motion.div 
            key={category.category} 
            className="p-6 bg-secondary-light dark:bg-primary-dark rounded-lg shadow-lg transition-all duration-300 hover:shadow-glow-magenta hover:-translate-y-1"
            variants={itemVariants}
          >
            <h3 className="text-xl font-bold text-accent-magenta mb-6">{category.category}</h3>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-text-light-main dark:text-text-dark-main">{skill.name}</span>
                    <span className="text-sm font-medium text-accent-cyan">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-secondary-dark rounded-full h-2.5 overflow-hidden">
                    <motion.div 
                      className="bg-accent-cyan h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;