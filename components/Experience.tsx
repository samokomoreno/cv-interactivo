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
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Experiencia Profesional</h2>
      <div className="relative wrap overflow-hidden p-2 sm:p-6 md:p-10 h-full">
        {/* Timeline vertical bar: positioned on the left for mobile (left-4), centered for desktop (md:left-1/2) */}
        <div className="absolute border-accent-cyan/30 h-full border-l-2 left-4 md:left-1/2 -ml-[1px]"></div>
        
        {EXPERIENCE_DATA.map((item, index) => (
          <motion.div 
            key={index} 
            className={`mb-8 sm:mb-12 flex flex-col md:flex-row items-start md:items-center w-full relative pl-10 md:pl-0 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
            variants={timelineItemVariant(index % 2 !== 0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {/* Desktop spacer for alternating layout */}
            <div className="hidden md:block md:w-5/12"></div>
            
            {/* Timeline icon node */}
            <div className="absolute left-0 top-0 md:static md:z-20 flex items-center justify-center bg-accent-cyan shadow-xl w-8 h-8 rounded-full md:mx-auto shrink-0">
              <span className="text-bg-dark flex items-center justify-center">
                <Briefcase size={16}/>
              </span>
            </div>
            
            {/* Card Content */}
            <div className="w-full md:w-5/12 bg-secondary-light dark:bg-primary-dark rounded-xl shadow-xl p-4 sm:p-6 transition-all duration-300 hover:shadow-glow-cyan hover:-translate-y-1">
              <div className="flex items-start sm:items-center mb-4">
                <div className="w-10 h-10 bg-gray-300 dark:bg-secondary-dark rounded-full mr-3 flex items-center justify-center font-bold text-accent-cyan shrink-0">
                  {item.company.charAt(0)}
                </div>
                <div className="min-w-0">
                    <h3 className="font-bold text-text-light-main dark:text-text-dark-main text-lg sm:text-xl leading-snug break-words">{item.title}</h3>
                    <p className="text-sm font-semibold text-accent-magenta">{item.company}</p>
                    <p className="text-xs text-text-light-secondary dark:text-text-dark-secondary">{item.period}</p>
                </div>
              </div>
              
              <div className="space-y-4 text-xs sm:text-sm text-text-light-secondary dark:text-text-dark-secondary">
                <div>
                  <h4 className="font-semibold text-text-light-main dark:text-text-dark-main mb-2 flex items-center gap-2">
                    <CheckCircle size={16} className="text-accent-cyan shrink-0" />
                    Funciones Principales
                  </h4>
                  <ul className="list-disc list-inside space-y-1 pl-1">
                    {item.responsibilities.map((resp, i) => (
                      <li key={i} className="leading-relaxed">{resp}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-text-light-main dark:text-text-dark-main mb-2 flex items-center gap-2">
                    <Target size={16} className="text-accent-magenta shrink-0" />
                    Logros Destacados
                  </h4>
                  <ul className="list-disc list-inside space-y-1 pl-1">
                    {item.achievements.map((ach, i) => (
                      <li key={i} className="leading-relaxed">{ach}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4">
                {item.tags.map(tag => (
                  <span key={tag} className="flex font-mono items-center gap-1 text-[11px] sm:text-xs font-semibold bg-accent-cyan/10 text-accent-cyan px-2 py-0.5 sm:py-1 rounded-full">
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