import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../css/ServicesPage.css';

const ServicesPage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal-init');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="services-page">
      <div className="services-header reveal-init">
        <h1>{t.navServices}</h1>
        <p>{t.servicesSubtitle}</p>
      </div>

      <div className="services-container">
        {/* Block 1 */}
        <div className="service-row-card reveal-init delay-1">
          <div className="service-row-img">
            <img 
              src="https://jumis.lv/wp-content/uploads/2020/12/rsz_img_5569.png" 
              alt={t.card1Title} 
            />
          </div>
          <div className="service-row-info">
            <span className="service-tag">{t.heroBadge}</span>
            <h2>{t.card1Title}</h2>
            <p>{t.card1Desc}</p>
            
            <div className="pricing-grid">
              <div className="price-box">
                <span className="price-title">6 m³</span>
                <span className="price-value">no €450 <small>ar PVN</small></span>
              </div>
              <div className="price-box">
                <span className="price-title">8 m³</span>
                <span className="price-value">no €550 <small>ar PVN</small></span>
              </div>
              <div className="price-box">
                <span className="price-title">10–20 m³</span>
                <span className="price-value">no €650 <small>ar PVN</small></span>
              </div>
            </div>
          </div>
        </div>

        {/* Block 2 */}
        <div className="service-row-card reveal-init delay-2">
          <div className="service-row-img img-contain-bg">
            <img 
              src="https://moverleader.lv/images/tild3061-3538-4035-b535-636266626236__dcs_800_x_800__3.svg" 
              alt={t.card2Title} 
            />
          </div>
          <div className="service-row-info">
            <span className="service-tag">{t.heroBadge}</span>
            <h2>{t.card2Title}</h2>
            <p>{t.card2Desc}</p>
            
            <div className="pricing-grid">
              <div className="price-box">
                <span className="price-title">1 krāvējs</span>
                <span className="price-value">€40/h</span>
              </div>
              <div className="price-box">
                <span className="price-title">2 krāvēji</span>
                <span className="price-value">€60/h</span>
              </div>
              <div className="price-box">
                <span className="price-title">3+ krāvēji</span>
                <span className="price-value">+ €20/h <small>par katru</small></span>
              </div>
            </div>
          </div>
        </div>

        {/* Block 3 */}
        <div className="service-row-card reveal-init delay-3">
          <div className="service-row-img">
            <img 
              src="https://img.zl.lv/sr/images/1/0/25049376_1000230859_003_768x512.jpg" 
              alt={t.card3Title} 
            />
          </div>
          <div className="service-row-info">
            <span className="service-tag">{t.heroBadge}</span>
            <h2>{t.card3Title}</h2>
            <p>{t.card3Desc}</p>
            
            <div className="pricing-grid">
              <div className="price-box">
                <span className="price-title">Cena par 1 m³</span>
                <span className="price-value">40 €</span>
              </div>
              <div className="price-box">
                <span className="price-title">Minimālais apjoms</span>
                <span className="price-value">4 m³</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;