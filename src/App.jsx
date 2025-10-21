import React, { useRef, useEffect } from 'react';
import Home from './pages/Home.jsx';
import './app.css';

function App() {
  const descriptionRef = useRef(null);

  const handleScrollToDesc = () => {
    descriptionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <Home
      onScrollRequest={handleScrollToDesc}
      descriptionRef={descriptionRef}
    />
  );
}

export default App;
