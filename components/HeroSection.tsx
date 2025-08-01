
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.05,
        y: (e.clientY - window.innerHeight / 2) * 0.05,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              backgroundColor: i % 3 === 0 ? '#60a5fa' : i % 3 === 1 ? '#a855f7' : '#06b6d4',
            }}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Interactive mesh gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x + 50}% ${mousePosition.y + 50}%, rgba(59, 130, 246, 0.15), transparent 40%)`
        }}
      />

      {/* 3D Gentleman - Enhanced positioning and animation */}
      <motion.div
        className="absolute top-1/4 right-1/6 z-5 opacity-40 hidden lg:block"
        style={{ y }}
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 2, -2, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{ scale: 1.05, opacity: 0.6 }}
      >
        <img
          src="https://readdy.ai/api/search-image?query=3D%20gentleman%20businessman%20professional%20suit%20elegant%20man%20standing%20pose%20confident%20business%20formal%20attire%20modern%20stylish%20professional%20portrait%20realistic%20rendering%20clean%20background%20sophisticated%20mature&width=300&height=380&seq=gentleman3d002&orientation=portrait"
          alt="Gentleman 3D"
          className="w-60 h-76 object-contain filter drop-shadow-2xl"
        />
      </motion.div>

      {/* Robot 3D - Enhanced animation */}
      <motion.div
        className="absolute top-1/3 right-1/4 z-4 opacity-20 hidden lg:block"
        style={{ y: useTransform(scrollY, [0, 500], [0, -100]) }}
        animate={{
          y: [-25, 25, -25],
          rotate: [0, 3, -3, 0],
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img
          src="https://readdy.ai/api/search-image?query=3D%20robot%20futuristic%20blue%20metallic%20android%20artificial%20intelligence%20cyberpunk%20style%20floating%20in%20space%20with%20glowing%20blue%20circuits%20and%20mechanical%20details%20modern%20technological%20design%20sci-fi%20atmosphere%20dark%20blue%20background&width=220&height=300&seq=robot3d002&orientation=portrait"
          alt="Robot 3D"
          className="w-44 h-60 object-contain filter blur-sm"
        />
      </motion.div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left side - Enhanced text content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-left space-y-6 lg:space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
              >
                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                  style={{
                    background: "linear-gradient(135deg, #ffffff 0%, #60a5fa 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  RASOLOFONIRINA
                  <br />
                  <span className="text-blue-300 block mt-2">Jean Emeraldo</span>
                </motion.h1>
              </motion.div>

              <motion.h2 
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-300 font-light"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Développeur Mobile & Full Stack
              </motion.h2>

              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Spécialisé en développement mobile Flutter et web full-stack. Expert en bases de données (SQLite, Firebase, PostgreSQL, MySQL, Firestore) 
                et technologies modernes (React, Vue, Express, Python, .NET MVC, HTML5, Tailwind CSS, JavaScript).
                Passionné par la création d'applications innovantes et performantes.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-2 sm:gap-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
              >
                {['Flutter', 'Vue.js', 'React', 'HTML5', 'Tailwind CSS', 'JavaScript', 'Firebase', 'Firestore', 'PostgreSQL', 'Python', '.NET MVC'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-2 sm:px-3 py-1 sm:py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-200 font-medium text-xs sm:text-sm backdrop-blur-sm"
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "rgba(59, 130, 246, 0.4)",
                      boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                    }}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 1.3 + index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                <motion.a
                  href="#contact"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold shadow-lg whitespace-nowrap cursor-pointer text-center backdrop-blur-sm border border-blue-500/20"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.4)",
                    background: "linear-gradient(to right, #2563eb, #1d4ed8)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Me Contacter
                </motion.a>

                <Link href="/cv">
                  <motion.button
                    className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center gap-2 backdrop-blur-sm"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "#60a5fa",
                      color: "#0f172a",
                      boxShadow: "0 10px 25px -5px rgba(96, 165, 250, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <i className="ri-file-text-line"></i>
                    Voir mon CV
                  </motion.button>
                </Link>

                <motion.a
                  href="https://github.com/jean-emeraldo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-400 text-gray-400 rounded-lg font-semibold hover:bg-gray-400 hover:text-slate-900 transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center gap-2 backdrop-blur-sm"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#9ca3af",
                    color: "#0f172a",
                    boxShadow: "0 10px 25px -5px rgba(156, 163, 175, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <i className="ri-github-fill"></i>
                  GitHub
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right side - Enhanced profile photo */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="flex justify-center lg:justify-end mt-8 lg:mt-0"
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-purple-600/40 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.img
                  src="https://static.readdy.ai/image/b32bd561747bebb297de1ac5f1046416/cb3755074e2577f506e89ef3e6d638b6.jfif"
                  alt="Jean Emeraldo RASOLOFONOIRAN"
                  className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover object-center rounded-full shadow-2xl border-4 border-blue-400/30 backdrop-blur-sm"
                  whileHover={{
                    scale: 1.05,
                    rotate: 2,
                    boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)"
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                />
                
                <motion.div 
                  className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-60 blur-xl"
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced floating 3D shapes */}
      <motion.div
        className="absolute top-20 left-4 sm:left-20 w-12 h-12 sm:w-20 sm:h-20 border-2 border-blue-400/30 rounded-lg backdrop-blur-sm"
        animate={{
          rotate: 360,
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute bottom-20 sm:bottom-40 right-4 sm:right-20 w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full backdrop-blur-sm"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 hidden sm:block">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
