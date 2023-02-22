import React, { useEffect, useState } from 'react';

type Language = 'jp' | 'en';

interface LanguageTogglerProps {
  defaultLanguage: Language;
  onLanguageChange: (language: Language) => void
}

const LanguageToggler: React.FC<LanguageTogglerProps> = ({ defaultLanguage, onLanguageChange }) => {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  const toggleLanguage = () => {
    const newLanguage: Language = language === 'jp' ? 'en' : 'jp';
    setLanguage(newLanguage);
    onLanguageChange(newLanguage);

  };

  useEffect(() => {
    setLanguage(defaultLanguage); // set right language button on load
  }, [defaultLanguage]);

  return (
    <button onClick={toggleLanguage} title={language === 'jp' ? 'English' : '日本語'}>
      {language === 'jp' ? '🇬🇧' : '🇯🇵'}
    </button>
  );
};

export default LanguageToggler;