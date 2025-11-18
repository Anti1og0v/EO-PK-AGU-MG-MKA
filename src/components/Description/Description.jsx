import React, { useEffect, useRef, useState, forwardRef } from "react";
import "./Description.css";

const Description = forwardRef((props, ref) => {
  const topLineRef = useRef(null);
  const [topLineVisible, setTopLineVisible] = useState(false);

  const cardRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState([]);

  const circleNumberRef = useRef(null);
  const [circleNumberVisible, setCircleNumberVisible] = useState(false);

  const headerSectionRef = useRef(null);
  const [headerSectionVisible, setHeaderSectionVisible] = useState(false);

  const cards = [
    {
      title: "База данных",
      text: "Хранение и организация информации о спутниках, их орбитах и состоянии в реальном времени.",
      img: "/EO-PK-AGU-MG-MKA/assets/Descfirst.webp",
    },
    {
      title: "Интерфейс управления",
      text: "Удобная панель для взаимодействия с системой и мониторинга работы многоспутниковой группировки.",
      img: "/EO-PK-AGU-MG-MKA/assets/Descsecond.webp",
    },
    {
      title: "Движок моделирования",
      text: "Имитационное моделирование для тестирования сценариев и оптимизации параметров системы управления.",
      img: "/EO-PK-AGU-MG-MKA/assets/Descthird.webp",
    },
    {
      title: "Алгоритмическое ПО",
      text: "Библиотека с классическими подходами, нейросетями и ИИ для оптимального управления спутниками.",
      img: "/EO-PK-AGU-MG-MKA/assets/Descfourth.webp",
    },
  ];

  useEffect(() => {
    function observeVisibility(ref, setVisible, threshold = 1) {
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

    const topLineCleanup = observeVisibility(topLineRef, setTopLineVisible, 1);
    const circleCleanup = observeVisibility(circleNumberRef, setCircleNumberVisible, 0.5);
    const headerCleanup = observeVisibility(headerSectionRef, setHeaderSectionVisible, 0.8);

    return () => {
      topLineCleanup && topLineCleanup();
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
      { threshold: 1 }
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
    <div className="description-bg" ref={ref}>
      <div className={`top-line ${topLineVisible ? "visible" : ""}`} ref={topLineRef}>
        <div className={`top-line-glow ${topLineVisible ? "visible" : ""}`}></div>
        <div className="top-line-strip"></div>
      </div>

      <div
        className={`circle-number ${circleNumberVisible ? "fade-in-opacity" : "fade-in-opacity-hidden"}`}
        ref={circleNumberRef}
      >
        1
      </div>

      <div
        className={`header-section ${headerSectionVisible ? "fade-in-opacity" : "fade-in-opacity-hidden"}`}
        ref={headerSectionRef}
      >
        <h1 className="title">Архитектура и назначение продукта</h1>
        <div className="divider"></div>
        <p className="description-text">
          Программный комплекс предназначен для автономного группового управления многоспутниковыми
          группировками малых космических аппаратов наблюдения Земли и околоземного космоса с минимальным
          участием наземного комплекса управления.
        </p>
      </div>

      <div className="cards-grid">
        {cards.map((card, idx) => (
          <div
            className={`card ${visibleCards.includes(idx) ? "fade-in" : "fade-in-hidden"}`}
            key={idx}
            ref={(el) => (cardRefs.current[idx] = el)}
          >
            <div className="card-corner-img-wrapper">
              <img src={card.img} alt={`card-icon-${idx + 1}`} className="card-corner-img" />
              <span className="corner-circle"></span>
            </div>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-text">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Description;
