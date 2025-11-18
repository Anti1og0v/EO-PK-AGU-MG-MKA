import React, { useEffect, useState, useRef } from "react";
import "./Process.css";

const steps = [
  {
    number: 1,
    title: "Оператор запускает систему",
    text: "Система разворачивается на сервере и готова к работе после быстрой установки и инициализации базы данных.",
  },
  {
    number: 2,
    title: "Работа через веб-интерфейс",
    text: "Оператор авторизуется в удобной панели управления через браузер и получает доступ ко всем функциям.",
  },
  {
    number: 3,
    title: "Выбор объекта и регистрация событий",
    text: "Все основные действия (выбор объекта, регистрация или редактирование событий, мониторинг) выполняются через интуитивный интерфейс.",
  },
  {
    number: 4,
    title: "Автоматизация рутинных задач",
    text: "Система автоматически фиксирует важные события, ведёт логи и отслеживает ключевые показатели эффективности.",
  },
  {
    number: 5,
    title: "Быстрая интеграция",
    text: "Легко подключается к другим сервисам, поддерживает расширение и подключение дополнительного оборудования.",
  },
  {
    number: 6,
    title: "Безопасность и контроль",
    text: "Доступ защищён, все действия операторов фиксируются для прозрачности и безопасной работы.",
  }
];

export default function Process() {
  const circleNumberRef = useRef(null);
  const headerSectionRef = useRef(null);
  const cardRefs = useRef([]);
  const [circleNumberVisible, setCircleNumberVisible] = useState(false);
  const [headerSectionVisible, setHeaderSectionVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);

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

    const circleCleanup = observeVisibility(circleNumberRef, setCircleNumberVisible, 0.5);
    const headerCleanup = observeVisibility(headerSectionRef, setHeaderSectionVisible, 0.8);

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
        className={`process-circle-number ${circleNumberVisible ? 'fade-in-opacity' : 'fade-in-opacity-hidden'}`}
        ref={circleNumberRef}
      >
        3
      </div>

      <div
        className={`process-header-section ${headerSectionVisible ? 'fade-in-opacity' : 'fade-in-opacity-hidden'}`}
        ref={headerSectionRef}
      >
        <h1 className="process-title">Процесс работы системы</h1>
        <div className="process-divider"></div>
        <p className="process-description-text">
          Пошаговая схема показывает, как легко начать работу с продуктом: от инициализации и простого входа до полной автоматизации задач, интеграции с внешними сервисами и обеспечения безопасности всех операций.
        </p>
      </div>

      <div className="process-cards-grid">
        {steps.map((card, idx) => (
          <div
            className={`process-card ${visibleCards.includes(idx) ? 'fade-in' : 'fade-in-hidden'}`}
            key={idx}
            ref={(el) => (cardRefs.current[idx] = el)}
          >
            <div className="process-card-corner-img-wrapper">
              <span className="process-step-number">{card.number}</span>
              <span className="process-corner-circle"></span>
            </div>
            <h3 className="process-card-title">{card.title}</h3>
            <p className="process-card-text">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
