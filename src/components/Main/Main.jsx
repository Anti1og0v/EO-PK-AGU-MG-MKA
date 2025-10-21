import React, { useRef } from 'react';
import './Main.css';

const STAR_COUNT = 240;
function randomStars(count) {
  return Array.from({length: count}).map((_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: `${Math.random() * 2 + 0.8}px`,
    color: [
      '#fff', '#bfc2ff', '#e5e7ff', '#e4caff', '#d5faff', '#c8c6ff', '#bcf3f6', '#ffd8fa'
    ][Math.floor(Math.random() * 8)],
    delay: `${Math.random() * 2.2}s`,
    key: i
  }));
}

export default function Main({ onScrollRequest }) {
  const starsRef = useRef(randomStars(STAR_COUNT));

  return (
    <main className="main-bg">
      <div className="blur-lamps-center">
        <div className="blur-lamp blur-lamp--blue" />
        <div className="blur-lamp blur-lamp--purple" />
      </div>
      <div className="main__stars">
        {starsRef.current.map(star =>
          <div
            key={star.key}
            className="star"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              background: star.color,
              animationDelay: star.delay
            }}
          />
        )}
      </div>
      <div className="main__content">
        <h1 className="main__title">
          <span className="main__title-gradient main__title--blue">Автономный раз</span>
          <span className="main__title-gradient main__title--purple">ум орбит</span>
        </h1>
        <div className="main__subtitle ">
        «Экспериментальный программный комплекс для автономного группового управления многоспутниковыми группировками»<br />
          Инновационное решение для управления спутниковыми кластерами дистанционного <br />
          зондирования Земли с минимальным участием наземного сегмента
        </div>
        <div className="main__actions">
          <button
            className="main__btn main__btn--outline"
            onClick={onScrollRequest}
          >
            Подробнее
          </button>
        </div>
      </div>
    </main>
  );
}
