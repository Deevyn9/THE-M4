// import { useState } from 'react'
import Slide from "./components/Slide Screen/Slide";

import "./App.css";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Slide />
      <div className="bmw__logo">Logo</div>
      <Hero />
      <div className="div__scroll transparent">BMW M4</div>
      <div className="div__scroll red"></div>
      <div className="div__scroll yellow"></div>
      <div className="div__scroll blue"></div>
    </div>
  );
}

export default App;
