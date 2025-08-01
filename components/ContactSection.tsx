
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setSubmitStatus(''), 3000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: 'ri-phone-line',
      title: 'Téléphone',
      details: ['038 44 538 55', '032 89 283 07'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Adresse',
      details: ['Lot 209 IAv IAVOLOHA', 'Madagascar'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'ri-github-fill',
      title: 'GitHub',
      details: ['github.com/jean-emeraldo'],
      color: 'from-purple-500 to-pink-500',
      link: 'https://github.com/jean-emeraldo'
    }
  ];

  const specializations = [
    'Applications Mobile Flutter',
    'Sites Web Vue.js & React',
    'APIs REST & Backend',
    'Intelligence Artificielle',
    'Bases de données',
    'Applications Full-Stack'
  ];

  return (
    <section id="contact" ref={ref} className="py-16 sm:py-20 lg:py-24 bg-slate-900 relative overflow-hidden">
      {/* Enhanced background animations */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{ y }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: `linear-gradient(135deg, ${i % 3 === 0 ? '#60a5fa' : i % 3 === 1 ? '#a855f7' : '#06b6d4'}, transparent)`
            }}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #60a5fa 50%, #a855f7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Me <span className="text-blue-300">Contacter</span>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Discutons de votre projet ! Je suis disponible pour des collaborations 
            en développement mobile, web et intelligence artificielle.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Enhanced Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Informations de Contact</h3>
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <motion.div 
                      className="flex items-center text-gray-300 p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)"
                      }}
                    >
                      <motion.div 
                        className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mr-4 sm:mr-6 shadow-lg`}
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.1 
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 200,
                          duration: 0.8
                        }}
                      >
                        <i className={`${info.icon} text-white text-xl sm:text-2xl`}></i>
                      </motion.div>
                      <div className="flex-1">
                        <p className="font-bold text-white text-lg sm:text-xl mb-1">{info.title}</p>
                        {info.details.map((detail, idx) => (
                          <motion.p 
                            key={idx}
                            className={`${info.link ? 'text-blue-400 hover:text-blue-300 cursor-pointer' : ''} text-sm sm:text-base`}
                            whileHover={info.link ? { scale: 1.05 } : {}}
                            onClick={info.link ? () => window.open(info.link, '_blank') : undefined}
                          >
                            {detail}
                          </motion.p>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Enhanced Specializations */}
            <motion.div 
              className="bg-slate-800/50 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-blue-400/20 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3)" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"
                animate={{
                  opacity: [0.05, 0.15, 0.05],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative z-10">
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                  <motion.i 
                    className="ri-star-line text-yellow-400 mr-3 text-2xl"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                  Mes Spécialisations
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {specializations.map((spec, index) => (
                    <motion.span 
                      key={spec} 
                      className="px-4 py-2 bg-blue-600/20 text-blue-200 rounded-lg text-sm font-medium border border-blue-400/30 hover:bg-blue-600/30 hover:border-blue-400/50 transition-all duration-300 text-center backdrop-blur-sm"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)"
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {spec}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-700/50 relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"
              animate={{
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <div className="relative z-10">
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label htmlFor="name" className="block text-sm font-bold text-gray-300 mb-3">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm backdrop-blur-sm hover:border-slate-500"
                      placeholder="Jean Emeraldo"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm backdrop-blur-sm hover:border-slate-500"
                      placeholder="jemeraldorasolofonirina@gmail.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-300 mb-3">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm backdrop-blur-sm hover:border-slate-500"
                    placeholder="Projet de développement mobile"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label htmlFor="message" className="block text-sm font-bold text-gray-300 mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={500}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm resize-none backdrop-blur-sm hover:border-slate-500"
                    placeholder="Décrivez votre projet et vos besoins..."
                  />
                  <div className="text-right text-xs text-gray-400 mt-2">
                    <motion.span
                      animate={{ 
                        color: formData.message.length > 450 ? '#ef4444' : '#9ca3af'
                      }}
                    >
                      {formData.message.length}/500
                    </motion.span>
                  </div>
                </motion.div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.8 }}
                    className="p-4 bg-green-500/20 border border-green-400/30 rounded-xl backdrop-blur-sm"
                  >
                    <div className="flex items-center space-x-3">
                      <motion.i 
                        className="ri-check-line text-green-400 text-xl"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                      <span className="text-green-400 font-bold text-lg">
                        Message envoyé avec succès !
                      </span>
                    </div>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap backdrop-blur-sm border border-blue-500/20"
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {isSubmitting ? (
                    <motion.span 
                      className="flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <motion.i 
                        className="ri-loader-4-line mr-3 text-xl"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Envoi en cours...
                    </motion.span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <motion.i 
                        className="ri-send-plane-line mr-3 text-xl"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                      Envoyer le message
                    </span>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
