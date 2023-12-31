import { useEffect, useState } from "react";
import "./Transparent.css";
// import TestImage from "../../assets/test.svg";

const Transparent = () => {
  const [imageWidth, setImageWidth] = useState(7);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const initialWidth = 7;
      const reducedWidth = 1;

      if (scrollPosition <= window.innerHeight) {
        // Calculate the new width while scrolling down within the first 100vh
        const newWidth =
          initialWidth -
          (scrollPosition / window.innerHeight) * (initialWidth - reducedWidth);
        setImageWidth(newWidth);
        setScrollDirection("down");
      } else if (
        scrollPosition > window.innerHeight &&
        scrollDirection === "down"
      ) {
        // Keep the reduced width constant while scrolling between 100vh to 200vh
        setImageWidth(reducedWidth);
      } else {
        // Calculate the new width while scrolling back up after 200vh
        const newWidth =
          reducedWidth +
          ((window.innerHeight * 2 - scrollPosition) / window.innerHeight) *
            (initialWidth - reducedWidth);
        setImageWidth(newWidth);
        setScrollDirection("up");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="div__scroll transparent">
      <div className="main__header" style={{ fontSize: `${imageWidth}vw` }}>
        <div className="parent">
          <h1>THE BMW M4</h1>
        </div>
      </div>
    </div>
  );
};

export default Transparent;
