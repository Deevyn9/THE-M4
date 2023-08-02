import { useEffect, useState } from "react";
import "./Transparent.css";
import TestImage from "../../assets/test.svg";

const Transparent = () => {
  const [imageWidth, setImageWidth] = useState(80);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const initialWidth = 80;
      const reducedWidth = 10;

      if (scrollPosition <= window.innerHeight) {
        const newWidth =
          initialWidth -
          (scrollPosition / window.innerHeight) * (initialWidth - reducedWidth);
        setImageWidth(newWidth);
      } else {
        const newWidth =
          reducedWidth +
          ((scrollPosition - window.innerHeight) / window.innerHeight) *
            (initialWidth - reducedWidth);
        setImageWidth(newWidth);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="div__scroll transparent">
      <div className="main__header" style={{ width: `${imageWidth}vw` }}>
        <img src={TestImage} alt="test" />
      </div>
    </div>
  );
};

export default Transparent;
