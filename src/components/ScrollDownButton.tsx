import React from "react";
import "./ScrollDownButton.css";

interface ScrollDownButtonProps {
  targetId: string;
  text?: string;
}

const ScrollDownButton: React.FC<ScrollDownButtonProps> = ({
  targetId,
  text = "Scroll Down",
}) => {
  const handleClick = () => {
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <button className="scroll-button" onClick={handleClick}>
      <span className="scroll-text">{text}</span>
      <span className="arrow"></span>
    </button>
  );
};

export default ScrollDownButton;
