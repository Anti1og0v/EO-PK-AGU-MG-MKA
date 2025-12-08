import React, { useEffect, useState, useRef } from "react";
import "./Process.css";
import { useTranslation } from "react-i18next";

const steps = [
  { key: "step1", number: 1 },
  { key: "step2", number: 2 },
  { key: "step3", number: 3 },
  { key: "step4", number: 4 },
  { key: "step5", number: 5 },
  { key: "step6", number: 6 }
];

export default function Process() {
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

    const circleCleanup = observeVisibility(
      circleNumberRef,
      setCircleNumberVisible,
      0.5
    );
    const headerCleanup = observeVisibility(
      headerSectionRef,
      setHeaderSectionVisible,
      0.8
    );

    return () => {
      circleCleanup && circleCleanup();
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
      { threshold: 0.8 }
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
    <div className="process-bg">
      <div
        className={`process-circle-number ${
          circleNumberVisible ? "fade-in-opacity" : "fade-in-opacity-hidden"
        }`}
        ref={circleNumberRef}
      >
        3
      </div>

      <div
        className={`process-header-section ${
          headerSectionVisible ? "fade-in-opacity" : "fade-in-opacity-hidden"
        }`}
        ref={headerSectionRef}
      >
        <h1 className="process-title">{t("process.title")}</h1>
        <div className="process-divider"></div>
        <p className="process-description-text">
          {t("process.description")}
        </p>
      </div>

      <div className="process-cards-grid">
        {steps.map((card, idx) => (
          <div
            className={`process-card ${
              visibleCards.includes(idx) ? "fade-in" : "fade-in-hidden"
            }`}
            key={card.key}
            ref={(el) => (cardRefs.current[idx] = el)}
          >
            <div className="process-card-corner-img-wrapper">
              <span className="process-step-number">{card.number}</span>
              <span className="process-corner-circle"></span>
            </div>
            <h3 className="process-card-title">
              {t(`process.steps.${card.key}.title`)}
            </h3>
            <p className="process-card-text">
              {t(`process.steps.${card.key}.text`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
