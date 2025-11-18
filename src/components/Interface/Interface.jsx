import React, { useState } from "react";
import "./Interface.css";

export default function SpecifySection() {
  const [activeTab, setActiveTab] = useState("technical");
  const [activeImageIndex, setActiveImageIndex] = useState({
    technical: 0,
    operational: 0,
    analytics: 0,
  });
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const tabImages = {
    technical: [
      "/EO-PK-AGU-MG-MKA/assets/technical1.webp",
      "/EO-PK-AGU-MG-MKA/assets/technical2.webp",
      "/EO-PK-AGU-MG-MKA/assets/technical3.webp",
      "/EO-PK-AGU-MG-MKA/assets/technical4.webp",
    ],
    operational: [
      "/EO-PK-AGU-MG-MKA/assets/operational1.webp",
      "/EO-PK-AGU-MG-MKA/assets/operational2.webp",
      "/EO-PK-AGU-MG-MKA/assets/operational3.webp",
    ],
    analytics: [
      "/EO-PK-AGU-MG-MKA/assets/analytics1.webp",
      "/EO-PK-AGU-MG-MKA/assets/analytics2.webp",
      "EO-PK-AGU-MG-MKA/assets/analytics3.webp",
      "/EO-PK-AGU-MG-MKA/assets/analytics4.webp",

    ],
  };

  const tabs = [
    {
      id: "technical",
      icon: "▼",
      title: "Техническая инфраструктура",
      description:
        "Конфигурирование устройств и режимов работы. Каталоги, параметры и схемы, определяющие структуру и возможности комплекса.",
    },
    {
      id: "operational",
      icon: "■",
      title: "Операционное управление",
      description:
        "Рабочие интерфейсы, инструменты визуализации и процессное моделирование для управления группой МКА.",
    },
    {
      id: "analytics",
      icon: "▲",
      title: "Аналитика и результат",
      description:
        "Таблицы событий, метрики и журналы заявок, отражающие процесс и итоги работы в системе.",
    },
  ];

  const performImageTransition = (updateFn) => {
    setIsTransitioning(true);
    setTimeout(() => {
      updateFn();
      setIsTransitioning(false);
    }, 300);
  };

  const handleTabClick = (tabId) => {
    if (tabId === activeTab || isTransitioning) return;
    
    performImageTransition(() => {
      setActiveTab(tabId);
      setActiveImageIndex((prev) => ({
        ...prev,
        [tabId]: 0,
      }));
    });
  };

  const handlePrevImage = () => {
    if (isTransitioning) return;
    performImageTransition(() => {
      setActiveImageIndex((prev) => ({
        ...prev,
        [activeTab]:
          (prev[activeTab] - 1 + tabImages[activeTab].length) %
          tabImages[activeTab].length,
      }));
    });
  };

  const handleNextImage = () => {
    if (isTransitioning) return;
    performImageTransition(() => {
      setActiveImageIndex((prev) => ({
        ...prev,
        [activeTab]: (prev[activeTab] + 1) % tabImages[activeTab].length,
      }));
    });
  };

  const handleLightboxPrev = (e) => {
    e.stopPropagation();
    if (isTransitioning) return;
    performImageTransition(() => {
      setActiveImageIndex((prev) => ({
        ...prev,
        [activeTab]:
          (prev[activeTab] - 1 + tabImages[activeTab].length) %
          tabImages[activeTab].length,
      }));
    });
  };

  const handleLightboxNext = (e) => {
    e.stopPropagation();
    if (isTransitioning) return;
    performImageTransition(() => {
      setActiveImageIndex((prev) => ({
        ...prev,
        [activeTab]: (prev[activeTab] + 1) % tabImages[activeTab].length,
      }));
    });
  };

  const currentImages = tabImages[activeTab];
  const currentImageIndex = activeImageIndex[activeTab];
  const currentImageSrc = currentImages[currentImageIndex];

  return (
    <div className="specify-section">
      <h1 className="specify-title">
        Демонстрация интерфейса системы
      </h1>
      <div className="specify-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`specify-tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => handleTabClick(tab.id)}
            disabled={isTransitioning}
          >
            <span className="tab-icon">{tab.icon}</span>
            <h3 className="tab-title">{tab.title}</h3>
            <p className="tab-description">{tab.description}</p>
          </button>
        ))}
      </div>
      <div className="specify-preview-wrapper">
        <button 
          className="nav-arrow nav-prev" 
          onClick={handlePrevImage}
          disabled={isTransitioning}
        >
          ❮
        </button>
        <div className="specify-preview">
          <div
            className={`preview-bg bg-technical ${
              activeTab === "technical" ? "visible" : ""
            }`}
          ></div>
          <div
            className={`preview-bg bg-operational ${
              activeTab === "operational" ? "visible" : ""
            }`}
          ></div>
          <div
            className={`preview-bg bg-analytics ${
              activeTab === "analytics" ? "visible" : ""
            }`}
          ></div>
          <div
            className={`preview-screen ${
              ["technical", "operational", "analytics"].includes(activeTab)
                ? "visible"
                : ""
            }`}
          >
            <div
              className="preview-container"
              onClick={() => {
                if (currentImageIndex !== 0 && !isTransitioning) {
                  setIsLightboxOpen(true);
                }
              }}
              style={currentImageIndex === 0 ? { cursor: "default" } : {}}
            >
              <img
                key={`${activeTab}-${currentImageIndex}`}
                src={currentImageSrc}
                alt="Interface"
                className={`preview-image${
                  isTransitioning ? " preview-image-leave" : ""
                }`}
              />
              <div className="preview-overlay">
                <svg
                  className="magnifying-glass"
                  viewBox="0 0 24 24"
                  width="64"
                  height="64"
                  style={currentImageIndex === 0 ? { opacity: 0 } : {}}
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="6"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <line
                    x1="14"
                    y1="14"
                    x2="20"
                    y2="20"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="image-counter">
            {currentImageIndex + 1} / {currentImages.length}
          </div>
        </div>
        <button 
          className="nav-arrow nav-next" 
          onClick={handleNextImage}
          disabled={isTransitioning}
        >
          ❯
        </button>
      </div>
      {isLightboxOpen && (
        <div className="lightbox-overlay" onClick={() => setIsLightboxOpen(false)}>
          <div
            className="lightbox-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={() => setIsLightboxOpen(false)}
            >
              ✕
            </button>
            <button 
              className="lightbox-arrow lightbox-prev" 
              onClick={handleLightboxPrev}
              disabled={isTransitioning}
            >
              ❮
            </button>
            <img
              key={`lightbox-${activeTab}-${currentImageIndex}`}
              src={currentImageSrc}
              alt="Fullscreen"
              className={`lightbox-image${
                isTransitioning ? " lightbox-image-leave" : ""
              }`}
            />
            <button 
              className="lightbox-arrow lightbox-next" 
              onClick={handleLightboxNext}
              disabled={isTransitioning}
            >
              ❯
            </button>
            <div className="lightbox-counter">
              {currentImageIndex + 1} / {currentImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
