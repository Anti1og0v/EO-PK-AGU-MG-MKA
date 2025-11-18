import React, { useState, useRef } from "react";
import Header from "../components/Header/Header.jsx";
import Main from "../components/Main/Main.jsx";
import Description from "../components/Description/Description.jsx";
import Management from "../components/Management/Management.jsx";
import Process from "../components/Process/Process.jsx";
import Interface from "../components/Interface/Interface.jsx";
import Footer from "../components/Footer/Footer.jsx";

import "./Home.css";

function slowScrollTo(targetY, duration = 1150) {
  const startY = window.scrollY;
  const changeY = targetY - startY;
  const startTime = performance.now();

  function animateScroll(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + changeY * easeInOutQuad(progress));
    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  }

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  requestAnimationFrame(animateScroll);
}

export default function Home() {
  const descriptionRef = useRef(null);


  const handleScrollToDescription = () => {
    if (descriptionRef.current) {
      const offset = 85;
      const y =
        descriptionRef.current.getBoundingClientRect().top +
        window.scrollY -
        offset;
      slowScrollTo(y, 1550);
    }
  };

  return (
    <div>

      <Main

        onDescriptionScroll={handleScrollToDescription}
      />
      <Description ref={descriptionRef} />
      <Management />
      <Process />
      <Interface />

    </div>
  );
}
