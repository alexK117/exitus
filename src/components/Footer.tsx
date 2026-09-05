import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../css/Footer.css';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer-modern">
      <div className="footer-compact-container">
        <div>
          <h3 className="footer-brand">SIA EXITUS</h3>
          <p className="footer-desc">{t.footerDesc}</p>
        </div>

        <div className="footer-col-action">
          <span className="action-label">{t.footerContactsHeader}</span>
          <span className="footer-phone-text">+371 20445883</span>
          <span className="footer-email">info.exitus@gmail.com</span>
        </div>

        <div className="footer-col-hours">
          <h4>{t.footerWorkHoursHeader}</h4>
          <p>{t.workHoursWeekdays}</p>
          <p>{t.workHoursWeekends}</p>
        </div>
      </div>
      <div className="footer-copy">
        © {new Date().getFullYear()} SIA EXITUS. Visas tiesības aizsargātas.
      </div>
    </footer>
  );
};

export default Footer;