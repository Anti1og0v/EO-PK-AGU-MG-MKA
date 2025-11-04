import { useEffect, useState } from "react";
import "./Header.css";

export default function Header({ onRequestClick, onRequestHover, onRequestUnhover }) {
  const [scrolled, setScrolled] = useState(false);
  const [showLang, setShowLang] = useState(false);
  const [currentLang, setCurrentLang] = useState("RU");
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [appear, setAppear] = useState(false);

  useEffect(() => {
    setTimeout(() => setAppear(true), 70); 
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleBurgerClick = () => {
    if (!mobileMenuVisible) {
      setMobileMenuVisible(true);
      setTimeout(() => setBurgerOpen(true), 10);
    } else {
      setBurgerOpen(false);
      setTimeout(() => setMobileMenuVisible(false), 450); 
    }
  };

  const langs = [
    { code: "RU", label: "RU" },
    { code: "EN", label: "EN" },
    { code: "中文", label: "中文" }
  ];

  const handleLang = (code) => {
    setCurrentLang(code);
    setShowLang(false);
    setBurgerOpen(false);
    setTimeout(() => setMobileMenuVisible(false), 450);
  };

  return (
    <header className={`nav-header${scrolled ? " nav-header--scrolled" : ""}${appear ? " header-appear" : ""}`}>
      <div className="nav-header__container">
        <div className="nav-header__logo">Литсам</div>
        <nav className="nav-header__nav">
          <a href="#">Главная</a>
          <a href="#">Новости</a>
          <a href="#">О нас</a>
          <a href="#">Проекты</a>
          <a href="#">Контакты</a>
        </nav>
        <div className="nav-header__auth">
          <div
            className="lang-min"
            onMouseEnter={() => setShowLang(true)}
            onMouseLeave={() => setShowLang(false)}
          >
            <span className="lang-min-btn">{currentLang}</span>
            <div className={`lang-min-drop${showLang ? " show" : ""}`}>
              {langs.map((l) => (
                <div
                  key={l.code}
                  className={`lang-min-item${l.code === currentLang ? " active" : ""}`}
                  onClick={() => handleLang(l.code)}
                >
                  {l.label}
                </div>
              ))}
            </div>
          </div>
          <a
            href="#"
            className="nav-header__btn"
            onMouseEnter={onRequestHover}
            onMouseLeave={onRequestUnhover}
            onClick={e => {
              e.preventDefault();
              onRequestClick();
            }}
          >
            Оставить заявку
          </a>
        </div>
        <div
          className={`burger${burgerOpen ? " open" : ""}`}
          onClick={handleBurgerClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {mobileMenuVisible && (
        <div className={`mobile-menu${burgerOpen ? " show" : ""}`}>
          <nav className="mobile-menu__nav">
            <a href="#">Главная</a>
            <a href="#">Новости</a>
            <a href="#">О нас</a>
            <a href="#">Проекты</a>
            <a href="#">Контакты</a>
            <div className="lang-min-mobile">
              {langs.map((l) => (
                <div
                  key={l.code}
                  className={`lang-min-item${l.code === currentLang ? " active" : ""}`}
                  onClick={() => handleLang(l.code)}
                >
                  {l.label}
                </div>
              ))}
            </div>
            <a
              href="#"
              className="nav-header__btn mobile"
              onClick={e => {
                e.preventDefault();
                onRequestClick();
              }}
            >
              Оставить заявку
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
