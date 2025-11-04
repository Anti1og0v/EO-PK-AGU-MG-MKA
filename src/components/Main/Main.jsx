import { useEffect, useState } from "react";
import "./Main.css";

export default function Main({ isBgActive, onRequestClick, onRequestHover, onRequestUnhover }) {
  const [appeared, setAppeared] = useState(false);

  useEffect(() => {
    setTimeout(() => setAppeared(true), 80);
  }, []);

  return (
    <section className={`hero-blackpage${isBgActive ? " hover-bg" : ""}`}>
      <div className="hero-blackpage__bg1"></div>
      <div className="hero-blackpage__bg2"></div>
      <div className={`hero-blackpage__container${appeared ? " enter-appear" : ""}`}>
        <div className="hero-blackpage__left">
          <div className="hero-blackpage__seed">
            Новый уровень управления
          </div>
          <h1 className="hero-blackpage__title">
            Автономный разум орбит
          </h1>
          <p className="hero-blackpage__subtitle">
            «Экспериментальный программный комплекс для автономного
            группового управления многоспутниковыми группировками» <br />
            Инновационное решение для управления спутниковыми <br />
            кластерами дистанционного зондирования Земли с минимальным
            участием наземного сегмента.
          </p>
          <div className="hero-blackpage__actions">
            <a
              className="nav-main__btn"
              href="#"
              onMouseEnter={onRequestHover}
              onMouseLeave={onRequestUnhover}
              onClick={e => {
                e.preventDefault();
                onRequestClick();
              }}
            >
              Оставить заявку
            </a>
            <a className="hero-blackpage__doc doc-dropdown-btn" href="#">
              Подробнее о возможностях
              <span className="doc-arrow">&#9660;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
