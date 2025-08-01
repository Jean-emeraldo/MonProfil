
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function CVPage() {
  const [isDownloading, setIsDownloading] = useState(false);

  const projects = [
    {
      title: "Application Médicale - MediCare",
      description: "Application web complète pour faciliter la gestion des patients et des dossiers médicaux dans un cadre professionnel (hôpitaux, cabinets médicaux). Solution robuste avec interface utilisateur intuitive et gestion sécurisée des données médicales.",
      technologies: ["ASP.NET MVC", "C#", "Razor", "HTML/CSS", "Entity Framework", "SQL Server"],
      github: "https://github.com/Jean-emeraldo/ApplicationM-dicale.git",
      type: "Application Web Médicale",
      status: "Terminé",
      icon: "ri-hospital-line"
    },
    {
      title: "Application de Déclaration de Naissance",
      description: "Solution complète pour permettre la déclaration des naissances, même dans des zones sans connexion internet, avec synchronisation des données vers une plateforme en ligne. Application mobile Flutter avec back-office web React.",
      technologies: ["Flutter", "Dart", "SQLite", "Firebase", "React.js", "Express.js", "Node.js", "Tailwind CSS"],
      github: "https://github.com/Jean-emeraldo/declaration_naissance.git",
      type: "Application Mobile & Web",
      status: "Terminé",
      icon: "ri-baby-line"
    },
    {
      title: "BoloIA - Intelligence Artificielle",
      description: "Application mobile Flutter et web Django développée lors du hackathon DATA DAY organisé par l'université INSI du 11 au 12 juillet 2025. Système d'intelligence artificielle avec apprentissage automatique pour l'analyse prédictive et l'automatisation de processus.",
      technologies: ["Flutter", "Django", "Python", "Machine Learning", "TensorFlow", "API REST", "SQLite"],
      github: "https://github.com/Jean-emeraldo/BoloIA.git",
      type: "IA & Machine Learning - Hackathon",
      status: "Terminé",
      icon: "ri-robot-line"
    },
    {
      title: "E-Commerce Mobile",
      description: "Application mobile de commerce électronique avec panier intelligent, paiements sécurisés et tracking des commandes. Interface utilisateur moderne et expérience optimisée.",
      technologies: ["Flutter", "SQLite", "Firebase Auth", "Stripe API", "Dart"],
      github: "https://github.com/jean-emeraldo",
      type: "Application Mobile",
      status: "Terminé",
      icon: "ri-shopping-cart-line"
    },
    {
      title: "Dashboard Analytics",
      description: "Tableau de bord analytique en temps réel avec visualisations interactives et rapports automatisés pour le suivi de performance et l'analyse de données business.",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Chart.js", "Tailwind CSS"],
      github: "https://github.com/jean-emeraldo",
      type: "Application Web",
      status: "Terminé",
      icon: "ri-dashboard-line"
    },
    {
      title: "API Management System",
      description: "Système complet de gestion d'API avec authentification, monitoring et documentation automatique pour faciliter l'intégration et la maintenance des services web.",
      technologies: [".NET MVC", "C#", "Entity Framework", "SQL Server", "Swagger", "JWT"],
      github: "https://github.com/jean-emeraldo",
      type: "Backend API",
      status: "Terminé",
      icon: "ri-server-line"
    },
    {
      title: "Chat Application",
      description: "Application de messagerie instantanée multiplateforme avec chiffrement de bout en bout, partage de fichiers et notifications push en temps réel.",
      technologies: ["Vue.js", "Socket.io", "Express.js", "MongoDB", "JWT", "WebRTC"],
      github: "https://github.com/jean-emeraldo",
      type: "Application Full-Stack",
      status: "En développement",
      icon: "ri-chat-3-line"
    },
    {
      title: "Système de Gestion Stock",
      description: "Application desktop de gestion d'inventaire avec codes-barres, alertes stock et rapports automatisés pour optimiser la gestion des stocks en entreprise.",
      technologies: ["Python", "Tkinter", "MySQL", "ReportLab", "OpenCV", "PDF Generation"],
      github: "https://github.com/jean-emeraldo",
      type: "Application Desktop",
      status: "Terminé",
      icon: "ri-archive-line"
    }
  ];

  const handleDownload = async () => {
    setIsDownloading(true);

    // Simuler le téléchargement
    setTimeout(() => {
      // Créer et télécharger le PDF
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent('CV_Jean_Emeraldo_RASOLOFONOIRAN.pdf'));
      element.setAttribute('download', 'CV_Jean_Emeraldo_RASOLOFONOIRAN.pdf');
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);

      setIsDownloading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-white cursor-pointer" style={{ fontFamily: "Pacifico, serif" }}>
              Jean Emeraldo
            </Link>
            <motion.button
              onClick={handleDownload}
              disabled={isDownloading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 cursor-pointer whitespace-nowrap flex items-center gap-2"
            >
              {isDownloading ? (
                <>
                  <i className="ri-loader-4-line animate-spin"></i>
                  Génération...
                </>
              ) : (
                <>
                  <i className="ri-download-line"></i>
                  Télécharger CV
                </>
              )}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* CV Content */}
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-slate-700/50"
          >
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h1 className="text-4xl font-bold text-white mb-2">
                  RASOLOFONIRINA Jean Emeraldo
                </h1>
                <h2 className="text-2xl text-blue-300 mb-4">
                  Développeur Mobile & Full Stack
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Développeur passionné avec une expertise complète en développement mobile Flutter, 
                  web full-stack, et intelligence artificielle. Spécialisé dans la création d'applications 
                  innovantes et performantes avec les technologies modernes.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://static.readdy.ai/image/b32bd561747bebb297de1ac5f1046416/cb3755074e2577f506e89ef3e6d638b6.jfif"
                  alt="Jean Emeraldo"
                  className="w-32 h-32 rounded-full object-cover border-4 border-blue-400/30"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-600/50">
              <div className="flex items-center gap-3">
                <i className="ri-phone-line text-blue-400 text-xl"></i>
                <div className="text-gray-300">
                  <div>038 44 538 55</div>
                  <div>032 89 283 07</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <i className="ri-map-pin-line text-blue-400 text-xl"></i>
                <div className="text-gray-300">
                  <div>Lot 209 IAv IAVOLOHA</div>
                  <div>Madagascar</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <i className="ri-github-fill text-blue-400 text-xl"></i>
                <a 
                  href="https://github.com/jean-emeraldo" 
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 cursor-pointer"
                >
                  github.com/jean-emeraldo
                </a>
              </div>
            </div>
          </motion.div>

          {/* Objectif Professionnel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-slate-700/50"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <i className="ri-target-line text-blue-400"></i>
              Objectif Professionnel
            </h3>
            <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30">
              <p className="text-gray-300 leading-relaxed text-lg">
                Passionné par les technologies innovantes, je souhaite mettre à profit mes compétences 
                en développement mobile Flutter, ASP.NET MVC et intelligence artificielle pour concevoir 
                des solutions numériques robustes et user-friendly. Mon objectif est d'intégrer une équipe 
                dynamique où je pourrai contribuer au développement d'applications performantes tout en 
                continuant à approfondir mon expertise dans les domaines émergents du développement logiciel.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-slate-700/50"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <i className="ri-code-s-slash-line text-blue-400"></i>
              Compétences Techniques
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-blue-300 mb-3">
                  Développement Mobile
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Flutter', 'Dart', 'SQLite', 'Firebase', 'Android', 'iOS'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-blue-600/20 text-blue-200 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-300 mb-3">
                  Développement Web
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Vue.js', 'HTML5', 'Tailwind CSS', 'JavaScript', 'TypeScript'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-blue-600/20 text-blue-200 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-300 mb-3">
                  Backend & API
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['ASP.NET MVC', 'Python', 'Express.js', 'Node.js', 'API REST', 'C#'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-blue-600/20 text-blue-200 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-300 mb-3">
                  Bases de Données
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['SQL Server', 'PostgreSQL', 'MySQL', 'Firestore', 'MongoDB', 'SQLite'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-blue-600/20 text-blue-200 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-slate-700/50"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <i className="ri-graduation-cap-line text-blue-400"></i>
              Formation
            </h3>
            <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-600/20 rounded-lg">
                  <i className="ri-school-line text-blue-400 text-xl"></i>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Licence 3 - Génie Logiciel
                  </h4>
                  <p className="text-blue-300 font-medium mb-2">
                    INSI - Institut National Supérieur d'Informatique
                  </p>
                  <p className="text-gray-400 text-sm">
                    Madagascar
                  </p>
                  <div className="mt-3">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                      En cours
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <i className="ri-folder-line text-blue-400"></i>
              Portfolio de Projets GitHub
            </h3>

            <div className="grid gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 flex items-center justify-center bg-blue-600/20 rounded-lg">
                        <i className={`${project.icon} text-blue-400 text-xl`}></i>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <h4 className="text-xl font-semibold text-white">{project.title}</h4>
                          <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded text-xs font-medium">
                            {project.type}
                          </span>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${project.status === 'Terminé' ? 'bg-green-500/20 text-green-400' : 'bg-orange-500/20 text-orange-400'}`}>
                            {project.status}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-3 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4 w-10 h-10 flex items-center justify-center bg-slate-600/50 rounded-lg text-gray-400 hover:text-white hover:bg-blue-600 transition-all cursor-pointer"
                    >
                      <i className="ri-github-fill text-lg"></i>
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-2 ml-16">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-slate-600/50 text-gray-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a
                href="https://github.com/jean-emeraldo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-lg font-semibold hover:from-gray-600 hover:to-gray-500 transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-external-link-line"></i>
                Voir tous mes projets sur GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
