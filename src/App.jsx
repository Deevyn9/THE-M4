// import { useState } from 'react'
import Slide from "./components/Slide Screen/Slide";
import Transparent from "./components/Transparent/Transparent";
import BMW from "./assets/bmw logo.png";

import "./App.css";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Slide />
      <div className="bmw__logo">
        <img src={BMW} alt="bmw logo" />
      </div>
      <Hero />
      <Transparent />
      <div className="div__scroll red"></div>
      <div className="div__scroll yellow"></div>
      <div className="div__scroll blue"></div>
    </div>
  );
}

export default App;
