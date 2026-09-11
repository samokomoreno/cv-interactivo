import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Send, User, Phone, CheckCircle, AlertCircle, MessageSquare, QrCode } from 'lucide-react';
import qrImage from '../assets/qr-whatsapp.png';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setFeedbackMsg('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/samoko.moreno@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Nuevo mensaje de contacto desde tu CV Web - ${formData.name}`,
          _template: 'table',
          _captcha: 'false'
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && (data?.success === 'true' || data?.success === true)) {
        setStatus('success');
        setFeedbackMsg('¡Mensaje enviado con éxito a samoko.moreno@gmail.com! Te responderé lo más pronto posible.');
        setFormData({ name: '', email: '', message: '' });
      } else if (data?.message && data.message.includes('needs Activation')) {
        setStatus('success');
        setFeedbackMsg('¡Mensaje procesado! Si es la primera vez, FormSubmit ha enviado un correo de confirmación a samoko.moreno@gmail.com para activar las alertas.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Fallback directly to mailto
        window.open(
          `mailto:samoko.moreno@gmail.com?subject=Contacto desde CV Web - ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`De: ${formData.name} (${formData.email})\n\nMensaje:\n${formData.message}`)}`,
          '_blank'
        );
        setStatus('success');
        setFeedbackMsg('Se preparó el mensaje en tu aplicación de correo para enviarlo a samoko.moreno@gmail.com.');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      window.open(
        `mailto:samoko.moreno@gmail.com?subject=Contacto desde CV Web - ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`De: ${formData.name} (${formData.email})\n\nMensaje:\n${formData.message}`)}`,
        '_blank'
      );
      setStatus('success');
      setFeedbackMsg('Se abrió tu aplicación de correo para enviar el mensaje directamente a samoko.moreno@gmail.com.');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <motion.section 
      id="contacto" 
      className="py-12 sm:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Contacto</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto">
        
        {/* Columna izquierda: Información directa y Código QR */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-accent-magenta">Hablemos</h3>
            <p className="text-sm sm:text-base text-text-light-secondary dark:text-text-dark-secondary mb-6 leading-relaxed">
              Estoy disponible para nuevos proyectos y roles profesionales. Envíame un mensaje por el formulario, escríbeme por WhatsApp o escanea el código QR directo.
            </p>

            <div className="space-y-4">
              <a 
                href="https://wa.me/50588108348?text=Hola%20Samoko,%20vi%20tu%20CV%20interactivo%20y%20me%20gustar%C3%ADa%20contactarte." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3.5 group p-2.5 rounded-lg bg-secondary-light/60 dark:bg-primary-dark/60 hover:bg-secondary-light dark:hover:bg-primary-dark transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-accent-cyan/10 flex items-center justify-center text-accent-cyan group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-text-light-secondary dark:text-text-dark-secondary">WhatsApp / Teléfono</p>
                  <p className="text-sm font-semibold text-text-light-main dark:text-text-dark-main group-hover:text-accent-cyan transition-colors">
                    +505 8810 8348
                  </p>
                </div>
              </a>

              <a 
                href="mailto:samoko.moreno@gmail.com" 
                className="flex items-center gap-3.5 group p-2.5 rounded-lg bg-secondary-light/60 dark:bg-primary-dark/60 hover:bg-secondary-light dark:hover:bg-primary-dark transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-accent-cyan/10 flex items-center justify-center text-accent-cyan group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-text-light-secondary dark:text-text-dark-secondary">Correo Electrónico</p>
                  <p className="text-sm font-semibold text-text-light-main dark:text-text-dark-main group-hover:text-accent-cyan transition-colors break-all">
                    samoko.moreno@gmail.com
                  </p>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/samoko-moreno" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3.5 group p-2.5 rounded-lg bg-secondary-light/60 dark:bg-primary-dark/60 hover:bg-secondary-light dark:hover:bg-primary-dark transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-accent-cyan/10 flex items-center justify-center text-accent-cyan group-hover:scale-110 transition-transform">
                  <Linkedin size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-text-light-secondary dark:text-text-dark-secondary">LinkedIn</p>
                  <p className="text-sm font-semibold text-text-light-main dark:text-text-dark-main group-hover:text-accent-cyan transition-colors">
                    linkedin.com/in/samoko-moreno
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Sección de Código QR de WhatsApp */}
          <div className="p-4 sm:p-5 bg-secondary-light dark:bg-primary-dark rounded-xl border border-accent-cyan/30 shadow-lg flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="relative p-2 bg-white rounded-lg shadow shrink-0">
              <img 
                src={qrImage} 
                alt="Código QR WhatsApp Samoko Moreno +50588108348" 
                className="w-28 h-28 sm:w-32 sm:h-32 object-contain"
              />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-accent-cyan font-bold text-sm mb-1">
                <QrCode size={16} />
                <span>Escanear Código QR</span>
              </div>
              <p className="text-xs text-text-light-secondary dark:text-text-dark-secondary leading-relaxed">
                Apunta con la cámara de tu celular para enviarme un mensaje directo a mi WhatsApp (+505 8810 8348).
              </p>
              <a
                href="https://wa.me/50588108348?text=Hola%20Samoko,%20vi%20tu%20CV%20interactivo%20y%20me%20gustar%C3%ADa%20contactarte."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-accent-magenta hover:underline"
              >
                <MessageSquare size={14} />
                Abrir WhatsApp directamente
              </a>
            </div>
          </div>
        </div>

        {/* Columna derecha: Formulario de Contacto Funcional */}
        <div className="lg:col-span-7 bg-secondary-light dark:bg-primary-dark p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-secondary-dark">
          <h3 className="text-xl font-bold mb-2 text-text-light-main dark:text-text-dark-main">Envíame un Correo Directo</h3>
          <p className="text-xs sm:text-sm text-text-light-secondary dark:text-text-dark-secondary mb-6">
            Llega automáticamente a mi correo personal <span className="font-semibold text-accent-cyan">samoko.moreno@gmail.com</span>.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div className="relative">
              <User className="absolute left-3 top-3.5 text-gray-400" size={18} />
              <input
                type="text"
                name="name"
                placeholder="Tu Nombre completo"
                required
                value={formData.name}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className="w-full pl-10 pr-4 py-3 bg-primary-light dark:bg-secondary-dark border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-cyan focus:outline-none transition-shadow text-sm text-text-light-main dark:text-text-dark-main"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
              <input
                type="email"
                name="email"
                placeholder="Tu Correo Electrónico"
                required
                value={formData.email}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className="w-full pl-10 pr-4 py-3 bg-primary-light dark:bg-secondary-dark border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-cyan focus:outline-none transition-shadow text-sm text-text-light-main dark:text-text-dark-main"
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                placeholder="Escribe aquí tu mensaje o consulta..."
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className="w-full px-4 py-3 bg-primary-light dark:bg-secondary-dark border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-accent-cyan focus:outline-none transition-shadow text-sm text-text-light-main dark:text-text-dark-main resize-none"
              ></textarea>
            </div>

            {status === 'success' && (
              <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/30 text-green-400 rounded-lg text-xs sm:text-sm">
                <CheckCircle size={18} className="shrink-0" />
                <span>{feedbackMsg}</span>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg text-xs sm:text-sm">
                <AlertCircle size={18} className="shrink-0" />
                <span>{feedbackMsg}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="group w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-accent-magenta text-white font-semibold rounded-lg shadow-lg hover:bg-fuchsia-700 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-glow-magenta disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                <span>Enviando mensaje...</span>
              ) : (
                <>
                  <span>Enviar Mensaje</span>
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </motion.section>
  );
};

export default Contact;