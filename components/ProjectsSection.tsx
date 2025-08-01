
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';

const projects = [
  {
    id: 1,
    title: 'Application Médicale - MediCare',
    description: 'Application web complète pour faciliter la gestion des patients et des dossiers médicaux dans un cadre professionnel (hôpitaux, cabinets médicaux). Solution robuste avec interface utilisateur intuitive et sécurité renforcée.',
    technologies: ['ASP.NET MVC', 'C#', 'Entity Framework', 'SQL Server', 'Razor', 'HTML5'],
    icon: 'ri-hospital-line',
    category: 'Backend',
    status: 'Terminé',
    github: 'https://github.com/Jean-emeraldo/ApplicationM-dicale.git',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Application de Déclaration de Naissance',
    description: 'Solution complète pour permettre la déclaration des naissances, même dans des zones sans connexion internet, avec synchronisation automatique des données. Application mobile Flutter avec back-office React performant.',
    technologies: ['Flutter', 'React.js', 'Express.js', 'Firebase', 'SQLite', 'Dart'],
    icon: 'ri-baby-line',
    category: 'Full Stack',
    status: 'Terminé',
    github: 'https://github.com/Jean-emeraldo/declaration_naissance.git',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 3,
    title: 'BoloIA - Intelligence Artificielle',
    description: 'Application mobile Flutter et web Django développée lors du hackathon DATA DAY organisé par l\'université INSI du 11 au 12 juillet 2025. Système d\'IA avancé avec apprentissage automatique pour l\'analyse prédictive et l\'automatisation.',
    technologies: ['Flutter', 'Django', 'Python', 'Machine Learning', 'TensorFlow', 'API REST'],
    icon: 'ri-robot-line',
    category: 'Full Stack',
    status: 'Terminé',
    github: 'https://github.com/Jean-emeraldo/BoloIA.git',
    gradient: 'from-purple-500 to-pink-500'
  }
];

const categories = ['Tous', 'Mobile', 'Frontend', 'Backend', 'Full Stack', 'IA'];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const filteredProjects = selectedCategory === 'Tous' 
    ? projects 
    : projects.filter(project => 
        project.category === selectedCategory || 
        (selectedCategory === 'IA' && project.technologies.some(tech => tech.includes('Machine Learning') || tech.includes('TensorFlow')))
      );

  return (
    <section id="projects" ref={ref} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Enhanced background animations */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        style={{ y }}
      >
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"></div>
      </motion.div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Mes Projets
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Découvrez mes réalisations concrètes, des applications médicales aux systèmes d'intelligence artificielle
          </motion.p>
        </motion.div>

        {/* Enhanced Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 cursor-pointer whitespace-nowrap text-sm sm:text-base backdrop-blur-sm ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25 border border-blue-400/50'
                  : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white border border-slate-600/50 hover:border-slate-500/50'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 300
              }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-slate-800/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-700/50 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 cursor-pointer group"
            >
              {/* Project Header with Enhanced Animation */}
              <div className={`relative h-48 sm:h-52 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                <motion.div
                  className="absolute inset-0 opacity-20"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    background: `radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)`
                  }}
                />
                
                <motion.div 
                  className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 360,
                    backgroundColor: "rgba(255,255,255,0.2)"
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200,
                    duration: 0.8
                  }}
                >
                  <i className={`${project.icon} text-3xl sm:text-4xl text-white drop-shadow-lg`}></i>
                </motion.div>
                
                {/* Status Badge with Animation */}
                <motion.div 
                  className="absolute top-4 right-4"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm border ${
                    project.status === 'Terminé'
                      ? 'bg-green-500/20 text-green-300 border-green-400/30 shadow-green-500/20'
                      : 'bg-orange-500/20 text-orange-300 border-orange-400/30 shadow-orange-500/20'
                  } shadow-lg`}>
                    {project.status}
                  </span>
                </motion.div>

                {/* Floating particles in header */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white/30 rounded-full"
                      initial={{
                        x: Math.random() * 300,
                        y: Math.random() * 200,
                      }}
                      animate={{
                        y: [Math.random() * 200, Math.random() * 200],
                        x: [Math.random() * 300, Math.random() * 300],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: Math.random() * 4 + 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Project Content with Enhanced Typography */}
              <div className="p-6 sm:p-8">
                <div className="mb-3">
                  <motion.span 
                    className="text-xs font-bold text-blue-400 uppercase tracking-wider px-2 py-1 bg-blue-400/10 rounded-full border border-blue-400/20"
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.category}
                  </motion.span>
                </div>
                
                <motion.h3 
                  className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight"
                  whileHover={{ color: "#60a5fa" }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed line-clamp-4">
                  {project.description}
                </p>

                {/* Enhanced Technologies Grid */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {project.technologies.slice(0, 6).map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-2 bg-blue-500/20 text-blue-300 rounded-lg text-xs font-medium text-center border border-blue-400/30 hover:bg-blue-500/30 hover:border-blue-400/50 transition-all duration-300 backdrop-blur-sm"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)"
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: techIndex * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex justify-between items-center">
                  <motion.button
                    whileHover={{ scale: 1.05, color: "#60a5fa" }}
                    whileTap={{ scale: 0.95 }}
                    className="text-blue-400 font-semibold hover:text-blue-300 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2"
                  >
                    <span>Voir détails</span>
                    <motion.i 
                      className="ri-arrow-right-line"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </motion.button>
                  
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      backgroundColor: "rgba(59, 130, 246, 0.2)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer rounded-lg border border-gray-600/30 hover:border-blue-400/50 backdrop-blur-sm"
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <i className="ri-github-fill text-lg"></i>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-20"
        >
          <motion.div
            className="relative inline-block"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.a
              href="https://github.com/jean-emeraldo"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer whitespace-nowrap border border-gray-600/30 backdrop-blur-sm"
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.i 
                className="ri-github-fill text-2xl sm:text-3xl mr-4"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <span>Voir tous mes projets sur GitHub</span>
              <motion.div
                className="ml-3 w-3 h-3 bg-green-400 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
