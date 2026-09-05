import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import '../css/HomePage.css';

const HERO_IMAGES = [
  'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1600'
];

const AnimatedText: React.FC<{ text: string; className?: string; delayOffset?: number }> = ({ 
  text, 
  className = '',
  delayOffset = 0 
}) => {
  const words = text.split(' ');

  return (
    <span className={`animated-text-container ${className}`}>
      {words.map((word, index) => (
        <span key={index} className="word-wrapper">
          <span 
            className="animated-word" 
            style={{ animationDelay: `${delayOffset + index * 0.08}s` }}
          >
            {word}&nbsp;
          </span>
        </span>
      ))}
    </span>
  );
};

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-b2b">
        {HERO_IMAGES.map((imgUrl, index) => (
          <div
            key={imgUrl}
            className={`hero-bg-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${imgUrl})` }}
          />
        ))}
        <div className="hero-bg-overlay" />

        <div className="hero-content-b2b">
          <span className="b2b-tag animated-fade-in">{t.heroBadge}</span>
          
          <h1 className="hero-title-animated">
            <AnimatedText text={t.heroTitle} delayOffset={0.2} />
          </h1>

          <p className="hero-desc-animated">
            <AnimatedText text={t.heroSubtitle} delayOffset={0.6} />
          </p>

          <div className="hero-buttons animated-fade-in delay-btn">
            <Link to="/pakalpojumi" className="btn-primary-lg">
              {t.heroBtnPrimary}
            </Link>
            <Link to="/kontakti" className="btn-secondary-lg">
              {t.heroBtnSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* Machinery Section */}
      <section className="machinery-section">
        <div className="section-container">
          <div className="section-header-left reveal-on-scroll">
            <h2>
              <AnimatedText text={t.servicesTitle} />
            </h2>
            <p>{t.servicesSubtitle}</p>
          </div>

          <div className="machinery-grid">
            <div className="machinery-card reveal-on-scroll delay-1">
              <div className="img-holder">
                <img 
                  src="https://www.ecobaltiavide.lv/wp-content/uploads/2026/04/Buvgruzu-konteinera-bilde-600x600.png" 
                  alt={t.card1Title} 
                />
              </div>
              <div className="machinery-info">
                <h3>{t.card1Title}</h3>
                <p>{t.card1Desc}</p>
              </div>
            </div>

            <div className="machinery-card reveal-on-scroll delay-2">
              <div className="img-holder">
                <img 
                  src="https://kravu-mednieki.lv/wp-content/uploads/2026/08/kraveji-1024.webp" 
                  alt={t.card2Title} 
                />
              </div>
              <div className="machinery-info">
                <h3>{t.card2Title}</h3>
                <p>{t.card2Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Callout */}
      <section className="cta-banner reveal-on-scroll">
        <div className="cta-container">
          <h2>
            <AnimatedText text={t.ctaTitle} />
          </h2>
          <p>{t.ctaSubtitle}</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;