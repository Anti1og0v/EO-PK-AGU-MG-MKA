import React, { useEffect, useRef, useState } from "react";
import "./Scientificactivity.css";

export default function Scientificactivity() {
  const [visibleArr, setVisibleArr] = useState([]);
  const refsArr = useRef([]);

  const files = [
    {
      title: "Документ 1",
      description: "Подробное описание первого документа...",
      url: "",
    },
    {
      title: "Документ 2",
      description: "Подробное описание второго документа...",
      url: "",
    },
    {
      title: "Документ 3",
      description: "Третий документ с подробным описанием...",
      url: "",
    },
    {
      title: "Документ 4",
      description: "Описание четвёртого документа...",
      url: "",
    },
    {
      title: "Документ 5",
      description: "Подробное описание первого документа...",
      url: "",
    },
    {
      title: "Документ 6",
      description: "Подробное описание второго документа...",
      url: "",
    },
    {
      title: "Документ 7",
      description: "Третий документ с подробным описанием...",
      url: "",
    },
    {
      title: "Документ 8",
      description: "Описание четвёртого документа...",
      url: "",
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

  return (
    <div className="downloads-bg">
      <div className="downloads-header fade-in">
        <h1 className="downloads-title">Скачать документы</h1>
        <div className="downloads-divider"></div>
        <p className="downloads-description">
          Здесь вы найдёте все необходимые PDF-файлы и документы для скачивания.
        </p>
      </div>

      <div className="downloads-container">
        {files.map((file, index) => (
          <div
            key={index}
            className={`download-item ${visibleArr[index] ? "fade-in" : ""}`}
            ref={(el) => (refsArr.current[index] = el)}
          >
            <div className="download-item__content">
              <h2 className="download-item__title">{file.title}</h2>
              <p className="download-item__description">{file.description}</p>
            </div>
            <a
              className="download-item__btn"
              href={file.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Скачать
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
