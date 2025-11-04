import React from "react";
import "./Description.css";

const cards = [
  {
    title: "База данных",
    text: "Хранение и организация информации о спутниках, их орбитах и состоянии в реальном времени.",
    img: '/my-product-site/assets/Descfirst.png',
  },
  {
    title: "Интерфейс управления",
    text: "Удобная панель для взаимодействия с системой и мониторинга работы многоспутниковой группировки.",
    img: '/my-product-site/assets/Descsecond.png',
  },
  {
    title: "Движок моделирования",
    text: "Имитационное моделирование для тестирования сценариев и оптимизации параметров системы управления.",
    img: '/my-product-site/assets/Descthird.png',
  },
  {
    title: "Алгоритмическое ПО",
    text: "Библиотека с классическими подходами, нейросетями и ИИ для оптимального управления спутниками.",
    img: '/my-product-site/assets/Descfourth.png',
  }
];

export default function Description() {
  return (
    <div className="description-bg">
      <div className="top-line">
        <div className="top-line-glow"></div>
        <div className="top-line-strip"></div>
      </div>

      <div className="circle-number">1</div>

      <div className="header-section">
        <h1 className="title">Архитектура и назначение продукта</h1>
        <div className="divider"></div>
        <p className="description-text">
          Программный комплекс предназначен для автономного группового управления многоспутниковыми группировками малых космических аппаратов наблюдения Земли и околоземного космоса с минимальным участием наземного комплекса управления.
        </p>
      </div>

      <div className="cards-grid">
        {cards.map((card, idx) => (
          <div className="card" key={idx}>
            <div className="card-corner-img-wrapper">
              <img src={card.img} alt={`card-icon-${idx + 1}`} className="card-corner-img"/>
              <span className="corner-circle"></span>
            </div>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-text">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

