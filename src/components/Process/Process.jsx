import React, { useRef, useEffect, useState } from 'react';
import './Process.css';

const steps = [
  {
    icon: "/my-product-site/assets/process1.png",
    text: "Оператор запускает систему",
    desc: "Система разворачивается на сервере и готова к работе после быстрой установки и инициализации базы данных.",
  },
  {
    icon: "/my-product-site/assets/process3.png",
    text: "Работа через веб-интерфейс",
    desc: "Оператор авторизуется в удобной панели управления через браузер и получает доступ ко всем функциям.",
  },
  {
    icon: "/my-product-site/assets/process2.png",
    text: "Выбор объекта и регистрация событий",
    desc: "Все основные действия (выбор объекта, регистрация или редактирование событий, мониторинг) выполняются через интуитивный интерфейс.",
  },
  {
    icon: "/my-product-site/assets/process4.png",
    text: "Автоматизация рутинных задач",
    desc: "Система автоматически фиксирует важные события, ведёт логи и отслеживает ключевые показатели эффективности.",
  },
  {
    icon: "/my-product-site/assets/process5.png",
    text: "Быстрая интеграция",
    desc: "Легко подключается к другим сервисам, поддерживает расширение и подключение дополнительного оборудования.",
  },
  {
    icon: "/my-product-site/assets/process6.png",
    text: "Безопасность и контроль",
    desc: "Доступ защищён, все действия операторов фиксируются для прозрачности и безопасной работы.",
  }
];

export default function Process() {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="process-underline"></div>
      <section className="process">
        <div className="process__container" ref={containerRef}>
          <h2 className="process__title">Как это работает?</h2>
          <div className="process__grid">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className={`process__cell ${visible ? 'process__cell--animated' : ''} ${
                  idx > 2 ? "process__cell--bottom" : ""
                } ${[2, 5].includes(idx) ? "process__cell--right" : ""}`}
                style={{
                  animationDelay: visible ? `${0.24 + idx * 0.19}s` : '0s'
                }}
              >
                <div className="process__count">{`0${idx + 1}`}</div>
                <div className="process__icon"><img src={s.icon} alt="" /></div>
                <div className="process__text">{s.text}</div>
                <div className="process__desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
