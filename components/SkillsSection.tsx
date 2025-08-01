
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  {
    category: "Développement Mobile",
    skills: ["Flutter", "SQLite", "Firebase", "Dart", "Android", "iOS"],
    icon: "ri-smartphone-line",
    color: "from-blue-500 to-cyan-500"
  },
  {
    category: "Frontend Web",
    skills: ["HTML5", "Tailwind CSS", "JavaScript", "Vue.js", "React", "TypeScript"],
    icon: "ri-code-s-slash-line",
    color: "from-purple-500 to-pink-500"
  },
  {
    category: "Backend & API",
    skills: ["Python", ".NET MVC", "Express.js", "Node.js", "API REST", "C#"],
    icon: "ri-server-line",
    color: "from-green-500 to-emerald-500"
  },
  {
    category: "Bases de Données",
    skills: ["PostgreSQL", "MySQL", "Firebase", "Firestore", "SQLite", "NoSQL"],
    icon: "ri-database-2-line",
    color: "from-orange-500 to-red-500"
  },
  {
    category: "Intelligence Artificielle",
    skills: ["Machine Learning", "TensorFlow", "Python AI", "Data Analysis", "Algorithms", "Neural Networks"],
    icon: "ri-robot-line",
    color: "from-indigo-500 to-purple-500"
  },
  {
    category: "Outils & DevOps",
    skills: ["GitHub", "Git", "Linux", "VS Code", "Docker", "Postman"],
    icon: "ri-tools-line",
    color: "from-gray-500 to-slate-500"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

export default function SkillsSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="skills" ref={ref} className="py-16 sm:py-20 lg:py-24 bg-slate-800 relative overflow-hidden">
      {/* Enhanced background animations */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ y }}
      >
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #60a5fa 50%, #a855f7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Mes <span className="text-blue-300">Compétences</span>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Une expertise complète en développement mobile et web, avec une maîtrise des technologies modernes, 
            des bases de données avancées et de l'intelligence artificielle.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8"
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              variants={item}
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Enhanced glow effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${skillGroup.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div 
                className="relative bg-slate-900/80 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 h-full"
                whileHover={{
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
                }}
              >
                <div className="flex items-center mb-6">
                  <motion.div 
                    className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${skillGroup.color} rounded-xl flex items-center justify-center mr-4 shadow-lg`}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1 
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200,
                      duration: 0.6 
                    }}
                  >
                    <i className={`${skillGroup.icon} text-white text-xl sm:text-2xl`}></i>
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">{skillGroup.category}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-2 bg-blue-600/20 text-blue-200 rounded-lg text-sm font-medium border border-blue-400/30 hover:bg-blue-600/30 hover:border-blue-400/50 transition-all duration-300 cursor-default text-center backdrop-blur-sm"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(59, 130, 246, 0.4)",
                        boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)"
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.1 + skillIndex * 0.05,
                        type: "spring"
                      }}
                      viewport={{ once: true }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced GitHub Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 text-center"
        >
          <motion.div 
            className="bg-slate-900/80 backdrop-blur-xl p-8 sm:p-10 rounded-2xl border border-blue-400/20 max-w-3xl mx-auto relative overflow-hidden"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.3)"
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {/* Background gradient animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl"
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <motion.i 
                  className="ri-github-fill text-4xl sm:text-5xl text-blue-400 mr-4"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Portfolio GitHub</h3>
              </div>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                Explorez tous mes projets, contributions open source et innovations technologiques
              </p>
              <motion.a
                href="https://github.com/jean-emeraldo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 cursor-pointer whitespace-nowrap shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className="ri-external-link-line text-xl"></i>
                Voir mes projets GitHub
                <motion.div
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
