import { useEffect, useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ onRequestClick, onRequestHover, onRequestUnhover }) {
  const navigate = useNavigate();
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

  const handleMobileNavClick = (path) => {
    setBurgerOpen(false);
    setTimeout(() => {
      setMobileMenuVisible(false);
      navigate(path);
    }, 450);
  };

  return (
    <header className={`nav-header${scrolled ? " nav-header--scrolled" : ""}${appear ? " header-appear" : ""}`}>
      <div className="nav-header__container">
        <div
          className="nav-header__logo"
          style={{ cursor: "pointer" }}
          onClick={() => window.location.href = "https://litsam.ru/index.php/ru/homepage-ru"}
        >
          Литсам
        </div>
        <nav className="nav-header__nav">
          <Link to="/">Главная</Link>
          <Link to="/functional">Функциональные описания</Link>
          <Link to="/activity">Научная деятельность</Link>
        </nav>
        <div className="nav-header__auth">
          <div
            className="lang-min"
            onMouseEnter={() => setShowLang(true)}
            onMouseLeave={() => setShowLang(false)}
          >
          </div>
          <Link to="/request" className="nav-header__btn">
            Оставить заявку
          </Link>
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
            <Link
              to="/"
              onClick={() => handleMobileNavClick("/")}
            >
              Главная
            </Link>
            <Link
              to="/functional"
              onClick={() => handleMobileNavClick("/functional")}
            >
              Функциональные описания
            </Link>
            <Link
              to="/activity"
              onClick={() => handleMobileNavClick("/activity")}
            >
              Научная деятельность
            </Link>
            <Link
              to="/request"
              className="nav-header__btn mobile"
              onClick={() => handleMobileNavClick("/request")}
            >
              Оставить заявку
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
