import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import '../css/Header.css';

const Header: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="site-header">
      <div className="header-container">
        {/* 1. EXITUS СЛЕВА */}
        <Link to="/" className="logo-link">
          EXITUS
        </Link>

        {/* 2. Правая группа: Кнопка звонка + Бургер близко друг к другу */}
        <div className="header-right-group">
          <a href="tel:+37120445883" className="phone-visible-btn" aria-label="Call us">
            <span className="phone-icon">📞</span>
            <span className="phone-text">+371 20445883</span>
          </a>

          <button 
            className={`burger-btn ${isMenuOpen ? 'open' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Выпадашка */}
        <div className={`mobile-dropdown ${isMenuOpen ? 'show' : ''}`}>
          <nav className="header-nav">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>{t.navHome}</Link>
            <Link to="/pakalpojumi" onClick={() => setIsMenuOpen(false)}>{t.navServices}</Link>
            <Link to="/kontakti" onClick={() => setIsMenuOpen(false)}>{t.navContacts}</Link>
          </nav>

          <div className="lang-switcher">
            {(['lv', 'ru', 'en'] as const).map((l) => (
              <button
                key={l}
                className={`lang-btn ${lang === l ? 'active' : ''}`}
                onClick={() => {
                  setLang(l);
                  setIsMenuOpen(false);
                }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;