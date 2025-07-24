import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, CircuitBoard, Network } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import profileImg from '../assets/profile.jpg'

const About = () => {
  const { t } = useLanguage();

  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: t('about.skills.frontend'),
      description: 'React, HTML, CSS, Bootstrap, Sass, JavaScript',
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: t('about.skills.firmware'),
      description: 'C, Python, FreeRTOS, State Machines, Embedded Systems',
    },
    {
      icon: <CircuitBoard className="w-8 h-8" />,
      title: t('about.skills.hardware'),
      description: 'PCB Design, EDA Tools, Circuit Simulation, EMC Standards',
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: t('about.skills.protocols'),
      description: 'UART, I2C, SPI, CAN, WiFi, BLE, TCP/UDP, HTTP',
    },
  ];

  return (
    <section id="about" className="py-20 bg-surface-light dark:bg-surface-dark">
      <div className="max-width-container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-blue-600 dark:from-primary-dark dark:to-blue-400 rounded-full blur-2xl opacity-30"></div>
              <img
                src={profileImg}
                alt="Profile"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl"
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              {t('about.description')}
            </p>
            <div className="flex flex-wrap gap-3">
              {['React', 'Python', 'C', 'Git', 'Firebase', 'HTML & CSS', 'Tailwind', 'SQL', 'AWS', 'Docker','N8N'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
            {t('about.skills.title')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg card-hover"
              >
                <div className="text-primary-light dark:text-primary-dark mb-4">
                  {skill.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  {skill.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
