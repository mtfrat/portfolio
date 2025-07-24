import React from 'react';
import { Bot } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-900 dark:bg-black">
      <div className="max-width-container section-padding">
        <div className="text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} {t('footer.rights')}
          </p>
          <p className="text-gray-400 mt-2 flex items-center justify-center gap-2">
            {t('footer.madeWith')} 
            <Bot className="w-4 h-4 text-blue-500 animate-bounce" />
            {t('footer.by')} Martin Fraticelli
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
