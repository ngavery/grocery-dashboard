import '../styles/Hero.css';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <header className="hero">
      <div className="hero-content">
        <h1>{t('Canadian Food Price Dashboard')}</h1>
        <p>{t('Visualizing food price trends across Canada (2017-2025)')}</p>
      </div>
    </header>
  );
};

export default Hero;