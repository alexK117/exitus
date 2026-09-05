import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../css/ContactPage.css';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="contacts-page">
      <div className="contacts-header">
        <h1>{t.contactsTitle}</h1>
        <p>{t.contactsSubtitle}</p>
      </div>

      <div className="contacts-grid">
        <div className="contacts-info-card">
          <div className="info-item">
            <span>{t.phoneLabel}</span>
            <p>
              <a href="tel:+37120445883" className="phone-link">+371 20445883</a>
            </p>
          </div>

          <div className="info-item">
            <span>{t.workHoursLabel}</span>
            <p>{t.workHoursWeekdays}</p>
            <p>{t.workHoursWeekends}</p>
          </div>

          <div className="info-item">
            <span>{t.serviceAreaLabel}</span>
            <p>{t.serviceAreaValue}</p>
          </div>
        </div>

        <div className="quick-call-card">
          <span className="card-tag">{t.quickDeliveryTag}</span>
          <h2>{t.orderContainerTitle}</h2>
          <p>{t.orderContainerDesc}</p>
          <a href="tel:+37120445883" className="btn-call">
            {t.btnCallNow}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;