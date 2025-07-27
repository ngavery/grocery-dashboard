import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Footer.css';
import { useTranslation } from 'react-i18next';
import { FaInfo } from "react-icons/fa6";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="app-footer">
      <Container>
        <Col>
          <Col className="footer-col">
            <h3 className="footer-heading">
              <span className="icon-text">
                <FaInfo className="footer-icon" />
                {t('ABOUT')}
              </span>
            </h3>
            <p>{t('A comprehensive dashboard for comparing and visualizing price trends of staple Canadian groceries over the last several years.')}</p>
            <p className="footer-note">{t('All prices shown represent average prices from January of each year.')}</p>

          </Col>

          <Col className="footer-col">
            <h3 className="source-attribution">
              {t('DATA SOURCE')}
            </h3>
             <a href="https://www150.statcan.gc.ca/t1/tbl1/fr/tv.action?pid=1810024501&pickMembers%5B0%5D=1.11&cubeTimeFrame.startMonth=05&cubeTimeFrame.startYear=2017&cubeTimeFrame.endMonth=01&cubeTimeFrame.endYear=2017&referencePeriods=20170101%2C20170501" target="_blank" rel="noopener noreferrer">
              {t('Statistics Canada')}
             </a>
          
          </Col>
        </Col>

          <Col className="text-center">
            <p className="developer-credit">
              {t('Developed by')} <strong>Avery Ng</strong>
            </p>
          </Col>
      </Container>
    </footer>
  );
};

export default Footer;