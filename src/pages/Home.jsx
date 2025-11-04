import { useState } from "react";
import Header from '../components/Header/Header.jsx';
import Main from '../components/Main/Main.jsx';
import Description from '../components/Description/Description.jsx';
import Process from '../components/Process/Process.jsx';
import ApplicationSubmission from '../components/ApplicationSubmission/ApplicationSubmission.jsx';
import './Home.css';

export default function Home({ onScrollRequest, descriptionRef }) {
  const [isBgActive, setIsBgActive] = useState(false);

  const handleRequestAction = () => {
    setIsBgActive(true);
    setTimeout(() => setIsBgActive(false), 900);
  };

  const handleRequestHover = () => setIsBgActive(true);
  const handleRequestUnhover = () => setIsBgActive(false);

  return (
    <div>
      <Header
        onRequestClick={handleRequestAction}
        onRequestHover={handleRequestHover}
        onRequestUnhover={handleRequestUnhover}
      />
      <Main
        isBgActive={isBgActive}
        onRequestClick={handleRequestAction}
        onRequestHover={handleRequestHover}
        onRequestUnhover={handleRequestUnhover}
      />
      <Description ref={descriptionRef} />
    </div>
  );
}
