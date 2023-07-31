import { useEffect } from "react";
import "./slide.css";

const Slide = () => {
  useEffect(() => {
    // Start animations after a delay (e.g., 4000ms = 4 seconds)
    setTimeout(() => {
      document.querySelector(".slide__container").style.animation =
        "slideOutContainer 1s forwards";
      document.querySelectorAll(".texts").forEach((text) => {
        text.style.animation = "fadeAndSlideUp 1s forwards";
      });
    }, 4000); // Adjust the delay as needed (4000ms = 4 seconds)
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
