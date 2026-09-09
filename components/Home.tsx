import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Download, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Section } from '../App';
import { EXPERIENCE_BY_ROLE_DATA, COMPANY_COLORS } from '../constants';

interface HomeProps {
  setActiveSection: (section: Section) => void;
}

const Home: React.FC<HomeProps> = ({ setActiveSection }) => {
  const totalExperience = 22;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section 
      id="inicio" 
      className="min-h-[calc(100vh-80px)] flex items-center justify-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2 flex flex-col gap-4 text-center md:text-left">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-light-main dark:text-text-dark-main"
            variants={itemVariants}
          >
            Samoko Jonathan Moreno López
          </motion.h1>
          <motion.h2 
            className="text-xl md:text-2xl font-semibold text-accent-magenta"
            variants={itemVariants}
          >
            Analista Desarrollador Senior | Ingeniero en Sistemas
          </motion.h2>
          <motion.p 
            className="text-base text-text-light-secondary dark:text-text-dark-secondary mt-2"
            variants={itemVariants}
          >
            Transformando ideas en soluciones tecnológicas eficientes. Con más de 
            <span className="font-bold text-accent-cyan"> {totalExperience} años de experiencia </span> 
            en el sector TI, he liderado proyectos y desarrollado software robusto en diversos entornos.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start"
            variants={itemVariants}
          >
            <a 
              href="/samoko-moreno-cv.pdf" 
              download
              className="group flex items-center justify-center gap-2 px-6 py-3 bg-accent-magenta text-white font-semibold rounded-lg shadow-lg hover:bg-fuchsia-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-glow-magenta"
            >
              <Download size={20} />
              Descargar CV
            </a>
            <button 
              onClick={() => setActiveSection('Contacto')}
              className="group flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-accent-cyan text-accent-cyan font-semibold rounded-lg hover:bg-accent-cyan hover:text-bg-dark transition-all duration-300 transform hover:-translate-y-1 hover:shadow-glow-cyan"
            >
              Contáctame
              <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>
        <motion.div 
          className="lg:col-span-3 flex flex-col items-center gap-4"
          variants={itemVariants}
        >
            <div className="w-32 h-32 lg:w-48 lg:h-48 mb-4 p-1 rounded-full bg-gradient-to-br from-accent-magenta to-accent-cyan">
                <img
                    src="https://i.pravatar.cc/300?u=samoko"
                    alt="Samoko Jonathan Moreno López"
                    className="rounded-full object-cover w-full h-full border-4 border-primary-light dark:border-primary-dark"
                />
            </div>
            <div className="w-full h-96 bg-secondary-light/50 dark:bg-primary-dark/50 p-4 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-center mb-2 text-text-light-main dark:text-text-dark-main">Experiencia por Rol (Años)</h3>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        layout="vertical"
                        data={EXPERIENCE_BY_ROLE_DATA}
                        margin={{ top: 5, right: 20, left: 30, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="hsla(210, 29%, 55%, 0.1)" />
                        <XAxis type="number" stroke="#8892b0" />
                        <YAxis dataKey="role" type="category" width={110} stroke="#8892b0" fontSize={10} interval={0} />
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#020c1b', border: '1px solid #00f5ff', borderRadius: '8px', color: '#e6f1ff' }}
                            cursor={{fill: 'rgba(0, 245, 255, 0.1)'}}
                        />
                        <Legend wrapperStyle={{ fontSize: '12px', color: '#8892b0' }}/>
                        <Bar dataKey="FDL" stackId="a" fill={COMPANY_COLORS.FDL} name="FDL" />
                        <Bar dataKey="AIRPAK" stackId="a" fill={COMPANY_COLORS.AIRPAK} name="AirPak" />
                        <Bar dataKey="SUR" stackId="a" fill={COMPANY_COLORS.SUR} name="Sur" />
                        <Bar dataKey="MIFIC" stackId="a" fill={COMPANY_COLORS.MIFIC} name="MIFIC" />
                        <Bar dataKey="LOTERIA" stackId="a" fill={COMPANY_COLORS.LOTERIA} name="Lotería" />
                        <Bar dataKey="IRTRAMMA" stackId="a" fill={COMPANY_COLORS.IRTRAMMA} name="IRTRAMMA" />
                        <Bar dataKey="COMISARIATO" stackId="a" fill={COMPANY_COLORS.COMISARIATO} name="Comisariato" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;