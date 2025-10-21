import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [mobileMenuOpen]);

  useEffect(() => {
    let lastScroll = window.scrollY;
    const onScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll <= 20) {
        setShowHeader(true);
        lastScroll = currentScroll;
        return;
      }
      if (currentScroll > lastScroll) {
        setShowHeader(false);
      } else {
        setShowHeader(true);  
      }
      lastScroll = currentScroll;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header${showHeader ? '' : ' header--hidden'}`}>
      <div className="header__container">
        <div className="header__logo">
          <span className="logo__text">ЛИТСАМ</span>
        </div>
        <div className="header__right">
          <nav className="header__nav">
            <a href="#home" className="nav__link">Главная</a>
            <a href="#docs" className="nav__link">Новости</a>
            <a href="#blog" className="nav__link">О нас</a>
            <a href="#pricing" className="nav__link">Проекты</a>
            <a href="#company" className="nav__link">Контакты</a>
          </nav>
          <div className="header__divider" />
          <div className="header__actions">
            <button className="btn btn--demo">Оставить заявку</button>
          </div>
        </div>
        <button
          className={`header__burger ${mobileMenuOpen ? 'header__burger--open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className="header__underline"></div>
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'mobile-nav-overlay--open' : ''}`}>
        <nav className="mobile-nav__links">
          <a href="#home" className="nav__linkk" onClick={()=>setMobileMenuOpen(false)}>Главная</a>
          <a href="#docs" className="nav__linkk" onClick={()=>setMobileMenuOpen(false)}>Новости</a>
          <a href="#blog" className="nav__linkk" onClick={()=>setMobileMenuOpen(false)}>О нас</a>
          <a href="#pricing" className="nav__linkk" onClick={()=>setMobileMenuOpen(false)}>Проекты</a>
          <a href="#company" className="nav__linkk" onClick={()=>setMobileMenuOpen(false)}>Контакты</a>
          <button className="btn btn--demo" onClick={()=>setMobileMenuOpen(false)}>Оставить заявку</button>
        </nav>
      </div>
    </header>
  );
}
