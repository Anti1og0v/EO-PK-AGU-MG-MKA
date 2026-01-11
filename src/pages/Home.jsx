import React, { useRef } from "react";
import Header from "../components/Header/Header.jsx";
import Main from "../components/Main/Main.jsx";
import Description from "../components/Description/Description.jsx";
import Management from "../components/Management/Management.jsx";
import Process from "../components/Process/Process.jsx";
import Interface from "../components/Interface/Interface.jsx";
import Footer from "../components/Footer/Footer.jsx";
import ContactsMap from "../components/ContactsMap/ContactsMap.jsx";

import "./Home.css";

function smoothScrollTo(targetY, duration = 1600) {
  const startY = window.scrollY || window.pageYOffset;
  const distance = targetY - startY;
  const startTime = performance.now();

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutQuad(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

export default function Home() {
  const descriptionRef = useRef(null);

  const handleScrollToDescription = () => {
    if (!descriptionRef.current) return;

    const offset = 40; 
    const rect = descriptionRef.current.getBoundingClientRect();
    const targetY = rect.top + window.scrollY - offset;

    smoothScrollTo(targetY, 1800);
  };

  return (
    <div>

      <Main onDescriptionScroll={handleScrollToDescription} />

      <Description ref={descriptionRef} />

      <Management />
      <Process />
      <Interface />
      <ContactsMap />
    </div>
  );
}
