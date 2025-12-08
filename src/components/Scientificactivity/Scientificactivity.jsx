import React, { useEffect, useRef, useState } from "react";
import "./Scientificactivity.css";
import { useTranslation } from "react-i18next";

export default function Scientificactivity() {
  const { t } = useTranslation();

  const [visibleArr, setVisibleArr] = useState([]);
  const refsArr = useRef([]);

  const files = [
    {
      key: "file1",
      url: "/EO-PK-AGU-MG-MKA/assets/2025-immod-124-138.pdf",
      fileName: "2025-immod-124-138.pdf",
    },
    
  ];

  useEffect(() => {
    refsArr.current = refsArr.current.slice(0, files.length);
    setVisibleArr(files.map(() => false));

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
  }, [files.length]);

  const handleDownload = (url, fileName) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="downloads-bg">
      <div className="downloads-header fade-in">
        <h1 className="downloads-title">{t("downloads.title")}</h1>
        <div className="downloads-divider"></div>
        <p className="downloads-description">
          {t("downloads.description")}
        </p>
      </div>
      <div className="downloads-container">
        {files.map((file, index) => (
          <div
            key={file.key}
            className={`download-item ${visibleArr[index] ? "fade-in" : ""}`}
            ref={(el) => (refsArr.current[index] = el)}
          >
            <div className="download-item__content">
              <h2 className="download-item__title">
                {t(`downloads.files.${file.key}.title`)}
              </h2>
              <p className="download-item__description">
                {t(`downloads.files.${file.key}.description`)}
              </p>
            </div>
            <button
              className="download-item__btn"
              onClick={() => handleDownload(file.url, file.fileName)}
            >
              {t("downloads.downloadButton")}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
