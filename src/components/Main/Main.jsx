import { useEffect, useState, useRef } from "react";
import "./Main.css";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Main({
  isBgActive,
  onRequestClick,
  onRequestHover,
  onRequestUnhover,
  onDescriptionScroll
}) {
  const [appeared, setAppeared] = useState(false);
  const [bg1Loaded, setBg1Loaded] = useState(false);
  const [bg2Loaded, setBg2Loaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => setAppeared(true), 80);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);

        if (entry.isIntersecting) {
          if (!bg2Loaded) {
            const img2 = new Image();
            img2.src = "/EO-PK-AGU-MG-MKA/assets/cosmos.webp";
            img2.onload = () => setBg2Loaded(true);
          }
          if (!bg1Loaded) {
            const img1 = new Image();
            img1.src = "/EO-PK-AGU-MG-MKA/assets/cosmosblack6.webp";
            img1.onload = () => setBg1Loaded(true);
          }
        }
      },
      { threshold: [0, 0.15] }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [bg1Loaded, bg2Loaded]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !isInView) return;
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const scrolled = Math.max(0, -sectionTop);
      const progress = Math.min(1, scrolled / (sectionHeight * 0.5));
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className={`hero-blackpage${isBgActive ? " hover-bg" : ""}`}
      style={{
        "--scroll-progress": scrollProgress,
      }}
    >
      <div
        className={`hero-blackpage__bg1${bg1Loaded ? " loaded fade-in" : ""}`}
      />
      <div
        className={`hero-blackpage__bg2${bg2Loaded ? " loaded fade-in" : ""}`}
      />

      <div className={`hero-blackpage__container${appeared ? " enter-appear" : ""}`}>
        <div className="hero-blackpage__left">
          <div
            className="hero-blackpage__seed fade-in-item"
            style={{ "--delay": "0.2s" }}
          >
            {t("main.seed")}
          </div>

          <h1
            className="hero-blackpage__title fade-in-item"
            style={{ "--delay": "0.4s" }}
          >
            {t("main.title")}
          </h1>

          <div
            className="hero-blackpage__subtitle fade-in-item"
            style={{ "--delay": "0.6s" }}
          >
            {t("main.subtitle")}
          </div>

          <div
            className="hero-blackpage__focus-title fade-in-item"
            style={{ "--delay": "0.8s" }}
          >
            {t("main.focusTitle")}
          </div>

          <ul
            className="hero-blackpage__focus-list fade-in-item"
            style={{ "--delay": "1s" }}
          >
            <li>{t("main.focus1")}</li>
            <li>{t("main.focus2")}</li>
            <li>{t("main.focus3")}</li>
            <li>{t("main.focus4")}</li>
          </ul>

          <div
            className="hero-blackpage__actions fade-in-item"
            style={{ "--delay": "1.2s" }}
          >
            <Link to="/request" className="nav-main__btn">
              {t("header.request")}
            </Link>
            <a
              className="doc-dropdown-btn"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (onDescriptionScroll) onDescriptionScroll();
              }}
            >
              {t("main.more")}
              <span className="doc-arrow">▼</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
