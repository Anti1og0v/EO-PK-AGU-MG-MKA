import React, { forwardRef } from 'react';
import './Description.css';

const Description = forwardRef(function Description(props, ref) {
  return (
    <>
      <div className="underline"></div>
      <section ref={ref} className="desc-blockchain">
        <svg
          className="desc-blockchain__dashed-circles"
          width="100%"
          height="100%"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle
            className="desc-blockchain__dashed-big"
            cx="500"
            cy="500"
            r="470"
            stroke="#6c4fff"
            strokeWidth="2.3"
            fill="none"
            strokeDasharray="29 51"
          />
          <circle
            className="desc-blockchain__dashed-mid"
            cx="500"
            cy="500"
            r="360"
            stroke="#a89fff"
            strokeWidth="2"
            fill="none"
            strokeDasharray="14 27"
          />
        </svg>
        <div className="desc-blockchain__container">
          <div className="desc-blockchain__imagewrap">
            <img src="/assets/sputnik.png" alt="Blockchain Satellite" className="desc-blockchain__img"/>
          </div>
          <div className="desc-blockchain__textwrap">
            <h2 className="desc-blockchain__title">
              Что представляет собой данный<br/>
              <span className="desc-blockchain__title-accent">программный комплекс?</span>
            </h2>
            <div className="desc-blockchain__text">
              <p>
                Программный комплекс для автономного группового управления многоспутниковыми группировками малых космических аппаратов наблюдения Земли — интеллектуальная система, позволяющая спутникам самостоятельно планировать съемки, распределять задачи внутри кластера и обмениваться данными без постоянного контроля с Земли.
              </p>
              <p>
                Комплекс реализует распределённую архитектуру управления, в которой каждый спутник оснащён специализированным программным модулем для принятия решений и взаимодействия с другими аппаратами.
              </p>
              <p>
                Система поддерживает координированное выполнение заданий по наблюдению, динамически перестраивается при изменении конфигурации группировки, автоматически выявляет и перераспределяет ресурсы в ответ на возникновение внештатных ситуаций.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default Description;
