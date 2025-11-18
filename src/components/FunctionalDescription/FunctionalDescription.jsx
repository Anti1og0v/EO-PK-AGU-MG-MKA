import React, { useEffect, useRef, useState } from "react";
import "./FunctionalDescription.css";

export default function FunctionalDescription() {
  const descriptions = [
    {
      title: "Описание 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem ipsum dolor sit amet, consectetur adipiscing elit..elit...",
    },
    {
      title: "Описание 2",
      text: "Duis aute irure dolor in reprehenderit... Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...Duis aute irure dolor in reprehenderit...",
    },
    {
      title: "Описание 3",
      text: "Sed ut perspiciatis unde omnis iste natus error...",
    },
    {
      title: "Описание 4",
      text: "Nemo enim ipsam voluptatem quia voluptas...",
    },
  ];

  const [visibleArr, setVisibleArr] = useState(descriptions.map(() => false));
  const refsArr = useRef([]);

  useEffect(() => {
    refsArr.current = refsArr.current.slice(0, descriptions.length);

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
  }, [descriptions.length]);

  return (
    <div className="fd-bg">
      <div className="fd-header fade-in">
        <h1 className="fd-title">Функциональные описания</h1>
        <div className="fd-divider"></div>
      </div>
      <div className="fd-container">
        {descriptions.map((item, index) => (
          <div
            key={index}
            className={`fd-item ${visibleArr[index] ? "fade-in" : ""}`}
            ref={(el) => (refsArr.current[index] = el)}
          >
            <h2 className="fd-item-title">{item.title}</h2>
            <p className="fd-item-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
