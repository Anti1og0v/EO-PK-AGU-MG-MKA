import React, { useEffect, useRef, useState } from "react";
import "./FunctionalDescription.css";
import { useTranslation } from "react-i18next";

export default function FunctionalDescription() {
  const { t } = useTranslation();

  const descriptions = [
    { key: "block1" },
    { key: "block2" },
    { key: "block3" },
    { key: "block4" },
    { key: "block5" },
    { key: "block6" },
  ];

  const [visibleArr, setVisibleArr] = useState(
    descriptions.map(() => false)
  );
  const refsArr = useRef([]);

  useEffect(() => {
    refsArr.current = refsArr.current.slice(0, descriptions.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = refsArr.current.indexOf(entry.target);
            if (index !== -1) {
              setVisibleArr((prev) => {
                const arr = [...prev];
                arr[index] = true;
                return arr;
              });
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    refsArr.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refsArr.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [descriptions.length]);

  return (
    <div className="fd-bg">
      <div className="fd-header fade-in">
        <h1 className="fd-title">{t("functional.title")}</h1>
        <div className="fd-divider"></div>
      </div>
      <div className="fd-container">
        {descriptions.map((item, index) => (
          <div
            key={item.key}
            className={`fd-item ${visibleArr[index] ? "fade-in" : ""}`}
            ref={(el) => (refsArr.current[index] = el)}
          >
            <h2 className="fd-item-title">
              {t(`functional.blocks.${item.key}.title`)}
            </h2>
            <p
              className="fd-item-text"
              style={{ whiteSpace: "pre-line" }}
            >
              {t(`functional.blocks.${item.key}.text`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
