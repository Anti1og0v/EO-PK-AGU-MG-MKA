import React, { useEffect, useRef, useState } from "react";
import "./Scientificactivity.css";

export default function Scientificactivity() {
  const [visibleArr, setVisibleArr] = useState([]);
  const refsArr = useRef([]);

  const files = [
    {
      title: "Документ 1",
      description: "Подробное описание первого документа...",
      url: "/EO-PK-AGU-MG-MKA/assets/doc.pdf",
      fileName: "document1.pdf",
    },
    {
      title: "Документ 2",
      description: "Подробное описание второго документа...",
      url: "/assets/pdf/document2.pdf",
      fileName: "document2.pdf",
    },
    {
      title: "Документ 3",
      description: "Третий документ с подробным описанием...",
      url: "/assets/pdf/document3.pdf",
      fileName: "document3.pdf",
    },
    {
      title: "Документ 4",
      description: "Описание четвёртого документа...",
      url: "/assets/pdf/document4.pdf",
      fileName: "document4.pdf",
    },
    {
      title: "Документ 5",
      description: "Подробное описание пятого документа...",
      url: "/assets/pdf/document5.pdf",
      fileName: "document5.pdf",
    },
    {
      title: "Документ 6",
      description: "Подробное описание шестого документа...",
      url: "/assets/pdf/document6.pdf",
      fileName: "document6.pdf",
    },
    {
      title: "Документ 7",
      description: "Седьмой документ с подробным описанием...",
      url: "/assets/pdf/document7.pdf",
      fileName: "document7.pdf",
    },
    {
      title: "Документ 8",
      description: "Описание восьмого документа...",
      url: "/assets/pdf/document8.pdf",
      fileName: "document8.pdf",
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
            <button
              className="download-item__btn"
              onClick={() => handleDownload(file.url, file.fileName)}
            >
              Скачать
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
