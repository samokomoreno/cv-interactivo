import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Send, User, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send to an API
    alert(`Mensaje enviado por ${formData.name}! (Simulación)`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.section 
      id="contacto" 
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-center mb-12">Contacto</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-accent-magenta">Hablemos</h3>
          <p className="text-text-light-secondary dark:text-text-dark-secondary mb-8">
            Estoy disponible para oportunidades de freelance o roles de tiempo completo. Si tienes un proyecto en mente o simplemente quieres saludar, no dudes en contactarme.
          </p>
          <div className="space-y-6">
            <a href="https://wa.me/50588108348" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group transition-all duration-300 transform hover:translate-x-2">
              <Phone className="text-accent-cyan" size={24} />
              <span className="text-text-light-secondary dark:text-text-dark-secondary group-hover:text-accent-cyan transition-colors duration-300">
                +505 8810 8348
              </span>
            </a>
            <a href="mailto:samoko.moreno@gmail.com" className="flex items-center gap-4 group transition-all duration-300 transform hover:translate-x-2">
              <Mail className="text-accent-cyan" size={24} />
              <span className="text-text-light-secondary dark:text-text-dark-secondary group-hover:text-accent-cyan transition-colors duration-300">
                samoko.moreno@gmail.com
              </span>
            </a>
            <a href="https://www.linkedin.com/in/samoko-moreno" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group transition-all duration-300 transform hover:translate-x-2">
              <Linkedin className="text-accent-cyan" size={24} />
              <span className="text-text-light-secondary dark:text-text-dark-secondary group-hover:text-accent-cyan transition-colors duration-300">
                linkedin.com/in/samoko-moreno
              </span>
            </a>
          </div>
           <div className="mt-8 text-text-light-secondary dark:text-text-dark-secondary">
             <p><strong>Ubicación:</strong> Managua, Nicaragua</p>
           </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              name="name"
              placeholder="Tu Nombre"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-secondary-light dark:bg-primary-dark border border-gray-300 dark:border-secondary-dark rounded-lg focus:ring-2 focus:ring-accent-cyan focus:outline-none transition-shadow"
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="email"
              name="email"
              placeholder="Tu Correo Electrónico"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-secondary-light dark:bg-primary-dark border border-gray-300 dark:border-secondary-dark rounded-lg focus:ring-2 focus:ring-accent-cyan focus:outline-none transition-shadow"
            />
          </div>
          <textarea
            name="message"
            placeholder="Tu Mensaje"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-secondary-light dark:bg-primary-dark border border-gray-300 dark:border-secondary-dark rounded-lg focus:ring-2 focus:ring-accent-cyan focus:outline-none transition-shadow"
          ></textarea>
          <button
            type="submit"
            className="group w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent-magenta text-white font-semibold rounded-lg shadow-lg hover:bg-fuchsia-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-glow-magenta"
          >
            Enviar Mensaje
            <Send size={20} />
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;