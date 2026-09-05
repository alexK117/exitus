import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import { companyData } from './data/companyData';
import './css/global.css';

const App: React.FC = () => {
  return (
    <div className="app-layout">
      <Header phone={companyData.phone} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage company={companyData} />} />
          <Route path="/pakalpojumi" element={<ServicesPage />} />
          <Route path="/kontakti" element={<ContactPage phone={companyData.phone} />} />
        </Routes>
      </main>
      <Footer company={companyData} />
    </div>
  );
};

export default App;