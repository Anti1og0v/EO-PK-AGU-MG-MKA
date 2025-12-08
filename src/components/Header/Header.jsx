import { useEffect, useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header({ onRequestClick, onRequestHover, onRequestUnhover }) {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const [scrolled, setScrolled] = useState(false);
  const [showLang, setShowLang] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [appear, setAppear] = useState(false);

  useEffect(() => {
    setTimeout(() => setAppear(true), 70);
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const langs = [
    { code: "ru", label: "RU" },
    { code: "en", label: "EN" },
    { code: "zh", label: "中文" }
  ];

  const handleLang = (code) => {
    i18n.changeLanguage(code);
    setShowLang(false);
    setBurgerOpen(false);
    setTimeout(() => setMobileMenuVisible(false), 450);
  };

  const handleBurgerClick = () => {
    if (!mobileMenuVisible) {
      setMobileMenuVisible(true);
      setTimeout(() => setBurgerOpen(true), 10);
    } else {
      setBurgerOpen(false);
      setTimeout(() => setMobileMenuVisible(false), 450);
    }
  };

  const handleMobileNavClick = (path) => {
    setBurgerOpen(false);
    setTimeout(() => {
      setMobileMenuVisible(false);
      navigate(path);
    }, 450);
  };

  const currentLang = i18n.language?.split("-")[0] || "ru";

  return (
    <header
      className={
        `nav-header` +
        (scrolled ? " nav-header--scrolled" : "") +
        (appear ? " header-appear" : "")
      }
    >
      <div className="nav-header__container">
        <div
          className="nav-header__logo"
          style={{ cursor: "pointer" }}
          onClick={() =>
            (window.location.href = "https://litsam.ru/index.php/ru/homepage-ru")
          }
        >
          {t("header.logo")}
        </div>

        <nav className="nav-header__nav">
          <Link to="/">{t("header.home")}</Link>
          <Link to="/functional">{t("header.functional")}</Link>
          <Link to="/activity">{t("header.activity")}</Link>
        </nav>

        <div className="nav-header__auth">
          <div
            className="lang-min"
            onMouseEnter={() => setShowLang(true)}
            onMouseLeave={() => setShowLang(false)}
          >
            <span className="lang-min-btn">
              {langs.find(l => l.code === currentLang)?.label || "RU"}
            </span>
            <div className={`lang-min-drop${showLang ? " show" : ""}`}>
              {langs.map((l) => (
                <div
                  key={l.code}
                  className={
                    "lang-min-item" + (l.code === currentLang ? " active" : "")
                  }
                  onClick={() => handleLang(l.code)}
                >
                  {l.label}
                </div>
              ))}
            </div>
          </div>

          <Link to="/request" className="nav-header__btn">
            {t("header.request")}
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
            <Link to="/" onClick={() => handleMobileNavClick("/")}>
              {t("header.home")}
            </Link>
            <Link
              to="/functional"
              onClick={() => handleMobileNavClick("/functional")}
            >
              {t("header.functional")}
            </Link>
            <Link
              to="/activity"
              onClick={() => handleMobileNavClick("/activity")}
            >
              {t("header.activity")}
            </Link>

            <div className="lang-min-mobile">
              {langs.map((l) => (
                <div
                  key={l.code}
                  className={
                    "lang-min-item" + (l.code === currentLang ? " active" : "")
                  }
                  onClick={() => handleLang(l.code)}
                >
                  {l.label}
                </div>
              ))}
            </div>

            <Link
              to="/request"
              className="nav-header__btn mobile"
              onClick={() => handleMobileNavClick("/request")}
            >
              {t("header.request")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
