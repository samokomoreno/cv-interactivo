import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { EXPERIENCE_DATA } from '../constants';
import { Briefcase, Code, GitBranch, HardDrive, Users, CheckCircle, Target } from 'lucide-react';

const getTagIcon = (tag: string) => {
    switch (tag.toLowerCase().split(' ')[0]) {
        case 'análisis': return <GitBranch size={16} className="text-accent-cyan" />;
        case 'desarrollo': return <Code size={16} className="text-accent-cyan" />;
        case 'soporte': return <HardDrive size={16} className="text-accent-cyan" />;
        case 'gestión': return <Briefcase size={16} className="text-accent-cyan" />;
        case 'liderazgo': return <Users size={16} className="text-accent-cyan" />;
        default: return <Code size={16} className="text-accent-cyan" />;
    }
}

const Experience: React.FC = () => {
  // FIX: Explicitly type the return value as Variants to fix the type inference issue with the 'ease' property.
  const timelineItemVariant = (isLeft: boolean): Variants => ({
    hidden: { opacity: 0, x: isLeft ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  });

  return (
    <motion.section 
      id="experiencia" 
      className="py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-center mb-12">Experiencia Profesional</h2>
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="absolute border-2-2 border-accent-cyan/30 h-full border" style={{left: '50%'}}></div>
        {EXPERIENCE_DATA.map((item, index) => (
          <motion.div 
            key={index} 
            className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}
            variants={timelineItemVariant(index % 2 !== 0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-accent-cyan shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-bg-dark">
                <Briefcase size={16}/>
              </h1>
            </div>
            <div className="order-1 bg-secondary-light dark:bg-primary-dark rounded-lg shadow-xl w-5/12 px-6 py-4 transition-all duration-300 hover:shadow-glow-cyan hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-300 dark:bg-secondary-dark rounded-full mr-3 flex items-center justify-center font-bold text-gray-500">
                  {item.company.charAt(0)}
                </div>
                <div>
                    <h3 className="font-bold text-text-light-main dark:text-text-dark-main text-xl">{item.title}</h3>
                    <p className="text-sm font-medium text-accent-magenta">{item.company}</p>
                    <p className="text-xs text-text-light-secondary dark:text-text-dark-secondary">{item.period}</p>
                </div>
              </div>
              
              <div className="space-y-4 text-sm text-text-light-secondary dark:text-text-dark-secondary">
                <div>
                  <h4 className="font-semibold text-text-light-main dark:text-text-dark-main mb-2 flex items-center gap-2">
                    <CheckCircle size={16} className="text-accent-cyan" />
                    Funciones Principales
                  </h4>
                  <ul className="list-disc list-inside space-y-1 pl-2">
                    {item.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-text-light-main dark:text-text-dark-main mb-2 flex items-center gap-2">
                    <Target size={16} className="text-accent-magenta" />
                    Logros Destacados
                  </h4>
                  <ul className="list-disc list-inside space-y-1 pl-2">
                    {item.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {item.tags.map(tag => (
                  <span key={tag} className="flex font-mono items-center gap-1 text-xs font-semibold bg-accent-cyan/10 text-accent-cyan px-2 py-1 rounded-full">
                    {getTagIcon(tag)}
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;