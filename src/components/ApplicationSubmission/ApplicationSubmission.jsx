import React, { useEffect, useRef, useState } from "react";
import "./ApplicationSubmission.css";

export default function ApplicationSubmission() {
  const imgRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.33 }
    );
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="application-submission-section">
      <div className="application-submission-content">
        <h1 className="application-submission-title">
          <span className="application-submission-title-accent">
            Автоматизируйте управление
          </span>{" "}
          и получайте результат уже сегодня
        </h1>

        <div className="application-submission-image-wrapper">
          <img
            ref={imgRef}
            className={
              "application-submission-image" +
              (inView ? " application-submission-image--float" : "")
            }
            src="/my-product-site/assets/monitor.png"
            alt="Product promo"
          />
        </div>
        <p className="application-submission-text">
          Хотите обсудить проект?{" "}
          <span className="application-submission-accent">Оставьте заявку</span>, и мы<br />
          свяжемся с вами лично.
        </p>
        <button className="application-submission-button">Оставить заявку</button>
      </div>
    </section>
  );
}
