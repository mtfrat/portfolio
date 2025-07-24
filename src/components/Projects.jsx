import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import punaImg from '../assets/puna.png'
import speImg from '../assets/spe.png'
import boxerImg from '../assets/las_boxer.png'

const Projects = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState('all');

  // Proyectos con traducciones
  const projects = [
    {
      id: 1,
      titleKey: 'punatech',
      title: t('projects.items.punatech.title'),
      description: t('projects.items.punatech.description'),
      image: punaImg,
      technologies: ['React','Vite', 'Email.js', 'CSS', 'Tailwind'],
      category: 'web',
      liveUrl: 'https://puna-tech.vercel.app/',
      githubUrl: 'https://github.com/mtfrat/puna',
    },
    {
      id: 2,
      titleKey: 'taskmanagement',
      title: t('projects.items.taskmanagement.title'),
      description: t('projects.items.taskmanagement.description'),
      image: speImg,
      technologies: ['HTML', 'Bootstrap', 'CSS', 'Figma'],
      category: 'web',
      liveUrl: 'https://mtfrat.github.io/spe/',
      githubUrl: 'https://github.com/mtfrat/spe',
    },
    {
      id: 3,
      titleKey: 'lasboxer',
      title: t('projects.items.lasboxer.title'),
      description: t('projects.items.lasboxer.description'),
      image: boxerImg,
      technologies: ['HTML', 'Bootstrap', 'CSS', 'Figma', 'PHP'],
      category: 'web',
      liveUrl: 'https://mtfrat.github.io/lasBoxer/',
      githubUrl: 'https://github.com/mtfrat/lasBoxer',
    },
    // {
    //   id: 4,
    //   title: 'Portfolio Website',
    //   description: 'Sitio web portfolio moderno y responsive con animaciones fluidas.',
    //   image: '/project4.jpg',
    //   technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
    //   category: 'design',
    //   liveUrl: 'https://example.com',
    //   githubUrl: 'https://github.com/username/project4',
    // },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const categories = ['all', 'web', 'mobile', 'design'];

  return (
    <section id="projects" className="py-20">
      <div className="max-width-container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 pb-4">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Filter Buttons */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setFilter(category);
                setCurrentIndex(0);
              }}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === category
                  ? 'bg-primary-light dark:bg-primary-dark text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {t(`projects.${category}`)}
            </button>
          ))}
        </motion.div> */}

        {/* Projects Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 && (
              <motion.div
                key={filteredProjects[currentIndex].id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="grid md:grid-cols-2">
                  {/* Project Image */}
                  <div className="h-64 md:h-96 bg-gray-200 dark:bg-gray-700 relative overflow-hidden group">
                    <img
                      src={filteredProjects[currentIndex].image}
                      alt={filteredProjects[currentIndex].title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Project Info */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                      {filteredProjects[currentIndex].title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {filteredProjects[currentIndex].description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        {t('projects.technologies')}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {filteredProjects[currentIndex].technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a
                        href={filteredProjects[currentIndex].liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:opacity-90 transition-opacity"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {t('projects.viewProject')}
                      </a>
                      <a
                        href={filteredProjects[currentIndex].githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        {t('projects.viewCode')}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          {filteredProjects.length > 1 && (
            <>
              <button
                onClick={prevProject}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:scale-110 transition-transform"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </button>
              <button
                onClick={nextProject}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:scale-110 transition-transform"
                aria-label="Next project"
              >
                <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </button>
            </>
          )}
        </div>

        {/* Project Indicators */}
        {filteredProjects.length > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {filteredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-primary-light dark:bg-primary-dark'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
