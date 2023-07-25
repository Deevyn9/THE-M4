import { useEffect } from "react";
import "./slide.css";

const Slide = () => {
  useEffect(() => {
    // Start slide-out and text animation
    setTimeout(() => {
      document.querySelectorAll("slides").forEach((slide, index) => {
        slide.style.animation = `slideOut 0.7s forwards ease-in-out ${
          index * 0.7
        }s`;
      });

      document.querySelectorAll(".texts").forEach((text, index) => {
        text.style.animation = `riseAndFade 0.7s ease-in-out forwards ${
          index * 0.7
        }s`;
      });
    }, 4000); // Adjust the delay as needed (3000ms = 3 seconds)
  }, []);

  return (
    <div className="slide__container">
      <div className="slides out purple"></div>
      <div className="slides out blue"></div>
      <div className="slides out yellow"></div>
      <h1>
        <div className="texts meet">THE</div>
        <div className="texts talk">BMW</div>
        <div className="texts know">M4</div>
      </h1>
    </div>
  );
};

export default Slide;
