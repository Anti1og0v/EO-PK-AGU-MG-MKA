import React, { useState, useRef, useEffect } from "react";
import "./Interface.css";
import { useTranslation } from "react-i18next";

export default function SpecifySection() {
  const titleRef = useRef(null);
  const tabsRef = useRef(null);
  const previewRef = useRef(null);

  const [titleVisible, setTitleVisible] = useState(false);
  const [tabsVisible, setTabsVisible] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    function obs(ref, cb, threshold = 0.3) {
      if (!ref.current) return;
      const o = new window.IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) cb(true);
        },
        { threshold }
      );
      o.observe(ref.current);
      return () => o.disconnect();
    }

    const c1 = obs(titleRef, setTitleVisible, 1);
    const c2 = obs(tabsRef, setTabsVisible, 1);
    const c3 = obs(previewRef, setPreviewVisible, 0.4);

    return () => {
      c1 && c1();
      c2 && c2();
      c3 && c3();
    };
  }, []);

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
      "/EO-PK-AGU-MG-MKA/assets/analytics3.webp",
      "/EO-PK-AGU-MG-MKA/assets/analytics4.webp",
    ],
  };

  const tabs = [
    {
      id: "technical",
      icon: "▼",
      titleKey: "interface.tabs.technical.title",
      descKey: "interface.tabs.technical.description",
    },
    {
      id: "operational",
      icon: "■",
      titleKey: "interface.tabs.operational.title",
      descKey: "interface.tabs.operational.description",
    },
    {
      id: "analytics",
      icon: "▲",
      titleKey: "interface.tabs.analytics.title",
      descKey: "interface.tabs.analytics.description",
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
        [activeTab]:
          (prev[activeTab] + 1) % tabImages[activeTab].length,
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
        [activeTab]:
          (prev[activeTab] + 1) % tabImages[activeTab].length,
      }));
    });
  };

  const currentImages = tabImages[activeTab];
  const currentImageIndex = activeImageIndex[activeTab];
  const currentImageSrc = currentImages[currentImageIndex];

  return (
    <div className="specify-section">
      <h1
        ref={titleRef}
        className={`specify-title ${
          titleVisible ? "fade-in" : "fade-in-hidden"
        }`}
      >
        {t("interface.title")}
      </h1>

      <div
        ref={tabsRef}
        className={`specify-tabs ${
          tabsVisible ? "fade-in" : "fade-in-hidden"
        }`}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`specify-tab ${
              activeTab === tab.id ? "active" : ""
            }`}
            onClick={() => handleTabClick(tab.id)}
            disabled={isTransitioning}
          >
            <span className="tab-icon">{tab.icon}</span>
            <h3 className="tab-title">{t(tab.titleKey)}</h3>
            <p className="tab-description">{t(tab.descKey)}</p>
          </button>
        ))}
      </div>

      <div
        ref={previewRef}
        className={`specify-preview-wrapper ${
          previewVisible ? "fade-in" : "fade-in-hidden"
        }`}
      >
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
              ["technical", "operational", "analytics"].includes(
                activeTab
              )
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
              style={
                currentImageIndex === 0 ? { cursor: "default" } : {}
              }
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
                  style={
                    currentImageIndex === 0 ? { opacity: 0 } : {}
                  }
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
        <div
          className="lightbox-overlay"
          onClick={() => setIsLightboxOpen(false)}
        >
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
