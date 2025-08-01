
'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const technologies = [
    { name: 'Flutter', color: 'text-blue-400' },
    { name: 'React', color: 'text-cyan-400' },
    { name: 'Python', color: 'text-yellow-400' },
    { name: '.NET', color: 'text-purple-400' },
    { name: 'Firebase', color: 'text-orange-400' },
    { name: 'PostgreSQL', color: 'text-blue-300' }
  ];

  const socialLinks = [
    { 
      icon: 'ri-github-fill', 
      href: 'https://github.com/jean-emeraldo', 
      label: 'GitHub',
      color: 'hover:bg-gray-700'
    },
    { 
      icon: 'ri-linkedin-fill', 
      href: '#', 
      label: 'LinkedIn',
      color: 'hover:bg-blue-600'
    },
    { 
      icon: 'ri-mail-line', 
      href: 'mailto:jemeraldorasolofonirina@gmail.com', 
      label: 'Email',
      color: 'hover:bg-red-600'
    }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 sm:py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * 200,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 6 + 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-8 lg:mb-12">
          {/* Brand Section - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <motion.h3 
              className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6" 
              style={{ fontFamily: "Pacifico, serif" }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Jean Emeraldo
            </motion.h3>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base mb-6">
              Développeur passionné spécialisé dans la création de solutions innovantes 
              et performantes pour le web, mobile et l'intelligence artificielle.
            </p>
            
            {/* Enhanced contact info */}
            <div className="space-y-2">
              <motion.div 
                className="flex items-center text-gray-400 text-sm"
                whileHover={{ x: 5, color: "#60a5fa" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className="ri-map-pin-line mr-2 text-blue-400"></i>
                Madagascar
              </motion.div>
              <motion.div 
                className="flex items-center text-gray-400 text-sm"
                whileHover={{ x: 5, color: "#60a5fa" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className="ri-phone-line mr-2 text-blue-400"></i>
                038 44 538 55
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <h4 className="text-white font-bold text-lg sm:text-xl mb-4 sm:mb-6 flex items-center">
              <motion.i 
                className="ri-navigation-line text-blue-400 mr-2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      x: 8, 
                      color: "#60a5fa",
                      scale: 1.05
                    }}
                    className="text-gray-400 hover:text-blue-400 transition-all duration-300 cursor-pointer text-sm sm:text-base flex items-center group"
                  >
                    <motion.i 
                      className="ri-arrow-right-s-line mr-2 opacity-0 group-hover:opacity-100"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Technologies - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <h4 className="text-white font-bold text-lg sm:text-xl mb-4 sm:mb-6 flex items-center">
              <motion.i 
                className="ri-code-s-slash-line text-blue-400 mr-2"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              Technologies
            </h4>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech.name}
                  className={`px-3 py-2 bg-slate-800/70 rounded-lg text-sm font-medium text-center border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 backdrop-blur-sm ${tech.color}`}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)",
                    y: -2
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-center pt-8 lg:pt-12 border-t border-slate-800"
        >
          <motion.p 
            className="text-gray-400 text-sm mb-6 lg:mb-0 text-center lg:text-left"
            whileHover={{ color: "#60a5fa" }}
          >
            © {currentYear} Jean Emeraldo RASOLOFONIRINA. Tous droits réservés.
          </motion.p>
          
          <div className="flex items-center space-x-4 sm:space-x-6">
            <span className="text-gray-500 text-sm hidden sm:block">Suivez-moi :</span>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -3,
                    rotate: 360
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-slate-800/70 rounded-xl text-gray-400 hover:text-white transition-all duration-300 cursor-pointer backdrop-blur-sm border border-slate-700/50 hover:border-blue-400/50 ${social.color} shadow-lg hover:shadow-xl`}
                  title={social.label}
                >
                  <i className={`${social.icon} text-lg sm:text-xl`}></i>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scroll to top button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer z-50 backdrop-blur-sm border border-blue-500/20"
          whileHover={{ 
            scale: 1.1, 
            y: -3,
            boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.4)"
          }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, type: "spring", stiffness: 300 }}
        >
          <motion.i 
            className="ri-arrow-up-line text-xl"
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.button>
      </div>
    </footer>
  );
}
