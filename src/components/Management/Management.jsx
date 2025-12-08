import React, { useEffect, useState, useRef } from "react";
import "./Management.css";
import { useTranslation } from "react-i18next";

const codeChars = "01";

const cards = [
  {
    key: "card1",
    img: "/EO-PK-AGU-MG-MKA/assets/Management1.webp",
  },
  {
    key: "card2",
    img: "/EO-PK-AGU-MG-MKA/assets/Management2.webp",
  },
  {
    key: "card3",
    img: "/EO-PK-AGU-MG-MKA/assets/Management3.webp",
  },
  {
    key: "card4",
    img: "/EO-PK-AGU-MG-MKA/assets/Management4.webp",
  },
];

function FallingCode() {
  const [chars, setChars] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    const createChar = () => {
      if (windowWidth <= 1300) return;

      const viewportWidth = windowWidth;
      const centerWidth = 1200;
      const centerStart = (viewportWidth - centerWidth) / 2;
      const centerEnd = centerStart + centerWidth;

      let randomLeft;
      if (Math.random() > 0.5) {
        randomLeft = Math.random() * centerStart;
      } else {
        randomLeft = centerEnd + Math.random() * (viewportWidth - centerEnd);
      }

      const randomChar = codeChars[Math.floor(Math.random() * codeChars.length)];
      const duration = 8 + Math.random() * 6;
      const delay = Math.random() * 2;

      const newChar = {
        id: Math.random(),
        left: randomLeft,
        char: randomChar,
        duration,
        delay,
      };

      setChars((prev) => [...prev, newChar]);

      setTimeout(() => {
        setChars((prev) => prev.filter((c) => c.id !== newChar.id));
      }, (duration + delay) * 1200);
    };

    const interval = setInterval(createChar, 200);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <div className="falling-code-container">
      {chars.map((charObj) => (
        <div
          key={charObj.id}
          className="falling-char"
          style={{
            left: `${charObj.left}px`,
            "--duration": `${charObj.duration}s`,
            "--delay": `${charObj.delay}s`,
          }}
        >
          {charObj.char}
        </div>
      ))}
    </div>
  );
}

export default function Management() {
  const circleNumberRef = useRef(null);
  const headerSectionRef = useRef(null);
  const cardRefs = useRef([]);
  const [circleNumberVisible, setCircleNumberVisible] = useState(false);
  const [headerSectionVisible, setHeaderSectionVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    function observeVisibility(ref, setVisible, threshold = 0.8) {
      if (!ref.current) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        },
        { threshold }
      );

      observer.observe(ref.current);

      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    }

    const headerCleanup = observeVisibility(
      headerSectionRef,
      setHeaderSectionVisible,
      0.8
    );

    return () => {
      headerCleanup && headerCleanup();
    };
  }, []);

  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(entry.target);
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.7 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) cardObserver.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) cardObserver.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="management-bg">
      <FallingCode />

      <div
        className="management-circle-number"
        ref={circleNumberRef}
      >
        2
      </div>

      <div
        className={`management-header-section ${
          headerSectionVisible ? "fade-in-opacity" : "fade-in-opacity-hidden"
        }`}
        ref={headerSectionRef}
      >
        <h1 className="management-title">
          {t("management.title")}
        </h1>
        <div className="management-divider"></div>
        <p className="management-description-text">
          {t("management.description")}
        </p>
      </div>

      <div className="management-cards-grid">
        {cards.map((card, idx) => (
          <div
            className={`management-card ${
              visibleCards.includes(idx) ? "fade-in" : "fade-in-hidden"
            }`}
            key={card.key}
            ref={(el) => (cardRefs.current[idx] = el)}
          >
            <div className="management-card-corner-img-wrapper">
              <img
                src={card.img}
                alt={`card-icon-${idx + 1}`}
                className="management-card-corner-img"
              />
              <span className="management-corner-circle"></span>
            </div>
            <h3 className="management-card-title">
              {t(`management.cards.${card.key}.title`)}
            </h3>
            <p className="management-card-text">
              {t(`management.cards.${card.key}.text`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
