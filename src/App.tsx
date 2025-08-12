import React, { useState, useEffect } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
  const [mode, setMode] = useState<'dark' | 'light'>('dark');

  const handleModeChange = () => {
    setMode(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <Navigation mode={mode} modeChange={handleModeChange} />
      <FadeIn transitionDuration={700}>
        <Main />
        <Expertise />
        <Timeline />
        <Project />
        <Contact />
      </FadeIn>
    </div>
  );
}

export default App;
