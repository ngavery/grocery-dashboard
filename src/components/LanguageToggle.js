import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';
import '../styles/LanguageToggle.css';
import { useEffect } from 'react';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang)
      .then(() => {
        console.log(`Language changed to ${newLang}`);
      })
      .catch(err => {
        console.error('Error changing language:', err);
      });
  };
  useEffect(() => {
    const scrollThreshold = window.innerHeight * 0.4;

    const handleScroll = () => {
      const buttons = document.querySelectorAll('.language-button');
      if (window.scrollY > scrollThreshold) {
        buttons.forEach(btn => btn.classList.add('scrolled'));
      } else {
        buttons.forEach(btn => btn.classList.remove('scrolled'));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="language-toggle-container">
      <Button
        variant="outline-light"
        className="language-button"
        onClick={changeLanguage}
      >
        {i18n.language === 'en' ? 'FR' : 'EN'}
      </Button>
    </div>
  );
};

export default LanguageToggle;