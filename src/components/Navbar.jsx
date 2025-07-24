import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import useScrollPosition from '../hooks/useScrollPosition';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const { scrollPosition } = useScrollPosition();

  const navItems = ['home', 'about', 'projects', 'contact'];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollPosition > 50
          ? 'glass-effect shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-width-container section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
              <defs>
                <linearGradient id="gradRobot" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#374151', stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'#1f2937', stopOpacity:1}} />
                </linearGradient>
                <linearGradient id="visorNav" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor:'#ef4444', stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'#dc2626', stopOpacity:1}} />
                </linearGradient>
              </defs>
              
              {/* Robot head */}
              <rect x="4" y="8" width="24" height="16" rx="4" fill="url(#gradRobot)" stroke="#4b5563" strokeWidth="1"/>
              
              {/* Visor */}
              <rect x="6" y="12" width="20" height="6" rx="3" fill="url(#visorNav)" opacity="0.9"/>
              <rect x="6" y="12" width="20" height="3" rx="1.5" fill="rgba(255,255,255,0.2)"/>
              
              {/* Scanner line */}
              <line x1="8" y1="15" x2="24" y2="15" stroke="#fbbf24" strokeWidth="0.8" opacity="0.8">
                <animate attributeName="x1" values="8;24;8" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="x2" values="10;26;10" dur="2s" repeatCount="indefinite"/>
              </line>
              
              {/* Robot antenna */}
              <line x1="16" y1="8" x2="16" y2="4" stroke="#6b7280" strokeWidth="1" strokeLinecap="round"/>
              <circle cx="16" cy="4" r="1.5" fill="#ef4444"/>
              <circle cx="16" cy="4" r="0.8" fill="#fbbf24"/>
              
              {/* Robot mouth grid */}
              <rect x="12" y="20" width="8" height="2" rx="0.5" fill="#6b7280"/>
              <line x1="13" y1="20" x2="13" y2="22" stroke="#1f2937" strokeWidth="0.3"/>
              <line x1="15" y1="20" x2="15" y2="22" stroke="#1f2937" strokeWidth="0.3"/>
              <line x1="17" y1="20" x2="17" y2="22" stroke="#1f2937" strokeWidth="0.3"/>
              <line x1="19" y1="20" x2="19" y2="22" stroke="#1f2937" strokeWidth="0.3"/>
            </svg>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-300"
              >
                {t(`nav.${item}`)}
              </motion.button>
            ))}
          </div>

          {/* Theme and Language Toggle */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleLanguage}
              className="flex items-center flex-column p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              <span className="ml-1 text-xs font-medium text-gray-700 dark:text-gray-300 span-flex">
                {language.toUpperCase()}
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-center py-2 space-x-4 border-t border-gray-200 dark:border-gray-700">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-sm text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
            >
              {t(`nav.${item}`)}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
