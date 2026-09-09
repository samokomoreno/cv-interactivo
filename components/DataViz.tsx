import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { CAREER_EVOLUTION_DATA } from '../constants';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-primary-dark border border-accent-cyan/50 rounded-lg shadow-lg">
        <p className="label font-bold text-accent-cyan">{`Año: ${label}`}</p>
        <p className="intro text-text-dark-main">{`Cargo: ${payload[0].payload.roleName}`}</p>
      </div>
    );
  }

  return null;
};


const DataViz: React.FC = () => {
  return (
    <motion.section 
      id="trayectoria" 
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-center mb-4">Mi Trayectoria en Datos</h2>
      <p className="text-center text-text-light-secondary dark:text-text-dark-secondary mb-12">
        Evolución de roles a lo largo del tiempo, mostrando el cambio de enfoque en mi carrera.
      </p>
      <div className="w-full h-96 p-4 bg-secondary-light dark:bg-primary-dark rounded-lg shadow-lg">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={CAREER_EVOLUTION_DATA}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="hsla(210, 29%, 55%, 0.1)" />
            <XAxis dataKey="year" stroke="#8892b0" dy={10} />
            <YAxis 
              stroke="#8892b0"
              ticks={[1, 2, 3]}
              domain={[0, 4]}
              tickFormatter={(value) => {
                if (value === 1) return 'Soporte/Sistemas';
                if (value === 2) return 'Desarrollo';
                if (value === 3) return 'Gestión';
                return '';
              }}
              width={100}
              dx={-10}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend formatter={(value) => "Tipo de Rol"} wrapperStyle={{ color: '#8892b0' }}/>
            <Line 
              type="monotone" 
              dataKey="roleType" 
              name="Tipo de Rol"
              stroke="#00f5ff"
              strokeWidth={3} 
              dot={{ r: 5, fill: '#00f5ff', strokeWidth: 2, stroke: '#0a192f' }}
              activeDot={{ r: 8, stroke: '#00f5ff', fill: '#00f5ff' }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.section>
  );
};

export default DataViz;