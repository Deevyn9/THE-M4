import "./slide.css";

const Slide = () => {
  return (
    <div className="slide__container">
      <div className="slides purple"></div>
      <div className="slides blue"></div>
      <div className="slides yellow"></div>
      <h1>
        <div className="texts meet">THE</div>
        <div className="texts talk">BMW</div>
        <div className="texts know">M4</div>
      </h1>
    </div>
  );
};

export default Slide;
